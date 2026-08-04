--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
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

Creates, updates, deletes, gets or lists a <code>clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.lke.clusters" /></td></tr>
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

Returns a single Kubernetes cluster.

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
    <td>__Read-only__ This Kubernetes cluster's unique ID.</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_id" /></td>
    <td><code>integer</code></td>
    <td>__Beta__, __LKE Enterprise__ The ID of the VPC subnet to use for the Kubernetes cluster. This subnet must have both IPv4 and IPv6 enabled (dual-stack). When this field is specified, the cluster is deployed to the given subnet and its corresponding VPC. To specify a VPC and have a subnet auto-allocated, use `vpc_id` instead. If `subnet_id` and `vpc_id` are both unspecified, a new VPC and subnet are auto-allocated for the cluster.  &gt; 🚧 &gt; &gt; This field is available as part of the beta API and can only be used with accounts that have been enrolled in the LKE Enterprise LA. Call the URL with the `apiVersion` path parameter set to `v4beta`.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>integer</code></td>
    <td>__Beta__, __LKE Enterprise__ The ID of the VPC to use for the Kubernetes cluster. An appropriately sized subnet is auto-allocated. To specify an existing subnet, use `subnet_id` instead. If `subnet_id` and `vpc_id` are both unspecified, a new VPC and subnet are auto-allocated for the cluster.  &gt; 🚧 &gt; &gt; This field is available as part of the beta API and can only be used with accounts that have been enrolled in the LKE Enterprise LA. Call the URL with the `apiVersion` path parameter set to `v4beta`.</td>
</tr>
<tr>
    <td><CopyableCode code="apl_enabled" /></td>
    <td><code>boolean</code></td>
    <td>__Write-once__ Indicates whether the Akamai App Platform is installed during creation of the LKE cluster. It defaults to `false`. If set to `true`, `control_plane.high_availability` also needs to be `true`. Automatic installation of the App Platform is only possible when creating a new cluster (not when modifying existing clusters).</td>
</tr>
<tr>
    <td><CopyableCode code="control_plane" /></td>
    <td><code>object</code></td>
    <td>Defines settings for the Kubernetes control plane, including enabling High Availability (HA) for the control plane.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this Kubernetes cluster was created. (example: 2019-09-12T21:25:30Z)</td>
</tr>
<tr>
    <td><CopyableCode code="k8s_version" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The desired Kubernetes version for this Kubernetes cluster in the format of `<major>.<minor>`. The latest supported patch version is deployed. (example: 1.33)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ This Kubernetes cluster's unique label for display purposes only. Labels have the following constraints:    - UTF-8 characters will be returned by the API using escape sequences of their Unicode code points. For example, the Japanese character _か_ is 3 bytes in UTF-8 (`0xE382AB`). Its Unicode code point is 2 bytes (`0x30AB`). APIv4 supports this character and the API will return it as the escape sequence using six 1 byte characters which represent 2 bytes of Unicode code point (`"\u30ab"`).    - 4 byte UTF-8 characters are not supported.    - If the label is entirely composed of UTF-8 characters, the API response will return the code points using up to 193 1 byte characters. (example: lkecluster12345)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ This Kubernetes cluster's location. (example: us-central)</td>
</tr>
<tr>
    <td><CopyableCode code="stack_type" /></td>
    <td><code>string</code></td>
    <td>__Beta__, __LKE Enterprise__ The networking stack type of the Kubernetes cluster. This specifies that the cluster is IPv4 only (default) or supports both IPv4 and IPv6 (dual-stack).  &gt; 🚧 &gt; &gt; This field is available as part of the beta API and can only be used with accounts that have been enrolled in the LKE Enterprise LA. Call the URL with the `apiVersion` path parameter set to `v4beta`. (ipv4, ipv4-ipv6) (default: ipv4, example: ipv4)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>__Filterable__ An array of tags applied to the Kubernetes cluster. Tags are for organizational purposes only.</td>
