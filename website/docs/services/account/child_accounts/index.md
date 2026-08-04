--- 
title: child_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - child_accounts
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

Creates, updates, deletes, gets or lists a <code>child_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="child_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.account.child_accounts" /></td></tr>
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

Returns the specified child-level account.

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
    <td>The tax identification number for this child account. Use this for tax calculations in some countries. If you live in a country that doesn't collect taxes, ensure this is an empty string (`""`). (example: ATU99999999)</td>
</tr>
<tr>
    <td><CopyableCode code="first_name" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The first name of the owner of this child account. It can't include any of these characters: `<` `>` `(` `)` `"` `=`. (example: John)</td>
</tr>
<tr>
    <td><CopyableCode code="last_name" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The last name of the owner of this child account. It can't include any of these characters: `<` `>` `(` `)` `"` `=`. (example: Smith)</td>
</tr>
<tr>
    <td><CopyableCode code="active_since" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ The activation date and time for the child account. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="address_1" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ First line of this child account's billing address. (example: 123 Main Street)</td>
</tr>
<tr>
    <td><CopyableCode code="address_2" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ Second line of this child account's billing address, if applicable. (example: Suite A)</td>
</tr>
<tr>
    <td><CopyableCode code="balance" /></td>
    <td><code>number</code></td>
    <td>__Read-only__ This child account's balance, in US dollars.</td>
</tr>
<tr>
    <td><CopyableCode code="balance_uninvoiced" /></td>
    <td><code>number</code></td>
    <td>__Read-only__ This child account's current estimated invoice in US dollars. This is not your final invoice balance. Transfer charges are not included in the estimate.</td>
</tr>
<tr>
    <td><CopyableCode code="billing_source" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The source of service charges for this account, as determined by its relationship with Akamai. The API returns a value of `external` to describe a child account in a parent-child account environment. (external) (example: external)</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>array</code></td>
    <td>__Read-only__ A list of the capabilities the child account supports.</td>
</tr>
<tr>
    <td><CopyableCode code="city" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The city for this child account's billing address. (example: San Diego)</td>
</tr>
<tr>
    <td><CopyableCode code="company" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The company name for the owner of this child account. It can't include any of these characters: `<` `>` `(` `)` `"` `=`. You can't change this value yourself. We use it to create the proxy users that a parent account uses to access a child account. Talk to your account team if you need to change this value. (example: Acme)</td>
</tr>
<tr>
    <td><CopyableCode code="country" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The two-letter ISO 3166 country code for this child account's billing address. (example: US)</td>
</tr>
<tr>
    <td><CopyableCode code="credit_card" /></td>
    <td><code>object</code></td>
    <td>__Read-only__ Information for the credit card you've assigned to this child account.</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The email address of the owner of this child account. (example: john.smith@linode.com)</td>
</tr>
<tr>
    <td><CopyableCode code="euuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>__Read-only__ An external, unique identifier that Akamai assigned to the child account. (example: A1BC2DEF-34GH-567I-J890KLMN12O34P56)</td>
</tr>
<tr>
    <td><CopyableCode code="phone" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The phone number for the owner of this child account. (example: 858-555-1212)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The state or province for the billing address (`address_1` and `address_2, if applicable`). If in the United States (US) or Canada (CA), this is the two-letter ISO 3166 State or Province code.  &gt; 📘 &gt; &gt; If this is a US military address, use state abbreviations (AA, AE, AP). (example: CA)</td>
</tr>
<tr>
    <td><CopyableCode code="zip" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The zip code of this Account's billing address. The following restrictions apply:  - Can only contain ASCII letters, numbers, and hyphens (`-`). - Can't contain more than 9 letter or number characters. (example: 92111-1234)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Returns child-level accounts.

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
    <td>The tax identification number for this child account. Use this for tax calculations in some countries. If you live in a country that doesn't collect taxes, ensure this is an empty string (`""`). (example: ATU99999999)</td>
</tr>
<tr>
    <td><CopyableCode code="first_name" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The first name of the owner of this child account. It can't include any of these characters: `<` `>` `(` `)` `"` `=`. (example: John)</td>
