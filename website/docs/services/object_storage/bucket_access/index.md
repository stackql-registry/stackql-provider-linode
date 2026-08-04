--- 
title: bucket_access
hide_title: false
hide_table_of_contents: false
keywords:
  - bucket_access
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

Creates, updates, deletes, gets or lists a <code>bucket_access</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bucket_access" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.object_storage.bucket_access" /></td></tr>
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

Access settings for the specific bucket.

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
<tr>
    <td><CopyableCode code="cors_enabled" /></td>
    <td><code>boolean</code></td>
    <td>If `true`, cross-origin resource sharing (CORS) is enabled for all origins in the bucket. Returned as `null` for `E2` and `E3` [endpoint types](https://techdocs.akamai.com/cloud-computing/docs/object-storage#endpoint-types) because CORS is not supported.</td>
</tr>
<tr>
    <td><CopyableCode code="cors_xml" /></td>
    <td><code>string</code></td>
    <td>The full XML of the bucket's CORS policy. Returned as an empty object if `cors_enabled` is `false`, and `null` for `E2` and `E3` [endpoint types](https://techdocs.akamai.com/cloud-computing/docs/object-storage#endpoint-types). CORS is not supported with these endpoint types. (example: &lt;CORSConfiguration&gt;...&lt;/CORSConfiguration&gt;)</td>
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
    <td>View the cross-origin resource sharing (CORS) and [S3 canned access control (ACL)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl) settings for a specific Object Storage bucket.<br /><br />&gt; 📘<br />&gt;<br />&gt; You can use the S3 API to view more details on [CORS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/enabling-cors-examples.html) or [S3 canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/managing-acls.html) settings. __OAuth scopes__.<br /><br />    ```<br />    object_storage:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-regionId"><code>regionId</code></a>, <a href="#parameter-bucket"><code>bucket</code></a></td>
    <td></td>
    <td>Apply basic cross-origin resource sharing (CORS) and [S3 canned access control list (ACL)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl) settings.<br /><br />&gt; 📘<br />&gt;<br />&gt; You can use the S3 API for more fine-grained control of the [CORS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/enabling-cors-examples.html) or [S3 canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/managing-acls.html) settings. __OAuth scopes__.<br /><br />    ```<br />    object_storage:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-regionId"><code>regionId</code></a>, <a href="#parameter-bucket"><code>bucket</code></a></td>
    <td></td>
    <td>Update basic cross-origin resource sharing (CORS) and [S3 canned access control list (ACL)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl) settings.<br /><br />&gt; 📘<br />&gt;<br />&gt; You can use the S3 API for more fine-grained control of the [CORS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/enabling-cors-examples.html) or [S3 canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/managing-acls.html) settings. __OAuth scopes__.<br /><br />    ```<br />    object_storage:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

View the cross-origin resource sharing (CORS) and [S3 canned access control (ACL)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl) settings for a specific Object Storage bucket.<br /><br />&gt; 📘<br />&gt;<br />&gt; You can use the S3 API to view more details on [CORS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/enabling-cors-examples.html) or [S3 canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/managing-acls.html) settings. __OAuth scopes__.<br /><br />    ```<br />    object_storage:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
acl,
acl_xml,
cors_enabled,
cors_xml
FROM linode.object_storage.bucket_access
WHERE regionId = '{{ regionId }}' -- required
AND bucket = '{{ bucket }}' -- required
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

Apply basic cross-origin resource sharing (CORS) and [S3 canned access control list (ACL)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl) settings.<br /><br />&gt; 📘<br />&gt;<br />&gt; You can use the S3 API for more fine-grained control of the [CORS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/enabling-cors-examples.html) or [S3 canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/managing-acls.html) settings. __OAuth scopes__.<br /><br />    ```<br />    object_storage:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.object_storage.bucket_access (
acl,
cors_enabled,
regionId,
bucket
)
SELECT 
'{{ acl }}',
{{ cors_enabled }},
'{{ regionId }}',
'{{ bucket }}'
RETURNING
bucket,
message,
regionId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: bucket_access
  props:
    - name: regionId
      value: "{{ regionId }}"
      description: Required parameter for the bucket_access resource.
    - name: bucket
      value: "{{ bucket }}"
      description: Required parameter for the bucket_access resource.
    - name: acl
      value: "{{ acl }}"
      description: |
        The S3 predefined collection of grantees and permissions set for the bucket, also referred to as a [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl).
      valid_values: ['private', 'public-read', 'authenticated-read', 'public-read-write', 'custom']
    - name: cors_enabled
      value: {{ cors_enabled }}
      description: |
        If \`true\`, cross-origin resource sharing (CORS) is enabled for all origins in the bucket.
`}</CodeBlock>

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

Update basic cross-origin resource sharing (CORS) and [S3 canned access control list (ACL)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl) settings.<br /><br />&gt; 📘<br />&gt;<br />&gt; You can use the S3 API for more fine-grained control of the [CORS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/enabling-cors-examples.html) or [S3 canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/managing-acls.html) settings. __OAuth scopes__.<br /><br />    ```<br />    object_storage:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.object_storage.bucket_access
SET 
acl = '{{ acl }}',
cors_enabled = {{ cors_enabled }}
WHERE 
regionId = '{{ regionId }}' --required
AND bucket = '{{ bucket }}' --required
RETURNING
bucket,
message,
regionId;
```
</TabItem>
</Tabs>
