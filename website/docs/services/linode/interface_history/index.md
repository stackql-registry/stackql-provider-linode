--- 
title: interface_history
hide_title: false
hide_table_of_contents: false
keywords:
  - interface_history
  - linode
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

Creates, updates, deletes, gets or lists an <code>interface_history</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="interface_history" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.linode.interface_history" /></td></tr>
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

Returns a paginated list of network interface versions for a Linode.

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
    <td><CopyableCode code="interface_history_id" /></td>
    <td><code>integer</code></td>
    <td>__Filterable__, __Read-only__ The unique ID for this history version.</td>
</tr>
<tr>
    <td><CopyableCode code="interface_id" /></td>
    <td><code>integer</code></td>
    <td>__Filterable__, __Read-only__ The network interface defined in the `version`.</td>
</tr>
<tr>
    <td><CopyableCode code="linode_id" /></td>
    <td><code>integer</code></td>
    <td>__Filterable__, __Read-only__ The Linode the `interface_id` belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__, __Read-only__ When this version was created. Use `created` to determine which settings an interface prevously had. (example: 2025-08-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="interface_data" /></td>
    <td><code>string</code></td>
    <td>The JSON body returned in response to a successful `PUT`, `POST`, or `DELETE` operation on the interface.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>__Filterable__, __Read-only__ The network interface's version. The first version from a `POST` is `1`. The version number is incremented when the network interface configuration is changed.</td>
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
    <td><a href="#parameter-linodeId"><code>linodeId</code></a></td>
    <td></td>
    <td>__Beta__ Lists the history of network interfaces by version for a Linode. This operation is for Linode interfaces, and not for legacy configuration profile interfaces.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-linodeId">
    <td><CopyableCode code="linodeId" /></td>
    <td><code>string</code></td>
    <td>The `id` of the Linode.</td>
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

__Beta__ Lists the history of network interfaces by version for a Linode. This operation is for Linode interfaces, and not for legacy configuration profile interfaces.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
interface_history_id,
interface_id,
linode_id,
created,
interface_data,
version
FROM linode.linode.interface_history
WHERE linodeId = '{{ linodeId }}' -- required
;
```
</TabItem>
</Tabs>