</tr>
<tr>
    <td><CopyableCode code="last_name" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The last name of the owner of this child account. It can't include any of these characters: `<` `>` `(` `)` `"` `=`. (example: Smith)</td>
</tr>
<tr>
    <td><CopyableCode code="active_since" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ The activation date and time for the child account. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="address_1" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ First line of this child account's billing address. (example: 123 Main Street)</td>
</tr>
<tr>
    <td><CopyableCode code="address_2" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ Second line of this child account's billing address, if applicable. (example: Suite A)</td>
</tr>
<tr>
    <td><CopyableCode code="balance" /></td>
    <td><code>number</code></td>
    <td>__Read-only__ This child account's balance, in US dollars.</td>
</tr>
<tr>
    <td><CopyableCode code="balance_uninvoiced" /></td>
    <td><code>number</code></td>
    <td>__Read-only__ This child account's current estimated invoice in US dollars. This is not your final invoice balance. Transfer charges are not included in the estimate.</td>
</tr>
<tr>
    <td><CopyableCode code="billing_source" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The source of service charges for this account, as determined by its relationship with Akamai. The API returns a value of `external` to describe a child account in a parent-child account environment. (external) (example: external)</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>array</code></td>
    <td>__Read-only__ A list of the capabilities the child account supports.</td>
</tr>
<tr>
    <td><CopyableCode code="city" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The city for this child account's billing address. (example: San Diego)</td>
</tr>
<tr>
    <td><CopyableCode code="company" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The company name for the owner of this child account. It can't include any of these characters: `<` `>` `(` `)` `"` `=`. You can't change this value yourself. We use it to create the proxy users that a parent account uses to access a child account. Talk to your account team if you need to change this value. (example: Acme)</td>
</tr>
<tr>
    <td><CopyableCode code="country" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The two-letter ISO 3166 country code for this child account's billing address. (example: US)</td>
</tr>
<tr>
    <td><CopyableCode code="credit_card" /></td>
    <td><code>object</code></td>
    <td>__Read-only__ Information for the credit card you've assigned to this child account.</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The email address of the owner of this child account. (example: john.smith@linode.com)</td>
</tr>
<tr>
    <td><CopyableCode code="euuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>__Read-only__ An external, unique identifier that Akamai assigned to the child account. (example: A1BC2DEF-34GH-567I-J890KLMN12O34P56)</td>
</tr>
<tr>
    <td><CopyableCode code="phone" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The phone number for the owner of this child account. (example: 858-555-1212)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The state or province for the billing address (`address_1` and `address_2, if applicable`). If in the United States (US) or Canada (CA), this is the two-letter ISO 3166 State or Province code.  &gt; 📘 &gt; &gt; If this is a US military address, use state abbreviations (AA, AE, AP). (example: CA)</td>
