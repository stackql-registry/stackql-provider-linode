--- 
title: quota_usage
hide_title: false
hide_table_of_contents: false
keywords:
  - quota_usage
  - object_storage
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

Creates, updates, deletes, gets or lists a <code>quota_usage</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="quota_usage" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.object_storage.quota_usage" /></td></tr>
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

Usage data for the specified `objQuotaId`.

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
    <td><CopyableCode code="quota_limit" /></td>
    <td><code>integer</code></td>
    <td>The availability limit for a specific Object Storage resource (`objQuotaId`) for a single endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="usage" /></td>
    <td><code>integer</code></td>
    <td>The quantity of the Object Storage resource currently in use on an endpoint. Displayed as `null` if no resources are in use.</td>
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
    <td><a href="#parameter-objQuotaId"><code>objQuotaId</code></a></td>
    <td></td>
    <td>Returns usage data for a specific `objQuotaId`. This includes the maximum number of `objQuotaId` resources you can have for a single endpoint and the current usage for that resource.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-objQuotaId">
    <td><CopyableCode code="objQuotaId" /></td>
    <td><code>string</code></td>
    <td>The unique string that identifies the specific Object Storage-related quota to look up. This follows the pattern, `obj-<quota_type>-<s3_endpoint>`, for example, `obj-buckets-eu-central-1.linodeobjects.com`.</td>
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

Returns usage data for a specific `objQuotaId`. This includes the maximum number of `objQuotaId` resources you can have for a single endpoint and the current usage for that resource.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
quota_limit,
usage
FROM linode.object_storage.quota_usage
WHERE objQuotaId = '{{ objQuotaId }}' -- required
;
```
</TabItem>
</Tabs>
