--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
  - account
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

Creates, updates, deletes, gets or lists a <code>users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.account.users" /></td></tr>
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

The requested User object.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated list of users.

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
    <td><CopyableCode code="email" /></td>
    <td><code>string (email)</code></td>
    <td>This user's email address. Akamai uses this address for account management communications. (example: example_user@linode.com)</td>
</tr>
<tr>
    <td><CopyableCode code="last_login" /></td>
    <td><code>object</code></td>
    <td>__Read-only__ Details on this user's last login attempt. Returned as `null` if this user hasn't attempted a login since it was created. You can run the [List user logins](https://techdocs.akamai.com/linode-api/reference/get-account-logins) operation for additional login information.</td>
</tr>
<tr>
    <td><CopyableCode code="password_created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this user's current password was created. You initially create a password during the account sign-up process, and you can update it using the [Reset Password](https://login.linode.com/forgot/password) webpage. Returned as `null` if this user doesn't have a password set. (example: 2018-01-01T01:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="restricted" /></td>
    <td><code>boolean</code></td>
    <td>If `true`, this user needs specific access granted to perform actions or access entities on your account. Run [List a user's grants](https://techdocs.akamai.com/linode-api/reference/get-user-grants) for details on how to configure grants for a restricted user.</td>
</tr>
<tr>
    <td><CopyableCode code="ssh_keys" /></td>
    <td><code>array</code></td>
    <td>__Read-only__ A list of the labels for SSH keys added by this user. Users can add keys with the [Add an SSH key](https://techdocs.akamai.com/linode-api/reference/post-add-ssh-key) operation. These keys are deployed when this user is included in the `authorized_users` field of the following requests:  - [Create a Linode](https://techdocs.akamai.com/linode-api/reference/post-linode-instance)  - [Rebuild a Linode](https://techdocs.akamai.com/linode-api/reference/post-rebuild-linode-instance)  - [Create a disk](https://techdocs.akamai.com/linode-api/reference/post-add-linode-disk)</td>
</tr>
<tr>
    <td><CopyableCode code="tfa_enabled" /></td>
    <td><code>boolean</code></td>
    <td>__Read-only__ Whether this user has Two Factor Authentication (TFA) enabled. Run the [Create a two factor secret](https://techdocs.akamai.com/linode-api/reference/post-tfa-enable) operation to enable TFA.</td>
</tr>
<tr>
    <td><CopyableCode code="user_type" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ If the user belongs to a [parent or child account](https://www.linode.com/docs/guides/parent-child-accounts/) relationship, this defines the user type in the respective account. Possible values include:  - `parent`. This is a user in an Akamai partner account. Akamai partners have a contractual relationship with their end customers, to sell Akamai services. This user can either have full access (a parent account admin user) or limited access. Limited users don't have access to manage child accounts, but they can be granted this access by an admin user.  - `child`. This is an Akamai partner's end customer user, in a child account. A child user can have either full or limited access. Full access lets the user manage other child users and the proxy user in a child account.  - `proxy`. This is a user on a child account that gives parent account users access to that child account. A parent account user with the `child_account_access` grant can [Create a proxy user token](https://techdocs.akamai.com/linode-api/reference/post-child-account-token) from the parent account. The parent user can use this token to run API operations from the child account, as if they were a child user.  - `default`. This applies to all regular, non-parent-child account users. (parent, child, proxy, default) (example: parent)</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The name of this user. This user needs to use this value to log in. It may also display alongside actions this user performs, including events or public StackScripts. (example: example_user, pattern: <code>^&#91;a-zA-Z0-9&#93;((?!&#91;_-&#93;&#123;2,&#125;)&#91;a-zA-Z0-9-_&#93;)+&#91;a-zA-Z0-9&#93;$</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="verified_phone_number" /></td>
    <td><code>string (phone)</code></td>
    <td>__Read-only__ The [verified](https://techdocs.akamai.com/linode-api/reference/post-profile-phone-number-verify) phone number for this user profile. Returned as `null` if the user doesn't have a verified phone number. (example: +5555555555)</td>
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
    <td><a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>Returns information about a single user on your account.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation can only be accessed by account users with _unrestricted_ access. Talk to your local account administrator about access management.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Returns a paginated list of all users on your account.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation can only be accessed by account users with _unrestricted_ access. Talk to your local account administrator about access management.<br /><br />A user can access all or part of an account based on their access status and grants:<br /><br />- __Unrestricted access__. These users can access everything on an account.<br /><br />- __Restricted access__. These users can only access entities or perform actions they've been given specific grants to.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-username"><code>username</code></a>, <a href="#parameter-email"><code>email</code></a></td>
    <td></td>
    <td>Creates a user on your account. You determine the new user's account access by setting it to restricted or unrestricted and by defining its grants. After completion, the API sends a confirmation message containing password creation and login instructions to the user's `email` address.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation can only be accessed by account users with _unrestricted_ access. Talk to your local account administrator about access management.<br /><br />__Parent and child accounts__<br /><br />In a [parent and child account](https://www.linode.com/docs/guides/parent-child-accounts/) environment, the following apply:<br /><br />- A parent account user can create new parent account users.<br /><br />- A child account can [update](https://techdocs.akamai.com/linode-api/reference/put-user) the child account parent user (proxy user) to `unrestricted`. This gives the proxy user access to create new child account users.<br /><br />- A child account user can create new child account users.<br /><br />- You can't create a proxy user. The proxy user in a child account is predefined when you initially provision the parent-child relationship.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>Update information about a user on your account, including its restricted status. When setting a user to `restricted`, the API sets no grants for it. You need to set grants so that user can access things on the account.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation can only be accessed by account users with _unrestricted_ access. Talk to your local account administrator about access management.<br /><br />__Parent and child accounts__<br /><br />In a [parent and child account](https://www.linode.com/docs/guides/parent-child-accounts/) environment, the following apply:<br /><br />- You can't edit the `username` or `email` values for the child account parent user (proxy user). These are predefined for the proxy user when you initially provision the parent-child relationship. Only a proxy user's `restricted` status can be modified. This can only be done by an unrestricted child account user.<br /><br />- A parent account using an unrestricted proxy user in a child account can modify the `username`, `email`, and `restricted` status for an existing child account user.<br /><br />- A restricted account user--parent or child--can't change their user to `unrestricted`.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>Deletes a user. The API immediately logs the user out and removes all of its `grants`.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation can only be accessed by account users with _unrestricted_ access. Talk to your local account administrator about access management.<br /><br />__Parent and child accounts__<br /><br />In a [parent and child account](https://www.linode.com/docs/guides/parent-child-accounts/) environment, the following apply:<br /><br />- You can't delete a child account parent user (proxy user). The API returns a 403 error if you target a proxy user with this operation.<br /><br />- A parent account using an unrestricted proxy user can use this operation to delete a child account user.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-username">
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The username to look up. (example: &#123;&#123;username&#125;&#125;)</td>
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

Returns information about a single user on your account.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation can only be accessed by account users with _unrestricted_ access. Talk to your local account administrator about access management.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
*
FROM linode.account.users
WHERE username = '{{ username }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns a paginated list of all users on your account.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation can only be accessed by account users with _unrestricted_ access. Talk to your local account administrator about access management.<br /><br />A user can access all or part of an account based on their access status and grants:<br /><br />- __Unrestricted access__. These users can access everything on an account.<br /><br />- __Restricted access__. These users can only access entities or perform actions they've been given specific grants to.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
email,
last_login,
password_created,
restricted,
ssh_keys,
tfa_enabled,
user_type,
username,
verified_phone_number
FROM linode.account.users
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

Creates a user on your account. You determine the new user's account access by setting it to restricted or unrestricted and by defining its grants. After completion, the API sends a confirmation message containing password creation and login instructions to the user's `email` address.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation can only be accessed by account users with _unrestricted_ access. Talk to your local account administrator about access management.<br /><br />__Parent and child accounts__<br /><br />In a [parent and child account](https://www.linode.com/docs/guides/parent-child-accounts/) environment, the following apply:<br /><br />- A parent account user can create new parent account users.<br /><br />- A child account can [update](https://techdocs.akamai.com/linode-api/reference/put-user) the child account parent user (proxy user) to `unrestricted`. This gives the proxy user access to create new child account users.<br /><br />- A child account user can create new child account users.<br /><br />- You can't create a proxy user. The proxy user in a child account is predefined when you initially provision the parent-child relationship.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.account.users (
email,
restricted,
username
)
SELECT 
'{{ email }}' /* required */,
{{ restricted }},
'{{ username }}' /* required */
RETURNING
email,
last_login,
password_created,
restricted,
ssh_keys,
tfa_enabled,
username,
verified_phone_number
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: users
  props:
    - name: email
      value: "{{ email }}"
      description: |
        This user's email address. Akamai uses this address for account management communications.
    - name: restricted
      value: {{ restricted }}
      description: |
        If \`true\`, this user needs specific access granted to perform actions or access entities on your account. Run [List a user's grants](https://techdocs.akamai.com/linode-api/reference/get-user-grants) for details on how to configure grants for a restricted user.
    - name: username
      value: "{{ username }}"
      description: |
        __Filterable__ The name of this user. This user needs to use this value to log in. It may also display alongside actions this user performs, including events or public StackScripts.
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

Update information about a user on your account, including its restricted status. When setting a user to `restricted`, the API sets no grants for it. You need to set grants so that user can access things on the account.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation can only be accessed by account users with _unrestricted_ access. Talk to your local account administrator about access management.<br /><br />__Parent and child accounts__<br /><br />In a [parent and child account](https://www.linode.com/docs/guides/parent-child-accounts/) environment, the following apply:<br /><br />- You can't edit the `username` or `email` values for the child account parent user (proxy user). These are predefined for the proxy user when you initially provision the parent-child relationship. Only a proxy user's `restricted` status can be modified. This can only be done by an unrestricted child account user.<br /><br />- A parent account using an unrestricted proxy user in a child account can modify the `username`, `email`, and `restricted` status for an existing child account user.<br /><br />- A restricted account user--parent or child--can't change their user to `unrestricted`.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.account.users
SET 
email = '{{ email }}',
restricted = {{ restricted }},
username = '{{ username }}'
WHERE 
username = '{{ username }}' --required
RETURNING
email,
last_login,
password_created,
restricted,
ssh_keys,
tfa_enabled,
user_type,
username,
verified_phone_number;
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

Deletes a user. The API immediately logs the user out and removes all of its `grants`.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation can only be accessed by account users with _unrestricted_ access. Talk to your local account administrator about access management.<br /><br />__Parent and child accounts__<br /><br />In a [parent and child account](https://www.linode.com/docs/guides/parent-child-accounts/) environment, the following apply:<br /><br />- You can't delete a child account parent user (proxy user). The API returns a 403 error if you target a proxy user with this operation.<br /><br />- A parent account using an unrestricted proxy user can use this operation to delete a child account user.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.account.users
WHERE username = '{{ username }}' --required
;
```
</TabItem>
</Tabs>
