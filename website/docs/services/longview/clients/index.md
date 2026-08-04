--- 
title: clients
hide_title: false
hide_table_of_contents: false
keywords:
  - clients
  - longview
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

Creates, updates, deletes, gets or lists a <code>clients</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="clients" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.longview.clients" /></td></tr>
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

The requested Longview Client.

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
    <td>__Read-only__ This Client's unique ID.</td>
</tr>
<tr>
    <td><CopyableCode code="api_key" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The API key for this Client, used when configuring the Longview Client application on your Linode.  Returns as `[REDACTED]` if you do not have read-write access to this client. (example: BD1B4B54-D752-A76D-5A9BD8A17F39DB61)</td>
</tr>
<tr>
    <td><CopyableCode code="apps" /></td>
    <td><code>object</code></td>
    <td>__Read-only__ The apps this Client is monitoring on your Linode. This is configured when you install the Longview Client application, and is present here for information purposes only.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this Longview Client was created. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="install_code" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The install code for this Client, used when configuring the Longview Client application on your Linode.  Returns as `[REDACTED]` if you do not have read-write access to this client. (example: BD1B5605-BF5E-D385-BA07AD518BE7F321)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ This Client's unique label. This is for display purposes only. (example: client789, pattern: <code>&#91;a-zA-Z0-9-_&#93;&#123;3,32&#125;</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this Longview Client was last updated. (example: 2018-01-01T00:01:01)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated list of Longview Clients.

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
    <td>__Read-only__ This Client's unique ID.</td>
</tr>
<tr>
    <td><CopyableCode code="api_key" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The API key for this Client, used when configuring the Longview Client application on your Linode.  Returns as `[REDACTED]` if you do not have read-write access to this client. (example: BD1B4B54-D752-A76D-5A9BD8A17F39DB61)</td>
</tr>
<tr>
    <td><CopyableCode code="apps" /></td>
    <td><code>object</code></td>
    <td>__Read-only__ The apps this Client is monitoring on your Linode. This is configured when you install the Longview Client application, and is present here for information purposes only.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this Longview Client was created. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="install_code" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The install code for this Client, used when configuring the Longview Client application on your Linode.  Returns as `[REDACTED]` if you do not have read-write access to this client. (example: BD1B5605-BF5E-D385-BA07AD518BE7F321)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ This Client's unique label. This is for display purposes only. (example: client789, pattern: <code>&#91;a-zA-Z0-9-_&#93;&#123;3,32&#125;</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this Longview Client was last updated. (example: 2018-01-01T00:01:01)</td>
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
    <td>Returns a single Longview Client you can access.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Returns a paginated list of Longview Clients you have access to. Longview Client is used to monitor stats on your Linode with the help of the Longview Client application.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Creates a Longview Client.  This Client will not begin monitoring the status of your server until you configure the Longview Client application on your Linode using the returning `install_code` and `api_key`.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-clientId"><code>clientId</code></a></td>
    <td></td>
    <td>Updates a Longview Client.  This cannot update how it monitors your server; use the Longview Client application on your Linode for monitoring configuration.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-clientId"><code>clientId</code></a></td>
    <td></td>
    <td>Deletes a Longview Client from your Account.<br /><br />__All information stored for this client will be lost.__<br /><br />This _does not_ uninstall the Longview Client application for your Linode - you must do that manually.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
    <td>The Longview Client ID to access. (example: &#123;&#123;clientId&#125;&#125;)</td>
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

Returns a single Longview Client you can access.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
api_key,
apps,
created,
install_code,
label,
updated
FROM linode.longview.clients
WHERE clientId = '{{ clientId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns a paginated list of Longview Clients you have access to. Longview Client is used to monitor stats on your Linode with the help of the Longview Client application.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
api_key,
apps,
created,
install_code,
label,
updated
FROM linode.longview.clients
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

Creates a Longview Client.  This Client will not begin monitoring the status of your server until you configure the Longview Client application on your Linode using the returning `install_code` and `api_key`.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.longview.clients (
label
)
SELECT 
'{{ label }}'
RETURNING
id,
api_key,
apps,
created,
install_code,
label,
updated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: clients
  props:
    - name: label
      value: "{{ label }}"
      description: |
        __Filterable__ This Client's unique label. This is for display purposes only.
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

Updates a Longview Client.  This cannot update how it monitors your server; use the Longview Client application on your Linode for monitoring configuration.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.longview.clients
SET 
label = '{{ label }}'
WHERE 
clientId = '{{ clientId }}' --required
RETURNING
id,
api_key,
apps,
created,
install_code,
label,
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

Deletes a Longview Client from your Account.<br /><br />__All information stored for this client will be lost.__<br /><br />This _does not_ uninstall the Longview Client application for your Linode - you must do that manually.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.longview.clients
WHERE clientId = '{{ clientId }}' --required
;
```
</TabItem>
</Tabs>
