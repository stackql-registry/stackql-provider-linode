--- 
title: statistics
hide_title: false
hide_table_of_contents: false
keywords:
  - statistics
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

Creates, updates, deletes, gets or lists a <code>statistics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="statistics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.linode.statistics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_by_year_month"
    values={[
        { label: 'get_by_year_month', value: 'get_by_year_month' },
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get_by_year_month">

The Linode's statistics for the requested period.

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
    <td><CopyableCode code="cpu" /></td>
    <td><code>array</code></td>
    <td>Percentage of CPU used.</td>
</tr>
<tr>
    <td><CopyableCode code="io" /></td>
    <td><code>object</code></td>
    <td>Input/Output statistics.</td>
</tr>
<tr>
    <td><CopyableCode code="netv4" /></td>
    <td><code>object</code></td>
    <td>IPv4 statistics.</td>
</tr>
<tr>
    <td><CopyableCode code="netv6" /></td>
    <td><code>object</code></td>
    <td>IPv6 statistics.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The title for this data set. (example: linode.com - my-linode (linode123456) - day (5 min avg))</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get">

The Linode's stats for the past 24 hours.

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
    <td><CopyableCode code="cpu" /></td>
    <td><code>array</code></td>
    <td>Percentage of CPU used.</td>
</tr>
<tr>
    <td><CopyableCode code="io" /></td>
    <td><code>object</code></td>
    <td>Input/Output statistics.</td>
</tr>
<tr>
    <td><CopyableCode code="netv4" /></td>
    <td><code>object</code></td>
    <td>IPv4 statistics.</td>
</tr>
<tr>
    <td><CopyableCode code="netv6" /></td>
    <td><code>object</code></td>
    <td>IPv6 statistics.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The title for this data set. (example: linode.com - my-linode (linode123456) - day (5 min avg))</td>
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
    <td><a href="#get_by_year_month"><CopyableCode code="get_by_year_month" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-linodeId"><code>linodeId</code></a>, <a href="#parameter-year"><code>year</code></a>, <a href="#parameter-month"><code>month</code></a></td>
    <td></td>
    <td>Returns CPU, IO, IPv4, and IPv6 statistics for your Linode for a specific month. If the `&#123;year&#125;` and `&#123;month&#125;` are set to the current month, the API returns statistics for the past 30 days. __OAuth scopes__.<br /><br />    ```<br />    linodes:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-linodeId"><code>linodeId</code></a></td>
    <td></td>
    <td>Returns CPU, IO, IPv4, and IPv6 statistics for your Linode for the past 24 hours. __OAuth scopes__.<br /><br />    ```<br />    linodes:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
    defaultValue="get_by_year_month"
    values={[
        { label: 'get_by_year_month', value: 'get_by_year_month' },
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get_by_year_month">

Returns CPU, IO, IPv4, and IPv6 statistics for your Linode for a specific month. If the `&#123;year&#125;` and `&#123;month&#125;` are set to the current month, the API returns statistics for the past 30 days. __OAuth scopes__.<br /><br />    ```<br />    linodes:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
cpu,
io,
netv4,
netv6,
title
FROM linode.linode.statistics
WHERE linodeId = '{{ linodeId }}' -- required
AND year = '{{ year }}' -- required
AND month = '{{ month }}' -- required
;
```
</TabItem>
<TabItem value="get">

Returns CPU, IO, IPv4, and IPv6 statistics for your Linode for the past 24 hours. __OAuth scopes__.<br /><br />    ```<br />    linodes:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
cpu,
io,
netv4,
netv6,
title
FROM linode.linode.statistics
WHERE linodeId = '{{ linodeId }}' -- required
;
```
</TabItem>
</Tabs>
