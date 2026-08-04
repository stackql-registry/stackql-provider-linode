--- 
title: endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - endpoints
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

Creates, updates, deletes, gets or lists an <code>endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.object_storage.endpoints" /></td></tr>
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

A paginated list of endpoints you can access.

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
    <td><CopyableCode code="endpoint_type" /></td>
    <td><code>string</code></td>
    <td>The type of `s3_endpoint` available to the active `user` in this `region`. See [Endpoint types](https://techdocs.akamai.com/cloud-computing/docs/object-storage#endpoint-types) for more information. (E0, E1, E2, E3) (example: E1)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Akamai cloud computing region, represented by its slug value. Run the [List regions](https://techdocs.akamai.com/linode-api/reference/get-regions) operation to view all regions and their slugs. (example: us-iad)</td>
</tr>
<tr>
    <td><CopyableCode code="s3_endpoint" /></td>
    <td><code>string</code></td>
    <td>Your S3-compatible endpoint URL, based on the `endpoint_type` and `region`. Displayed as `null` if you haven't assigned an endpoint for your user. (example: us-iad-1.linodeobjects.com)</td>
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
    <td></td>
    <td></td>
    <td>Returns a paginated list of all Object Storage [endpoints](https://techdocs.akamai.com/cloud-computing/docs/object-storage#endpoint-types) available in your account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Returns a paginated list of all Object Storage [endpoints](https://techdocs.akamai.com/cloud-computing/docs/object-storage#endpoint-types) available in your account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
endpoint_type,
region,
s3_endpoint
FROM linode.object_storage.endpoints
;
```
</TabItem>
</Tabs>
