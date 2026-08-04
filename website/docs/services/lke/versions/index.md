--- 
title: versions
hide_title: false
hide_table_of_contents: false
keywords:
  - versions
  - lke
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

Creates, updates, deletes, gets or lists a <code>versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.lke.versions" /></td></tr>
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

Returns an LKE Kubernetes version available for deployment to a Kubernetes cluster (any tier).

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
    <td>__Read-only__ A Kubernetes version number available for deployment to a Kubernetes cluster in the format of &lt;major&gt;.&lt;minor&gt;, and the latest supported patch version. (example: 1.31)</td>
</tr>
<tr>
    <td><CopyableCode code="tier" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ An LKE tier. (standard, enterprise) (example: standard)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Returns a list of LKE Kubernetes versions available for deployment to a Kubernetes cluster (any tier).

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
    <td>__Read-only__ A Kubernetes version number available for deployment to a Kubernetes cluster in the format of &lt;major&gt;.&lt;minor&gt;, and the latest supported patch version. (example: 1.31)</td>
</tr>
<tr>
    <td><CopyableCode code="tier" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ An LKE tier. (standard, enterprise) (example: standard)</td>
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
    <td><a href="#parameter-tier"><code>tier</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td></td>
    <td>View an LKE Kubernetes version available for deployment to a Kubernetes cluster (any tier)<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-tier"><code>tier</code></a></td>
    <td></td>
    <td>List LKE Kubernetes versions available for deployment to a Kubernetes cluster (any tier).<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-tier">
    <td><CopyableCode code="tier" /></td>
    <td><code>string</code></td>
    <td>__Enum__ The LKE tier to use.</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The LKE version to view.</td>
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

View an LKE Kubernetes version available for deployment to a Kubernetes cluster (any tier)<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
tier
FROM linode.lke.versions
WHERE tier = '{{ tier }}' -- required
AND version = '{{ version }}' -- required
;
```
</TabItem>
<TabItem value="list">

List LKE Kubernetes versions available for deployment to a Kubernetes cluster (any tier).<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
tier
FROM linode.lke.versions
WHERE tier = '{{ tier }}' -- required
;
```
</TabItem>
</Tabs>
