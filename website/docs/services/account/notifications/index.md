--- 
title: notifications
hide_title: false
hide_table_of_contents: false
keywords:
  - notifications
  - account
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

Creates, updates, deletes, gets or lists a <code>notifications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notifications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.account.notifications" /></td></tr>
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

Returns a paginated list of notification objects.

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
    <td><CopyableCode code="body" /></td>
    <td><code>string</code></td>
    <td>A full description of this notification, in markdown format. Not all notifications include a `body`. Returned as `null` for an event `type` of `security_reboot_maintenance_scheduled`.</td>
</tr>
<tr>
    <td><CopyableCode code="entity" /></td>
    <td><code>object</code></td>
    <td>Detailed information about the notification. Returned as `null` for an event `type` of `security_reboot_maintenance_scheduled`.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>A short description of this notification. (example: You have an important ticket open!)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>A human-readable description of the notification. (example: You have an important ticket open!)</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>The severity of this notification. This field determines how prominently the notification is displayed and the color of the display text. (minor, major, critical) (example: major)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The type of notification.  &gt; 📘 &gt; &gt; A `security_reboot_maintenance_scheduled` event is a global notice that a Linode needs to be rebooted for QEMU upgrade maintenance. Have a look at [this workflow](https://techdocs.akamai.com/linode-api/reference/reboot-your-linodes-for-qemu-maintenance) for guidance on reboooting your Linodes for this maintenance. (migration_scheduled, migration_imminent, migration_pending, reboot_scheduled, outage, payment_due, ticket_important, ticket_abuse, notice, maintenance, maintenance_scheduled, promotion, security_reboot_maintenance_scheduled, tax_id_verifying) (example: ticket_important)</td>
</tr>
<tr>
    <td><CopyableCode code="until" /></td>
    <td><code>string (date-time)</code></td>
    <td>If this notification has a duration, this is when the event or action will complete. For example, if there's scheduled maintenance for one of our systems, `until` represents the end of the maintenance window. Returned as `null` for an event `type` of `security_reboot_maintenance_scheduled`.</td>
</tr>
<tr>
    <td><CopyableCode code="when" /></td>
    <td><code>string (date-time)</code></td>
    <td>If this notification is for an event in the future, this specifies when the action occurs. For example, if a compute instance needs to migrate in response to a security advisory, this field sets the approximate time the compute instance will be taken offline for migration. Returned as `null` for an event `type` of `security_reboot_maintenance_scheduled`.</td>
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
    <td></td>
    <td>Returns notifications that represent important, often time-sensitive details about your account. You can't interact directly with notifications, and a notification disappears when you've resolved its cause. For example, if you have an important ticket open, you can respond to that ticket to dismiss its notification.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Returns notifications that represent important, often time-sensitive details about your account. You can't interact directly with notifications, and a notification disappears when you've resolved its cause. For example, if you have an important ticket open, you can respond to that ticket to dismiss its notification.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
body,
entity,
label,
message,
severity,
type,
until,
when
FROM linode.account.notifications
;
```
</TabItem>
</Tabs>
