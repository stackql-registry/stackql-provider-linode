--- 
title: invoices
hide_title: false
hide_table_of_contents: false
keywords:
  - invoices
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

Creates, updates, deletes, gets or lists an <code>invoices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="invoices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.account.invoices" /></td></tr>
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

An Invoice object.

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
    <td>__Read-only__ The Invoice's unique ID.</td>
</tr>
<tr>
    <td><CopyableCode code="billing_source" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ The source of service charges for this invoice. A value of `akamai` indicates an invoice generated according to the terms of an agreement between the customer and Akamai. A value of `linode` indicates an invoice was generated according to the default terms, prices, and discounts. (akamai, linode) (example: linode)</td>
</tr>
<tr>
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__, __Read-only__ When this Invoice was generated. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ The Invoice's display label. (example: Invoice)</td>
</tr>
<tr>
    <td><CopyableCode code="subtotal" /></td>
    <td><code>number</code></td>
    <td>__Read-only__ The amount of the Invoice before taxes in US Dollars.</td>
</tr>
<tr>
    <td><CopyableCode code="tax" /></td>
    <td><code>number</code></td>
    <td>__Read-only__ The amount of tax levied on the Invoice in US Dollars.</td>
</tr>
<tr>
    <td><CopyableCode code="tax_summary" /></td>
    <td><code>array</code></td>
    <td>__Read-only__ The amount of tax broken down into subtotals by source.</td>
</tr>
<tr>
    <td><CopyableCode code="total" /></td>
    <td><code>number</code></td>
    <td>__Filterable__, __Read-only__ The amount of the Invoice after taxes in US Dollars.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Returns a paginated list of Invoice objects.

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
    <td>__Read-only__ The Invoice's unique ID.</td>
</tr>
<tr>
    <td><CopyableCode code="billing_source" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ The source of service charges for this invoice. A value of `akamai` indicates an invoice generated according to the terms of an agreement between the customer and Akamai. A value of `linode` indicates an invoice was generated according to the default terms, prices, and discounts. (akamai, linode) (example: linode)</td>
</tr>
<tr>
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__, __Read-only__ When this Invoice was generated. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ The Invoice's display label. (example: Invoice)</td>
</tr>
<tr>
    <td><CopyableCode code="subtotal" /></td>
    <td><code>number</code></td>
    <td>__Read-only__ The amount of the Invoice before taxes in US Dollars.</td>
</tr>
<tr>
    <td><CopyableCode code="tax" /></td>
    <td><code>number</code></td>
    <td>__Read-only__ The amount of tax levied on the Invoice in US Dollars.</td>
</tr>
<tr>
    <td><CopyableCode code="tax_summary" /></td>
    <td><code>array</code></td>
    <td>__Read-only__ The amount of tax broken down into subtotals by source.</td>
</tr>
<tr>
    <td><CopyableCode code="total" /></td>
    <td><code>number</code></td>
    <td>__Filterable__, __Read-only__ The amount of the Invoice after taxes in US Dollars.</td>
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
    <td><a href="#parameter-invoiceId"><code>invoiceId</code></a></td>
    <td></td>
    <td>Returns a single Invoice object.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-X-Filter"><code>X-Filter</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Returns a paginated list of invoices against your account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-X-Filter">
    <td><CopyableCode code="X-Filter" /></td>
    <td><code></code></td>
    <td>Specifies a JSON object to filter down the results. See [Filtering and sorting](https://techdocs.akamai.com/linode-api/reference/filtering-and-sorting) for details. (example: &#123;&#123;X-Filter&#125;&#125;)</td>
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

Returns a single Invoice object.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
billing_source,
date,
label,
subtotal,
tax,
tax_summary,
total
FROM linode.account.invoices
WHERE invoiceId = '{{ invoiceId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns a paginated list of invoices against your account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
billing_source,
date,
label,
subtotal,
tax,
tax_summary,
total
FROM linode.account.invoices
WHERE X-Filter = '{{ X-Filter }}'
AND page = '{{ page }}'
AND page_size = '{{ page_size }}'
;
```
</TabItem>
</Tabs>
