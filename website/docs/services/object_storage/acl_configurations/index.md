--- 
title: acl_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - acl_configurations
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

Creates, updates, deletes, gets or lists an <code>acl_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="acl_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.object_storage.acl_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

The Object's canned ACL and policy.

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
    <td><CopyableCode code="acl" /></td>
    <td><code>string</code></td>
    <td>The S3 predefined collection of grantees and permissions set for the bucket, also referred to as a [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl). (private, public-read, authenticated-read, public-read-write, custom) (example: public-read)</td>
</tr>
<tr>
    <td><CopyableCode code="acl_xml" /></td>
    <td><code>string</code></td>
    <td>The full XML of the object's ACL policy. (example: &lt;AccessControlPolicy&gt;...&lt;/AccessControlPolicy&gt;)</td>
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
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-regionId"><code>regionId</code></a>, <a href="#parameter-bucket"><code>bucket</code></a></td>
    <td></td>
    <td>View a specific object's access control list (ACL) settings. ACLs define who can access your buckets and objects and specify the level of access granted to those users.<br /><br />&gt; 📘<br />&gt;<br />&gt; You can use an outside API, such as the [Ceph Object Gateway S3 API](https://docs.ceph.com/en/latest/radosgw/s3/objectops/#get-object-acl) for more options. __OAuth scopes__.<br /><br />    ```<br />    object_storage:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-regionId"><code>regionId</code></a>, <a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-acl"><code>acl</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Update a specific object's access control list (ACL) settings. ACLs define who can access your buckets and objects, and specify the level of access granted to those users.<br /><br />&gt; 📘<br />&gt;<br />&gt; You can use an outside API, such as the [Ceph Object Gateway S3 API](https://docs.ceph.com/en/latest/radosgw/s3/objectops/#set-object-acl) for more options. __OAuth scopes__.<br /><br />    ```<br />    object_storage:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of a specific object to get its access control list (ACL) details. Run the [List Object Storage bucket contents](https://techdocs.akamai.com/linode-api/reference/get-object-storage-bucket-content) operation to access all object names in a bucket. (example: &#123;&#123;name&#125;&#125;)</td>
</tr>
<tr id="parameter-regionId">
    <td><CopyableCode code="regionId" /></td>
    <td><code>string</code></td>
    <td>Identifies a region where this bucket lives.  &gt; 📘 &gt; &gt; You can use a `clusterId` in place of `regionId` in requests for buckets that you created using the legacy version of the API. Run [List clusters](https://techdocs.akamai.com/linode-api/reference/get-object-storage-clusters) to see each cluster `id`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

View a specific object's access control list (ACL) settings. ACLs define who can access your buckets and objects and specify the level of access granted to those users.<br /><br />&gt; 📘<br />&gt;<br />&gt; You can use an outside API, such as the [Ceph Object Gateway S3 API](https://docs.ceph.com/en/latest/radosgw/s3/objectops/#get-object-acl) for more options. __OAuth scopes__.<br /><br />    ```<br />    object_storage:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
acl,
acl_xml
FROM linode.object_storage.acl_configurations
WHERE name = '{{ name }}' -- required
AND regionId = '{{ regionId }}' -- required
AND bucket = '{{ bucket }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Update a specific object's access control list (ACL) settings. ACLs define who can access your buckets and objects, and specify the level of access granted to those users.<br /><br />&gt; 📘<br />&gt;<br />&gt; You can use an outside API, such as the [Ceph Object Gateway S3 API](https://docs.ceph.com/en/latest/radosgw/s3/objectops/#set-object-acl) for more options. __OAuth scopes__.<br /><br />    ```<br />    object_storage:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.object_storage.acl_configurations
SET 
acl = '{{ acl }}',
name = '{{ name }}'
WHERE 
regionId = '{{ regionId }}' --required
AND bucket = '{{ bucket }}' --required
AND acl = '{{ acl }}' --required
AND name = '{{ name }}' --required
RETURNING
bucket,
message,
regionId;
```
</TabItem>
</Tabs>
