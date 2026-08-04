--- 
title: alert_channels
hide_title: false
hide_table_of_contents: false
keywords:
  - alert_channels
  - monitor
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

Creates, updates, deletes, gets or lists an <code>alert_channels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="alert_channels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.monitor.alert_channels" /></td></tr>
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

Returns a paginated list of alerts channels.

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
    <td>__Filterable__ The unique identifier for the alert channel.</td>
</tr>
<tr>
    <td><CopyableCode code="alerts" /></td>
    <td><code>array</code></td>
    <td>Details about the alerts where you've applied this alert channel.</td>
</tr>
<tr>
    <td><CopyableCode code="channel_type" /></td>
    <td><code>string</code></td>
    <td>The type of notification used with the alert channel. Currently, only `email` is supported. (email) (example: email)</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>The configuration of the alert channel.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the alert channel was created. (example: 2025-03-20 01:41:09)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>For a `user` alert channel, this is the user on your account that created it. For a `system` alert channel, this value is returned as `system`.  &gt; 📘 &gt; &gt; Currently, only `system` alert channels are supported for use. This value will always return a value of `system`. (example: system)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The name of the alert channel, used to display it in Akamai Cloud Manager. (example: Read-Write Channel)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of alert channel. This can be either `system` for a channel provided by Akamai, or `user` for one you've created.  &gt; 📘 &gt; &gt; Currently, only `system` alert channels are supported for use. This value will always return a value of `system`. (system, user) (example: system)</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the alert channel was last updated. This is the same as `created` if the channel hasn't been updated. (example: 2025-03-20 01:41:09)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>For a `user` alert channel, this is the user on your account that last updated it. For a `system` alert channel, this is returned as `system`. If it hasn't been updated, this value is the same as `created_by`.  &gt; 📘 &gt; &gt; Currently, only `system` alert channels are supported for use. This value will always return a value of `system`. (example: system)</td>
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
    <td>__Beta__ Returns all of the monitoring alert channels available to your user.<br /><br />&gt; 📘<br />&gt;<br />&gt; - This operation is beta. Call it using the `v4beta` path in its URL.<br />&gt;<br />&gt; - [Filtering](https://techdocs.akamai.com/linode-api/reference/filtering-and-sorting) is supported for specific objects, labeled as **Filterable**. However, only the `+and` and `+or` operators are supported, and you can't nest filter operators. __OAuth scopes__.<br /><br />    ```<br />    monitor:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)<br /><br />-<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)</td>
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

__Beta__ Returns all of the monitoring alert channels available to your user.<br /><br />&gt; 📘<br />&gt;<br />&gt; - This operation is beta. Call it using the `v4beta` path in its URL.<br />&gt;<br />&gt; - [Filtering](https://techdocs.akamai.com/linode-api/reference/filtering-and-sorting) is supported for specific objects, labeled as **Filterable**. However, only the `+and` and `+or` operators are supported, and you can't nest filter operators. __OAuth scopes__.<br /><br />    ```<br />    monitor:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)<br /><br />-<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)

```sql
SELECT
id,
alerts,
channel_type,
content,
created,
created_by,
label,
type,
updated,
updated_by
FROM linode.monitor.alert_channels
;
```
</TabItem>
</Tabs>
