--- 
title: credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - credentials
  - managed
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

Creates, updates, deletes, gets or lists a <code>credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="credentials" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.managed.credentials" /></td></tr>
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

The requested Managed Credential.

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
    <td>__Read-only__ This Credential's unique ID.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>The unique label for this Credential. This is for display purposes only. (example: prod-password-1, pattern: <code>&#91;a-zA-Z0-9-_ \.&#93;&#123;2,75&#125;</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="last_decrypted" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ The date this Credential was last decrypted by a member of Linode special forces. (example: 2018-01-01T00:01:01)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated list of ManagedCredentials.

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
    <td>__Read-only__ This Credential's unique ID.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>The unique label for this Credential. This is for display purposes only. (example: prod-password-1, pattern: <code>&#91;a-zA-Z0-9-_ \.&#93;&#123;2,75&#125;</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="last_decrypted" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ The date this Credential was last decrypted by a member of Linode special forces. (example: 2018-01-01T00:01:01)</td>
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
    <td><a href="#parameter-credentialId"><code>credentialId</code></a></td>
    <td></td>
    <td>Returns a single Managed Credential.<br /><br />This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Returns a paginated list of managed credentials on your account.<br /><br />This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-label"><code>label</code></a>, <a href="#parameter-password"><code>password</code></a></td>
    <td></td>
    <td>Creates a managed credential to store usernames and passwords for applications running on your Linode. Akamai Support can use these credentials to access your applications when investigating or resolving issues.<br /><br />This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-credentialId"><code>credentialId</code></a></td>
    <td></td>
    <td>Updates the label of a Managed Credential. This operation does not update the username and password for a Managed Credential. To do this, run the [Update a managed credential's username and password](https://techdocs.akamai.com/linode-api/reference/post-managed-credential-username-password)) operation instead. This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#revoke"><CopyableCode code="revoke" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-credentialId"><code>credentialId</code></a></td>
    <td></td>
    <td>Deletes a managed credential.  Akamai Support will no longer have access to this credential when investigating or resolving issues.<br /><br />This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update_username_password"><CopyableCode code="update_username_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-credentialId"><code>credentialId</code></a>, <a href="#parameter-password"><code>password</code></a></td>
    <td></td>
    <td>Updates the username and password for a managed credential.<br /><br />This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-credentialId">
    <td><CopyableCode code="credentialId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Credential to update.</td>
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

Returns a single Managed Credential.<br /><br />This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
label,
last_decrypted
FROM linode.managed.credentials
WHERE credentialId = '{{ credentialId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns a paginated list of managed credentials on your account.<br /><br />This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
label,
last_decrypted
FROM linode.managed.credentials
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

Creates a managed credential to store usernames and passwords for applications running on your Linode. Akamai Support can use these credentials to access your applications when investigating or resolving issues.<br /><br />This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.managed.credentials (
label,
password,
username
)
SELECT 
'{{ label }}' /* required */,
'{{ password }}' /* required */,
'{{ username }}'
RETURNING
id,
label,
last_decrypted
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: credentials
  props:
    - name: label
      value: "{{ label }}"
      description: |
        The unique label for this Credential. This is for display purposes only.
    - name: password
      value: "{{ password }}"
      description: |
        The password to use when accessing the Managed Service.
    - name: username
      value: "{{ username }}"
      description: |
        The username to use when accessing the Managed Service.
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

Updates the label of a Managed Credential. This operation does not update the username and password for a Managed Credential. To do this, run the [Update a managed credential's username and password](https://techdocs.akamai.com/linode-api/reference/post-managed-credential-username-password)) operation instead. This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.managed.credentials
SET 
label = '{{ label }}'
WHERE 
credentialId = '{{ credentialId }}' --required
RETURNING
id,
label,
last_decrypted;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="revoke"
    values={[
        { label: 'revoke', value: 'revoke' },
        { label: 'update_username_password', value: 'update_username_password' }
    ]}
>
<TabItem value="revoke">

Deletes a managed credential.  Akamai Support will no longer have access to this credential when investigating or resolving issues.<br /><br />This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.managed.credentials.revoke 
@credentialId='{{ credentialId }}' --required
;
```
</TabItem>
<TabItem value="update_username_password">

Updates the username and password for a managed credential.<br /><br />This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.managed.credentials.update_username_password 
@credentialId='{{ credentialId }}' --required 
@@json=
'{
"password": "{{ password }}", 
"username": "{{ username }}"
}'
;
```
</TabItem>
</Tabs>