</tr>
<tr>
    <td><CopyableCode code="tier" /></td>
    <td><code>string</code></td>
    <td>__Beta__, __Filterable__ The desired Kubernetes tier, either `standard` or `enterprise`.  &gt; 🚧 &gt; &gt; This field is available as part of the beta API. Call the URL with the `apiVersion` path parameter set to `v4beta`. (standard, enterprise) (example: standard)</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this Kubernetes cluster was updated. (example: 2019-09-13T21:24:16Z)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Returns an array of all Kubernetes clusters on your Account.

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
    <td>__Read-only__ This Kubernetes cluster's unique ID.</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_id" /></td>
    <td><code>integer</code></td>
    <td>__Beta__, __LKE Enterprise__ The ID of the VPC subnet to use for the Kubernetes cluster. This subnet must have both IPv4 and IPv6 enabled (dual-stack). When this field is specified, the cluster is deployed to the given subnet and its corresponding VPC. To specify a VPC and have a subnet auto-allocated, use `vpc_id` instead. If `subnet_id` and `vpc_id` are both unspecified, a new VPC and subnet are auto-allocated for the cluster.  &gt; 🚧 &gt; &gt; This field is available as part of the beta API and can only be used with accounts that have been enrolled in the LKE Enterprise LA. Call the URL with the `apiVersion` path parameter set to `v4beta`.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>integer</code></td>
    <td>__Beta__, __LKE Enterprise__ The ID of the VPC to use for the Kubernetes cluster. An appropriately sized subnet is auto-allocated. To specify an existing subnet, use `subnet_id` instead. If `subnet_id` and `vpc_id` are both unspecified, a new VPC and subnet are auto-allocated for the cluster.  &gt; 🚧 &gt; &gt; This field is available as part of the beta API and can only be used with accounts that have been enrolled in the LKE Enterprise LA. Call the URL with the `apiVersion` path parameter set to `v4beta`.</td>
</tr>
<tr>
    <td><CopyableCode code="apl_enabled" /></td>
    <td><code>boolean</code></td>
    <td>__Write-once__ Indicates whether the Akamai App Platform is installed during creation of the LKE cluster. It defaults to `false`. If set to `true`, `control_plane.high_availability` also needs to be `true`. Automatic installation of the App Platform is only possible when creating a new cluster (not when modifying existing clusters).</td>
</tr>
<tr>
    <td><CopyableCode code="control_plane" /></td>
    <td><code>object</code></td>
    <td>Defines settings for the Kubernetes control plane, including enabling High Availability (HA) for the control plane.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this Kubernetes cluster was created. (example: 2019-09-12T21:25:30Z)</td>
</tr>
<tr>
    <td><CopyableCode code="k8s_version" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The desired Kubernetes version for this Kubernetes cluster in the format of `<major>.<minor>`. The latest supported patch version is deployed. (example: 1.33)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ This Kubernetes cluster's unique label for display purposes only. Labels have the following constraints:    - UTF-8 characters will be returned by the API using escape sequences of their Unicode code points. For example, the Japanese character _か_ is 3 bytes in UTF-8 (`0xE382AB`). Its Unicode code point is 2 bytes (`0x30AB`). APIv4 supports this character and the API will return it as the escape sequence using six 1 byte characters which represent 2 bytes of Unicode code point (`"\u30ab"`).    - 4 byte UTF-8 characters are not supported.    - If the label is entirely composed of UTF-8 characters, the API response will return the code points using up to 193 1 byte characters. (example: lkecluster12345)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ This Kubernetes cluster's location. (example: us-central)</td>
</tr>
<tr>
    <td><CopyableCode code="stack_type" /></td>
    <td><code>string</code></td>
    <td>__Beta__, __LKE Enterprise__ The networking stack type of the Kubernetes cluster. This specifies that the cluster is IPv4 only (default) or supports both IPv4 and IPv6 (dual-stack).  &gt; 🚧 &gt; &gt; This field is available as part of the beta API and can only be used with accounts that have been enrolled in the LKE Enterprise LA. Call the URL with the `apiVersion` path parameter set to `v4beta`. (ipv4, ipv4-ipv6) (default: ipv4, example: ipv4)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>__Filterable__ An array of tags applied to the Kubernetes cluster. Tags are for organizational purposes only.</td>
