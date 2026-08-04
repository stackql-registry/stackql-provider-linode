--- 
title: payment_methods
hide_title: false
hide_table_of_contents: false
keywords:
  - payment_methods
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

Creates, updates, deletes, gets or lists a <code>payment_methods</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="payment_methods" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.account.payment_methods" /></td></tr>
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

Returns a Payment Method Object.

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
    <td>The unique ID of this Payment Method.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When the Payment Method was added to the Account. (example: 2018-01-15T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code>object</code></td>
    <td>Credit card information. (x-linode-cli-format: json, title: Credit card, x-linode-ref-name: Credit Card)</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>Whether this Payment Method is the default method for automatically processing service charges.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of Payment Method. (credit_card, google_pay, paypal) (example: credit_card)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Returns a paginated list of Payment Method objects.

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
    <td>The unique ID of this Payment Method.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When the Payment Method was added to the Account. (example: 2018-01-15T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code></code></td>
    <td> (x-linode-cli-format: json)</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>Whether this Payment Method is the default method for automatically processing service charges.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of Payment Method. (credit_card, google_pay, paypal) (example: credit_card)</td>
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
    <td><a href="#parameter-paymentMethodId"><code>paymentMethodId</code></a></td>
    <td></td>
    <td>View the details of the specified Payment Method.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Returns a paginated list of Payment Methods for this Account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-type"><code>type</code></a>, <a href="#parameter-data"><code>data</code></a>, <a href="#parameter-is_default"><code>is_default</code></a></td>
    <td></td>
    <td>Adds a Payment Method to your Account with the option to set it as the default method.<br /><br />- Adding a default Payment Method removes the default status from any other Payment Method.<br /><br />- An Account can have up to 6 active Payment Methods.<br /><br />- Up to 60 Payment Methods can be added each day.<br /><br />- Prior to adding a Payment Method, ensure that your billing address information is up-to-date with a valid `zip` by running the [Update your account](https://techdocs.akamai.com/linode-api/reference/put-account) operation.<br /><br />- A `payment_method_add` event is generated when a payment is successfully submitted.<br /><br />__Parent and child accounts__<br /><br />In a [parent and child account](https://www.linode.com/docs/guides/parent-child-accounts/) environment, the following apply:<br /><br />- Child account users can't run this operation. These users don't have access to billing-related operations.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-paymentMethodId"><code>paymentMethodId</code></a></td>
    <td></td>
    <td>Deactivate the specified Payment Method.<br /><br />The default Payment Method can not be deleted. To add a new default Payment Method, run the [Add a payment method](https://techdocs.akamai.com/linode-api/reference/post-payment-method) operation. To designate an existing Payment Method as the default method, run the [Set a default payment method](https://techdocs.akamai.com/linode-api/reference/post-make-payment-method-default) operation.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#make_default"><CopyableCode code="make_default" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-paymentMethodId"><code>paymentMethodId</code></a></td>
    <td></td>
    <td>Make the specified Payment Method the default method for automatically processing payments. Removes the default status from any other Payment Method.<br /><br />__Parent and child accounts__<br /><br />In a [parent and child account](https://www.linode.com/docs/guides/parent-child-accounts/) environment, the following apply:<br /><br />- Child account users can't run this operation. These users don't have access to billing-related operations.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-paymentMethodId">
    <td><CopyableCode code="paymentMethodId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Payment Method to make default.</td>
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

View the details of the specified Payment Method.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
created,
data,
is_default,
type
FROM linode.account.payment_methods
WHERE paymentMethodId = '{{ paymentMethodId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns a paginated list of Payment Methods for this Account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
created,
data,
is_default,
type
FROM linode.account.payment_methods
WHERE page = '{{ page }}'
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

Adds a Payment Method to your Account with the option to set it as the default method.<br /><br />- Adding a default Payment Method removes the default status from any other Payment Method.<br /><br />- An Account can have up to 6 active Payment Methods.<br /><br />- Up to 60 Payment Methods can be added each day.<br /><br />- Prior to adding a Payment Method, ensure that your billing address information is up-to-date with a valid `zip` by running the [Update your account](https://techdocs.akamai.com/linode-api/reference/put-account) operation.<br /><br />- A `payment_method_add` event is generated when a payment is successfully submitted.<br /><br />__Parent and child accounts__<br /><br />In a [parent and child account](https://www.linode.com/docs/guides/parent-child-accounts/) environment, the following apply:<br /><br />- Child account users can't run this operation. These users don't have access to billing-related operations.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.account.payment_methods (
data,
is_default,
type
)
SELECT 
'{{ data }}' /* required */,
{{ is_default }} /* required */,
'{{ type }}' /* required */
RETURNING
message
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: payment_methods
  props:
    - name: data
      description: |
        An object representing the credit card information you have on file with Linode to make Payments against your Account.
      value:
        card_number: "{{ card_number }}"
        cvv: "{{ cvv }}"
        expiry_month: {{ expiry_month }}
        expiry_year: {{ expiry_year }}
    - name: is_default
      value: {{ is_default }}
      description: |
        Whether this Payment Method is the default method for automatically processing service charges.
    - name: type
      value: "{{ type }}"
      description: |
        The type of Payment Method.
        Alternative Payment Methods including Google Pay and PayPal can be added using the Cloud Manager. See the [Manage Payment Methods](https://www.linode.com/docs/products/platform/billing/guides/payment-methods/) guide
        for details and instructions.
      valid_values: ['credit_card']
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deactivate the specified Payment Method.<br /><br />The default Payment Method can not be deleted. To add a new default Payment Method, run the [Add a payment method](https://techdocs.akamai.com/linode-api/reference/post-payment-method) operation. To designate an existing Payment Method as the default method, run the [Set a default payment method](https://techdocs.akamai.com/linode-api/reference/post-make-payment-method-default) operation.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.account.payment_methods
WHERE paymentMethodId = '{{ paymentMethodId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="make_default"
    values={[
        { label: 'make_default', value: 'make_default' }
    ]}
>
<TabItem value="make_default">

Make the specified Payment Method the default method for automatically processing payments. Removes the default status from any other Payment Method.<br /><br />__Parent and child accounts__<br /><br />In a [parent and child account](https://www.linode.com/docs/guides/parent-child-accounts/) environment, the following apply:<br /><br />- Child account users can't run this operation. These users don't have access to billing-related operations.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.account.payment_methods.make_default 
@paymentMethodId='{{ paymentMethodId }}' --required
;
```
</TabItem>
</Tabs>
