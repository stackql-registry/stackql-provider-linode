--- 
title: invoice_items
hide_title: false
hide_table_of_contents: false
keywords:
  - invoice_items
  - account
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

Creates, updates, deletes, gets or lists an <code>invoice_items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="invoice_items" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.account.invoice_items" /></td></tr>
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

A paginated list of InvoiceItem objects.

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
    <td><CopyableCode code="amount" /></td>
    <td><code>number</code></td>
    <td>__Read-only__ The price, in US dollars, of the Invoice Item. Equal to the unit price multiplied by quantity.</td>
</tr>
<tr>
    <td><CopyableCode code="from" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ The date the Invoice Item started, based on month. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The Invoice Item's display label. (example: Linode 123)</td>
</tr>
<tr>
    <td><CopyableCode code="quantity" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ The quantity of this Item for the specified Invoice.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The ID of the applicable Region associated with this Invoice Item.  `null` if there is no applicable Region. (example: us-west)</td>
</tr>
<tr>
    <td><CopyableCode code="tax" /></td>
    <td><code>number</code></td>
    <td>__Read-only__ The amount of tax levied on this Item in US Dollars.</td>
</tr>
<tr>
    <td><CopyableCode code="to" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ The date the Invoice Item ended, based on month. (example: 2018-01-31T11:59:59)</td>
</tr>
<tr>
    <td><CopyableCode code="total" /></td>
    <td><code>number</code></td>
    <td>__Read-only__ The price of this Item after taxes in US Dollars.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The type of service, ether `hourly` or `misc`. (hourly, misc) (example: hourly)</td>
</tr>
<tr>
    <td><CopyableCode code="unit_price" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The monthly service fee in US Dollars for this Item.</td>
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
    <td><a href="#parameter-invoiceId"><code>invoiceId</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Returns a paginated list of Invoice items.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-invoiceId">
    <td><CopyableCode code="invoiceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Invoice.</td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Returns a paginated list of Invoice items.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
amount,
from,
label,
quantity,
region,
tax,
to,
total,
type,
unit_price
FROM linode.account.invoice_items
WHERE invoiceId = '{{ invoiceId }}' -- required
AND page = '{{ page }}'
AND page_size = '{{ page_size }}'
;
```
</TabItem>
</Tabs>
