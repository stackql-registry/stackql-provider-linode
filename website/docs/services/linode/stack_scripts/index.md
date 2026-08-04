--- 
title: stack_scripts
hide_title: false
hide_table_of_contents: false
keywords:
  - stack_scripts
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

Creates, updates, deletes, gets or lists a <code>stack_scripts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stack_scripts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.linode.stack_scripts" /></td></tr>
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

A single StackScript.

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
    <td>__Read-only__ The unique ID of this StackScript.</td>
</tr>
<tr>
    <td><CopyableCode code="user_gravatar_id" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The Gravatar ID for the User who created the StackScript. (example: a445b305abda30ebc766bc7fda037c37)</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ The date this StackScript was created. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="deployments_active" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ Count of currently active, deployed Linodes created from this StackScript.</td>
</tr>
<tr>
    <td><CopyableCode code="deployments_total" /></td>
    <td><code>integer</code></td>
    <td>__Filterable__, __Read-only__ The total number of times this StackScript has been deployed.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ A description for the StackScript. (example: This StackScript installs and configures MySQL)</td>
</tr>
<tr>
    <td><CopyableCode code="images" /></td>
    <td><code>array</code></td>
    <td>An array of Image IDs. These are the Images that can be deployed with this StackScript.  `any/all` indicates that all available Images, including private Images, are accepted.</td>
</tr>
<tr>
    <td><CopyableCode code="is_public" /></td>
    <td><code>boolean</code></td>
    <td>__Filterable__ This determines whether other users can use your StackScript. __Once a StackScript is made public, it cannot be made private.__</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The StackScript's label is for display purposes only. (example: a-stackscript)</td>
</tr>
<tr>
    <td><CopyableCode code="mine" /></td>
    <td><code>boolean</code></td>
    <td>__Filterable__, __Read-only__ Returns `true` if this StackScript is owned by the account of the user making the request, and the user making the request is unrestricted or has access to this StackScript.</td>
</tr>
<tr>
    <td><CopyableCode code="rev_note" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ This field allows you to add notes for the set of revisions made to this StackScript. (example: Set up MySQL)</td>
