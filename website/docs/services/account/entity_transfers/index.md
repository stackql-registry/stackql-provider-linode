--- 
title: entity_transfers
hide_title: false
hide_table_of_contents: false
keywords:
  - entity_transfers
  - account
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

Creates, updates, deletes, gets or lists an <code>entity_transfers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="entity_transfers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.account.entity_transfers" /></td></tr>
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

Returns an Entity Transfer object containing the details of the transfer for the specified token.

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
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>When this transfer was created. (example: 2021-02-11T16:37:03)</td>
</tr>
<tr>
    <td><CopyableCode code="entities" /></td>
    <td><code>object</code></td>
    <td>A collection of the entities to include in this transfer request, separated by type.</td>
</tr>
<tr>
    <td><CopyableCode code="expiry" /></td>
    <td><code>string (date-time)</code></td>
    <td>When this transfer expires. Transfers will automatically expire 24 hours after creation. (example: 2021-02-12T16:37:03)</td>
</tr>
<tr>
    <td><CopyableCode code="is_sender" /></td>
    <td><code>boolean</code></td>
    <td>__Filterable__ If the requesting account created this transfer.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The status of the transfer request:  `accepted`: The transfer has been accepted by another user and is currently in progress. Transfers can take up to 3 hours to complete. `canceled`: The transfer has been canceled by the sender. `completed`: The transfer has completed successfully. `failed`: The transfer has failed after initiation. `pending`: The transfer is ready to be accepted. `stale`: The transfer has exceeded its expiration date. It can no longer be accepted or canceled. (accepted, canceled, completed, failed, pending, stale) (example: pending)</td>
</tr>
<tr>
    <td><CopyableCode code="token" /></td>
    <td><code>string (uuid)</code></td>
    <td>The token used to identify and accept or cancel this transfer. (example: 123E4567-E89B-12D3-A456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>When this transfer was last updated. (example: 2021-02-11T16:37:03)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Returns a paginated list of Entity Transfer objects containing the details of all transfers that have been created and accepted by this account.

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
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>When this transfer was created. (example: 2021-02-11T16:37:03)</td>
</tr>
<tr>
    <td><CopyableCode code="entities" /></td>
    <td><code>object</code></td>
    <td>A collection of the entities to include in this transfer request, separated by type.</td>
</tr>
<tr>
    <td><CopyableCode code="expiry" /></td>
    <td><code>string (date-time)</code></td>
    <td>When this transfer expires. Transfers will automatically expire 24 hours after creation. (example: 2021-02-12T16:37:03)</td>
</tr>
<tr>
    <td><CopyableCode code="is_sender" /></td>
    <td><code>boolean</code></td>
    <td>__Filterable__ If the requesting account created this transfer.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The status of the transfer request:  `accepted`: The transfer has been accepted by another user and is currently in progress. Transfers can take up to 3 hours to complete. `canceled`: The transfer has been canceled by the sender. `completed`: The transfer has completed successfully. `failed`: The transfer has failed after initiation. `pending`: The transfer is ready to be accepted. `stale`: The transfer has exceeded its expiration date. It can no longer be accepted or canceled. (accepted, canceled, completed, failed, pending, stale) (example: pending)</td>
</tr>
<tr>
    <td><CopyableCode code="token" /></td>
    <td><code>string (uuid)</code></td>
    <td>The token used to identify and accept or cancel this transfer. (example: 123E4567-E89B-12D3-A456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>When this transfer was last updated. (example: 2021-02-11T16:37:03)</td>
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
    <td><a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>__Deprecated__ Please run [Get a service transfer request](https://techdocs.akamai.com/linode-api/reference/get-service-transfer). __OAuth scopes__.<br /><br />    ```<br />    account:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>__Deprecated__ Please run [List service transfers](https://techdocs.akamai.com/linode-api/reference/get-service-transfers). __OAuth scopes__.<br /><br />    ```<br />    account:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-entities"><code>entities</code></a></td>
    <td></td>
    <td>__Deprecated__ Please run [Request a service transfer](https://techdocs.akamai.com/linode-api/reference/post-service-transfer). __OAuth scopes__.<br /><br />    ```<br />    account:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>__Deprecated__ Please run [Cancel a service transfer](https://techdocs.akamai.com/linode-api/reference/delete-service-transfer). __OAuth scopes__.<br /><br />    ```<br />    account:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#accept"><CopyableCode code="accept" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>__Deprecated__ Please run [Accept a service transfer](https://techdocs.akamai.com/linode-api/reference/post-accept-service-transfer). __OAuth scopes__.<br /><br />    ```<br />    account:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-token">
    <td><CopyableCode code="token" /></td>
    <td><code>string (uuid)</code></td>
    <td>The UUID of the Entity Transfer. (example: &#123;&#123;token&#125;&#125;)</td>
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

__Deprecated__ Please run [Get a service transfer request](https://techdocs.akamai.com/linode-api/reference/get-service-transfer). __OAuth scopes__.<br /><br />    ```<br />    account:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
created,
entities,
expiry,
is_sender,
status,
token,
updated
FROM linode.account.entity_transfers
WHERE token = '{{ token }}' -- required
;
```
</TabItem>
<TabItem value="list">

__Deprecated__ Please run [List service transfers](https://techdocs.akamai.com/linode-api/reference/get-service-transfers). __OAuth scopes__.<br /><br />    ```<br />    account:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
created,
entities,
expiry,
is_sender,
status,
token,
updated
FROM linode.account.entity_transfers
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

__Deprecated__ Please run [Request a service transfer](https://techdocs.akamai.com/linode-api/reference/post-service-transfer). __OAuth scopes__.<br /><br />    ```<br />    account:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.account.entity_transfers (
entities
)
SELECT 
'{{ entities }}' /* required */
RETURNING
created,
entities,
expiry,
is_sender,
status,
token,
updated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: entity_transfers
  props:
    - name: entities
      description: |
        A collection of the entities to include in this transfer request, separated by type.
      value:
        linodes:
          - {{ linodes }}
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

__Deprecated__ Please run [Cancel a service transfer](https://techdocs.akamai.com/linode-api/reference/delete-service-transfer). __OAuth scopes__.<br /><br />    ```<br />    account:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.account.entity_transfers
WHERE token = '{{ token }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept"
    values={[
        { label: 'accept', value: 'accept' }
    ]}
>
<TabItem value="accept">

__Deprecated__ Please run [Accept a service transfer](https://techdocs.akamai.com/linode-api/reference/post-accept-service-transfer). __OAuth scopes__.<br /><br />    ```<br />    account:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.account.entity_transfers.accept 
@token='{{ token }}' --required
;
```
</TabItem>
</Tabs>
