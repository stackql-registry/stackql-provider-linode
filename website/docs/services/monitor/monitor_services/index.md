--- 
title: monitor_services
hide_title: false
hide_table_of_contents: false
keywords:
  - monitor_services
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

Creates, updates, deletes, gets or lists a <code>monitor_services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitor_services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.monitor.monitor_services" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_by_service_type"
    values={[
        { label: 'list_by_service_type', value: 'list_by_service_type' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list_by_service_type">

Returns a paginated list of metric definitions.

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
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>The full name of Akamai Cloud Computing service. This is used for display purposes in Akamai Cloud Manager. (example: Databases)</td>
</tr>
<tr>
    <td><CopyableCode code="service_type" /></td>
    <td><code>string</code></td>
    <td>The identifier for the Akamai Cloud Computing service. Use this value to call out the service in other Monitor operations in the API. (example: dbaas)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Returns a paginated list of metric definitions.

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
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>The full name of Akamai Cloud Computing service. This is used for display purposes in Akamai Cloud Manager. (example: Databases)</td>
</tr>
<tr>
    <td><CopyableCode code="service_type" /></td>
    <td><code>string</code></td>
    <td>The identifier for the Akamai Cloud Computing service. Use this value to call out the service in other Monitor operations in the API. (example: dbaas)</td>
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
    <td><a href="#list_by_service_type"><CopyableCode code="list_by_service_type" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-serviceType"><code>serviceType</code></a></td>
    <td></td>
    <td>__Beta__ Returns details for a specific service type.<br /><br />&gt; 📘<br />&gt;<br />&gt; - This operation is beta. Call it using the `v4beta` path in its URL.<br />&gt;<br />&gt; - For more details on the metrics available for each service, see the [Metrics reference](https://techdocs.akamai.com/cloud-computing/docs/metrics-dimensions-parameters).<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>__Beta__ Returns a paginated list of all current supported service types.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation is beta. Call it using the `v4beta` path in its URL.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-serviceType">
    <td><CopyableCode code="serviceType" /></td>
    <td><code>string</code></td>
    <td>The Akamai Cloud Computing service being monitored. To see your currently supported services, run the [List supported service types](https://techdocs.akamai.com/linode-api/reference/get-monitor-services) operation and store the appropriate `service_type`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_by_service_type"
    values={[
        { label: 'list_by_service_type', value: 'list_by_service_type' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list_by_service_type">

__Beta__ Returns details for a specific service type.<br /><br />&gt; 📘<br />&gt;<br />&gt; - This operation is beta. Call it using the `v4beta` path in its URL.<br />&gt;<br />&gt; - For more details on the metrics available for each service, see the [Metrics reference](https://techdocs.akamai.com/cloud-computing/docs/metrics-dimensions-parameters).<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
label,
service_type
FROM linode.monitor.monitor_services
WHERE serviceType = '{{ serviceType }}' -- required
;
```
</TabItem>
<TabItem value="list">

__Beta__ Returns a paginated list of all current supported service types.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation is beta. Call it using the `v4beta` path in its URL.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
label,
service_type
FROM linode.monitor.monitor_services
;
```
</TabItem>
</Tabs>
