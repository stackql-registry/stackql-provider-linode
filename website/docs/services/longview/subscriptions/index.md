--- 
title: subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - subscriptions
  - longview
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

Creates, updates, deletes, gets or lists a <code>subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subscriptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.longview.subscriptions" /></td></tr>
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

The requested Longview Subscription details.

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
    <td>__Read-only__ The unique ID of this Subscription tier. (longview-3, longview-10, longview-40, longview-100) (example: longview-10)</td>
</tr>
<tr>
    <td><CopyableCode code="clients_included" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ The number of Longview Clients that may be created with this Subscription tier.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ A display name for this Subscription tier. (example: Longview Pro 10 pack)</td>
</tr>
<tr>
    <td><CopyableCode code="price" /></td>
    <td><code>object</code></td>
    <td>__Read-only__ Pricing information about this Subscription tier.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated list of Longview subscriptions.

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
    <td>__Read-only__ The unique ID of this Subscription tier. (longview-3, longview-10, longview-40, longview-100) (example: longview-10)</td>
</tr>
<tr>
    <td><CopyableCode code="clients_included" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ The number of Longview Clients that may be created with this Subscription tier.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ A display name for this Subscription tier. (example: Longview Pro 10 pack)</td>
</tr>
<tr>
    <td><CopyableCode code="price" /></td>
    <td><code>object</code></td>
    <td>__Read-only__ Pricing information about this Subscription tier.</td>
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
    <td><a href="#parameter-subscriptionId"><code>subscriptionId</code></a></td>
    <td></td>
    <td>Get the Longview plan details as a single `LongviewSubscription` object for the provided subscription ID. This is a public endpoint and requires no authentication.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Returns a paginated list of available Longview subscriptions. This is a public endpoint and requires no authentication.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)</td>
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
<tr id="parameter-subscriptionId">
    <td><CopyableCode code="subscriptionId" /></td>
    <td><code>string</code></td>
    <td>The Longview Subscription to look up. (example: &#123;&#123;subscriptionId&#125;&#125;)</td>
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

Get the Longview plan details as a single `LongviewSubscription` object for the provided subscription ID. This is a public endpoint and requires no authentication.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)

```sql
SELECT
id,
clients_included,
label,
price
FROM linode.longview.subscriptions
WHERE subscriptionId = '{{ subscriptionId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns a paginated list of available Longview subscriptions. This is a public endpoint and requires no authentication.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)

```sql
SELECT
id,
clients_included,
label,
price
FROM linode.longview.subscriptions
WHERE page = '{{ page }}'
AND page_size = '{{ page_size }}'
;
```
</TabItem>
</Tabs>
