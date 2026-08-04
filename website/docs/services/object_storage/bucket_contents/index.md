--- 
title: bucket_contents
hide_title: false
hide_table_of_contents: false
keywords:
  - bucket_contents
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

Creates, updates, deletes, gets or lists a <code>bucket_contents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bucket_contents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.object_storage.bucket_contents" /></td></tr>
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

One page of the requested bucket's contents.

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of this object or prefix. (example: example)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>An MD-5 hash of the object. `null` if this object represents a prefix. (example: 9f254c71e28e033bf9e0e5262e3e72ab)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time this object was last modified. `null` if this object represents a prefix. (example: 2019-01-01T01:23:45)</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The owner of this object, as a UUID. `null` if this object represents a prefix. (example: bfc70ab2-e3d4-42a4-ad55-83921822270c)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>The size of this object, in bytes. `null` if this object represents a prefix.</td>
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
    <td><a href="#parameter-regionId"><code>regionId</code></a>, <a href="#parameter-bucket"><code>bucket</code></a></td>
    <td><a href="#parameter-marker"><code>marker</code></a>, <a href="#parameter-delimiter"><code>delimiter</code></a>, <a href="#parameter-prefix"><code>prefix</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Returns the contents of a bucket. The contents are paginated using a `marker`, that's the name of the last object on the previous page. Objects can also be filtered by `prefix` and `delimiter`. See [Filtering and sorting](https://techdocs.akamai.com/linode-api/reference/filtering-and-sorting) for more information.<br /><br />&gt; 📘<br />&gt;<br />&gt; You can use an outside API, such as the [Ceph Object Gateway S3 API](https://docs.ceph.com/en/latest/radosgw/s3/objectops/#get-object) for more options. __OAuth scopes__.<br /><br />    ```<br />    object_storage:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-bucket">
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td>The bucket name. (example: &#123;&#123;bucket&#125;&#125;)</td>
</tr>
<tr id="parameter-regionId">
    <td><CopyableCode code="regionId" /></td>
    <td><code>string</code></td>
    <td>Identifies a region where this bucket lives.  &gt; 📘 &gt; &gt; You can use a `clusterId` in place of `regionId` in requests for buckets that you created using the legacy version of the API. Run [List clusters](https://techdocs.akamai.com/linode-api/reference/get-object-storage-clusters) to see each cluster `id`.</td>
</tr>
<tr id="parameter-delimiter">
    <td><CopyableCode code="delimiter" /></td>
    <td><code>string</code></td>
    <td>The delimiter for object names; if given, object names will be returned up to the first occurrence of this character. This is most commonly used with the `/` character to allow bucket transversal in a manner similar to a filesystem, however any delimiter may be used. Use in conjunction with `prefix` to see object names past the first occurrence of the delimiter. (example: &#123;&#123;delimiter&#125;&#125;)</td>
</tr>
<tr id="parameter-marker">
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>The "marker" for this request, which can be used to paginate through large buckets. Its value should be the value of the `next_marker` property returned with the last page. Listing bucket contents _does not_ support arbitrary page access. See the `next_marker` property in the responses section for more details. (example: &#123;&#123;marker&#125;&#125;)</td>
</tr>
<tr id="parameter-page_size">
    <td><CopyableCode code="page_size" /></td>
    <td><code>integer</code></td>
    <td>The number of items to return per page.</td>
</tr>
<tr id="parameter-prefix">
    <td><CopyableCode code="prefix" /></td>
    <td><code>string</code></td>
    <td>Filters objects returned to only those whose name start with the given prefix. Commonly used in conjunction with `delimiter` to allow transversal of bucket contents in a manner similar to a filesystem. (example: &#123;&#123;prefix&#125;&#125;)</td>
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

Returns the contents of a bucket. The contents are paginated using a `marker`, that's the name of the last object on the previous page. Objects can also be filtered by `prefix` and `delimiter`. See [Filtering and sorting](https://techdocs.akamai.com/linode-api/reference/filtering-and-sorting) for more information.<br /><br />&gt; 📘<br />&gt;<br />&gt; You can use an outside API, such as the [Ceph Object Gateway S3 API](https://docs.ceph.com/en/latest/radosgw/s3/objectops/#get-object) for more options. __OAuth scopes__.<br /><br />    ```<br />    object_storage:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
name,
etag,
last_modified,
owner,
size
FROM linode.object_storage.bucket_contents
WHERE regionId = '{{ regionId }}' -- required
AND bucket = '{{ bucket }}' -- required
AND marker = '{{ marker }}'
AND delimiter = '{{ delimiter }}'
AND prefix = '{{ prefix }}'
AND page_size = '{{ page_size }}'
;
```
</TabItem>
</Tabs>
