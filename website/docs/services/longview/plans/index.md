--- 
title: plans
hide_title: false
hide_table_of_contents: false
keywords:
  - plans
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

Creates, updates, deletes, gets or lists a <code>plans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="plans" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.longview.plans" /></td></tr>
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

The Longview plan details for this account.

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
    <td></td>
    <td></td>
    <td>Get the details of your current Longview plan. This returns a `LongviewSubscription` object for your current Longview Pro plan, or an empty set `&#123;&#125;` if your current plan is Longview Free.<br /><br />You must have at least one of the following `global` [List a user's grants](https://techdocs.akamai.com/linode-api/reference/get-user-grants) in order to run this operation:<br /><br />  - `"account_access": read_write`<br />  - `"account_access": read_only`<br />  - `"longview_subscription": true`<br />  - `"add_longview": true`<br /><br />To update your subscription plan, send a request to [Update a Longview plan](https://techdocs.akamai.com/linode-api/reference/put-longview-plan).<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td></td>
    <td></td>
    <td>Update your Longview plan to that of the given subscription ID. This returns a `LongviewSubscription` object for the updated Longview Pro plan, or an empty set `&#123;&#125;` if the updated plan is Longview Free.<br /><br />You must have `"longview_subscription": true` configured as a `global` [user grant](https://techdocs.akamai.com/linode-api/reference/get-user-grants) in order to run this operation.<br /><br />You can send a request to the [List Longview subscriptions](https://techdocs.akamai.com/linode-api/reference/get-longview-subscriptions) operation to receive the details, including `id`'s, of each plan.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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

Get the details of your current Longview plan. This returns a `LongviewSubscription` object for your current Longview Pro plan, or an empty set `&#123;&#125;` if your current plan is Longview Free.<br /><br />You must have at least one of the following `global` [List a user's grants](https://techdocs.akamai.com/linode-api/reference/get-user-grants) in order to run this operation:<br /><br />  - `"account_access": read_write`<br />  - `"account_access": read_only`<br />  - `"longview_subscription": true`<br />  - `"add_longview": true`<br /><br />To update your subscription plan, send a request to [Update a Longview plan](https://techdocs.akamai.com/linode-api/reference/put-longview-plan).<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
clients_included,
label,
price
FROM linode.longview.plans
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

Update your Longview plan to that of the given subscription ID. This returns a `LongviewSubscription` object for the updated Longview Pro plan, or an empty set `&#123;&#125;` if the updated plan is Longview Free.<br /><br />You must have `"longview_subscription": true` configured as a `global` [user grant](https://techdocs.akamai.com/linode-api/reference/get-user-grants) in order to run this operation.<br /><br />You can send a request to the [List Longview subscriptions](https://techdocs.akamai.com/linode-api/reference/get-longview-subscriptions) operation to receive the details, including `id`'s, of each plan.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.longview.plans
SET 
longview_subscription = '{{ longview_subscription }}'
RETURNING
id,
clients_included,
label,
price;
```
</TabItem>
</Tabs>
