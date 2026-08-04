--- 
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
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

Creates, updates, deletes, gets or lists an <code>instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.databases.instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Returns a paginated list of all accessible Managed Databases on your account.

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
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ A unique ID that can be used to identify and reference the Managed Database.</td>
</tr>
<tr>
    <td><CopyableCode code="allow_list" /></td>
    <td><code>array</code></td>
    <td>Controls access to the Managed Database.  - Individually included IP addresses or CIDR ranges can access the Managed Database while all other sources are blocked.  - A standalone value of `0.0.0.0/0` allows all IP addresses access to the Managed Database.  - An empty array (`[]`) blocks all public and private connections to the Managed Database.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_size" /></td>
    <td><code>integer</code></td>
    <td>The number of Linode instance nodes deployed to the Managed Database.   - Choose `3` nodes to create a high availability cluster that consists of one primary node and two replica nodes.  - A `2` node cluster is only available with a dedicated plan. It consists of one primary node and one replica node. (1, 2, 3)</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this Managed Database was created. (example: 2022-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="encrypted" /></td>
    <td><code>boolean</code></td>
    <td>__Read-only__ Whether the Managed Databases is encrypted. Currently required to be `true`.</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ The Managed Database engine type. (mysql, postgresql) (example: mysql)</td>
</tr>
<tr>
    <td><CopyableCode code="fork" /></td>
    <td><code>object</code></td>
    <td>Details on the database that was the target of the fork. This only exists if the database was restored by creating a fork from another [MySQL](https://techdocs.akamai.com/linode-api/reference/post-databases-mysql-instances) or [PostgreSQL](https://techdocs.akamai.com/linode-api/reference/post-databases-postgre-sql-instances) database.</td>
</tr>
<tr>
    <td><CopyableCode code="hosts" /></td>
    <td><code>object</code></td>
    <td>__Read-only__ The primary hostname and secondary read-only hostname for the Managed Database. The API assigns these hostnames after it successfully creates the Managed Database.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_uri" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ Append this to `https://api.linode.com` to run commands for the Managed Database. (example: /v4/databases/mysql/instances/123)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ A unique, user-defined string referring to the Managed Database. This string needs to be unique per Managed Database engine type. (example: example-db)</td>
</tr>
<tr>
    <td><CopyableCode code="members" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ A mapping between IP addresses and strings designating them as `primary` or `failover`. (opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="oldest_restore_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ The oldest time to which a database can be restored. (example: 2024-10-03 20:48:05)</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ The back-end platform for relational databases used by the service. (rdbms-legacy, rdbms-default) (example: rdbms-default)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ The access port for this Managed Database.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The unique identifier for the [region](https://techdocs.akamai.com/linode-api/reference/get-regions) where the Managed Database lives. (example: us-east)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ The operating status of the Managed Database. (provisioning, active, suspending, suspended, resuming, failed, degraded, updating, resizing) (example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="total_disk_size_gb" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ The total disk size of the database, in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The Linode Instance type used by the Managed Database for its nodes. (example: g6-dedicated-2)</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this Managed Database was last updated. (example: 2022-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="updates" /></td>
    <td><code>object</code></td>
    <td>Configuration settings for automated patch update maintenance for the Managed Database.</td>
</tr>
<tr>
    <td><CopyableCode code="used_disk_size_gb" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ The amount of space currently in use in the database, in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The Managed Database engine version. (example: 8.0.26)</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Display all Managed Databases accessible to your user, regardless of engine type. For more detailed information on a particular database instance, make a request to its `instance_uri`.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td>The page of a collection to return.</td>
</tr>
<tr id="parameter-page_size">
    <td><CopyableCode code="page_size" /></td>
    <td><code>integer</code></td>
    <td>The number of items to return per page.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Display all Managed Databases accessible to your user, regardless of engine type. For more detailed information on a particular database instance, make a request to its `instance_uri`.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
allow_list,
cluster_size,
created,
encrypted,
engine,
fork,
hosts,
instance_uri,
label,
members,
oldest_restore_time,
platform,
port,
region,
status,
total_disk_size_gb,
type,
updated,
updates,
used_disk_size_gb,
version
FROM linode.databases.instances
WHERE page = '{{ page }}'
AND page_size = '{{ page_size }}'
;
```
</TabItem>
</Tabs>
