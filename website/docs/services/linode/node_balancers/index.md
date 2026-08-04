--- 
title: node_balancers
hide_title: false
hide_table_of_contents: false
keywords:
  - node_balancers
  - linode
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

Creates, updates, deletes, gets or lists a <code>node_balancers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="node_balancers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.linode.node_balancers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Returns a paginated list of NodeBalancers.

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
    <td>__Read-only__ This NodeBalancer's unique ID.</td>
</tr>
<tr>
    <td><CopyableCode code="client_conn_throttle" /></td>
    <td><code>integer</code></td>
    <td>Throttle TCP connections per second for TCP, HTTP, and HTTPS configurations.  Set to `0` (zero) to disable throttling.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this NodeBalancer was created. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ This NodeBalancer's hostname, beginning with its IP address and ending with _.ip.linodeusercontent.com_. (example: 192.0.2.1.ip.linodeusercontent.com)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv4" /></td>
    <td><code>string (ip)</code></td>
    <td>__Filterable__, __Read-only__ This NodeBalancer's public IPv4 address. (example: 203.0.113.1)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv6" /></td>
    <td><code>string (ip)</code></td>
    <td>__Read-only__ This NodeBalancer's public IPv6 address.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ This NodeBalancer's label. These must be unique on your Account. (example: balancer12345, pattern: <code>&#91;a-zA-Z0-9-_&#93;&#123;3,32&#125;</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="lke_cluster" /></td>
    <td><code>object</code></td>
    <td>__Read-only__ This NodeBalancer's related LKE cluster, if any. The value is `null` if this NodeBalancer isn't related to an LKE cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ The Region where this NodeBalancer is located. NodeBalancers only support backends in the same Region. (example: us-east)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>__Filterable__ An array of Tags applied to this object.  Tags are for organizational purposes only.</td>
</tr>
<tr>
    <td><CopyableCode code="transfer" /></td>
    <td><code>object</code></td>
    <td>__Read-only__ Information about the amount of transfer this NodeBalancer has had so far this month.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The type of NodeBalancer. (common, premium) (example: premium)</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this NodeBalancer was last updated. (example: 2018-03-01T00:01:01)</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-linodeId"><code>linodeId</code></a></td>
    <td></td>
    <td>Returns a list of NodeBalancers that are assigned to this Linode and readable by the requesting User.<br /><br />Read permission to a NodeBalancer can be given to a User by accessing the [Update a user's grants](https://techdocs.akamai.com/linode-api/reference/put-user-grants) operation.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-linodeId">
    <td><CopyableCode code="linodeId" /></td>
    <td><code>string</code></td>
    <td>ID of the Linode to look up.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Returns a list of NodeBalancers that are assigned to this Linode and readable by the requesting User.<br /><br />Read permission to a NodeBalancer can be given to a User by accessing the [Update a user's grants](https://techdocs.akamai.com/linode-api/reference/put-user-grants) operation.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
client_conn_throttle,
created,
hostname,
ipv4,
ipv6,
label,
lke_cluster,
region,
tags,
transfer,
type,
updated
FROM linode.linode.node_balancers
WHERE linodeId = '{{ linodeId }}' -- required
;
```
</TabItem>
</Tabs>
