--- 
title: buckets
hide_title: false
hide_table_of_contents: false
keywords:
  - buckets
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

Creates, updates, deletes, gets or lists a <code>buckets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="buckets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.object_storage.buckets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list_by_region', value: 'list_by_region' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

The requested bucket.

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
    <td><CopyableCode code="cluster" /></td>
    <td><code>string</code></td>
    <td>__Deprecated__ The legacy `clusterId` equivalent for the `regionId` where this bucket lives. The API maintains this for backward compatibility.  &gt; 📘 &gt; &gt; - This value and the `regionId` are interchangeable when used in requests. Best practice is to use the `regionId`. &gt; &gt; - This value is empty for newer regions that don't have a legacy `clusterId`. (example: us-east-1)</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>When this bucket was created. (example: 2019-01-01T01:23:45)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_type" /></td>
    <td><code>string</code></td>
    <td>The type of `s3_endpoint` available to the active `user` in this `region`. See [Endpoint types](https://techdocs.akamai.com/cloud-computing/docs/object-storage#endpoint-types) for more information. (E0, E1, E2, E3) (example: E1)</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>The hostname where this bucket can be accessed. This hostname can be accessed through a browser if the bucket is made public. (example: primary-bucket-1.us-east-12.linodeobjects.com)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>The name of this bucket. (example: primary-bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="objects" /></td>
    <td><code>integer</code></td>
    <td>The number of objects stored in this bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The `id` of the [region](https://techdocs.akamai.com/linode-api/reference/get-regions) where this Object Storage bucket lives. (example: us-east)</td>
</tr>
<tr>
    <td><CopyableCode code="s3_endpoint" /></td>
    <td><code>string</code></td>
    <td>The active user's S3-compatible endpoint URL, based on the `endpoint_type` and `region`. (example: us-east-12.linodeobjects.com)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>The size of the bucket in bytes.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_by_region">

A paginated list of buckets on your account in this region.

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
    <td><CopyableCode code="cluster" /></td>
    <td><code>string</code></td>
    <td>__Deprecated__ The legacy `clusterId` equivalent for the `regionId` where this bucket lives. The API maintains this for backward compatibility.  &gt; 📘 &gt; &gt; - This value and the `regionId` are interchangeable when used in requests. Best practice is to use the `regionId`. &gt; &gt; - This value is empty for newer regions that don't have a legacy `clusterId`. (example: us-east-1)</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>When this bucket was created. (example: 2019-01-01T01:23:45)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_type" /></td>
    <td><code>string</code></td>
    <td>The type of `s3_endpoint` available to the active `user` in this `region`. See [Endpoint types](https://techdocs.akamai.com/cloud-computing/docs/object-storage#endpoint-types) for more information. (E0, E1, E2, E3) (example: E1)</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>The hostname where this bucket can be accessed. This hostname can be accessed through a browser if the bucket is made public. (example: primary-bucket-1.us-east-12.linodeobjects.com)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>The name of this bucket. (example: primary-bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="objects" /></td>
    <td><code>integer</code></td>
    <td>The number of objects stored in this bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The `id` of the [region](https://techdocs.akamai.com/linode-api/reference/get-regions) where this Object Storage bucket lives. (example: us-east)</td>
</tr>
<tr>
    <td><CopyableCode code="s3_endpoint" /></td>
    <td><code>string</code></td>
    <td>The active user's S3-compatible endpoint URL, based on the `endpoint_type` and `region`. (example: us-east-12.linodeobjects.com)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>The size of the bucket in bytes.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated list of buckets you own.

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
    <td><CopyableCode code="cluster" /></td>
    <td><code>string</code></td>
    <td>__Deprecated__ The legacy `clusterId` equivalent for the `regionId` where this bucket lives. The API maintains this for backward compatibility.  &gt; 📘 &gt; &gt; - This value and the `regionId` are interchangeable when used in requests. Best practice is to use the `regionId`. &gt; &gt; - This value is empty for newer regions that don't have a legacy `clusterId`. (example: us-east-1)</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>When this bucket was created. (example: 2019-01-01T01:23:45)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_type" /></td>
    <td><code>string</code></td>
    <td>The type of `s3_endpoint` available to the active `user` in this `region`. See [Endpoint types](https://techdocs.akamai.com/cloud-computing/docs/object-storage#endpoint-types) for more information. (E0, E1, E2, E3) (example: E1)</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>The hostname where this bucket can be accessed. This hostname can be accessed through a browser if the bucket is made public. (example: primary-bucket-1.us-east-12.linodeobjects.com)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>The name of this bucket. (example: primary-bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="objects" /></td>
    <td><code>integer</code></td>
    <td>The number of objects stored in this bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The `id` of the [region](https://techdocs.akamai.com/linode-api/reference/get-regions) where this Object Storage bucket lives. (example: us-east)</td>
</tr>
<tr>
    <td><CopyableCode code="s3_endpoint" /></td>
    <td><code>string</code></td>
    <td>The active user's S3-compatible endpoint URL, based on the `endpoint_type` and `region`. (example: us-east-12.linodeobjects.com)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>The size of the bucket in bytes.</td>
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
    <td><a href="#parameter-regionId"><code>regionId</code></a>, <a href="#parameter-bucket"><code>bucket</code></a></td>
    <td></td>
    <td>Returns a single Object Storage bucket.<br /><br />&gt; 📘<br />&gt;<br />&gt; You can use an outside API, such as the [Ceph Object Gateway S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#get-bucket) for more options. __OAuth scopes__.<br /><br />    ```<br />    object_storage:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list_by_region"><CopyableCode code="list_by_region" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-regionId"><code>regionId</code></a></td>
    <td></td>
    <td>Returns a list of buckets on your account, in the specified region.<br /><br />&gt; 📘<br />&gt;<br />&gt; You can use the [Ceph Object Gateway S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#get-bucket) for more options. __OAuth scopes__.<br /><br />    ```<br />    object_storage:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Returns a paginated list of all Object Storage buckets available in your account.<br /><br />&gt; 📘<br />&gt;<br />&gt; You can use an outside API, such as the [Ceph Object Gateway S3 API](https://docs.ceph.com/en/latest/radosgw/s3/serviceops/#list-buckets) for more options. __OAuth scopes__.<br /><br />    ```<br />    object_storage:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-label"><code>label</code></a></td>
    <td></td>
    <td>Creates an Object Storage bucket in the specified data center ([region](https://techdocs.akamai.com/linode-api/reference/get-regions)). If the bucket already exists on your account, this operation returns a 200 response with that bucket as if the API just created it.<br /><br />&gt; 📘<br />&gt;<br />&gt; - Accounts with negative balances can't access this operation.<br />&gt;<br />&gt; - The API still supports the `clusterId` equivalent (`us-west-1`) when setting a `region` for a new bucket, but you should use the `regionId` (`us-west`) instead.<br />&gt;<br />&gt; - This operation has specific [rate limits](https://techdocs.akamai.com/linode-api/reference/rate-limits#specific-operation-rate-limits).<br />&gt;<br />&gt; - You can use an outside API, such as the [Ceph Object Gateway S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#put-bucket) for more options. __OAuth scopes__.<br /><br />    ```<br />    object_storage:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-regionId"><code>regionId</code></a>, <a href="#parameter-bucket"><code>bucket</code></a></td>
    <td></td>
    <td>Removes a single bucket.<br /><br />&gt; 📘<br />&gt;<br />&gt; - You need to remove all objects from a bucket before you can delete it. While you can delete a bucket using the [CLI](https://www.linode.com/docs/products/storage/object-storage/guides/s3cmd/#delete-a-bucket), this operation fails if the bucket contains too many objects. The best way to empty large buckets is to configure lifecycle policies with an outside API, such as the [Ceph Object Gateway S3 API](https://docs.ceph.com/en/latest/radosgw/bucketpolicy/#). Set a policy to remove all objects, wait a day or more for the system to remove all objects, then delete the bucket.<br />&gt;<br />&gt; - You can use an outside API, such as the [Ceph Object Gateway S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#delete-bucket) for more options. __OAuth scopes__.<br /><br />    ```<br />    object_storage:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create_object_url"><CopyableCode code="create_object_url" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-regionId"><code>regionId</code></a>, <a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-method"><code>method</code></a></td>
    <td></td>
    <td>Creates a pre-signed URL to access a single object in a bucket. Use it to share, create, or delete objects by using the appropriate HTTP method in your request body's `method` parameter.<br /><br />&gt; 📘<br />&gt;<br />&gt; You can use an outside API, such as the [Ceph Object Gateway S3 API](https://docs.ceph.com/en/latest/radosgw/s3/) for more options. __OAuth scopes__.<br /><br />    ```<br />    object_storage:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list_by_region', value: 'list_by_region' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Returns a single Object Storage bucket.<br /><br />&gt; 📘<br />&gt;<br />&gt; You can use an outside API, such as the [Ceph Object Gateway S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#get-bucket) for more options. __OAuth scopes__.<br /><br />    ```<br />    object_storage:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
cluster,
created,
endpoint_type,
hostname,
label,
objects,
region,
s3_endpoint,
size
FROM linode.object_storage.buckets
WHERE regionId = '{{ regionId }}' -- required
AND bucket = '{{ bucket }}' -- required
;
```
</TabItem>
<TabItem value="list_by_region">

Returns a list of buckets on your account, in the specified region.<br /><br />&gt; 📘<br />&gt;<br />&gt; You can use the [Ceph Object Gateway S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#get-bucket) for more options. __OAuth scopes__.<br /><br />    ```<br />    object_storage:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
cluster,
created,
endpoint_type,
hostname,
label,
objects,
region,
s3_endpoint,
size
FROM linode.object_storage.buckets
WHERE regionId = '{{ regionId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns a paginated list of all Object Storage buckets available in your account.<br /><br />&gt; 📘<br />&gt;<br />&gt; You can use an outside API, such as the [Ceph Object Gateway S3 API](https://docs.ceph.com/en/latest/radosgw/s3/serviceops/#list-buckets) for more options. __OAuth scopes__.<br /><br />    ```<br />    object_storage:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
cluster,
created,
endpoint_type,
hostname,
label,
objects,
region,
s3_endpoint,
size
FROM linode.object_storage.buckets
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates an Object Storage bucket in the specified data center ([region](https://techdocs.akamai.com/linode-api/reference/get-regions)). If the bucket already exists on your account, this operation returns a 200 response with that bucket as if the API just created it.<br /><br />&gt; 📘<br />&gt;<br />&gt; - Accounts with negative balances can't access this operation.<br />&gt;<br />&gt; - The API still supports the `clusterId` equivalent (`us-west-1`) when setting a `region` for a new bucket, but you should use the `regionId` (`us-west`) instead.<br />&gt;<br />&gt; - This operation has specific [rate limits](https://techdocs.akamai.com/linode-api/reference/rate-limits#specific-operation-rate-limits).<br />&gt;<br />&gt; - You can use an outside API, such as the [Ceph Object Gateway S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#put-bucket) for more options. __OAuth scopes__.<br /><br />    ```<br />    object_storage:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.object_storage.buckets (
acl,
cors_enabled,
endpoint_type,
label,
region,
s3_endpoint
)
SELECT 
'{{ acl }}',
{{ cors_enabled }},
'{{ endpoint_type }}',
'{{ label }}' /* required */,
'{{ region }}',
'{{ s3_endpoint }}'
RETURNING
cluster,
created,
endpoint_type,
hostname,
label,
objects,
region,
s3_endpoint,
size
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: buckets
  props:
    - name: acl
      value: "{{ acl }}"
      description: |
        The S3 predefined collection of grantees and permissions set for the bucket, also referred to as a [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl).
      valid_values: ['private', 'public-read', 'authenticated-read', 'public-read-write']
      default: private
    - name: cors_enabled
      value: {{ cors_enabled }}
      description: |
        If set to \`false\`, cross-origin resource sharing (CORS) is disabled for all origins in the bucket.
    - name: endpoint_type
      value: "{{ endpoint_type }}"
      description: |
        The type of \`s3_endpoint\` available to the active \`user\` in this \`region\`. See [Endpoint types](https://techdocs.akamai.com/cloud-computing/docs/object-storage#endpoint-types) for more information.
      valid_values: ['E0', 'E1', 'E2', 'E3']
    - name: label
      value: "{{ label }}"
      description: |
        The name for this bucket.
        * A bucket name can contain from 3 to 63 alphanumeric characters, dashes (\`-\`), or dots (\`.\`).
        * A bucket name can't end in a dash and you can't use two consecutive dashes.
        * A bucket name can't start or end in a dot, and you can't use two consecutive dots. As a best practice, only use dots if a certificate you're using with your bucket requires it. (For example, if you're using a custom TLS certificate.)
        * A bucket name needs to be unique in the \`region\` where you're creating the bucket. The API only reserves labels for the \`region\` where active buckets are created and stored. If you want to reserve this bucket's label in another \`region\`, create a new bucket with the same label in the new \`region\`.
    - name: region
      value: "{{ region }}"
      description: |
        The \`id\` assigned to the data center ([region](https://techdocs.akamai.com/linode-api/reference/get-regions)) where this Object Storage bucket should be created.
        > 📘
        >
        > This supports legacy \`clusterId\` values that represented a specific region. For example, \`us-east-1\` is the legacy reference for the \`us-east\` region.
    - name: s3_endpoint
      value: "{{ s3_endpoint }}"
      description: |
        The active user's S3-compatible endpoint URL, based on the \`endpoint_type\` and \`region\`.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Removes a single bucket.<br /><br />&gt; 📘<br />&gt;<br />&gt; - You need to remove all objects from a bucket before you can delete it. While you can delete a bucket using the [CLI](https://www.linode.com/docs/products/storage/object-storage/guides/s3cmd/#delete-a-bucket), this operation fails if the bucket contains too many objects. The best way to empty large buckets is to configure lifecycle policies with an outside API, such as the [Ceph Object Gateway S3 API](https://docs.ceph.com/en/latest/radosgw/bucketpolicy/#). Set a policy to remove all objects, wait a day or more for the system to remove all objects, then delete the bucket.<br />&gt;<br />&gt; - You can use an outside API, such as the [Ceph Object Gateway S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#delete-bucket) for more options. __OAuth scopes__.<br /><br />    ```<br />    object_storage:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.object_storage.buckets
WHERE regionId = '{{ regionId }}' --required
AND bucket = '{{ bucket }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="create_object_url"
    values={[
        { label: 'create_object_url', value: 'create_object_url' }
    ]}
>
<TabItem value="create_object_url">

Creates a pre-signed URL to access a single object in a bucket. Use it to share, create, or delete objects by using the appropriate HTTP method in your request body's `method` parameter.<br /><br />&gt; 📘<br />&gt;<br />&gt; You can use an outside API, such as the [Ceph Object Gateway S3 API](https://docs.ceph.com/en/latest/radosgw/s3/) for more options. __OAuth scopes__.<br /><br />    ```<br />    object_storage:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.object_storage.buckets.create_object_url 
@regionId='{{ regionId }}' --required, 
@bucket='{{ bucket }}' --required 
@@json=
'{
"content_type": "{{ content_type }}", 
"expires_in": {{ expires_in }}, 
"method": "{{ method }}", 
"name": "{{ name }}"
}'
;
```
</TabItem>
</Tabs>
