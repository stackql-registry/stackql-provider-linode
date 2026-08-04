--- 
title: nodes
hide_title: false
hide_table_of_contents: false
keywords:
  - nodes
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

Creates, updates, deletes, gets or lists a <code>nodes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="nodes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.lke.nodes" /></td></tr>
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

Returns the values of a node object in the form that it appears currently in the node pool array.

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
    <td>The Node's ID. (example: 12345-6aa78910bc)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>integer</code></td>
    <td>The Linode's ID. When no Linode is currently provisioned for this Node, this will be `null`.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The creation status of this Node. This status is distinct from this Node's readiness as a Kubernetes Node Object as determined by the command `kubectl get nodes`.  `not_ready` indicates that the Linode is still being created.  `ready` indicates that the Linode has successfully been created and is running Kubernetes software. (ready, not_ready) (example: ready)</td>
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
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-nodeId"><code>nodeId</code></a></td>
    <td></td>
    <td>Returns the values for a specified node object.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-nodeId"><code>nodeId</code></a></td>
    <td></td>
    <td>Deletes a specific Node from a Node Pool.<br /><br />__Deleting a Node is a destructive action and cannot be undone.__<br /><br />Deleting a Node will reduce the size of the Node Pool it belongs to.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#recycle"><CopyableCode code="recycle" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-nodeId"><code>nodeId</code></a></td>
    <td></td>
    <td>Recycles an individual Node in the designated Kubernetes Cluster. The Node will be deleted and replaced with a new Linode, which may take a few minutes. Replacement Nodes are installed with the latest available patch for the Cluster's Kubernetes Version.<br /><br />__Any local storage on deleted Linodes (such as `hostPath` and `emptyDir` volumes, or `local` PersistentVolumes) will be erased.__<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
    <td>ID of the Kubernetes cluster containing the Node. (example: &#123;&#123;clusterId&#125;&#125;)</td>
</tr>
<tr id="parameter-nodeId">
    <td><CopyableCode code="nodeId" /></td>
    <td><code>string</code></td>
    <td>ID of the Node to be recycled. (example: &#123;&#123;nodeId&#125;&#125;)</td>
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

Returns the values for a specified node object.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
instance_id,
status
FROM linode.lke.nodes
WHERE clusterId = '{{ clusterId }}' -- required
AND nodeId = '{{ nodeId }}' -- required
;
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

Deletes a specific Node from a Node Pool.<br /><br />__Deleting a Node is a destructive action and cannot be undone.__<br /><br />Deleting a Node will reduce the size of the Node Pool it belongs to.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.lke.nodes
WHERE clusterId = '{{ clusterId }}' --required
AND nodeId = '{{ nodeId }}' --required
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

Recycles an individual Node in the designated Kubernetes Cluster. The Node will be deleted and replaced with a new Linode, which may take a few minutes. Replacement Nodes are installed with the latest available patch for the Cluster's Kubernetes Version.<br /><br />__Any local storage on deleted Linodes (such as `hostPath` and `emptyDir` volumes, or `local` PersistentVolumes) will be erased.__<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.lke.nodes.recycle 
@clusterId='{{ clusterId }}' --required, 
@nodeId='{{ nodeId }}' --required
;
```
</TabItem>
</Tabs>
