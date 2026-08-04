--- 
title: sharegroups
hide_title: false
hide_table_of_contents: false
keywords:
  - sharegroups
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

Creates, updates, deletes, gets or lists a <code>sharegroups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sharegroups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.images.sharegroups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_by_token"
    values={[
        { label: 'get_by_token', value: 'get_by_token' },
        { label: 'get', value: 'get' },
        { label: 'list_by_image', value: 'list_by_image' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get_by_token">

A single share group object.

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
    <td>__Read-only__ The share group's numeric identifier, used primarily as path parameters in URLs.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this share group was created. (example: 2025-04-14T22:44:02)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A detailed description of this share group. (example: Group of base operating system images and engineers used for CI/CD pipelines and infrastructure automation)</td>
</tr>
<tr>
    <td><CopyableCode code="is_suspended" /></td>
    <td><code>boolean</code></td>
    <td>__Read-only__ If `true`, the share group is currently suspended.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>The share group's descriptive name. (example: DevOps Base Images)</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this share group was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>__Read-only__ The share group's unique identifier used for membership token management. (example: 1533863e-16a4-47b5-b829-ac0f35c13278)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get">

A single share group object.

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
    <td>__Read-only__ The share group's numeric identifier, used primarily as path parameters in URLs.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this share group was created. (example: 2025-04-14T22:44:02)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A detailed description of this share group. (example: Group of base operating system images and engineers used for CI/CD pipelines and infrastructure automation)</td>
</tr>
<tr>
    <td><CopyableCode code="expiry" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When the share group expires.</td>
</tr>
<tr>
    <td><CopyableCode code="images_count" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ The total number of images currently belonging to the share group.</td>
</tr>
<tr>
    <td><CopyableCode code="is_suspended" /></td>
    <td><code>boolean</code></td>
    <td>__Read-only__ If `true`, the share group is currently suspended.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>The share group's descriptive name. (example: DevOps Base Images)</td>
</tr>
<tr>
    <td><CopyableCode code="members_count" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ The number of users with access to the share group.</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this share group was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>__Read-only__ The share group's unique identifier used for membership token management. (example: 1533863e-16a4-47b5-b829-ac0f35c13278)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_by_image">

Returns a paginated list of share groups.

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
    <td>The share group's numeric identifier, used primarily as path parameters in URLs.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this share group was created. (example: 2025-04-14T22:44:02)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The share group's detailed description. (example: Group of base operating system images and engineers used for CI/CD pipelines and infrastructure automation)</td>
</tr>
<tr>
    <td><CopyableCode code="expiry" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When the share group expires.</td>
</tr>
<tr>
    <td><CopyableCode code="images_count" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ The total number of images currently belonging to the share group.</td>
</tr>
<tr>
    <td><CopyableCode code="is_suspended" /></td>
    <td><code>boolean</code></td>
    <td>__Read-only__ Indicates whether the share group is currently suspended.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The share group's descriptive name. (example: DevOps Base Images)</td>
</tr>
<tr>
    <td><CopyableCode code="members_count" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ The number of users with access to the share group.</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this share group was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>The share group's unique identifier used for membership token management. (example: 1533863e-16a4-47b5-b829-ac0f35c13278)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated list of sharegroups.

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
    <td>The share group's numeric identifier, used primarily as path parameters in URLs.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this share group was created. (example: 2025-04-14T22:44:02)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The share group's detailed description. (example: Group of base operating system images and engineers used for CI/CD pipelines and infrastructure automation)</td>
</tr>
<tr>
    <td><CopyableCode code="expiry" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When the share group expires.</td>
</tr>
<tr>
    <td><CopyableCode code="images_count" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ The total number of images currently belonging to the share group.</td>
</tr>
<tr>
    <td><CopyableCode code="is_suspended" /></td>
    <td><code>boolean</code></td>
    <td>__Read-only__ Indicates whether the share group is currently suspended.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The share group's descriptive name. (example: DevOps Base Images)</td>
</tr>
<tr>
    <td><CopyableCode code="members_count" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ The number of users with access to the share group.</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this share group was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>The share group's unique identifier used for membership token management. (example: 1533863e-16a4-47b5-b829-ac0f35c13278)</td>
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
    <td><a href="#get_by_token"><CopyableCode code="get_by_token" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-tokenUuid"><code>tokenUuid</code></a></td>
    <td></td>
    <td>Gets details about a share group you're a member of. <br /><br />To get the `token_uuid`, run the [Get a token](https://techdocs.akamai.com/linode-api/reference/get-sharegroup-token) or [Create a token](https://techdocs.akamai.com/linode-api/reference/post-sharegroup-tokens) for the share group you want to join and share it with the group owner. You have to be accepted as a share group member before running this operation.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-sharegroupId"><code>sharegroupId</code></a></td>
    <td></td>
    <td>Get information about an owned share group. Run the [List share groups](https://techdocs.akamai.com/linode-api/reference/get-sharegroups) operation to get the `id` you should use as the `(sharegroupId)` path parameter that identifies an existing share group.<br /><br />- If the `sharegroupId` in the request body belongs to a group you don't own, calling this API will result in a 404 error.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list_by_image"><CopyableCode code="list_by_image" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-imageId"><code>imageId</code></a></td>
    <td></td>
    <td>Lists all owned share groups where a given private image is currently shared. Run the [List images](https://techdocs.akamai.com/linode-api/reference/get-images) operation. Store the `id` for the target image as your `&#123;imageId&#125;`, for use in this operation's URL path.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation returns an empty list for shared and distribution image IDs.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Lists all owned groups with shared images.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation doesn't list groups you're a member of. Run [Get a token's share group](https://techdocs.akamai.com/linode-api/reference/get-sharegroup-by-token) to find these share groups using your membership token.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-label"><code>label</code></a></td>
    <td></td>
    <td>Creates a group to share images with other users. <br /><br />- Include existing `images` in the request or [Add images to a share group](https://techdocs.akamai.com/linode-api/reference/post-sharegroup-images) later. Run the [Get an image](https://techdocs.akamai.com/linode-api/reference/get-image) operation to see the existing images' `id` values. If needed, [Create an image](https://techdocs.akamai.com/linode-api/reference/post-image) or [Upload an image](https://techdocs.akamai.com/linode-api/reference/post-upload-image).<br /><br />- You can set a `label` and `description` for the group and each image, visible to all group members. <br /><br />- If omitted, the shared image keeps the original `label` and `description`. Note that when you [Update the original image](https://techdocs.akamai.com/linode-api/reference/put-image), it has no effect on shared image's details within any groups.<br /><br />- Run the [Add members to a share group](https://techdocs.akamai.com/linode-api/reference/post-sharegroup-members) to include other users in the group. Use the group's `uuid` from the response to [Create a token](https://techdocs.akamai.com/linode-api/reference/post-sharegroup-tokens) for user authentication.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-sharegroupId"><code>sharegroupId</code></a></td>
    <td></td>
    <td>Updates the details of a share group you own. Run this operation to edit the `label` or `description` of a particular sharegroup.<br /><br />- Run the [List share groups](https://techdocs.akamai.com/linode-api/reference/get-sharegroups) operation to get the `id` you should use as the `(sharegroupId)` path parameter that identifies an existing share group.<br /><br />- You can update either of the fields, but when you provide a new `label`, make sure that it's not an empty string.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-sharegroupId"><code>sharegroupId</code></a></td>
    <td></td>
    <td>Deletes an owned share group. All shared group members lose access to the images within the group upon deletion.<br /><br />- Run the [List share groups](https://techdocs.akamai.com/linode-api/reference/get-sharegroups) operation to get the `id` you should use as the `(sharegroupId)` path parameter that identifies an existing share group.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
    <td>Slug identifier assigned to the private image upon creation. This identifier includes a slash (`/`), which must be URL-encoded in requests to prevent breaking the URL structure.</td>
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
    defaultValue="get_by_token"
    values={[
        { label: 'get_by_token', value: 'get_by_token' },
        { label: 'get', value: 'get' },
        { label: 'list_by_image', value: 'list_by_image' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get_by_token">

Gets details about a share group you're a member of. <br /><br />To get the `token_uuid`, run the [Get a token](https://techdocs.akamai.com/linode-api/reference/get-sharegroup-token) or [Create a token](https://techdocs.akamai.com/linode-api/reference/post-sharegroup-tokens) for the share group you want to join and share it with the group owner. You have to be accepted as a share group member before running this operation.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
created,
description,
is_suspended,
label,
updated,
uuid
FROM linode.images.sharegroups
WHERE tokenUuid = '{{ tokenUuid }}' -- required
;
```
</TabItem>
<TabItem value="get">

Get information about an owned share group. Run the [List share groups](https://techdocs.akamai.com/linode-api/reference/get-sharegroups) operation to get the `id` you should use as the `(sharegroupId)` path parameter that identifies an existing share group.<br /><br />- If the `sharegroupId` in the request body belongs to a group you don't own, calling this API will result in a 404 error.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
created,
description,
expiry,
images_count,
is_suspended,
label,
members_count,
updated,
uuid
FROM linode.images.sharegroups
WHERE sharegroupId = '{{ sharegroupId }}' -- required
;
```
</TabItem>
<TabItem value="list_by_image">

Lists all owned share groups where a given private image is currently shared. Run the [List images](https://techdocs.akamai.com/linode-api/reference/get-images) operation. Store the `id` for the target image as your `&#123;imageId&#125;`, for use in this operation's URL path.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation returns an empty list for shared and distribution image IDs.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
created,
description,
expiry,
images_count,
is_suspended,
label,
members_count,
updated,
uuid
FROM linode.images.sharegroups
WHERE imageId = '{{ imageId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists all owned groups with shared images.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation doesn't list groups you're a member of. Run [Get a token's share group](https://techdocs.akamai.com/linode-api/reference/get-sharegroup-by-token) to find these share groups using your membership token.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
created,
description,
expiry,
images_count,
is_suspended,
label,
members_count,
updated,
uuid
FROM linode.images.sharegroups
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

Creates a group to share images with other users. <br /><br />- Include existing `images` in the request or [Add images to a share group](https://techdocs.akamai.com/linode-api/reference/post-sharegroup-images) later. Run the [Get an image](https://techdocs.akamai.com/linode-api/reference/get-image) operation to see the existing images' `id` values. If needed, [Create an image](https://techdocs.akamai.com/linode-api/reference/post-image) or [Upload an image](https://techdocs.akamai.com/linode-api/reference/post-upload-image).<br /><br />- You can set a `label` and `description` for the group and each image, visible to all group members. <br /><br />- If omitted, the shared image keeps the original `label` and `description`. Note that when you [Update the original image](https://techdocs.akamai.com/linode-api/reference/put-image), it has no effect on shared image's details within any groups.<br /><br />- Run the [Add members to a share group](https://techdocs.akamai.com/linode-api/reference/post-sharegroup-members) to include other users in the group. Use the group's `uuid` from the response to [Create a token](https://techdocs.akamai.com/linode-api/reference/post-sharegroup-tokens) for user authentication.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.images.sharegroups (
description,
images,
label
)
SELECT 
'{{ description }}',
'{{ images }}',
'{{ label }}' /* required */
RETURNING
id,
created,
description,
expiry,
images_count,
is_suspended,
label,
members_count,
updated,
uuid
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: sharegroups
  props:
    - name: description
      value: "{{ description }}"
      description: |
        A detailed description of this share group.
    - name: images
      description: |
        A list of image's details, including the ID, label, and description.
      value:
        - description: "{{ description }}"
          id: "{{ id }}"
          label: "{{ label }}"
    - name: label
      value: "{{ label }}"
      description: |
        The share group's descriptive name.
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

Updates the details of a share group you own. Run this operation to edit the `label` or `description` of a particular sharegroup.<br /><br />- Run the [List share groups](https://techdocs.akamai.com/linode-api/reference/get-sharegroups) operation to get the `id` you should use as the `(sharegroupId)` path parameter that identifies an existing share group.<br /><br />- You can update either of the fields, but when you provide a new `label`, make sure that it's not an empty string.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.images.sharegroups
SET 
description = '{{ description }}',
label = '{{ label }}'
WHERE 
sharegroupId = '{{ sharegroupId }}' --required
RETURNING
id,
created,
description,
expiry,
images_count,
is_suspended,
label,
members_count,
updated,
uuid;
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

Deletes an owned share group. All shared group members lose access to the images within the group upon deletion.<br /><br />- Run the [List share groups](https://techdocs.akamai.com/linode-api/reference/get-sharegroups) operation to get the `id` you should use as the `(sharegroupId)` path parameter that identifies an existing share group.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.images.sharegroups
WHERE sharegroupId = '{{ sharegroupId }}' --required
;
```
</TabItem>
</Tabs>
