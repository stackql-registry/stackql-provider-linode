--- 
title: beta_programs
hide_title: false
hide_table_of_contents: false
keywords:
  - beta_programs
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

Creates, updates, deletes, gets or lists a <code>beta_programs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="beta_programs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.account.beta_programs" /></td></tr>
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

Returns an enrolled Beta Program object for the Account.

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
    <td><code>string</code></td>
    <td>The unique identifier of the Beta Program. (example: example_open)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ Additional details regarding the Beta Program. (example: This is an open public beta for an example feature.)</td>
</tr>
<tr>
    <td><CopyableCode code="ended" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__, __Read-only__ The date-time that the Beta Program ended.  `null` indicates that the Beta Program is ongoing.</td>
</tr>
<tr>
    <td><CopyableCode code="enrolled" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__, __Read-only__ The date-time of Account enrollment to the Beta Program. (example: 2023-09-11T00:00:00)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ The name of the Beta Program. (example: Example Open Beta)</td>
</tr>
<tr>
    <td><CopyableCode code="started" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__, __Read-only__ The start date-time of the Beta Program. (example: 2023-07-11T00:00:00)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Returns a paginated list of all enrolled Beta Program objects for the Account.

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
    <td><code>string</code></td>
    <td>The unique identifier of the Beta Program. (example: example_open)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ Additional details regarding the Beta Program. (example: This is an open public beta for an example feature.)</td>
</tr>
<tr>
    <td><CopyableCode code="ended" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__, __Read-only__ The date-time that the Beta Program ended.  `null` indicates that the Beta Program is ongoing.</td>
</tr>
<tr>
    <td><CopyableCode code="enrolled" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__, __Read-only__ The date-time of Account enrollment to the Beta Program. (example: 2023-09-11T00:00:00)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ The name of the Beta Program. (example: Example Open Beta)</td>
</tr>
<tr>
    <td><CopyableCode code="started" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__, __Read-only__ The start date-time of the Beta Program. (example: 2023-07-11T00:00:00)</td>
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
    <td><a href="#parameter-betaId"><code>betaId</code></a></td>
    <td></td>
    <td>Display an enrolled Beta Program for your Account. The Beta Program may be inactive.<br /><br />Only unrestricted Users can access this operation.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Display all enrolled Beta Programs for your Account. Includes inactive as well as active Beta Programs.<br /><br />Only unrestricted Users can access this operation.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#enroll"><CopyableCode code="enroll" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Enroll your Account in an active Beta Program.<br /><br />Only unrestricted Users can access this operation.<br /><br />To view active Beta Programs, run the [List beta programs](https://techdocs.akamai.com/linode-api/reference/get-beta-programs) operation.<br /><br />Active Beta Programs may have a limited number of enrollments. If a Beta Program has reached is maximum number of enrollments, an error is returned even though the request is successful.<br /><br />Beta Programs with `"greenlight_only": true` can only be enrolled by Accounts that participate in the [Greenlight](https://www.linode.com/green-light/) program.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-betaId">
    <td><CopyableCode code="betaId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Beta Program. (example: &#123;&#123;betaId&#125;&#125;)</td>
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

Display an enrolled Beta Program for your Account. The Beta Program may be inactive.<br /><br />Only unrestricted Users can access this operation.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
description,
ended,
enrolled,
label,
started
FROM linode.account.beta_programs
WHERE betaId = '{{ betaId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Display all enrolled Beta Programs for your Account. Includes inactive as well as active Beta Programs.<br /><br />Only unrestricted Users can access this operation.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
description,
ended,
enrolled,
label,
started
FROM linode.account.beta_programs
WHERE page = '{{ page }}'
AND page_size = '{{ page_size }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="enroll"
    values={[
        { label: 'enroll', value: 'enroll' }
    ]}
>
<TabItem value="enroll">

Enroll your Account in an active Beta Program.<br /><br />Only unrestricted Users can access this operation.<br /><br />To view active Beta Programs, run the [List beta programs](https://techdocs.akamai.com/linode-api/reference/get-beta-programs) operation.<br /><br />Active Beta Programs may have a limited number of enrollments. If a Beta Program has reached is maximum number of enrollments, an error is returned even though the request is successful.<br /><br />Beta Programs with `"greenlight_only": true` can only be enrolled by Accounts that participate in the [Greenlight](https://www.linode.com/green-light/) program.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.account.beta_programs.enroll 
@@json=
'{
"id": "{{ id }}"
}'
;
```
</TabItem>
</Tabs>