</tr>
<tr>
    <td><CopyableCode code="zip" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The zip code of this Account's billing address. The following restrictions apply:  - Can only contain ASCII letters, numbers, and hyphens (`-`). - Can't contain more than 9 letter or number characters. (example: 92111-1234)</td>
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
    <td><a href="#parameter-euuId"><code>euuId</code></a></td>
    <td></td>
    <td>View a specific child account. See [Parent and Child Accounts for Akamai Partners](https://www.linode.com/docs/guides/parent-child-accounts/) for details on these accounts.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation can only be accessed by an unrestricted user, or restricted user with the `child_account_access` grant.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Returns a paginated list of basic information for the child accounts that exist for your parent account. See [Parent and Child Accounts for Akamai Partners](https://www.linode.com/docs/guides/parent-child-accounts/) for details on these accounts.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation can only be accessed by an unrestricted parent user, or restricted parent user with the `child_account_access` grant.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create_proxy_token"><CopyableCode code="create_proxy_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-euuId"><code>euuId</code></a></td>
    <td></td>
    <td>Create a short-lived bearer token for a parent user on a specific child account. In the context of the API, a parent user on a child account is referred to as a "proxy user." When Akamai provisions your parent-child account environment, a proxy user is automatically set in the child account. It follows a specific naming convention:<br /><br />    &lt;Parent account `company` name&gt;_&lt;SHA256 hash of parent `company` name and child account `euuId`&gt;<br /><br />&gt; 📘<br />&gt;<br />&gt; These variables only use the first 15 and 16 characters of these values, respectively.<br /><br />The token lets a parent account run API operations through the proxy user, as if they are a child user in the child account.<br /><br />These points apply to the use of this operation:<br /><br />- To create a token, a parent account user needs the `child_account_access` grant. This lets them use the proxy user on the child account. You can run [List a user's grants](https://techdocs.akamai.com/linode-api/reference/get-user-grants) on a parent account user to check its `child_account_access` setting. To add this access, you can [update](https://techdocs.akamai.com/linode-api/reference/put-user-grants) the parent account user.<br /><br />- The created token inherits the permissions of the proxy user. It will never have less.<br /><br />- The API returns the raw token in the response. You can't get it again, so be sure to store it.<br /><br />Example workflow:<br /><br />1. [List child accounts](https://techdocs.akamai.com/linode-api/reference/get-child-accounts) and store the `euuid` for the applicable one.<br />2. Run this operation and store the `token` that's created for the proxy user.<br />3. As a parent account user with access to the proxy user in the child account, use this `token` to authenticate API operations, as if you were a child user.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-euuId">
    <td><CopyableCode code="euuId" /></td>
    <td><code>string</code></td>
    <td>The child account to look up. You can run the [List child accounts](https://techdocs.akamai.com/linode-api/reference/get-child-accounts) operation to find the applicable account and store its `euuid` as your `euuId`. (example: &#123;&#123;euuId&#125;&#125;)</td>
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

View a specific child account. See [Parent and Child Accounts for Akamai Partners](https://www.linode.com/docs/guides/parent-child-accounts/) for details on these accounts.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation can only be accessed by an unrestricted user, or restricted user with the `child_account_access` grant.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
tax_id,
first_name,
last_name,
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
FROM linode.account.child_accounts
WHERE euuId = '{{ euuId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns a paginated list of basic information for the child accounts that exist for your parent account. See [Parent and Child Accounts for Akamai Partners](https://www.linode.com/docs/guides/parent-child-accounts/) for details on these accounts.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation can only be accessed by an unrestricted parent user, or restricted parent user with the `child_account_access` grant.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
tax_id,
first_name,
last_name,
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
FROM linode.account.child_accounts
WHERE page = '{{ page }}'
AND page_size = '{{ page_size }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="create_proxy_token"
    values={[
        { label: 'create_proxy_token', value: 'create_proxy_token' }
    ]}
>
<TabItem value="create_proxy_token">

Create a short-lived bearer token for a parent user on a specific child account. In the context of the API, a parent user on a child account is referred to as a "proxy user." When Akamai provisions your parent-child account environment, a proxy user is automatically set in the child account. It follows a specific naming convention:<br /><br />    &lt;Parent account `company` name&gt;_&lt;SHA256 hash of parent `company` name and child account `euuId`&gt;<br /><br />&gt; 📘<br />&gt;<br />&gt; These variables only use the first 15 and 16 characters of these values, respectively.<br /><br />The token lets a parent account run API operations through the proxy user, as if they are a child user in the child account.<br /><br />These points apply to the use of this operation:<br /><br />- To create a token, a parent account user needs the `child_account_access` grant. This lets them use the proxy user on the child account. You can run [List a user's grants](https://techdocs.akamai.com/linode-api/reference/get-user-grants) on a parent account user to check its `child_account_access` setting. To add this access, you can [update](https://techdocs.akamai.com/linode-api/reference/put-user-grants) the parent account user.<br /><br />- The created token inherits the permissions of the proxy user. It will never have less.<br /><br />- The API returns the raw token in the response. You can't get it again, so be sure to store it.<br /><br />Example workflow:<br /><br />1. [List child accounts](https://techdocs.akamai.com/linode-api/reference/get-child-accounts) and store the `euuid` for the applicable one.<br />2. Run this operation and store the `token` that's created for the proxy user.<br />3. As a parent account user with access to the proxy user in the child account, use this `token` to authenticate API operations, as if you were a child user.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.account.child_accounts.create_proxy_token 
@euuId='{{ euuId }}' --required
;
```
</TabItem>
</Tabs>
