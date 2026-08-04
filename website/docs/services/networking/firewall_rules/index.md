--- 
title: firewall_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_rules
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

Creates, updates, deletes, gets or lists a <code>firewall_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="firewall_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.networking.firewall_rules" /></td></tr>
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

The requested Firewall Rules.

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
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The fingerprint is a 32-bit hash. It represents the firewall rules as an 8 character hex string. You can use `fingerprint` to compare rule versions. (example: 997dd135)</td>
</tr>
<tr>
    <td><CopyableCode code="inbound" /></td>
    <td><code>array</code></td>
    <td>The inbound rules for the firewall, as a JSON array. (x-linode-cli-format: json)</td>
</tr>
<tr>
    <td><CopyableCode code="inbound_policy" /></td>
    <td><code>string</code></td>
    <td>The default behavior for inbound traffic. This setting can be overridden by [updating](https://techdocs.akamai.com/linode-api/reference/put-firewall-rules) the `inbound.action` property of the Firewall Rule. (ACCEPT, DROP) (example: DROP)</td>
</tr>
<tr>
    <td><CopyableCode code="outbound" /></td>
    <td><code>array</code></td>
    <td>The outbound rules for the firewall, as a JSON array. (x-linode-cli-format: json)</td>
</tr>
<tr>
    <td><CopyableCode code="outbound_policy" /></td>
    <td><code>string</code></td>
    <td>The default behavior for outbound traffic. This setting can be overridden by [updating](https://techdocs.akamai.com/linode-api/reference/put-firewall-rules) the `outbound.action` property of the Firewall Rule. (ACCEPT, DROP) (example: ACCEPT)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ The firewall's rule version. The first version is `1`. The version number is incremented when the firewall's rules change.</td>
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
    <td>Returns the inbound and outbound Rules for a Firewall.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-firewallId"><code>firewallId</code></a></td>
    <td></td>
    <td>Updates the inbound and outbound Rules for a Firewall.<br /><br />- Assigned Linodes must not have any ongoing live migrations.<br /><br />- __Note__. This operation replaces all of a Firewall's `inbound` and `outbound` rulesets with the values specified in your request.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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

Returns the inbound and outbound Rules for a Firewall.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
fingerprint,
inbound,
inbound_policy,
outbound,
outbound_policy,
version
FROM linode.networking.firewall_rules
WHERE firewallId = '{{ firewallId }}' -- required
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

Updates the inbound and outbound Rules for a Firewall.<br /><br />- Assigned Linodes must not have any ongoing live migrations.<br /><br />- __Note__. This operation replaces all of a Firewall's `inbound` and `outbound` rulesets with the values specified in your request.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.networking.firewall_rules
SET 
inbound = '{{ inbound }}',
outbound = '{{ outbound }}',
inbound_policy = '{{ inbound_policy }}',
outbound_policy = '{{ outbound_policy }}'
WHERE 
firewallId = '{{ firewallId }}' --required
RETURNING
fingerprint,
inbound,
inbound_policy,
outbound,
outbound_policy,
version;
```
</TabItem>
</Tabs>
