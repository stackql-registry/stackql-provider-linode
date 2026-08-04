--- 
title: quotas
hide_title: false
hide_table_of_contents: false
keywords:
  - quotas
  - object_storage
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

Creates, updates, deletes, gets or lists a <code>quotas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="quotas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.object_storage.quotas" /></td></tr>
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

A single Object Storage-related quota for your account.

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
    <td><CopyableCode code="quota_id" /></td>
    <td><code>string</code></td>
    <td>Identifies the Object Storage-related quota. Formatted as `obj-<quota_type>-<s3_endpoint>`, where `<quota_type>` is the `resource_metric` in use: `buckets`, `objects` or `bytes`. (example: obj-buckets-eu-central-1.linodeobjects.com)</td>
</tr>
<tr>
    <td><CopyableCode code="quota_name" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The name of the Object Storage-related quota. This is how the quota displays in Akamai Cloud Manager. This can be `Number of Buckets`, `Number of Objects`, or `Total Capacity`. (Number of Objects, Number of Buckets, Total Capacity) (example: Number of Buckets)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description for the Object Storage-related quota. (example: Current number of buckets per account, per endpoint)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_type" /></td>
    <td><code>string</code></td>
    <td>The type of `s3_endpoint`. See [Endpoint types](https://techdocs.akamai.com/cloud-computing/docs/object-storage#endpoint-types) for more information. (E0, E1, E2, E3) (example: E1)</td>
</tr>
<tr>
    <td><CopyableCode code="quota_limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum quantity of the `resource_metric` allowed by the quota.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_metric" /></td>
    <td><code>string</code></td>
    <td>The specific Object Storage-based resource for the quota. A quota maximum may apply as follows:  - The Object Storage `bucket` quota for a single `s3_endpoint`  - The `object` quota for a single `s3_endpoint`  - The `byte` count quota for content in a single `s3_endpoint` (bucket, object, byte) (example: bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="s3_endpoint" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The URL for the s3 endpoint where the quota applies. Every `s3_endpoint` exists in a specific Akamai Cloud Computing data center (`region`). Run the [List Object Storage endpoints](https://techdocs.akamai.com/linode-api/reference/get-object-storage-endpoints) operation to see more specifics on this `s3_endpoint`. (example: us-sea-9.linodeobjects.com)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated list of Object Storage-related quotas applied to your account.

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
    <td><CopyableCode code="quota_id" /></td>
    <td><code>string</code></td>
    <td>Identifies the Object Storage-related quota. Formatted as `obj-<quota_type>-<s3_endpoint>`, where `<quota_type>` is the `resource_metric` in use: `buckets`, `objects` or `bytes`. (example: obj-buckets-eu-central-1.linodeobjects.com)</td>
</tr>
<tr>
    <td><CopyableCode code="quota_name" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The name of the Object Storage-related quota. This is how the quota displays in Akamai Cloud Manager. This can be `Number of Buckets`, `Number of Objects`, or `Total Capacity`. (Number of Objects, Number of Buckets, Total Capacity) (example: Number of Buckets)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description for the Object Storage-related quota. (example: Current number of buckets per account, per endpoint)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_type" /></td>
    <td><code>string</code></td>
    <td>The type of `s3_endpoint`. See [Endpoint types](https://techdocs.akamai.com/cloud-computing/docs/object-storage#endpoint-types) for more information. (E0, E1, E2, E3) (example: E1)</td>
</tr>
<tr>
    <td><CopyableCode code="quota_limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum quantity of the `resource_metric` allowed by the quota.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_metric" /></td>
    <td><code>string</code></td>
    <td>The specific Object Storage-based resource for the quota. A quota maximum may apply as follows:  - The Object Storage `bucket` quota for a single `s3_endpoint`  - The `object` quota for a single `s3_endpoint`  - The `byte` count quota for content in a single `s3_endpoint` (bucket, object, byte) (example: bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="s3_endpoint" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The URL for the s3 endpoint where the quota applies. Every `s3_endpoint` exists in a specific Akamai Cloud Computing data center (`region`). Run the [List Object Storage endpoints](https://techdocs.akamai.com/linode-api/reference/get-object-storage-endpoints) operation to see more specifics on this `s3_endpoint`. (example: us-sea-9.linodeobjects.com)</td>
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
    <td><a href="#parameter-objQuotaId"><code>objQuotaId</code></a></td>
    <td></td>
    <td>Returns information about a specific Object Storage-related quota on your account. The operation includes any quota overrides in the response.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Returns the active Object Storage-related quotas applied to your account. For example, you may have a quota maximum for the number of buckets you can have on a single endpoint. The operation includes any quota overrides in the response.<br /><br />&gt; 📘<br />&gt;<br />&gt; You can't combine parameters when [filtering](https://techdocs.akamai.com/linode-api/reference/filtering-and-sorting) with this operation. Only a single filterable parameter can be used.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-objQuotaId">
    <td><CopyableCode code="objQuotaId" /></td>
    <td><code>string</code></td>
    <td>The unique string that identifies the specific Object Storage-related quota to look up. This follows the pattern, `obj-<quota_type>-<s3_endpoint>`, for example, `obj-buckets-eu-central-1.linodeobjects.com`.</td>
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

Returns information about a specific Object Storage-related quota on your account. The operation includes any quota overrides in the response.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
quota_id,
quota_name,
description,
endpoint_type,
quota_limit,
resource_metric,
s3_endpoint
FROM linode.object_storage.quotas
WHERE objQuotaId = '{{ objQuotaId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the active Object Storage-related quotas applied to your account. For example, you may have a quota maximum for the number of buckets you can have on a single endpoint. The operation includes any quota overrides in the response.<br /><br />&gt; 📘<br />&gt;<br />&gt; You can't combine parameters when [filtering](https://techdocs.akamai.com/linode-api/reference/filtering-and-sorting) with this operation. Only a single filterable parameter can be used.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
quota_id,
quota_name,
description,
endpoint_type,
quota_limit,
resource_metric,
s3_endpoint
FROM linode.object_storage.quotas
;
```
</TabItem>
</Tabs>
