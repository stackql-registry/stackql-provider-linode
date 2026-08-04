--- 
title: availability
hide_title: false
hide_table_of_contents: false
keywords:
  - availability
  - regions
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

Creates, updates, deletes, gets or lists an <code>availability</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="availability" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.regions.availability" /></td></tr>
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

Compute instance availability information by [Type](https://techdocs.akamai.com/linode-api/reference/get-linode-types) and [Region](https://techdocs.akamai.com/linode-api/reference/get-regions).

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
    <td><CopyableCode code="available" /></td>
    <td><code>boolean</code></td>
    <td>__Filterable__ Whether the compute instance type is available in the region.</td>
</tr>
<tr>
    <td><CopyableCode code="plan" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The compute instance [Type](https://techdocs.akamai.com/linode-api/reference/get-linode-types) ID. (example: gpu-rtx6000-1.1)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The [Region](https://techdocs.akamai.com/linode-api/reference/get-regions) ID. (example: us-east)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Returns a Region Availability object.

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
    <td><CopyableCode code="available" /></td>
    <td><code>boolean</code></td>
    <td>__Filterable__ Whether the compute instance type is available in the region.</td>
</tr>
<tr>
    <td><CopyableCode code="plan" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The compute instance [Type](https://techdocs.akamai.com/linode-api/reference/get-linode-types) ID. (example: gpu-rtx6000-1.1)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The [Region](https://techdocs.akamai.com/linode-api/reference/get-regions) ID. (example: us-east)</td>
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
    <td><a href="#parameter-regionId"><code>regionId</code></a></td>
    <td></td>
    <td>Returns availability data for a single Region.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Returns availability data for all regions.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)</td>
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
<tr id="parameter-regionId">
    <td><CopyableCode code="regionId" /></td>
    <td><code>string</code></td>
    <td>The abbreviated value ("slug") for the applicable data center. Run the [List regions](https://techdocs.akamai.com/linode-api/reference/get-regions) operation to view the slug for each data center.</td>
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

Returns availability data for a single Region.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)

```sql
SELECT
available,
plan,
region
FROM linode.regions.availability
WHERE regionId = '{{ regionId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns availability data for all regions.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)

```sql
SELECT
available,
plan,
region
FROM linode.regions.availability
;
```
</TabItem>
</Tabs>
