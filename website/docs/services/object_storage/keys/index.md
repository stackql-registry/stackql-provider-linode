--- 
title: keys
hide_title: false
hide_table_of_contents: false
keywords:
  - keys
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

Creates, updates, deletes, gets or lists a <code>keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.object_storage.keys" /></td></tr>
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

The key pair.

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
    <td>This Object Storage key's unique ID.</td>
</tr>
<tr>
    <td><CopyableCode code="access_key" /></td>
    <td><code>string</code></td>
    <td>A unique string chosen by the API to identify this key. Used as a username to identify this key when making requests to an S3 API, such as the Amazon S3 API or Ceph Object Gateway S3 API. (example: ABCDEFGHI1JKL2MNOP34)</td>
</tr>
<tr>
    <td><CopyableCode code="bucket_access" /></td>
    <td><code>array</code></td>
    <td>Settings that limit access to specific buckets, each with a specific permission level. See [Create a limited access key](https://techdocs.akamai.com/linode-api/reference/post-object-storage-keys) for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>The label given to this key. For display purposes only. (example: my-key)</td>
</tr>
<tr>
    <td><CopyableCode code="limited" /></td>
    <td><code>boolean</code></td>
    <td>Whether this Object Storage key limits access to specific buckets and permissions. Returns `false` if this key grants full access. Specific limitations are set in `bucket_access`.</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>The key can be used in these regions to manage buckets.</td>
</tr>
<tr>
    <td><CopyableCode code="secret_key" /></td>
    <td><code>string</code></td>
    <td>This Object Storage key's secret key. Used as a password to validate this key when making requests to an S3 API, such as the Amazon S3 API or Ceph Object Gateway S3 API.  &gt; 📘 &gt; &gt; This value is listed as `[REDACTED]` for this operation, to protect it. It's only revealed in a response after [creating](https://techdocs.akamai.com/linode-api/reference/post-object-storage-keys) a key.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated list of Object Storage Keys.

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
    <td>This Object Storage key's unique ID.</td>
</tr>
<tr>
    <td><CopyableCode code="access_key" /></td>
    <td><code>string</code></td>
    <td>A unique string chosen by the API to identify this key. Used as a username to identify this key when making requests to an S3 API, such as the Amazon S3 API or Ceph Object Gateway S3 API. (example: ABCDEFGHI1JKL2MNOP34)</td>
</tr>
<tr>
    <td><CopyableCode code="bucket_access" /></td>
    <td><code>array</code></td>
    <td>Settings that limit access to specific buckets, each with a specific permission level. See [Create a limited access key](https://techdocs.akamai.com/linode-api/reference/post-object-storage-keys) for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>The label given to this key. For display purposes only. (example: my-key)</td>
</tr>
<tr>
    <td><CopyableCode code="limited" /></td>
    <td><code>boolean</code></td>
    <td>Whether this Object Storage key limits access to specific buckets and permissions. Returns `false` if this key grants full access. Specific limitations are set in `bucket_access`.</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>The key can be used in these regions to manage buckets.</td>
</tr>
<tr>
    <td><CopyableCode code="secret_key" /></td>
    <td><code>string</code></td>
    <td>This Object Storage key's secret key. Used as a password to validate this key when making requests to an S3 API, such as the Amazon S3 API or Ceph Object Gateway S3 API.  &gt; 📘 &gt; &gt; This value is listed as `[REDACTED]` for this operation, to protect it. It's only revealed in a response after [creating](https://techdocs.akamai.com/linode-api/reference/post-object-storage-keys) a key.</td>
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
    <td><a href="#parameter-keyId"><code>keyId</code></a></td>
    <td></td>
    <td>Returns a single Object Storage access key.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Returns a paginated list of Object Storage access keys for authentication.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Generates a new Object Storage access key and an associated secret key. The secret key is only displayed when the access key is generated and cannot be viewed again. A successful request triggers an `obj_access_key_create` [event](https://techdocs.akamai.com/linode-api/reference/get-events).<br /><br />&gt; 📘<br />&gt;<br />&gt; - Accounts with negative balances can't access this operation.<br />&gt;<br />&gt; - This operation has specific [rate limits](https://techdocs.akamai.com/linode-api/reference/rate-limits#specific-operation-rate-limits).<br /><br />**Unlimited vs. limited access keys**<br /><br />An unlimited access key grants full access to all of your buckets in each region you name, using the `regions` array. A limited access key lets you name specific buckets where you need to manage content, using the `bucket_access` array.<br /><br />&gt; 👍 There's a tutorial<br />&gt;<br />&gt; We offer workflows for both an [unlimited access key](https://techdocs.akamai.com/linode-api/reference/create-an-unlimited-access-key) and a [limited access key](https://techdocs.akamai.com/linode-api/reference/create-a-limited-access-key).<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-keyId"><code>keyId</code></a></td>
    <td></td>
    <td>Updates an Object Storage access key on your account. A successful request triggers an `obj_access_key_update` [event](https://techdocs.akamai.com/linode-api/reference/get-events).<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation has specific [rate limits](https://techdocs.akamai.com/linode-api/reference/rate-limits#specific-operation-rate-limits).<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-keyId"><code>keyId</code></a></td>
    <td></td>
    <td>Revokes an Object Storage access key. Once revoked, the access key can no longer be used by third-party clients. A successful request triggers an `obj_access_key_delete` [event](https://techdocs.akamai.com/linode-api/reference/get-events).<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation has specific [rate limits](https://techdocs.akamai.com/linode-api/reference/rate-limits#specific-operation-rate-limits).<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-keyId">
    <td><CopyableCode code="keyId" /></td>
    <td><code>string</code></td>
    <td>The key to look up.</td>
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

Returns a single Object Storage access key.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
access_key,
bucket_access,
label,
limited,
regions,
secret_key
FROM linode.object_storage.keys
WHERE keyId = '{{ keyId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns a paginated list of Object Storage access keys for authentication.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
access_key,
bucket_access,
label,
limited,
regions,
secret_key
FROM linode.object_storage.keys
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

Generates a new Object Storage access key and an associated secret key. The secret key is only displayed when the access key is generated and cannot be viewed again. A successful request triggers an `obj_access_key_create` [event](https://techdocs.akamai.com/linode-api/reference/get-events).<br /><br />&gt; 📘<br />&gt;<br />&gt; - Accounts with negative balances can't access this operation.<br />&gt;<br />&gt; - This operation has specific [rate limits](https://techdocs.akamai.com/linode-api/reference/rate-limits#specific-operation-rate-limits).<br /><br />**Unlimited vs. limited access keys**<br /><br />An unlimited access key grants full access to all of your buckets in each region you name, using the `regions` array. A limited access key lets you name specific buckets where you need to manage content, using the `bucket_access` array.<br /><br />&gt; 👍 There's a tutorial<br />&gt;<br />&gt; We offer workflows for both an [unlimited access key](https://techdocs.akamai.com/linode-api/reference/create-an-unlimited-access-key) and a [limited access key](https://techdocs.akamai.com/linode-api/reference/create-a-limited-access-key).<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.object_storage.keys (
bucket_access,
label,
regions
)
SELECT 
'{{ bucket_access }}',
'{{ label }}',
'{{ regions }}'
RETURNING
id,
access_key,
bucket_access,
label,
limited,
regions,
secret_key
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: keys
  props:
    - name: bucket_access
      value: "{{ bucket_access }}"
      description: |
        Settings that limit access to specific buckets, each with a specific permission level. See [Create a limited access key](https://techdocs.akamai.com/linode-api/reference/post-object-storage-keys) for more information.
    - name: label
      value: "{{ label }}"
      description: |
        The name for the key. For display purposes only.
    - name: regions
      value:
        - "{{ regions }}"
      description: |
        The key can be used in these regions to manage all buckets. See [Create an unlimited access key](https://techdocs.akamai.com/linode-api/reference/post-object-storage-keys) for more information.
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

Updates an Object Storage access key on your account. A successful request triggers an `obj_access_key_update` [event](https://techdocs.akamai.com/linode-api/reference/get-events).<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation has specific [rate limits](https://techdocs.akamai.com/linode-api/reference/rate-limits#specific-operation-rate-limits).<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.object_storage.keys
SET 
label = '{{ label }}',
regions = '{{ regions }}'
WHERE 
keyId = '{{ keyId }}' --required
RETURNING
id,
access_key,
label,
limited,
regions,
secret_key;
```
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

Revokes an Object Storage access key. Once revoked, the access key can no longer be used by third-party clients. A successful request triggers an `obj_access_key_delete` [event](https://techdocs.akamai.com/linode-api/reference/get-events).<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation has specific [rate limits](https://techdocs.akamai.com/linode-api/reference/rate-limits#specific-operation-rate-limits).<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.object_storage.keys
WHERE keyId = '{{ keyId }}' --required
;
```
</TabItem>
</Tabs>
