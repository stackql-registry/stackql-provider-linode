#!/usr/bin/env node

// Smoke test for the linode StackQL provider.
//
// Runs against a live Linode account (LINODE_TOKEN must be set in the
// environment of the StackQL server this script connects to). By default it
// expects a server running the locally generated provider (local registry,
// version v00.00.00000); with --live it expects a server running the latest
// published provider from the public registry.
//
// Coverage: critical read paths (account, regions, types, images, kernels for
// pagination, instances, volumes, object storage) plus a full compute
// lifecycle - create a g6-nanode-1 running Debian 12, wait for it to boot,
// EXEC shutdown, EXEC boot, then delete - and a create/verify/delete cycle
// for a minimum-size (10GB) block storage volume. The EXEC steps exercise the
// lifecycle method routes (linode.linode.instances.shutdown / .boot).
// Resources exist for a few minutes at most; worst-case spend is well under
// USD 0.05 per run. All mutations are cleaned up in a finally block and
// deletion is verified.
//
// Usage: node bin/smoke-test.mjs [--live] [--skip-mutations] [--port 5444]
//                                [--region us-ord] [--type g6-nanode-1]

import { runQuery } from '@stackql/pgwire-lite';

const args = process.argv.slice(2);
const getArg = (flag, dflt) => {
  const i = args.indexOf(flag);
  return i !== -1 ? args[i + 1] : dflt;
};
const live = args.includes('--live');
const skipMutations = args.includes('--skip-mutations');
const port = parseInt(getArg('--port', '5444'), 10);
const region = getArg('--region', 'us-ord');
const instanceType = getArg('--type', 'g6-nanode-1');

const conn = { user: 'stackql', database: 'stackql', host: 'localhost', port };
const runstamp = Date.now().toString(36);
const instanceLabel = `stackql-smoke-${runstamp}`;
const volumeLabel = `stackqlsmoke${runstamp}`;

let passed = 0;
let failed = 0;
const failures = [];

async function query(sql) {
  const result = await runQuery(conn, sql);
  return result.data ?? [];
}

async function check(name, sql, assertFn) {
  try {
    const rows = await query(sql);
    const ok = assertFn ? assertFn(rows) : true;
    if (ok) {
      passed++;
      console.log(`  PASS ${name}`);
    } else {
      failed++;
      failures.push(name);
      console.log(`  FAIL ${name} - assertion failed, got: ${JSON.stringify(rows).slice(0, 200)}`);
    }
    return rows;
  } catch (err) {
    failed++;
    failures.push(name);
    console.log(`  FAIL ${name} - ${String(err.message || err).slice(0, 200)}`);
    return null;
  }
}

async function poll(name, sql, predicate, { timeoutMs = 180000, intervalMs = 5000 } = {}) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const rows = await query(sql);
      if (predicate(rows)) return rows;
    } catch {
      // transient - keep polling
    }
    await new Promise((r) => setTimeout(r, intervalMs));
  }
  throw new Error(`${name}: timed out after ${timeoutMs}ms`);
}

