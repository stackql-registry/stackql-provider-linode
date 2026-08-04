--- 
title: agreements
hide_title: false
hide_table_of_contents: false
keywords:
  - agreements
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

Creates, updates, deletes, gets or lists an <code>agreements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agreements" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.account.agreements" /></td></tr>
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

The status of each acceptance agreement for your account.

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
    <td><CopyableCode code="billing_agreement" /></td>
    <td><code>boolean</code></td>
    <td>Certain regions require that you share your tax identification number (TIN) with Akamai. When you do, you need to acknowledge Akamai's [privacy statement](https://www.akamai.com/legal/privacy-statement) agreement, in regards to its protection. When set to `true`, you've acknowledged this agreement.</td>
</tr>
<tr>
    <td><CopyableCode code="eu_model" /></td>
    <td><code>boolean</code></td>
    <td>The acknowledgement status for the [cross-border data transfer](https://www.akamai.com/legal/compliance/privacy-trust-center/cross-border-data-transfer-statement) agreement.</td>
</tr>
<tr>
    <td><CopyableCode code="master_service_agreement" /></td>
    <td><code>boolean</code></td>
    <td>The acknowledgement status for Akamai's [master service agreement](https://www.linode.com/legal-msa/).</td>
</tr>
<tr>
    <td><CopyableCode code="privacy_policy" /></td>
    <td><code>boolean</code></td>
    <td>The acknowledgement status for Akamai's [privacy statement](https://www.akamai.com/legal/privacy-statement).</td>
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
    <td></td>
    <td></td>
    <td>Returns all agreements and their acceptance status for your account. __OAuth scopes__.<br /><br />    ```<br />    account:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#acknowledge"><CopyableCode code="acknowledge" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Accept required agreements by setting them to `true`. This remains until the content of the agreement changes. If it does, you need to run this operation again to accept it. If you set this to `false`, the API rejects the request and you need to open a [support ticket](https://techdocs.akamai.com/linode-api/reference/post-ticket) to reset the agreement. Omitted agreements are left unchanged. __OAuth scopes__.<br /><br />    ```<br />    account:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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

Returns all agreements and their acceptance status for your account. __OAuth scopes__.<br /><br />    ```<br />    account:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
billing_agreement,
eu_model,
master_service_agreement,
privacy_policy
FROM linode.account.agreements
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="acknowledge"
    values={[
        { label: 'acknowledge', value: 'acknowledge' }
    ]}
>
<TabItem value="acknowledge">

Accept required agreements by setting them to `true`. This remains until the content of the agreement changes. If it does, you need to run this operation again to accept it. If you set this to `false`, the API rejects the request and you need to open a [support ticket](https://techdocs.akamai.com/linode-api/reference/post-ticket) to reset the agreement. Omitted agreements are left unchanged. __OAuth scopes__.<br /><br />    ```<br />    account:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.account.agreements.acknowledge 
@@json=
'{
"billing_agreement": {{ billing_agreement }}, 
"eu_model": {{ eu_model }}, 
"master_service_agreement": {{ master_service_agreement }}, 
"privacy_policy": {{ privacy_policy }}
}'
;
```
</TabItem>
</Tabs>
