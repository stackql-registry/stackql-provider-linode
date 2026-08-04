--- 
title: apps
hide_title: false
hide_table_of_contents: false
keywords:
  - apps
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

Creates, updates, deletes, gets or lists an <code>apps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="apps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.profile.apps" /></td></tr>
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

The app requested.

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
    <td>__Read-only__ This authorization's ID, used for revoking access.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__, __Read-only__ When this app was authorized. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="expiry" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__, __Read-only__ When the app's access to your account expires. If `null`, the app's access must be revoked manually. (example: 2018-01-15T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ The name of the application you've authorized. (example: example-app)</td>
</tr>
<tr>
    <td><CopyableCode code="scopes" /></td>
    <td><code>string (oauth-scopes)</code></td>
    <td>__Read-only__ The OAuth scopes this app was authorized with.  This defines what parts of your Account the app is allowed to access. (example: linodes:read_only)</td>
</tr>
<tr>
    <td><CopyableCode code="thumbnail_url" /></td>
    <td><code>string (url)</code></td>
    <td>__Read-only__ The URL at which this app's thumbnail may be accessed.</td>
</tr>
<tr>
    <td><CopyableCode code="website" /></td>
    <td><code>string (url)</code></td>
    <td>__Read-only__ The website where you can get more information about this app. (example: example.org)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated list of apps you've authorized.

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
    <td>__Read-only__ This authorization's ID, used for revoking access.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__, __Read-only__ When this app was authorized. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="expiry" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__, __Read-only__ When the app's access to your account expires. If `null`, the app's access must be revoked manually. (example: 2018-01-15T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ The name of the application you've authorized. (example: example-app)</td>
</tr>
<tr>
    <td><CopyableCode code="scopes" /></td>
    <td><code>string (oauth-scopes)</code></td>
    <td>__Read-only__ The OAuth scopes this app was authorized with.  This defines what parts of your Account the app is allowed to access. (example: linodes:read_only)</td>
</tr>
<tr>
    <td><CopyableCode code="thumbnail_url" /></td>
    <td><code>string (url)</code></td>
    <td>__Read-only__ The URL at which this app's thumbnail may be accessed.</td>
</tr>
<tr>
    <td><CopyableCode code="website" /></td>
    <td><code>string (url)</code></td>
    <td>__Read-only__ The website where you can get more information about this app. (example: example.org)</td>
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
    <td><a href="#parameter-appId"><code>appId</code></a></td>
    <td></td>
    <td>Returns information about a single app you've authorized to access your account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>This is a collection of OAuth apps that you've given access to your account, and includes the level of access granted.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-appId"><code>appId</code></a></td>
    <td></td>
    <td>Expires this app token. This token can no longer be used to access your account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-appId">
    <td><CopyableCode code="appId" /></td>
    <td><code>string</code></td>
    <td>The authorized app ID to manage.</td>
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

Returns information about a single app you've authorized to access your account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
created,
expiry,
label,
scopes,
thumbnail_url,
website
FROM linode.profile.apps
WHERE appId = '{{ appId }}' -- required
;
```
</TabItem>
<TabItem value="list">

This is a collection of OAuth apps that you've given access to your account, and includes the level of access granted.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
created,
expiry,
label,
scopes,
thumbnail_url,
website
FROM linode.profile.apps
WHERE page = '{{ page }}'
AND page_size = '{{ page_size }}'
;
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

Expires this app token. This token can no longer be used to access your account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.profile.apps
WHERE appId = '{{ appId }}' --required
;
```
</TabItem>
</Tabs>
