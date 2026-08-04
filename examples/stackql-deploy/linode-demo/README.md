# linode-demo stackql-deploy stack

An example [stackql-deploy](https://stackql-deploy.io) stack for the `linode`
StackQL provider. It provisions:

- `example_instance` - a Debian 12 compute instance (`g6-nanode-1` in `dev`/`sit`,
  `g6-standard-1` in `prd`)
- `example_volume` - a block storage volume (10GB in `dev`/`sit`, 20GB in `prd`)

## Prerequisites

- [stackql-deploy](https://github.com/stackql/stackql-deploy-rs) installed
- `LINODE_TOKEN` exported in your shell (provider auth is read from the process
  environment by the StackQL server, not from stack variables)

## Usage

Template variables (region, root password) are fed from the environment via
`-e` flags or an `--env-file`:

```bash
export LINODE_TOKEN=<your token>

# deploy (idempotent - safe to re-run)
stackql-deploy build examples/stackql-deploy/linode-demo dev \
  -e LINODE_REGION=us-ord \
  -e LINODE_ROOT_PASSWORD='<a strong password>'

# test - verifies all resources are in their desired state
stackql-deploy test examples/stackql-deploy/linode-demo dev \
  -e LINODE_REGION=us-ord \
  -e LINODE_ROOT_PASSWORD='<a strong password>'

# teardown - deletes the instance and volume
stackql-deploy teardown examples/stackql-deploy/linode-demo dev \
  -e LINODE_REGION=us-ord \
  -e LINODE_ROOT_PASSWORD='<a strong password>'
```

The nanode and 10GB volume in the `dev` environment cost well under USD 0.01
per hour - tear the stack down when you are done.

## How it works

Each resource `.iql` file carries the full lifecycle as anchored queries:

- `/*+ exists */` - a `SELECT` returning the resource id if it exists; the id
  is captured for later blocks
- `/*+ create */` - an `INSERT` (columns are the native Linode API body
  properties - the provider uses the naive request body translation, so no
  `data__` prefixes)
- `/*+ statecheck */` - polls until the instance is `running` / the volume is
  `active`
- `/*+ exports */` - exports `instance_id`, `instance_ipv4` and `volume_id`
  for downstream resources or stack outputs
- `/*+ delete */` - deletes by the Linode numeric id captured in the exports
