--- 
title: logins
hide_title: false
hide_table_of_contents: false
keywords:
  - logins
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

Creates, updates, deletes, gets or lists a <code>logins</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="logins" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.account.logins" /></td></tr>
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

The requested login object.

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
    <td>__Read-only__ The unique ID of this login object.</td>
</tr>
<tr>
    <td><CopyableCode code="datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When the login was initiated. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ip)</code></td>
    <td>__Read-only__ The remote IP address that requested the login. (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="restricted" /></td>
    <td><code>boolean</code></td>
    <td>__Read-only__ True if the User that attempted the login was a restricted User, false otherwise.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ Whether the login attempt succeeded or failed. (successful, failed) (example: successful)</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The username of the User that attempted the login. (example: example_user)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A collection of successful logins for all users on the account during the last 90 days.

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
    <td>__Read-only__ The unique ID of this login object.</td>
</tr>
<tr>
    <td><CopyableCode code="datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When the login was initiated. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ip)</code></td>
    <td>__Read-only__ The remote IP address that requested the login. (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="restricted" /></td>
    <td><code>boolean</code></td>
    <td>__Read-only__ True if the User that attempted the login was a restricted User, false otherwise.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ Whether the login attempt succeeded or failed. (successful, failed) (example: successful)</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The username of the User that attempted the login. (example: example_user)</td>
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
    <td><a href="#parameter-loginId"><code>loginId</code></a></td>
    <td></td>
    <td>Returns a Login object that displays information about a successful login. The logins that can be viewed can be for any user on the account, and are not limited to only the logins of the user that is accessing this API endpoint. This operation can only be accessed by the unrestricted users of the account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Returns a collection of successful logins for all users on the account during the last 90 days. This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-loginId">
    <td><CopyableCode code="loginId" /></td>
    <td><code>string</code></td>
    <td>The ID of the login object to access.</td>
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

Returns a Login object that displays information about a successful login. The logins that can be viewed can be for any user on the account, and are not limited to only the logins of the user that is accessing this API endpoint. This operation can only be accessed by the unrestricted users of the account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
datetime,
ip,
restricted,
status,
username
FROM linode.account.logins
WHERE loginId = '{{ loginId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns a collection of successful logins for all users on the account during the last 90 days. This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
datetime,
ip,
restricted,
status,
username
FROM linode.account.logins
;
```
</TabItem>
</Tabs>
