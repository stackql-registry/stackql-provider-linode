--- 
title: control_plane_acl
hide_title: false
hide_table_of_contents: false
keywords:
  - control_plane_acl
  - lke
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

Creates, updates, deletes, gets or lists a <code>control_plane_acl</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="control_plane_acl" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.lke.control_plane_acl" /></td></tr>
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

Returns a single cluster's control plane access control list. The optional field `revision-id` provided will be reflected on GET response when (and only after) the ACL stanza is verified as enforced.

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
    <td><CopyableCode code="addresses" /></td>
    <td><code>object</code></td>
    <td>Supports keys `ipv4` and `ipv6`. Defaults to `&#123;&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Defines a default policy. A value of `true` results in a default policy of `DENY`. A value of `false` results in a default policy of `ALLOW`, such as for disabled access controls. It defaults to `true`. Creating a cluster with ACL, or upgrading a cluster to use ACL for LKE, is an irreversible change. Once upgraded, you can only toggle access controls with this field.</td>
</tr>
<tr>
    <td><CopyableCode code="revision-id" /></td>
    <td><code>string</code></td>
    <td>Enables clients to track events related to ACL update requests and enforcements. Optional field. If omitted, defaults to a randomly generated string. (example: 20240127r001)</td>
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
    <td><a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Get a specific cluster's control plane access control List.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Updates a specific cluster's control plane access control list.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Disable control plane access controls and deletes all rules. This has the same effect as calling `PUT` with an acl json map value of `&#123;“enabled” : false&#125;`.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-clusterId">
    <td><CopyableCode code="clusterId" /></td>
    <td><code>string</code></td>
    <td>ID of the Kubernetes cluster to look up. (example: &#123;&#123;clusterId&#125;&#125;)</td>
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

Get a specific cluster's control plane access control List.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
addresses,
enabled,
revision-id
FROM linode.lke.control_plane_acl
WHERE clusterId = '{{ clusterId }}' -- required
;
```
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

Updates a specific cluster's control plane access control list.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.lke.control_plane_acl
SET 
acl = '{{ acl }}'
WHERE 
clusterId = '{{ clusterId }}' --required
RETURNING
acl;
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

Disable control plane access controls and deletes all rules. This has the same effect as calling `PUT` with an acl json map value of `&#123;“enabled” : false&#125;`.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.lke.control_plane_acl
WHERE clusterId = '{{ clusterId }}' --required
;
```
</TabItem>
</Tabs>
