--- 
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
  - managed
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

Creates, updates, deletes, gets or lists a <code>services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.managed.services" /></td></tr>
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

The requested Managed Service.

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
    <td>__Read-only__ This Service's unique ID.</td>
</tr>
<tr>
    <td><CopyableCode code="address" /></td>
    <td><code>string (url)</code></td>
    <td>The URL at which this Service is monitored. URL parameters such as `?no-cache=1` are preserved. URL fragments/anchors such as `#monitor` are __not__ preserved. (example: https://example.org)</td>
</tr>
<tr>
    <td><CopyableCode code="body" /></td>
    <td><code>string</code></td>
    <td>What to expect to find in the response body for the Service to be considered up. (example: it worked)</td>
</tr>
<tr>
    <td><CopyableCode code="consultation_group" /></td>
    <td><code>string</code></td>
    <td>The group of ManagedContacts who should be notified or consulted with when an Issue is detected. (example: on-call)</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this Managed Service was created. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="credentials" /></td>
    <td><code>array</code></td>
    <td>An array of ManagedCredential IDs that should be used when attempting to resolve issues with this Service.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>The label for this Service. This is for display purposes only. (example: prod-1, pattern: <code>&#91;a-zA-Z0-9-_ \.&#93;&#123;3,64&#125;</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="notes" /></td>
    <td><code>string</code></td>
    <td>Any information relevant to the Service that Linode special forces should know when attempting to resolve Issues. (example: The service name is my-cool-application)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Region in which this Service is located. This is required if address is a private IP, and may not be set otherwise.</td>
</tr>
<tr>
    <td><CopyableCode code="service_type" /></td>
    <td><code>string</code></td>
    <td>How this Service is monitored. (url, tcp) (example: url)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The current status of this Service. (disabled, pending, ok, problem) (example: ok)</td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>integer</code></td>
    <td>How long to wait, in seconds, for a response before considering the Service to be down.</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this Managed Service was last updated. (example: 2018-03-01T00:01:01)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated list of Managed Services.

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
    <td>__Read-only__ This Service's unique ID.</td>
</tr>
<tr>
    <td><CopyableCode code="address" /></td>
    <td><code>string (url)</code></td>
    <td>The URL at which this Service is monitored. URL parameters such as `?no-cache=1` are preserved. URL fragments/anchors such as `#monitor` are __not__ preserved. (example: https://example.org)</td>
</tr>
<tr>
    <td><CopyableCode code="body" /></td>
    <td><code>string</code></td>
    <td>What to expect to find in the response body for the Service to be considered up. (example: it worked)</td>
</tr>
<tr>
    <td><CopyableCode code="consultation_group" /></td>
    <td><code>string</code></td>
    <td>The group of ManagedContacts who should be notified or consulted with when an Issue is detected. (example: on-call)</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this Managed Service was created. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="credentials" /></td>
    <td><code>array</code></td>
    <td>An array of ManagedCredential IDs that should be used when attempting to resolve issues with this Service.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>The label for this Service. This is for display purposes only. (example: prod-1, pattern: <code>&#91;a-zA-Z0-9-_ \.&#93;&#123;3,64&#125;</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="notes" /></td>
    <td><code>string</code></td>
    <td>Any information relevant to the Service that Linode special forces should know when attempting to resolve Issues. (example: The service name is my-cool-application)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Region in which this Service is located. This is required if address is a private IP, and may not be set otherwise.</td>
</tr>
<tr>
    <td><CopyableCode code="service_type" /></td>
    <td><code>string</code></td>
    <td>How this Service is monitored. (url, tcp) (example: url)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The current status of this Service. (disabled, pending, ok, problem) (example: ok)</td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>integer</code></td>
    <td>How long to wait, in seconds, for a response before considering the Service to be down.</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this Managed Service was last updated. (example: 2018-03-01T00:01:01)</td>
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
    <td><a href="#parameter-serviceId"><code>serviceId</code></a></td>
    <td></td>
    <td>Returns the configuration settings for a single service monitor.<br /><br />This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Returns a paginated list of service monitors on your account. These are the services on your Linodes monitored by Linode Managed.<br /><br />This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-label"><code>label</code></a>, <a href="#parameter-service_type"><code>service_type</code></a>, <a href="#parameter-address"><code>address</code></a>, <a href="#parameter-timeout"><code>timeout</code></a></td>
    <td></td>
    <td>Creates a service monitor. Linode Managed monitors this service and alerts Akamai Support when issues are detected.<br /><br />This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-serviceId"><code>serviceId</code></a></td>
    <td></td>
    <td>Updates a service monitor's configuration settings.<br /><br />This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-serviceId"><code>serviceId</code></a></td>
    <td></td>
    <td>Deletes a service monitor, so that the service is no longer monitored by Linode Managed.<br /><br />This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#disable"><CopyableCode code="disable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceId"><code>serviceId</code></a></td>
    <td></td>
    <td>Temporarily disables monitoring of a service on a managed Linode.<br /><br />This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#enable"><CopyableCode code="enable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceId"><code>serviceId</code></a></td>
    <td></td>
    <td>Enables monitoring of a service on a managed Linode.<br /><br />This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-serviceId">
    <td><CopyableCode code="serviceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Managed Service to enable.</td>
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

Returns the configuration settings for a single service monitor.<br /><br />This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
address,
body,
consultation_group,
created,
credentials,
label,
notes,
region,
service_type,
status,
timeout,
updated
FROM linode.managed.services
WHERE serviceId = '{{ serviceId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns a paginated list of service monitors on your account. These are the services on your Linodes monitored by Linode Managed.<br /><br />This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
address,
body,
consultation_group,
created,
credentials,
label,
notes,
region,
service_type,
status,
timeout,
updated
FROM linode.managed.services
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

Creates a service monitor. Linode Managed monitors this service and alerts Akamai Support when issues are detected.<br /><br />This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.managed.services (
address,
body,
consultation_group,
credentials,
label,
notes,
region,
service_type,
timeout
)
SELECT 
'{{ address }}' /* required */,
'{{ body }}',
'{{ consultation_group }}',
'{{ credentials }}',
'{{ label }}' /* required */,
'{{ notes }}',
'{{ region }}',
'{{ service_type }}' /* required */,
{{ timeout }} /* required */
RETURNING
id,
address,
body,
consultation_group,
created,
credentials,
label,
notes,
region,
service_type,
status,
timeout,
updated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: services
  props:
    - name: address
      value: "{{ address }}"
      description: |
        The URL at which this Service is monitored. URL parameters such as \`?no-cache=1\` are preserved. URL fragments/anchors such as \`#monitor\` are __not__ preserved.
    - name: body
      value: "{{ body }}"
      description: |
        What to expect to find in the response body for the Service to be considered up.
    - name: consultation_group
      value: "{{ consultation_group }}"
      description: |
        The group of ManagedContacts who should be notified or consulted with when an Issue is detected.
    - name: credentials
      value:
        - {{ credentials }}
      description: |
        An array of ManagedCredential IDs that should be used when attempting to resolve issues with this Service.
    - name: label
      value: "{{ label }}"
      description: |
        The label for this Service. This is for display purposes only.
    - name: notes
      value: "{{ notes }}"
      description: |
        Any information relevant to the Service that Linode special forces should know when attempting to resolve Issues.
    - name: region
      value: "{{ region }}"
      description: |
        The Region in which this Service is located. This is required if address is a private IP, and may not be set otherwise.
    - name: service_type
      value: "{{ service_type }}"
      description: |
        How this Service is monitored.
      valid_values: ['url', 'tcp']
    - name: timeout
      value: {{ timeout }}
      description: |
        How long to wait, in seconds, for a response before considering the Service to be down.
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

Updates a service monitor's configuration settings.<br /><br />This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.managed.services
SET 
address = '{{ address }}',
body = '{{ body }}',
consultation_group = '{{ consultation_group }}',
credentials = '{{ credentials }}',
label = '{{ label }}',
notes = '{{ notes }}',
region = '{{ region }}',
service_type = '{{ service_type }}',
timeout = {{ timeout }}
WHERE 
serviceId = '{{ serviceId }}' --required
RETURNING
id,
address,
body,
consultation_group,
created,
credentials,
label,
notes,
region,
service_type,
status,
timeout,
updated;
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

Deletes a service monitor, so that the service is no longer monitored by Linode Managed.<br /><br />This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.managed.services
WHERE serviceId = '{{ serviceId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable"
    values={[
        { label: 'disable', value: 'disable' },
        { label: 'enable', value: 'enable' }
    ]}
>
<TabItem value="disable">

Temporarily disables monitoring of a service on a managed Linode.<br /><br />This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.managed.services.disable 
@serviceId='{{ serviceId }}' --required
;
```
</TabItem>
<TabItem value="enable">

Enables monitoring of a service on a managed Linode.<br /><br />This operation can only be accessed by the unrestricted users of an account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.managed.services.enable 
@serviceId='{{ serviceId }}' --required
;
```
</TabItem>
</Tabs>
