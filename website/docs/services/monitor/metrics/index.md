--- 
title: metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - metrics
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

Creates, updates, deletes, gets or lists a <code>metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="metrics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.monitor.metrics" /></td></tr>
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

Returns a paginated list of metric information.

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
    <td><CopyableCode code="available_aggregate_functions" /></td>
    <td><code>array</code></td>
    <td>Available aggregate functions for the metric. (example: increase)</td>
</tr>
<tr>
    <td><CopyableCode code="dimensions" /></td>
    <td><code>array</code></td>
    <td>Dimensions for the metric.</td>
</tr>
<tr>
    <td><CopyableCode code="is_alertable" /></td>
    <td><code>boolean</code></td>
    <td>Whether the metric is alertable.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>The name of the metric. This is used for display purposes in Akamai Cloud Manager. (example: CPU Usage)</td>
</tr>
<tr>
    <td><CopyableCode code="metric" /></td>
    <td><code>string</code></td>
    <td>The identifier for the metric. This is how the metric is called out in other Monitor operations in the API. (example: cpu_usage)</td>
</tr>
<tr>
    <td><CopyableCode code="metric_type" /></td>
    <td><code>string</code></td>
    <td>The type of metric. A value of `counter` represents variable values and a set target for the count. A `histogram` represents the frequency distribution of data points across a continuous range of numerical values. A `gauge` represents the performance against a target goal, and `summary` presents and summarizes data from multiple sources. (counter, histogram, gauge, summary) (example: histogram)</td>
</tr>
<tr>
    <td><CopyableCode code="scrape_interval" /></td>
    <td><code>string</code></td>
    <td>How frequently a metric is scraped to gather data, using `s` for seconds, `m` for minutes, or `h` for hours. Set to `60s`, the metric would be scraped every 60 seconds. Set to `2m`, the scrape occurs every two minutes. (example: 60s)</td>
