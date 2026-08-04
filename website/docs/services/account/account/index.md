--- 
title: account
hide_title: false
hide_table_of_contents: false
keywords:
  - account
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

Creates, updates, deletes, gets or lists an <code>account</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.account.account" /></td></tr>
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

Returns a single account object.

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
    <td><CopyableCode code="tax_id" /></td>
    <td><code>string</code></td>
    <td>The tax identification number (TIN) assigned to this account, used for tax calculations. A TIN is set by the national authorities in your `country`, based on your `address_1`, and it may be named differently between countries. Set to an empty string (`""`) if a TIN doesn't apply or for countries that don't collect tax.  &gt; 📘 &gt; &gt; This value is externally validated. If the validation is successful, a `tax_id_valid` [event](https://techdocs.akamai.com/linode-api/reference/get-events) is triggered. If unsuccessful, a `tax_id_invalid` event is triggered and an error response is issued for an operation that included it. (example: ATU99999999)</td>
</tr>
<tr>
    <td><CopyableCode code="first_name" /></td>
    <td><code>string</code></td>
    <td>The first name of the person assigned to this account. This value can't include the characters, `<` `>` `(` `)` `"` `=`. (example: John)</td>
</tr>
<tr>
    <td><CopyableCode code="last_name" /></td>
    <td><code>string</code></td>
    <td>The last name of the person assigned to this account. This value can't include the characters, `<` `>` `(` `)` `"` `=`. (example: Smith)</td>
</tr>
<tr>
    <td><CopyableCode code="active_promotions" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="active_since" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ The date and time the account was activated. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="address_1" /></td>
    <td><code>string</code></td>
    <td>The first line of this account's billing address. (example: 123 Main Street)</td>
</tr>
<tr>
    <td><CopyableCode code="address_2" /></td>
    <td><code>string</code></td>
    <td>The second line of this account's billing address. (example: Suite A)</td>
</tr>
<tr>
    <td><CopyableCode code="balance" /></td>
    <td><code>number</code></td>
    <td>__Read-only__ This account's balance, in US dollars.</td>
</tr>
<tr>
    <td><CopyableCode code="balance_uninvoiced" /></td>
    <td><code>number</code></td>
    <td>__Read-only__ This account's current estimated invoice in US dollars. This is not your final invoice balance. Transfer charges are not included in the estimate.</td>
</tr>
<tr>
    <td><CopyableCode code="billing_source" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The source of service charges for this account. Accounts that are associated with Akamai-specific customers return a value of `akamai`. All other accounts return a value of `linode`. (akamai, linode) (example: akamai)</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>array</code></td>
    <td>__Read-only__ The Akamai Cloud Computing services your account supports.</td>
</tr>
<tr>
    <td><CopyableCode code="city" /></td>
    <td><code>string</code></td>
    <td>The city for this account's `address`. (example: Philadelphia)</td>
</tr>
<tr>
    <td><CopyableCode code="company" /></td>
    <td><code>string</code></td>
    <td>The company name assigned to this account. This value can't include the characters, `<` `>` `(` `)` `"` `=`. (example: Linode LLC)</td>
</tr>
<tr>
    <td><CopyableCode code="country" /></td>
    <td><code>string</code></td>
    <td>The two-letter ISO 3166 country code for this account's `address`. (example: US)</td>
</tr>
<tr>
    <td><CopyableCode code="credit_card" /></td>
    <td><code>object</code></td>
    <td>__Read-only__ The credit card information assigned to this account.</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>The email address of the person assigned to this account. (example: john.smith@linode.com)</td>
</tr>
<tr>
    <td><CopyableCode code="euuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>__Read-only__ An external unique identifier for this account. (example: E1AF5EEC-526F-487D-B317EBEB34C87D71)</td>
</tr>
<tr>
    <td><CopyableCode code="phone" /></td>
    <td><code>string</code></td>
    <td>The phone number assigned to this account. (example: 215-555-1212)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state or province for the `address` set for your account, if applicable.  - If the `address` is in the United States (US) or Canada (CA), this is the two-letter ISO 3166 code for the state or province.  - If it's a US military `address`, this is the abbreviation for that territory. This includes `AA` for Armed Forces Americas (excluding Canada), `AE` for Armed Forces Africa, Europe, Middle East, and Canada, or `AP` for Armed Forces Pacific.  - If outside the US or CA, this is the province associated with the account's `address`. (example: PA)</td>
</tr>
<tr>
    <td><CopyableCode code="zip" /></td>
    <td><code>string</code></td>
    <td>The zip code for this account's `address`.  - It can only contain ASCII letters, numbers, and dashes (`-`).  - It can't contain more than nine letter or number characters. (example: 19102-1234)</td>
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
    <td></td>
    <td></td>
    <td>Returns the contact and billing information related to your account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td></td>
    <td></td>
    <td>Updates contact and billing information related to your account. If you exclude any properties from the request, the operation leaves them unchanged.<br /><br />&gt; 📘<br />&gt;<br />&gt; When updating an account's `country` to `US`, you'll get an error if the account's `zip` is not a valid US zip code.<br /><br />**Parent and child accounts**<br /><br />In a [parent and child account](https://www.linode.com/docs/guides/parent-child-accounts/) environment, the following apply:<br /><br />- You can't change the `company` for a parent account. Akamai uses this value to set the name for a child account parent user (proxy user) on any child account.<br /><br />- Child account users can't run this operation. These users don't have access to billing-related operations.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Deletes an active account. Akamai attempts to charge the credit card on file for any remaining balance. An error occurs if this charge fails.<br /><br />&gt; 🚧<br />&gt;<br />&gt; - This operation permanently deletes your account and it _can't_ be recovered. Also, there is no warning prompt after you execute this operation.<br />&gt;<br />&gt; - Only account users with _unrestricted_ access can run this operation.<br /><br />__Parent and child accounts__<br /><br />In a [parent and child account](https://www.linode.com/docs/guides/parent-child-accounts/) environment, the following apply:<br /><br />- A child account user can't remove a child account.<br /><br />- You can't remove a parent account if it has an active child account.<br /><br />- You need to work with your Akamai account team to dissolve any parent-child account relationships before you can fully remove a child or parent account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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

Returns the contact and billing information related to your account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
tax_id,
first_name,
last_name,
active_promotions,
active_since,
address_1,
address_2,
balance,
balance_uninvoiced,
billing_source,
capabilities,
city,
company,
country,
credit_card,
email,
euuid,
phone,
state,
zip
FROM linode.account.account
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates contact and billing information related to your account. If you exclude any properties from the request, the operation leaves them unchanged.<br /><br />&gt; 📘<br />&gt;<br />&gt; When updating an account's `country` to `US`, you'll get an error if the account's `zip` is not a valid US zip code.<br /><br />**Parent and child accounts**<br /><br />In a [parent and child account](https://www.linode.com/docs/guides/parent-child-accounts/) environment, the following apply:<br /><br />- You can't change the `company` for a parent account. Akamai uses this value to set the name for a child account parent user (proxy user) on any child account.<br /><br />- Child account users can't run this operation. These users don't have access to billing-related operations.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.account.account
SET 
address_1 = '{{ address_1 }}',
address_2 = '{{ address_2 }}',
city = '{{ city }}',
company = '{{ company }}',
country = '{{ country }}',
email = '{{ email }}',
first_name = '{{ first_name }}',
last_name = '{{ last_name }}',
phone = '{{ phone }}',
state = '{{ state }}',
tax_id = '{{ tax_id }}',
zip = '{{ zip }}'
RETURNING
tax_id,
first_name,
last_name,
active_promotions,
active_since,
address_1,
address_2,
balance,
balance_uninvoiced,
billing_source,
capabilities,
city,
company,
country,
credit_card,
email,
euuid,
phone,
state,
zip;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel"
    values={[
        { label: 'cancel', value: 'cancel' }
    ]}
>
<TabItem value="cancel">

Deletes an active account. Akamai attempts to charge the credit card on file for any remaining balance. An error occurs if this charge fails.<br /><br />&gt; 🚧<br />&gt;<br />&gt; - This operation permanently deletes your account and it _can't_ be recovered. Also, there is no warning prompt after you execute this operation.<br />&gt;<br />&gt; - Only account users with _unrestricted_ access can run this operation.<br /><br />__Parent and child accounts__<br /><br />In a [parent and child account](https://www.linode.com/docs/guides/parent-child-accounts/) environment, the following apply:<br /><br />- A child account user can't remove a child account.<br /><br />- You can't remove a parent account if it has an active child account.<br /><br />- You need to work with your Akamai account team to dissolve any parent-child account relationships before you can fully remove a child or parent account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.account.account.cancel 
@@json=
'{
"comments": "{{ comments }}"
}'
;
```
</TabItem>
</Tabs>
