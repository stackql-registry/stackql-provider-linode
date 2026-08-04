--- 
title: sharegroup_members
hide_title: false
hide_table_of_contents: false
keywords:
  - sharegroup_members
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

Creates, updates, deletes, gets or lists a <code>sharegroup_members</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sharegroup_members" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.images.sharegroup_members" /></td></tr>
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
    <td>__Read-only__ When the user became the share group's member. (example: 2025-08-04T10:07:59)</td>
</tr>
<tr>
    <td><CopyableCode code="expiry" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When the user's share group membership expires.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>The share group member's descriptive name. (example: Engineering - Backend)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The current membership status. Share group members can be `active` or `revoked`. Revoked members' data remains available for two weeks after they left a share group. (active, revoked) (example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="token_uuid" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The membership token's unique identifier. Not to be confused with the `token` needed to add a member to the share group. (example: 4591075e-4ba8-43c9-a521-928c3d4a135d)</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When the user's share group membership was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Returns a paginated list of the current members linked to the targeted share group.

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
    <td>__Read-only__ When the user became the share group's member. (example: 2025-08-04T10:07:59)</td>
</tr>
<tr>
    <td><CopyableCode code="expiry" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When the user's share group membership expires.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The share group member's descriptive name. (example: Engineering - Backend)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ The current membership status. Share group members can be `active` or `revoked`. Revoked members' data remains available for two weeks after they left a share group. (active, revoked) (example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="token_uuid" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ The membership token's unique identifier. Not to be confused with the `token` needed to add a member to the share group. (example: 4591075e-4ba8-43c9-a521-928c3d4a135d)</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When the user's share group membership was last updated.</td>
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
    <td><a href="#parameter-sharegroupId"><code>sharegroupId</code></a>, <a href="#parameter-tokenUuid"><code>tokenUuid</code></a></td>
    <td></td>
    <td>Get details about a membership token as a share group owner. Run this operation to check the `status` of a pending membership request or a current group member.<br /><br />- Run the [List share groups](https://techdocs.akamai.com/linode-api/reference/get-sharegroups) operation to get the `id` you should use as the `(sharegroupId)` path parameter that identifies an existing share group.<br /><br />- Get the `token_uuid` from the user who wants to join your share group or run the [List members by share group](https://techdocs.akamai.com/linode-api/reference/get-sharegroup-members) operation for details on current group members.<br /><br />- To get details about a token as a current or pending group member, run the [Get a token](https://techdocs.akamai.com/linode-api/reference/get-sharegroup-token) operation.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-sharegroupId"><code>sharegroupId</code></a></td>
    <td></td>
    <td>Get the details about all members in a particular share group you own.<br /><br />- Run the [List share groups](https://techdocs.akamai.com/linode-api/reference/get-sharegroups) operation to get the `id` you should use as the `(sharegroupId)` path parameter that identifies an existing share group.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-sharegroupId"><code>sharegroupId</code></a>, <a href="#parameter-token"><code>token</code></a>, <a href="#parameter-label"><code>label</code></a></td>
    <td></td>
    <td>Adds users to existing shared private image groups as a group owner.<br /><br />- Adding new members to share groups requires a single-use token. The user who wants to join a share group should run [Create a token](https://techdocs.akamai.com/linode-api/reference/post-sharegroup-tokens) and share the `token` from the response with the group owner.<br /><br />- Run the [List share groups](https://techdocs.akamai.com/linode-api/reference/get-sharegroups) operation to get the `id` you should use as the `(sharegroupId)` path parameter that identifies an existing share group.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-sharegroupId"><code>sharegroupId</code></a>, <a href="#parameter-tokenUuid"><code>tokenUuid</code></a>, <a href="#parameter-label"><code>label</code></a></td>
    <td></td>
    <td>Updates an existing membership token for a group owner. You can change each token's `label` that will be visible only to you, such as when you [Get members by share group](https://techdocs.akamai.com/linode-api/reference/get-sharegroup-members).<br /><br />- Run the [List share groups](https://techdocs.akamai.com/linode-api/reference/get-sharegroups) operation to get the `id` you should use as the `(sharegroupId)` path parameter that identifies an existing share group.<br /><br />- Run the [List members by share group](https://techdocs.akamai.com/linode-api/reference/get-sharegroup-members) operation to get the `token_uuid` for a current group member.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-sharegroupId"><code>sharegroupId</code></a>, <a href="#parameter-tokenUuid"><code>tokenUuid</code></a></td>
    <td></td>
    <td>Revokes a membership token accepted into a share group. Members with `revoked` status immediately lose access to shared images, and can't deploy them anymore.<br /><br />- Run the [List share groups](https://techdocs.akamai.com/linode-api/reference/get-sharegroups) operation to get the `id` you should use as the `(sharegroupId)` path parameter that identifies an existing share group.<br /><br />- Run the [List members by share group](https://techdocs.akamai.com/linode-api/reference/get-sharegroup-members) operation to get the `token_uuid` for a current group member. After revoking a membership, you can run this operation to check its status.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Get details about a membership token as a share group owner. Run this operation to check the `status` of a pending membership request or a current group member.<br /><br />- Run the [List share groups](https://techdocs.akamai.com/linode-api/reference/get-sharegroups) operation to get the `id` you should use as the `(sharegroupId)` path parameter that identifies an existing share group.<br /><br />- Get the `token_uuid` from the user who wants to join your share group or run the [List members by share group](https://techdocs.akamai.com/linode-api/reference/get-sharegroup-members) operation for details on current group members.<br /><br />- To get details about a token as a current or pending group member, run the [Get a token](https://techdocs.akamai.com/linode-api/reference/get-sharegroup-token) operation.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
created,
expiry,
label,
status,
token_uuid,
updated
FROM linode.images.sharegroup_members
WHERE sharegroupId = '{{ sharegroupId }}' -- required
AND tokenUuid = '{{ tokenUuid }}' -- required
;
```
</TabItem>
<TabItem value="list">

Get the details about all members in a particular share group you own.<br /><br />- Run the [List share groups](https://techdocs.akamai.com/linode-api/reference/get-sharegroups) operation to get the `id` you should use as the `(sharegroupId)` path parameter that identifies an existing share group.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
created,
expiry,
label,
status,
token_uuid,
updated
FROM linode.images.sharegroup_members
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

Adds users to existing shared private image groups as a group owner.<br /><br />- Adding new members to share groups requires a single-use token. The user who wants to join a share group should run [Create a token](https://techdocs.akamai.com/linode-api/reference/post-sharegroup-tokens) and share the `token` from the response with the group owner.<br /><br />- Run the [List share groups](https://techdocs.akamai.com/linode-api/reference/get-sharegroups) operation to get the `id` you should use as the `(sharegroupId)` path parameter that identifies an existing share group.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.images.sharegroup_members (
label,
token,
sharegroupId
)
SELECT 
'{{ label }}' /* required */,
'{{ token }}' /* required */,
'{{ sharegroupId }}'
RETURNING
created,
expiry,
label,
status,
token_uuid,
updated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: sharegroup_members
  props:
    - name: sharegroupId
      value: "{{ sharegroupId }}"
      description: Required parameter for the sharegroup_members resource.
    - name: label
      value: "{{ label }}"
      description: |
        The share group member's descriptive name.
    - name: token
      value: "{{ token }}"
      description: |
        The single-use JWT membership token encoded as a string. It consists of three parts: header, payload, and signature. If needed, the user should [Create a token](https://techdocs.akamai.com/linode-api/reference/post-sharegroup-tokens) and share it with the group owner before joining.
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

Updates an existing membership token for a group owner. You can change each token's `label` that will be visible only to you, such as when you [Get members by share group](https://techdocs.akamai.com/linode-api/reference/get-sharegroup-members).<br /><br />- Run the [List share groups](https://techdocs.akamai.com/linode-api/reference/get-sharegroups) operation to get the `id` you should use as the `(sharegroupId)` path parameter that identifies an existing share group.<br /><br />- Run the [List members by share group](https://techdocs.akamai.com/linode-api/reference/get-sharegroup-members) operation to get the `token_uuid` for a current group member.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.images.sharegroup_members
SET 
label = '{{ label }}'
WHERE 
sharegroupId = '{{ sharegroupId }}' --required
AND tokenUuid = '{{ tokenUuid }}' --required
AND label = '{{ label }}' --required
RETURNING
created,
expiry,
label,
status,
token_uuid,
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

Revokes a membership token accepted into a share group. Members with `revoked` status immediately lose access to shared images, and can't deploy them anymore.<br /><br />- Run the [List share groups](https://techdocs.akamai.com/linode-api/reference/get-sharegroups) operation to get the `id` you should use as the `(sharegroupId)` path parameter that identifies an existing share group.<br /><br />- Run the [List members by share group](https://techdocs.akamai.com/linode-api/reference/get-sharegroup-members) operation to get the `token_uuid` for a current group member. After revoking a membership, you can run this operation to check its status.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.images.sharegroup_members
WHERE sharegroupId = '{{ sharegroupId }}' --required
AND tokenUuid = '{{ tokenUuid }}' --required
;
```
</TabItem>
</Tabs>
