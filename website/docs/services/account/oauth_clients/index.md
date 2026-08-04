--- 
title: oauth_clients
hide_title: false
hide_table_of_contents: false
keywords:
  - oauth_clients
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

Creates, updates, deletes, gets or lists an <code>oauth_clients</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="oauth_clients" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.account.oauth_clients" /></td></tr>
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

Information about the requested client.

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
    <td>__Read-only__ The OAuth Client ID.  This is used to identify the client, and is a publicly known value (it is not a secret). (example: 2737bf16b39ab5d7b4a1)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The name of this application.  This will be presented to users when they are asked to grant it access to their Account. (example: Test_Client_1)</td>
</tr>
<tr>
    <td><CopyableCode code="public" /></td>
    <td><code>boolean</code></td>
    <td>__Filterable__ If this is a public or private OAuth Client.  Public clients have a slightly different authentication workflow than private clients.  See the [OAuth spec](https://oauth.net/2/) for more details.</td>
</tr>
<tr>
    <td><CopyableCode code="redirect_uri" /></td>
    <td><code>string (url)</code></td>
    <td>The location a successful log in from [login.linode.com](https://login.linode.com) should be redirected to for this client.  The receiver of this redirect should be ready to accept an OAuth exchange code and finish the OAuth exchange. (example: https://example.org/oauth/callback)</td>
</tr>
<tr>
    <td><CopyableCode code="secret" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The OAuth Client secret, used in the OAuth exchange.  This is returned as `<REDACTED>` except when an OAuth Client is created or its secret is reset.  This is a secret, and should not be shared or disclosed publicly. (example: &lt;REDACTED&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The status of this application.  `active` by default. (active, disabled, suspended) (example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="thumbnail_url" /></td>
    <td><code>string (url)</code></td>
    <td>__Read-only__ The URL where this client's thumbnail may be viewed, or `null` if this client does not have a thumbnail set. (example: https://api.linode.com/v4/account/clients/2737bf16b39ab5d7b4a1/thumbnail)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated list of OAuth Clients.

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
    <td>__Read-only__ The OAuth Client ID.  This is used to identify the client, and is a publicly known value (it is not a secret). (example: 2737bf16b39ab5d7b4a1)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The name of this application.  This will be presented to users when they are asked to grant it access to their Account. (example: Test_Client_1)</td>
</tr>
<tr>
    <td><CopyableCode code="public" /></td>
    <td><code>boolean</code></td>
    <td>__Filterable__ If this is a public or private OAuth Client.  Public clients have a slightly different authentication workflow than private clients.  See the [OAuth spec](https://oauth.net/2/) for more details.</td>
</tr>
<tr>
    <td><CopyableCode code="redirect_uri" /></td>
    <td><code>string (url)</code></td>
    <td>The location a successful log in from [login.linode.com](https://login.linode.com) should be redirected to for this client.  The receiver of this redirect should be ready to accept an OAuth exchange code and finish the OAuth exchange. (example: https://example.org/oauth/callback)</td>
</tr>
<tr>
    <td><CopyableCode code="secret" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The OAuth Client secret, used in the OAuth exchange.  This is returned as `<REDACTED>` except when an OAuth Client is created or its secret is reset.  This is a secret, and should not be shared or disclosed publicly. (example: &lt;REDACTED&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The status of this application.  `active` by default. (active, disabled, suspended) (example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="thumbnail_url" /></td>
    <td><code>string (url)</code></td>
    <td>__Read-only__ The URL where this client's thumbnail may be viewed, or `null` if this client does not have a thumbnail set. (example: https://api.linode.com/v4/account/clients/2737bf16b39ab5d7b4a1/thumbnail)</td>
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
    <td><a href="#parameter-clientId"><code>clientId</code></a></td>
    <td></td>
    <td>Returns information about a single OAuth client.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Returns a paginated list of OAuth Clients registered to your Account.  OAuth Clients allow users to log into applications you write or host using their Linode Account, and may allow them to grant some level of access to their Linodes or other entities to your application.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-label"><code>label</code></a>, <a href="#parameter-redirect_uri"><code>redirect_uri</code></a></td>
    <td></td>
    <td>Creates an OAuth Client, which can be used to allow users (using their Linode account) to log in to your own application, and optionally grant your application some amount of access to their Linodes or other entities.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-clientId"><code>clientId</code></a></td>
    <td></td>
    <td>Update information about an OAuth Client on your Account. This can be especially useful to update the `redirect_uri` of your client in the event that the callback URL changed in your application.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-clientId"><code>clientId</code></a></td>
    <td></td>
    <td>Deletes an OAuth Client registered with Linode. The Client ID and Client secret will no longer be accepted by [login.linode.com](https://login.linode.com), and all tokens issued to this client will be invalidated (meaning that if your application was using a token, it will no longer work).<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#reset_secret"><CopyableCode code="reset_secret" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-clientId"><code>clientId</code></a></td>
    <td></td>
    <td>Resets the OAuth Client secret for a client you own, and returns the OAuth Client with the plaintext secret. This secret is not supposed to be publicly known or disclosed anywhere. This can be used to generate a new secret in case the one you have has been leaked, or to get a new secret if you lost the original. The old secret is expired immediately, and logins to your client with the old secret will fail.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#get_thumbnail"><CopyableCode code="get_thumbnail" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-clientId"><code>clientId</code></a></td>
    <td></td>
    <td>Returns the PNG thumbnail for this OAuth client.  This is a publicly viewable operation, and you can access it without authentication.</td>
</tr>
<tr>
    <td><a href="#update_thumbnail"><CopyableCode code="update_thumbnail" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-clientId"><code>clientId</code></a></td>
    <td></td>
    <td>Upload a thumbnail for a client you own. You need to upload a PNG image file that the Linode API returns when the thumbnail is retrieved. This image is publicly viewable. __OAuth scopes__.<br /><br />    ```<br />    account:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-clientId">
    <td><CopyableCode code="clientId" /></td>
    <td><code>string</code></td>
    <td>The OAuth Client ID to look up. (example: &#123;&#123;clientId&#125;&#125;)</td>
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

Returns information about a single OAuth client.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
label,
public,
redirect_uri,
secret,
status,
thumbnail_url
FROM linode.account.oauth_clients
WHERE clientId = '{{ clientId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns a paginated list of OAuth Clients registered to your Account.  OAuth Clients allow users to log into applications you write or host using their Linode Account, and may allow them to grant some level of access to their Linodes or other entities to your application.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
label,
public,
redirect_uri,
secret,
status,
thumbnail_url
FROM linode.account.oauth_clients
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

Creates an OAuth Client, which can be used to allow users (using their Linode account) to log in to your own application, and optionally grant your application some amount of access to their Linodes or other entities.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.account.oauth_clients (
label,
public,
redirect_uri
)
SELECT 
'{{ label }}' /* required */,
{{ public }},
'{{ redirect_uri }}' /* required */
RETURNING
id,
label,
public,
redirect_uri,
secret,
status,
thumbnail_url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: oauth_clients
  props:
    - name: label
      value: "{{ label }}"
      description: |
        __Filterable__ The name of this application.  This will be presented to users when they are asked to grant it access to their Account.
    - name: public
      value: {{ public }}
      description: |
        __Filterable__ If this is a public or private OAuth Client.  Public clients have a slightly different authentication workflow than private clients.  See the [OAuth spec](https://oauth.net/2/) for more details.
      default: false
    - name: redirect_uri
      value: "{{ redirect_uri }}"
      description: |
        The location a successful log in from [login.linode.com](https://login.linode.com) should be redirected to for this client.  The receiver of this redirect should be ready to accept an OAuth exchange code and finish the OAuth exchange.
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

Update information about an OAuth Client on your Account. This can be especially useful to update the `redirect_uri` of your client in the event that the callback URL changed in your application.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.account.oauth_clients
SET 
label = '{{ label }}',
public = {{ public }},
redirect_uri = '{{ redirect_uri }}'
WHERE 
clientId = '{{ clientId }}' --required
RETURNING
id,
label,
public,
redirect_uri,
secret,
status,
thumbnail_url;
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

Deletes an OAuth Client registered with Linode. The Client ID and Client secret will no longer be accepted by [login.linode.com](https://login.linode.com), and all tokens issued to this client will be invalidated (meaning that if your application was using a token, it will no longer work).<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.account.oauth_clients
WHERE clientId = '{{ clientId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reset_secret"
    values={[
        { label: 'reset_secret', value: 'reset_secret' },
        { label: 'get_thumbnail', value: 'get_thumbnail' },
        { label: 'update_thumbnail', value: 'update_thumbnail' }
    ]}
>
<TabItem value="reset_secret">

Resets the OAuth Client secret for a client you own, and returns the OAuth Client with the plaintext secret. This secret is not supposed to be publicly known or disclosed anywhere. This can be used to generate a new secret in case the one you have has been leaked, or to get a new secret if you lost the original. The old secret is expired immediately, and logins to your client with the old secret will fail.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.account.oauth_clients.reset_secret 
@clientId='{{ clientId }}' --required
;
```
</TabItem>
<TabItem value="get_thumbnail">

Returns the PNG thumbnail for this OAuth client.  This is a publicly viewable operation, and you can access it without authentication.

```sql
EXEC linode.account.oauth_clients.get_thumbnail 
@clientId='{{ clientId }}' --required
;
```
</TabItem>
<TabItem value="update_thumbnail">

Upload a thumbnail for a client you own. You need to upload a PNG image file that the Linode API returns when the thumbnail is retrieved. This image is publicly viewable. __OAuth scopes__.<br /><br />    ```<br />    account:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.account.oauth_clients.update_thumbnail 
@clientId='{{ clientId }}' --required
;
```
</TabItem>
</Tabs>
