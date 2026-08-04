--- 
title: templates
hide_title: false
hide_table_of_contents: false
keywords:
  - templates
  - networking
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

Creates, updates, deletes, gets or lists a <code>templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.networking.templates" /></td></tr>
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

Returns a `vpc` or `public` firewall template for interface firewalls.

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
    <td><CopyableCode code="rules" /></td>
    <td><code>object</code></td>
    <td>The inbound and outbound access rules for the VPC firewall template.  A firewall can have up to 25 rules across its inbound and outbound rule sets. Multiple rules are applied in order. If two rules conflict, the first rule takes precedence. For example, if the first rule accepts inbound traffic from an address, and the second rule drops inbound traffic from the same address, the first rule applies, and inbound traffic from that address is accepted.</td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
    <td><code>array</code></td>
    <td>__Read-only__ The firewall template types available for VPC and public Linode interfaces. (vpc, public) (example: vpc)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Returns a paginated list of firewall templates.

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
    <td><CopyableCode code="rules" /></td>
    <td><code>object</code></td>
    <td>The inbound and outbound access rules for the VPC firewall template.  A firewall can have up to 25 rules across its inbound and outbound rule sets. Multiple rules are applied in order. If two rules conflict, the first rule takes precedence. For example, if the first rule accepts inbound traffic from an address, and the second rule drops inbound traffic from the same address, the first rule applies, and inbound traffic from that address is accepted.</td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
    <td><code>array</code></td>
    <td>__Read-only__ The firewall template types available for VPC and public Linode interfaces. (vpc, public) (example: vpc)</td>
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
    <td><a href="#parameter-slug"><code>slug</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>__Beta__ Gets a `vpc` or `public` firewall template you can use with Linode VPC and public interfaces. Firewall templates come with some protection rules already configured.<br /><br />The public interface's firewall template allows for login with SSH, and regular networking control data. You should further strengthen these rules by limiting the allowed IPv4 and IPv6 ranges.<br /><br />The VPC interface's firewall template allows for login with SSH, regular networking control data, and inbound traffic from the VPC address space. You should further strengthen these rules by limiting the allowed IPv4 and IPv6 ranges.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>__Beta__ Returns a paginated list of a firewall templates. There are firewall templates specifically for VPC interfaces and public interfaces. Firewall templates come with some protection rules already configured.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-slug">
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>__Enum__ The firewall template type, available for either `vpc` or `public` interfaces. (example: &#123;&#123;slug&#125;&#125;)</td>
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

__Beta__ Gets a `vpc` or `public` firewall template you can use with Linode VPC and public interfaces. Firewall templates come with some protection rules already configured.<br /><br />The public interface's firewall template allows for login with SSH, and regular networking control data. You should further strengthen these rules by limiting the allowed IPv4 and IPv6 ranges.<br /><br />The VPC interface's firewall template allows for login with SSH, regular networking control data, and inbound traffic from the VPC address space. You should further strengthen these rules by limiting the allowed IPv4 and IPv6 ranges.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
rules,
slug
FROM linode.networking.templates
WHERE slug = '{{ slug }}' -- required
AND page = '{{ page }}'
AND page_size = '{{ page_size }}'
;
```
</TabItem>
<TabItem value="list">

__Beta__ Returns a paginated list of a firewall templates. There are firewall templates specifically for VPC interfaces and public interfaces. Firewall templates come with some protection rules already configured.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
rules,
slug
FROM linode.networking.templates
WHERE page = '{{ page }}'
AND page_size = '{{ page_size }}'
;
```
</TabItem>
</Tabs>
