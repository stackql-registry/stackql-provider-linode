--- 
title: policies
hide_title: false
hide_table_of_contents: false
keywords:
  - policies
  - maintenance
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

Creates, updates, deletes, gets or lists a <code>policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.maintenance.policies" /></td></tr>
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

Returns a paginated list of maintenance policy objects.

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A brief explanation of the maintenance policy's intended behavior. (example: Migrates the Linode to a new host while it remains fully operational. Recommended for maximizing availability.)</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this policy is the default one applied when creating a Linode.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>The display name for the maintenance policy. (example: Migrate)</td>
</tr>
<tr>
    <td><CopyableCode code="notification_period_sec" /></td>
    <td><code>integer</code></td>
    <td>__Filterable__ Number of seconds before the maintenance event triggers. A value of 0 means no prior notification.</td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the maintenance policy. System policies are prefixed with `linode/`. (example: linode/migrate)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of policy. (migrate, power_off_on) (example: migrate)</td>
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
    <td>__Beta__ List all available maintenance policies that can be applied to your Linodes.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation is beta and only works when using the beta API. Call the URL with the `apiVersion` path parameter set to `v4beta`.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)</td>
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

__Beta__ List all available maintenance policies that can be applied to your Linodes.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation is beta and only works when using the beta API. Call the URL with the `apiVersion` path parameter set to `v4beta`.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)

```sql
SELECT
description,
is_default,
label,
notification_period_sec,
slug,
type
FROM linode.maintenance.policies
;
```
</TabItem>
</Tabs>