</tr>
<tr>
    <td><CopyableCode code="tier" /></td>
    <td><code>string</code></td>
    <td>__Beta__, __Filterable__ The desired Kubernetes tier, either `standard` or `enterprise`.  &gt; 🚧 &gt; &gt; This field is available as part of the beta API. Call the URL with the `apiVersion` path parameter set to `v4beta`. (standard, enterprise) (example: standard)</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this Kubernetes cluster was updated. (example: 2019-09-13T21:24:16Z)</td>
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
    <td><a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Get a specific Cluster by ID.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Lists current Kubernetes clusters available on your account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-label"><code>label</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-k8s_version"><code>k8s_version</code></a>, <a href="#parameter-node_pools"><code>node_pools</code></a></td>
    <td></td>
    <td>Creates a Kubernetes cluster. The Kubernetes cluster will be created asynchronously. You can use the events system to determine when the Kubernetes cluster is ready to use. Please note that it often takes 2-5 minutes before the [Kubernetes API endpoints](https://techdocs.akamai.com/linode-api/reference/get-lke-cluster-api-endpoints) and the [Kubeconfig file](https://techdocs.akamai.com/linode-api/reference/get-lke-cluster-kubeconfig) for the new cluster are ready.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Updates a Kubernetes cluster.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Deletes a cluster from your account.<br /><br />&gt; 🚧<br />&gt;<br />&gt; Deleting a cluster is a destructive action and can't be undone.<br /><br />When a cluster is deleted, all supporting Kubernetes services are removed from your account along with all Linodes in your cluster's node pools. You must have `read_write` permission to the cluster to initiate deletion.<br /><br />Some additional services associated with your cluster remain active on your account. These services include NodeBalancers and Block Storage volumes. To avoid further charges, delete these services manually through Cloud Manager, the Linode CLI, or the Linode API.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#recycle"><CopyableCode code="recycle" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Recycles all nodes in all pools of a designated Kubernetes Cluster. All Linodes within the Cluster will be deleted and replaced with new Linodes on a rolling basis, which may take several minutes. Replacement Nodes are installed with the latest available patch version for the Cluster's current Kubernetes minor release.<br /><br />__Any local storage on deleted Linodes (such as `hostPath` and `emptyDir` volumes, or `local` PersistentVolumes) will be erased.__<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#regenerate"><CopyableCode code="regenerate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Regenerate the Kubeconfig file and/or the service account token for a Cluster.<br /><br />This is a helper operation that allows performing both the [Delete a Kubeconfig](https://techdocs.akamai.com/linode-api/reference/delete-lke-cluster-kubeconfig) and the [Delete a service token](https://techdocs.akamai.com/linode-api/reference/delete-lke-service-token) operations with a single request.<br /><br />When using this operation, at least one of `kubeconfig` or `servicetoken` is required.<br /><br />&gt; 📘<br />&gt;<br />&gt; When regenerating a service account token, the cluster's control plane components and Linode CSI drivers are also restarted and configured with the new token. High availability clusters shouldn't experience any disruption, while standard clusters may experience brief control plane downtime while components are restarted.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete_service_token"><CopyableCode code="delete_service_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Delete and regenerate the service account token for a Cluster.<br /><br />&gt; 📘<br />&gt;<br />&gt; When you regenerate a service account token, the cluster's control plane components and Linode CSI drivers are also restarted and configured with the new token. High availability clusters shouldn't experience any disruption, while standard clusters may experience brief control plane downtime while components are restarted.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
    <td>ID of the target Kubernetes cluster. (example: &#123;&#123;clusterId&#125;&#125;)</td>
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

Get a specific Cluster by ID.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
subnet_id,
vpc_id,
apl_enabled,
control_plane,
created,
k8s_version,
label,
region,
stack_type,
tags,
tier,
updated
FROM linode.lke.clusters
WHERE clusterId = '{{ clusterId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists current Kubernetes clusters available on your account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
subnet_id,
vpc_id,
apl_enabled,
control_plane,
created,
k8s_version,
label,
region,
stack_type,
tags,
tier,
updated
FROM linode.lke.clusters
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

Creates a Kubernetes cluster. The Kubernetes cluster will be created asynchronously. You can use the events system to determine when the Kubernetes cluster is ready to use. Please note that it often takes 2-5 minutes before the [Kubernetes API endpoints](https://techdocs.akamai.com/linode-api/reference/get-lke-cluster-api-endpoints) and the [Kubeconfig file](https://techdocs.akamai.com/linode-api/reference/get-lke-cluster-kubeconfig) for the new cluster are ready.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.lke.clusters (
apl_enabled,
control_plane,
k8s_version,
label,
node_pools,
region,
stack_type,
subnet_id,
tags,
tier,
vpc_id
)
SELECT 
{{ apl_enabled }},
'{{ control_plane }}',
'{{ k8s_version }}' /* required */,
'{{ label }}' /* required */,
'{{ node_pools }}' /* required */,
'{{ region }}' /* required */,
'{{ stack_type }}',
{{ subnet_id }},
'{{ tags }}',
'{{ tier }}',
{{ vpc_id }}
RETURNING
id,
subnet_id,
vpc_id,
apl_enabled,
control_plane,
created,
k8s_version,
label,
region,
stack_type,
tags,
tier,
updated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: clusters
  props:
    - name: apl_enabled
      value: {{ apl_enabled }}
      description: |
        __Write-once__ Indicates whether the Akamai App Platform is installed during creation of the LKE cluster. It defaults to \`false\`. If set to \`true\`, \`control_plane.high_availability\` also needs to be \`true\`. Automatic installation of the App Platform is only possible when creating a new cluster (not when modifying existing clusters).
    - name: control_plane
      description: |
        Defines settings for the Kubernetes control plane, including High Availability (HA) and an IP-based Access Control List (ACL) for the control plane components.
      value:
        acl:
          addresses:
            ipv4:
              - "{{ ipv4 }}"
            ipv6:
              - "{{ ipv6 }}"
          enabled: {{ enabled }}
          revision-id: "{{ revision-id }}"
        audit_logs_enabled: {{ audit_logs_enabled }}
        high_availability: {{ high_availability }}
    - name: k8s_version
      value: "{{ k8s_version }}"
      description: |
        __Filterable__ The desired Kubernetes version for this Kubernetes cluster in the format of \`<major>.<minor>\`. The latest supported patch version is deployed.
    - name: label
      value: "{{ label }}"
      description: |
        __Filterable__ This Kubernetes cluster's unique label for display purposes only. Labels have the following constraints:
        - UTF-8 characters will be returned by the API using escape sequences of their Unicode code points. For example, the Japanese character _か_ is 3 bytes in UTF-8 (\`0xE382AB\`). Its Unicode code point is 2 bytes (\`0x30AB\`). APIv4 supports this character and the API will return it as the escape sequence using six 1 byte characters which represent 2 bytes of Unicode code point (\`"\u30ab"\`).
        - 4 byte UTF-8 characters are not supported.
        - If the label is entirely composed of UTF-8 characters, the API response will return the code points using up to 193 1 byte characters.
    - name: node_pools
      value:
        - autoscaler:
            enabled: {{ enabled }}
            max: {{ max }}
            min: {{ min }}
          count: {{ count }}
          disk_encryption: "{{ disk_encryption }}"
          disks: "{{ disks }}"
          k8s_version: "{{ k8s_version }}"
          label: "{{ label }}"
          labels: "{{ labels }}"
          tags: "{{ tags }}"
          taints: "{{ taints }}"
          type: "{{ type }}"
          update_strategy: "{{ update_strategy }}"
    - name: region
      value: "{{ region }}"
      description: |
        __Filterable__ This Kubernetes cluster's location.
    - name: stack_type
      value: "{{ stack_type }}"
      description: |
        __Beta__, __LKE Enterprise__ The networking stack type of the Kubernetes cluster. This specifies that the cluster is IPv4 only (default) or supports both IPv4 and IPv6 (dual-stack).
        > 🚧
        >
        > This field is available as part of the beta API and can only be used with accounts that have been enrolled in the LKE Enterprise LA. Call the URL with the \`apiVersion\` path parameter set to \`v4beta\`.
      valid_values: ['ipv4', 'ipv4-ipv6']
      default: ipv4
    - name: subnet_id
      value: {{ subnet_id }}
      description: |
        __Beta__, __LKE Enterprise__ The ID of the VPC subnet to use for the Kubernetes cluster. This subnet must have both IPv4 and IPv6 enabled (dual-stack). When this field is specified, the cluster is deployed to the given subnet and its corresponding VPC. To specify a VPC and have a subnet auto-allocated, use \`vpc_id\` instead. If \`subnet_id\` and \`vpc_id\` are both unspecified, a new VPC and subnet are auto-allocated for the cluster.
        > 🚧
        >
        > This field is available as part of the beta API and can only be used with accounts that have been enrolled in the LKE Enterprise LA. Call the URL with the \`apiVersion\` path parameter set to \`v4beta\`.
    - name: tags
      value:
        - "{{ tags }}"
      description: |
        __Filterable__ An array of tags applied to the Kubernetes cluster. Tags are for organizational purposes only.
    - name: tier
      value: "{{ tier }}"
      description: |
        __Beta__, __Filterable__ The desired Kubernetes tier, either \`standard\` or \`enterprise\`.
        > 🚧
        >
        > This field is available as part of the beta API. Call the URL with the \`apiVersion\` path parameter set to \`v4beta\`.
      valid_values: ['standard', 'enterprise']
    - name: vpc_id
      value: {{ vpc_id }}
      description: |
        __Beta__, __LKE Enterprise__ The ID of the VPC to use for the Kubernetes cluster. An appropriately sized subnet is auto-allocated. To specify an existing subnet, use \`subnet_id\` instead. If \`subnet_id\` and \`vpc_id\` are both unspecified, a new VPC and subnet are auto-allocated for the cluster.
        > 🚧
        >
        > This field is available as part of the beta API and can only be used with accounts that have been enrolled in the LKE Enterprise LA. Call the URL with the \`apiVersion\` path parameter set to \`v4beta\`.
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

Updates a Kubernetes cluster.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.lke.clusters
SET 
control_plane = '{{ control_plane }}',
k8s_version = '{{ k8s_version }}',
label = '{{ label }}',
tags = '{{ tags }}'
WHERE 
clusterId = '{{ clusterId }}' --required
RETURNING
id,
subnet_id,
vpc_id,
apl_enabled,
control_plane,
created,
k8s_version,
label,
region,
stack_type,
tags,
tier,
updated;
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

Deletes a cluster from your account.<br /><br />&gt; 🚧<br />&gt;<br />&gt; Deleting a cluster is a destructive action and can't be undone.<br /><br />When a cluster is deleted, all supporting Kubernetes services are removed from your account along with all Linodes in your cluster's node pools. You must have `read_write` permission to the cluster to initiate deletion.<br /><br />Some additional services associated with your cluster remain active on your account. These services include NodeBalancers and Block Storage volumes. To avoid further charges, delete these services manually through Cloud Manager, the Linode CLI, or the Linode API.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.lke.clusters
WHERE clusterId = '{{ clusterId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="recycle"
    values={[
        { label: 'recycle', value: 'recycle' },
        { label: 'regenerate', value: 'regenerate' },
        { label: 'delete_service_token', value: 'delete_service_token' }
    ]}
>
<TabItem value="recycle">

Recycles all nodes in all pools of a designated Kubernetes Cluster. All Linodes within the Cluster will be deleted and replaced with new Linodes on a rolling basis, which may take several minutes. Replacement Nodes are installed with the latest available patch version for the Cluster's current Kubernetes minor release.<br /><br />__Any local storage on deleted Linodes (such as `hostPath` and `emptyDir` volumes, or `local` PersistentVolumes) will be erased.__<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.lke.clusters.recycle 
@clusterId='{{ clusterId }}' --required
;
```
</TabItem>
<TabItem value="regenerate">

Regenerate the Kubeconfig file and/or the service account token for a Cluster.<br /><br />This is a helper operation that allows performing both the [Delete a Kubeconfig](https://techdocs.akamai.com/linode-api/reference/delete-lke-cluster-kubeconfig) and the [Delete a service token](https://techdocs.akamai.com/linode-api/reference/delete-lke-service-token) operations with a single request.<br /><br />When using this operation, at least one of `kubeconfig` or `servicetoken` is required.<br /><br />&gt; 📘<br />&gt;<br />&gt; When regenerating a service account token, the cluster's control plane components and Linode CSI drivers are also restarted and configured with the new token. High availability clusters shouldn't experience any disruption, while standard clusters may experience brief control plane downtime while components are restarted.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.lke.clusters.regenerate 
@clusterId='{{ clusterId }}' --required 
@@json=
'{
"kubeconfig": {{ kubeconfig }}, 
"servicetoken": {{ servicetoken }}
}'
;
```
</TabItem>
<TabItem value="delete_service_token">

Delete and regenerate the service account token for a Cluster.<br /><br />&gt; 📘<br />&gt;<br />&gt; When you regenerate a service account token, the cluster's control plane components and Linode CSI drivers are also restarted and configured with the new token. High availability clusters shouldn't experience any disruption, while standard clusters may experience brief control plane downtime while components are restarted.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.lke.clusters.delete_service_token 
@clusterId='{{ clusterId }}' --required
;
```
</TabItem>
</Tabs>
