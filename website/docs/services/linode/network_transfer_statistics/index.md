--- 
title: network_transfer_statistics
hide_title: false
hide_table_of_contents: false
keywords:
  - network_transfer_statistics
  - linode
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

Creates, updates, deletes, gets or lists a <code>network_transfer_statistics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_transfer_statistics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.linode.network_transfer_statistics" /></td></tr>
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

A collection of the specified Linode's network transfer statistics for the requested month.

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
    <td><CopyableCode code="bytes_in" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ The amount of inbound public network traffic received by this Linode, in bytes, for a specific year/month.</td>
</tr>
<tr>
    <td><CopyableCode code="bytes_out" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ The amount of outbound public network traffic sent by this Linode, in bytes, for a specific year/month.</td>
</tr>
<tr>
    <td><CopyableCode code="bytes_total" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ The total amount of public network traffic sent and received by this Linode, in bytes, for a specific year/month.</td>
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
    <td><a href="#parameter-linodeId"><code>linodeId</code></a>, <a href="#parameter-year"><code>year</code></a>, <a href="#parameter-month"><code>month</code></a></td>
    <td></td>
    <td>Returns a Linode's network transfer pool statistics for a specific month. If the `&#123;year&#125;` and `&#123;month&#125;` are set to the current month, the API returns statistics for the past 30 days. __OAuth scopes__.<br /><br />    ```<br />    linodes:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-linodeId">
    <td><CopyableCode code="linodeId" /></td>
    <td><code>string</code></td>
    <td>ID of the Linode to look up.</td>
</tr>
<tr id="parameter-month">
    <td><CopyableCode code="month" /></td>
    <td><code>string</code></td>
    <td>Numeric value representing the month to look up.</td>
</tr>
<tr id="parameter-year">
    <td><CopyableCode code="year" /></td>
    <td><code>string</code></td>
    <td>Numeric value representing the year to look up.</td>
</tr>
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

Returns a Linode's network transfer pool statistics for a specific month. If the `&#123;year&#125;` and `&#123;month&#125;` are set to the current month, the API returns statistics for the past 30 days. __OAuth scopes__.<br /><br />    ```<br />    linodes:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
bytes_in,
bytes_out,
bytes_total
FROM linode.linode.network_transfer_statistics
WHERE linodeId = '{{ linodeId }}' -- required
AND year = '{{ year }}' -- required
AND month = '{{ month }}' -- required
;
```
</TabItem>
</Tabs>
