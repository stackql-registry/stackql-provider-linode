--- 
title: firewalls
hide_title: false
hide_table_of_contents: false
keywords:
  - firewalls
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

Creates, updates, deletes, gets or lists a <code>firewalls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="firewalls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.networking.firewalls" /></td></tr>
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

Returns information about this Firewall.

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
    <td>__Filterable__, __Read-only__ The Firewall's unique ID.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__, __Read-only__ When this Firewall was created. (example: 2025-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="entities" /></td>
    <td><code>array</code></td>
    <td>__Read-only__ The Linodes, NodeBalancers, and Linode interfaces this firewall is assigned to.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The Firewall's label, for display purposes only.  Firewall labels have the following constraints:    - Must begin and end with an alphanumeric character.   - May only consist of alphanumeric characters, hyphens (`-`), underscores (`_`) or periods (`.`).   - Cannot have two hyphens (`--`), underscores (`__`) or periods (`..`) in a row.   - Must be between 3 and 32 characters.   - Must be unique. (example: firewall123, pattern: <code>^&#91;a-zA-Z&#93;((?!--|__|\.\.)&#91;a-zA-Z0-9-_.&#93;)+$</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>object</code></td>
    <td>The inbound and outbound access rules to apply to the Firewall.  A Firewall may have up to 25 rules across its inbound and outbound rulesets.  Multiple rules are applied in order. If two rules conflict, the first rule takes precedence. For example, if the first rule accepts inbound traffic from an address, and the second rule drops inbound traffic the same address, the first rule applies and inbound traffic from that address is accepted.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The status of this Firewall.    - When a Firewall is first created its status is `enabled`.   - Run the [Update a firewall](https://techdocs.akamai.com/linode-api/reference/put-firewall) operation to set a Firewall's status to `enabled` or `disabled`.   - Run the [Delete a firewall](https://techdocs.akamai.com/linode-api/reference/delete-firewall) operation to delete a Firewall. (enabled, disabled, deleted) (example: enabled)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>__Filterable__ An array of tags applied to this object. Tags are for organizational purposes only.</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__, __Read-only__ When this Firewall was last updated. (example: 2025-01-02T00:01:01)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Returns an array of Firewalls.

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
    <td>__Filterable__, __Read-only__ The Firewall's unique ID.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__, __Read-only__ When this Firewall was created. (example: 2025-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="entities" /></td>
    <td><code>array</code></td>
    <td>__Read-only__ The Linodes, NodeBalancers, and Linode interfaces this firewall is assigned to.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The Firewall's label, for display purposes only.  Firewall labels have the following constraints:    - Must begin and end with an alphanumeric character.   - May only consist of alphanumeric characters, hyphens (`-`), underscores (`_`) or periods (`.`).   - Cannot have two hyphens (`--`), underscores (`__`) or periods (`..`) in a row.   - Must be between 3 and 32 characters.   - Must be unique. (example: firewall123, pattern: <code>^&#91;a-zA-Z&#93;((?!--|__|\.\.)&#91;a-zA-Z0-9-_.&#93;)+$</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>object</code></td>
    <td>The inbound and outbound access rules to apply to the Firewall.  A Firewall may have up to 25 rules across its inbound and outbound rulesets.  Multiple rules are applied in order. If two rules conflict, the first rule takes precedence. For example, if the first rule accepts inbound traffic from an address, and the second rule drops inbound traffic the same address, the first rule applies and inbound traffic from that address is accepted.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The status of this Firewall.    - When a Firewall is first created its status is `enabled`.   - Run the [Update a firewall](https://techdocs.akamai.com/linode-api/reference/put-firewall) operation to set a Firewall's status to `enabled` or `disabled`.   - Run the [Delete a firewall](https://techdocs.akamai.com/linode-api/reference/delete-firewall) operation to delete a Firewall. (enabled, disabled, deleted) (example: enabled)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>__Filterable__ An array of tags applied to this object. Tags are for organizational purposes only.</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__, __Read-only__ When this Firewall was last updated. (example: 2025-01-02T00:01:01)</td>
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
    <td><a href="#parameter-firewallId"><code>firewallId</code></a></td>
    <td></td>
    <td>Get a specific Firewall resource by its ID. The Firewall's Devices will not be returned in the response. Instead, run the [List firewall devices](https://techdocs.akamai.com/linode-api/reference/get-firewall-devices) operation to review them.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Returns a paginated list of accessible Firewalls.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-label"><code>label</code></a>, <a href="#parameter-rules"><code>rules</code></a></td>
    <td></td>
    <td>Creates a Firewall to filter network traffic.<br /><br />- Use `rules` to create inbound and outbound access rules. Rule versions increment from `1` whenever the firewall's `rules` change.<br /><br />- Use `devices` to assign a firewall to a service such as a Linode that is using legacy config profiles, a Linode interface or a NodeBalancer. The firewall’s rules are then applied to that service. Requires a `read_write` [user grant](https://techdocs.akamai.com/linode-api/reference/get-user-grants) to the device.<br /><br />  - For Linodes using Linode interfaces, firewalls need to be assigned to `interfaces` and not the `linodes`. Firewall templates are available for both VPC Linode interfaces and public Linode interfaces, and come with pre-configured protection rules.<br /><br />  - For Linodes using legacy configuration profiles, firewalls are applied through the Linode. Public and VPC interfaces are subject to the firewall rules, while VLAN interfaces are not.<br /><br />- Currently, firewalls can be assigned to Linodes with legacy configuration profiles, Linode interfaces, and NodeBalancers.<br /><br />    - The same firewall can be assigned to multiple services at a time.<br /><br />- Use `firewall_id` to assign a firewall when [creating a Linode](https://techdocs.akamai.com/linode-api/reference/post-linode-instance) or when [adding a Linode interface](https://techdocs.akamai.com/linode-api/reference/post-linode-interface).<br /><br />- A service can have one assigned firewall enabled at a time.<br /><br />- Assigned Linodes must not have any ongoing live migrations.<br /><br />- A `firewall_create` event is generated when this operation succeeds.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-firewallId"><code>firewallId</code></a></td>
    <td></td>
    <td>Updates information for a firewall.<br /><br />- Assigned Linodes must not have any ongoing live migrations.<br /><br />- If this operation changes a firewall's status, it generates a corresponding `firewall_enable` or `firewall_disable` event.<br /><br />This operation doesn't affect some parts of a firewall's configuration:<br /><br />- This operation doesn't set a firewall's devices. Instead, run the [Create a firewall device](https://techdocs.akamai.com/linode-api/reference/post-firewall-device) and [Delete a firewall device](https://techdocs.akamai.com/linode-api/reference/delete-firewall-device) operations to assign and remove this firewall from services.<br /><br />- A firewall's rules can't be changed with this operation. Instead, run the [Update firewall rules](https://techdocs.akamai.com/linode-api/reference/put-firewall-rules) operation to update your rules.<br /><br />- Use this operation to set a firewall's status to `enabled` or `disabled`.  But to set it to `deleted`, run the [Delete a firewall](https://techdocs.akamai.com/linode-api/reference/delete-firewall) operation.<br /><br />- An assigned default firewall can't be disabled.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-firewallId"><code>firewallId</code></a></td>
    <td></td>
    <td>Delete a firewall. This also removes all of the firewall's rules from any services the firewall was assigned to.<br /><br />- Assigned Linodes must not have any ongoing live migrations.<br /><br />- A `firewall_delete` event is generated when this operation returns successfully.<br /><br />- An assigned default firewall can't be deleted.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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

Get a specific Firewall resource by its ID. The Firewall's Devices will not be returned in the response. Instead, run the [List firewall devices](https://techdocs.akamai.com/linode-api/reference/get-firewall-devices) operation to review them.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
created,
entities,
label,
rules,
status,
tags,
updated
FROM linode.networking.firewalls
WHERE firewallId = '{{ firewallId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns a paginated list of accessible Firewalls.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
created,
entities,
label,
rules,
status,
tags,
updated
FROM linode.networking.firewalls
WHERE page = '{{ page }}'
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

Creates a Firewall to filter network traffic.<br /><br />- Use `rules` to create inbound and outbound access rules. Rule versions increment from `1` whenever the firewall's `rules` change.<br /><br />- Use `devices` to assign a firewall to a service such as a Linode that is using legacy config profiles, a Linode interface or a NodeBalancer. The firewall’s rules are then applied to that service. Requires a `read_write` [user grant](https://techdocs.akamai.com/linode-api/reference/get-user-grants) to the device.<br /><br />  - For Linodes using Linode interfaces, firewalls need to be assigned to `interfaces` and not the `linodes`. Firewall templates are available for both VPC Linode interfaces and public Linode interfaces, and come with pre-configured protection rules.<br /><br />  - For Linodes using legacy configuration profiles, firewalls are applied through the Linode. Public and VPC interfaces are subject to the firewall rules, while VLAN interfaces are not.<br /><br />- Currently, firewalls can be assigned to Linodes with legacy configuration profiles, Linode interfaces, and NodeBalancers.<br /><br />    - The same firewall can be assigned to multiple services at a time.<br /><br />- Use `firewall_id` to assign a firewall when [creating a Linode](https://techdocs.akamai.com/linode-api/reference/post-linode-instance) or when [adding a Linode interface](https://techdocs.akamai.com/linode-api/reference/post-linode-interface).<br /><br />- A service can have one assigned firewall enabled at a time.<br /><br />- Assigned Linodes must not have any ongoing live migrations.<br /><br />- A `firewall_create` event is generated when this operation succeeds.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.networking.firewalls (
devices,
rules,
label,
tags
)
SELECT 
'{{ devices }}',
'{{ rules }}' /* required */,
'{{ label }}' /* required */,
'{{ tags }}'
RETURNING
id,
created,
entities,
label,
rules,
status,
tags,
updated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: firewalls
  props:
    - name: devices
      description: |
        Devices to create for this firewall. When a device is created, the firewall is assigned to its associated service. Currently, devices can be created for Linodes using legacy configuration profiles, Linode interfaces, and NodeBalancers. Firewall devices can't be created for individual legacy configuration profile interfaces.
        Additional devices can be assigned after Firewall creation by using the [Create a firewall device](https://techdocs.akamai.com/linode-api/reference/post-firewall-device) operation.
      value:
        linode_interfaces:
          - {{ linode_interfaces }}
        linodes:
          - {{ linodes }}
        nodebalancers:
          - {{ nodebalancers }}
    - name: rules
      value:
        inbound: "{{ inbound }}"
        outbound: "{{ outbound }}"
    - name: label
      value: "{{ label }}"
      description: |
        __Filterable__ The Firewall's label, for display purposes only.
        Firewall labels have the following constraints:
        - Must begin and end with an alphanumeric character.
        - May only consist of alphanumeric characters, hyphens (\`-\`), underscores (\`_\`) or periods (\`.\`).
        - Cannot have two hyphens (\`--\`), underscores (\`__\`) or periods (\`..\`) in a row.
        - Must be between 3 and 32 characters.
        - Must be unique.
    - name: tags
      value:
        - "{{ tags }}"
      description: |
        __Filterable__ An array of tags applied to this object. Tags are for organizational purposes only.
`}</CodeBlock>

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

Updates information for a firewall.<br /><br />- Assigned Linodes must not have any ongoing live migrations.<br /><br />- If this operation changes a firewall's status, it generates a corresponding `firewall_enable` or `firewall_disable` event.<br /><br />This operation doesn't affect some parts of a firewall's configuration:<br /><br />- This operation doesn't set a firewall's devices. Instead, run the [Create a firewall device](https://techdocs.akamai.com/linode-api/reference/post-firewall-device) and [Delete a firewall device](https://techdocs.akamai.com/linode-api/reference/delete-firewall-device) operations to assign and remove this firewall from services.<br /><br />- A firewall's rules can't be changed with this operation. Instead, run the [Update firewall rules](https://techdocs.akamai.com/linode-api/reference/put-firewall-rules) operation to update your rules.<br /><br />- Use this operation to set a firewall's status to `enabled` or `disabled`.  But to set it to `deleted`, run the [Delete a firewall](https://techdocs.akamai.com/linode-api/reference/delete-firewall) operation.<br /><br />- An assigned default firewall can't be disabled.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.networking.firewalls
SET 
label = '{{ label }}',
status = '{{ status }}',
tags = '{{ tags }}'
WHERE 
firewallId = '{{ firewallId }}' --required
RETURNING
id,
created,
entities,
label,
rules,
status,
tags,
updated;
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

Delete a firewall. This also removes all of the firewall's rules from any services the firewall was assigned to.<br /><br />- Assigned Linodes must not have any ongoing live migrations.<br /><br />- A `firewall_delete` event is generated when this operation returns successfully.<br /><br />- An assigned default firewall can't be deleted.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.networking.firewalls
WHERE firewallId = '{{ firewallId }}' --required
;
```
</TabItem>
</Tabs>
