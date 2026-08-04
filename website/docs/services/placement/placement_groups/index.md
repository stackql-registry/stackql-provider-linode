--- 
title: placement_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - placement_groups
  - placement
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

Creates, updates, deletes, gets or lists a <code>placement_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="placement_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.placement.placement_groups" /></td></tr>
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

Returns a single placement group object.

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
    <td>The placement group's ID. You need to provide it for all operations that affect it.</td>
</tr>
<tr>
    <td><CopyableCode code="is_compliant" /></td>
    <td><code>boolean</code></td>
    <td>Whether all of the compute instances in your placement group are compliant. If `true`, all compute instances meet either the grouped-together or spread-apart model, which you determine through your selected `placement_group_type`. If `false`, a compute instance is out of this compliance. For example, assume you've set `anti-affinity:local` as your `placement_group_type` and your group already has three qualifying compute instances on separate hosts, to support the spread-apart model. If a fourth compute instance is assigned that's on the same host as one of the existing three, the placement group is non-compliant. Enforce compliance in your group by setting a `placement_group_policy`.  &gt; 📘 &gt; &gt; Fixing compliance is not self-service. You need to wait for our assistance to physically move compute instances to make the group compliant again.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The unique name set for the placement group. A label has these constraints:  - It needs to begin and end with an alphanumeric character. - It can only consist of alphanumeric characters, hyphens (`-`), underscores (`_`) or periods (`.`). (example: PG_Miami_failover)</td>
</tr>
<tr>
    <td><CopyableCode code="members" /></td>
    <td><code>array</code></td>
    <td>An array of compute instances included in the placement group.</td>
</tr>
<tr>
    <td><CopyableCode code="migrations" /></td>
    <td><code>object</code></td>
    <td>Any compute instances that are being migrated to or from the placement group. Returned as `null` if no migrations are taking place.</td>
</tr>
<tr>
    <td><CopyableCode code="placement_group_policy" /></td>
    <td><code>string</code></td>
    <td>How requests to add future compute instances to your placement group are handled, and whether it remains compliant:  - `strict`. Don't assign a new compute instance if it breaks the grouped-together or spread-apart model set by the `placement_group_type`. Use this to ensure the placement group stays compliant (`is_compliant: true`). - `flexible`. Assign a new compute instance, even if it breaks the grouped-together or spread-apart model set by the `placement_group_type`. This makes the group non-compliant (`is_compliant: false`). You need to wait for Akamai to move the offending compute instance to make it compliant again, once the necessary capacity is available in the region. Offers flexibility to add future compute instances if compliance isn't an immediate concern.  &lt;&lt;LB&gt;&gt;  &gt; 📘 &gt; &gt; In rare cases, non-compliance can occur with a `strict` placement group if Akamai needs to failover or migrate your compute instances for maintenance. Fixing non-compliance for a `strict` placement group is prioritized over a `flexible` group. (strict, flexible) (example: strict)</td>
