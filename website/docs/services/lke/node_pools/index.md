--- 
title: node_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - node_pools
  - lke
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

Creates, updates, deletes, gets or lists a <code>node_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="node_pools" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.lke.node_pools" /></td></tr>
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

Returns the requested Node Pool.

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
    <td>__Filterable__ This node pool's unique ID.</td>
</tr>
<tr>
    <td><CopyableCode code="autoscaler" /></td>
    <td><code>object</code></td>
    <td>When enabled, the number of nodes autoscales within the defined minimum and maximum values.</td>
</tr>
<tr>
    <td><CopyableCode code="count" /></td>
    <td><code>integer</code></td>
    <td>The number of nodes in the node pool.</td>
</tr>
<tr>
    <td><CopyableCode code="disk_encryption" /></td>
    <td><code>string</code></td>
    <td>Indicates the local disk encryption setting for this LKE node pool. (enabled, disabled) (example: disabled)</td>
</tr>
<tr>
    <td><CopyableCode code="disks" /></td>
    <td><code>array</code></td>
    <td>This node pool's custom disk layout. (x-linode-cli-format: json)</td>
</tr>
<tr>
    <td><CopyableCode code="k8s_version" /></td>
    <td><code>string</code></td>
    <td>__Beta__ The Kubernetes version used for the worker nodes within this node pool. &gt; 🚧 &gt; &gt; This field is available as part of the beta API and is only returned for accounts that have been enrolled in the LKE Enterprise LA. (example: v1.31.8+lke3)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Beta__ The optional label defined for this node Pool.  &gt; 🚧 &gt; &gt; This field is available as part of the beta API and is only returned for accounts that have been enrolled in the LKE Enterprise LA. (example: app-pool)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Key-value pairs added as labels to nodes in the node pool. Labels help classify your nodes and easily select subsets of objects. To learn more, review [Add Labels and Taints to your LKE node pools](https://www.linode.com/docs/products/compute/kubernetes/guides/deploy-and-manage-cluster-with-the-linode-api/#add-labels-and-taints-to-your-lke-node-pools).</td>
</tr>
<tr>
    <td><CopyableCode code="nodes" /></td>
    <td><code>array</code></td>
    <td>Status information for the nodes that are members of this node pool. If a Linode has not been provisioned for a given node slot, the `instance_id` is `null`.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>__Filterable__ An array of tags applied to this object. Tags are for organizational purposes only.</td>
</tr>
<tr>
    <td><CopyableCode code="taints" /></td>
    <td><code>array</code></td>
    <td>Kubernetes taints added to nodes in the node pool. Taints help control how pods are scheduled onto nodes, specifically allowing them to repel certain pods.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The Linode Type for all of the nodes in the node pool. (example: g6-standard-4)</td>
</tr>
<tr>
    <td><CopyableCode code="update_strategy" /></td>
    <td><code>string</code></td>
    <td>__Beta__ Determines when the worker nodes within this node pool upgrade to the latest selected Kubernetes version, after the cluster has been upgraded. This field is required for LKE Enterprise clusters but should not be used for non-enterprise LKE clusters. (rolling_update, on_recycle) (example: on_recycle)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Returns all node pools in this Kubernetes cluster.

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
    <td>__Filterable__ This node pool's unique ID.</td>
</tr>
<tr>
    <td><CopyableCode code="autoscaler" /></td>
    <td><code>object</code></td>
    <td>When enabled, the number of nodes autoscales within the defined minimum and maximum values.</td>
</tr>
<tr>
    <td><CopyableCode code="count" /></td>
    <td><code>integer</code></td>
    <td>The number of nodes in the node pool.</td>
</tr>
<tr>
    <td><CopyableCode code="disk_encryption" /></td>
    <td><code>string</code></td>
    <td>Indicates the local disk encryption setting for this LKE node pool. (enabled, disabled) (example: disabled)</td>
</tr>
<tr>
    <td><CopyableCode code="disks" /></td>
    <td><code>array</code></td>
    <td>This node pool's custom disk layout. (x-linode-cli-format: json)</td>
</tr>
<tr>
    <td><CopyableCode code="k8s_version" /></td>
    <td><code>string</code></td>
    <td>__Beta__ The Kubernetes version used for the worker nodes within this node pool. &gt; 🚧 &gt; &gt; This field is available as part of the beta API and is only returned for accounts that have been enrolled in the LKE Enterprise LA. (example: v1.31.8+lke3)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Beta__ The optional label defined for this node Pool.  &gt; 🚧 &gt; &gt; This field is available as part of the beta API and is only returned for accounts that have been enrolled in the LKE Enterprise LA. (example: app-pool)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Key-value pairs added as labels to nodes in the node pool. Labels help classify your nodes and easily select subsets of objects. To learn more, review [Add Labels and Taints to your LKE node pools](https://www.linode.com/docs/products/compute/kubernetes/guides/deploy-and-manage-cluster-with-the-linode-api/#add-labels-and-taints-to-your-lke-node-pools).</td>
</tr>
<tr>
    <td><CopyableCode code="nodes" /></td>
    <td><code>array</code></td>
    <td>Status information for the nodes that are members of this node pool. If a Linode has not been provisioned for a given node slot, the `instance_id` is `null`.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>__Filterable__ An array of tags applied to this object. Tags are for organizational purposes only.</td>
</tr>
<tr>
    <td><CopyableCode code="taints" /></td>
    <td><code>array</code></td>
    <td>Kubernetes taints added to nodes in the node pool. Taints help control how pods are scheduled onto nodes, specifically allowing them to repel certain pods.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The Linode Type for all of the nodes in the node pool. (example: g6-standard-4)</td>
</tr>
<tr>
    <td><CopyableCode code="update_strategy" /></td>
    <td><code>string</code></td>
    <td>__Beta__ Determines when the worker nodes within this node pool upgrade to the latest selected Kubernetes version, after the cluster has been upgraded. This field is required for LKE Enterprise clusters but should not be used for non-enterprise LKE clusters. (rolling_update, on_recycle) (example: on_recycle)</td>
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
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-poolId"><code>poolId</code></a></td>
    <td></td>
    <td>Get a specific Node Pool by ID.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Returns all active Node Pools on a Kubernetes cluster.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-count"><code>count</code></a></td>
    <td></td>
    <td>Creates a new Node Pool for the designated Kubernetes cluster.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-poolId"><code>poolId</code></a></td>
    <td></td>
    <td>Updates a node pool's count, labels and taints, and autoscaler configuration.<br /><br />Linodes are created or deleted to match changes to the Node Pool's count.<br /><br />Specifying labels or taints on update overwrites any previous values, and updates existing nodes with the new values without a recycle.<br /><br />__Any local storage on deleted Linodes (such as `hostPath` and `emptyDir` volumes, or `local` PersistentVolumes) will be erased.__<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-poolId"><code>poolId</code></a></td>
    <td></td>
    <td>Delete a specific Node Pool from a Kubernetes cluster.<br /><br />__Deleting a Node Pool is a destructive action and cannot be undone.__<br /><br />Deleting a Node Pool will delete all Linodes within that Pool.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#recycle"><CopyableCode code="recycle" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-poolId"><code>poolId</code></a></td>
    <td></td>
    <td>Recycles a Node Pool for the designated Kubernetes Cluster. All Linodes within the Node Pool will be deleted and replaced with new Linodes on a rolling basis, which may take several minutes. Replacement Nodes are installed with the latest available patch for the Cluster's Kubernetes Version.<br /><br />__Any local storage on deleted Linodes (such as `hostPath` and `emptyDir` volumes, or `local` PersistentVolumes) will be erased.__<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-clusterId">
    <td><CopyableCode code="clusterId" /></td>
    <td><code>string</code></td>
    <td>ID of the Kubernetes cluster this Node Pool is attached to. (example: &#123;&#123;clusterId&#125;&#125;)</td>
</tr>
<tr id="parameter-poolId">
    <td><CopyableCode code="poolId" /></td>
    <td><code>string</code></td>
    <td>ID of the Node Pool to be recycled.</td>
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

Get a specific Node Pool by ID.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
autoscaler,
count,
disk_encryption,
disks,
k8s_version,
label,
labels,
nodes,
tags,
taints,
type,
update_strategy
FROM linode.lke.node_pools
WHERE clusterId = '{{ clusterId }}' -- required
AND poolId = '{{ poolId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns all active Node Pools on a Kubernetes cluster.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
autoscaler,
count,
disk_encryption,
disks,
k8s_version,
label,
labels,
nodes,
tags,
taints,
type,
update_strategy
FROM linode.lke.node_pools
WHERE clusterId = '{{ clusterId }}' -- required
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

Creates a new Node Pool for the designated Kubernetes cluster.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.lke.node_pools (
autoscaler,
count,
disk_encryption,
disks,
k8s_version,
label,
labels,
tags,
taints,
type,
update_strategy,
clusterId
)
SELECT 
'{{ autoscaler }}',
{{ count }} /* required */,
'{{ disk_encryption }}',
'{{ disks }}',
'{{ k8s_version }}',
'{{ label }}',
'{{ labels }}',
'{{ tags }}',
'{{ taints }}',
'{{ type }}' /* required */,
'{{ update_strategy }}',
'{{ clusterId }}'
RETURNING
id,
autoscaler,
count,
disk_encryption,
disks,
k8s_version,
label,
labels,
nodes,
tags,
taints,
type,
update_strategy
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: node_pools
  props:
    - name: clusterId
      value: "{{ clusterId }}"
      description: Required parameter for the node_pools resource.
    - name: autoscaler
      description: |
        When enabled, the number of nodes automatically scales within the defined minimum and maximum values. When making a request, \`max\` and \`min\` require each other.
      value:
        enabled: {{ enabled }}
        max: {{ max }}
        min: {{ min }}
    - name: count
      value: {{ count }}
      description: |
        The number of nodes in the node pool.
    - name: disk_encryption
      value: "{{ disk_encryption }}"
      description: |
        Local disk encryption setting for this LKE node pool. Defaults to \`disabled\`.
      valid_values: ['enabled', 'disabled']
      default: disabled
    - name: disks
      description: |
        This node pool's custom disk layout. Each item in this array will create a new disk partition for each node in this node pool.
        > 📘
        >
        > Omit this field, except for special use cases. The disks specified here are partitions in _addition_ to the primary partition and reduce the size of the primary partition. This can lead to stability problems for the node.
        - The custom disk layout is applied to each node in this node pool.
        - The maximum number of custom disk partitions that can be configured is 7.
        - Once the requested disk partitions are allocated, the remaining disk space is allocated to the node's boot disk.
        - A node pool's custom disk layout is immutable over the lifetime of the node pool.
      value:
        - size: {{ size }}
          type: "{{ type }}"
    - name: k8s_version
      value: "{{ k8s_version }}"
      description: |
        __Beta__, __LKE Enterprise__ The LKE-specific Kubernetes version to use for the worker nodes within this node pool. This field is required when creating node pools on LKE Enterprise clusters.
        > 🚧
        >
        > This field is available as part of the beta API and can only be used with accounts that have been enrolled in the LKE Enterprise LA. Call the URL with the \`apiVersion\` path parameter set to \`v4beta\`.
    - name: label
      value: "{{ label }}"
      description: |
        __Beta__ An optional label for this node pool. Labels can be up to 32 characters long, containing lowercase alphanumeric characters optionally interspersed with dashes.
        A node pool's label also cascades down to its nodes (Linodes). If a label is defined on the node pool, the label for each node is \`<cluster-id>-<nodepool-label>-<hash>\`. If not, the label is \`<cluster-id>-<nodepool-id>-<hash>\`.
        > 🚧
        >
        > This field is available as part of the beta API and can only be used with accounts that have been enrolled in the LKE Enterprise LA. Call the URL with the \`apiVersion\` path parameter set to \`v4beta\`.
    - name: labels
      value: "{{ labels }}"
      description: |
        Key-value pairs added as labels to nodes in the node pool. Labels help classify your nodes and easily select subsets of objects. To learn more, review [Add Labels and Taints to your LKE node pools](https://www.linode.com/docs/products/compute/kubernetes/guides/deploy-and-manage-cluster-with-the-linode-api/#add-labels-and-taints-to-your-lke-node-pools).
        **Label key:**
        - A key can contain alphanumeric characters, dashes (\`-\`), underscores (\`_\`), or dots (\`.\`). Start and end it with an alphanumeric character.
        - If the key begins with a DNS subdomain prefix followed by a single slash, for example \`example.com/my-app\`, the maximum total length of the label key is 128 characters. Domain labels can be up to 62 characters after the '/'. The prefix needs to adhere to [RFC 1123](https://datatracker.ietf.org/doc/html/rfc1123) DNS subdomain restrictions.
        - If the key doesn't begin with a DNS subdomain prefix, the maximum key length is 63 characters.
        Specifying an empty object removes all previously set labels.
        **Label value:**
        - The label's value can contain alphanumeric characters, dashes (\`-\`), underscores (\`_\`), or dots (\`.\`). Start and end it with an alphanumeric character.
        - Can be specified as an empty string value with \`""\`.
    - name: tags
      value:
        - "{{ tags }}"
      description: |
        __Filterable__ Organizational tags to apply to this node pool. When you apply tags to LKE Enterprise node pools, they also apply to the nodes (Linodes) within the node pool. Tags don't cascade down to nodes in non-Enterprise node pools.
    - name: taints
      description: |
        Kubernetes taints to add to node pool nodes. Taints help control how pods are scheduled onto nodes, specifically allowing them to repel certain pods. To learn more, review [Add labels and taints to your LKE node pools](https://www.linode.com/docs/products/compute/kubernetes/guides/deploy-and-manage-cluster-with-the-linode-api/#add-labels-and-taints-to-your-lke-node-pools).
        Specifying an empty array (\`[]\`) removes all previously set taints.
      value:
        - effect: "{{ effect }}"
          key: "{{ key }}"
          value: "{{ value }}"
    - name: type
      value: "{{ type }}"
      description: |
        The Linode Type for all of the nodes in the node pool.
    - name: update_strategy
      value: "{{ update_strategy }}"
      description: |
        __Beta__, __LKE Enterprise__ Determines when the worker nodes within this node pool upgrade to the latest selected Kubernetes version, after the cluster has been upgraded. This field is required when creating node pools on LKE Enterprise clusters.
        - \`rolling_update\`: Immediately triggers a recycle of this node pool when the Kubernetes version is updated.
        - \`on_recycle\` (default): Does not trigger any immediate recycle. New worker nodes are created with the new Kubernetes version. Existing worker nodes will be upgraded when a recycle is manually triggered.
        > 🚧
        >
        > This field is available as part of the beta API and can only be used with accounts that have been enrolled in the LKE Enterprise LA. Call the URL with the \`apiVersion\` path parameter set to \`v4beta\`.
      valid_values: ['rolling_update', 'on_recycle']
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

Updates a node pool's count, labels and taints, and autoscaler configuration.<br /><br />Linodes are created or deleted to match changes to the Node Pool's count.<br /><br />Specifying labels or taints on update overwrites any previous values, and updates existing nodes with the new values without a recycle.<br /><br />__Any local storage on deleted Linodes (such as `hostPath` and `emptyDir` volumes, or `local` PersistentVolumes) will be erased.__<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.lke.node_pools
SET 
autoscaler = '{{ autoscaler }}',
count = {{ count }},
labels = '{{ labels }}',
tags = '{{ tags }}',
taints = '{{ taints }}'
WHERE 
clusterId = '{{ clusterId }}' --required
AND poolId = '{{ poolId }}' --required
RETURNING
id,
autoscaler,
count,
disk_encryption,
disks,
k8s_version,
label,
labels,
nodes,
tags,
taints,
type,
update_strategy;
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

Delete a specific Node Pool from a Kubernetes cluster.<br /><br />__Deleting a Node Pool is a destructive action and cannot be undone.__<br /><br />Deleting a Node Pool will delete all Linodes within that Pool.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.lke.node_pools
WHERE clusterId = '{{ clusterId }}' --required
AND poolId = '{{ poolId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="recycle"
    values={[
        { label: 'recycle', value: 'recycle' }
    ]}
>
<TabItem value="recycle">

Recycles a Node Pool for the designated Kubernetes Cluster. All Linodes within the Node Pool will be deleted and replaced with new Linodes on a rolling basis, which may take several minutes. Replacement Nodes are installed with the latest available patch for the Cluster's Kubernetes Version.<br /><br />__Any local storage on deleted Linodes (such as `hostPath` and `emptyDir` volumes, or `local` PersistentVolumes) will be erased.__<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.lke.node_pools.recycle 
@clusterId='{{ clusterId }}' --required, 
@poolId='{{ poolId }}' --required
;
```
</TabItem>
</Tabs>
