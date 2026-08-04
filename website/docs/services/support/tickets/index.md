--- 
title: tickets
hide_title: false
hide_table_of_contents: false
keywords:
  - tickets
  - support
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

Creates, updates, deletes, gets or lists a <code>tickets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tickets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.support.tickets" /></td></tr>
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

Returns a single support ticket.

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
    <td>__Read-only__ The ID of the support ticket.</td>
</tr>
<tr>
    <td><CopyableCode code="gravatar_id" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The Gravatar ID of the user who opened this ticket. (example: 474a1b7373ae0be4132649e69c36ce30)</td>
</tr>
<tr>
    <td><CopyableCode code="attachments" /></td>
    <td><code>array</code></td>
    <td>__Read-only__ A list of filenames representing attached files associated with this ticket.</td>
</tr>
<tr>
    <td><CopyableCode code="closable" /></td>
    <td><code>boolean</code></td>
    <td>Whether the ticket can be closed.</td>
</tr>
<tr>
    <td><CopyableCode code="closed" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__, __Read-only__ When this ticket was closed. (example: 2024-06-04T16:07:03)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The full details of the issue or question. (example: I'm having trouble setting the root password on my Linode. I tried following the instructions, but something isn't working. Can you please help me figure out how I can reset it?)</td>
</tr>
<tr>
    <td><CopyableCode code="entity" /></td>
    <td><code>object</code></td>
    <td>__Read-only__ The ticket was opened for this entity. An entity represents a specific object you've created, such as a Linode or a Managed Database.</td>
</tr>
<tr>
    <td><CopyableCode code="opened" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__, __Read-only__ When this ticket was created. (example: 2024-06-04T14:16:44)</td>
</tr>
<tr>
    <td><CopyableCode code="opened_by" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ The user who opened this ticket. (example: some_user)</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The severity of this ticket. (low, moderate, major) (example: low)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ The current status of this ticket. (closed, new, open) (example: open)</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The summary or title for this ticket. (example: Having trouble resetting Linode root password.)</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__, __Read-only__ When this ticket was last updated. (example: 2024-06-04T16:07:03)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The user who last updated this ticket. (example: some_other_user)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Returns a paginated list of support tickets.

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
    <td>__Read-only__ The ID of the support ticket.</td>
</tr>
<tr>
    <td><CopyableCode code="gravatar_id" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The Gravatar ID of the user who opened this ticket. (example: 474a1b7373ae0be4132649e69c36ce30)</td>
</tr>
<tr>
    <td><CopyableCode code="attachments" /></td>
    <td><code>array</code></td>
    <td>__Read-only__ A list of filenames representing attached files associated with this ticket.</td>
</tr>
<tr>
    <td><CopyableCode code="closable" /></td>
    <td><code>boolean</code></td>
    <td>Whether the ticket can be closed.</td>
</tr>
<tr>
    <td><CopyableCode code="closed" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__, __Read-only__ When this ticket was closed. (example: 2024-06-04T16:07:03)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The full details of the issue or question. (example: I'm having trouble setting the root password on my Linode. I tried following the instructions, but something isn't working. Can you please help me figure out how I can reset it?)</td>
</tr>
<tr>
    <td><CopyableCode code="entity" /></td>
    <td><code>object</code></td>
    <td>__Read-only__ The ticket was opened for this entity. An entity represents a specific object you've created, such as a Linode or a Managed Database.</td>
</tr>
<tr>
    <td><CopyableCode code="opened" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__, __Read-only__ When this ticket was created. (example: 2024-06-04T14:16:44)</td>
