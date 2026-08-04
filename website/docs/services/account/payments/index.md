--- 
title: payments
hide_title: false
hide_table_of_contents: false
keywords:
  - payments
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

Creates, updates, deletes, gets or lists a <code>payments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="payments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.account.payments" /></td></tr>
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

A Payment object.

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
    <td>__Read-only__ The unique ID of the payment.</td>
</tr>
<tr>
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__, __Read-only__ When the payment was made. (example: 2018-01-15T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="usd" /></td>
    <td><code>integer</code></td>
    <td>__Filterable__, __Read-only__ The amount, in US dollars, of the payment. (example: 120.50)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Returns a paginated list of payment objects.

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
    <td>__Read-only__ The unique ID of the payment.</td>
</tr>
<tr>
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__, __Read-only__ When the payment was made. (example: 2018-01-15T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="usd" /></td>
    <td><code>integer</code></td>
    <td>__Filterable__, __Read-only__ The amount, in US dollars, of the payment. (example: 120.50)</td>
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
    <td><a href="#parameter-paymentId"><code>paymentId</code></a></td>
    <td></td>
    <td>Returns information about a specific Payment.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-X-Filter"><code>X-Filter</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Returns a paginated list of payments made on this Account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-card_number"><code>card_number</code></a>, <a href="#parameter-expiry_month"><code>expiry_month</code></a>, <a href="#parameter-expiry_year"><code>expiry_year</code></a>, <a href="#parameter-cvv"><code>cvv</code></a></td>
    <td></td>
    <td>__Deprecated__ Please run [Add a payment method](https://techdocs.akamai.com/linode-api/reference/post-payment-method).<br /><br />Adds a credit card Payment Method to your account and sets it as the default method. __OAuth scopes__.<br /><br />    ```<br />    account:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#make_payment"><CopyableCode code="make_payment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Makes a payment to your account.<br /><br />- The requested amount is charged to the default payment method if no `payment_method_id` is specified.<br /><br />- A `payment_submitted` event is generated when a payment is successfully submitted.<br /><br />__Parent and child accounts__<br /><br />In a [parent and child account](https://www.linode.com/docs/guides/parent-child-accounts/) environment, the following apply:<br /><br />- Child account users can't run this operation. These users don't have access to billing-related operations.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#stage_paypal_payment"><CopyableCode code="stage_paypal_payment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cancel_url"><code>cancel_url</code></a>, <a href="#parameter-redirect_url"><code>redirect_url</code></a>, <a href="#parameter-usd"><code>usd</code></a></td>
    <td></td>
    <td>__Deprecated__ This operation is disabled and no longer accessible. PayPal can be designated as a Payment Method for automated payments using the Cloud Manager. See [Manage Payment Methods](https://www.linode.com/docs/products/platform/billing/guides/payment-methods/). __OAuth scopes__.<br /><br />    ```<br />    account:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#execute_paypal_payment"><CopyableCode code="execute_paypal_payment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-payer_id"><code>payer_id</code></a>, <a href="#parameter-payment_id"><code>payment_id</code></a></td>
    <td></td>
    <td>__Deprecated__ This operation is disabled and no longer accessible. PayPal can be designated as a Payment Method for automated payments using the Cloud Manager. See [Manage Payment Methods](https://www.linode.com/docs/products/platform/billing/guides/payment-methods/). __OAuth scopes__.<br /><br />    ```<br />    account:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-paymentId">
    <td><CopyableCode code="paymentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Payment to look up.</td>
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

Returns information about a specific Payment.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
date,
usd
FROM linode.account.payments
WHERE paymentId = '{{ paymentId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns a paginated list of payments made on this Account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
date,
usd
FROM linode.account.payments
WHERE X-Filter = '{{ X-Filter }}'
AND page = '{{ page }}'
AND page_size = '{{ page_size }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

__Deprecated__ Please run [Add a payment method](https://techdocs.akamai.com/linode-api/reference/post-payment-method).<br /><br />Adds a credit card Payment Method to your account and sets it as the default method. __OAuth scopes__.<br /><br />    ```<br />    account:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.account.payments (
card_number,
cvv,
expiry_month,
expiry_year
)
SELECT 
'{{ card_number }}' /* required */,
'{{ cvv }}' /* required */,
{{ expiry_month }} /* required */,
{{ expiry_year }} /* required */
RETURNING
message
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: payments
  props:
    - name: card_number
      value: "{{ card_number }}"
      description: |
        Your credit card number. No spaces or hyphens (\`-\`) allowed.
    - name: cvv
      value: "{{ cvv }}"
      description: |
        CVV (Card Verification Value) of the credit card, typically found on the back of the card.
    - name: expiry_month
      value: {{ expiry_month }}
      description: |
        A value from 1-12 representing the expiration month of your credit card.
        - 1 = January
        - 2 = February
        - 3 = March
        - Etc.
    - name: expiry_year
      value: {{ expiry_year }}
      description: |
        A four-digit integer representing the expiration year of your credit card.
        The combination of \`expiry_month\` and \`expiry_year\` must result in a month/year combination of the current month or in the future. An expiration date set in the past is invalid.
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="make_payment"
    values={[
        { label: 'make_payment', value: 'make_payment' },
        { label: 'stage_paypal_payment', value: 'stage_paypal_payment' },
        { label: 'execute_paypal_payment', value: 'execute_paypal_payment' }
    ]}
>
<TabItem value="make_payment">

Makes a payment to your account.<br /><br />- The requested amount is charged to the default payment method if no `payment_method_id` is specified.<br /><br />- A `payment_submitted` event is generated when a payment is successfully submitted.<br /><br />__Parent and child accounts__<br /><br />In a [parent and child account](https://www.linode.com/docs/guides/parent-child-accounts/) environment, the following apply:<br /><br />- Child account users can't run this operation. These users don't have access to billing-related operations.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.account.payments.make_payment 
@@json=
'{
"payment_method_id": {{ payment_method_id }}, 
"usd": "{{ usd }}"
}'
;
```
</TabItem>
<TabItem value="stage_paypal_payment">

__Deprecated__ This operation is disabled and no longer accessible. PayPal can be designated as a Payment Method for automated payments using the Cloud Manager. See [Manage Payment Methods](https://www.linode.com/docs/products/platform/billing/guides/payment-methods/). __OAuth scopes__.<br /><br />    ```<br />    account:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.account.payments.stage_paypal_payment 
@@json=
'{
"cancel_url": "{{ cancel_url }}", 
"redirect_url": "{{ redirect_url }}", 
"usd": "{{ usd }}"
}'
;
```
</TabItem>
<TabItem value="execute_paypal_payment">

__Deprecated__ This operation is disabled and no longer accessible. PayPal can be designated as a Payment Method for automated payments using the Cloud Manager. See [Manage Payment Methods](https://www.linode.com/docs/products/platform/billing/guides/payment-methods/). __OAuth scopes__.<br /><br />    ```<br />    account:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.account.payments.execute_paypal_payment 
@@json=
'{
"payer_id": "{{ payer_id }}", 
"payment_id": "{{ payment_id }}"
}'
;
```
</TabItem>
</Tabs>
