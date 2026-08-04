--- 
title: security_questions
hide_title: false
hide_table_of_contents: false
keywords:
  - security_questions
  - profile
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

Creates, updates, deletes, gets or lists a <code>security_questions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="security_questions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.profile.security_questions" /></td></tr>
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

Returns a list of security questions.

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
    <td>The ID representing the security question.</td>
</tr>
<tr>
    <td><CopyableCode code="question" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The security question. (example: In what city were you born?)</td>
</tr>
<tr>
    <td><CopyableCode code="response" /></td>
    <td><code>string</code></td>
    <td>The security question response. (example: Gotham City)</td>
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
    <td></td>
    <td></td>
    <td>Returns a collection of security questions and their responses, if any, for your User Profile.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#answer"><CopyableCode code="answer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Adds security question responses for your user. You need to use exactly three unique questions. Previous responses are overwritten if answered, or they're reset to `null` if unanswered.<br /><br />&gt; 📘<br />&gt;<br />&gt; You need to answer these security questions before you can access the [Create a two factor secret](https://techdocs.akamai.com/linode-api/reference/post-tfa-enable) operation. __OAuth scopes__.<br /><br />    ```<br />    account:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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

Returns a collection of security questions and their responses, if any, for your User Profile.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
question,
response
FROM linode.profile.security_questions
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="answer"
    values={[
        { label: 'answer', value: 'answer' }
    ]}
>
<TabItem value="answer">

Adds security question responses for your user. You need to use exactly three unique questions. Previous responses are overwritten if answered, or they're reset to `null` if unanswered.<br /><br />&gt; 📘<br />&gt;<br />&gt; You need to answer these security questions before you can access the [Create a two factor secret](https://techdocs.akamai.com/linode-api/reference/post-tfa-enable) operation. __OAuth scopes__.<br /><br />    ```<br />    account:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.profile.security_questions.answer 
@@json=
'{
"security_questions": "{{ security_questions }}"
}'
;
```
</TabItem>
</Tabs>