</tr>
<tr>
    <td><CopyableCode code="unit" /></td>
    <td><code>string</code></td>
    <td>The unit of measurement for the metric. (%, Bytes, sec, bps, msec, Bps, KB, MB, GB, rate, percentile, ratio, OPS, IOPS) (example: Bps)</td>
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
    <td><a href="#parameter-serviceType"><code>serviceType</code></a></td>
    <td><a href="#parameter-X-Filter"><code>X-Filter</code></a></td>
    <td>__Beta__ Returns metrics for a specific service type.<br /><br />&gt; 📘<br />&gt;<br />&gt; - This operation is beta. Call it using the `v4beta` path in its URL.<br />&gt;<br />&gt; - For more details on the metrics available for each service, see the [Metrics reference](https://techdocs.akamai.com/cloud-computing/docs/metrics-dimensions-parameters).<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#read"><CopyableCode code="read" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceType"><code>serviceType</code></a>, <a href="#parameter-relative_time_duration"><code>relative_time_duration</code></a>, <a href="#parameter-metrics"><code>metrics</code></a>, <a href="#parameter-entity_ids"><code>entity_ids</code></a>, <a href="#parameter-absolute_time_duration"><code>absolute_time_duration</code></a></td>
    <td></td>
    <td>__Beta__ Returns metrics information for the individual entities within a specific service type. Thi operation also requires an `authorization: Bearer` [token](https://techdocs.akamai.com/linode-api/reference/post-get-token) you've created for this `serviceType`.<br /><br />&gt; 📘<br />&gt;<br />&gt; - This operation uses a different URL and version from standard Linode API operations. Verify you're using the URL with the `monitor-api.linode.com` hostname and include `v2beta` as the version in the URL.<br />&gt;<br />&gt; - For more details on the metrics available for each service, see the [Metrics reference](https://techdocs.akamai.com/cloud-computing/docs/metrics-dimensions-parameters).</td>
</tr>
<tr>
    <td><a href="#create_token"><CopyableCode code="create_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceType"><code>serviceType</code></a>, <a href="#parameter-entity_ids"><code>entity_ids</code></a></td>
    <td></td>
    <td>__Beta__ Returns a token that authenticates requests for the entities within a specific service type. The token has a lifetime of six hours after you create it. For an example of the token generation process, see [Authenticate Monitor API operations](https://techdocs.akamai.com/linode-api/reference/get-started#authenticate-monitor-api-operations).<br /><br />&gt; 📘<br />&gt;<br />&gt; - This operation is beta. Call it using the `v4beta` path in its URL.<br />&gt;<br />&gt; - To see your currently supported services, run the [List supported service types](https://techdocs.akamai.com/linode-api/reference/get-monitor-services) operation.<br />&gt;<br />&gt; - You also need `read_only` access to the [scope](https://techdocs.akamai.com/linode-api/reference/get-started#oauth-reference) for the specified `serviceType`.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-X-Filter">
    <td><CopyableCode code="X-Filter" /></td>
    <td><code>object</code></td>
    <td>Specifies a JSON object to filter down the results. See [Filtering and sorting](filtering-and-sorting) for details. (example: &#123;&#123;X-Filter&#125;&#125;)</td>
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

__Beta__ Returns metrics for a specific service type.<br /><br />&gt; 📘<br />&gt;<br />&gt; - This operation is beta. Call it using the `v4beta` path in its URL.<br />&gt;<br />&gt; - For more details on the metrics available for each service, see the [Metrics reference](https://techdocs.akamai.com/cloud-computing/docs/metrics-dimensions-parameters).<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
available_aggregate_functions,
dimensions,
is_alertable,
label,
metric,
metric_type,
scrape_interval,
unit
FROM linode.monitor.metrics
WHERE serviceType = '{{ serviceType }}' -- required
AND X-Filter = '{{ X-Filter }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="read"
    values={[
        { label: 'read', value: 'read' },
        { label: 'create_token', value: 'create_token' }
    ]}
>
<TabItem value="read">

__Beta__ Returns metrics information for the individual entities within a specific service type. Thi operation also requires an `authorization: Bearer` [token](https://techdocs.akamai.com/linode-api/reference/post-get-token) you've created for this `serviceType`.<br /><br />&gt; 📘<br />&gt;<br />&gt; - This operation uses a different URL and version from standard Linode API operations. Verify you're using the URL with the `monitor-api.linode.com` hostname and include `v2beta` as the version in the URL.<br />&gt;<br />&gt; - For more details on the metrics available for each service, see the [Metrics reference](https://techdocs.akamai.com/cloud-computing/docs/metrics-dimensions-parameters).

```sql
EXEC linode.monitor.metrics.read 
@serviceType='{{ serviceType }}' --required 
@@json=
'{
"entity_ids": "{{ entity_ids }}", 
"filters": "{{ filters }}", 
"group_by": "{{ group_by }}", 
"metrics": "{{ metrics }}", 
"time_granularity": "{{ time_granularity }}", 
"relative_time_duration": "{{ relative_time_duration }}", 
"absolute_time_duration": "{{ absolute_time_duration }}"
}'
;
```
</TabItem>
<TabItem value="create_token">

__Beta__ Returns a token that authenticates requests for the entities within a specific service type. The token has a lifetime of six hours after you create it. For an example of the token generation process, see [Authenticate Monitor API operations](https://techdocs.akamai.com/linode-api/reference/get-started#authenticate-monitor-api-operations).<br /><br />&gt; 📘<br />&gt;<br />&gt; - This operation is beta. Call it using the `v4beta` path in its URL.<br />&gt;<br />&gt; - To see your currently supported services, run the [List supported service types](https://techdocs.akamai.com/linode-api/reference/get-monitor-services) operation.<br />&gt;<br />&gt; - You also need `read_only` access to the [scope](https://techdocs.akamai.com/linode-api/reference/get-started#oauth-reference) for the specified `serviceType`.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.monitor.metrics.create_token 
@serviceType='{{ serviceType }}' --required 
@@json=
'{
"entity_ids": "{{ entity_ids }}"
}'
;
```
</TabItem>
</Tabs>
