--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - tags
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

Creates, updates, deletes, gets or lists a <code>tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.tags.tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

A paginated list of tags.

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
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>The name of the tag used for organization of objects on your account. (example: example tag)</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Returns a paginated list of tags you've [created](https://techdocs.akamai.com/linode-api/reference/post-tag) on your account.<br />&gt; 📘<br />&gt;<br />&gt; This operation can only be accessed by account users with _unrestricted_ access. Talk to your local account administrator about access management.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-label"><code>label</code></a></td>
    <td></td>
    <td>Creates a new tag and lets you optionally add it to specific objects. Tags are labels you can attach to objects in your account. Use them to specify and group attributes of objects that are relevant to you. Currently, you can add a tag to your `linodes`, your `nodebalancers`, the `domains` for your Linodes, and the `volumes` on your Linodes.<br /><br />&gt; 📘<br />&gt;<br />&gt; - This operation can only be accessed by account users with _unrestricted_ access. Talk to your local account administrator about access management.<br />&gt;<br />&gt; - If you don't add a tag to a supported object with this operation, you can use that object's update operation to later add the tag you created.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-tagLabel"><code>tagLabel</code></a></td>
    <td></td>
    <td>Removes a tag from all objects and deletes it.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation can only be accessed by account users with _unrestricted_ access. Talk to your local account administrator about access management.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-tagLabel">
    <td><CopyableCode code="tagLabel" /></td>
    <td><code>string</code></td>
    <td>The `label` of the tag to access. (example: &#123;&#123;tagLabel&#125;&#125;)</td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Returns a paginated list of tags you've [created](https://techdocs.akamai.com/linode-api/reference/post-tag) on your account.<br />&gt; 📘<br />&gt;<br />&gt; This operation can only be accessed by account users with _unrestricted_ access. Talk to your local account administrator about access management.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
label
FROM linode.tags.tags
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

Creates a new tag and lets you optionally add it to specific objects. Tags are labels you can attach to objects in your account. Use them to specify and group attributes of objects that are relevant to you. Currently, you can add a tag to your `linodes`, your `nodebalancers`, the `domains` for your Linodes, and the `volumes` on your Linodes.<br /><br />&gt; 📘<br />&gt;<br />&gt; - This operation can only be accessed by account users with _unrestricted_ access. Talk to your local account administrator about access management.<br />&gt;<br />&gt; - If you don't add a tag to a supported object with this operation, you can use that object's update operation to later add the tag you created.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.tags.tags (
domains,
label,
linodes,
nodebalancers,
volumes
)
SELECT 
'{{ domains }}',
'{{ label }}' /* required */,
'{{ linodes }}',
'{{ nodebalancers }}',
'{{ volumes }}'
RETURNING
label
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tags
  props:
    - name: domains
      value:
        - {{ domains }}
      description: |
        The \`id\` values for the domains where you want to apply the tag. You need \`read_write\` access to each domain. If you don't, the API won't create the tag and you'll receive an error. You can run the [List domains](https://techdocs.akamai.com/linode-api/reference/get-domains) operation to store the \`id\` for desired domains and to review any \`tags\` currently applied.
    - name: label
      value: "{{ label }}"
      description: |
        The name of your tag. This is used for display purposes.
    - name: linodes
      value:
        - {{ linodes }}
      description: |
        The \`id\` values for the Linodes where you want to apply the tag. You need \`read_write\` access to each Linode. If you don't, the API won't create the tag and you'll receive an error. You can run the [List Linodes](https://techdocs.akamai.com/linode-api/reference/get-linode-instances) operation to store the \`id\` for desired Linodes and to review any \`tags\` currently applied.
    - name: nodebalancers
      value:
        - {{ nodebalancers }}
      description: |
        The \`id\` values for the NodeBalancers where you want to apply the tag. You need \`read_write\` access to each NodeBalancer. If you don't, the API won't create the tag and you'll receive an error. You can run the [List NodeBalancers](https://techdocs.akamai.com/linode-api/reference/get-node-balancers) operation to store the \`id\` for desired NodeBalancers and to review any \`tags\` currently applied.
    - name: volumes
      value:
        - {{ volumes }}
      description: |
        The \`id\` values for the Linode volumes where you want to apply the tag. You need \`read_write\` access to each volume. If you don't, the API won't create the tag and you'll receive an error. You can run the [List volumes](https://techdocs.akamai.com/linode-api/reference/get-volumes) operation to store the \`id\` for desired Linode volumes and to review any \`tags\` currently applied.
`}</CodeBlock>

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

Removes a tag from all objects and deletes it.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation can only be accessed by account users with _unrestricted_ access. Talk to your local account administrator about access management.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.tags.tags
WHERE tagLabel = '{{ tagLabel }}' --required
;
```
</TabItem>
</Tabs>
