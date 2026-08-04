--- 
title: volumes
hide_title: false
hide_table_of_contents: false
keywords:
  - volumes
  - volumes
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
<tr><td><b>Id</b></td><td><CopyableCode code="linode.volumes.volumes" /></td></tr>
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

Returns a single volume object.

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
<TabItem value="list">

The Block Storage volumes on your account are returned.

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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-volumeId"><code>volumeId</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Get information about a specific Block Storage volume.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Returns a paginated list of the Block Storage volumes that you have permission to view.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-label"><code>label</code></a></td>
    <td></td>
    <td>Creates a [Block Storage](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-block-storage) volume on your account. Creating a new volume accrues additional charges on your account.<br /><br />&gt; 📘<br />&gt;<br />&gt; To run this operation, your user needs the `add_volume` [grant](https://techdocs.akamai.com/linode-api/reference/get-user-grants).<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-volumeId"><code>volumeId</code></a></td>
    <td></td>
    <td>Update a Block Storage volume that you have permission to `read_write`.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-volumeId"><code>volumeId</code></a></td>
    <td></td>
    <td>Deletes a specified Block Storage volume that you have permission to `read_write`.<br /><br />- Deleting a volume can't be undone.<br /><br />- Deleting stops billing for the volume. You'll be billed for the time the volume was active during the current billing period.<br /><br />- You can't delete a volume that's currently being migrated. You need to wait for the migration to complete.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#attach"><CopyableCode code="attach" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-volumeId"><code>volumeId</code></a>, <a href="#parameter-linode_id"><code>linode_id</code></a></td>
    <td></td>
    <td>Attach a Block Storage volume to an existing Linode.<br /><br />&gt; 📘<br />&gt;<br />&gt; - To run this operation, your user needs the `read-write` permission to both the volume and the Linode you want to add it to.<br />&gt;<br />&gt; - The volume and its target Linode need to exist in the same `region`. You can run the [List volumes](https://techdocs.akamai.com/linode-api/reference/get-volumes) and [List Linodes](https://techdocs.akamai.com/linode-api/reference/get-linode-instances) operations and review the `region` for each.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#clone"><CopyableCode code="clone" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-volumeId"><code>volumeId</code></a>, <a href="#parameter-label"><code>label</code></a></td>
    <td></td>
    <td>Target an existing Block Storage volume to create a new one, that's the same size and includes the same data. A new volume will incur a charge on your account.<br /><br />&gt; 📘<br />&gt;<br />&gt; - To run this operation, your user needs the `add_volume` [grant](https://techdocs.akamai.com/linode-api/reference/get-user-grants).<br />&gt;<br />&gt; - Only a volume with a `status` of `active` can be cloned. Run the [List volumes](https://techdocs.akamai.com/linode-api/reference/get-volumes) operation to view the `status` of each of your volumes.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#detach"><CopyableCode code="detach" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-volumeId"><code>volumeId</code></a></td>
    <td></td>
    <td>Detach a Block Storage volume from a Linode. When you [delete](https://techdocs.akamai.com/linode-api/reference/delete-linode-instance) a Linode, any volumes attached to it are automatically detached.<br /><br />&gt; 📘<br />&gt;<br />&gt; To run this operation, your user needs the `read-write` permission to both the volume and the Linode you want to detach it from.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#resize"><CopyableCode code="resize" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-volumeId"><code>volumeId</code></a>, <a href="#parameter-size"><code>size</code></a></td>
    <td></td>
    <td>Increase the size of an existing Block Storage volume on your account.<br /><br />&gt; 📘<br />&gt;<br />&gt; - To run this operation, your user needs the `add_volume` [grant](https://techdocs.akamai.com/linode-api/reference/get-user-grants).<br />&gt;<br />&gt; - You can't decrease the size of an existing volume.<br />&gt;<br />&gt; - Only a volume with a `status` of `active` can be resized. Run the [List volumes](https://techdocs.akamai.com/linode-api/reference/get-volumes) operation to view the `status` of each of your volumes.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-volumeId">
    <td><CopyableCode code="volumeId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the target volume. Run the [List volumes](https://techdocs.akamai.com/linode-api/reference/get-volumes) operation and store the `id` for the target volume as your `volumeId`.</td>
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

Get information about a specific Block Storage volume.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

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
FROM linode.volumes.volumes
WHERE volumeId = '{{ volumeId }}' -- required
AND page = '{{ page }}'
AND page_size = '{{ page_size }}'
;
```
</TabItem>
<TabItem value="list">

Returns a paginated list of the Block Storage volumes that you have permission to view.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

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
FROM linode.volumes.volumes
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

Creates a [Block Storage](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-block-storage) volume on your account. Creating a new volume accrues additional charges on your account.<br /><br />&gt; 📘<br />&gt;<br />&gt; To run this operation, your user needs the `add_volume` [grant](https://techdocs.akamai.com/linode-api/reference/get-user-grants).<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.volumes.volumes (
config_id,
encryption,
label,
linode_id,
region,
size,
tags
)
SELECT 
{{ config_id }},
'{{ encryption }}',
'{{ label }}' /* required */,
{{ linode_id }},
'{{ region }}',
{{ size }},
'{{ tags }}'
RETURNING
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
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: volumes
  props:
    - name: config_id
      value: {{ config_id }}
      description: |
        When creating a volume attached to a Linode, this is the identifier of the Linode configuration profile (config) where the volume will live. Run the [List configuration profiles](https://techdocs.akamai.com/linode-api/reference/get-linode-configs) operation and store the \`id\` for the applicable config. The following apply when adding a \`config_id\`:
        - The selected config needs to belong to the Linode referenced by \`linode_id\` in this request.
        - You can't provide a \`config_id\` if you don't also provide a \`linode_id\` in the request.
        - If you send a \`linode_id\` without a \`config_id\` in the request, the API attaches the volume to that Linode's last used config, or to the only config in that Linode. If there isn't a config available for attachment, the API returns an error.
    - name: encryption
      value: "{{ encryption }}"
      description: |
        Enables encryption on the volume. Full disk encryption ensures the data stored on a block storage volume drive is secure. It protects against unauthorized access by keeping the data encrypted if the volume drive is removed from the data center, decommissioned, or disposed of.
        The platform automatically manages the encryption and decryption process for you. You can use an encrypted volume the same way you use a non-encrypted volume.
        > 📘
        >
        > You can enable or disable disk encryption only when creating new block storage volumes. After a volume is created, the encryption setting can't be changed.
      valid_values: ['enabled', 'disabled']
      default: disabled
    - name: label
      value: "{{ label }}"
      description: |
        The name of the volume. A \`label\` can be up to 32 characters long and contain alphanumeric characters, hyphens, and underscores. This value is also used in the volume's \`filesystem_path\`.
    - name: linode_id
      value: {{ linode_id }}
      description: |
        The Linode this volume should be attached to after it's created. If not given, the volume will be created without an attachment.
    - name: region
      value: "{{ region }}"
      description: |
        The region where the API deploys the volume. This is only required if you didn't provide a \`linode_id\` for the volume.
    - name: size
      value: {{ size }}
      description: |
        The initial size of this volume, in GB. Volumes can only be resized after the creation completes.
      default: 20
    - name: tags
      value:
        - "{{ tags }}"
      description: |
        __Filterable__ Any tags applied to this object. Use [tags](https://techdocs.akamai.com/linode-api/reference/post-tag) to label and organize your cloud computing resources.
`}</CodeBlock>

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

Update a Block Storage volume that you have permission to `read_write`.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.volumes.volumes
SET 
label = '{{ label }}',
linode_id = {{ linode_id }},
region = '{{ region }}',
size = {{ size }},
tags = '{{ tags }}'
WHERE 
volumeId = '{{ volumeId }}' --required
RETURNING
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
updated;
```
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

Deletes a specified Block Storage volume that you have permission to `read_write`.<br /><br />- Deleting a volume can't be undone.<br /><br />- Deleting stops billing for the volume. You'll be billed for the time the volume was active during the current billing period.<br /><br />- You can't delete a volume that's currently being migrated. You need to wait for the migration to complete.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.volumes.volumes
WHERE volumeId = '{{ volumeId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="attach"
    values={[
        { label: 'attach', value: 'attach' },
        { label: 'clone', value: 'clone' },
        { label: 'detach', value: 'detach' },
        { label: 'resize', value: 'resize' }
    ]}
>
<TabItem value="attach">

Attach a Block Storage volume to an existing Linode.<br /><br />&gt; 📘<br />&gt;<br />&gt; - To run this operation, your user needs the `read-write` permission to both the volume and the Linode you want to add it to.<br />&gt;<br />&gt; - The volume and its target Linode need to exist in the same `region`. You can run the [List volumes](https://techdocs.akamai.com/linode-api/reference/get-volumes) and [List Linodes](https://techdocs.akamai.com/linode-api/reference/get-linode-instances) operations and review the `region` for each.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.volumes.volumes.attach 
@volumeId='{{ volumeId }}' --required 
@@json=
'{
"config_id": {{ config_id }}, 
"linode_id": {{ linode_id }}, 
"persist_across_boots": {{ persist_across_boots }}
}'
;
```
</TabItem>
<TabItem value="clone">

Target an existing Block Storage volume to create a new one, that's the same size and includes the same data. A new volume will incur a charge on your account.<br /><br />&gt; 📘<br />&gt;<br />&gt; - To run this operation, your user needs the `add_volume` [grant](https://techdocs.akamai.com/linode-api/reference/get-user-grants).<br />&gt;<br />&gt; - Only a volume with a `status` of `active` can be cloned. Run the [List volumes](https://techdocs.akamai.com/linode-api/reference/get-volumes) operation to view the `status` of each of your volumes.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.volumes.volumes.clone 
@volumeId='{{ volumeId }}' --required 
@@json=
'{
"label": "{{ label }}"
}'
;
```
</TabItem>
<TabItem value="detach">

Detach a Block Storage volume from a Linode. When you [delete](https://techdocs.akamai.com/linode-api/reference/delete-linode-instance) a Linode, any volumes attached to it are automatically detached.<br /><br />&gt; 📘<br />&gt;<br />&gt; To run this operation, your user needs the `read-write` permission to both the volume and the Linode you want to detach it from.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.volumes.volumes.detach 
@volumeId='{{ volumeId }}' --required
;
```
</TabItem>
<TabItem value="resize">

Increase the size of an existing Block Storage volume on your account.<br /><br />&gt; 📘<br />&gt;<br />&gt; - To run this operation, your user needs the `add_volume` [grant](https://techdocs.akamai.com/linode-api/reference/get-user-grants).<br />&gt;<br />&gt; - You can't decrease the size of an existing volume.<br />&gt;<br />&gt; - Only a volume with a `status` of `active` can be resized. Run the [List volumes](https://techdocs.akamai.com/linode-api/reference/get-volumes) operation to view the `status` of each of your volumes.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.volumes.volumes.resize 
@volumeId='{{ volumeId }}' --required 
@@json=
'{
"size": {{ size }}
}'
;
```
</TabItem>
</Tabs>
