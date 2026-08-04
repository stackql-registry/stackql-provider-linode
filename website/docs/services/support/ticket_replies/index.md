--- 
title: ticket_replies
hide_title: false
hide_table_of_contents: false
keywords:
  - ticket_replies
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

Creates, updates, deletes, gets or lists a <code>ticket_replies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ticket_replies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.support.ticket_replies" /></td></tr>
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

Returns a paginated list of support ticket replies.

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
    <td>__Read-only__ The unique ID of this support ticket reply.</td>
</tr>
<tr>
    <td><CopyableCode code="gravatar_id" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The Gravatar ID of the user who created this reply. (example: 474a1b7373ae0be4132649e69c36ce30)</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this ticket reply was created. (example: 2015-06-02T14:31:41)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The user who submitted this reply. (example: John Q. Linode)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The body of this support ticket reply. (example: Hello,\nI'm sorry to hear that you're having trouble resetting the root password of your Linode. Just to be sure, have you tried to follow the instructions here: https://techdocs.akamai.com/cloud-computing/docs/reset-the-root-password-on-a-compute-instance? If you have, please reply with any additional steps you've also taken.\nRegards,\nLinode Support Team)</td>
</tr>
<tr>
    <td><CopyableCode code="from_linode" /></td>
    <td><code>boolean</code></td>
    <td>__Read-only__ If `true`, this reply came from a Linode employee.</td>
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
    <td><a href="#parameter-ticketId"><code>ticketId</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Returns a collection of replies to a support ticket on your account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ticketId"><code>ticketId</code></a>, <a href="#parameter-description"><code>description</code></a></td>
    <td></td>
    <td>Adds a reply to an existing support ticket.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Returns a collection of replies to a support ticket on your account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
gravatar_id,
created,
created_by,
description,
from_linode
FROM linode.support.ticket_replies
WHERE ticketId = '{{ ticketId }}' -- required
AND page = '{{ page }}'
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

Adds a reply to an existing support ticket.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.support.ticket_replies (
description,
ticketId
)
SELECT 
'{{ description }}' /* required */,
'{{ ticketId }}'
RETURNING
id,
gravatar_id,
created,
created_by,
description,
from_linode
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ticket_replies
  props:
    - name: ticketId
      value: "{{ ticketId }}"
      description: Required parameter for the ticket_replies resource.
    - name: description
      value: "{{ description }}"
      description: |
        The content of your reply.
`}</CodeBlock>

</TabItem>
</Tabs>
