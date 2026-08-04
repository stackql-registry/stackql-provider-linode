--- 
title: ip_addresses
hide_title: false
hide_table_of_contents: false
keywords:
  - ip_addresses
  - vpcs
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

Creates, updates, deletes, gets or lists an <code>ip_addresses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ip_addresses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.vpcs.ip_addresses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_by_vpc"
    values={[
        { label: 'list_by_vpc', value: 'list_by_vpc' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list_by_vpc">

The IP addresses for the requested VPC.

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
    <td><CopyableCode code="config_id" /></td>
    <td><code>integer</code></td>
    <td>__Filterable__, __Read-only__ The globally general entity identifier for the Linode configuration profile that includes the VPC. If this is a VPC Linode interface, the value is `null`.</td>
</tr>
<tr>
    <td><CopyableCode code="interface_id" /></td>
    <td><code>integer</code></td>
    <td>__Beta__, __Read-only__ The globally general API entity identifier for the Linode interface.</td>
</tr>
<tr>
    <td><CopyableCode code="linode_id" /></td>
    <td><code>integer</code></td>
    <td>__Filterable__, __Read-only__ The identifier for the Linode the VPC interface currently belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_id" /></td>
    <td><code>integer</code></td>
    <td>The `id` of the VPC Subnet for this interface.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>integer</code></td>
    <td>__Filterable__, __Read-only__ The unique globally general API entity identifier for the VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td>__Filterable__, __Read-only__ Returns `true` if the VPC interface is in use, meaning that the Linode was powered on using the `config_id` to which the interface belongs. Otherwise returns `false`.</td>
</tr>
<tr>
    <td><CopyableCode code="address" /></td>
    <td><code>string (ip)</code></td>
    <td>__Read-only__ An IPv4 address configured for this VPC interface. These follow the [RFC 1918](https://datatracker.ietf.org/doc/html/rfc1918) private address format. Displayed as `null` if an `address_range`. (example: 192.0.2.141)</td>
</tr>
<tr>
    <td><CopyableCode code="address_range" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ A range of IPv4 addresses configured for this VPC interface. Displayed as `null` if a single `address`.</td>
</tr>
<tr>
    <td><CopyableCode code="gateway" /></td>
    <td><code>string (ip)</code></td>
    <td>__Read-only__ The default gateway for the VPC subnet that the IP or IP range belongs to. (example: 192.0.2.1)</td>
</tr>
<tr>
    <td><CopyableCode code="nat_1_1" /></td>
    <td><code>string (ip)</code></td>
    <td>__Read-only__ The public IP address used for NAT 1:1 with the VPC. This is empty if NAT 1:1 isn't used. (example: 192.168.0.42)</td>
</tr>
<tr>
    <td><CopyableCode code="prefix" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ The number of bits set in the `subnet_mask`.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ The region of the VPC. (example: us-east)</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_mask" /></td>
    <td><code>string (ip)</code></td>
    <td>__Read-only__ The mask that separates host bits from network bits for the `address` or `address_range`. (example: 255.255.255.0)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated list of VPC interface IP addresses.

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
    <td><CopyableCode code="config_id" /></td>
    <td><code>integer</code></td>
    <td>__Filterable__, __Read-only__ The globally general entity identifier for the Linode configuration profile that includes the VPC. If this is a VPC Linode interface, the value is `null`.</td>
</tr>
<tr>
    <td><CopyableCode code="interface_id" /></td>
    <td><code>integer</code></td>
    <td>__Beta__, __Read-only__ The globally general API entity identifier for the Linode interface.</td>
</tr>
<tr>
    <td><CopyableCode code="linode_id" /></td>
    <td><code>integer</code></td>
    <td>__Filterable__, __Read-only__ The identifier for the Linode the VPC interface currently belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_id" /></td>
    <td><code>integer</code></td>
    <td>The `id` of the VPC Subnet for this interface.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>integer</code></td>
    <td>__Filterable__, __Read-only__ The unique globally general API entity identifier for the VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td>__Filterable__, __Read-only__ Returns `true` if the VPC interface is in use, meaning that the Linode was powered on using the `config_id` to which the interface belongs. Otherwise returns `false`.</td>
</tr>
<tr>
    <td><CopyableCode code="address" /></td>
    <td><code>string (ip)</code></td>
    <td>__Read-only__ An IPv4 address configured for this VPC interface. These follow the [RFC 1918](https://datatracker.ietf.org/doc/html/rfc1918) private address format. Displayed as `null` if an `address_range`. (example: 192.0.2.141)</td>
</tr>
<tr>
    <td><CopyableCode code="address_range" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ A range of IPv4 addresses configured for this VPC interface. Displayed as `null` if a single `address`.</td>
</tr>
<tr>
    <td><CopyableCode code="gateway" /></td>
    <td><code>string (ip)</code></td>
    <td>__Read-only__ The default gateway for the VPC subnet that the IP or IP range belongs to. (example: 192.0.2.1)</td>
</tr>
<tr>
    <td><CopyableCode code="nat_1_1" /></td>
    <td><code>string (ip)</code></td>
    <td>__Read-only__ The public IP address used for NAT 1:1 with the VPC. This is empty if NAT 1:1 isn't used. (example: 192.168.0.42)</td>
</tr>
<tr>
    <td><CopyableCode code="prefix" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ The number of bits set in the `subnet_mask`.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ The region of the VPC. (example: us-east)</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_mask" /></td>
    <td><code>string (ip)</code></td>
    <td>__Read-only__ The mask that separates host bits from network bits for the `address` or `address_range`. (example: 255.255.255.0)</td>
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
    <td><a href="#list_by_vpc"><CopyableCode code="list_by_vpc" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-vpcId"><code>vpcId</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Returns a paginated list of IP addresses for a single VPC.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Returns a paginated list of all VPC IP addresses and address ranges on your account.<br /><br />&gt; 📘<br />&gt;<br />&gt; If a Linode has several configuration profiles that include a VPC interface, address information for all of them is listed in the response. Since VPCs can use the same address space, you may see duplicate IP addresses.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-vpcId">
    <td><CopyableCode code="vpcId" /></td>
    <td><code>string</code></td>
    <td>The `id` of the VPC.</td>
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
    defaultValue="list_by_vpc"
    values={[
        { label: 'list_by_vpc', value: 'list_by_vpc' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list_by_vpc">

Returns a paginated list of IP addresses for a single VPC.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
config_id,
interface_id,
linode_id,
subnet_id,
vpc_id,
active,
address,
address_range,
gateway,
nat_1_1,
prefix,
region,
subnet_mask
FROM linode.vpcs.ip_addresses
WHERE vpcId = '{{ vpcId }}' -- required
AND page = '{{ page }}'
AND page_size = '{{ page_size }}'
;
```
</TabItem>
<TabItem value="list">

Returns a paginated list of all VPC IP addresses and address ranges on your account.<br /><br />&gt; 📘<br />&gt;<br />&gt; If a Linode has several configuration profiles that include a VPC interface, address information for all of them is listed in the response. Since VPCs can use the same address space, you may see duplicate IP addresses.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
config_id,
interface_id,
linode_id,
subnet_id,
vpc_id,
active,
address,
address_range,
gateway,
nat_1_1,
prefix,
region,
subnet_mask
FROM linode.vpcs.ip_addresses
WHERE page = '{{ page }}'
AND page_size = '{{ page_size }}'
;
```
</TabItem>
</Tabs>
