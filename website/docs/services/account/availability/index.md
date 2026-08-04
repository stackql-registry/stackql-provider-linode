--- 
title: availability
hide_title: false
hide_table_of_contents: false
keywords:
  - availability
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

Creates, updates, deletes, gets or lists an <code>availability</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="availability" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.account.availability" /></td></tr>
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

The services available in the specified region.

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
    <td><CopyableCode code="available" /></td>
    <td><code>array</code></td>
    <td>__Read-only__ A list of services _available_ to your account in the `region`.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The Akamai cloud computing data center (region), represented by a slug value. You can view a full list of regions and their associated slugs with the [List regions](https://techdocs.akamai.com/linode-api/reference/get-regions) operation. (example: us-east)</td>
</tr>
<tr>
    <td><CopyableCode code="unavailable" /></td>
    <td><code>array</code></td>
    <td>__Read-only__ A list of services _unavailable_ to your account in the `region`.</td>
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
    <td><a href="#parameter-regionId"><code>regionId</code></a></td>
    <td></td>
    <td>View the available services for your account, in a specific region.<br /><br />&gt; 📘<br />&gt;<br />&gt; Only account users with _unrestricted_ access can run this operation.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-regionId">
    <td><CopyableCode code="regionId" /></td>
    <td><code>string</code></td>
    <td>The abbreviated value ("slug") for the applicable data center. Run the [List regions](https://techdocs.akamai.com/linode-api/reference/get-regions) operation to view the slug for each data center.</td>
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

View the available services for your account, in a specific region.<br /><br />&gt; 📘<br />&gt;<br />&gt; Only account users with _unrestricted_ access can run this operation.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
available,
region,
unavailable
FROM linode.account.availability
WHERE regionId = '{{ regionId }}' -- required
;
```
</TabItem>
</Tabs>
