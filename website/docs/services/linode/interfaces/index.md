--- 
title: interfaces
hide_title: false
hide_table_of_contents: false
keywords:
  - interfaces
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

Creates, updates, deletes, gets or lists an <code>interfaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="interfaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.linode.interfaces" /></td></tr>
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

Returns a single interface available for a Linode.

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
    <td>__Read-only__ The unique ID for this interface. For `dry_run` [upgrades](https://techdocs.akamai.com/linode-api/reference/post-upgrade-linode-interfaces), a unique `id` is not generated for the interface and its value is set to 0.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the interface was created. (example: 2024-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="default_route" /></td>
    <td><code>object</code></td>
    <td>Indicates if the interface is used as a default route.</td>
</tr>
<tr>
    <td><CopyableCode code="mac_address" /></td>
    <td><code>string</code></td>
    <td>A 48-bit MAC address used to identify the Linode’s interface. A public interface's `mac_address` does not change, even if the public interface is deleted and then recreated. (example: 22:00:AB:CD:EF:01, pattern: <code>&#91;a-zA-Z0-9-&#93;+</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="public" /></td>
    <td><code>object</code></td>
    <td>Public interface type.</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the interface was last updated. (example: 2024-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>Interface version number that increments when the interface updates.</td>
</tr>
<tr>
    <td><CopyableCode code="vlan" /></td>
    <td><code>string</code></td>
    <td>The value is `null` if this is not a VLAN interface. (opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc" /></td>
    <td><code>object</code></td>
    <td>The value is `null` if this is not a VPC interface.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A list of all the interfaces available for a Linode.

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
    <td><CopyableCode code="interfaces" /></td>
    <td><code>array</code></td>
    <td>Any of the following interface types: VPC, public, or VLAN.</td>
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
    <td><a href="#parameter-linodeId"><code>linodeId</code></a>, <a href="#parameter-interfaceId"><code>interfaceId</code></a></td>
    <td></td>
    <td>__Beta__ Returns an interface assigned to a specific Linode. This operation requires the `read_only` [grant](https://techdocs.akamai.com/linode-api/reference/get-user-grants) for the Linode.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-linodeId"><code>linodeId</code></a></td>
    <td></td>
    <td>__Beta__ This operation returns all interfaces assigned to a specific Linode. They list in the order they were created. On the Linode, interfaces also list in this order, and are typically named `eth0`, `eth1`, `eth2`, and so on. The MAC address is the most reliable method to identify an interface. This operation requires the `read_only` [grant](https://techdocs.akamai.com/linode-api/reference/get-user-grants) for the Linode. The Linode needs to use `interfaces` and not configuration profile interfaces. Run [Get account settings](https://techdocs.akamai.com/linode-api/reference/get-account-settings) to see if Linode interfaces are supported.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-linodeId"><code>linodeId</code></a></td>
    <td></td>
    <td>__Beta__ Creates an interface for the Linode. This interface links to the Linode, rather than to a configuration profile. You can create, delete, or update interfaces when the Linode is either powered off or in the process of being created.<br /><br />Firewalls are applied to the Linode interface, not directly to the Linode itself. You can add, delete, or update these firewalls at any time.<br /><br />This operation requires the `read_write` [grant](https://techdocs.akamai.com/linode-api/reference/get-user-grants) for the Linode.<br /><br />A successful request triggers an `interface_create` [event](https://techdocs.akamai.com/linode-api/reference/get-events).<br /><br />You need to set one interface type: `vpc`, `public`, or `vlan`. Omit the others or set them to `null`.<br /><br />A Linode can have up to three interfaces:<br /><br />- Only one `public` interface is allowed on a Linode.<br /><br />- Multiple `vlan` interfaces are allowed, provided that they belong to distinct VLANs, which have unique `vlan_labels`.<br /><br />- One `vpc` interface is allowed.<br /><br />The Linode must be located in a region that supports Linode interfaces. Run [Get a region](https://techdocs.akamai.com/linode-api/reference/get-region) to see if interfaces are supported in that region. __CLI: Public interface__.<br /><br />    ```<br />    linode-cli linodes interface-add $linodeId \<br />  --firewall_id 123 \<br />  --default_route.ipv4 true \<br />  --default_route.ipv6 true \<br />  --public.ipv4.addresses '[&#123;"address": "192.0.2.141", "primary": true&#125;, &#123;"address": "auto", "primary": false&#125;]' \<br />  --public.ipv6.ranges '[&#123;"range": "2001:0db8::1/64"&#125;, &#123;"range": "/64"&#125;]'<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />- __CLI: VLAN interface__.<br /><br />    ```<br />    linode-cli linodes interface-add $linodeId \<br />  --vlan.vlan_label my-vlan \<br />  --vlan.ipam_address 192.168.2.2/24<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />- __CLI: VPC interface__.<br /><br />    ```<br />    linode-cli linodes interface-add $linodeId \<br />  --firewall_id 123 \<br />  --default_route.ipv4 true \<br />  --vpc.subnet_id 321 \<br />  --vpc.ipv4.addresses '[&#123;"address": "10.0.0.1", "primary": true, "nat_1_1_address": "auto"&#125;, &#123;"address": "auto", "primary": false, "nat_1_1_address": null&#125;]' \<br />  --vpc.ipv4.ranges '[&#123;"range": "/28"&#125;, &#123;"range": "10.11.12.0/24"&#125;]'<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-linodeId"><code>linodeId</code></a>, <a href="#parameter-interfaceId"><code>interfaceId</code></a></td>
    <td></td>
    <td>__Beta__ Update the configuration of a Linode interface. __CLI: Public interface__.<br /><br />    ```<br />    linode-cli linodes interface-update $linodeId $interfaceId \<br />  --default_route.ipv4 true \<br />  --default_route.ipv6 false \<br />  --public.ipv4.addresses '[&#123;"address": "192.0.2.141", "primary": true&#125;, &#123;"address": "auto", "primary": false&#125;]' \<br />  --public.ipv6.ranges '[&#123;"range": "2001:0db8"::1/64"&#125;, &#123;"range": "/64"&#125;]'<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />- __CLI: VLAN interface__.<br /><br />    ```<br />    linode-cli linodes interface-update $linodeId $interfaceId \<br />  --vlan.vlan_label my-vlan \<br />  --vlan.ipam_address 192.168.2.2/24<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />- __CLI: VPC interface__.<br /><br />    ```<br />    linode-cli linodes interface-update $linodeId $interfaceId \<br />  --default_route.ipv4 true \<br />  --vpc.subnet_id 321 \<br />  --vpc.ipv4.addresses '[&#123;"address": "10.0.0.1", "primary": true, "nat_1_1_address": "auto"&#125;, &#123;"address": "auto", "primary": false, "nat_1_1_address": null&#125;]' \<br />  --vpc.ipv4.ranges '[&#123;"range": "/28"&#125;, &#123;"range": "10.11.12.0/24"&#125;]'<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-linodeId"><code>linodeId</code></a>, <a href="#parameter-interfaceId"><code>interfaceId</code></a></td>
    <td></td>
    <td>__Beta__ Deletes a Linode interface on a specific Linode. To access this operation, you need the `read_write` [grant](https://techdocs.akamai.com/linode-api/reference/get-user-grants) for the Linode. You can't delete an active interface. First, you need to shut down the associated Linode.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#upgrade"><CopyableCode code="upgrade" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-linodeId"><code>linodeId</code></a></td>
    <td></td>
    <td>__Beta__ Automatically upgrades all legacy config interfaces of a single configuration profile to Linode interfaces. A Linode interface is directly associated with the Linode, rather than being tied to a configuration profile.<br /><br />Firewalls are applied to the Linode interface, not directly to the Linode itself.<br /><br />&gt; ❗️ This upgrade is irreversible<br />&gt;<br />&gt; Once you upgrade a Linode to use Linode interfaces, you can't use legacy config interfaces. This means you can no longer use the Linode with any Linode products that require private IPs, such as NodeBalancer. You can use `dry_run` to preview the upgrade.<br /><br />Before upgrading interfaces, you can check the new Linode interface configuration by performing a dry run, where you set `dry_run` to `true` or omit it. A `dry_run` runs the upgrade logic and returns a JSON representation of what the interface configuration will be after the upgrade without committing any changes.<br /><br />When you run this operation with `dry_run` set to `false`, the following occurs:<br />  - It creates matching interfaces on the Linode based on the interfaces present on the `config_id`.<br />  - All firewalls are removed from the Linode. Any firewalls that were originally attached to the Linode are now applied to the public and VPC interfaces. If the Linode has no firewalls attached, then default firewalls are not used.<br />  - If no legacy config interfaces are defined (`legacy_config`) in the `config_id`, a public interface is created using the public IPv4 assigned to the Linode. The same is the case if the Linode has no config defined.<br />  - For public interfaces, the Linode's current MAC address and SLAAC address are conserved. The MAC address won't change.<br />  - It deletes all legacy config interfaces from all configs.<br />  - It returns the list of interfaces for the Linode.<br /><br />Requirements:<br />  - The `config_id` for the legacy config interfaces can't use a public interface private IPv4 address.<br />  - The Linode needs a MAC address in the database if it's IPv6 enabled. If it doesn't, an error message tells you what to do.<br />  - The Linode must be in a region that supports Linode interfaces. Run [Get a region](https://techdocs.akamai.com/linode-api/reference/get-region).<br />  - Your account must allow creation of Linodes with Linode interfaces, run [Get account settings](https://techdocs.akamai.com/linode-api/reference/get-account-settings).<br />  - If the Linode has a user with a non-standard username, it can't be upgraded.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-interfaceId">
    <td><CopyableCode code="interfaceId" /></td>
    <td><code>string</code></td>
    <td>The `id` of the Linode interface.</td>
</tr>
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
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

__Beta__ Returns an interface assigned to a specific Linode. This operation requires the `read_only` [grant](https://techdocs.akamai.com/linode-api/reference/get-user-grants) for the Linode.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
created,
default_route,
mac_address,
public,
updated,
version,
vlan,
vpc
FROM linode.linode.interfaces
WHERE linodeId = '{{ linodeId }}' -- required
AND interfaceId = '{{ interfaceId }}' -- required
;
```
</TabItem>
<TabItem value="list">

__Beta__ This operation returns all interfaces assigned to a specific Linode. They list in the order they were created. On the Linode, interfaces also list in this order, and are typically named `eth0`, `eth1`, `eth2`, and so on. The MAC address is the most reliable method to identify an interface. This operation requires the `read_only` [grant](https://techdocs.akamai.com/linode-api/reference/get-user-grants) for the Linode. The Linode needs to use `interfaces` and not configuration profile interfaces. Run [Get account settings](https://techdocs.akamai.com/linode-api/reference/get-account-settings) to see if Linode interfaces are supported.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
interfaces
FROM linode.linode.interfaces
WHERE linodeId = '{{ linodeId }}' -- required
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

__Beta__ Creates an interface for the Linode. This interface links to the Linode, rather than to a configuration profile. You can create, delete, or update interfaces when the Linode is either powered off or in the process of being created.<br /><br />Firewalls are applied to the Linode interface, not directly to the Linode itself. You can add, delete, or update these firewalls at any time.<br /><br />This operation requires the `read_write` [grant](https://techdocs.akamai.com/linode-api/reference/get-user-grants) for the Linode.<br /><br />A successful request triggers an `interface_create` [event](https://techdocs.akamai.com/linode-api/reference/get-events).<br /><br />You need to set one interface type: `vpc`, `public`, or `vlan`. Omit the others or set them to `null`.<br /><br />A Linode can have up to three interfaces:<br /><br />- Only one `public` interface is allowed on a Linode.<br /><br />- Multiple `vlan` interfaces are allowed, provided that they belong to distinct VLANs, which have unique `vlan_labels`.<br /><br />- One `vpc` interface is allowed.<br /><br />The Linode must be located in a region that supports Linode interfaces. Run [Get a region](https://techdocs.akamai.com/linode-api/reference/get-region) to see if interfaces are supported in that region. __CLI: Public interface__.<br /><br />    ```<br />    linode-cli linodes interface-add $linodeId \<br />  --firewall_id 123 \<br />  --default_route.ipv4 true \<br />  --default_route.ipv6 true \<br />  --public.ipv4.addresses '[&#123;"address": "192.0.2.141", "primary": true&#125;, &#123;"address": "auto", "primary": false&#125;]' \<br />  --public.ipv6.ranges '[&#123;"range": "2001:0db8::1/64"&#125;, &#123;"range": "/64"&#125;]'<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />- __CLI: VLAN interface__.<br /><br />    ```<br />    linode-cli linodes interface-add $linodeId \<br />  --vlan.vlan_label my-vlan \<br />  --vlan.ipam_address 192.168.2.2/24<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />- __CLI: VPC interface__.<br /><br />    ```<br />    linode-cli linodes interface-add $linodeId \<br />  --firewall_id 123 \<br />  --default_route.ipv4 true \<br />  --vpc.subnet_id 321 \<br />  --vpc.ipv4.addresses '[&#123;"address": "10.0.0.1", "primary": true, "nat_1_1_address": "auto"&#125;, &#123;"address": "auto", "primary": false, "nat_1_1_address": null&#125;]' \<br />  --vpc.ipv4.ranges '[&#123;"range": "/28"&#125;, &#123;"range": "10.11.12.0/24"&#125;]'<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.linode.interfaces (
default_route,
firewall_id,
public,
vlan,
vpc,
linodeId
)
SELECT 
'{{ default_route }}',
{{ firewall_id }},
'{{ public }}',
'{{ vlan }}',
'{{ vpc }}',
'{{ linodeId }}'
RETURNING
id,
created,
default_route,
mac_address,
public,
updated,
version,
vlan,
vpc
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: interfaces
  props:
    - name: linodeId
      value: "{{ linodeId }}"
      description: Required parameter for the interfaces resource.
    - name: default_route
      description: |
        Indicates if the interface serves as the default route when multiple interfaces are eligible for this role. A public interface can have both an IPv4 \`default_route\` and an IPv6 \`default_route\`, provided it has at least one IP address of the corresponding type.
      value:
        ipv4: {{ ipv4 }}
        ipv6: {{ ipv6 }}
    - name: firewall_id
      value: {{ firewall_id }}
      description: |
        The enabled firewall to secure a VPC or public interface. Not allowed for VLAN interfaces. If a \`firewall_id\` is not provided for a VPC or a public interface, then its [default interface firewall](https://techdocs.akamai.com/linode-api/reference/get-linode-interface-firewalls) is used. If a default firewall is not available, and \`null\` is not specified, the request fails. Setting the \`firewall_id\` as \`null\` indicates that no firewall device will be attached to the interface.
    - name: public
      description: |
        Public interface settings. A Linode can have only one public interface. A public interface can have both IPv4 and IPv6 configurations.
      value:
        ipv4:
          addresses:
            - address: "{{ address }}"
              primary: {{ primary }}
        ipv6:
          ranges:
            - range: "{{ range }}"
    - name: vlan
      description: |
        VLAN interface settings. A Linode can have up to three VLAN interfaces, with a unique \`vlan_label\` for each.
      value:
        ipam_address: "{{ ipam_address }}"
        vlan_label: "{{ vlan_label }}"
    - name: vpc
      description: |
        VPC interface settings. A Linode can have one VPC interface. The maximum number of interfaces allowed on a Linode is three.
      value:
        ipv4:
          addresses:
            - address: "{{ address }}"
              nat_1_1_address: "{{ nat_1_1_address }}"
              primary: {{ primary }}
          ranges:
            - range: "{{ range }}"
        subnet_id: {{ subnet_id }}
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

__Beta__ Update the configuration of a Linode interface. __CLI: Public interface__.<br /><br />    ```<br />    linode-cli linodes interface-update $linodeId $interfaceId \<br />  --default_route.ipv4 true \<br />  --default_route.ipv6 false \<br />  --public.ipv4.addresses '[&#123;"address": "192.0.2.141", "primary": true&#125;, &#123;"address": "auto", "primary": false&#125;]' \<br />  --public.ipv6.ranges '[&#123;"range": "2001:0db8"::1/64"&#125;, &#123;"range": "/64"&#125;]'<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />- __CLI: VLAN interface__.<br /><br />    ```<br />    linode-cli linodes interface-update $linodeId $interfaceId \<br />  --vlan.vlan_label my-vlan \<br />  --vlan.ipam_address 192.168.2.2/24<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />- __CLI: VPC interface__.<br /><br />    ```<br />    linode-cli linodes interface-update $linodeId $interfaceId \<br />  --default_route.ipv4 true \<br />  --vpc.subnet_id 321 \<br />  --vpc.ipv4.addresses '[&#123;"address": "10.0.0.1", "primary": true, "nat_1_1_address": "auto"&#125;, &#123;"address": "auto", "primary": false, "nat_1_1_address": null&#125;]' \<br />  --vpc.ipv4.ranges '[&#123;"range": "/28"&#125;, &#123;"range": "10.11.12.0/24"&#125;]'<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.linode.interfaces
SET 
default_route = '{{ default_route }}',
public = '{{ public }}',
vlan = '{{ vlan }}',
vpc = '{{ vpc }}'
WHERE 
linodeId = '{{ linodeId }}' --required
AND interfaceId = '{{ interfaceId }}' --required
RETURNING
id,
created,
default_route,
mac_address,
public,
updated,
version,
vlan,
vpc;
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

__Beta__ Deletes a Linode interface on a specific Linode. To access this operation, you need the `read_write` [grant](https://techdocs.akamai.com/linode-api/reference/get-user-grants) for the Linode. You can't delete an active interface. First, you need to shut down the associated Linode.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.linode.interfaces
WHERE linodeId = '{{ linodeId }}' --required
AND interfaceId = '{{ interfaceId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="upgrade"
    values={[
        { label: 'upgrade', value: 'upgrade' }
    ]}
>
<TabItem value="upgrade">

__Beta__ Automatically upgrades all legacy config interfaces of a single configuration profile to Linode interfaces. A Linode interface is directly associated with the Linode, rather than being tied to a configuration profile.<br /><br />Firewalls are applied to the Linode interface, not directly to the Linode itself.<br /><br />&gt; ❗️ This upgrade is irreversible<br />&gt;<br />&gt; Once you upgrade a Linode to use Linode interfaces, you can't use legacy config interfaces. This means you can no longer use the Linode with any Linode products that require private IPs, such as NodeBalancer. You can use `dry_run` to preview the upgrade.<br /><br />Before upgrading interfaces, you can check the new Linode interface configuration by performing a dry run, where you set `dry_run` to `true` or omit it. A `dry_run` runs the upgrade logic and returns a JSON representation of what the interface configuration will be after the upgrade without committing any changes.<br /><br />When you run this operation with `dry_run` set to `false`, the following occurs:<br />  - It creates matching interfaces on the Linode based on the interfaces present on the `config_id`.<br />  - All firewalls are removed from the Linode. Any firewalls that were originally attached to the Linode are now applied to the public and VPC interfaces. If the Linode has no firewalls attached, then default firewalls are not used.<br />  - If no legacy config interfaces are defined (`legacy_config`) in the `config_id`, a public interface is created using the public IPv4 assigned to the Linode. The same is the case if the Linode has no config defined.<br />  - For public interfaces, the Linode's current MAC address and SLAAC address are conserved. The MAC address won't change.<br />  - It deletes all legacy config interfaces from all configs.<br />  - It returns the list of interfaces for the Linode.<br /><br />Requirements:<br />  - The `config_id` for the legacy config interfaces can't use a public interface private IPv4 address.<br />  - The Linode needs a MAC address in the database if it's IPv6 enabled. If it doesn't, an error message tells you what to do.<br />  - The Linode must be in a region that supports Linode interfaces. Run [Get a region](https://techdocs.akamai.com/linode-api/reference/get-region).<br />  - Your account must allow creation of Linodes with Linode interfaces, run [Get account settings](https://techdocs.akamai.com/linode-api/reference/get-account-settings).<br />  - If the Linode has a user with a non-standard username, it can't be upgraded.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.linode.interfaces.upgrade 
@linodeId='{{ linodeId }}' --required 
@@json=
'{
"config_id": {{ config_id }}, 
"dry_run": {{ dry_run }}
}'
;
```
</TabItem>
</Tabs>
