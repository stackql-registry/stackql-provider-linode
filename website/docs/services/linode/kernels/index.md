--- 
title: kernels
hide_title: false
hide_table_of_contents: false
keywords:
  - kernels
  - linode
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

Creates, updates, deletes, gets or lists a <code>kernels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="kernels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.linode.kernels" /></td></tr>
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

A single Kernel object.

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
    <td>__Read-only__ The unique ID of this Kernel. (example: linode/latest-64bit)</td>
</tr>
<tr>
    <td><CopyableCode code="architecture" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ The architecture of this Kernel. (x86_64, i386) (example: x86_64)</td>
</tr>
<tr>
    <td><CopyableCode code="built" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ The date on which this Kernel was built. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="deprecated" /></td>
    <td><code>boolean</code></td>
    <td>__Filterable__, __Read-only__ If this Kernel is marked as deprecated, this field has a value of `true`; otherwise, this field is `false`.</td>
</tr>
<tr>
    <td><CopyableCode code="kvm" /></td>
    <td><code>boolean</code></td>
    <td>__Filterable__, __Read-only__ If this Kernel is suitable for KVM Linodes.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ The friendly name of this Kernel. (example: Latest 64 bit (4.15.7-x86_64-linode102))</td>
</tr>
<tr>
    <td><CopyableCode code="pvops" /></td>
    <td><code>boolean</code></td>
    <td>__Filterable__, __Read-only__ If this Kernel is suitable for paravirtualized operations.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ Linux Kernel version. (example: 4.15.7)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Returns an array of Kernels.

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
    <td>__Read-only__ The unique ID of this Kernel. (example: linode/latest-64bit)</td>
</tr>
<tr>
    <td><CopyableCode code="architecture" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ The architecture of this Kernel. (x86_64, i386) (example: x86_64)</td>
</tr>
<tr>
    <td><CopyableCode code="built" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ The date on which this Kernel was built. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="deprecated" /></td>
    <td><code>boolean</code></td>
    <td>__Filterable__, __Read-only__ If this Kernel is marked as deprecated, this field has a value of `true`; otherwise, this field is `false`.</td>
</tr>
<tr>
    <td><CopyableCode code="kvm" /></td>
    <td><code>boolean</code></td>
    <td>__Filterable__, __Read-only__ If this Kernel is suitable for KVM Linodes.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ The friendly name of this Kernel. (example: Latest 64 bit (4.15.7-x86_64-linode102))</td>
</tr>
<tr>
    <td><CopyableCode code="pvops" /></td>
    <td><code>boolean</code></td>
    <td>__Filterable__, __Read-only__ If this Kernel is suitable for paravirtualized operations.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ Linux Kernel version. (example: 4.15.7)</td>
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
    <td><a href="#parameter-kernelId"><code>kernelId</code></a></td>
    <td></td>
    <td>Returns information about a single Kernel.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Lists available Kernels.<br /><br />Due to the extensive list of available kernels, please keep [pagination](https://techdocs.akamai.com/linode-api/reference/pagination) controls in mind when managing responses to this operation.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)</td>
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
<tr id="parameter-kernelId">
    <td><CopyableCode code="kernelId" /></td>
    <td><code>string</code></td>
    <td>ID of the Kernel to look up. (example: &#123;&#123;kernelId&#125;&#125;)</td>
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

Returns information about a single Kernel.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)

```sql
SELECT
id,
architecture,
built,
deprecated,
kvm,
label,
pvops,
version
FROM linode.linode.kernels
WHERE kernelId = '{{ kernelId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists available Kernels.<br /><br />Due to the extensive list of available kernels, please keep [pagination](https://techdocs.akamai.com/linode-api/reference/pagination) controls in mind when managing responses to this operation.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)

```sql
SELECT
id,
architecture,
built,
deprecated,
kvm,
label,
pvops,
version
FROM linode.linode.kernels
WHERE page = '{{ page }}'
AND page_size = '{{ page_size }}'
;
```
</TabItem>
</Tabs>
