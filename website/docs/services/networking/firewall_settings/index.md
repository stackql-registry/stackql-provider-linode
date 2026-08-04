--- 
title: firewall_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_settings
  - networking
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

Creates, updates, deletes, gets or lists a <code>firewall_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="firewall_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.networking.firewall_settings" /></td></tr>
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

Returns default firewalls.

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
    <td><CopyableCode code="linode" /></td>
    <td><code>integer</code></td>
    <td>The Linode's default firewall.</td>
</tr>
<tr>
    <td><CopyableCode code="nodebalancer" /></td>
    <td><code>integer</code></td>
    <td>The NodeBalancer's default firewall.</td>
</tr>
<tr>
    <td><CopyableCode code="public_interface" /></td>
    <td><code>integer</code></td>
    <td>The public interface's default firewall.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_interface" /></td>
    <td><code>integer</code></td>
    <td>The VPC interface's default firewall.</td>
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
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>__Beta__ Returns default firewalls for Linodes, Linode VPC and public interfaces, and NodeBalancers.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td></td>
    <td></td>
    <td>__Beta__ You can update or add a default firewall to:<br /><br />- Linodes using legacy config profile interfaces<br /><br />- Linode VPC interfaces and Linode public interfaces<br /><br />- NodeBalancers<br /><br />If a firewall isn't provided during service creation, a default firewall is assigned, unless you have opted out of firewall protection.<br /><br />&gt; 📘<br />&gt;<br />&gt; Default firewalls on Linodes with Linode interfaces are applied to the interfaces, not the Linode itself.<br />&gt;<br />&gt; Default firewalls on Linodes with legacy configuration profile interfaces are applied directly to the Linode, not its interfaces.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

__Beta__ Returns default firewalls for Linodes, Linode VPC and public interfaces, and NodeBalancers.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
linode,
nodebalancer,
public_interface,
vpc_interface
FROM linode.networking.firewall_settings
WHERE page = '{{ page }}'
AND page_size = '{{ page_size }}'
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

__Beta__ You can update or add a default firewall to:<br /><br />- Linodes using legacy config profile interfaces<br /><br />- Linode VPC interfaces and Linode public interfaces<br /><br />- NodeBalancers<br /><br />If a firewall isn't provided during service creation, a default firewall is assigned, unless you have opted out of firewall protection.<br /><br />&gt; 📘<br />&gt;<br />&gt; Default firewalls on Linodes with Linode interfaces are applied to the interfaces, not the Linode itself.<br />&gt;<br />&gt; Default firewalls on Linodes with legacy configuration profile interfaces are applied directly to the Linode, not its interfaces.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.networking.firewall_settings
SET 
default_firewall_ids = '{{ default_firewall_ids }}'
RETURNING
default_firewall_ids;
```
</TabItem>
</Tabs>
