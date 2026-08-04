--- 
title: types
hide_title: false
hide_table_of_contents: false
keywords:
  - types
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

Creates, updates, deletes, gets or lists a <code>types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.databases.types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Returns a single Managed Databases type.

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
    <td><code>string</code></td>
    <td>__Read-only__ The ID representing the Managed Database node plan type. (example: g6-nanode-1)</td>
</tr>
<tr>
    <td><CopyableCode code="class" /></td>
    <td><code>string</code></td>
    <td>The Linode class category. This can be [dedicated](https://techdocs.akamai.com/cloud-computing/docs/dedicated-cpu-compute-instances), [shared](https://techdocs.akamai.com/cloud-computing/docs/shared-cpu-compute-instances), or [premium](https://techdocs.akamai.com/cloud-computing/docs/premium-compute-instances).  &gt; 📘 &gt; &gt; Premium plan Linodes are available in limited regions. (dedicated, shared, premium) (example: dedicated)</td>
</tr>
<tr>
    <td><CopyableCode code="disk" /></td>
    <td><code>integer</code></td>
    <td>The amount of disk space set aside for Databases of this plan type. The value is represented in megabytes.</td>
</tr>
<tr>
    <td><CopyableCode code="engines" /></td>
    <td><code>object</code></td>
    <td>Information for the supported third-party databases that can be used with Managed Databases.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ A human-readable string that describes each plan type. For display purposes only. (example: DBaaS - Nanode 1GB)</td>
</tr>
<tr>
    <td><CopyableCode code="memory" /></td>
    <td><code>integer</code></td>
    <td>The amount of RAM allocated to Database created of this plan type. The value is represented in megabytes.</td>
</tr>
<tr>
    <td><CopyableCode code="vcpus" /></td>
    <td><code>integer</code></td>
    <td>The number of CPUs allocated to databases of this plan type.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Returns a paginated list of all Managed Databases types.

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
    <td><code>string</code></td>
    <td>__Read-only__ The ID representing the Managed Database node plan type. (example: g6-nanode-1)</td>
</tr>
<tr>
    <td><CopyableCode code="class" /></td>
    <td><code>string</code></td>
    <td>The Linode class category. This can be [dedicated](https://techdocs.akamai.com/cloud-computing/docs/dedicated-cpu-compute-instances), [shared](https://techdocs.akamai.com/cloud-computing/docs/shared-cpu-compute-instances), or [premium](https://techdocs.akamai.com/cloud-computing/docs/premium-compute-instances).  &gt; 📘 &gt; &gt; Premium plan Linodes are available in limited regions. (dedicated, shared, premium) (example: dedicated)</td>
</tr>
<tr>
    <td><CopyableCode code="disk" /></td>
    <td><code>integer</code></td>
    <td>The amount of disk space set aside for Databases of this plan type. The value is represented in megabytes.</td>
</tr>
<tr>
    <td><CopyableCode code="engines" /></td>
    <td><code>object</code></td>
    <td>Information for the supported third-party databases that can be used with Managed Databases.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ A human-readable string that describes each plan type. For display purposes only. (example: DBaaS - Nanode 1GB)</td>
</tr>
<tr>
    <td><CopyableCode code="memory" /></td>
    <td><code>integer</code></td>
    <td>The amount of RAM allocated to Database created of this plan type. The value is represented in megabytes.</td>
</tr>
<tr>
    <td><CopyableCode code="vcpus" /></td>
    <td><code>integer</code></td>
    <td>The number of CPUs allocated to databases of this plan type.</td>
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
    <td><a href="#parameter-typeId"><code>typeId</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Display the details of a single Managed Databases node type. The type and number of nodes determine the resources and price of a Managed Databases instance. Run the [List Managed Databases type](https://techdocs.akamai.com/linode-api/reference/get-databases-types) operation and store the `id` for the applicable database node type.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Display all Managed Databases node types. The type and number of nodes determine the resources and price of a Managed Databases instance. Each database can have one node type. With a high availability database, all nodes are deployed according to the chosen type.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)</td>
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
<tr id="parameter-typeId">
    <td><CopyableCode code="typeId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Managed Database type. (example: &#123;&#123;typeId&#125;&#125;)</td>
</tr>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Display the details of a single Managed Databases node type. The type and number of nodes determine the resources and price of a Managed Databases instance. Run the [List Managed Databases type](https://techdocs.akamai.com/linode-api/reference/get-databases-types) operation and store the `id` for the applicable database node type.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)

```sql
SELECT
id,
class,
disk,
engines,
label,
memory,
vcpus
FROM linode.databases.types
WHERE typeId = '{{ typeId }}' -- required
AND page = '{{ page }}'
AND page_size = '{{ page_size }}'
;
```
</TabItem>
<TabItem value="list">

Display all Managed Databases node types. The type and number of nodes determine the resources and price of a Managed Databases instance. Each database can have one node type. With a high availability database, all nodes are deployed according to the chosen type.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)

```sql
SELECT
id,
class,
disk,
engines,
label,
memory,
vcpus
FROM linode.databases.types
WHERE page = '{{ page }}'
AND page_size = '{{ page_size }}'
;
```
</TabItem>
</Tabs>
