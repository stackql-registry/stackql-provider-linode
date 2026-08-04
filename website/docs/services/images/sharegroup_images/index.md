--- 
title: sharegroup_images
hide_title: false
hide_table_of_contents: false
keywords:
  - sharegroup_images
  - images
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

Creates, updates, deletes, gets or lists a <code>sharegroup_images</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sharegroup_images" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.images.sharegroup_images" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_by_token"
    values={[
        { label: 'list_by_token', value: 'list_by_token' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list_by_token">

A paginated list of shared images in a share group.

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
    <td>__Read-only__ The shared image's unique idenfifier. (example: shared/1)</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>array</code></td>
    <td>__Read-only__ A list of the possible capabilities of this image.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this image share was created. (example: 2025-08-04T10:07:59)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The shared image creator's username.</td>
</tr>
<tr>
    <td><CopyableCode code="deprecated" /></td>
    <td><code>boolean</code></td>
    <td>__Read-only__ A `true` value indicates a deprecated image. Only public images can be deprecated.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The shared image's detailed description. (example: Official Debian Linux image for server deployment)</td>
</tr>
<tr>
    <td><CopyableCode code="eol" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ The time of the public image's planned removal from service. `null` for private images.</td>
</tr>
<tr>
    <td><CopyableCode code="expiry" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ Only images created automatically from a deleted compute instance (`type=automatic`) expire, `null` for private images.</td>
</tr>
<tr>
    <td><CopyableCode code="image_sharing" /></td>
    <td><code>object</code></td>
    <td>__Read-only__ Sharing information for the image, including who it was shared by and with.</td>
</tr>
<tr>
    <td><CopyableCode code="is_public" /></td>
    <td><code>boolean</code></td>
    <td>__Read-only__ A `true` value if the image is a public distribution image. A `false` value indicates private, account-specific images.</td>
</tr>
<tr>
    <td><CopyableCode code="is_shared" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ A `true` value for shared private images. `none` for images shared within a group. (true, false, none) (example: none)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The shared image's name. (example: Linux Debian)</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>__Filterable__, __Read-only__ Details on the regions where this image is stored. See [Regions and images](https://techdocs.akamai.com/cloud-computing/docs/images#regions-and-images) for full details on support for `regions`.</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ The minimum size in MB this image needs to deploy.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The current status of the image. Possible values are `available`, `creating`, and `pending_upload`. (creating, pending_upload, available) (example: available)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>__Filterable__, __Read-only__ The shared image's organizational tags. A tag can be from 3 to 100 characters long, and each image can include up to 500 tags.</td>
</tr>
<tr>
    <td><CopyableCode code="total_size" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ The total size in bytes of all instances of this image, in all `regions`.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ Indicates how the image was created. It's always `shared` for images in a shared group. An `automatic` image is created automatically from a deleted compute instance. Other users within share groups can access a `shared` image. (manual, automatic, shared) (example: shared)</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this image share was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="vendor" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The upstream distribution vendor, `null` for private and shared images.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Returns a paginated list of shared images within a given group.

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
    <td>__Read-only__ The shared image's unique idenfifier. (example: shared/1)</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>array</code></td>
    <td>__Read-only__ A list of the possible capabilities of this image.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this image share was created. (example: 2025-08-04T10:07:59)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The shared image creator's username.</td>
</tr>
<tr>
    <td><CopyableCode code="deprecated" /></td>
    <td><code>boolean</code></td>
    <td>__Read-only__ A `true` value indicates a deprecated image. Only public images can be deprecated.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The shared image's detailed description. (example: Official Debian Linux image for server deployment)</td>
</tr>
<tr>
    <td><CopyableCode code="eol" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ The time of the public image's planned removal from service. `null` for private images.</td>
</tr>
<tr>
    <td><CopyableCode code="expiry" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ Only images created automatically from a deleted compute instance (`type=automatic`) expire, `null` for private images.</td>
</tr>
<tr>
    <td><CopyableCode code="image_sharing" /></td>
    <td><code>object</code></td>
    <td>__Read-only__ Sharing information for the image, including who it was shared by and with.</td>
</tr>
<tr>
    <td><CopyableCode code="is_public" /></td>
    <td><code>boolean</code></td>
    <td>__Read-only__ A `true` value if the image is a public distribution image. A `false` value indicates private, account-specific images.</td>
</tr>
<tr>
    <td><CopyableCode code="is_shared" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ A `true` value for shared private images. `none` for images shared within a group. (true, false, none) (example: none)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The shared image's name. (example: Linux Debian)</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>__Filterable__, __Read-only__ Details on the regions where this image is stored. See [Regions and images](https://techdocs.akamai.com/cloud-computing/docs/images#regions-and-images) for full details on support for `regions`.</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ The minimum size in MB this image needs to deploy.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The current status of the image. Possible values are `available`, `creating`, and `pending_upload`. (creating, pending_upload, available) (example: available)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>__Filterable__, __Read-only__ The shared image's organizational tags. A tag can be from 3 to 100 characters long, and each image can include up to 500 tags.</td>
</tr>
<tr>
    <td><CopyableCode code="total_size" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ The total size in bytes of all instances of this image, in all `regions`.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ Indicates how the image was created. It's always `shared` for images in a shared group. An `automatic` image is created automatically from a deleted compute instance. Other users within share groups can access a `shared` image. (manual, automatic, shared) (example: shared)</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this image share was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="vendor" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The upstream distribution vendor, `null` for private and shared images.</td>
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
    <td><a href="#list_by_token"><CopyableCode code="list_by_token" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-tokenUuid"><code>tokenUuid</code></a></td>
    <td></td>
    <td>Lists all the shared images a member can access within a share group, using a membership token. To get the `token_uuid`, run the [Get a token](https://techdocs.akamai.com/linode-api/reference/get-sharegroup-token) operation.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-sharegroupId"><code>sharegroupId</code></a></td>
    <td></td>
    <td>Get the details about images shared in a particular group you own.<br /><br />- Run the [List share groups](https://techdocs.akamai.com/linode-api/reference/get-sharegroups) operation to get the `id` you should use as the `(sharegroupId)` path parameter that identifies an existing share group.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-sharegroupId"><code>sharegroupId</code></a>, <a href="#parameter-images"><code>images</code></a></td>
    <td></td>
    <td>Adds images to an existing group where you can share them with other members.<br /><br />- Run the [List share groups](https://techdocs.akamai.com/linode-api/reference/get-sharegroups) operation to get the `id` you should use as the `(sharegroupId)` path parameter that identifies an existing share group.<br /><br />- Run the [Get an image](https://techdocs.akamai.com/linode-api/reference/get-image) operation to see the existing images' `id` values. If needed, [Create an image](https://techdocs.akamai.com/linode-api/reference/post-image) or [Upload an image](https://techdocs.akamai.com/linode-api/reference/post-upload-image).<br /><br />- You can set a `label` and `description` for each image, visible to all group members. If omitted, the shared image keeps the original image's details. Note that when you [Update the original image](https://techdocs.akamai.com/linode-api/reference/put-image), it has no effect on a shared image's details within any groups.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-sharegroupId"><code>sharegroupId</code></a>, <a href="#parameter-imageId"><code>imageId</code></a></td>
    <td></td>
    <td>Updates the details of an image shared within a share group. Run this operation to edit the `label` and `description` of a particular shared image.<br /><br />- Run the [List share groups](https://techdocs.akamai.com/linode-api/reference/get-sharegroups) operation to get the `id` you should use as the `(sharegroupId)` path parameter that identifies an existing share group. To get the `imageID`, run the [List shared images by group](https://techdocs.akamai.com/linode-api/reference/get-sharegroup-images) operation.<br /><br />- You can update either of the fields, but when you provide a new `label`, make sure that it's not an empty string.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-sharegroupId"><code>sharegroupId</code></a>, <a href="#parameter-imageId"><code>imageId</code></a></td>
    <td></td>
    <td>Revokes access to a shared image within an owned group for all members.<br /><br />- Run the [List share groups](https://techdocs.akamai.com/linode-api/reference/get-sharegroups) operation to get the `id` you should use as the `(sharegroupId)` path parameter that identifies an existing share group. To get the `imageID`, run the [List shared images by group](https://techdocs.akamai.com/linode-api/reference/get-sharegroup-images) operation.<br /><br />- To add a private image back to a share group, run the [Add images to a share group](https://techdocs.akamai.com/linode-api/reference/post-sharegroup-images).<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-imageId">
    <td><CopyableCode code="imageId" /></td>
    <td><code>string</code></td>
    <td>Slug identifier assigned to the shared image upon sharing.</td>
</tr>
<tr id="parameter-sharegroupId">
    <td><CopyableCode code="sharegroupId" /></td>
    <td><code>string</code></td>
    <td>The share group's unique identifier assigned after creating it. Not to be confused with the group's `uuid`.</td>
</tr>
<tr id="parameter-tokenUuid">
    <td><CopyableCode code="tokenUuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>A unique identifier for the token, used to reference it after creation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_by_token"
    values={[
        { label: 'list_by_token', value: 'list_by_token' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list_by_token">

Lists all the shared images a member can access within a share group, using a membership token. To get the `token_uuid`, run the [Get a token](https://techdocs.akamai.com/linode-api/reference/get-sharegroup-token) operation.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
capabilities,
created,
created_by,
deprecated,
description,
eol,
expiry,
image_sharing,
is_public,
is_shared,
label,
regions,
size,
status,
tags,
total_size,
type,
updated,
vendor
FROM linode.images.sharegroup_images
WHERE tokenUuid = '{{ tokenUuid }}' -- required
;
```
</TabItem>
<TabItem value="list">

Get the details about images shared in a particular group you own.<br /><br />- Run the [List share groups](https://techdocs.akamai.com/linode-api/reference/get-sharegroups) operation to get the `id` you should use as the `(sharegroupId)` path parameter that identifies an existing share group.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
capabilities,
created,
created_by,
deprecated,
description,
eol,
expiry,
image_sharing,
is_public,
is_shared,
label,
regions,
size,
status,
tags,
total_size,
type,
updated,
vendor
FROM linode.images.sharegroup_images
WHERE sharegroupId = '{{ sharegroupId }}' -- required
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

Adds images to an existing group where you can share them with other members.<br /><br />- Run the [List share groups](https://techdocs.akamai.com/linode-api/reference/get-sharegroups) operation to get the `id` you should use as the `(sharegroupId)` path parameter that identifies an existing share group.<br /><br />- Run the [Get an image](https://techdocs.akamai.com/linode-api/reference/get-image) operation to see the existing images' `id` values. If needed, [Create an image](https://techdocs.akamai.com/linode-api/reference/post-image) or [Upload an image](https://techdocs.akamai.com/linode-api/reference/post-upload-image).<br /><br />- You can set a `label` and `description` for each image, visible to all group members. If omitted, the shared image keeps the original image's details. Note that when you [Update the original image](https://techdocs.akamai.com/linode-api/reference/put-image), it has no effect on a shared image's details within any groups.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.images.sharegroup_images (
images,
sharegroupId
)
SELECT 
'{{ images }}' /* required */,
'{{ sharegroupId }}'
RETURNING
id,
capabilities,
created,
created_by,
deprecated,
description,
eol,
expiry,
image_sharing,
is_public,
is_shared,
label,
regions,
size,
status,
tags,
total_size,
type,
updated,
vendor
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: sharegroup_images
  props:
    - name: sharegroupId
      value: "{{ sharegroupId }}"
      description: Required parameter for the sharegroup_images resource.
    - name: images
      value:
        - description: "{{ description }}"
          id: "{{ id }}"
          label: "{{ label }}"
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

Updates the details of an image shared within a share group. Run this operation to edit the `label` and `description` of a particular shared image.<br /><br />- Run the [List share groups](https://techdocs.akamai.com/linode-api/reference/get-sharegroups) operation to get the `id` you should use as the `(sharegroupId)` path parameter that identifies an existing share group. To get the `imageID`, run the [List shared images by group](https://techdocs.akamai.com/linode-api/reference/get-sharegroup-images) operation.<br /><br />- You can update either of the fields, but when you provide a new `label`, make sure that it's not an empty string.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.images.sharegroup_images
SET 
description = '{{ description }}',
label = '{{ label }}'
WHERE 
sharegroupId = '{{ sharegroupId }}' --required
AND imageId = '{{ imageId }}' --required
RETURNING
id,
capabilities,
created,
created_by,
deprecated,
description,
eol,
expiry,
image_sharing,
is_public,
is_shared,
label,
regions,
size,
status,
tags,
total_size,
type,
updated,
vendor;
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

Revokes access to a shared image within an owned group for all members.<br /><br />- Run the [List share groups](https://techdocs.akamai.com/linode-api/reference/get-sharegroups) operation to get the `id` you should use as the `(sharegroupId)` path parameter that identifies an existing share group. To get the `imageID`, run the [List shared images by group](https://techdocs.akamai.com/linode-api/reference/get-sharegroup-images) operation.<br /><br />- To add a private image back to a share group, run the [Add images to a share group](https://techdocs.akamai.com/linode-api/reference/post-sharegroup-images).<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.images.sharegroup_images
WHERE sharegroupId = '{{ sharegroupId }}' --required
AND imageId = '{{ imageId }}' --required
;
```
</TabItem>
</Tabs>
