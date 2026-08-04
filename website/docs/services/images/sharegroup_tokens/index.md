--- 
title: sharegroup_tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - sharegroup_tokens
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

Creates, updates, deletes, gets or lists a <code>sharegroup_tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sharegroup_tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.images.sharegroup_tokens" /></td></tr>
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

A single token object.

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
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this token was created. (example: 2025-08-04T10:09:09)</td>
</tr>
<tr>
    <td><CopyableCode code="expiry" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this token expires.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>A short description of the token. (example: Backend Services - Engineering)</td>
</tr>
<tr>
    <td><CopyableCode code="sharegroup_label" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The share group's descriptive name. (example: DevOps Base Images)</td>
</tr>
<tr>
    <td><CopyableCode code="sharegroup_uuid" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The share group's unique identifier. (example: e1d0e58b-f89f-4237-84ab-b82077342359)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ Represents the current token status.  - `pending`: The token has been created but is not yet active. - `active`: The token is currently active and usable. - `revoked`: The token has been deleted and is no longer valid. - `expired`: The token has passed its validity period and is no longer usable. (pending, active, revoked, expired) (example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="token_uuid" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ A unique identifier for the token, used to reference it after creation. (example: 13428362-5458-4dad-b14b-8d0d4d648f8c)</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this token was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="valid_for_sharegroup_uuid" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The unique identifier of the share group you created a token for. (example: e1d0e58b-f89f-4237-84ab-b82077342359)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Returns a paginated list of the tokens.

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
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ The creation time of this token. (example: 2025-08-04T10:09:09)</td>
</tr>
<tr>
    <td><CopyableCode code="expiry" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ The time when this token expires.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ A short description of the token. (example: Backend Services - Engineering)</td>
</tr>
<tr>
    <td><CopyableCode code="sharegroup_label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ Associated share group label. (example: DevOps Base Images)</td>