</tr>
<tr>
    <td><CopyableCode code="opened_by" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ The user who opened this ticket. (example: some_user)</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The severity of this ticket. (low, moderate, major) (example: low)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ The current status of this ticket. (closed, new, open) (example: open)</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The summary or title for this ticket. (example: Having trouble resetting Linode root password.)</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__, __Read-only__ When this ticket was last updated. (example: 2024-06-04T16:07:03)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The user who last updated this ticket. (example: some_other_user)</td>
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
    <td><a href="#parameter-ticketId"><code>ticketId</code></a></td>
    <td></td>
    <td>Returns a specific support ticket under your account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Returns a collection of all support tickets opened from your account. This includes tickets you've opened and tickets generated by Linode customer support regarding your account. Open tickets are returned first in the response.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-summary"><code>summary</code></a>, <a href="#parameter-description"><code>description</code></a></td>
    <td></td>
    <td>Open a support ticket. A ticket can only target a single, specific entity. For example, for an issue with a specific Linode, open a ticket and target it using its `linode_id`. Leave all other entities out of the request or set them to `null`.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ticketId"><code>ticketId</code></a></td>
    <td></td>
    <td>Closes a support ticket you have access to modify.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#upload_attachment"><CopyableCode code="upload_attachment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ticketId"><code>ticketId</code></a>, <a href="#parameter-file"><code>file</code></a></td>
    <td></td>
    <td>Adds a file attachment to an open support ticket on your account. Use an attachment to help customer support resolve your ticket. The file attachment is submitted in the request as `multipart/form-data` type. Accepted file extensions include: `.gif`, `.jpg`, `.jpeg`, `.pjpg`, `.pjpeg`, `.tif`, `.tiff`, `.png`, `.pdf`, or `.txt`. __OAuth scopes__.<br /><br />    ```<br />    account:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-ticketId">
    <td><CopyableCode code="ticketId" /></td>
    <td><code>string</code></td>
    <td>The ID of the support ticket.</td>
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

Returns a specific support ticket under your account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
gravatar_id,
attachments,
closable,
closed,
description,
entity,
opened,
opened_by,
severity,
status,
summary,
updated,
updated_by
FROM linode.support.tickets
WHERE ticketId = '{{ ticketId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns a collection of all support tickets opened from your account. This includes tickets you've opened and tickets generated by Linode customer support regarding your account. Open tickets are returned first in the response.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
gravatar_id,
attachments,
closable,
closed,
description,
entity,
opened,
opened_by,
severity,
status,
summary,
updated,
updated_by
FROM linode.support.tickets
WHERE page = '{{ page }}'
AND page_size = '{{ page_size }}'
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

Open a support ticket. A ticket can only target a single, specific entity. For example, for an issue with a specific Linode, open a ticket and target it using its `linode_id`. Leave all other entities out of the request or set them to `null`.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.support.tickets (
bucket,
database_id,
description,
domain_id,
firewall_id,
linode_id,
lkecluster_id,
longviewclient_id,
managed_issue,
nodebalancer_id,
region,
severity,
summary,
vlan,
volume_id,
vpc_id
)
SELECT 
'{{ bucket }}',
{{ database_id }},
'{{ description }}' /* required */,
{{ domain_id }},
{{ firewall_id }},
{{ linode_id }},
{{ lkecluster_id }},
{{ longviewclient_id }},
{{ managed_issue }},
{{ nodebalancer_id }},
'{{ region }}',
{{ severity }},
'{{ summary }}' /* required */,
'{{ vlan }}',
{{ volume_id }},
{{ vpc_id }}
RETURNING
id,
gravatar_id,
attachments,
closable,
closed,
description,
entity,
opened,
opened_by,
severity,
status,
summary,
updated,
updated_by
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tickets
  props:
    - name: bucket
      value: "{{ bucket }}"
      description: |
        The name of an Object Storage bucket entity for this ticket. Run the [List Object Storage buckets](https://techdocs.akamai.com/linode-api/reference/get-object-storage-buckets) operation and store the \`label\` for the target bucket. You also need to provide the specific \`region\` where the bucket is located.
    - name: database_id
      value: {{ database_id }}
      description: |
        The ID of the Managed Database entity for the ticket. Run the [List Managed Databases](https://techdocs.akamai.com/linode-api/reference/get-databases-instances) operation and store the \`id\` for the target database.
    - name: description
      value: "{{ description }}"
      description: |
        The full details of the issue or question.
    - name: domain_id
      value: {{ domain_id }}
      description: |
        The ID of the domain entity for the ticket. Run the [List domains](https://techdocs.akamai.com/linode-api/reference/get-domains) operation and store the \`id\` for the target domain.
    - name: firewall_id
      value: {{ firewall_id }}
      description: |
        The ID of the Firewall entity for the ticket. Run the [List a Linode's firewalls](https://techdocs.akamai.com/linode-api/reference/get-linode-firewalls) operation and store the \`id\` for the target Linode firewall.
    - name: linode_id
      value: {{ linode_id }}
      description: |
        The ID of the Linode entity for the ticket. Run the [List Linodes](https://techdocs.akamai.com/linode-api/reference/get-linode-instances) operation and store the \`id\` for the target Linode.
    - name: lkecluster_id
      value: {{ lkecluster_id }}
      description: |
        The ID of the Linode Kubernetes Engine (LKE) cluster entity for the ticket. Run the [List Kubernetes clusters](https://techdocs.akamai.com/linode-api/reference/get-lke-clusters) operation and store the \`id\` for the target LKE cluster.
    - name: longviewclient_id
      value: {{ longviewclient_id }}
      description: |
        The ID of the Longview client entity for the ticket. Run the [List Longview clients](https://techdocs.akamai.com/linode-api/reference/get-longview-clients) operation and store the \`id\` for the target client.
    - name: managed_issue
      value: {{ managed_issue }}
      description: |
        Whether this ticket is related to a [managed service](https://www.linode.com/products/managed/). If \`true\`, the following constraints apply:
        - You can't provide an entity, such as a \`linode_id\` or \`bucket\` with this request.
        - Your account needs a managed service [enabled](https://techdocs.akamai.com/linode-api/reference/post-enable-managed-service).
      default: false
    - name: nodebalancer_id
      value: {{ nodebalancer_id }}
      description: |
        The ID of the NodeBalancer entity for the ticket. Run the [List NodeBalancers](https://techdocs.akamai.com/linode-api/reference/get-node-balancers) operation and store the \`id\` for the target NodeBalancer.
    - name: region
      value: "{{ region }}"
      description: |
        The ID of the [region](https://techdocs.akamai.com/linode-api/reference/get-regions) where this ticket's target entity resides. This only applies to tickets for a \`vlan\` or an Object Storage  \`bucket\`.
        > 📘
        >
        > Set this to the \`clusterId\` for a legacy Object Storage \`bucket\`.
    - name: severity
      value: {{ severity }}
      description: |
        The severity of the issue. A value of \`1\` indicates a major issue, \`2\` indicates a moderate priority issue, and \`3\` is a low priority issue. Your account may not have access to set this value. Talk to your Akamai account team for more details.
      valid_values: ['1', '2', '3']
      default: null
    - name: summary
      value: "{{ summary }}"
      description: |
        The summary or title for this support ticket.
    - name: vlan
      value: "{{ vlan }}"
      description: |
        The label of the VLAN entity for the ticket. Run the [List VLANs](https://techdocs.akamai.com/linode-api/reference/get-vlans) operation and store the \`id\` for the target VLAN. You also need to provide the specific \`region\` where the VLAN is located.
    - name: volume_id
      value: {{ volume_id }}
      description: |
        The ID of the volume entity for the ticket. Run the [List volumes](https://techdocs.akamai.com/linode-api/reference/get-volumes) operation and store the \`id\` for the target volume.
    - name: vpc_id
      value: {{ vpc_id }}
      description: |
        The ID of the VPC entity for the ticket. Run the [List VPCs](https://techdocs.akamai.com/linode-api/reference/get-vpcs) operation and store the \`id\` for the target VPC.
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

Closes a support ticket you have access to modify.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.support.tickets
WHERE ticketId = '{{ ticketId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="upload_attachment"
    values={[
        { label: 'upload_attachment', value: 'upload_attachment' }
    ]}
>
<TabItem value="upload_attachment">

Adds a file attachment to an open support ticket on your account. Use an attachment to help customer support resolve your ticket. The file attachment is submitted in the request as `multipart/form-data` type. Accepted file extensions include: `.gif`, `.jpg`, `.jpeg`, `.pjpg`, `.pjpeg`, `.tif`, `.tiff`, `.png`, `.pdf`, or `.txt`. __OAuth scopes__.<br /><br />    ```<br />    account:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.support.tickets.upload_attachment 
@ticketId='{{ ticketId }}' --required 
@@json=
'{
"file": "{{ file }}"
}'
;
```
</TabItem>
</Tabs>
