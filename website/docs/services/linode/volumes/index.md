--- 
title: volumes
hide_title: false
hide_table_of_contents: false
keywords:
  - volumes
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

Creates, updates, deletes, gets or lists a <code>volumes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="volumes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.linode.volumes" /></td></tr>
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

Returns the Block Storage volumes attached to this Linode.

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
    <td>__Read-only__ The unique identifier for the volume.</td>
</tr>
<tr>
    <td><CopyableCode code="linode_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the Linode this volume is attached to, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this volume was created. (example: 2025-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="encryption" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ Whether encryption is enabled on this volume. (enabled, disabled) (example: enabled)</td>
</tr>
<tr>
    <td><CopyableCode code="filesystem_path" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The full file system path for the volume, based on its `label`. The path is `/dev/disk/by-id/scsi-0Linode_Volume_label`. (example: /dev/disk/by-id/scsi-0Linode_Volume_my-volume)</td>
</tr>
<tr>
    <td><CopyableCode code="hardware_type" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The storage type of this volume. This can be either `hdd` to emulate a hard disk drive for the volume, or `nvme` to emulate a non-volatile memory express solid state drive. (hdd, nvme) (example: nvme)</td>
</tr>
<tr>
    <td><CopyableCode code="io_ready" /></td>
    <td><code>boolean</code></td>
    <td>__Read-only__ Indicates whether the volume is successfully attached to a Linode and ready for read and write operations.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The name of the volume. A `label` can be up to 32 characters long and contain alphanumeric characters, hyphens, and underscores. This value is also used in the volume's `filesystem_path`. (example: my-volume, pattern: <code>^&#91;a-zA-Z&#93;((?!--|__)&#91;a-zA-Z0-9-_&#93;)+$</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="linode_label" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The name of the Linode this volume is attached to, if applicable. (example: linode123)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the region where the volume lives. (example: us-iad)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>The volume's size, in gigabytes.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The current status of the volume. This can be one of:  - `creating`. The API is creating the volume and it's not ready for use.  - `active`. The volume is online and ready for use.  - `resizing`. The volume's capacity is being upgraded.  - `key_rotating`. The volume's encryption keys are being rotated to new values. Requests to resize, delete, or clone a volume fail during encryption key rotation. (creating, active, resizing, key_rotating) (example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>__Filterable__ Any tags applied to this object. Use [tags](https://techdocs.akamai.com/linode-api/reference/post-tag) to label and organize your cloud computing resources.</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this volume was last updated. (example: 2025-01-01T00:01:01)</td>
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
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>View the Block Storage volumes attached to this Linode.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
    <td>ID of the Linode to look up.</td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

View the Block Storage volumes attached to this Linode.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
linode_id,
created,
encryption,
filesystem_path,
hardware_type,
io_ready,
label,
linode_label,
region,
size,
status,
tags,
updated
FROM linode.linode.volumes
WHERE linodeId = '{{ linodeId }}' -- required
AND page = '{{ page }}'
AND page_size = '{{ page_size }}'
;
```
</TabItem>
</Tabs>