</tr>
<tr>
    <td><CopyableCode code="sharegroup_uuid" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ The unique identifier of the share group you created a token for. (example: e1d0e58b-f89f-4237-84ab-b82077342359)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ Represents the current token status.  - `pending`: The token has been created but is not yet active. - `active`: The token is currently active and usable. - `revoked`: The token has been deleted and is no longer valid. - `expired`: The token has passed its validity period and is no longer usable. (pending, active, revoked, expired) (example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="token_uuid" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ A unique identifier for the token, used to reference it after creation. (example: 13428362-5458-4dad-b14b-8d0d4d648f8c)</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ The time when this token was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="valid_for_sharegroup_uuid" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ UUID identifying the associated share group. (example: e1d0e58b-f89f-4237-84ab-b82077342359)</td>
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
    <td><a href="#parameter-tokenUuid"><code>tokenUuid</code></a></td>
    <td></td>
    <td>Get details about a membership token as a share group member. Run this operation to check the `status` of a pending membership request or your current group membership.<br /><br />- To get the `token_uuid`, run the [List tokens](https://techdocs.akamai.com/linode-api/reference/get-user-tokens) or [Create a token](https://techdocs.akamai.com/linode-api/reference/post-sharegroup-tokens) operation to generate one for the share group you want to join.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get details about all the user's tokens.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-valid_for_sharegroup_uuid"><code>valid_for_sharegroup_uuid</code></a></td>
    <td></td>
    <td>Creates a single-use membership token for users who want to join a share group with custom images.<br /><br />- Before creating a token, get the share group's UUID from its owner. The owner can run [List share groups](https://techdocs.akamai.com/linode-api/reference/get-sharegroups) or [Get a share group](https://techdocs.akamai.com/linode-api/reference/get-sharegroup) to get the group's UUID. If needed, [Create a share group](https://techdocs.akamai.com/linode-api/reference/post-sharegroups) and share the UUID with the user.<br /><br />- Share the `token` from the response with the share group owner. The owner can later use the token to [Add members to a share group](https://techdocs.akamai.com/linode-api/reference/post-sharegroup-members) and manage the users' membership within the group.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-tokenUuid"><code>tokenUuid</code></a>, <a href="#parameter-label"><code>label</code></a></td>
    <td></td>
    <td>Updates the `label` of an existing membership token for a share group member or a pending membership.<br /><br />To get the `token_uuid`, run the [List tokens](https://techdocs.akamai.com/linode-api/reference/get-user-tokens) or [Create a token](https://techdocs.akamai.com/linode-api/reference/post-sharegroup-tokens) operation to generate one for the share group you want to join.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-tokenUuid"><code>tokenUuid</code></a></td>
    <td></td>
    <td>Removes an existing membership token for a share group member or a pending membership.<br /><br />- To get the `token_uuid`, run the [List tokens](https://techdocs.akamai.com/linode-api/reference/get-user-tokens) operation.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-tokenUuid">
    <td><CopyableCode code="tokenUuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>A unique identifier for the token, used to reference it after creation.</td>
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

Get details about a membership token as a share group member. Run this operation to check the `status` of a pending membership request or your current group membership.<br /><br />- To get the `token_uuid`, run the [List tokens](https://techdocs.akamai.com/linode-api/reference/get-user-tokens) or [Create a token](https://techdocs.akamai.com/linode-api/reference/post-sharegroup-tokens) operation to generate one for the share group you want to join.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
created,
expiry,
label,
sharegroup_label,
sharegroup_uuid,
status,
token_uuid,
updated,
valid_for_sharegroup_uuid
FROM linode.images.sharegroup_tokens
WHERE tokenUuid = '{{ tokenUuid }}' -- required
;
```
</TabItem>
<TabItem value="list">

Get details about all the user's tokens.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
created,
expiry,
label,
sharegroup_label,
sharegroup_uuid,
status,
token_uuid,
updated,
valid_for_sharegroup_uuid
FROM linode.images.sharegroup_tokens
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

Creates a single-use membership token for users who want to join a share group with custom images.<br /><br />- Before creating a token, get the share group's UUID from its owner. The owner can run [List share groups](https://techdocs.akamai.com/linode-api/reference/get-sharegroups) or [Get a share group](https://techdocs.akamai.com/linode-api/reference/get-sharegroup) to get the group's UUID. If needed, [Create a share group](https://techdocs.akamai.com/linode-api/reference/post-sharegroups) and share the UUID with the user.<br /><br />- Share the `token` from the response with the share group owner. The owner can later use the token to [Add members to a share group](https://techdocs.akamai.com/linode-api/reference/post-sharegroup-members) and manage the users' membership within the group.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.images.sharegroup_tokens (
label,
valid_for_sharegroup_uuid
)
SELECT 
'{{ label }}',
'{{ valid_for_sharegroup_uuid }}' /* required */
RETURNING
created,
expiry,
label,
sharegroup_label,
sharegroup_uuid,
status,
token,
token_uuid,
updated,
valid_for_sharegroup_uuid
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: sharegroup_tokens
  props:
    - name: label
      value: "{{ label }}"
      description: |
        The token's descriptive name.
    - name: valid_for_sharegroup_uuid
      value: "{{ valid_for_sharegroup_uuid }}"
      description: |
        The unique identifier of the share group you want to create a token for.
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

Updates the `label` of an existing membership token for a share group member or a pending membership.<br /><br />To get the `token_uuid`, run the [List tokens](https://techdocs.akamai.com/linode-api/reference/get-user-tokens) or [Create a token](https://techdocs.akamai.com/linode-api/reference/post-sharegroup-tokens) operation to generate one for the share group you want to join.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.images.sharegroup_tokens
SET 
label = '{{ label }}'
WHERE 
tokenUuid = '{{ tokenUuid }}' --required
AND label = '{{ label }}' --required
RETURNING
created,
expiry,
label,
sharegroup_label,
sharegroup_uuid,
status,
token_uuid,
updated,
valid_for_sharegroup_uuid;
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

Removes an existing membership token for a share group member or a pending membership.<br /><br />- To get the `token_uuid`, run the [List tokens](https://techdocs.akamai.com/linode-api/reference/get-user-tokens) operation.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.images.sharegroup_tokens
WHERE tokenUuid = '{{ tokenUuid }}' --required
;
```
</TabItem>
</Tabs>
