--- 
title: nodes
hide_title: false
hide_table_of_contents: false
keywords:
  - nodes
  - nodebalancers
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

Creates, updates, deletes, gets or lists a <code>nodes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="nodes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.nodebalancers.nodes" /></td></tr>
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

A paginated list of NodeBalancer nodes.

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
    <td>__Read-only__ This node's unique ID.</td>
</tr>
<tr>
    <td><CopyableCode code="config_id" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ The NodeBalancer Config ID that this Node belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="nodebalancer_id" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ The NodeBalancer ID that this Node belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_config_id" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ For VPC backends, you can use the `vpc_config_id` to [get VPC IDs and VPC subnet IDs](https://techdocs.akamai.com/linode-api/reference/get-node-balancer-vpc-config). Returns a `null` value if the backend is not a VPC node. Included only in `&#123;apiVersion&#125;` `v4beta`.</td>
</tr>
<tr>
    <td><CopyableCode code="address" /></td>
    <td><code>string (ip)</code></td>
    <td>The address and port where this backend can be reached: either the Linode’s private IPv4, public IPv6, or the VPC's IPv4 address. (example: 10.0.0.45:80)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>The label for this node.  This is for display purposes only. (example: vpc-node, pattern: <code>&#91;a-zA-Z0-9-_.&#93;&#123;3,32&#125;</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>The mode this NodeBalancer should use when sending traffic to this backend.  - If set to `accept` this backend is accepting traffic. - If set to `reject` this backend will not receive traffic. - If set to `drain` this backend will not receive _new_ traffic, but connections already pinned to it will continue to be routed to it. - If set to `backup`, this backend will only receive traffic if all `accept` nodes are down. (accept, reject, drain, backup) (example: accept)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The current status of this node, based on the configured checks of its NodeBalancer Config. (Unknown, UP, DOWN) (example: UP)</td>
</tr>
<tr>
    <td><CopyableCode code="weight" /></td>
    <td><code>integer</code></td>
    <td>Used when picking a backend to serve a request and is not pinned to a single backend yet. Nodes with a higher weight will receive more traffic.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated list of NodeBalancer nodes.

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
    <td><a href="#parameter-nodeBalancerId"><code>nodeBalancerId</code></a>, <a href="#parameter-configId"><code>configId</code></a>, <a href="#parameter-nodeId"><code>nodeId</code></a></td>
    <td></td>
    <td>Returns information about a single Node, a backend for this NodeBalancer's configured port.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-nodeBalancerId"><code>nodeBalancerId</code></a>, <a href="#parameter-configId"><code>configId</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Returns a paginated list of NodeBalancer nodes associated with this Config. These are the backends that will be sent traffic for this port.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-nodeBalancerId"><code>nodeBalancerId</code></a>, <a href="#parameter-configId"><code>configId</code></a></td>
    <td></td>
    <td>Creates a backend node that can receive traffic for the NodeBalancer configuration. Requests are routed to backend nodes on the specified port based on their `status`. The configurable fields for the backend node depend on the chosen protocol and whether the node is located within a Linode VPC.<br /><br />&gt; 🚧<br />&gt;<br />&gt; You can configure UDP on the same NodeBalancer that also uses TCP, HTTP, or HTTPS, but only when managing it through the API. If UDP is configured and you make changes to the TCP, HTTP or HTTPS settings in Cloud Manager, the existing UDP configuration will be overwritten. This is because Cloud Manager doesn't currently support UDP. __CLI: TCP, HTTP, HTTPS__.<br /><br />    ```<br />    linode-cli nodebalancers node-create \<br />  12345 4567 \<br />  --address 10.0.0.45:80 \<br />  --label node54321 \<br />  --weight 50 \<br />  --mode accept \<br />  --subnet_id 1<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />- __CLI: UDP__.<br /><br />    ```<br />    linode-cli nodebalancers node-create \<br />  12345 4567 \<br />  --address 192.168.210.120:80 \<br />  --label node54321 \<br />  --weight 50<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-nodeBalancerId"><code>nodeBalancerId</code></a>, <a href="#parameter-configId"><code>configId</code></a>, <a href="#parameter-nodeId"><code>nodeId</code></a></td>
    <td></td>
    <td>Updates information about a node, a backend for this NodeBalancer's configured port.<br /><br />&gt; 🚧<br />&gt;<br />&gt; You can configure UDP on the same NodeBalancer that also uses TCP, HTTP, or HTTPS, but only when managing it through the API. If UDP is configured and you make changes to the TCP, HTTP or HTTPS settings in Cloud Manager, the existing UDP configuration will be overwritten. This is because Cloud Manager doesn't currently support UDP. __CLI: TCP, HTTP, HTTPS__.<br /><br />    ```<br />    linode-cli nodebalancers node-update \<br />  12345 4567 54321 \<br />  --address 192.168.210.120:80 \<br />  --label node54321 \<br />  --weight 50 \<br />  --mode accept<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />- __CLI: UDP__.<br /><br />    ```<br />    linode-cli nodebalancers node-create \<br />  12345 4567 \<br />  --address 192.168.210.120:80 \<br />  --label node54321 \<br />  --weight 50<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-nodeBalancerId"><code>nodeBalancerId</code></a>, <a href="#parameter-configId"><code>configId</code></a>, <a href="#parameter-nodeId"><code>nodeId</code></a></td>
    <td></td>
    <td>Deletes a Node from this Config. This backend will no longer receive traffic for the configured port of this NodeBalancer.<br /><br />This does not change or remove the Linode whose address was used in the creation of this Node.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
    <td>The ID of the Config to access.</td>
