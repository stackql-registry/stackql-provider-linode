--- 
title: service_transfers
hide_title: false
hide_table_of_contents: false
keywords:
  - service_transfers
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

Creates, updates, deletes, gets or lists a <code>service_transfers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_transfers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.account.service_transfers" /></td></tr>
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

Returns a Service Transfer object containing the details of the transfer for the specified token.

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
    <td>A collection of the services to include in this transfer request, separated by type.</td>
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
    <td>__Filterable__ The status of the transfer request.  `accepted`: The transfer has been accepted by another user and is currently in progress. Transfers can take up to 3 hours to complete.  `canceled`: The transfer has been canceled by the sender.  `completed`: The transfer has completed successfully.  `failed`: The transfer has failed after initiation.  `pending`: The transfer is ready to be accepted.  `stale`: The transfer has exceeded its expiration date. It can no longer be accepted or canceled. (accepted, canceled, completed, failed, pending, stale) (example: pending)</td>
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

Returns a paginated list of Service Transfer objects containing the details of all transfers that have been created and accepted by this account.

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
    <td>A collection of the services to include in this transfer request, separated by type.</td>
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
    <td>__Filterable__ The status of the transfer request.  `accepted`: The transfer has been accepted by another user and is currently in progress. Transfers can take up to 3 hours to complete.  `canceled`: The transfer has been canceled by the sender.  `completed`: The transfer has completed successfully.  `failed`: The transfer has failed after initiation.  `pending`: The transfer is ready to be accepted.  `stale`: The transfer has exceeded its expiration date. It can no longer be accepted or canceled. (accepted, canceled, completed, failed, pending, stale) (example: pending)</td>
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
    <td>Returns the details of the Service Transfer for the provided token.<br /><br />While a transfer is pending, any unrestricted user _of any account_ can access this operation. After a transfer has been accepted, it can only be viewed by unrestricted users of the accounts that created and accepted the transfer. If canceled or expired, only unrestricted users of the account that created the transfer can view it.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Returns a collection of all created and accepted Service Transfers for this account, regardless of the user that created or accepted the transfer.<br /><br />This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-entities"><code>entities</code></a></td>
    <td></td>
    <td>Creates a transfer request for the specified services. A request can contain any of the specified service types and any number of each service type. At this time, only Linodes can be transferred.<br /><br />When created successfully, a confirmation email is sent to the account that created this transfer containing a transfer token and instructions on completing the transfer.<br /><br />When a transfer is [accepted](https://techdocs.akamai.com/linode-api/reference/post-accept-service-transfer), the requested services are moved to the receiving account. Linode services will not experience interruptions due to the transfer process. Backups for Linodes are transferred as well.<br /><br />DNS records that are associated with requested services will not be transferred or updated. Please ensure that associated DNS records have been updated or communicated to the recipient prior to the transfer.<br /><br />A transfer can take up to three hours to complete once accepted. When a transfer is completed, billing for transferred services ends for the sending account and begins for the receiving account.<br /><br />This operation can only be accessed by the unrestricted users of an account.<br /><br />There are several conditions that you need to meet to successfully create a transfer request:<br /><br />1. The account creating the transfer can't have a past due balance or active Terms of Service violation.<br /><br />1. The service needs to be owned by the account that is creating the transfer.<br /><br />1. The service can't be assigned to another Service Transfer that is pending or that's been accepted and is incomplete.<br /><br />1. Linodes can't:<br /><br />    - be assigned to a NodeBalancer, Firewall, VLAN, VPC, or Managed Service.<br /><br />    - have any attached Block Storage Volumes.<br /><br />    - have any shared IP addresses.<br /><br />    - have any assigned /32, /56, /64, or /116 IPv6 ranges.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>Cancels the Service Transfer for the provided token. Once canceled, a transfer cannot be accepted or otherwise acted on in any way. If canceled in error, the transfer must be [created](https://techdocs.akamai.com/linode-api/reference/post-service-transfer) again.<br /><br />When canceled, an email notification for the cancellation is sent to the account that created this transfer. Transfers can not be canceled if they are expired or have been accepted.<br /><br />This operation can only be accessed by the unrestricted users of the account that created this transfer.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#accept"><CopyableCode code="accept" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>Accept a Service Transfer for the provided token to receive the services included in the transfer to your account. At this time, only Linodes can be transferred.<br /><br />When accepted, email confirmations are sent to the accounts that created and accepted the transfer. A transfer can take up to three hours to complete once accepted. Once a transfer is completed, billing for transferred services ends for the sending account and begins for the receiving account.<br /><br />This operation can only be accessed by the unrestricted users of the account that receives the transfer. Users of the same account that created a transfer cannot accept the transfer.<br /><br />There are several conditions that must be met in order to accept a transfer request:<br /><br />1. Only transfers with a `pending` status can be accepted.<br /><br />1. The account accepting the transfer must have a registered payment method and must not have a past due balance or other account limitations for the services to be transferred.<br /><br />1. Both the account that created the transfer and the account that is accepting the transfer must not have any active Terms of Service violations.<br /><br />1. The service must still be owned by the account that created the transfer.<br /><br />1. Linodes must not:<br /><br />    - be assigned to a NodeBalancer, Firewall, VLAN, or Managed Service.<br /><br />    - have any attached Block Storage Volumes.<br /><br />    - have any shared IP addresses.<br /><br />    - have any assigned /56, /64, or /116 IPv6 ranges.<br /><br />Any and all of the above conditions must be cured and maintained by the relevant account prior to the transfer's expiration to allow the transfer to be accepted by the receiving account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
    <td>The UUID of the Service Transfer. (example: &#123;&#123;token&#125;&#125;)</td>
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

Returns the details of the Service Transfer for the provided token.<br /><br />While a transfer is pending, any unrestricted user _of any account_ can access this operation. After a transfer has been accepted, it can only be viewed by unrestricted users of the accounts that created and accepted the transfer. If canceled or expired, only unrestricted users of the account that created the transfer can view it.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
created,
entities,
expiry,
is_sender,
status,
token,
updated
FROM linode.account.service_transfers
WHERE token = '{{ token }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns a collection of all created and accepted Service Transfers for this account, regardless of the user that created or accepted the transfer.<br /><br />This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
created,
entities,
expiry,
is_sender,
status,
token,
updated
FROM linode.account.service_transfers
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

Creates a transfer request for the specified services. A request can contain any of the specified service types and any number of each service type. At this time, only Linodes can be transferred.<br /><br />When created successfully, a confirmation email is sent to the account that created this transfer containing a transfer token and instructions on completing the transfer.<br /><br />When a transfer is [accepted](https://techdocs.akamai.com/linode-api/reference/post-accept-service-transfer), the requested services are moved to the receiving account. Linode services will not experience interruptions due to the transfer process. Backups for Linodes are transferred as well.<br /><br />DNS records that are associated with requested services will not be transferred or updated. Please ensure that associated DNS records have been updated or communicated to the recipient prior to the transfer.<br /><br />A transfer can take up to three hours to complete once accepted. When a transfer is completed, billing for transferred services ends for the sending account and begins for the receiving account.<br /><br />This operation can only be accessed by the unrestricted users of an account.<br /><br />There are several conditions that you need to meet to successfully create a transfer request:<br /><br />1. The account creating the transfer can't have a past due balance or active Terms of Service violation.<br /><br />1. The service needs to be owned by the account that is creating the transfer.<br /><br />1. The service can't be assigned to another Service Transfer that is pending or that's been accepted and is incomplete.<br /><br />1. Linodes can't:<br /><br />    - be assigned to a NodeBalancer, Firewall, VLAN, VPC, or Managed Service.<br /><br />    - have any attached Block Storage Volumes.<br /><br />    - have any shared IP addresses.<br /><br />    - have any assigned /32, /56, /64, or /116 IPv6 ranges.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.account.service_transfers (
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
- name: service_transfers
  props:
    - name: entities
      description: |
        A collection of the services to include in this transfer request, separated by type.
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

Cancels the Service Transfer for the provided token. Once canceled, a transfer cannot be accepted or otherwise acted on in any way. If canceled in error, the transfer must be [created](https://techdocs.akamai.com/linode-api/reference/post-service-transfer) again.<br /><br />When canceled, an email notification for the cancellation is sent to the account that created this transfer. Transfers can not be canceled if they are expired or have been accepted.<br /><br />This operation can only be accessed by the unrestricted users of the account that created this transfer.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.account.service_transfers
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

Accept a Service Transfer for the provided token to receive the services included in the transfer to your account. At this time, only Linodes can be transferred.<br /><br />When accepted, email confirmations are sent to the accounts that created and accepted the transfer. A transfer can take up to three hours to complete once accepted. Once a transfer is completed, billing for transferred services ends for the sending account and begins for the receiving account.<br /><br />This operation can only be accessed by the unrestricted users of the account that receives the transfer. Users of the same account that created a transfer cannot accept the transfer.<br /><br />There are several conditions that must be met in order to accept a transfer request:<br /><br />1. Only transfers with a `pending` status can be accepted.<br /><br />1. The account accepting the transfer must have a registered payment method and must not have a past due balance or other account limitations for the services to be transferred.<br /><br />1. Both the account that created the transfer and the account that is accepting the transfer must not have any active Terms of Service violations.<br /><br />1. The service must still be owned by the account that created the transfer.<br /><br />1. Linodes must not:<br /><br />    - be assigned to a NodeBalancer, Firewall, VLAN, or Managed Service.<br /><br />    - have any attached Block Storage Volumes.<br /><br />    - have any shared IP addresses.<br /><br />    - have any assigned /56, /64, or /116 IPv6 ranges.<br /><br />Any and all of the above conditions must be cured and maintained by the relevant account prior to the transfer's expiration to allow the transfer to be accepted by the receiving account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.account.service_transfers.accept 
@token='{{ token }}' --required
;
```
</TabItem>
</Tabs>
