--- 
title: maintenances
hide_title: false
hide_table_of_contents: false
keywords:
  - maintenances
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

Creates, updates, deletes, gets or lists a <code>maintenances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="maintenances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.account.maintenances" /></td></tr>
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

Returns a paginated list of Maintenance objects.

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
    <td><CopyableCode code="complete_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Beta__, __Filterable__ The time the maintenance completed. This field is [filterable](https://techdocs.akamai.com/linode-api/reference/filtering-and-sorting) based on these parameters:  - A single ISO 8601 timestamp (`yyyy-mm-ddThh:mm:ss`), which returns only matches for that value.  - Pairs of operator string keys (`+or`, `+gt`, `+gte`, `+lt`, `+lte`, or `+neq`) and single ISO 8601 timestamp. The `+or` operator accepts an array of values that can consist of single date-time strings or dictionaries of inequality operator pairs. (example: 2020-07-09T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>__Beta__ Differentiates between scheduled and emergency maintenance. (Scheduled Maintenance, Emergency Maintenance) (example: Scheduled Maintenance)</td>
</tr>
<tr>
    <td><CopyableCode code="entity" /></td>
    <td><code>object</code></td>
    <td>The entity affected by the maintenance.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_policy_set" /></td>
    <td><code>string</code></td>
    <td>__Beta__, __Filterable__ The maintenance policy configured by the user. (example: linode/migrate)</td>
</tr>
<tr>
    <td><CopyableCode code="not_before" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Beta__, __Filterable__ The earliest time when the maintenance can start. This field is [filterable](https://techdocs.akamai.com/linode-api/reference/filtering-and-sorting) based on these parameters:  - A single ISO 8601 timestamp (`yyyy-mm-ddThh:mm:ss`), which returns only matches for that value.  - Pairs of operator string keys (`+or`, `+gt`, `+gte`, `+lt`, `+lte`, or `+neq`) and single ISO 8601 timestamp. The `+or` operator accepts an array of values that can consist of single date-time strings or dictionaries of inequality operator pairs. (example: 2020-07-09T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="reason" /></td>
    <td><code>string</code></td>
    <td>The reason maintenance is being performed. (example: This maintenance will allow us to update the BIOS on the host's motherboard.)</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>__Beta__ The origin of the maintenance. A `platform` source indicates that the maintenance was initiated by Akamai. A `user` source indicates that the maintenance was initiated by the user. (platform, user) (example: platform)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Beta__, __Filterable__ The time the maintenance started. This field is [filterable](https://techdocs.akamai.com/linode-api/reference/filtering-and-sorting) based on these parameters:  - A single ISO 8601 timestamp (`yyyy-mm-ddThh:mm:ss`), which returns only matches for that value.  - Pairs of operator string keys (`+or`, `+gt`, `+gte`, `+lt`, `+lte`, or `+neq`) and single ISO 8601 timestamp. The `+or` operator accepts an array of values that can consist of single date-time strings or dictionaries of inequality operator pairs. (example: 2020-07-09T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The maintenance status. Maintenance progress follows the sequence `pending`, `scheduled`, `started`, and `completed`. A `scheduled` status is unique to Linodes that require a reboot for [QEMU maintenance](https://techdocs.akamai.com/linode-api/reference/reboot-your-linodes-for-qemu-maintenance). (pending, scheduled, started, in-progress, completed, canceled) (example: started)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The type of maintenance. (reboot, cold_migration, live_migration, migrate, power_off_on) (example: reboot)</td>
</tr>
<tr>
    <td><CopyableCode code="when" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__ The start time for the maintenance. This field is [filterable](https://techdocs.akamai.com/linode-api/reference/filtering-and-sorting) based on these parameters:  - A single ISO 8601 timestamp (yyyy-mm-ddThh:mm:ss), which returns only matches for that value.  - Pairs of operator string keys (`+or`, `+gt`, `+gte`, `+lt`, `+lte`, or `+neq`) and single ISO 8601 timestamp. The `+or` operator accepts an array of values that can consist of single date-time strings or dictionaries of inequality operator pairs. (example: 2020-07-09T00:01:01)</td>
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
    <td>Returns maintenance information for any entity your user has permissions to view. If a maintenance object has been canceled, it's not returned.<br /><br />&gt; 📘<br />&gt;<br />&gt; Currently, only Linodes are included as entities for viewing.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)</td>
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

Returns maintenance information for any entity your user has permissions to view. If a maintenance object has been canceled, it's not returned.<br /><br />&gt; 📘<br />&gt;<br />&gt; Currently, only Linodes are included as entities for viewing.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)

```sql
SELECT
complete_time,
description,
entity,
maintenance_policy_set,
not_before,
reason,
source,
start_time,
status,
type,
when
FROM linode.account.maintenances
;
```
</TabItem>
</Tabs>