async function main() {
  console.log(`\nLinode provider smoke test (${live ? 'live/published' : 'local'} provider, port ${port})\n`);

  // provider version sanity
  const providers = await query('SHOW PROVIDERS');
  const linodeProvider = providers.find((p) => p.name === 'linode');
  const version = linodeProvider ? linodeProvider.version : '(not installed - served from localDocRoot)';
  console.log(`  provider version: ${version}`);
  if (live && linodeProvider && linodeProvider.version === 'v00.00.00000') {
    throw new Error('--live specified but the server is running the locally generated provider');
  }

  console.log('\nRead-only checks:');
  await check('account.account', 'SELECT company, country FROM linode.account.account', (r) => r.length === 1);
  await check('regions.regions', 'SELECT COUNT(*) AS n FROM linode.regions.regions', (r) => Number(r[0].n) > 10);
  await check('linode.types (compute catalog)', 'SELECT COUNT(*) AS n FROM linode.linode.types', (r) => Number(r[0].n) > 20);
  await check('images.images', 'SELECT COUNT(*) AS n FROM linode.images.images', (r) => Number(r[0].n) > 10);
  await check('linode.kernels (multi-page pagination)', 'SELECT COUNT(*) AS n FROM linode.linode.kernels', (r) => Number(r[0].n) > 100);
  await check('linode.instances', 'SELECT id, label, status FROM linode.linode.instances', () => true);
  await check('volumes.volumes', 'SELECT id, label, status FROM linode.volumes.volumes', () => true);
  await check('object_storage.clusters', 'SELECT COUNT(*) AS n FROM linode.object_storage.clusters', (r) => Number(r[0].n) > 0);
  await check('object_storage.buckets', 'SELECT label, cluster FROM linode.object_storage.buckets', () => true);
  await check('networking.firewalls', 'SELECT id, label FROM linode.networking.firewalls', () => true);

  if (skipMutations) {
    console.log('\nSkipping mutation lifecycle (--skip-mutations)');
    return;
  }

  console.log('\nCompute lifecycle (create with image, boot, shutdown, boot again, delete):');
  // throwaway root password for the disposable test instance
  const rootPass = 'Sq!9' + Math.random().toString(36).slice(2) + 'Xz#4' + Math.random().toString(36).slice(2);
  // status polls go via the list method - single-row reads by path param are
  // unreliable through the pg server wire protocol (they work via stackql exec)
  const instanceStatus = (rows) => (rows.find((r) => String(r.id) === String(instanceId)) || {}).status;
  let instanceId = null;
  let volumeId = null;
  try {
    await check(
      'INSERT instance',
      `INSERT INTO linode.linode.instances (label, region, type, image, root_pass) SELECT '${instanceLabel}', '${region}', '${instanceType}', 'linode/debian12', '${rootPass}'`,
      () => true
    );
    const listing = await poll(
      'instance visible',
      `SELECT id, label, status FROM linode.linode.instances`,
      (rows) => rows.some((r) => r.label === instanceLabel),
      { timeoutMs: 60000, intervalMs: 5000 }
    );
    instanceId = listing.find((r) => r.label === instanceLabel).id;
    console.log(`  instance ${instanceId} created`);
    await poll(
      'instance running',
      `SELECT id, status FROM linode.linode.instances`,
      (rows) => instanceStatus(rows) === 'running',
      { timeoutMs: 300000, intervalMs: 10000 }
    );
    passed++;
    console.log('  PASS instance booted to running');

    await check(
      'EXEC instances.shutdown',
      `EXEC linode.linode.instances.shutdown @linodeId = '${instanceId}'`,
      () => true
    );
    await poll(
      'instance offline after shutdown',
      `SELECT id, status FROM linode.linode.instances`,
      (rows) => instanceStatus(rows) === 'offline',
      { timeoutMs: 300000, intervalMs: 10000 }
    );
    passed++;
    console.log('  PASS instance stopped (offline)');

    await check(
      'EXEC instances.boot',
      `EXEC linode.linode.instances.boot @linodeId = '${instanceId}'`,
      () => true
    );
    await poll(
      'instance running after boot',
      `SELECT id, status FROM linode.linode.instances`,
      (rows) => instanceStatus(rows) === 'running',
      { timeoutMs: 300000, intervalMs: 10000 }
    );
    passed++;
    console.log('  PASS instance started again (running)');
  } catch (err) {
    failed++;
    failures.push('compute lifecycle');
    console.log(`  FAIL compute lifecycle - ${String(err.message || err).slice(0, 200)}`);
  } finally {
    if (instanceId) {
      try {
        await query(`DELETE FROM linode.linode.instances WHERE linodeId = ${instanceId}`);
        await poll(
          'instance deleted',
          `SELECT id FROM linode.linode.instances`,
          (rows) => !rows.some((r) => String(r.id) === String(instanceId)),
          { timeoutMs: 120000 }
        );
        passed++;
        console.log(`  PASS instance ${instanceId} deleted and verified gone`);
      } catch (err) {
        failed++;
        failures.push('instance cleanup');
        console.log(`  FAIL instance cleanup - MANUAL CLEANUP MAY BE REQUIRED (id ${instanceId}) - ${String(err.message || err).slice(0, 200)}`);
      }
    }
  }

  console.log('\nStorage lifecycle (10GB volume, minimum size):');
  try {
    await check(
      'INSERT volume',
      `INSERT INTO linode.volumes.volumes (label, region, size) SELECT '${volumeLabel}', '${region}', 10`,
      () => true
    );
    const createdVol = await poll(
      'volume visible',
      `SELECT id, label, status FROM linode.volumes.volumes`,
      (rows) => rows.some((r) => r.label === volumeLabel),
      { timeoutMs: 60000 }
    );
    volumeId = createdVol.find((r) => r.label === volumeLabel).id;
    console.log(`  volume ${volumeId} created`);
    // Poll via the list method - single-row reads by path param are unreliable
    // through the pg server wire protocol (they work via stackql exec).
    await poll(
      'volume active',
      `SELECT id, status FROM linode.volumes.volumes`,
      (rows) => rows.some((r) => String(r.id) === String(volumeId) && r.status === 'active')
    );
    passed++;
    console.log('  PASS volume reached active state');
  } catch (err) {
    failed++;
    failures.push('storage lifecycle');
    console.log(`  FAIL storage lifecycle - ${String(err.message || err).slice(0, 200)}`);
  } finally {
    if (volumeId) {
      try {
        await query(`DELETE FROM linode.volumes.volumes WHERE volumeId = ${volumeId}`);
        await poll(
          'volume deleted',
          `SELECT id FROM linode.volumes.volumes`,
          (rows) => !rows.some((r) => String(r.id) === String(volumeId)),
          { timeoutMs: 120000 }
        );
        passed++;
        console.log(`  PASS volume ${volumeId} deleted and verified gone`);
      } catch (err) {
        failed++;
        failures.push('volume cleanup');
        console.log(`  FAIL volume cleanup - MANUAL CLEANUP MAY BE REQUIRED (id ${volumeId}) - ${String(err.message || err).slice(0, 200)}`);
      }
    }
  }
}

main()
  .then(() => {
    console.log(`\nSmoke test complete: ${passed} passed, ${failed} failed`);
    if (failed > 0) {
      console.log(`Failures: ${failures.join(', ')}`);
      process.exit(1);
    }
  })
  .catch((err) => {
    console.error(`\nSmoke test aborted: ${String(err.message || err)}`);
    process.exit(1);
  });
