--- 
title: settings
hide_title: false
hide_table_of_contents: false
keywords:
  - settings
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

Creates, updates, deletes, gets or lists a <code>settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.account.settings" /></td></tr>
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

Returns a single Account settings object.

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
    <td><CopyableCode code="backups_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Account-wide backups default.  If `true`, all Linodes created will automatically be enrolled in the Backups service.  If `false`, Linodes will not be enrolled by default, but may still be enrolled on creation or later.</td>
</tr>
<tr>
    <td><CopyableCode code="interfaces_for_new_linodes" /></td>
    <td><code>string</code></td>
    <td>__Beta__ Defines if new Linodes can use legacy configuration interfaces: - `legacy_config_only`. All new Linodes need to use legacy configuration interfaces. Prevously created Linodes with Linode Interfaces can still exist. Linodes using legacy configuration interfaces can't be upgraded to use Linode Interfaces. - `legacy_config_default_but_linode_allowed`. New Linodes can use legacy configuration interfaces or Linode Interfaces, depending on the `interface_generation` setting specified when creating the Linode. By default, new Linodes use legacy configuration interfaces unless otherwise specified. Linodes that use legacy configuration interfaces can upgrade to Linode Interfaces. This is the default setting for existing accounts. - `linode_default_but_legacy_config_allowed`. New Linodes can use legacy configuration interfaces or Linode Interfaces, depending on the `interface_generation` setting specified when creating the Linode. By default, new Linodes use Linode Interfaces unless otherwise specified. Linodes that use legacy configuration interfaces can upgrade to Linode interfaces. This is the default setting for new accounts. - `linode_only`. All new Linodes need to use Linode Interfaces. Prevously created Linodes with legacy configuration profile interfaces can still exist if they were created under a previous setting. Linodes using legacy configuration interfaces can be upgraded to Linode Interfaces. (legacy_config_only, legacy_config_default_but_linode_allowed, linode_default_but_legacy_config_allowed, linode_only) (example: linode_only)</td>
</tr>
<tr>
    <td><CopyableCode code="longview_subscription" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The Longview Pro tier you are currently subscribed to. The value must be a [Longview subscription](https://techdocs.akamai.com/linode-api/reference/get-longview-subscriptions) ID or `null` for Longview Free. (example: longview-3)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_policy" /></td>
    <td><code>string</code></td>
    <td>__Beta__ Defines the default maintenance policy for new Linodes created on this account. Review [maintenance policy](https://techdocs.akamai.com/cloud-computing/docs/host-maintenance-policy) documentation for more details. (linode/migrate, linode/power_off_on) (example: linode/migrate)</td>
</tr>
<tr>
    <td><CopyableCode code="managed" /></td>
    <td><code>boolean</code></td>
    <td>__Read-only__ Our 24/7 incident response service. This robust, multi-homed monitoring system distributes monitoring checks to ensure that your servers remain online and available at all times. Linode Managed can monitor any service or software stack reachable over TCP or HTTP. Once you add a service to Linode Managed, we'll monitor it for connectivity, response, and total request time.</td>
</tr>
<tr>
    <td><CopyableCode code="network_helper" /></td>
    <td><code>boolean</code></td>
    <td>Enables network helper across all users by default for new Linodes and Linode Configs.</td>
</tr>
<tr>
    <td><CopyableCode code="object_storage" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ A string describing the status of this account's Object Storage service enrollment. (disabled, suspended, active) (default: disabled, example: active)</td>
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
    <td>Returns information related to your Account settings: Managed service subscription, interface settings for new Linodes, Longview subscription, and Network Helper.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td></td>
    <td></td>
    <td>Updates your account settings. For a Longview subscription plan, see [Update a Longview plan](https://techdocs.akamai.com/linode-api/reference/put-longview-plan).<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#enable_managed"><CopyableCode code="enable_managed" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Enables Linode Managed for the entire account and sends a welcome email to the account's associated email address. Linode Managed can monitor any service or software stack reachable over TCP or HTTP. See our [Linode Managed guide](https://www.linode.com/docs/guides/linode-managed/) to learn more.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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

Returns information related to your Account settings: Managed service subscription, interface settings for new Linodes, Longview subscription, and Network Helper.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
backups_enabled,
interfaces_for_new_linodes,
longview_subscription,
maintenance_policy,
managed,
network_helper,
object_storage
FROM linode.account.settings
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

Updates your account settings. For a Longview subscription plan, see [Update a Longview plan](https://techdocs.akamai.com/linode-api/reference/put-longview-plan).<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.account.settings
SET 
backups_enabled = {{ backups_enabled }},
interfaces_for_new_linodes = '{{ interfaces_for_new_linodes }}',
maintenance_policy = '{{ maintenance_policy }}',
network_helper = {{ network_helper }}
RETURNING
backups_enabled,
interfaces_for_new_linodes,
longview_subscription,
maintenance_policy,
managed,
network_helper,
object_storage;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="enable_managed"
    values={[
        { label: 'enable_managed', value: 'enable_managed' }
    ]}
>
<TabItem value="enable_managed">

Enables Linode Managed for the entire account and sends a welcome email to the account's associated email address. Linode Managed can monitor any service or software stack reachable over TCP or HTTP. See our [Linode Managed guide](https://www.linode.com/docs/guides/linode-managed/) to learn more.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.account.settings.enable_managed 

;
```
</TabItem>
</Tabs>
