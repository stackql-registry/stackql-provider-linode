--- 
title: firewall_rule_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_rule_versions
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

Creates, updates, deletes, gets or lists a <code>firewall_rule_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="firewall_rule_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.networking.firewall_rule_versions" /></td></tr>
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

Returns a rule version.

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

Returns information for all rule versions for this firewall.

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
    <td><a href="#parameter-firewallId"><code>firewallId</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td></td>
    <td>Get a specific firewall rule version for an `enabled` or `disabled` firewall.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-firewallId"><code>firewallId</code></a></td>
    <td></td>
    <td>Lists the current and historical rules of the firewall (that is not deleted), using `version`. Whenever rules update, the `version` increments from `1`.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The firewall rule version to view.</td>
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

Get a specific firewall rule version for an `enabled` or `disabled` firewall.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

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
FROM linode.networking.firewall_rule_versions
WHERE firewallId = '{{ firewallId }}' -- required
AND version = '{{ version }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the current and historical rules of the firewall (that is not deleted), using `version`. Whenever rules update, the `version` increments from `1`.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

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
FROM linode.networking.firewall_rule_versions
WHERE firewallId = '{{ firewallId }}' -- required
;
```
</TabItem>
</Tabs>
