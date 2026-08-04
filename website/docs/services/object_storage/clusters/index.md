--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
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

Creates, updates, deletes, gets or lists a <code>clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.object_storage.clusters" /></td></tr>
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

The requested Cluster.

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
    <td><code>string</code></td>
    <td>The unique ID for this cluster. (example: us-east-1)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The base URL for this cluster, used for connecting with third-party clients. (example: us-east-1.linodeobjects.com)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The region where this cluster is located. (example: us-east)</td>
</tr>
<tr>
    <td><CopyableCode code="static_site_domain" /></td>
    <td><code>string</code></td>
    <td>The base URL for this cluster used when hosting static sites. (example: website-us-east-1.linodeobjects.com)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>This cluster's status. (available, unavailable) (example: available)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated list of available clusters.

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
    <td><code>string</code></td>
    <td>The unique ID for this cluster. (example: us-east-1)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The base URL for this cluster, used for connecting with third-party clients. (example: us-east-1.linodeobjects.com)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The region where this cluster is located. (example: us-east)</td>
</tr>
<tr>
    <td><CopyableCode code="static_site_domain" /></td>
    <td><code>string</code></td>
    <td>The base URL for this cluster used when hosting static sites. (example: website-us-east-1.linodeobjects.com)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>This cluster's status. (available, unavailable) (example: available)</td>
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
    <td><a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>__Deprecated__ Returns a single Object Storage cluster.<br /><br />&gt; 📘<br />&gt;<br />&gt; This displays deprecated `clusterId` values that represent regions used with older versions of the API. It's maintained for backward compatibility. Run [Get a region](https://techdocs.akamai.com/linode-api/reference/get-region) instead.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>__Deprecated__ Returns a paginated list of available Object Storage legacy clusters.<br /><br />&gt; 📘<br />&gt;<br />&gt; This displays deprecated `clusterId` values that represent regions used with older versions of the API. It's maintained for backward compatibility. Run [Get a region](https://techdocs.akamai.com/linode-api/reference/get-region) instead.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)</td>
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
<tr id="parameter-clusterId">
    <td><CopyableCode code="clusterId" /></td>
    <td><code>string</code></td>
    <td>Identifies a cluster where this bucket lives. For backward compatibility with Object Storage in this API.  &gt; 📘 &gt; &gt; You can use the applicable `regionId`, for example `us-west`, in place of the `clusterId`, for example, `us-west-1`. Run [List regions](https://techdocs.akamai.com/linode-api/reference/get-regions) to see all regions.</td>
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

__Deprecated__ Returns a single Object Storage cluster.<br /><br />&gt; 📘<br />&gt;<br />&gt; This displays deprecated `clusterId` values that represent regions used with older versions of the API. It's maintained for backward compatibility. Run [Get a region](https://techdocs.akamai.com/linode-api/reference/get-region) instead.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)

```sql
SELECT
id,
domain,
region,
static_site_domain,
status
FROM linode.object_storage.clusters
WHERE clusterId = '{{ clusterId }}' -- required
;
```
</TabItem>
<TabItem value="list">

__Deprecated__ Returns a paginated list of available Object Storage legacy clusters.<br /><br />&gt; 📘<br />&gt;<br />&gt; This displays deprecated `clusterId` values that represent regions used with older versions of the API. It's maintained for backward compatibility. Run [Get a region](https://techdocs.akamai.com/linode-api/reference/get-region) instead.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)

```sql
SELECT
id,
domain,
region,
static_site_domain,
status
FROM linode.object_storage.clusters
;
```
</TabItem>
</Tabs>