</tr>
<tr>
    <td><CopyableCode code="script" /></td>
    <td><code>string</code></td>
    <td>The script to execute when provisioning a new Linode with this StackScript. (example: \"#!/bin/bash\", x-linode-cli-format: file)</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ The date this StackScript was last updated. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="user_defined_fields" /></td>
    <td><code>array</code></td>
    <td>__Read-only__ This is a list of fields defined with a special syntax inside this StackScript that allow for supplying customized parameters during deployment. See [Declare User-Defined Fields (UDFs)](https://www.linode.com/docs/products/tools/stackscripts/guides/write-a-custom-script/#declare-user-defined-fields-udfs) for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The User who created the StackScript. (example: myuser)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A list of StackScripts available to the User, including private StackScripts owned by the User if the request is authenticated.

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
    <td>__Read-only__ The unique ID of this StackScript.</td>
</tr>
<tr>
    <td><CopyableCode code="user_gravatar_id" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The Gravatar ID for the User who created the StackScript. (example: a445b305abda30ebc766bc7fda037c37)</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ The date this StackScript was created. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="deployments_active" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ Count of currently active, deployed Linodes created from this StackScript.</td>
</tr>
<tr>
    <td><CopyableCode code="deployments_total" /></td>
    <td><code>integer</code></td>
    <td>__Filterable__, __Read-only__ The total number of times this StackScript has been deployed.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ A description for the StackScript. (example: This StackScript installs and configures MySQL)</td>
</tr>
<tr>
    <td><CopyableCode code="images" /></td>
    <td><code>array</code></td>
    <td>An array of Image IDs. These are the Images that can be deployed with this StackScript.  `any/all` indicates that all available Images, including private Images, are accepted.</td>
</tr>
<tr>
    <td><CopyableCode code="is_public" /></td>
    <td><code>boolean</code></td>
    <td>__Filterable__ This determines whether other users can use your StackScript. __Once a StackScript is made public, it cannot be made private.__</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The StackScript's label is for display purposes only. (example: a-stackscript)</td>
</tr>
<tr>
    <td><CopyableCode code="mine" /></td>
    <td><code>boolean</code></td>
    <td>__Filterable__, __Read-only__ Returns `true` if this StackScript is owned by the account of the user making the request, and the user making the request is unrestricted or has access to this StackScript.</td>
</tr>
<tr>
    <td><CopyableCode code="rev_note" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ This field allows you to add notes for the set of revisions made to this StackScript. (example: Set up MySQL)</td>
</tr>
<tr>
    <td><CopyableCode code="script" /></td>
    <td><code>string</code></td>
    <td>The script to execute when provisioning a new Linode with this StackScript. (example: \"#!/bin/bash\", x-linode-cli-format: file)</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ The date this StackScript was last updated. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="user_defined_fields" /></td>
    <td><code>array</code></td>
    <td>__Read-only__ This is a list of fields defined with a special syntax inside this StackScript that allow for supplying customized parameters during deployment. See [Declare User-Defined Fields (UDFs)](https://www.linode.com/docs/products/tools/stackscripts/guides/write-a-custom-script/#declare-user-defined-fields-udfs) for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The User who created the StackScript. (example: myuser)</td>
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
    <td><a href="#parameter-stackscriptId"><code>stackscriptId</code></a></td>
    <td></td>
    <td>Returns all of the information about a specified StackScript, including the contents of the script.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>If the request is not authenticated, only public StackScripts are returned.<br /><br />For more information on StackScripts, please read our [StackScripts documentation](https://www.linode.com/docs/products/tools/stackscripts/).<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-script"><code>script</code></a>, <a href="#parameter-label"><code>label</code></a>, <a href="#parameter-images"><code>images</code></a></td>
    <td></td>
    <td>Creates a StackScript in your Account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-stackscriptId"><code>stackscriptId</code></a></td>
    <td></td>
    <td>Updates a StackScript.<br /><br />__Once a StackScript is made public, it cannot be made private.__<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-stackscriptId"><code>stackscriptId</code></a></td>
    <td></td>
    <td>Deletes a private StackScript you have permission to `read_write`. You cannot delete a public StackScript.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-stackscriptId">
    <td><CopyableCode code="stackscriptId" /></td>
    <td><code>string</code></td>
    <td>The ID of the StackScript to look up. (example: &#123;&#123;stackscriptId&#125;&#125;)</td>
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

Returns all of the information about a specified StackScript, including the contents of the script.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
user_gravatar_id,
created,
deployments_active,
deployments_total,
description,
images,
is_public,
label,
mine,
rev_note,
script,
updated,
user_defined_fields,
username
FROM linode.linode.stack_scripts
WHERE stackscriptId = '{{ stackscriptId }}' -- required
;
```
</TabItem>
<TabItem value="list">

If the request is not authenticated, only public StackScripts are returned.<br /><br />For more information on StackScripts, please read our [StackScripts documentation](https://www.linode.com/docs/products/tools/stackscripts/).<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
user_gravatar_id,
created,
deployments_active,
deployments_total,
description,
images,
is_public,
label,
mine,
rev_note,
script,
updated,
user_defined_fields,
username
FROM linode.linode.stack_scripts
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

Creates a StackScript in your Account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.linode.stack_scripts (
description,
images,
is_public,
label,
rev_note,
script
)
SELECT 
'{{ description }}',
'{{ images }}' /* required */,
{{ is_public }},
'{{ label }}' /* required */,
'{{ rev_note }}',
'{{ script }}' /* required */
RETURNING
id,
user_gravatar_id,
created,
deployments_active,
deployments_total,
description,
images,
is_public,
label,
mine,
rev_note,
script,
updated,
user_defined_fields,
username
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: stack_scripts
  props:
    - name: description
      value: "{{ description }}"
      description: |
        __Filterable__ A description for the StackScript.
    - name: images
      value:
        - "{{ images }}"
      description: |
        An array of Image IDs. These are the Images that can be deployed with this StackScript.
        \`any/all\` indicates that all available Images, including private Images, are accepted.
    - name: is_public
      value: {{ is_public }}
      description: |
        __Filterable__ This determines whether other users can use your StackScript. __Once a StackScript is made public, it cannot be made private.__
    - name: label
      value: "{{ label }}"
      description: |
        __Filterable__ The StackScript's label is for display purposes only.
    - name: rev_note
      value: "{{ rev_note }}"
      description: |
        __Filterable__ This field allows you to add notes for the set of revisions made to this StackScript.
    - name: script
      value: "{{ script }}"
      description: |
        The script to execute when provisioning a new Linode with this StackScript.
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

Updates a StackScript.<br /><br />__Once a StackScript is made public, it cannot be made private.__<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.linode.stack_scripts
SET 
description = '{{ description }}',
images = '{{ images }}',
is_public = {{ is_public }},
label = '{{ label }}',
rev_note = '{{ rev_note }}',
script = '{{ script }}'
WHERE 
stackscriptId = '{{ stackscriptId }}' --required
RETURNING
id,
user_gravatar_id,
created,
deployments_active,
deployments_total,
description,
images,
is_public,
label,
mine,
rev_note,
script,
updated,
user_defined_fields,
username;
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

Deletes a private StackScript you have permission to `read_write`. You cannot delete a public StackScript.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.linode.stack_scripts
WHERE stackscriptId = '{{ stackscriptId }}' --required
;
```
</TabItem>
</Tabs>
