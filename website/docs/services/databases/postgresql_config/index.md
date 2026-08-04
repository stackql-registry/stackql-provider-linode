--- 
title: postgresql_config
hide_title: false
hide_table_of_contents: false
keywords:
  - postgresql_config
  - databases
  - linode
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage linode resources using SQL
custom_edit_url: null
image: /img/stackql-linode-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>postgresql_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="postgresql_config" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.databases.postgresql_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

PostgreSQL Managed Database advanced parameters.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="pg" /></td>
    <td><code>object</code></td>
    <td>Configuration values available for a postgresql.conf.</td>
</tr>
<tr>
    <td><CopyableCode code="pg_stat_monitor_enable" /></td>
    <td><code>object</code></td>
    <td>Parameter used to enable the `pg_stat_monitor` extension for a PostgreSQL cluster, per Aiven's specifications.</td>
</tr>
<tr>
    <td><CopyableCode code="pglookout" /></td>
    <td><code>object</code></td>
    <td>Parameter used to apply PGLookout settings, per Aiven's specifications.</td>
</tr>
<tr>
    <td><CopyableCode code="shared_buffers_percentage" /></td>
    <td><code>object</code></td>
    <td>Parameters used to set up the `shared_buffers_percentage`, per Aiven's specifications.</td>
</tr>
<tr>
    <td><CopyableCode code="work_mem" /></td>
    <td><code>object</code></td>
    <td>Parameters used to set up `work_mem`, per Aiven's specifications.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>All advanced parameters you can apply to a PostgreSQL Managed Database, via our partner [Aiven](https://aiven.io/docs/products/postgresql/reference/advanced-params).<br /><br />&gt; 📘<br />&gt;<br />&gt; Aiven may offer other parameters, but Akamai Managed Databases only supports the ones listed in this operation.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

All advanced parameters you can apply to a PostgreSQL Managed Database, via our partner [Aiven](https://aiven.io/docs/products/postgresql/reference/advanced-params).<br /><br />&gt; 📘<br />&gt;<br />&gt; Aiven may offer other parameters, but Akamai Managed Databases only supports the ones listed in this operation.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
pg,
pg_stat_monitor_enable,
pglookout,
shared_buffers_percentage,
work_mem
FROM linode.databases.postgresql_config
;
```
</TabItem>
</Tabs>
