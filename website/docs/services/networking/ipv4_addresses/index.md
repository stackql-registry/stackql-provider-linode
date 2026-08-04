--- 
title: ipv4_addresses
hide_title: false
hide_table_of_contents: false
keywords:
  - ipv4_addresses
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

Creates, updates, deletes, gets or lists an <code>ipv4_addresses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ipv4_addresses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.networking.ipv4_addresses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#assign"><CopyableCode code="assign" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-assignments"><code>assignments</code></a></td>
    <td></td>
    <td>This operation is equivalent to [Assign IP addresses](https://techdocs.akamai.com/linode-api/reference/post-assign-ips).<br /><br />Assign multiple IPv4 addresses and/or IPv6 ranges to multiple Linodes in one Region. This allows swapping, shuffling, or otherwise reorganizing IPs to your Linodes.<br /><br />The following restrictions apply:<br /><br />- All Linodes involved must have at least one public IPv4 address after assignment.<br />  - For Linode interfaces, the Linode needs to have a public interface, and the address it receives can't be a private IPv4 address.<br />- Linodes may have no more than one assigned private IPv4 address.<br />- Linodes may have no more than one assigned IPv6 range.<br /><br />[Open a support ticket](https://techdocs.akamai.com/linode-api/reference/post-ticket) to request additional IPv4 addresses or IPv6 ranges beyond standard account limits.<br /><br />&gt; 📘<br />&gt;<br />&gt; Removing an IP address that has been set as a Managed Linode's `ssh.ip` causes the Managed Linode's SSH access settings to reset to their default values.<br /><br />To view and configure Managed Linode SSH settings, use the following operations:<br />- [Get a Linode's managed settings](https://techdocs.akamai.com/linode-api/reference/get-managed-linode-setting)<br />- [Update a Linode's managed settings](https://techdocs.akamai.com/linode-api/reference/put-managed-linode-setting) __OAuth scopes__.<br /><br />    ```<br />    ips:read_write<br />linodes:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#share"><CopyableCode code="share" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-linode_id"><code>linode_id</code></a>, <a href="#parameter-ips"><code>ips</code></a></td>
    <td></td>
    <td>This operation is equivalent to [Share IP addresses](https://techdocs.akamai.com/linode-api/reference/post-share-ips).<br /><br />Configure shared IPs.<br /><br />IP sharing allows IP address reassignment (also referred to as IP failover) from one Linode to another if the primary Linode becomes unresponsive. This means that requests to the primary Linode's IP address can be automatically rerouted to secondary Linodes at the configured shared IP addresses.<br /><br />IP failover requires configuration of a [BGP based failover service](https://techdocs.akamai.com/cloud-computing/docs/configure-failover-on-a-compute-instance) within the internal system of the primary Linode.<br /><br />&gt; 📘<br />&gt;<br />&gt; A public IPv4 address can't be shared if it's configured for a 1:1 NAT on a legacy configuration profile VPC interface or on a Linode VPC interface. __OAuth scopes__.<br /><br />    ```<br />    ips:read_write<br />linodes:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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

## `INSERT` examples

<Tabs
    defaultValue="assign"
    values={[
        { label: 'assign', value: 'assign' },
        { label: 'share', value: 'share' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="assign">

This operation is equivalent to [Assign IP addresses](https://techdocs.akamai.com/linode-api/reference/post-assign-ips).<br /><br />Assign multiple IPv4 addresses and/or IPv6 ranges to multiple Linodes in one Region. This allows swapping, shuffling, or otherwise reorganizing IPs to your Linodes.<br /><br />The following restrictions apply:<br /><br />- All Linodes involved must have at least one public IPv4 address after assignment.<br />  - For Linode interfaces, the Linode needs to have a public interface, and the address it receives can't be a private IPv4 address.<br />- Linodes may have no more than one assigned private IPv4 address.<br />- Linodes may have no more than one assigned IPv6 range.<br /><br />[Open a support ticket](https://techdocs.akamai.com/linode-api/reference/post-ticket) to request additional IPv4 addresses or IPv6 ranges beyond standard account limits.<br /><br />&gt; 📘<br />&gt;<br />&gt; Removing an IP address that has been set as a Managed Linode's `ssh.ip` causes the Managed Linode's SSH access settings to reset to their default values.<br /><br />To view and configure Managed Linode SSH settings, use the following operations:<br />- [Get a Linode's managed settings](https://techdocs.akamai.com/linode-api/reference/get-managed-linode-setting)<br />- [Update a Linode's managed settings](https://techdocs.akamai.com/linode-api/reference/put-managed-linode-setting) __OAuth scopes__.<br /><br />    ```<br />    ips:read_write<br />linodes:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.networking.ipv4_addresses (
assignments,
region
)
SELECT 
'{{ assignments }}' /* required */,
'{{ region }}' /* required */
RETURNING
message
;
```
</TabItem>
<TabItem value="share">

This operation is equivalent to [Share IP addresses](https://techdocs.akamai.com/linode-api/reference/post-share-ips).<br /><br />Configure shared IPs.<br /><br />IP sharing allows IP address reassignment (also referred to as IP failover) from one Linode to another if the primary Linode becomes unresponsive. This means that requests to the primary Linode's IP address can be automatically rerouted to secondary Linodes at the configured shared IP addresses.<br /><br />IP failover requires configuration of a [BGP based failover service](https://techdocs.akamai.com/cloud-computing/docs/configure-failover-on-a-compute-instance) within the internal system of the primary Linode.<br /><br />&gt; 📘<br />&gt;<br />&gt; A public IPv4 address can't be shared if it's configured for a 1:1 NAT on a legacy configuration profile VPC interface or on a Linode VPC interface. __OAuth scopes__.<br /><br />    ```<br />    ips:read_write<br />linodes:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.networking.ipv4_addresses (
ips,
linode_id
)
SELECT 
'{{ ips }}' /* required */,
{{ linode_id }} /* required */
RETURNING
message
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ipv4_addresses
  props:
    - name: assignments
      description: |
        The list of assignments to make. You must have read_write access to all IPs being assigned and all Linodes being assigned to in order for the assignments to succeed.
      value:
        - address: "{{ address }}"
          linode_id: {{ linode_id }}
    - name: region
      value: "{{ region }}"
      description: |
        The ID of the Region in which these assignments are to take place. All IPs and Linodes must exist in this Region.
    - name: ips
      value:
        - "{{ ips }}"
      description: |
        A list of secondary Linode IPs to share with the primary Linode.
        - Can include both IPv4 addresses and IPv6 ranges (omit /56 and /64 prefix lengths)
        - Can include both private and public IPv4 addresses.
        - You must have access to all of these addresses and they must be in the same Region as the primary Linode.
        - Enter an empty array to remove all shared IP addresses.
    - name: linode_id
      value: {{ linode_id }}
      description: |
        The ID of the primary Linode that the addresses will be shared with.
`}</CodeBlock>

</TabItem>
</Tabs>
