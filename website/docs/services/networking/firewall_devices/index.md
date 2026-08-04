--- 
title: firewall_devices
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_devices
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

Creates, updates, deletes, gets or lists a <code>firewall_devices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="firewall_devices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.networking.firewall_devices" /></td></tr>
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

The requested Firewall Device.

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
    <td>__Filterable__ The device's unique ID.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__, __Read-only__ When this device was created. (example: 2025-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="entity" /></td>
    <td><code>object</code></td>
    <td>The Linode, NodeBalancer, or Linode interface this firewall is assigned to.</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__, __Read-only__ When this device was last updated. (example: 2025-01-02T00:01:01)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated list of Firewall Devices.

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
    <td>__Filterable__ The device's unique ID.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__, __Read-only__ When this device was created. (example: 2025-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="entity" /></td>
    <td><code>object</code></td>
    <td>The Linode, NodeBalancer, or Linode interface this firewall is assigned to.</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__, __Read-only__ When this device was last updated. (example: 2025-01-02T00:01:01)</td>
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
    <td><a href="#parameter-firewallId"><code>firewallId</code></a>, <a href="#parameter-deviceId"><code>deviceId</code></a></td>
    <td></td>
    <td>Returns information for a Firewall Device, which assigns a Firewall to a service (referred to as the Device's `entity`).<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-firewallId"><code>firewallId</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Returns a paginated list of a firewall's devices. A firewall device assigns a firewall to a service (referred to as the device's `entity`).<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-firewallId"><code>firewallId</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Creates a firewall device, which assigns a firewall to a service (referred to as the device's `entity`) and applies the firewall's rules to the device.<br /><br />- Currently, devices with `linode`, `linode_interface`, and `nodebalancer` entity types are accepted.<br />  - The `linode` type is not allowed for Linodes using Linode interfaces.<br />  - The `linode_interface` type is not allowed for legacy config interfaces. For VPC and public legacy config profile interfaces, the firewall is applied through the `linode` device.<br /><br />- Firewalls only apply to inbound TCP traffic to NodeBalancers.<br /><br />- A firewall can be assigned to multiple services at a time.<br /><br />- A service can have one assigned firewall at a time.<br /><br />- Assigned Linodes must not have any ongoing live migrations.<br /><br />- A `firewall_device_add` event is generated when the firewall device is added successfully.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-firewallId"><code>firewallId</code></a>, <a href="#parameter-deviceId"><code>deviceId</code></a></td>
    <td></td>
    <td>Removes a Firewall Device, which removes a Firewall from the service it was assigned to by the Device. This removes all of the Firewall's Rules from the service. If any other Firewalls have been assigned to the service, then those Rules remain in effect.<br /><br />- Assigned Linodes must not have any ongoing live migrations.<br /><br />- A `firewall_device_remove` Event is generated when the Firewall Device is removed successfully.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-deviceId">
    <td><CopyableCode code="deviceId" /></td>
    <td><code>string</code></td>
    <td>ID of the Firewall Device to access.</td>
</tr>
<tr id="parameter-firewallId">
    <td><CopyableCode code="firewallId" /></td>
    <td><code>string</code></td>
    <td>ID of the Firewall to access.</td>
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

Returns information for a Firewall Device, which assigns a Firewall to a service (referred to as the Device's `entity`).<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
created,
entity,
updated
FROM linode.networking.firewall_devices
WHERE firewallId = '{{ firewallId }}' -- required
AND deviceId = '{{ deviceId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns a paginated list of a firewall's devices. A firewall device assigns a firewall to a service (referred to as the device's `entity`).<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
created,
entity,
updated
FROM linode.networking.firewall_devices
WHERE firewallId = '{{ firewallId }}' -- required
AND page = '{{ page }}'
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

Creates a firewall device, which assigns a firewall to a service (referred to as the device's `entity`) and applies the firewall's rules to the device.<br /><br />- Currently, devices with `linode`, `linode_interface`, and `nodebalancer` entity types are accepted.<br />  - The `linode` type is not allowed for Linodes using Linode interfaces.<br />  - The `linode_interface` type is not allowed for legacy config interfaces. For VPC and public legacy config profile interfaces, the firewall is applied through the `linode` device.<br /><br />- Firewalls only apply to inbound TCP traffic to NodeBalancers.<br /><br />- A firewall can be assigned to multiple services at a time.<br /><br />- A service can have one assigned firewall at a time.<br /><br />- Assigned Linodes must not have any ongoing live migrations.<br /><br />- A `firewall_device_add` event is generated when the firewall device is added successfully.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.networking.firewall_devices (
id,
type,
firewallId
)
SELECT 
{{ id }} /* required */,
'{{ type }}' /* required */,
'{{ firewallId }}'
RETURNING
id,
created,
entity,
updated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: firewall_devices
  props:
    - name: firewallId
      value: "{{ firewallId }}"
      description: Required parameter for the firewall_devices resource.
    - name: id
      value: {{ id }}
      description: |
        The entity's ID.
    - name: type
      value: "{{ type }}"
      description: |
        The entity's type.
      valid_values: ['linode', 'nodebalancer', 'linode_interface']
`}</CodeBlock>

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

Removes a Firewall Device, which removes a Firewall from the service it was assigned to by the Device. This removes all of the Firewall's Rules from the service. If any other Firewalls have been assigned to the service, then those Rules remain in effect.<br /><br />- Assigned Linodes must not have any ongoing live migrations.<br /><br />- A `firewall_device_remove` Event is generated when the Firewall Device is removed successfully.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.networking.firewall_devices
WHERE firewallId = '{{ firewallId }}' --required
AND deviceId = '{{ deviceId }}' --required
;
```
</TabItem>
</Tabs>
