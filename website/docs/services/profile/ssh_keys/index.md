--- 
title: ssh_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - ssh_keys
  - profile
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

Creates, updates, deletes, gets or lists a <code>ssh_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ssh_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.profile.ssh_keys" /></td></tr>
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

An SSH Key object.

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
    <td>__Read-only__ The unique identifier of an SSH Key object.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ The date this key was added. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>A label for the SSH Key. (example: My SSH Key)</td>
</tr>
<tr>
    <td><CopyableCode code="ssh_key" /></td>
    <td><code>string (ssh-key)</code></td>
    <td>The public SSH Key, which is used to authenticate to the root user of the Linodes you deploy.  Accepted formats:  - ssh-dss - ssh-rsa - ecdsa-sha2-nistp - ssh-ed25519 - sk-ecdsa-sha2-nistp256 (Akamai-specific) (example: ssh-rsa AAAA_valid_public_ssh_key_123456785== user@their-computer)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Returns a paginated list of SSH Key objects.

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
    <td>__Read-only__ The unique identifier of an SSH Key object.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ The date this key was added. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>A label for the SSH Key. (example: My SSH Key)</td>
</tr>
<tr>
    <td><CopyableCode code="ssh_key" /></td>
    <td><code>string (ssh-key)</code></td>
    <td>The public SSH Key, which is used to authenticate to the root user of the Linodes you deploy.  Accepted formats:  - ssh-dss - ssh-rsa - ecdsa-sha2-nistp - ssh-ed25519 - sk-ecdsa-sha2-nistp256 (Akamai-specific) (example: ssh-rsa AAAA_valid_public_ssh_key_123456785== user@their-computer)</td>
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
    <td><a href="#parameter-sshKeyId"><code>sshKeyId</code></a></td>
    <td></td>
    <td>Returns a single SSH Key object identified by `id` that you have access to view.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Returns a collection of SSH Keys you've added to your Profile.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Adds an SSH Key to your Account profile.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-sshKeyId"><code>sshKeyId</code></a></td>
    <td></td>
    <td>Updates an SSH Key that you have permission to `read_write`.<br /><br />Only SSH key labels can be updated.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-sshKeyId"><code>sshKeyId</code></a></td>
    <td></td>
    <td>Deletes an SSH Key you have access to.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation only deletes a key's association from your profile. It doesn't remove it from any Linode or disk that was deployed with `authorized_keys`. You need to manually delete the key on the Linode or disk.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-sshKeyId">
    <td><CopyableCode code="sshKeyId" /></td>
    <td><code>string</code></td>
    <td>The ID of the SSHKey.</td>
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

Returns a single SSH Key object identified by `id` that you have access to view.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
created,
label,
ssh_key
FROM linode.profile.ssh_keys
WHERE sshKeyId = '{{ sshKeyId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns a collection of SSH Keys you've added to your Profile.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
created,
label,
ssh_key
FROM linode.profile.ssh_keys
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

Adds an SSH Key to your Account profile.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.profile.ssh_keys (
label,
ssh_key
)
SELECT 
'{{ label }}',
'{{ ssh_key }}'
RETURNING
id,
created,
label,
ssh_key
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ssh_keys
  props:
    - name: label
      value: "{{ label }}"
      description: |
        A label for the SSH Key.
    - name: ssh_key
      value: "{{ ssh_key }}"
      description: |
        The public SSH Key, which is used to authenticate to the root user of the Linodes you deploy.
        Accepted formats:
        - ssh-dss
        - ssh-rsa
        - ecdsa-sha2-nistp
        - ssh-ed25519
        - sk-ecdsa-sha2-nistp256 (Akamai-specific)
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

Updates an SSH Key that you have permission to `read_write`.<br /><br />Only SSH key labels can be updated.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.profile.ssh_keys
SET 
label = '{{ label }}'
WHERE 
sshKeyId = '{{ sshKeyId }}' --required
RETURNING
id,
created,
label,
ssh_key;
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

Deletes an SSH Key you have access to.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation only deletes a key's association from your profile. It doesn't remove it from any Linode or disk that was deployed with `authorized_keys`. You need to manually delete the key on the Linode or disk.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.profile.ssh_keys
WHERE sshKeyId = '{{ sshKeyId }}' --required
;
```
</TabItem>
</Tabs>
