# `linode` provider for [`stackql`](https://github.com/stackql/stackql)

This repository is used to generate and document the `linode` provider for StackQL, allowing you to query and manipulate Linode resources using SQL. The provider is built from the [Linode OpenAPI specification](https://github.com/linode/linode-api-docs) using the [`@stackql/provider-utils`](https://www.npmjs.com/package/@stackql/provider-utils) package.

## Prerequisites

- Node.js >= 20 and `npm` (and `yarn` for the docs site)
- Python 3 (spec preprocessing)
- GNU make and a POSIX shell (WSL, Linux or macOS)
- A `stackql` binary in the repo root or on the `PATH`
- A Linode API token in `LINODE_TOKEN` (put it in `.env` - see below) for live tests

Install dependencies:

```bash
make deps
```

Create a `.env` file in the repo root for anything that talks to the live API:

```
LINODE_TOKEN=your-token-here
```

## Provider development pipeline

`make all` runs the entire pipeline (deps, download, split, normalize, mappings, provider, meta-route tests, docs, website build). The individual steps are described below.

### 1. Download the OpenAPI spec

```bash
make download
```

Downloads the latest spec from the `development` branch of `linode/linode-api-docs` and preprocesses it (`provider-dev/scripts/remove_api_version.py` removes the `{apiVersion}` path parameter and strips CLI/OAuth boilerplate from descriptions), producing `provider-dev/downloaded/openapi_api_version_removed.json`.

### 2. Split into service specs

```bash
make split
```

Splits the monolithic spec into per-service specs in `provider-dev/source/`, discriminating on the first path segment (with `network_transfer` folded into `networking`).

### 3. Normalize

```bash
make normalize
```

Flattens `allOf` compositions, renames anonymous `oneOf`/`anyOf` variants, lifts path-level parameters and marks bare-array responses. This step supersedes the hand-written schema patch scripts (`update_linode_interfaces.py`, `update_managed_stats.py`) that earlier versions of this repo carried.

### 4. Generate mappings

```bash
make mappings
```

Regenerates `provider-dev/config/all_services.csv`, preserving all existing mappings and appending any new (unmapped) operations. For new rows, assign:

- `stackql_resource_name` - the resource the operation belongs to
- `stackql_method_name` - unique method name within the resource
- `stackql_verb` - `select` | `insert` | `update` | `replace` | `delete` | `exec`
- `stackql_object_key` - set to `$.data` for `select` methods whose response is the standard Linode envelope (`{data, page, pages, results}`); leave empty for single-object responses

Method names are user-facing (they surface in `EXEC` statements, `SHOW METHODS` and the docs), so they carry no HTTP plumbing and no resource-name repetition: selects are `get`/`list` (plus `list_by_<scope>` variants), mutations are `create`/`update`/`patch`/`delete`, and lifecycle operations are bare action verbs - `boot`, `shutdown`, `resize`, `reset_credentials`:

```sql
EXEC linode.linode.instances.shutdown @linodeId = '12345678';
```

> `EXEC` parameter values are always quoted strings, including numeric ids.

This CSV is the master mapping document - the intent over time is to add new services/resources/ops and remove deprecated ones, never to regenerate it from scratch.

### 5. Generate the provider

```bash
make provider
```

Generates the StackQL provider extension docs into `provider-dev/openapi/src/linode/v00.00.00000/`, wiring in:

- **Servers and auth** - `https://api.linode.com/v4`, bearer auth from `LINODE_TOKEN`
- **Pagination** (`provider-dev/config/service-config.json`, injected as `x-stackQL-config` in every service) - Linode's `page`/`pages` envelope drives the `page_number` pagination algorithm, so multi-page collections are traversed automatically
- **Naive request body translation** (`--naive-req-body-translate`) - `INSERT`/`UPDATE`/`REPLACE` columns are the native Linode API body property names (`label`, `region`, `type`, ...), not `data__`-prefixed

The target then runs `provider-dev/scripts/patch_provider_output.py`, which patches the generated docs to make `EXEC` lifecycle methods work with current stackql/any-sdk: integer path params are retyped to strings (any-sdk's EXEC validation does not accept the `integer` schema type), and the opaque `type: string` responses on action operations are rewritten to minimal object schemas (the EXEC planner needs a tabulatable response and resolves every supplied parameter against it). See the script docstring for details.

> **Predicate pushdown**: not wired in for this provider. Linode implements server-side filtering via the `X-Filter` HTTP request header, and any-sdk's `queryParamPushdown` can only emit query parameters (with OData filter syntax). `LIMIT` pushdown to `page_size` is also omitted because Linode rejects `page_size < 25`, which would break small `LIMIT` queries. Predicates are evaluated locally by StackQL, which is functionally equivalent.

### 6. Test the provider

```bash
make test
```

Starts a local StackQL server against the generated provider (`file://` registry over `provider-dev/openapi`), tests every meta route (services, resources, methods, describe), and stops the server.

> The server holds parsed provider docs in memory - always restart it (which `make test` does) after regenerating the provider.

For interactive exploration:

```bash
make start-server
stackql shell   # or connect any postgres client to localhost:5444
make stop-server
```

### 7. Smoke test (live API)

```bash
make smoke-test        # locally generated provider
make smoke-test-live   # latest published provider from the public registry
```

Runs `bin/smoke-test.mjs` against the live Linode API using `LINODE_TOKEN` from `.env`. It covers the critical read paths (account, regions, types, images, kernels - which also proves multi-page pagination - instances, volumes, object storage, firewalls) plus a full compute lifecycle - create a `g6-nanode-1` running Debian 12, wait for it to boot, `EXEC linode.linode.instances.shutdown`, wait for `offline`, `EXEC linode.linode.instances.boot`, wait for `running`, then delete - and a create/verify/delete cycle for a minimum-size 10GB volume. Resources exist for a few minutes; worst-case spend is well under USD 0.05 per run, and all mutations are cleaned up and verified in `finally` blocks.

### 8. Publish the provider

To publish the provider push the `linode` dir to `providers/src` in a feature branch of the [`stackql-provider-registry`](https://github.com/stackql/stackql-provider-registry). Follow the [registry release flow](https://github.com/stackql/stackql-provider-registry/blob/dev/docs/build-and-deployment.md).

Test the published provider from the dev registry:

```bash
export DEV_REG="{ \"url\": \"https://registry-dev.stackql.app/providers\" }"
stackql --registry="${DEV_REG}" shell
```

```sql
registry pull linode;
```

### 9. Generate and build the web docs

```bash
make docs      # generate docs from the provider into website/
make website   # build the Docusaurus site
```

The microsite is Docusaurus 3.10 using the shared StackQL provider-site configuration ([`stackql/docusaurus-config`](https://github.com/stackql/docusaurus-config)), vendored into `website/.shared-config/` at build time - see [website/README.md](website/README.md). Provider identity lives in `website/provider.js`; header content for the generated index page lives in `provider-dev/docgen/provider-data/`.

Deployment to [linode-provider.stackql.io](https://linode-provider.stackql.io) is via GitHub Pages on push to `main` (`.github/workflows/prod-web-deploy.yml`).

## Example queries

```sql
-- Get account information
SELECT company, country, balance, active_since
FROM linode.account.account;

-- List all Linode instances
SELECT id, label, region, status, type, ipv4
FROM linode.linode.instances;

-- Region capability audit
SELECT id, country, status
FROM linode.regions.regions;

-- Create a nanode (columns are native API body properties)
INSERT INTO linode.linode.instances (label, region, type, image, root_pass)
SELECT 'my-vm', 'us-ord', 'g6-nanode-1', 'linode/debian12', 'S3cureP@ssw0rd!';

-- Stop and start it (lifecycle operations are EXEC methods)
EXEC linode.linode.instances.shutdown @linodeId = '12345678';
EXEC linode.linode.instances.boot @linodeId = '12345678';

-- Delete it
DELETE FROM linode.linode.instances WHERE linodeId = 12345678;
```

## stackql-deploy example

An example [stackql-deploy](https://github.com/stackql/stackql-deploy-rs) stack (compute instance + block storage volume, with per-environment sizing and full lifecycle anchors) is in [examples/stackql-deploy/linode-demo](examples/stackql-deploy/linode-demo).

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
