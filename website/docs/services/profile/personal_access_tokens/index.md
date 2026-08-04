--- 
title: personal_access_tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - personal_access_tokens
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

Creates, updates, deletes, gets or lists a <code>personal_access_tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="personal_access_tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.profile.personal_access_tokens" /></td></tr>
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

The requested token.

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
    <td>__Read-only__ This token's unique ID, which can be used to revoke it.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__, __Read-only__ The date and time this token was created. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="expiry" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this token will expire.  Personal Access Tokens cannot be renewed, so after this time the token will be completely unusable and a new token will need to be generated.  Tokens may be created with `null` as their expiry and will never expire unless revoked. (example: 2018-01-01T13:46:32)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ This token's label.  This is for display purposes only, but can be used to more easily track what you're using each token for. (example: linode-cli)</td>
</tr>
<tr>
    <td><CopyableCode code="scopes" /></td>
    <td><code>string (oauth-scopes)</code></td>
    <td>__Read-only__ The scopes this token was created with. These define what parts of the Account the token can be used to access. Many command-line tools, such as the [Linode CLI](https://github.com/linode/linode-cli), require tokens with access to `*`. Tokens with more restrictive scopes are generally more secure. (example: *)</td>
</tr>
<tr>
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The token used to access the API.  When the token is created, the full token is returned here.  Otherwise, only the first 16 characters are returned. (example: abcdefghijklmnop)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated list of active tokens.

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
    <td>__Read-only__ This token's unique ID, which can be used to revoke it.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__, __Read-only__ The date and time this token was created. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="expiry" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this token will expire.  Personal Access Tokens cannot be renewed, so after this time the token will be completely unusable and a new token will need to be generated.  Tokens may be created with `null` as their expiry and will never expire unless revoked. (example: 2018-01-01T13:46:32)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ This token's label.  This is for display purposes only, but can be used to more easily track what you're using each token for. (example: linode-cli)</td>
</tr>
<tr>
    <td><CopyableCode code="scopes" /></td>
    <td><code>string (oauth-scopes)</code></td>
    <td>__Read-only__ The scopes this token was created with. These define what parts of the Account the token can be used to access. Many command-line tools, such as the [Linode CLI](https://github.com/linode/linode-cli), require tokens with access to `*`. Tokens with more restrictive scopes are generally more secure. (example: *)</td>
</tr>
<tr>
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The token used to access the API.  When the token is created, the full token is returned here.  Otherwise, only the first 16 characters are returned. (example: abcdefghijklmnop)</td>
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
    <td><a href="#parameter-tokenId"><code>tokenId</code></a></td>
    <td></td>
    <td>Returns a single Personal Access Token.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Returns a paginated list of Personal Access Tokens currently active for your User.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Creates a Personal Access Token for your User. The raw token will be returned in the response, but will never be returned again afterward so be sure to take note of it. You may create a token with _at most_ the scopes of your current token. The created token will be able to access your Account until the given expiry, or until it is revoked. __Parent and child accounts__ In a [parent and child account](https://www.linode.com/docs/guides/parent-child-accounts/) environment, the following apply:<br /><br />- If you're using a child account parent user (proxy user), you can't create this form of token. The only token available to a proxy user is one that lets you run operations in a child account. These are created with the [Create a proxy user token](https://techdocs.akamai.com/linode-api/reference/post-child-account-token) operation.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-tokenId"><code>tokenId</code></a></td>
    <td></td>
    <td>Updates a Personal Access Token.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-tokenId"><code>tokenId</code></a></td>
    <td></td>
    <td>Revokes a Personal Access Token. The token will be invalidated immediately, and requests using that token will fail with a 401. It is possible to revoke access to the token making the request to revoke a token, but keep in mind that doing so could lose you access to the api and require you to create a new token through some other means.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-tokenId">
    <td><CopyableCode code="tokenId" /></td>
    <td><code>string</code></td>
    <td>The ID of the token to access.</td>
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

Returns a single Personal Access Token.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
created,
expiry,
label,
scopes,
token
FROM linode.profile.personal_access_tokens
WHERE tokenId = '{{ tokenId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns a paginated list of Personal Access Tokens currently active for your User.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
created,
expiry,
label,
scopes,
token
FROM linode.profile.personal_access_tokens
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

Creates a Personal Access Token for your User. The raw token will be returned in the response, but will never be returned again afterward so be sure to take note of it. You may create a token with _at most_ the scopes of your current token. The created token will be able to access your Account until the given expiry, or until it is revoked. __Parent and child accounts__ In a [parent and child account](https://www.linode.com/docs/guides/parent-child-accounts/) environment, the following apply:<br /><br />- If you're using a child account parent user (proxy user), you can't create this form of token. The only token available to a proxy user is one that lets you run operations in a child account. These are created with the [Create a proxy user token](https://techdocs.akamai.com/linode-api/reference/post-child-account-token) operation.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.profile.personal_access_tokens (
expiry,
label,
scopes
)
SELECT 
'{{ expiry }}',
'{{ label }}',
'{{ scopes }}'
RETURNING
id,
created,
expiry,
label,
scopes,
token
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: personal_access_tokens
  props:
    - name: expiry
      value: "{{ expiry }}"
      description: |
        When this token should be valid until.  If omitted, the new token will be valid until it is manually revoked.
    - name: label
      value: "{{ label }}"
      description: |
        __Filterable__ This token's label.  This is for display purposes only, but can be used to more easily track what you're using each token for.
    - name: scopes
      value: "{{ scopes }}"
      description: |
        The access [scopes](https://techdocs.akamai.com/linode-api/reference/get-started#oauth-reference) to grant to the created token. These cannot be changed after creation, and may not exceed the scopes of the acting token.
        If omitted or entered with a wildcard character (\`*\`), the new token will have the same scopes as the acting token.
        Multiple scopes are separated by a space character (\` \`).
        For example, \`linodes:read_write account:read_only\`.
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

Updates a Personal Access Token.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.profile.personal_access_tokens
SET 
label = '{{ label }}'
WHERE 
tokenId = '{{ tokenId }}' --required
RETURNING
id,
created,
expiry,
label,
scopes,
token;
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

Revokes a Personal Access Token. The token will be invalidated immediately, and requests using that token will fail with a 401. It is possible to revoke access to the token making the request to revoke a token, but keep in mind that doing so could lose you access to the api and require you to create a new token through some other means.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.profile.personal_access_tokens
WHERE tokenId = '{{ tokenId }}' --required
;
```
</TabItem>
</Tabs>
