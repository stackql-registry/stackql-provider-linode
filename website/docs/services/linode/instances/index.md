--- 
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
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

Creates, updates, deletes, gets or lists an <code>instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.linode.instances" /></td></tr>
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

Returns a single Linode object.

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
    <td>__Filterable__, __Read-only__ This Linode's ID which must be provided for all operations impacting this Linode.</td>
</tr>
<tr>
    <td><CopyableCode code="lke_cluster_id" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ The ID of the Kubernetes cluster if the Linode is part of cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="alerts" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="backups" /></td>
    <td><code>object</code></td>
    <td>Information about this Linode's backups status. For information about available backups, run [List backups](https://techdocs.akamai.com/linode-api/reference/get-backups).</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>array</code></td>
    <td>__Limited availability__, __Read-only__ A list of capabilities this compute instance supports.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this Linode was created. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="disk_encryption" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ Indicates the local disk encryption setting for this Linode. If the Linode is part of an LKE cluster, the value is `null`. (enabled, disabled) (default: enabled, example: disabled)</td>
</tr>
<tr>
    <td><CopyableCode code="group" /></td>
    <td><code>string</code></td>
    <td>__Deprecated__, __Filterable__ The group label for this Linode. (example: Linode-Group)</td>
</tr>
<tr>
    <td><CopyableCode code="has_user_data" /></td>
    <td><code>boolean</code></td>
    <td>__Read-only__ Whether this compute instance was provisioned with `user_data` provided via the Metadata service. See the [Create a Linode](https://techdocs.akamai.com/linode-api/reference/post-linode-instance) description for more information on Metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="host_uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>__Read-only__ The Linode's host machine, as a UUID. (example: 1a2bcd34e5f67gh8ij901234567kl89mn01opqr2)</td>
</tr>
<tr>
    <td><CopyableCode code="hypervisor" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The virtualization software powering this Linode. (kvm) (example: kvm)</td>
</tr>
<tr>
    <td><CopyableCode code="image" /></td>
    <td><code>string</code></td>
    <td>An Image ID to deploy the Linode Disk from.  Run the [List images](https://techdocs.akamai.com/linode-api/reference/get-images) operation with authentication to view all available Images. Official Linode Images start with `linode/`, while your Account's Images start with `private/`. Creating a disk from a Private Image requires `read_only` or `read_write` permissions for that Image. Run the [Update a user's grants](https://techdocs.akamai.com/linode-api/reference/put-user-grants) operation to adjust permissions for an Account Image. (example: linode/debian10)</td>
</tr>
<tr>
    <td><CopyableCode code="interface_generation" /></td>
    <td><code>string</code></td>
    <td>__Beta__ Indicates if the Linode is configured to use Linode interfaces (`linode`) or legacy configuration profile interfaces (`legacy_config`). (legacy_config, linode) (example: linode)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv4" /></td>
    <td><code>array (ipv4)</code></td>
    <td>__Filterable__, __Read-only__ This Linode's IPv4 Addresses. Each Linode is assigned a single public IPv4 address upon creation, and may get a single private IPv4 address if needed. You may need to [Open a support ticket](https://techdocs.akamai.com/linode-api/reference/post-ticket) to get additional IPv4 addresses.  IPv4 addresses may be reassigned between your Linodes, or shared with other Linodes. See the [networking](https://techdocs.akamai.com/linode-api/reference/post-firewalls) operations for details.</td>
</tr>
<tr>
    <td><CopyableCode code="ipv6" /></td>
    <td><code>string (ipv6/128)</code></td>
    <td>__Read-only__ This Linode's IPv6 SLAAC address. This address is specific to a Linode, and may not be shared. If the Linode has not been assigned an IPv6 address, the return value will be `null`. (example: c001:d00d::1337/128)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ Provides a name for the Linode. If not provided, the API generates one for it.  Linode labels have the following constraints:  - It needs to begin and end with an alphanumeric character. - It can only consist of alphanumeric characters, hyphens (`-`), underscores (`_`) or periods (`.`). - Cannot have two hyphens (`--`), underscores (`__`) or periods (`..`) in a row. (example: linode123, pattern: <code>^&#91;a-zA-Z&#93;((?!--|__|\.\.)&#91;a-zA-Z0-9-_.&#93;)+$</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_policy" /></td>
    <td><code>string</code></td>
    <td>__Beta__, __Read-only__ The maintenance policy configured by the user for this Linode. Review [maintenance policy](https://techdocs.akamai.com/cloud-computing/docs/host-maintenance-policy) documentation for more details. (linode/migrate, linode/power_off_on) (example: linode/migrate)</td>
</tr>
<tr>
    <td><CopyableCode code="placement_group" /></td>
    <td><code>object</code></td>
    <td>__Read-only__ Details on the [placement group](https://www.linode.com/docs/products/compute/compute-instances/guides/placement-groups/) that this Linode belongs to. Empty if the Linode isn't in a placement group.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ The [region](https://techdocs.akamai.com/linode-api/reference/get-regions) where the Linode deployed. A Linode's region can only be changed by initiating a [cross data center migration](https://techdocs.akamai.com/linode-api/reference/post-migrate-linode-instance). (example: us-east)</td>
</tr>
<tr>
    <td><CopyableCode code="specs" /></td>
    <td><code>object</code></td>
    <td>__Read-only__ Information about the resources available to this Linode.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ A brief description of the compute instance's current state. This value can change without direct action from you. For example, when a compute instance goes into maintenance mode, its status is `stopped`. Status is generally self-explanatory, based on its name.  - `busy` indicates you've assigned the compute instance to a [placement group](https://techdocs.akamai.com/cloud-computing/docs/work-with-placement-groups), but the compute instance is currently booting. Once the boot completes, the API completes the assignment and updates the compute instance's `status` accordingly. - `provisioning` indicates that the API is applying operating system or Marketplace applications on the compute instance. - `billing_suspension` indicates that payment is past due on the compute instance, so we've suspended its use. (running, offline, booting, busy, rebooting, shutting_down, provisioning, deleting, migrating, rebuilding, cloning, restoring, stopped, billing_suspension) (example: running)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>__Filterable__ Tags to help you organize your content.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ This is the [Linode type](https://techdocs.akamai.com/linode-api/reference/get-linode-types) that this Linode was deployed with. To change a Linode's type, use [Resize a Linode](https://techdocs.akamai.com/linode-api/reference/post-resize-linode-instance). (example: g6-standard-1)</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this Linode was last updated. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="watchdog_enabled" /></td>
    <td><code>boolean</code></td>
    <td>The watchdog, named Lassie, is a Shutdown Watchdog that monitors your Linode and reboots it if it powers off unexpectedly. It works by issuing a boot job when your Linode powers off without a shutdown job being responsible. To prevent a loop, Lassie gives up if there have been more than 5 boot jobs issued within 15 minutes.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Returns an array of all Linodes on your Account.

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
    <td>__Filterable__, __Read-only__ This Linode's ID which must be provided for all operations impacting this Linode.</td>
</tr>
<tr>
    <td><CopyableCode code="lke_cluster_id" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ The ID of the Kubernetes cluster if the Linode is part of cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="alerts" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="backups" /></td>
    <td><code>object</code></td>
    <td>Information about this Linode's backups status. For information about available backups, run [List backups](https://techdocs.akamai.com/linode-api/reference/get-backups).</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>array</code></td>
    <td>__Limited availability__, __Read-only__ A list of capabilities this compute instance supports.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this Linode was created. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="disk_encryption" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ Indicates the local disk encryption setting for this Linode. If the Linode is part of an LKE cluster, the value is `null`. (enabled, disabled) (default: enabled, example: disabled)</td>
</tr>
<tr>
    <td><CopyableCode code="group" /></td>
    <td><code>string</code></td>
    <td>__Deprecated__, __Filterable__ The group label for this Linode. (example: Linode-Group)</td>
</tr>
<tr>
    <td><CopyableCode code="has_user_data" /></td>
    <td><code>boolean</code></td>
    <td>__Read-only__ Whether this compute instance was provisioned with `user_data` provided via the Metadata service. See the [Create a Linode](https://techdocs.akamai.com/linode-api/reference/post-linode-instance) description for more information on Metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="host_uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>__Read-only__ The Linode's host machine, as a UUID. (example: 1a2bcd34e5f67gh8ij901234567kl89mn01opqr2)</td>
</tr>
<tr>
    <td><CopyableCode code="hypervisor" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The virtualization software powering this Linode. (kvm) (example: kvm)</td>
</tr>
<tr>
    <td><CopyableCode code="image" /></td>
    <td><code>string</code></td>
    <td>An Image ID to deploy the Linode Disk from.  Run the [List images](https://techdocs.akamai.com/linode-api/reference/get-images) operation with authentication to view all available Images. Official Linode Images start with `linode/`, while your Account's Images start with `private/`. Creating a disk from a Private Image requires `read_only` or `read_write` permissions for that Image. Run the [Update a user's grants](https://techdocs.akamai.com/linode-api/reference/put-user-grants) operation to adjust permissions for an Account Image. (example: linode/debian10)</td>
</tr>
<tr>
    <td><CopyableCode code="interface_generation" /></td>
    <td><code>string</code></td>
    <td>__Beta__ Indicates if the Linode is configured to use Linode interfaces (`linode`) or legacy configuration profile interfaces (`legacy_config`). (legacy_config, linode) (example: linode)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv4" /></td>
    <td><code>array (ipv4)</code></td>
    <td>__Filterable__, __Read-only__ This Linode's IPv4 Addresses. Each Linode is assigned a single public IPv4 address upon creation, and may get a single private IPv4 address if needed. You may need to [Open a support ticket](https://techdocs.akamai.com/linode-api/reference/post-ticket) to get additional IPv4 addresses.  IPv4 addresses may be reassigned between your Linodes, or shared with other Linodes. See the [networking](https://techdocs.akamai.com/linode-api/reference/post-firewalls) operations for details.</td>
</tr>
<tr>
    <td><CopyableCode code="ipv6" /></td>
    <td><code>string (ipv6/128)</code></td>
    <td>__Read-only__ This Linode's IPv6 SLAAC address. This address is specific to a Linode, and may not be shared. If the Linode has not been assigned an IPv6 address, the return value will be `null`. (example: c001:d00d::1337/128)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ Provides a name for the Linode. If not provided, the API generates one for it.  Linode labels have the following constraints:  - It needs to begin and end with an alphanumeric character. - It can only consist of alphanumeric characters, hyphens (`-`), underscores (`_`) or periods (`.`). - Cannot have two hyphens (`--`), underscores (`__`) or periods (`..`) in a row. (example: linode123, pattern: <code>^&#91;a-zA-Z&#93;((?!--|__|\.\.)&#91;a-zA-Z0-9-_.&#93;)+$</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_policy" /></td>
    <td><code>string</code></td>
    <td>__Beta__, __Read-only__ The maintenance policy configured by the user for this Linode. Review [maintenance policy](https://techdocs.akamai.com/cloud-computing/docs/host-maintenance-policy) documentation for more details. (linode/migrate, linode/power_off_on) (example: linode/migrate)</td>
</tr>
<tr>
    <td><CopyableCode code="placement_group" /></td>
    <td><code>object</code></td>
    <td>__Read-only__ Details on the [placement group](https://www.linode.com/docs/products/compute/compute-instances/guides/placement-groups/) that this Linode belongs to. Empty if the Linode isn't in a placement group.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ The [region](https://techdocs.akamai.com/linode-api/reference/get-regions) where the Linode deployed. A Linode's region can only be changed by initiating a [cross data center migration](https://techdocs.akamai.com/linode-api/reference/post-migrate-linode-instance). (example: us-east)</td>
</tr>
<tr>
    <td><CopyableCode code="specs" /></td>
    <td><code>object</code></td>
    <td>__Read-only__ Information about the resources available to this Linode.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ A brief description of the compute instance's current state. This value can change without direct action from you. For example, when a compute instance goes into maintenance mode, its status is `stopped`. Status is generally self-explanatory, based on its name.  - `busy` indicates you've assigned the compute instance to a [placement group](https://techdocs.akamai.com/cloud-computing/docs/work-with-placement-groups), but the compute instance is currently booting. Once the boot completes, the API completes the assignment and updates the compute instance's `status` accordingly. - `provisioning` indicates that the API is applying operating system or Marketplace applications on the compute instance. - `billing_suspension` indicates that payment is past due on the compute instance, so we've suspended its use. (running, offline, booting, busy, rebooting, shutting_down, provisioning, deleting, migrating, rebuilding, cloning, restoring, stopped, billing_suspension) (example: running)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>__Filterable__ Tags to help you organize your content.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ This is the [Linode type](https://techdocs.akamai.com/linode-api/reference/get-linode-types) that this Linode was deployed with. To change a Linode's type, use [Resize a Linode](https://techdocs.akamai.com/linode-api/reference/post-resize-linode-instance). (example: g6-standard-1)</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this Linode was last updated. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="watchdog_enabled" /></td>
    <td><code>boolean</code></td>
    <td>The watchdog, named Lassie, is a Shutdown Watchdog that monitors your Linode and reboots it if it powers off unexpectedly. It works by issuing a boot job when your Linode powers off without a shutdown job being responsible. To prevent a loop, Lassie gives up if there have been more than 5 boot jobs issued within 15 minutes.</td>
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
    <td>Get a specific Linode by ID.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-X-Filter"><code>X-Filter</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Returns a paginated list of Linodes you have permission to view.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-type"><code>type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a Linode Instance on your Account. In order for this request to complete successfully, your User must have the `add_linodes` grant. Creating a new Linode will incur a charge on your Account.<br /><br />Linodes can be created using one of the available Types. Run [List Linode types](https://techdocs.akamai.com/linode-api/reference/get-linode-types) to get more information about each Type's specs and cost.<br /><br />Linodes can be created in any one of our available Regions, which are accessible from the [List regions](https://techdocs.akamai.com/linode-api/reference/get-regions) operation.<br /><br />In an effort to fight spam, Linode restricts outbound connections on ports 25, 465, and 587 on all Linodes for new accounts created after November 5th, 2019. For more information, see our guide on [Running a Mail Server](https://www.linode.com/docs/guides/running-a-mail-server/).<br /><br />__Important__. You must be an unrestricted User in order to add or modify tags on Linodes.<br /><br />Linodes can be created in a number of ways:<br /><br />- Using a Linode Public Image distribution or a Private Image you created based on another Linode.<br /><br />  - Run the [List images](https://techdocs.akamai.com/linode-api/reference/get-images) operation with authentication to view all available Images.<br /><br />  - The Linode will be `running` after it completes `provisioning`.<br />  - A default config with two Disks, one being a 512 swap disk, is created.<br />    - `swap_size` can be used to customize the swap disk size.<br />  - Requires a `root_pass` be supplied to use for the root User's Account.<br />  - It is recommended to supply SSH keys for the root User using the `authorized_keys` field.<br />  - You may also supply a list of usernames via the `authorized_users` field.<br />    - These users must have an SSH Key associated with your Profile first. See the [Add an SSH key](https://techdocs.akamai.com/linode-api/reference/post-add-ssh-key)) operation for more information.<br /><br />- Using cloud-init with [Metadata](https://www.linode.com/docs/products/compute/compute-instances/guides/metadata/).<br />  - Automate system configuration and software installation by providing a base-64 encoded [cloud-config](https://www.linode.com/docs/products/compute/compute-instances/guides/metadata-cloud-config/) file.<br />  - Requires a compatible Image. You can determine compatible Images by checking for `cloud-init` under `capabilities` when running [List images](https://techdocs.akamai.com/linode-api/reference/get-images).<br />  - Requires a compatible Region.  You can determine compatible Regions by checking for `Metadata` under `capabilities` when running [List regions](https://techdocs.akamai.com/linode-api/reference/get-regions).<br /><br />- Using a StackScript.<br /><br />  - Run [List StackScripts](https://techdocs.akamai.com/linode-api/reference/get-stack-scripts) for a list of available StackScripts.<br />  - The Linode will be `running` after it completes `provisioning`.<br />  - Requires a compatible Image to be supplied.<br />    - Run [Get a StackScript](https://techdocs.akamai.com/linode-api/reference/get-stack-script) for compatible Images.<br />  - Requires a `root_pass` be supplied to use for the root User's Account.<br />  - It is recommended to supply SSH keys for the root User using the `authorized_keys` field.<br />  - You may also supply a list of usernames via the `authorized_users` field.<br />    - These users must have an SSH Key associated with your Profile first. See [Add an SSH key](https://techdocs.akamai.com/linode-api/reference/post-add-ssh-key) for more information.<br /><br />- Using one of your other Linode's backups.<br />  - You must create a Linode large enough to accommodate the Backup's size.<br />  - The Disks and Config will match that of the Linode that was backed up.<br />  - The `root_pass` will match that of the Linode that was backed up.<br /><br />- Attached to a private VLAN.<br />  - Review the `interfaces` property of the [Request Body Schema](https://techdocs.akamai.com/linode-api/reference/post-linode-instance) for details.<br />  - For more information, see our guide on [Getting Started with VLANs](https://www.linode.com/docs/products/networking/vlans/get-started/).<br /><br />- Create an empty Linode.<br />  - The Linode will remain `offline` and must be manually started.<br />    - Run [Boot a Linode](https://techdocs.akamai.com/linode-api/reference/post-boot-linode-instance).<br />  - Disks and Configs must be created manually.<br />  - This is only recommended for advanced use cases.<br /><br />Depending on your [account settings](https://techdocs.akamai.com/linode-api/reference/get-account-settings), you can choose between legacy configuration interfaces or Linode interfaces when creating a Linode. Only one type of interface is allowed per Linode. The `interface_generation` field lets you select one interface type for new Linodes when both legacy and Linode interfaces options are available on your account. If a Linode is configured with a Linode interface, legacy configuration interfaces can no longer be used on that Linode.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-linodeId"><code>linodeId</code></a></td>
    <td></td>
    <td>Updates a Linode that you have permission to `read_write`. Only unrestricted users can add or modify tags on Linodes.<br />&lt;&lt;LB&gt;&gt;<br /><br />&gt; 🚧<br />&gt;<br />&gt; All tags for the instance are overwritten if `tags` are included in the request.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-linodeId"><code>linodeId</code></a></td>
    <td></td>
    <td>Deletes a Linode you have permission to `read_write`.<br /><br />__Deleting a Linode is a destructive action and cannot be undone.__<br /><br />Additionally, deleting a Linode:<br /><br />  - Gives up any IP addresses the Linode was assigned.<br />  - Deletes all Disks, Backups, Configs, etc.<br />  - Detaches any Volumes associated with the Linode.<br />  - Stops billing for the Linode and its associated services. You will be billed for time used within the billing period the Linode was active.<br /><br />Linodes that are in the process of [cloning](https://techdocs.akamai.com/linode-api/reference/post-clone-linode-instance) or [backup restoration](https://techdocs.akamai.com/linode-api/reference/post-restore-backup) cannot be deleted.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#boot"><CopyableCode code="boot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-linodeId"><code>linodeId</code></a></td>
    <td></td>
    <td>Boots a Linode you have permission to modify.<br /><br />If the Linode is using config profiles, and no parameters are given, a config profile is chosen for this boot based on the following criteria:<br />- If there is only one config profile for this Linode, it will be used.<br />- If there is more than one config profile, the last booted config will be used.<br />- If there is more than one config profile and none were the last to be booted (because the Linode was never booted or the last booted config was deleted) an error will be returned.<br /><br />If the Linode is using Linode interfaces, where `interface_generation` is set as `linode`, an error is returned if the Linode has to boot without any interface defined.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#clone"><CopyableCode code="clone" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-linodeId"><code>linodeId</code></a></td>
    <td></td>
    <td>You can clone your Linode's existing disks, configuration profiles and interfaces to another Linode on your account. In order for this request to complete successfully, you need the `add_linodes` grant.<br /><br />For Linodes using Linode interfaces, the clone needs to be located in a region that supports Linode interfaces (see [GET a region](https://techdocs.akamai.com/linode-api/reference/get-region)). The [account settings](https://techdocs.akamai.com/linode-api/reference/get-account-settings) need to allow creation of Linodes with Linode interfaces.<br /><br />Cloning to a new Linode incurs a charge on your account.<br /><br />If cloning to an existing Linode, any actions currently running or queued must be completed first before you can clone to it.<br /><br />Up to five clone operations from any given source Linode can be run concurrently. If more concurrent clones are attempted, an HTTP 400 error will be returned by this operation.<br /><br />Any [tags](https://techdocs.akamai.com/linode-api/reference/get-tags) existing on the source Linode will be cloned to the target Linode.<br /><br />Linodes utilizing Metadata (`"has_user_data": true`) must be cloned to a new Linode with `metadata.user_data` included with the clone request.<br /><br />`vpc` details<br /><br />- If the Linode you're cloning has a `vpc` interface on its active legacy configuration profile that includes a 1:1 NAT, the resulting clone is configured with an `any` 1:1 NAT.<br />- See the [VPC documentation](https://www.linode.com/docs/products/networking/vpc/#technical-specifications) guide for its specifications and limitations.<br /><br />`vlan` details<br /><br />- Only Next Generation Network (NGN) data centers support VLANs. If a VLAN is attached to your Linode and you attempt clone it to a non-NGN data center, the cloning will not initiate. If a Linode cannot be cloned because of an incompatibility, you will be prompted to select a different data center or contact support.<br />- See the [VLANs Overview](https://www.linode.com/docs/products/networking/vlans/#technical-specifications) guide to view additional specifications and limitations.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#migrate"><CopyableCode code="migrate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-linodeId"><code>linodeId</code></a></td>
    <td></td>
    <td>Initiate a pending host migration that has been scheduled by Linode or initiate a cross data center (DC) migration.  A list of pending migrations, if any, can be accessed from [List notifications](https://techdocs.akamai.com/linode-api/reference/get-notifications). When the migration begins, your Linode will be shutdown if not already off. If the migration initiated the shutdown, it will reboot the Linode when completed.<br /><br />To initiate a cross DC migration, you must pass a `region` parameter to the request body specifying the target data center region. You can view a list of all available regions and their feature capabilities from [List regions](https://techdocs.akamai.com/linode-api/reference/get-regions). See our [Pricing Page](https://www.linode.com/pricing/) for Region-specific pricing, which applies after migration is complete. If your Linode has a DC migration already queued or you have initiated a previously scheduled migration, you will not be able to initiate a DC migration until it has completed.<br /><br />`vpc` details<br /><br />- Cross DC migrations don't work for Linodes that have a `vpc` purpose legacy configuration interface or a VPC Linode interface. They work for host migrations within the same DC.<br />- See the [VPC documentation](https://www.linode.com/docs/products/networking/vpc/#technical-specifications) guide for its specifications and limitations.<br /><br />`vlan` details:<br /><br />- Only Next Generation Network (NGN) data centers support VLANs. Run the [List regions](https://techdocs.akamai.com/linode-api/reference/get-regions) operation to view the capabilities of data center regions. If a VLAN is attached to your Linode and you attempt to migrate or clone it to a non-NGN data center, the migration or cloning will not initiate. If a Linode cannot be migrated or cloned because of an incompatibility, you will be prompted to select a different data center or contact support.<br />- Next Generation Network (NGN) data centers do not support IPv6 `/116` pools or IP Failover. If you have these features enabled on your Linode and attempt to migrate to an NGN data center, the migration will not initiate. If a Linode cannot be migrated because of an incompatibility, you will be prompted to select a different data center or contact support.<br />- See the [VLANs Overview](https://www.linode.com/docs/products/networking/vlans/#technical-specifications) guide to view additional specifications and limitations.<br /><br />`public` details:<br /><br />- If the Linode is using Linode interfaces, the destination region needs to also support Linode interfaces.<br />- After migrating to a different data center, Linode public interfaces retain the same number of IP addresses, but the IP addresses themselves change.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#mutate"><CopyableCode code="mutate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-linodeId"><code>linodeId</code></a></td>
    <td></td>
    <td>Linodes created with now-deprecated Types are entitled to a free upgrade to the next generation. A mutating Linode will be allocated any new resources the upgraded Type provides, and will be subsequently restarted if it was currently running. If any actions are currently running or queued, those actions must be completed first before you can initiate a mutate.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#reset_password"><CopyableCode code="reset_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-linodeId"><code>linodeId</code></a>, <a href="#parameter-root_pass"><code>root_pass</code></a></td>
    <td></td>
    <td>Resets the root password for this Linode.<br /><br />- Your Linode must be [shut down](https://techdocs.akamai.com/linode-api/reference/post-shutdown-linode-instance) for a password reset to complete.<br />- If your Linode has more than one disk (not counting its swap disk), run the [Reset a disk root password](https://techdocs.akamai.com/linode-api/reference/post-reset-disk-password) operation to update a specific disk's root password.<br />- A `password_reset` event is generated when a root password reset is successful.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#reboot"><CopyableCode code="reboot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-linodeId"><code>linodeId</code></a></td>
    <td></td>
    <td>Reboots a Linode you have permission to modify. If any actions are currently running or queued, those actions must be completed first before you can initiate a reboot.<br /><br />If the Linode is using Linode interfaces, where `interface_generation` is set as `linode`, an error is returned if the Linode has to reboot without any interface defined.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#rebuild"><CopyableCode code="rebuild" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-linodeId"><code>linodeId</code></a>, <a href="#parameter-image"><code>image</code></a>, <a href="#parameter-root_pass"><code>root_pass</code></a></td>
    <td></td>
    <td>Rebuilds a Linode you have the `read_write` permission to modify.<br /><br />A rebuild first shuts down the Linode, deletes all disks and configuration profiles on the Linode, then deploys a new `image` to the Linode with the given attributes. Additionally:<br /><br />  - Requires an `image` be supplied.<br />  - Requires a `root_pass` be supplied to use for the root User's Account.<br />  - It is recommended to supply SSH keys for the root User using the `authorized_keys` field.<br />  - Linodes utilizing Metadata (`"has_user_data": true`) should include `metadata.user_data` in the rebuild request to continue using the service.<br /><br />Linode interfaces don't change during a rebuild.<br /><br />During a rebuild, you can `enable` or `disable` local disk encryption. If disk encryption is not included in the request, the previous `disk_encryption` value is used. Disk encryption cannot be disabled if the compute instance is attached to a LKE nodepool.<br /><br />You also have the option to resize the Linode to a different plan by including the `type` parameter with your request. Note that resizing involves migrating the Linode to a new hardware host, while rebuilding without resizing maintains the same hardware host. Resizing also requires significantly more time for completion of this operation. The following additional conditions apply:<br /><br />  - The Linode must not have a pending migration.<br />  - Your Account cannot have an outstanding balance.<br />  - The Linode must not have more disk allocation than the new Type allows.<br />    - In that situation, you must first delete or resize the disk to be smaller.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#rescue"><CopyableCode code="rescue" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-linodeId"><code>linodeId</code></a></td>
    <td></td>
    <td>Rescue Mode is a safe environment for performing many system recovery and disk management tasks. Rescue Mode is based on the Finnix recovery distribution, a self-contained and bootable Linux distribution. You can also use Rescue Mode for tasks other than disaster recovery, such as formatting disks to use different filesystems, copying data between disks, and downloading files from a disk via SSH and SFTP.<br /><br />Linodes with legacy configuration interfaces receive a public IP and boot into the recovery Linux distribution. Linodes with Linode interfaces still boot into recovery mode with the recovery Linux distribution, but they retain their original network interfaces and settings from before entering rescue mode.<br /><br />- Note that `sdh` is reserved and unavailable during rescue.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#resize"><CopyableCode code="resize" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-linodeId"><code>linodeId</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Resizes a Linode you have the `read_write` permission to a different Type. If any actions are currently running or queued, those actions must be completed first before you can initiate a resize. Additionally, the following criteria must be met in order to resize a Linode:<br /><br />  - The Linode must not have a pending migration.<br />  - Your Account cannot have an outstanding balance.<br />  - The Linode must not have more disk allocation than the new Type allows.<br />    - In that situation, you must first delete or resize the disk to be smaller.<br /><br />You can also resize a Linode when using the [Rebuild a Linode](https://techdocs.akamai.com/linode-api/reference/post-rebuild-linode-instance) operation.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#shutdown"><CopyableCode code="shutdown" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-linodeId"><code>linodeId</code></a></td>
    <td></td>
    <td>Shuts down a Linode you have permission to modify. If any actions are currently running or queued, those actions must be completed first before you can initiate a shutdown.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
    <td>ID of the Linode to shutdown.</td>
</tr>
<tr id="parameter-X-Filter">
    <td><CopyableCode code="X-Filter" /></td>
    <td><code></code></td>
    <td>Specifies a JSON object to filter down the results. See [Filtering and sorting](https://techdocs.akamai.com/linode-api/reference/filtering-and-sorting) for details. (example: &#123;&#123;X-Filter&#125;&#125;)</td>
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

Get a specific Linode by ID.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
lke_cluster_id,
alerts,
backups,
capabilities,
created,
disk_encryption,
group,
has_user_data,
host_uuid,
hypervisor,
image,
interface_generation,
ipv4,
ipv6,
label,
maintenance_policy,
placement_group,
region,
specs,
status,
tags,
type,
updated,
watchdog_enabled
FROM linode.linode.instances
WHERE linodeId = '{{ linodeId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns a paginated list of Linodes you have permission to view.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
lke_cluster_id,
alerts,
backups,
capabilities,
created,
disk_encryption,
group,
has_user_data,
host_uuid,
hypervisor,
image,
interface_generation,
ipv4,
ipv6,
label,
maintenance_policy,
placement_group,
region,
specs,
status,
tags,
type,
updated,
watchdog_enabled
FROM linode.linode.instances
WHERE X-Filter = '{{ X-Filter }}'
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

Creates a Linode Instance on your Account. In order for this request to complete successfully, your User must have the `add_linodes` grant. Creating a new Linode will incur a charge on your Account.<br /><br />Linodes can be created using one of the available Types. Run [List Linode types](https://techdocs.akamai.com/linode-api/reference/get-linode-types) to get more information about each Type's specs and cost.<br /><br />Linodes can be created in any one of our available Regions, which are accessible from the [List regions](https://techdocs.akamai.com/linode-api/reference/get-regions) operation.<br /><br />In an effort to fight spam, Linode restricts outbound connections on ports 25, 465, and 587 on all Linodes for new accounts created after November 5th, 2019. For more information, see our guide on [Running a Mail Server](https://www.linode.com/docs/guides/running-a-mail-server/).<br /><br />__Important__. You must be an unrestricted User in order to add or modify tags on Linodes.<br /><br />Linodes can be created in a number of ways:<br /><br />- Using a Linode Public Image distribution or a Private Image you created based on another Linode.<br /><br />  - Run the [List images](https://techdocs.akamai.com/linode-api/reference/get-images) operation with authentication to view all available Images.<br /><br />  - The Linode will be `running` after it completes `provisioning`.<br />  - A default config with two Disks, one being a 512 swap disk, is created.<br />    - `swap_size` can be used to customize the swap disk size.<br />  - Requires a `root_pass` be supplied to use for the root User's Account.<br />  - It is recommended to supply SSH keys for the root User using the `authorized_keys` field.<br />  - You may also supply a list of usernames via the `authorized_users` field.<br />    - These users must have an SSH Key associated with your Profile first. See the [Add an SSH key](https://techdocs.akamai.com/linode-api/reference/post-add-ssh-key)) operation for more information.<br /><br />- Using cloud-init with [Metadata](https://www.linode.com/docs/products/compute/compute-instances/guides/metadata/).<br />  - Automate system configuration and software installation by providing a base-64 encoded [cloud-config](https://www.linode.com/docs/products/compute/compute-instances/guides/metadata-cloud-config/) file.<br />  - Requires a compatible Image. You can determine compatible Images by checking for `cloud-init` under `capabilities` when running [List images](https://techdocs.akamai.com/linode-api/reference/get-images).<br />  - Requires a compatible Region.  You can determine compatible Regions by checking for `Metadata` under `capabilities` when running [List regions](https://techdocs.akamai.com/linode-api/reference/get-regions).<br /><br />- Using a StackScript.<br /><br />  - Run [List StackScripts](https://techdocs.akamai.com/linode-api/reference/get-stack-scripts) for a list of available StackScripts.<br />  - The Linode will be `running` after it completes `provisioning`.<br />  - Requires a compatible Image to be supplied.<br />    - Run [Get a StackScript](https://techdocs.akamai.com/linode-api/reference/get-stack-script) for compatible Images.<br />  - Requires a `root_pass` be supplied to use for the root User's Account.<br />  - It is recommended to supply SSH keys for the root User using the `authorized_keys` field.<br />  - You may also supply a list of usernames via the `authorized_users` field.<br />    - These users must have an SSH Key associated with your Profile first. See [Add an SSH key](https://techdocs.akamai.com/linode-api/reference/post-add-ssh-key) for more information.<br /><br />- Using one of your other Linode's backups.<br />  - You must create a Linode large enough to accommodate the Backup's size.<br />  - The Disks and Config will match that of the Linode that was backed up.<br />  - The `root_pass` will match that of the Linode that was backed up.<br /><br />- Attached to a private VLAN.<br />  - Review the `interfaces` property of the [Request Body Schema](https://techdocs.akamai.com/linode-api/reference/post-linode-instance) for details.<br />  - For more information, see our guide on [Getting Started with VLANs](https://www.linode.com/docs/products/networking/vlans/get-started/).<br /><br />- Create an empty Linode.<br />  - The Linode will remain `offline` and must be manually started.<br />    - Run [Boot a Linode](https://techdocs.akamai.com/linode-api/reference/post-boot-linode-instance).<br />  - Disks and Configs must be created manually.<br />  - This is only recommended for advanced use cases.<br /><br />Depending on your [account settings](https://techdocs.akamai.com/linode-api/reference/get-account-settings), you can choose between legacy configuration interfaces or Linode interfaces when creating a Linode. Only one type of interface is allowed per Linode. The `interface_generation` field lets you select one interface type for new Linodes when both legacy and Linode interfaces options are available on your account. If a Linode is configured with a Linode interface, legacy configuration interfaces can no longer be used on that Linode.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.linode.instances (
authorized_keys,
authorized_users,
booted,
disk_encryption,
image,
maintenance_policy,
metadata,
root_pass,
stackscript_data,
stackscript_id,
backup_id,
backups_enabled,
firewall_id,
group,
interface_generation,
interfaces,
label,
network_helper,
placement_group,
private_ip,
region,
swap_size,
tags,
type
)
SELECT 
'{{ authorized_keys }}',
'{{ authorized_users }}',
{{ booted }},
'{{ disk_encryption }}',
'{{ image }}',
'{{ maintenance_policy }}',
'{{ metadata }}',
'{{ root_pass }}',
'{{ stackscript_data }}',
{{ stackscript_id }},
{{ backup_id }},
{{ backups_enabled }},
{{ firewall_id }},
'{{ group }}',
'{{ interface_generation }}',
'{{ interfaces }}',
'{{ label }}',
{{ network_helper }},
'{{ placement_group }}',
{{ private_ip }},
'{{ region }}' /* required */,
{{ swap_size }},
'{{ tags }}',
'{{ type }}' /* required */
RETURNING
id,
lke_cluster_id,
alerts,
backups,
capabilities,
created,
disk_encryption,
group,
has_user_data,
host_uuid,
hypervisor,
image,
interface_generation,
ipv4,
ipv6,
label,
maintenance_policy,
placement_group,
region,
specs,
status,
tags,
type,
updated,
watchdog_enabled
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: instances
  props:
    - name: authorized_keys
      value:
        - "{{ authorized_keys }}"
      description: |
        __Write-only__ A list of public SSH keys that will be automatically appended to the root user's \`~/.ssh/authorized_keys\` file when deploying from an Image.
    - name: authorized_users
      value:
        - "{{ authorized_users }}"
      description: |
        __Write-only__ A list of usernames for authorized users. Before you can add a user, it needs an SSH key assigned to its profile. See [Add an SSH key](https://techdocs.akamai.com/linode-api/reference/post-add-ssh-key) for more information. If the usernames already have associated SSH keys, the keys will be appended to the root users \`~/.ssh/authorized_keys\` file automatically when deploying from an image.
    - name: booted
      value: {{ booted }}
      description: |
        __Write-only__ This field defaults to \`true\` if the Linode is created with an Image or from a Backup. If it is deployed from an Image or a Backup and you wish it to remain \`offline\` after deployment, set this to \`false\`.
      default: true
    - name: disk_encryption
      value: "{{ disk_encryption }}"
      description: |
        Local disk encryption ensures that your data stored on Linodes is secured. Disk encryption protects against unauthorized data access by keeping the data encrypted if the disk is ever removed from the data center, decommissioned, or disposed of. The platform manages the encryption and decryption for you.
        By default, encryption is \`enabled\` on all Linodes. If you opted out of encryption or if the Linode was created prior to local disk encryption support, you can encrypt your data using [Rebuild](https://techdocs.akamai.com/linode-api/reference/post-rebuild-linode-instance).
      valid_values: ['enabled', 'disabled']
    - name: image
      value: "{{ image }}"
      description: |
        An Image ID to deploy the Linode Disk from.
        Run the [List images](https://techdocs.akamai.com/linode-api/reference/get-images) operation with authentication to view all available Images. Official Linode Images start with \`linode/\`, while your Account's Images start with \`private/\`. Creating a disk from a Private Image requires \`read_only\` or \`read_write\` permissions for that Image. Run the [Update a user's grants](https://techdocs.akamai.com/linode-api/reference/put-user-grants) operation to adjust permissions for an Account Image.
    - name: maintenance_policy
      value: "{{ maintenance_policy }}"
      description: |
        __Beta__ Defines the maintenance policy for this Linode. Choose from the following policies:
        - \`linode/migrate\`: Migrates the Linode to a new host while it remains fully operational (with some performance degradation). Recommended for maximizing availability.
        - \`linode/power_off_on\`: Powers off the Linode at the start of the maintenance event and reboots it once the maintenance finishes. Recommended for maximizing performance.
        Review [maintenance policy](https://techdocs.akamai.com/cloud-computing/docs/host-maintenance-policy) documentation for more details.
      valid_values: ['linode/migrate', 'linode/power_off_on']
    - name: metadata
      description: |
        __Write-only__ An object containing user-defined data relevant to the creation of Linodes.
      value:
        user_data: "{{ user_data }}"
    - name: root_pass
      value: "{{ root_pass }}"
      description: |
        __Write-only__ This sets the root user's password on a newly created Linode Disk when deploying from an Image.
        - __Required__ when creating a Linode Disk from an Image, including when using a StackScript.
        - Must meet a password strength score requirement that is calculated internally by the API. If the strength requirement is not met, you will receive a \`Password does not meet strength requirement\` error.
    - name: stackscript_data
      value: "{{ stackscript_data }}"
      description: |
        This field is required only if the StackScript being deployed requires input data from the User for successful completion. See [User Defined Fields (UDFs)](https://www.linode.com/docs/products/tools/stackscripts/guides/write-a-custom-script/#declare-user-defined-fields-udfs) for more details.
        This field is required to be valid JSON.
        Total length cannot exceed 65,535 characters. (opaque JSON object)
    - name: stackscript_id
      value: {{ stackscript_id }}
      description: |
        A StackScript ID that will cause the referenced StackScript to be run during deployment of this Linode. A compatible \`image\` is required to use a StackScript. To get a list of available StackScript and their permitted Images, run [List StackScripts](https://techdocs.akamai.com/linode-api/reference/get-stack-scripts). This field cannot be used when deploying from a Backup or a Private Image.
    - name: backup_id
      value: {{ backup_id }}
      description: |
        A Backup ID from another Linode's available backups. Your User must have \`read_write\` access to that Linode, the Backup must have a \`status\` of \`successful\`, and the Linode must be deployed to the same \`region\` as the Backup. Run [List backups](https://techdocs.akamai.com/linode-api/reference/get-backups) for a Linode's available backups.
        This field and the \`image\` field are mutually exclusive.
    - name: backups_enabled
      value: {{ backups_enabled }}
      description: |
        If this field is set to \`true\`, the created Linode will automatically be enrolled in the Linode Backup service. This will incur an additional charge. The cost for the Backup service is dependent on the Type of Linode deployed.
        This option is always treated as \`true\` if the account-wide \`backups_enabled\` setting is \`true\`.  See [Get account settings](https://techdocs.akamai.com/linode-api/reference/get-account-settings) for more information.
        Backup pricing is included in the response from [List types](https://techdocs.akamai.com/linode-api/reference/get-linode-types)
    - name: firewall_id
      value: {{ firewall_id }}
      description: |
        The \`id\` of the Firewall to attach this Linode to upon creation. This \`firewall_id\` field is for Linodes using VLAN and legacy configuration interfaces only.
    - name: group
      value: "{{ group }}"
      description: |
        __Deprecated__, __Filterable__ The group label for this Linode.
    - name: interface_generation
      value: "{{ interface_generation }}"
      description: |
        __Beta__ Specifies the interface type for the Linode. The value can be either \`legacy_config\` or \`linode\`. The default value is determined by the \`interfaces_for_new_linodes\` setting in the [account settings](https://techdocs.akamai.com/linode-api/reference/get-account-settings). If the \`interface_generation\` option is set to \`linode\`, legacy configuration interfaces can no longer be used on the Linode.
        - If \`interfaces_for_new_linodes\` is set to \`linode_only\`, set \`interface_generation\` to \`linode\` or omit it for Linode interfaces.
        - If \`interfaces_for_new_linodes\` is set to \`legacy_config_only\`, set \`interface_generation\` to \`legacy_config\` or omit it for legacy configuration interfaces.
        - If \`interfaces_for_new_linodes\` is set to \`linode_default_but_legacy_config_allowed\`, set \`interface_generation\` to \`linode\` or omit it for Linode interfaces, and to \`legacy_config\` if the Linode uses legacy configuration interfaces.
        - If \`interfaces_for_new_linodes\` is set to \`legacy_config_default_but_linode_allowed\`, set \`interface_generation\` to \`legacy_config\` or omit it for legacy configuration interfaces, and to \`linode\` if the Linode uses Linode interfaces.
      valid_values: ['legacy_config', 'linode']
    - name: interfaces
      value: "{{ interfaces }}"
      description: |
        Interfaces for the Linode. This can be a Linode interface or legacy configuration interface.
      default: 
    - name: label
      value: "{{ label }}"
      description: |
        __Filterable__ Provides a name for the Linode. If not provided, the API generates one for it.
        Linode labels have the following constraints:
        - It needs to begin and end with an alphanumeric character.
        - It can only consist of alphanumeric characters, hyphens (\`-\`), underscores (\`_\`) or periods (\`.\`).
        - Cannot have two hyphens (\`--\`), underscores (\`__\`) or periods (\`..\`) in a row.
    - name: network_helper
      value: {{ network_helper }}
      description: |
        Enables the Network Helper feature. The default value is determined by the \`network_helper\` setting in the [account settings](https://techdocs.akamai.com/linode-api/reference/get-account-settings). This \`network_helper\` field is for Linodes using Linode interfaces only.
    - name: placement_group
      description: |
        Include this to assign this Linode to an existing [placement group](https://www.linode.com/docs/products/compute/compute-instances/guides/placement-groups/). These constraints apply:
        - The target placement group needs to be in the same \`region\` set for this Linode.
        - The placement group needs to have capacity. Run the [Get a region](https://techdocs.akamai.com/linode-api/reference/get-region) operation and note either the \`maximum_linodes_per_pg\` (strict) or \`maximum_linodes_per_flexible_pg\` (flexible), based on your selected \`placement_group_policy\`. These represent the Linode limit per placement group, for each \`placement_group_policy\` type. You can then run the [Get a placement group](https://techdocs.akamai.com/linode-api/reference/get-placement-group) operation to review the Linodes in that group.
      value:
        id: {{ id }}
    - name: private_ip
      value: {{ private_ip }}
      description: |
        If \`true\`, the created Linode will have private networking enabled and assigned a private IPv4 address.
    - name: region
      value: "{{ region }}"
      description: |
        The [region](https://techdocs.akamai.com/linode-api/reference/get-regions) where the Linode will be located.
    - name: swap_size
      value: {{ swap_size }}
      description: |
        When deploying from an Image, this field is optional, otherwise it is ignored. This is used to set the swap disk size for the newly created Linode.
      default: 512
    - name: tags
      value:
        - "{{ tags }}"
      description: |
        __Filterable__ Tags to help you organize your content.
    - name: type
      value: "{{ type }}"
      description: |
        The [Linode type](https://techdocs.akamai.com/linode-api/reference/get-linode-types) of the Linode you are creating.
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

Updates a Linode that you have permission to `read_write`. Only unrestricted users can add or modify tags on Linodes.<br />&lt;&lt;LB&gt;&gt;<br /><br />&gt; 🚧<br />&gt;<br />&gt; All tags for the instance are overwritten if `tags` are included in the request.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.linode.instances
SET 
alerts = '{{ alerts }}',
backups = '{{ backups }}',
group = '{{ group }}',
label = '{{ label }}',
maintenance_policy = '{{ maintenance_policy }}',
tags = '{{ tags }}',
watchdog_enabled = {{ watchdog_enabled }}
WHERE 
linodeId = '{{ linodeId }}' --required
RETURNING
id,
lke_cluster_id,
alerts,
backups,
capabilities,
created,
disk_encryption,
group,
has_user_data,
host_uuid,
hypervisor,
image,
interface_generation,
ipv4,
ipv6,
label,
maintenance_policy,
placement_group,
region,
specs,
status,
tags,
type,
updated,
watchdog_enabled;
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

Deletes a Linode you have permission to `read_write`.<br /><br />__Deleting a Linode is a destructive action and cannot be undone.__<br /><br />Additionally, deleting a Linode:<br /><br />  - Gives up any IP addresses the Linode was assigned.<br />  - Deletes all Disks, Backups, Configs, etc.<br />  - Detaches any Volumes associated with the Linode.<br />  - Stops billing for the Linode and its associated services. You will be billed for time used within the billing period the Linode was active.<br /><br />Linodes that are in the process of [cloning](https://techdocs.akamai.com/linode-api/reference/post-clone-linode-instance) or [backup restoration](https://techdocs.akamai.com/linode-api/reference/post-restore-backup) cannot be deleted.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.linode.instances
WHERE linodeId = '{{ linodeId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="boot"
    values={[
        { label: 'boot', value: 'boot' },
        { label: 'clone', value: 'clone' },
        { label: 'migrate', value: 'migrate' },
        { label: 'mutate', value: 'mutate' },
        { label: 'reset_password', value: 'reset_password' },
        { label: 'reboot', value: 'reboot' },
        { label: 'rebuild', value: 'rebuild' },
        { label: 'rescue', value: 'rescue' },
        { label: 'resize', value: 'resize' },
        { label: 'shutdown', value: 'shutdown' }
    ]}
>
<TabItem value="boot">

Boots a Linode you have permission to modify.<br /><br />If the Linode is using config profiles, and no parameters are given, a config profile is chosen for this boot based on the following criteria:<br />- If there is only one config profile for this Linode, it will be used.<br />- If there is more than one config profile, the last booted config will be used.<br />- If there is more than one config profile and none were the last to be booted (because the Linode was never booted or the last booted config was deleted) an error will be returned.<br /><br />If the Linode is using Linode interfaces, where `interface_generation` is set as `linode`, an error is returned if the Linode has to boot without any interface defined.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.linode.instances.boot 
@linodeId='{{ linodeId }}' --required 
@@json=
'{
"config_id": {{ config_id }}
}'
;
```
</TabItem>
<TabItem value="clone">

You can clone your Linode's existing disks, configuration profiles and interfaces to another Linode on your account. In order for this request to complete successfully, you need the `add_linodes` grant.<br /><br />For Linodes using Linode interfaces, the clone needs to be located in a region that supports Linode interfaces (see [GET a region](https://techdocs.akamai.com/linode-api/reference/get-region)). The [account settings](https://techdocs.akamai.com/linode-api/reference/get-account-settings) need to allow creation of Linodes with Linode interfaces.<br /><br />Cloning to a new Linode incurs a charge on your account.<br /><br />If cloning to an existing Linode, any actions currently running or queued must be completed first before you can clone to it.<br /><br />Up to five clone operations from any given source Linode can be run concurrently. If more concurrent clones are attempted, an HTTP 400 error will be returned by this operation.<br /><br />Any [tags](https://techdocs.akamai.com/linode-api/reference/get-tags) existing on the source Linode will be cloned to the target Linode.<br /><br />Linodes utilizing Metadata (`"has_user_data": true`) must be cloned to a new Linode with `metadata.user_data` included with the clone request.<br /><br />`vpc` details<br /><br />- If the Linode you're cloning has a `vpc` interface on its active legacy configuration profile that includes a 1:1 NAT, the resulting clone is configured with an `any` 1:1 NAT.<br />- See the [VPC documentation](https://www.linode.com/docs/products/networking/vpc/#technical-specifications) guide for its specifications and limitations.<br /><br />`vlan` details<br /><br />- Only Next Generation Network (NGN) data centers support VLANs. If a VLAN is attached to your Linode and you attempt clone it to a non-NGN data center, the cloning will not initiate. If a Linode cannot be cloned because of an incompatibility, you will be prompted to select a different data center or contact support.<br />- See the [VLANs Overview](https://www.linode.com/docs/products/networking/vlans/#technical-specifications) guide to view additional specifications and limitations.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.linode.instances.clone 
@linodeId='{{ linodeId }}' --required 
@@json=
'{
"backups_enabled": {{ backups_enabled }}, 
"configs": "{{ configs }}", 
"disks": "{{ disks }}", 
"group": "{{ group }}", 
"label": "{{ label }}", 
"linode_id": {{ linode_id }}, 
"maintenance_policy": "{{ maintenance_policy }}", 
"metadata": "{{ metadata }}", 
"placement_group": "{{ placement_group }}", 
"private_ip": {{ private_ip }}, 
"region": "{{ region }}", 
"type": "{{ type }}"
}'
;
```
</TabItem>
<TabItem value="migrate">

Initiate a pending host migration that has been scheduled by Linode or initiate a cross data center (DC) migration.  A list of pending migrations, if any, can be accessed from [List notifications](https://techdocs.akamai.com/linode-api/reference/get-notifications). When the migration begins, your Linode will be shutdown if not already off. If the migration initiated the shutdown, it will reboot the Linode when completed.<br /><br />To initiate a cross DC migration, you must pass a `region` parameter to the request body specifying the target data center region. You can view a list of all available regions and their feature capabilities from [List regions](https://techdocs.akamai.com/linode-api/reference/get-regions). See our [Pricing Page](https://www.linode.com/pricing/) for Region-specific pricing, which applies after migration is complete. If your Linode has a DC migration already queued or you have initiated a previously scheduled migration, you will not be able to initiate a DC migration until it has completed.<br /><br />`vpc` details<br /><br />- Cross DC migrations don't work for Linodes that have a `vpc` purpose legacy configuration interface or a VPC Linode interface. They work for host migrations within the same DC.<br />- See the [VPC documentation](https://www.linode.com/docs/products/networking/vpc/#technical-specifications) guide for its specifications and limitations.<br /><br />`vlan` details:<br /><br />- Only Next Generation Network (NGN) data centers support VLANs. Run the [List regions](https://techdocs.akamai.com/linode-api/reference/get-regions) operation to view the capabilities of data center regions. If a VLAN is attached to your Linode and you attempt to migrate or clone it to a non-NGN data center, the migration or cloning will not initiate. If a Linode cannot be migrated or cloned because of an incompatibility, you will be prompted to select a different data center or contact support.<br />- Next Generation Network (NGN) data centers do not support IPv6 `/116` pools or IP Failover. If you have these features enabled on your Linode and attempt to migrate to an NGN data center, the migration will not initiate. If a Linode cannot be migrated because of an incompatibility, you will be prompted to select a different data center or contact support.<br />- See the [VLANs Overview](https://www.linode.com/docs/products/networking/vlans/#technical-specifications) guide to view additional specifications and limitations.<br /><br />`public` details:<br /><br />- If the Linode is using Linode interfaces, the destination region needs to also support Linode interfaces.<br />- After migrating to a different data center, Linode public interfaces retain the same number of IP addresses, but the IP addresses themselves change.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.linode.instances.migrate 
@linodeId='{{ linodeId }}' --required 
@@json=
'{
"placement_group": "{{ placement_group }}", 
"region": "{{ region }}", 
"type": "{{ type }}", 
"upgrade": {{ upgrade }}
}'
;
```
</TabItem>
<TabItem value="mutate">

Linodes created with now-deprecated Types are entitled to a free upgrade to the next generation. A mutating Linode will be allocated any new resources the upgraded Type provides, and will be subsequently restarted if it was currently running. If any actions are currently running or queued, those actions must be completed first before you can initiate a mutate.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.linode.instances.mutate 
@linodeId='{{ linodeId }}' --required 
@@json=
'{
"allow_auto_disk_resize": {{ allow_auto_disk_resize }}
}'
;
```
</TabItem>
<TabItem value="reset_password">

Resets the root password for this Linode.<br /><br />- Your Linode must be [shut down](https://techdocs.akamai.com/linode-api/reference/post-shutdown-linode-instance) for a password reset to complete.<br />- If your Linode has more than one disk (not counting its swap disk), run the [Reset a disk root password](https://techdocs.akamai.com/linode-api/reference/post-reset-disk-password) operation to update a specific disk's root password.<br />- A `password_reset` event is generated when a root password reset is successful.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.linode.instances.reset_password 
@linodeId='{{ linodeId }}' --required 
@@json=
'{
"root_pass": "{{ root_pass }}"
}'
;
```
</TabItem>
<TabItem value="reboot">

Reboots a Linode you have permission to modify. If any actions are currently running or queued, those actions must be completed first before you can initiate a reboot.<br /><br />If the Linode is using Linode interfaces, where `interface_generation` is set as `linode`, an error is returned if the Linode has to reboot without any interface defined.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.linode.instances.reboot 
@linodeId='{{ linodeId }}' --required 
@@json=
'{
"config_id": {{ config_id }}
}'
;
```
</TabItem>
<TabItem value="rebuild">

Rebuilds a Linode you have the `read_write` permission to modify.<br /><br />A rebuild first shuts down the Linode, deletes all disks and configuration profiles on the Linode, then deploys a new `image` to the Linode with the given attributes. Additionally:<br /><br />  - Requires an `image` be supplied.<br />  - Requires a `root_pass` be supplied to use for the root User's Account.<br />  - It is recommended to supply SSH keys for the root User using the `authorized_keys` field.<br />  - Linodes utilizing Metadata (`"has_user_data": true`) should include `metadata.user_data` in the rebuild request to continue using the service.<br /><br />Linode interfaces don't change during a rebuild.<br /><br />During a rebuild, you can `enable` or `disable` local disk encryption. If disk encryption is not included in the request, the previous `disk_encryption` value is used. Disk encryption cannot be disabled if the compute instance is attached to a LKE nodepool.<br /><br />You also have the option to resize the Linode to a different plan by including the `type` parameter with your request. Note that resizing involves migrating the Linode to a new hardware host, while rebuilding without resizing maintains the same hardware host. Resizing also requires significantly more time for completion of this operation. The following additional conditions apply:<br /><br />  - The Linode must not have a pending migration.<br />  - Your Account cannot have an outstanding balance.<br />  - The Linode must not have more disk allocation than the new Type allows.<br />    - In that situation, you must first delete or resize the disk to be smaller.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.linode.instances.rebuild 
@linodeId='{{ linodeId }}' --required 
@@json=
'{
"authorized_keys": "{{ authorized_keys }}", 
"authorized_users": "{{ authorized_users }}", 
"booted": {{ booted }}, 
"disk_encryption": "{{ disk_encryption }}", 
"image": "{{ image }}", 
"maintenance_policy": "{{ maintenance_policy }}", 
"metadata": "{{ metadata }}", 
"root_pass": "{{ root_pass }}", 
"stackscript_data": "{{ stackscript_data }}", 
"stackscript_id": {{ stackscript_id }}, 
"type": "{{ type }}"
}'
;
```
</TabItem>
<TabItem value="rescue">

Rescue Mode is a safe environment for performing many system recovery and disk management tasks. Rescue Mode is based on the Finnix recovery distribution, a self-contained and bootable Linux distribution. You can also use Rescue Mode for tasks other than disaster recovery, such as formatting disks to use different filesystems, copying data between disks, and downloading files from a disk via SSH and SFTP.<br /><br />Linodes with legacy configuration interfaces receive a public IP and boot into the recovery Linux distribution. Linodes with Linode interfaces still boot into recovery mode with the recovery Linux distribution, but they retain their original network interfaces and settings from before entering rescue mode.<br /><br />- Note that `sdh` is reserved and unavailable during rescue.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.linode.instances.rescue 
@linodeId='{{ linodeId }}' --required 
@@json=
'{
"devices": "{{ devices }}"
}'
;
```
</TabItem>
<TabItem value="resize">

Resizes a Linode you have the `read_write` permission to a different Type. If any actions are currently running or queued, those actions must be completed first before you can initiate a resize. Additionally, the following criteria must be met in order to resize a Linode:<br /><br />  - The Linode must not have a pending migration.<br />  - Your Account cannot have an outstanding balance.<br />  - The Linode must not have more disk allocation than the new Type allows.<br />    - In that situation, you must first delete or resize the disk to be smaller.<br /><br />You can also resize a Linode when using the [Rebuild a Linode](https://techdocs.akamai.com/linode-api/reference/post-rebuild-linode-instance) operation.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.linode.instances.resize 
@linodeId='{{ linodeId }}' --required 
@@json=
'{
"allow_auto_disk_resize": {{ allow_auto_disk_resize }}, 
"migration_type": "{{ migration_type }}", 
"type": "{{ type }}"
}'
;
```
</TabItem>
<TabItem value="shutdown">

Shuts down a Linode you have permission to modify. If any actions are currently running or queued, those actions must be completed first before you can initiate a shutdown.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.linode.instances.shutdown 
@linodeId='{{ linodeId }}' --required
;
```
</TabItem>
</Tabs>
