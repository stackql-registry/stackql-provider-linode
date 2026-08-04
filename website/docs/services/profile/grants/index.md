--- 
title: grants
hide_title: false
hide_table_of_contents: false
keywords:
  - grants
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

Creates, updates, deletes, gets or lists a <code>grants</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="grants" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.profile.grants" /></td></tr>
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

GrantsResponse.

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
    <td><CopyableCode code="database" /></td>
    <td><code>array</code></td>
    <td>The grants this user has for individual Managed Databases on this account.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>array</code></td>
    <td>The grants this user has for individual domains on this account.</td>
</tr>
<tr>
    <td><CopyableCode code="firewall" /></td>
    <td><code>array</code></td>
    <td>The grants this user has for individual firewalls on this account.</td>
</tr>
<tr>
    <td><CopyableCode code="global" /></td>
    <td><code>object</code></td>
    <td>The grants the user has to all resources on your account.</td>
</tr>
<tr>
    <td><CopyableCode code="image" /></td>
    <td><code>array</code></td>
    <td>The grants this user has for individual images on this account.</td>
</tr>
<tr>
    <td><CopyableCode code="linode" /></td>
    <td><code>array</code></td>
    <td>The grants this user has for individual Linodes on this account.</td>
</tr>
<tr>
    <td><CopyableCode code="longview" /></td>
    <td><code>array</code></td>
    <td>The grants this user has for individual Longview Clients on this account.</td>
</tr>
<tr>
    <td><CopyableCode code="nodebalancer" /></td>
    <td><code>array</code></td>
    <td>The grants this user has for individual NodeBalancers on this account.</td>
</tr>
<tr>
    <td><CopyableCode code="stackscript" /></td>
    <td><code>array</code></td>
    <td>The grants this User has for individual StackScripts on this account.</td>
</tr>
<tr>
    <td><CopyableCode code="volume" /></td>
    <td><code>array</code></td>
    <td>The grants this user has individual Block Storage Volumes on this account.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc" /></td>
    <td><code>array</code></td>
    <td>The grants this user has individual Virtual Private Clouds (VPCs) on this account.</td>
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
    <td></td>
    <td></td>
    <td>This returns a GrantsResponse describing what the acting User has been granted access to.  For unrestricted users, this will return a  204 and no body because unrestricted users have access to everything without grants.  This will not return information about entities you do not have access to.  This operation is useful when writing third-party OAuth applications to see what options you should present to the acting User.<br /><br />For example, if they do not have `global.add_linodes`, you might not display a button to deploy a new Linode.<br /><br />Any client may run this operation; no OAuth scopes are required.</td>
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

This returns a GrantsResponse describing what the acting User has been granted access to.  For unrestricted users, this will return a  204 and no body because unrestricted users have access to everything without grants.  This will not return information about entities you do not have access to.  This operation is useful when writing third-party OAuth applications to see what options you should present to the acting User.<br /><br />For example, if they do not have `global.add_linodes`, you might not display a button to deploy a new Linode.<br /><br />Any client may run this operation; no OAuth scopes are required.

```sql
SELECT
database,
domain,
firewall,
global,
image,
linode,
longview,
nodebalancer,
stackscript,
volume,
vpc
FROM linode.profile.grants
;
```
</TabItem>
</Tabs>
