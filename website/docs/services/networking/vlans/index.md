--- 
title: vlans
hide_title: false
hide_table_of_contents: false
keywords:
  - vlans
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

Creates, updates, deletes, gets or lists a <code>vlans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vlans" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.networking.vlans" /></td></tr>
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

The VLANs available on this Account.

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
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ The date this VLAN was created. (example: 2020-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ The name of this VLAN. (example: vlan-example)</td>
</tr>
<tr>
    <td><CopyableCode code="linodes" /></td>
    <td><code>array</code></td>
    <td>__Read-only__ An array of Linode IDs attached to this VLAN.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ This VLAN's data center region.  &gt; 📘 &gt; &gt; Currently, a VLAN can only be assigned to a Linode within the same data center region. (example: ap-west)</td>
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
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Returns a list of all Virtual Local Area Networks (VLANs) on your account. VLANs provide a mechanism for secure communication between two or more Linodes that are assigned to the same VLAN, and are both within the same Layer 2 broadcast domain.<br /><br />For legacy configuration profile interfaces, you can use the following operations to create, attach, detach, and delete VLANs on a Linode:<br />- [Create a Linode](https://techdocs.akamai.com/linode-api/reference/post-linode-instance)<br />- [Create a config profile](https://techdocs.akamai.com/linode-api/reference/post-add-linode-config)<br />- [Update a config profile](https://techdocs.akamai.com/linode-api/reference/put-linode-config)<br />- [Update](https://techdocs.akamai.com/linode-api/reference/put-linode-config) the active Configuration Profile to remove the VLAN Interface, then [reboot](https://techdocs.akamai.com/linode-api/reference/post-reboot-linode-instance) the Linode.<br />- [Create a config profile](https://techdocs.akamai.com/linode-api/reference/post-add-linode-config) without the VLAN Interface, then [reboot](https://techdocs.akamai.com/linode-api/reference/post-reboot-linode-instance) the Linode into the new Configuration Profile.<br />- [Delete](https://techdocs.akamai.com/linode-api/reference/delete-linode-instance) the Linode.<br /><br />For Linode interfaces, you can use the following operations to create, attach, detach, and delete VLANs on a Linode:<br />- [Create a Linode](https://techdocs.akamai.com/linode-api/reference/post-linode-instance)<br />- [Add a Linode interface](https://techdocs.akamai.com/linode-api/reference/post-linode-interface)<br />- [Update a Linode interface](put-linode-interface-settings)<br />- [Delete a Linode interface](https://techdocs.akamai.com/linode-api/reference/delete-linode-interface) from a Linode. <br /><br />&gt; 📘<br />&gt;<br />&gt; - Only Next Generation Network (NGN) data centers support VLANs. Run the [List regions](https://techdocs.akamai.com/linode-api/reference/get-regions) operation to view the capabilities of data center regions. If a VLAN is attached to your Linode and you attempt to migrate or clone it to a non-NGN data center, the migration or cloning won't initiate. If a Linode cannot be migrated because of an incompatibility, you will be prompted to select a different data center or contact support.<br />&gt;<br />&gt; - See the [VLANs Overview](https://www.linode.com/docs/products/networking/vlans/#technical-specifications) to view additional specifications and limitations.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-label"><code>label</code></a>, <a href="#parameter-regionId"><code>regionId</code></a></td>
    <td></td>
    <td>This operation deletes a legacy configuration profile VLAN interface. To delete a Linode interface VLAN, use the [Delete a Linode interface](https://techdocs.akamai.com/linode-api/reference/delete-linode-interface) operation.<br /><br />You can't delete a VLAN if it's still attached to a Linode. There are a few ways to detach it:<br />- [Update](https://techdocs.akamai.com/linode-api/reference/put-linode-config) the active configuration profile to remove the VLAN interface, then [reboot](https://techdocs.akamai.com/linode-api/reference/post-reboot-linode-instance) the Linode.<br />- [Create a config profile](https://techdocs.akamai.com/linode-api/reference/post-add-linode-config) without the VLAN interface, then [reboot](https://techdocs.akamai.com/linode-api/reference/post-reboot-linode-instance) the Linode into the new configuration profile.<br />- [Delete](https://techdocs.akamai.com/linode-api/reference/delete-linode-instance) the Linode.<br /><br />To run this operation, you need `read_write` grants to Linodes that use the VLAN.<br /><br />A successful request triggers a `vlan_delete` event.<br /><br />&gt; 📘<br />&gt;<br />&gt; VLANs without any attached Linodes are periodically cleaned up by the system.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-label">
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>The label of the VLAN to be deleted.</td>
</tr>
<tr id="parameter-regionId">
    <td><CopyableCode code="regionId" /></td>
    <td><code>string</code></td>
    <td>The VLAN's region.</td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Returns a list of all Virtual Local Area Networks (VLANs) on your account. VLANs provide a mechanism for secure communication between two or more Linodes that are assigned to the same VLAN, and are both within the same Layer 2 broadcast domain.<br /><br />For legacy configuration profile interfaces, you can use the following operations to create, attach, detach, and delete VLANs on a Linode:<br />- [Create a Linode](https://techdocs.akamai.com/linode-api/reference/post-linode-instance)<br />- [Create a config profile](https://techdocs.akamai.com/linode-api/reference/post-add-linode-config)<br />- [Update a config profile](https://techdocs.akamai.com/linode-api/reference/put-linode-config)<br />- [Update](https://techdocs.akamai.com/linode-api/reference/put-linode-config) the active Configuration Profile to remove the VLAN Interface, then [reboot](https://techdocs.akamai.com/linode-api/reference/post-reboot-linode-instance) the Linode.<br />- [Create a config profile](https://techdocs.akamai.com/linode-api/reference/post-add-linode-config) without the VLAN Interface, then [reboot](https://techdocs.akamai.com/linode-api/reference/post-reboot-linode-instance) the Linode into the new Configuration Profile.<br />- [Delete](https://techdocs.akamai.com/linode-api/reference/delete-linode-instance) the Linode.<br /><br />For Linode interfaces, you can use the following operations to create, attach, detach, and delete VLANs on a Linode:<br />- [Create a Linode](https://techdocs.akamai.com/linode-api/reference/post-linode-instance)<br />- [Add a Linode interface](https://techdocs.akamai.com/linode-api/reference/post-linode-interface)<br />- [Update a Linode interface](put-linode-interface-settings)<br />- [Delete a Linode interface](https://techdocs.akamai.com/linode-api/reference/delete-linode-interface) from a Linode. <br /><br />&gt; 📘<br />&gt;<br />&gt; - Only Next Generation Network (NGN) data centers support VLANs. Run the [List regions](https://techdocs.akamai.com/linode-api/reference/get-regions) operation to view the capabilities of data center regions. If a VLAN is attached to your Linode and you attempt to migrate or clone it to a non-NGN data center, the migration or cloning won't initiate. If a Linode cannot be migrated because of an incompatibility, you will be prompted to select a different data center or contact support.<br />&gt;<br />&gt; - See the [VLANs Overview](https://www.linode.com/docs/products/networking/vlans/#technical-specifications) to view additional specifications and limitations.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
created,
label,
linodes,
region
FROM linode.networking.vlans
WHERE page = '{{ page }}'
AND page_size = '{{ page_size }}'
;
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

This operation deletes a legacy configuration profile VLAN interface. To delete a Linode interface VLAN, use the [Delete a Linode interface](https://techdocs.akamai.com/linode-api/reference/delete-linode-interface) operation.<br /><br />You can't delete a VLAN if it's still attached to a Linode. There are a few ways to detach it:<br />- [Update](https://techdocs.akamai.com/linode-api/reference/put-linode-config) the active configuration profile to remove the VLAN interface, then [reboot](https://techdocs.akamai.com/linode-api/reference/post-reboot-linode-instance) the Linode.<br />- [Create a config profile](https://techdocs.akamai.com/linode-api/reference/post-add-linode-config) without the VLAN interface, then [reboot](https://techdocs.akamai.com/linode-api/reference/post-reboot-linode-instance) the Linode into the new configuration profile.<br />- [Delete](https://techdocs.akamai.com/linode-api/reference/delete-linode-instance) the Linode.<br /><br />To run this operation, you need `read_write` grants to Linodes that use the VLAN.<br /><br />A successful request triggers a `vlan_delete` event.<br /><br />&gt; 📘<br />&gt;<br />&gt; VLANs without any attached Linodes are periodically cleaned up by the system.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.networking.vlans
WHERE label = '{{ label }}' --required
AND regionId = '{{ regionId }}' --required
;
```
</TabItem>
</Tabs>
