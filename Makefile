# Makefile for the linode StackQL provider.
#
# Run under a POSIX shell (WSL, Linux or macOS) with node >= 20, python3 and
# a `stackql` binary either in the repo root or on the PATH.
# `LINODE_TOKEN` is sourced from .env (see .env.example) for live targets.

SHELL := /bin/bash

PROVIDER_NAME := linode
SPEC_URL      := https://github.com/linode/linode-api-docs/raw/refs/heads/development/openapi.json
DOWNLOAD_DIR  := provider-dev/downloaded
SOURCE_DIR    := provider-dev/source
CONFIG_DIR    := provider-dev/config
OPENAPI_DIR   := provider-dev/openapi
REGISTRY_ROOT := $(CURDIR)/$(OPENAPI_DIR)
SERVER_PORT   := 5444

# stackql binary: repo root first, then PATH
STACKQL_BIN := $(shell [ -f ./stackql ] && echo ./stackql || command -v stackql)

LOAD_ENV = if [ -f .env ]; then set -a; . ./.env; set +a; fi

.DEFAULT_GOAL := help

.PHONY: help deps download split normalize mappings provider test docs website \
        start-server stop-server server-status test-meta-routes \
        smoke-test smoke-test-live clean all

help:
	@echo "linode StackQL provider - make targets:"
	@echo ""
	@echo "  make deps            install node dependencies (repo + website)"
	@echo "  make download        download and preprocess the Linode OpenAPI spec"
	@echo "  make split           split the spec into service-level specs"
	@echo "  make normalize       normalize the split specs (allOf flattening etc.)"
	@echo "  make mappings        regenerate all_services.csv (preserves existing mappings)"
	@echo "  make provider        generate the StackQL provider extension docs"
	@echo "  make test            start server, test all meta routes, stop server"
	@echo "  make smoke-test      live smoke test against the locally generated provider"
	@echo "  make smoke-test-live live smoke test against the latest published provider"
	@echo "  make docs            generate the Docusaurus docs from the provider"
	@echo "  make website         build the docs microsite"
	@echo "  make all             everything: deps through website"
	@echo ""
	@echo "  make start-server / stop-server / server-status"

deps:
	npm install
	cd website && yarn install

download:
	rm -f $(DOWNLOAD_DIR)/*
	curl -sL $(SPEC_URL) -o $(DOWNLOAD_DIR)/openapi.json
	python3 provider-dev/scripts/remove_api_version.py

split:
	rm -rf $(SOURCE_DIR)/*
	npm run split -- \
	  --provider-name $(PROVIDER_NAME) \
	  --api-doc $(DOWNLOAD_DIR)/openapi_api_version_removed.json \
	  --svc-discriminator path \
	  --output-dir $(SOURCE_DIR) \
	  --overwrite \
	  --svc-name-overrides '{"network_transfer": "networking"}'

normalize:
	npm run normalize -- --api-dir $(SOURCE_DIR)

mappings:
	npm run generate-mappings -- \
	  --input-dir $(SOURCE_DIR) \
	  --output-dir $(CONFIG_DIR)
	@echo ""
	@echo "Review $(CONFIG_DIR)/all_services.csv - any new (unmapped) operations need"
	@echo "stackql_resource_name / stackql_method_name / stackql_verb assigned, and"
	@echo "enveloped list responses need stackql_object_key set to \$$.data"

provider:
	rm -rf $(OPENAPI_DIR)/*
	npm run generate-provider -- \
	  --provider-name $(PROVIDER_NAME) \
	  --input-dir $(SOURCE_DIR) \
	  --output-dir $(OPENAPI_DIR)/src/$(PROVIDER_NAME) \
	  --config-path $(CONFIG_DIR)/all_services.csv \
	  --servers '[{"url": "https://api.linode.com/v4"}]' \
	  --provider-config '{"auth": {"credentialsenvvar": "LINODE_TOKEN","type": "bearer"}}' \
	  --service-config $(CONFIG_DIR)/service-config.json \
	  --naive-req-body-translate \
	  --overwrite
	python3 provider-dev/scripts/patch_provider_output.py

start-server:
	@$(LOAD_ENV); ./bin/start-server.sh --provider $(PROVIDER_NAME) --registry "$(REGISTRY_ROOT)" --port $(SERVER_PORT)

stop-server:
	@./bin/stop-server.sh --port $(SERVER_PORT) || true

server-status:
	@./bin/server-status.sh

test-meta-routes:
	node ./bin/test-meta-routes.cjs $(PROVIDER_NAME) --port $(SERVER_PORT)

# always restart the server around provider tests: a running server holds
# parsed provider docs in memory and will not see a regenerated provider
test: stop-server start-server
	sleep 3
	node ./bin/test-meta-routes.cjs $(PROVIDER_NAME) --port $(SERVER_PORT)
	$(MAKE) stop-server

smoke-test: stop-server start-server
	sleep 3
	node ./bin/smoke-test.mjs --port $(SERVER_PORT) || ($(MAKE) stop-server; exit 1)
	$(MAKE) stop-server

smoke-test-live: stop-server
	@$(LOAD_ENV); \
	  $(STACKQL_BIN) exec "registry pull $(PROVIDER_NAME)" && \
	  nohup $(STACKQL_BIN) --pgsrv.port=$(SERVER_PORT) srv > stackql-server.log 2>&1 & \
	  sleep 3
	node ./bin/smoke-test.mjs --live --port $(SERVER_PORT) || ($(MAKE) stop-server; exit 1)
	$(MAKE) stop-server

docs:
	rm -rf website/docs/*
	npm run generate-docs -- \
	  --provider-name $(PROVIDER_NAME) \
	  --provider-dir ./$(OPENAPI_DIR)/src/$(PROVIDER_NAME)/v00.00.00000 \
	  --output-dir ./website \
	  --provider-data-dir ./provider-dev/docgen/provider-data

website:
	cd website && yarn build

clean:
	rm -rf $(SOURCE_DIR)/* $(OPENAPI_DIR)/* website/build website/.docusaurus .stackql stackql-server.log

all: deps download split normalize mappings provider test docs website
	@echo ""
	@echo "Provider and website generated and tested. Run 'make smoke-test' for the"
	@echo "live API smoke test (creates and deletes a nanode and a 10GB volume)."