</tr>
<tr id="parameter-nodeBalancerId">
    <td><CopyableCode code="nodeBalancerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the NodeBalancer. (example: &#123;&#123;nodeBalancerId&#125;&#125;)</td>
</tr>
<tr id="parameter-nodeId">
    <td><CopyableCode code="nodeId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Node to access. (example: &#123;&#123;nodeId&#125;&#125;)</td>
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

Returns information about a single Node, a backend for this NodeBalancer's configured port.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
config_id,
nodebalancer_id,
vpc_config_id,
address,
label,
mode,
status,
weight
FROM linode.nodebalancers.nodes
WHERE nodeBalancerId = '{{ nodeBalancerId }}' -- required
AND configId = '{{ configId }}' -- required
AND nodeId = '{{ nodeId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns a paginated list of NodeBalancer nodes associated with this Config. These are the backends that will be sent traffic for this port.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
*
FROM linode.nodebalancers.nodes
WHERE nodeBalancerId = '{{ nodeBalancerId }}' -- required
AND configId = '{{ configId }}' -- required
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

Creates a backend node that can receive traffic for the NodeBalancer configuration. Requests are routed to backend nodes on the specified port based on their `status`. The configurable fields for the backend node depend on the chosen protocol and whether the node is located within a Linode VPC.<br /><br />&gt; 🚧<br />&gt;<br />&gt; You can configure UDP on the same NodeBalancer that also uses TCP, HTTP, or HTTPS, but only when managing it through the API. If UDP is configured and you make changes to the TCP, HTTP or HTTPS settings in Cloud Manager, the existing UDP configuration will be overwritten. This is because Cloud Manager doesn't currently support UDP. __CLI: TCP, HTTP, HTTPS__.<br /><br />    ```<br />    linode-cli nodebalancers node-create \<br />  12345 4567 \<br />  --address 10.0.0.45:80 \<br />  --label node54321 \<br />  --weight 50 \<br />  --mode accept \<br />  --subnet_id 1<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />- __CLI: UDP__.<br /><br />    ```<br />    linode-cli nodebalancers node-create \<br />  12345 4567 \<br />  --address 192.168.210.120:80 \<br />  --label node54321 \<br />  --weight 50<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.nodebalancers.nodes (
address,
label,
subnet_id,
weight,
nodeBalancerId,
configId
)
SELECT 
'{{ address }}',
'{{ label }}',
{{ subnet_id }},
{{ weight }},
'{{ nodeBalancerId }}',
'{{ configId }}'
RETURNING
id,
config_id,
nodebalancer_id,
vpc_config_id,
address,
label,
mode,
status,
weight
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: nodes
  props:
    - name: nodeBalancerId
      value: "{{ nodeBalancerId }}"
      description: Required parameter for the nodes resource.
    - name: configId
      value: "{{ configId }}"
      description: Required parameter for the nodes resource.
    - name: address
      value: "{{ address }}"
      description: |
        Backend nodes can be Linodes and Linodes within a VPC. The following IP types are supported:
        - For non-VPC backend nodes, the private IPv4 address and port where this backend can be reached.
        - For non-VPC backend nodes, the public IPv6 address and port where this backend can be reached.
        - For backend nodes within a VPC, the IPv4 address and port where this backend can be reached.
    - name: label
      value: "{{ label }}"
      description: |
        The label for this node.  This is for display purposes only.
    - name: subnet_id
      value: {{ subnet_id }}
      description: |
        Required for VPC backend nodes only. The VPC's subnet. To display information about your VPCs and their subnets, run the [List VPCs](https://techdocs.akamai.com/linode-api/reference/get-vpcs) operation.
    - name: weight
      value: {{ weight }}
      description: |
        Used when picking a backend to serve a request and is not pinned to a single backend yet. Nodes with a higher weight will receive more traffic.
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

Updates information about a node, a backend for this NodeBalancer's configured port.<br /><br />&gt; 🚧<br />&gt;<br />&gt; You can configure UDP on the same NodeBalancer that also uses TCP, HTTP, or HTTPS, but only when managing it through the API. If UDP is configured and you make changes to the TCP, HTTP or HTTPS settings in Cloud Manager, the existing UDP configuration will be overwritten. This is because Cloud Manager doesn't currently support UDP. __CLI: TCP, HTTP, HTTPS__.<br /><br />    ```<br />    linode-cli nodebalancers node-update \<br />  12345 4567 54321 \<br />  --address 192.168.210.120:80 \<br />  --label node54321 \<br />  --weight 50 \<br />  --mode accept<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />- __CLI: UDP__.<br /><br />    ```<br />    linode-cli nodebalancers node-create \<br />  12345 4567 \<br />  --address 192.168.210.120:80 \<br />  --label node54321 \<br />  --weight 50<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.nodebalancers.nodes
SET 
address = '{{ address }}',
label = '{{ label }}',
subnet_id = {{ subnet_id }},
weight = {{ weight }}
WHERE 
nodeBalancerId = '{{ nodeBalancerId }}' --required
AND configId = '{{ configId }}' --required
AND nodeId = '{{ nodeId }}' --required
RETURNING
id,
config_id,
nodebalancer_id,
vpc_config_id,
address,
label,
mode,
status,
weight;
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

Deletes a Node from this Config. This backend will no longer receive traffic for the configured port of this NodeBalancer.<br /><br />This does not change or remove the Linode whose address was used in the creation of this Node.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.nodebalancers.nodes
WHERE nodeBalancerId = '{{ nodeBalancerId }}' --required
AND configId = '{{ configId }}' --required
AND nodeId = '{{ nodeId }}' --required
;
```
</TabItem>
</Tabs>
