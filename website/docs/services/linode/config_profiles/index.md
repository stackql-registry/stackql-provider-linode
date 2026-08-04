--- 
title: config_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - config_profiles
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

Creates, updates, deletes, gets or lists a <code>config_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="config_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.linode.config_profiles" /></td></tr>
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

A configuration profile object.

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
    <td>__Read-only__ The ID of this Config.</td>
</tr>
<tr>
    <td><CopyableCode code="comments" /></td>
    <td><code>string</code></td>
    <td>Optional field for arbitrary user comments on this configuration. (example: This is my main Config)</td>
</tr>
<tr>
    <td><CopyableCode code="devices" /></td>
    <td><code>object</code></td>
    <td>A dictionary of device disks to use as a device map in a Linode's configuration profile.  - An empty device disk dictionary or a dictionary with empty values for device slots is allowed. - If no devices are specified, booting from this configuration will hold until a device exists that allows the boot process to start.</td>
</tr>
<tr>
    <td><CopyableCode code="helpers" /></td>
    <td><code>object</code></td>
    <td>Helpers enabled when booting to this Linode configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="interfaces" /></td>
    <td><code>array</code></td>
    <td>`interfaces` is applicable only to legacy configuration profiles and does not apply to [Linode interfaces](https://techdocs.akamai.com/linode-api/reference/post-linode-interface).  From one to three network interfaces to add to this Linode's configuration profile. The position in the array determines which of the Linode's network interfaces is configured:  - First [0]:  `eth0` - Second [1]: `eth1` - Third [2]:  `eth2`  When updating a Linode's legacy interfaces, _each interface must be redefined_. An empty `interfaces` array results in a default `public` type interface configuration only.  If no public Interface is configured, public IP addresses are still assigned to the Linode but will not be usable without manual configuration.  &gt; 📘 &gt; &gt; Changes to Linode Interface configurations can be enabled by rebooting the Linode.  `vpc` details  See the [VPC documentation](https://www.linode.com/docs/products/networking/vpc/#technical-specifications) guide for its specifications and limitations.  `vlan` details  - Only Next Generation Network (NGN) data centers support VLANs. Run the [List regions](https://techdocs.akamai.com/linode-api/reference/get-regions) operation to view the capabilities of data center regions. If a VLAN is attached to your Linode and you attempt to migrate or clone it to a non-NGN data center, the migration or cloning will not initiate. If a Linode cannot be migrated or cloned because of an incompatibility, you will be prompted to select a different data center or contact support. - See the [VLANs Overview](https://www.linode.com/docs/products/networking/vlans/#technical-specifications) guide to view additional specifications and limitations.</td>
</tr>
<tr>
    <td><CopyableCode code="kernel" /></td>
    <td><code>string</code></td>
    <td>The ID of the kernel used to boot a Linode. Run the [List kernels](https://techdocs.akamai.com/linode-api/reference/get-kernels) operation to see all available kernels. Here are some commonly used kernels:  - `linode/latest-64bit`. This is the default, our latest kernel at the time of an instance boot or reboot.  - `linode/grub2`. The upstream distribution-supplied kernel that's installed on the primary disk, or a custom kernel if installed.  - `linode/direct-disk`. The master boot record (MBR) of the primary disk or root device. Use this in place of a Linux kernel. (default: linode/latest-64bit, example: linode/latest-64bit)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The name of the configuration for display in Akamai Cloud Manager. (example: My Config)</td>
</tr>
<tr>
    <td><CopyableCode code="memory_limit" /></td>
    <td><code>integer</code></td>
    <td>Defaults to the total RAM of the Linode.</td>
</tr>
<tr>
    <td><CopyableCode code="root_device" /></td>
    <td><code>string</code></td>
    <td>The root device to boot.  &gt; 📘  - If you leave this empty or set an invalid value, the root device defaults to `/dev/sda`.  - If you specify a device at the root device location and it's not mounted, the Linode won't boot until a device is mounted. (example: /dev/sda, pattern: <code>a-z, A-Z, 0-9, /, _, -</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="run_level" /></td>
    <td><code>string</code></td>
    <td>Defines the state of your Linode after booting. Defaults to `default`. (default, single, binbash) (example: default)</td>
</tr>
<tr>
    <td><CopyableCode code="virt_mode" /></td>
    <td><code>string</code></td>
    <td>Controls the virtualization mode. Defaults to `paravirt`.  - `paravirt` is suitable for most cases. Linodes running in `paravirt` mode share some qualities with the host, ultimately making it run faster since there is less transition between it and the host.  - `fullvirt` affords more customization, but is slower because 100% of the VM is virtualized. (paravirt, fullvirt) (example: paravirt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Returns the configuration profiles associated with this Linode.

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
    <td>__Read-only__ The ID of this Config.</td>
</tr>
<tr>
    <td><CopyableCode code="comments" /></td>
    <td><code>string</code></td>
    <td>Optional field for arbitrary user comments on this configuration. (example: This is my main Config)</td>
</tr>
<tr>
    <td><CopyableCode code="devices" /></td>
    <td><code>object</code></td>
    <td>A dictionary of device disks to use as a device map in a Linode's configuration profile.  - An empty device disk dictionary or a dictionary with empty values for device slots is allowed. - If no devices are specified, booting from this configuration will hold until a device exists that allows the boot process to start.</td>
</tr>
<tr>
    <td><CopyableCode code="helpers" /></td>
    <td><code>object</code></td>
    <td>Helpers enabled when booting to this Linode configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="interfaces" /></td>
    <td><code>array</code></td>
    <td>`interfaces` is applicable only to legacy configuration profiles and does not apply to [Linode interfaces](https://techdocs.akamai.com/linode-api/reference/post-linode-interface).  From one to three network interfaces to add to this Linode's configuration profile. The position in the array determines which of the Linode's network interfaces is configured:  - First [0]:  `eth0` - Second [1]: `eth1` - Third [2]:  `eth2`  When updating a Linode's legacy interfaces, _each interface must be redefined_. An empty `interfaces` array results in a default `public` type interface configuration only.  If no public Interface is configured, public IP addresses are still assigned to the Linode but will not be usable without manual configuration.  &gt; 📘 &gt; &gt; Changes to Linode Interface configurations can be enabled by rebooting the Linode.  `vpc` details  See the [VPC documentation](https://www.linode.com/docs/products/networking/vpc/#technical-specifications) guide for its specifications and limitations.  `vlan` details  - Only Next Generation Network (NGN) data centers support VLANs. Run the [List regions](https://techdocs.akamai.com/linode-api/reference/get-regions) operation to view the capabilities of data center regions. If a VLAN is attached to your Linode and you attempt to migrate or clone it to a non-NGN data center, the migration or cloning will not initiate. If a Linode cannot be migrated or cloned because of an incompatibility, you will be prompted to select a different data center or contact support. - See the [VLANs Overview](https://www.linode.com/docs/products/networking/vlans/#technical-specifications) guide to view additional specifications and limitations.</td>
</tr>
<tr>
    <td><CopyableCode code="kernel" /></td>
    <td><code>string</code></td>
    <td>The ID of the kernel used to boot a Linode. Run the [List kernels](https://techdocs.akamai.com/linode-api/reference/get-kernels) operation to see all available kernels. Here are some commonly used kernels:  - `linode/latest-64bit`. This is the default, our latest kernel at the time of an instance boot or reboot.  - `linode/grub2`. The upstream distribution-supplied kernel that's installed on the primary disk, or a custom kernel if installed.  - `linode/direct-disk`. The master boot record (MBR) of the primary disk or root device. Use this in place of a Linux kernel. (default: linode/latest-64bit, example: linode/latest-64bit)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The name of the configuration for display in Akamai Cloud Manager. (example: My Config)</td>
</tr>
<tr>
    <td><CopyableCode code="memory_limit" /></td>
    <td><code>integer</code></td>
    <td>Defaults to the total RAM of the Linode.</td>
</tr>
<tr>
    <td><CopyableCode code="root_device" /></td>
    <td><code>string</code></td>
    <td>The root device to boot.  &gt; 📘  - If you leave this empty or set an invalid value, the root device defaults to `/dev/sda`.  - If you specify a device at the root device location and it's not mounted, the Linode won't boot until a device is mounted. (example: /dev/sda, pattern: <code>a-z, A-Z, 0-9, /, _, -</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="run_level" /></td>
    <td><code>string</code></td>
    <td>Defines the state of your Linode after booting. Defaults to `default`. (default, single, binbash) (example: default)</td>
</tr>
<tr>
    <td><CopyableCode code="virt_mode" /></td>
    <td><code>string</code></td>
    <td>Controls the virtualization mode. Defaults to `paravirt`.  - `paravirt` is suitable for most cases. Linodes running in `paravirt` mode share some qualities with the host, ultimately making it run faster since there is less transition between it and the host.  - `fullvirt` affords more customization, but is slower because 100% of the VM is virtualized. (paravirt, fullvirt) (example: paravirt)</td>
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
    <td><a href="#parameter-linodeId"><code>linodeId</code></a>, <a href="#parameter-configId"><code>configId</code></a></td>
    <td></td>
    <td>Returns information about a specific configuration profile.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-linodeId"><code>linodeId</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Lists configuration profiles associated with a Linode.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-linodeId"><code>linodeId</code></a>, <a href="#parameter-label"><code>label</code></a>, <a href="#parameter-devices"><code>devices</code></a></td>
    <td></td>
    <td>Adds a new configuration profile to a Linode.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation is for legacy configuration profiles only, and not [Linode interfaces](https://techdocs.akamai.com/linode-api/reference/post-linode-interface).<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-linodeId"><code>linodeId</code></a>, <a href="#parameter-configId"><code>configId</code></a></td>
    <td></td>
    <td>Updates a configuration profile.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-linodeId"><code>linodeId</code></a>, <a href="#parameter-configId"><code>configId</code></a></td>
    <td></td>
    <td>Deletes the specified configuration profile from the specified Linode.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-configId">
    <td><CopyableCode code="configId" /></td>
    <td><code>string</code></td>
    <td>The `id` of the Configuration Profile.</td>
</tr>
<tr id="parameter-linodeId">
    <td><CopyableCode code="linodeId" /></td>
    <td><code>string</code></td>
    <td>The `id` of the Linode.</td>
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

Returns information about a specific configuration profile.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
comments,
devices,
helpers,
interfaces,
kernel,
label,
memory_limit,
root_device,
run_level,
virt_mode
FROM linode.linode.config_profiles
WHERE linodeId = '{{ linodeId }}' -- required
AND configId = '{{ configId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists configuration profiles associated with a Linode.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
comments,
devices,
helpers,
interfaces,
kernel,
label,
memory_limit,
root_device,
run_level,
virt_mode
FROM linode.linode.config_profiles
WHERE linodeId = '{{ linodeId }}' -- required
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

Adds a new configuration profile to a Linode.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation is for legacy configuration profiles only, and not [Linode interfaces](https://techdocs.akamai.com/linode-api/reference/post-linode-interface).<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.linode.config_profiles (
comments,
devices,
helpers,
interfaces,
kernel,
label,
memory_limit,
root_device,
run_level,
virt_mode,
linodeId
)
SELECT 
'{{ comments }}',
'{{ devices }}' /* required */,
'{{ helpers }}',
'{{ interfaces }}',
'{{ kernel }}',
'{{ label }}' /* required */,
{{ memory_limit }},
'{{ root_device }}',
'{{ run_level }}',
'{{ virt_mode }}',
'{{ linodeId }}'
RETURNING
id,
comments,
devices,
helpers,
interfaces,
kernel,
label,
memory_limit,
root_device,
run_level,
virt_mode
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: config_profiles
  props:
    - name: linodeId
      value: "{{ linodeId }}"
      description: Required parameter for the config_profiles resource.
    - name: comments
      value: "{{ comments }}"
      description: |
        Optional field for arbitrary user comments on this configuration.
    - name: devices
      description: |
        A dictionary of device disks to use as a device map in a Linode's configuration profile.
        - An empty device disk dictionary or a dictionary with empty values for device slots is allowed.
        - If no devices are specified, booting from this configuration will hold until a device exists that allows the boot process to start.
      value:
        sda:
          disk_id: {{ disk_id }}
          volume_id: {{ volume_id }}
        sdb:
          disk_id: {{ disk_id }}
          volume_id: {{ volume_id }}
        sdc:
          disk_id: {{ disk_id }}
          volume_id: {{ volume_id }}
        sdd:
          disk_id: {{ disk_id }}
          volume_id: {{ volume_id }}
        sde:
          disk_id: {{ disk_id }}
          volume_id: {{ volume_id }}
        sdf:
          disk_id: {{ disk_id }}
          volume_id: {{ volume_id }}
        sdg:
          disk_id: {{ disk_id }}
          volume_id: {{ volume_id }}
        sdh:
          disk_id: {{ disk_id }}
          volume_id: {{ volume_id }}
    - name: helpers
      description: |
        Helpers enabled when booting to this Linode configuration.
      value:
        devtmpfs_automount: {{ devtmpfs_automount }}
        distro: {{ distro }}
        modules_dep: {{ modules_dep }}
        network: {{ network }}
        updatedb_disabled: {{ updatedb_disabled }}
    - name: interfaces
      description: |
        \`interfaces\` is applicable only to legacy configuration profiles and does not apply to [Linode interfaces](https://techdocs.akamai.com/linode-api/reference/post-linode-interface).
        From one to three network interfaces to add to this Linode's configuration profile. The position in the array determines which of the Linode's network interfaces is configured:
        - First [0]:  \`eth0\`
        - Second [1]: \`eth1\`
        - Third [2]:  \`eth2\`
        When updating a Linode's legacy interfaces, _each interface must be redefined_. An empty \`interfaces\` array results in a default \`public\` type interface configuration only.
        If no public Interface is configured, public IP addresses are still assigned to the Linode but will not be usable without manual configuration.
        > 📘
        >
        > Changes to Linode Interface configurations can be enabled by rebooting the Linode.
        \`vpc\` details
        See the [VPC documentation](https://www.linode.com/docs/products/networking/vpc/#technical-specifications) guide for its specifications and limitations.
        \`vlan\` details
        - Only Next Generation Network (NGN) data centers support VLANs. Run the [List regions](https://techdocs.akamai.com/linode-api/reference/get-regions) operation to view the capabilities of data center regions. If a VLAN is attached to your Linode and you attempt to migrate or clone it to a non-NGN data center, the migration or cloning will not initiate. If a Linode cannot be migrated or cloned because of an incompatibility, you will be prompted to select a different data center or contact support.
        - See the [VLANs Overview](https://www.linode.com/docs/products/networking/vlans/#technical-specifications) guide to view additional specifications and limitations.
      value:
        - active: {{ active }}
          id: {{ id }}
          ip_ranges: "{{ ip_ranges }}"
          ipam_address: "{{ ipam_address }}"
          ipv4:
            nat_1_1: "{{ nat_1_1 }}"
            vpc: "{{ vpc }}"
          label: "{{ label }}"
          primary: {{ primary }}
          purpose: "{{ purpose }}"
          subnet_id: {{ subnet_id }}
          vpc_id: {{ vpc_id }}
    - name: kernel
      value: "{{ kernel }}"
      description: |
        The ID of the kernel used to boot a Linode. Run the [List kernels](https://techdocs.akamai.com/linode-api/reference/get-kernels) operation to see all available kernels. Here are some commonly used kernels:
        - \`linode/latest-64bit\`. This is the default, our latest kernel at the time of an instance boot or reboot.
        - \`linode/grub2\`. The upstream distribution-supplied kernel that's installed on the primary disk, or a custom kernel if installed.
        - \`linode/direct-disk\`. The master boot record (MBR) of the primary disk or root device. Use this in place of a Linux kernel.
      default: linode/latest-64bit
    - name: label
      value: "{{ label }}"
      description: |
        __Filterable__ The name of the configuration for display in Akamai Cloud Manager.
    - name: memory_limit
      value: {{ memory_limit }}
      description: |
        Defaults to the total RAM of the Linode.
    - name: root_device
      value: "{{ root_device }}"
      description: |
        The root device to boot.
        > 📘
        - If you leave this empty or set an invalid value, the root device defaults to \`/dev/sda\`.
        - If you specify a device at the root device location and it's not mounted, the Linode won't boot until a device is mounted.
    - name: run_level
      value: "{{ run_level }}"
      description: |
        Defines the state of your Linode after booting. Defaults to \`default\`.
      valid_values: ['default', 'single', 'binbash']
    - name: virt_mode
      value: "{{ virt_mode }}"
      description: |
        Controls the virtualization mode. Defaults to \`paravirt\`.
        - \`paravirt\` is suitable for most cases. Linodes running in \`paravirt\` mode share some qualities with the host, ultimately making it run faster since there is less transition between it and the host.
        - \`fullvirt\` affords more customization, but is slower because 100% of the VM is virtualized.
      valid_values: ['paravirt', 'fullvirt']
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

Updates a configuration profile.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.linode.config_profiles
SET 
comments = '{{ comments }}',
devices = '{{ devices }}',
helpers = '{{ helpers }}',
interfaces = '{{ interfaces }}',
kernel = '{{ kernel }}',
label = '{{ label }}',
memory_limit = {{ memory_limit }},
root_device = '{{ root_device }}',
run_level = '{{ run_level }}',
virt_mode = '{{ virt_mode }}'
WHERE 
linodeId = '{{ linodeId }}' --required
AND configId = '{{ configId }}' --required
RETURNING
id,
comments,
devices,
helpers,
interfaces,
kernel,
label,
memory_limit,
root_device,
run_level,
virt_mode;
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

Deletes the specified configuration profile from the specified Linode.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.linode.config_profiles
WHERE linodeId = '{{ linodeId }}' --required
AND configId = '{{ configId }}' --required
;
```
</TabItem>
</Tabs>