</tr>
<tr>
    <td><CopyableCode code="placement_group_type" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ How compute instances are distributed in your placement group. A `placement_group_type` using anti-affinity (`anti-affinity:local`) places compute instances in separate hosts, but still in the same region. This best supports the spread-apart model for high availability. A `placement_group_type` using affinity places compute instances physically close together, possibly on the same host. This supports the grouped-together model for low-latency.  &gt; 📘 &gt; &gt; Currently, only `anti_affinity:local` is available for `placement_group_type`. (anti_affinity:local) (example: anti-affinity:local)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ The [region](https://techdocs.akamai.com/linode-api/reference/get-regions) where the placement group was deployed. (example: us-mia)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Returns an array of all placement groups on your Account.

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
    <td>The placement group's ID. You need to provide it for all operations that affect it.</td>
</tr>
<tr>
    <td><CopyableCode code="is_compliant" /></td>
    <td><code>boolean</code></td>
    <td>Whether all of the compute instances in your placement group are compliant. If `true`, all compute instances meet either the grouped-together or spread-apart model, which you determine through your selected `placement_group_type`. If `false`, a compute instance is out of this compliance. For example, assume you've set `anti-affinity:local` as your `placement_group_type` and your group already has three qualifying compute instances on separate hosts, to support the spread-apart model. If a fourth compute instance is assigned that's on the same host as one of the existing three, the placement group is non-compliant. Enforce compliance in your group by setting a `placement_group_policy`.  &gt; 📘 &gt; &gt; Fixing compliance is not self-service. You need to wait for our assistance to physically move compute instances to make the group compliant again.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The unique name set for the placement group. A label has these constraints:  - It needs to begin and end with an alphanumeric character. - It can only consist of alphanumeric characters, hyphens (`-`), underscores (`_`) or periods (`.`). (example: PG_Miami_failover)</td>
</tr>
<tr>
    <td><CopyableCode code="members" /></td>
    <td><code>array</code></td>
    <td>An array of compute instances included in the placement group.</td>
</tr>
<tr>
    <td><CopyableCode code="migrations" /></td>
    <td><code>object</code></td>
    <td>Any compute instances that are being migrated to or from the placement group. Returned as `null` if no migrations are taking place.</td>
</tr>
<tr>
    <td><CopyableCode code="placement_group_policy" /></td>
    <td><code>string</code></td>
    <td>How requests to add future compute instances to your placement group are handled, and whether it remains compliant:  - `strict`. Don't assign a new compute instance if it breaks the grouped-together or spread-apart model set by the `placement_group_type`. Use this to ensure the placement group stays compliant (`is_compliant: true`). - `flexible`. Assign a new compute instance, even if it breaks the grouped-together or spread-apart model set by the `placement_group_type`. This makes the group non-compliant (`is_compliant: false`). You need to wait for Akamai to move the offending compute instance to make it compliant again, once the necessary capacity is available in the region. Offers flexibility to add future compute instances if compliance isn't an immediate concern.  &lt;&lt;LB&gt;&gt;  &gt; 📘 &gt; &gt; In rare cases, non-compliance can occur with a `strict` placement group if Akamai needs to failover or migrate your compute instances for maintenance. Fixing non-compliance for a `strict` placement group is prioritized over a `flexible` group. (strict, flexible) (example: strict)</td>
</tr>
<tr>
    <td><CopyableCode code="placement_group_type" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ How compute instances are distributed in your placement group. A `placement_group_type` using anti-affinity (`anti-affinity:local`) places compute instances in separate hosts, but still in the same region. This best supports the spread-apart model for high availability. A `placement_group_type` using affinity places compute instances physically close together, possibly on the same host. This supports the grouped-together model for low-latency.  &gt; 📘 &gt; &gt; Currently, only `anti_affinity:local` is available for `placement_group_type`. (anti_affinity:local) (example: anti-affinity:local)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>__Filterable__, __Read-only__ The [region](https://techdocs.akamai.com/linode-api/reference/get-regions) where the placement group was deployed. (example: us-mia)</td>
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
    <td><a href="#parameter-groupId"><code>groupId</code></a></td>
    <td></td>
    <td>View a specific placement group by ID.<br /><br />&gt; 📘<br />&gt;<br />&gt; Your user needs at least `read-only` [permission](https://techdocs.akamai.com/linode-api/reference/get-user-grants) to all Linodes included in a placement group to view it. If you don't have this access and call this operation, the API returns a 403 error. Talk to your local account administrator about managing permissions.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Returns a paginated list of placement groups you have permission to view.<br /><br />&gt; 📘<br />&gt;<br />&gt; Your user needs at least `read-only` [permission](https://techdocs.akamai.com/linode-api/reference/get-user-grants) to all Linodes included in a placement group to view it. Placement groups that contain Linodes that you don't have this permission for are left out of the response. If all placement groups contain Linodes that lack this permission, the API returns a 403 error. Talk to your local account administrator about managing permissions.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-placement_group_type"><code>placement_group_type</code></a>, <a href="#parameter-placement_group_policy"><code>placement_group_policy</code></a>, <a href="#parameter-label"><code>label</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a placement group on your account. Placement groups disperse your Linodes across physical machines (hosts) in one of our compute regions. Depending on your workload requirements, you may need your Linodes to follow specific strategies:<br /><br />- __Grouped together__. You may want them placed close together to reduce latency between Linodes that are used for an application or workload.<br /><br />- __Spread apart__. You may want to disperse them across several hosts to support high availability, for example when required for failover.<br /><br />To run this operation, your user needs the `add_linodes` [grant](https://techdocs.akamai.com/linode-api/reference/get-user-grants). Talk to your local account administrator about grant management for your user.<br /><br />&gt; 👍 There's a tutorial<br />&gt;<br />&gt; We offer an example API [workflow](https://techdocs.akamai.com/linode-api/reference/create-a-placement-group) you can follow to create a placement group and add Linodes to it.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-groupId"><code>groupId</code></a></td>
    <td></td>
    <td>Change the `label` for a specific placement group. This is the only value you can update. However, you can [add](https://techdocs.akamai.com/linode-api/reference/post-group-add-linode) more Linodes or [remove](https://techdocs.akamai.com/linode-api/reference/post-group-unassign) existing ones.<br /><br />&gt; 📘<br />&gt;<br />&gt; To update a placement group, your [user grants](https://techdocs.akamai.com/linode-api/reference/get-user-grants) need to include `read_write` permission to all of the Linodes in the group. Talk to your local account administrator about grant management for your user.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-groupId"><code>groupId</code></a></td>
    <td></td>
    <td>Deletes a placement group you have permission to `read_write`.<br /><br />- Deleting a placement group can't be undone.<br /><br />- All Linodes need to be [removed](https://techdocs.akamai.com/linode-api/reference/post-group-unassign) before you can delete a placement group.<br /><br />- If your placement group is non-compliant, you can't delete it. You need to wait for our help to bring it [compliant](https://www.linode.com/docs/products/compute/compute-instances/guides/placement-groups/#non-compliance-precedence).<br /><br />&lt;&lt;LB&gt;&gt;<br /><br />&gt; 📘<br />&gt;<br />&gt; To run this operation, your user needs the `add_linodes` [grant](https://techdocs.akamai.com/linode-api/reference/get-user-grants). Talk to your local account administrator about grant management for your user.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#assign"><CopyableCode code="assign" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-groupId"><code>groupId</code></a></td>
    <td></td>
    <td>Add a Linode to your placement group. Check out our [example API workflow](https://techdocs.akamai.com/linode-api/reference/create-a-placement-group) to create a placement group and add Linodes.<br /><br />&gt; 📘<br />&gt;<br />&gt; Your user needs the `add_linodes` [grant](https://techdocs.akamai.com/linode-api/reference/get-user-grants) and `read-write` [permission](https://techdocs.akamai.com/linode-api/reference/get-user-grants) to the Linodes you want to add to the group. Talk to your local account administrator about grant and permissions management.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#unassign"><CopyableCode code="unassign" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-groupId"><code>groupId</code></a></td>
    <td></td>
    <td>Remove a Linode from your placement group.<br /><br />&gt; 📘<br />&gt;<br />&gt; To run this operation, your user needs the `add_linodes` [grant](https://techdocs.akamai.com/linode-api/reference/get-user-grants) and `read-write` [permission](https://techdocs.akamai.com/linode-api/reference/get-user-grants) to the Linodes you want to remove from the group. Talk to your local account administrator about grant and permissions management.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-groupId">
    <td><CopyableCode code="groupId" /></td>
    <td><code>string</code></td>
    <td>ID of the placement group to look up. Run the [List placement groups](https://techdocs.akamai.com/linode-api/reference/get-placement-groups) operation and store the `id` for the applicable placement group.</td>
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

View a specific placement group by ID.<br /><br />&gt; 📘<br />&gt;<br />&gt; Your user needs at least `read-only` [permission](https://techdocs.akamai.com/linode-api/reference/get-user-grants) to all Linodes included in a placement group to view it. If you don't have this access and call this operation, the API returns a 403 error. Talk to your local account administrator about managing permissions.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
is_compliant,
label,
members,
migrations,
placement_group_policy,
placement_group_type,
region
FROM linode.placement.placement_groups
WHERE groupId = '{{ groupId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns a paginated list of placement groups you have permission to view.<br /><br />&gt; 📘<br />&gt;<br />&gt; Your user needs at least `read-only` [permission](https://techdocs.akamai.com/linode-api/reference/get-user-grants) to all Linodes included in a placement group to view it. Placement groups that contain Linodes that you don't have this permission for are left out of the response. If all placement groups contain Linodes that lack this permission, the API returns a 403 error. Talk to your local account administrator about managing permissions.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
is_compliant,
label,
members,
migrations,
placement_group_policy,
placement_group_type,
region
FROM linode.placement.placement_groups
WHERE page = '{{ page }}'
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

Creates a placement group on your account. Placement groups disperse your Linodes across physical machines (hosts) in one of our compute regions. Depending on your workload requirements, you may need your Linodes to follow specific strategies:<br /><br />- __Grouped together__. You may want them placed close together to reduce latency between Linodes that are used for an application or workload.<br /><br />- __Spread apart__. You may want to disperse them across several hosts to support high availability, for example when required for failover.<br /><br />To run this operation, your user needs the `add_linodes` [grant](https://techdocs.akamai.com/linode-api/reference/get-user-grants). Talk to your local account administrator about grant management for your user.<br /><br />&gt; 👍 There's a tutorial<br />&gt;<br />&gt; We offer an example API [workflow](https://techdocs.akamai.com/linode-api/reference/create-a-placement-group) you can follow to create a placement group and add Linodes to it.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.placement.placement_groups (
label,
placement_group_policy,
placement_group_type,
region
)
SELECT 
'{{ label }}' /* required */,
'{{ placement_group_policy }}' /* required */,
'{{ placement_group_type }}' /* required */,
'{{ region }}' /* required */
RETURNING
id,
is_compliant,
label,
members,
placement_group_policy,
placement_group_type,
region
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: placement_groups
  props:
    - name: label
      value: "{{ label }}"
      description: |
        A unique name for the placement group. A placement group \`label\` has the following constraints:
        - It needs to begin and end with an alphanumeric character.
        - It can only consist of alphanumeric characters, hyphens (\`-\`), underscores (\`_\`), or periods (\`.\`).
    - name: placement_group_policy
      value: "{{ placement_group_policy }}"
      description: |
        How requests to add future compute instances to your placement group are handled:
        - \`strict\`. Don't add a compute instance if it breaks the grouped-together or spread-apart model set by your \`placement_group_type\`. For example, with \`anti-affinity:local\` as your \`placement_group_type\`, assume it already has three qualifying compute instances on separate hosts, to support the spread-apart model. If a fourth compute instance is assigned that's on the same host as one of the existing three, an error is thrown and the system won't add it. Ensures the placement group stays compliant with your selected model.
        - \`flexible\`. Add a new compute instance, even if it breaks the grouped-together or spread-apart model set by your \`placement_group_type\`. Breaking the model makes the placement group non-compliant. You need to wait for Akamai to move the offending compute instances to make the group compliant again, once the necessary capacity is available in the region. Offers flexibility to add future compute instances if compliance isn't an immediate concern.
        > 📘
        >
        > Once you create a placement group, you can't change its \`placement_group_policy\` setting.
      valid_values: ['strict', 'flexible']
    - name: placement_group_type
      value: "{{ placement_group_type }}"
      description: |
        How compute instances are distributed in your placement group. A \`placement_group_type\` using anti-affinity (\`anti-affinity:local\`) places compute instances in separate hosts, but still in the same region. This best supports the spread-apart model for high availability. A \`placement_group_type\` using affinity places compute instances physically close together, possibly on the same host. This supports the grouped-together model for low-latency.
        > 📘
        >
        > Currently, only \`anti_affinity:local\` is available for \`placement_group_type\`.
      valid_values: ['anti_affinity:local']
    - name: region
      value: "{{ region }}"
      description: |
        The data center that houses the compute instances you want to add to your placement group. Run the [List Linodes](https://techdocs.akamai.com/linode-api/reference/get-linode-instances) operation to view your compute instances and store the \`region\` identifier.
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

Change the `label` for a specific placement group. This is the only value you can update. However, you can [add](https://techdocs.akamai.com/linode-api/reference/post-group-add-linode) more Linodes or [remove](https://techdocs.akamai.com/linode-api/reference/post-group-unassign) existing ones.<br /><br />&gt; 📘<br />&gt;<br />&gt; To update a placement group, your [user grants](https://techdocs.akamai.com/linode-api/reference/get-user-grants) need to include `read_write` permission to all of the Linodes in the group. Talk to your local account administrator about grant management for your user.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.placement.placement_groups
SET 
label = '{{ label }}'
WHERE 
groupId = '{{ groupId }}' --required
RETURNING
id,
is_compliant,
label,
members,
placement_group_policy,
placement_group_type,
region;
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

Deletes a placement group you have permission to `read_write`.<br /><br />- Deleting a placement group can't be undone.<br /><br />- All Linodes need to be [removed](https://techdocs.akamai.com/linode-api/reference/post-group-unassign) before you can delete a placement group.<br /><br />- If your placement group is non-compliant, you can't delete it. You need to wait for our help to bring it [compliant](https://www.linode.com/docs/products/compute/compute-instances/guides/placement-groups/#non-compliance-precedence).<br /><br />&lt;&lt;LB&gt;&gt;<br /><br />&gt; 📘<br />&gt;<br />&gt; To run this operation, your user needs the `add_linodes` [grant](https://techdocs.akamai.com/linode-api/reference/get-user-grants). Talk to your local account administrator about grant management for your user.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.placement.placement_groups
WHERE groupId = '{{ groupId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="assign"
    values={[
        { label: 'assign', value: 'assign' },
        { label: 'unassign', value: 'unassign' }
    ]}
>
<TabItem value="assign">

Add a Linode to your placement group. Check out our [example API workflow](https://techdocs.akamai.com/linode-api/reference/create-a-placement-group) to create a placement group and add Linodes.<br /><br />&gt; 📘<br />&gt;<br />&gt; Your user needs the `add_linodes` [grant](https://techdocs.akamai.com/linode-api/reference/get-user-grants) and `read-write` [permission](https://techdocs.akamai.com/linode-api/reference/get-user-grants) to the Linodes you want to add to the group. Talk to your local account administrator about grant and permissions management.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.placement.placement_groups.assign 
@groupId='{{ groupId }}' --required 
@@json=
'{
"linodes": "{{ linodes }}"
}'
;
```
</TabItem>
<TabItem value="unassign">

Remove a Linode from your placement group.<br /><br />&gt; 📘<br />&gt;<br />&gt; To run this operation, your user needs the `add_linodes` [grant](https://techdocs.akamai.com/linode-api/reference/get-user-grants) and `read-write` [permission](https://techdocs.akamai.com/linode-api/reference/get-user-grants) to the Linodes you want to remove from the group. Talk to your local account administrator about grant and permissions management.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.placement.placement_groups.unassign 
@groupId='{{ groupId }}' --required 
@@json=
'{
"linodes": "{{ linodes }}"
}'
;
```
</TabItem>
</Tabs>
