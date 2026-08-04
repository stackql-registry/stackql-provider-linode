--- 
title: interface_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - interface_settings
  - linode
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

Creates, updates, deletes, gets or lists an <code>interface_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="interface_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.linode.interface_settings" /></td></tr>
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

Returns a single Linode interface settings object.

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
    <td><CopyableCode code="default_route" /></td>
    <td><code>object</code></td>
    <td>Interfaces used for the IPv4 `default_route` and IPv6 `default_route` when multiple interfaces are eligible for the role.</td>
</tr>
<tr>
    <td><CopyableCode code="network_helper" /></td>
    <td><code>boolean</code></td>
    <td>Enables the Network Helper feature. The default value is determined by the `network_helper` setting in the [account settings](https://techdocs.akamai.com/linode-api/reference/get-account-settings). [Power off the Linode](https://techdocs.akamai.com/linode-api/reference/post-shutdown-linode-instance) before disabling or enabling Network Helper.</td>
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
    <td><a href="#parameter-linodeId"><code>linodeId</code></a></td>
    <td></td>
    <td>__Beta__ Lists a Linode's interface settings, including Network Helper and default route settings. This operation is for Linode interfaces, not for legacy configuration profile interfaces.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-linodeId"><code>linodeId</code></a></td>
    <td></td>
    <td>__Beta__ Updates Network Helper and default route settings on the Linode. __CLI: Public interface__.<br /><br />    ```<br />    linode-cli linodes interface-settings-update $linodeId \<br />  --network_helper true \<br />  --default_route.ipv4_interface_id 4527 \<br />  --default_route.ipv6_interface_id 4541 \<br />  --default_route.ipv4_eligible_interface_ids 4527 \<br />  --default_route.ipv4_eligible_interface_ids 4541 \<br />  --default_route.ipv6_eligible_interface_ids 4527 \<br />  --default_route.ipv6_eligible_interface_ids 4541<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />- __CLI: VLAN interface__.<br /><br />    ```<br />    linode-cli linodes interface-settings-update $linodeId \<br />  --network_helper true<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />- __CLI: VPC interface__.<br /><br />    ```<br />    linode-cli linodes interface-settings-update $linodeId \<br />  --network_helper true \<br />  --default_route.ipv4_interface_id 5527 \<br />  --default_route.ipv4_eligible_interface_ids 5527 \<br />  --default_route.ipv4_eligible_interface_ids 5541<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-linodeId">
    <td><CopyableCode code="linodeId" /></td>
    <td><code>string</code></td>
    <td>The `id` of the Linode.</td>
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

__Beta__ Lists a Linode's interface settings, including Network Helper and default route settings. This operation is for Linode interfaces, not for legacy configuration profile interfaces.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
default_route,
network_helper
FROM linode.linode.interface_settings
WHERE linodeId = '{{ linodeId }}' -- required
;
```
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

__Beta__ Updates Network Helper and default route settings on the Linode. __CLI: Public interface__.<br /><br />    ```<br />    linode-cli linodes interface-settings-update $linodeId \<br />  --network_helper true \<br />  --default_route.ipv4_interface_id 4527 \<br />  --default_route.ipv6_interface_id 4541 \<br />  --default_route.ipv4_eligible_interface_ids 4527 \<br />  --default_route.ipv4_eligible_interface_ids 4541 \<br />  --default_route.ipv6_eligible_interface_ids 4527 \<br />  --default_route.ipv6_eligible_interface_ids 4541<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />- __CLI: VLAN interface__.<br /><br />    ```<br />    linode-cli linodes interface-settings-update $linodeId \<br />  --network_helper true<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />- __CLI: VPC interface__.<br /><br />    ```<br />    linode-cli linodes interface-settings-update $linodeId \<br />  --network_helper true \<br />  --default_route.ipv4_interface_id 5527 \<br />  --default_route.ipv4_eligible_interface_ids 5527 \<br />  --default_route.ipv4_eligible_interface_ids 5541<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.linode.interface_settings
SET 
default_route = '{{ default_route }}',
network_helper = {{ network_helper }}
WHERE 
linodeId = '{{ linodeId }}' --required
RETURNING
default_route,
network_helper;
```
</TabItem>
</Tabs>
