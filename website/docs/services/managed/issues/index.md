--- 
title: issues
hide_title: false
hide_table_of_contents: false
keywords:
  - issues
  - managed
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

Creates, updates, deletes, gets or lists an <code>issues</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="issues" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.managed.issues" /></td></tr>
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

The requested issue.

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
    <td>__Read-only__ This Issue's unique ID.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this Issue was created. Issues are created in response to issues detected with Managed Services, so this is also when the Issue was detected. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="entity" /></td>
    <td><code>object</code></td>
    <td>__Read-only__ The ticket this Managed Issue opened.</td>
</tr>
<tr>
    <td><CopyableCode code="services" /></td>
    <td><code>array</code></td>
    <td>__Read-only__ An array of Managed Service IDs that were affected by this Issue.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated list of open or ongoing Managed Issues.

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
    <td>__Read-only__ This Issue's unique ID.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this Issue was created. Issues are created in response to issues detected with Managed Services, so this is also when the Issue was detected. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="entity" /></td>
    <td><code>object</code></td>
    <td>__Read-only__ The ticket this Managed Issue opened.</td>
</tr>
<tr>
    <td><CopyableCode code="services" /></td>
    <td><code>array</code></td>
    <td>__Read-only__ An array of Managed Service IDs that were affected by this Issue.</td>
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
    <td><a href="#parameter-issueId"><code>issueId</code></a></td>
    <td></td>
    <td>Returns a single issue affecting one of your service monitors.<br /><br />This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Returns a paginated list of recent and ongoing issues detected on your service monitors.<br /><br />This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-issueId">
    <td><CopyableCode code="issueId" /></td>
    <td><code>string</code></td>
    <td>The Issue to look up.</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td>The page of a collection to return.</td>
</tr>
<tr id="parameter-page_size">
    <td><CopyableCode code="page_size" /></td>
    <td><code>integer</code></td>
    <td>The number of items to return per page.</td>
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

Returns a single issue affecting one of your service monitors.<br /><br />This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
created,
entity,
services
FROM linode.managed.issues
WHERE issueId = '{{ issueId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns a paginated list of recent and ongoing issues detected on your service monitors.<br /><br />This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
created,
entity,
services
FROM linode.managed.issues
WHERE page = '{{ page }}'
AND page_size = '{{ page_size }}'
;
```
</TabItem>
</Tabs>
