--- 
title: ssl_certificates
hide_title: false
hide_table_of_contents: false
keywords:
  - ssl_certificates
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

Creates, updates, deletes, gets or lists a <code>ssl_certificates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ssl_certificates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.object_storage.ssl_certificates" /></td></tr>
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

Returns a boolean value indicating if this bucket has a corresponding TLS/SSL certificate that was uploaded by an Account user.

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
    <td><CopyableCode code="ssl" /></td>
    <td><code>boolean</code></td>
    <td>__Read-only__ A boolean indicating if this Bucket has a corresponding TLS/SSL certificate that was uploaded by an Account user.</td>
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
    <td>Returns a boolean value indicating if this bucket has a corresponding TLS/SSL certificate that was uploaded by an Account user.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-regionId"><code>regionId</code></a>, <a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-certificate"><code>certificate</code></a>, <a href="#parameter-private_key"><code>private_key</code></a></td>
    <td></td>
    <td>Upload a TLS/SSL certificate and private key to be served when you visit your Object Storage bucket via HTTPS. Your TLS/SSL certificate and private key are stored encrypted at rest.<br /><br />To replace an expired certificate, [delete your current certificates](https://techdocs.akamai.com/linode-api/reference/delete-object-storage-ssl) and upload a new one.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-regionId"><code>regionId</code></a>, <a href="#parameter-bucket"><code>bucket</code></a></td>
    <td></td>
    <td>Deletes this Object Storage bucket's user uploaded TLS/SSL certificate and private key.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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

Returns a boolean value indicating if this bucket has a corresponding TLS/SSL certificate that was uploaded by an Account user.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
ssl
FROM linode.object_storage.ssl_certificates
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

Upload a TLS/SSL certificate and private key to be served when you visit your Object Storage bucket via HTTPS. Your TLS/SSL certificate and private key are stored encrypted at rest.<br /><br />To replace an expired certificate, [delete your current certificates](https://techdocs.akamai.com/linode-api/reference/delete-object-storage-ssl) and upload a new one.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.object_storage.ssl_certificates (
certificate,
private_key,
regionId,
bucket
)
SELECT 
'{{ certificate }}' /* required */,
'{{ private_key }}' /* required */,
'{{ regionId }}',
'{{ bucket }}'
RETURNING
ssl
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ssl_certificates
  props:
    - name: regionId
      value: "{{ regionId }}"
      description: Required parameter for the ssl_certificates resource.
    - name: bucket
      value: "{{ bucket }}"
      description: Required parameter for the ssl_certificates resource.
    - name: certificate
      value: "{{ certificate }}"
      description: |
        Your Base64 encoded and PEM formatted SSL certificate.
        Line breaks must be represented as \`\n\` in the string for requests (but not when using the Linode CLI)
    - name: private_key
      value: "{{ private_key }}"
      description: |
        The private key associated with this TLS/SSL certificate.
        Line breaks must be represented as \`\n\` in the string for requests (but not when using the Linode CLI)
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

Deletes this Object Storage bucket's user uploaded TLS/SSL certificate and private key.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.object_storage.ssl_certificates
WHERE regionId = '{{ regionId }}' --required
AND bucket = '{{ bucket }}' --required
;
```
</TabItem>
</Tabs>
