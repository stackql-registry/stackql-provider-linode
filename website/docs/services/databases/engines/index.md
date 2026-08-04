--- 
title: engines
hide_title: false
hide_table_of_contents: false
keywords:
  - engines
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

Creates, updates, deletes, gets or lists an <code>engines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="engines" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.databases.engines" /></td></tr>
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

Returns information for a single Managed Databases engine type and version.

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
    <td>The Managed Database engine ID in engine/version format. (example: mysql/8.0.26)</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The Managed Database engine type. (example: mysql)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The Managed Database engine version. (example: 8.0.26)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Returns a paginated list of all available Managed Databases engines and versions.

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
    <td>The Managed Database engine ID in engine/version format. (example: mysql/8.0.26)</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The Managed Database engine type. (example: mysql)</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-engineId"><code>engineId</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Display information for a single Managed Databases engine type and version. Run the [List Managed Databases engines](https://techdocs.akamai.com/linode-api/reference/get-databases-engines) operation and store the `id` for the applicable database engine.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Display all available Managed Databases engine types and versions. Use an engine's `id` to create a new Managed Databases instance.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)</td>
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
<tr id="parameter-engineId">
    <td><CopyableCode code="engineId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Managed Database engine. (example: &#123;&#123;engineId&#125;&#125;)</td>
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

Display information for a single Managed Databases engine type and version. Run the [List Managed Databases engines](https://techdocs.akamai.com/linode-api/reference/get-databases-engines) operation and store the `id` for the applicable database engine.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)

```sql
SELECT
id,
engine,
version
FROM linode.databases.engines
WHERE engineId = '{{ engineId }}' -- required
AND page = '{{ page }}'
AND page_size = '{{ page_size }}'
;
```
</TabItem>
<TabItem value="list">

Display all available Managed Databases engine types and versions. Use an engine's `id` to create a new Managed Databases instance.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)

```sql
SELECT
id,
engine,
version
FROM linode.databases.engines
WHERE page = '{{ page }}'
AND page_size = '{{ page_size }}'
;
```
</TabItem>
</Tabs>
