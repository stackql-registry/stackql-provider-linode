--- 
title: mysql_instance_credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - mysql_instance_credentials
  - databases
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

Creates, updates, deletes, gets or lists a <code>mysql_instance_credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mysql_instance_credentials" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.databases.mysql_instance_credentials" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

MySQL Managed Database root username and password.

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
    <td><CopyableCode code="password" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The randomly generated root password for the Managed Database instance. (example: s3cur3P@ssw0rd)</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The root username for the Managed Database instance. (example: linroot)</td>
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
    <td><a href="#parameter-instanceId"><code>instanceId</code></a></td>
    <td></td>
    <td>Display the root username and password for an accessible MySQL Managed Database. The database's status needs to be `active`.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#reset_credentials"><CopyableCode code="reset_credentials" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a></td>
    <td></td>
    <td>Reset the root password for a MySQL Managed Database. A new root password is randomly generated and accessible with the [Get MySQL Managed Database credentials](https://techdocs.akamai.com/linode-api/reference/get-databases-mysql-instance-credentials) operation.<br /><br />- The database's status needs to be `active`.<br /><br />- Only unrestricted users can access this operation. These users have access regardless of the acting token's OAuth scopes.<br /><br />- It may take several seconds for credentials to reset.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-instanceId">
    <td><CopyableCode code="instanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Managed MySQL Database.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Display the root username and password for an accessible MySQL Managed Database. The database's status needs to be `active`.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
password,
username
FROM linode.databases.mysql_instance_credentials
WHERE instanceId = '{{ instanceId }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reset_credentials"
    values={[
        { label: 'reset_credentials', value: 'reset_credentials' }
    ]}
>
<TabItem value="reset_credentials">

Reset the root password for a MySQL Managed Database. A new root password is randomly generated and accessible with the [Get MySQL Managed Database credentials](https://techdocs.akamai.com/linode-api/reference/get-databases-mysql-instance-credentials) operation.<br /><br />- The database's status needs to be `active`.<br /><br />- Only unrestricted users can access this operation. These users have access regardless of the acting token's OAuth scopes.<br /><br />- It may take several seconds for credentials to reset.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.databases.mysql_instance_credentials.reset_credentials 
@instanceId='{{ instanceId }}' --required
;
```
</TabItem>
</Tabs>
