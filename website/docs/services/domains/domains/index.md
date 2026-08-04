--- 
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
  - domains
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

Creates, updates, deletes, gets or lists a <code>domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.domains.domains" /></td></tr>
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

A single Domain in Linode's DNS Manager.

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
    <td>__Read-only__ This domain's unique ID.</td>
</tr>
<tr>
    <td><CopyableCode code="axfr_ips" /></td>
    <td><code>array</code></td>
    <td>The list of IPs that may perform a zone transfer for this domain. The total combined length of all data within this array cannot exceed 1000 characters.  &gt; 📘 &gt; &gt; This is potentially dangerous, and should be set to an empty list unless you intend to use it.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description for this domain. This is for display purposes only.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The domain this domain represents. domain labels cannot be longer than 63 characters and must conform to [RFC1035](https://tools.ietf.org/html/rfc1035). domains must be unique on Linode's platform, including across different Linode accounts; there cannot be two domains representing the same domain. (example: example.org, pattern: <code>^(\*\.)?(&#91;a-zA-Z0-9-_&#93;&#123;1,63&#125;\.)+(&#91;a-zA-Z&#93;&#123;2,3&#125;\.)?(&#91;a-zA-Z&#93;&#123;2,16&#125;|xn--&#91;a-zA-Z0-9&#93;+)$</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="expire_sec" /></td>
    <td><code>integer</code></td>
    <td>The amount of time in seconds that may pass before this domain is no longer authoritative.  - Valid values are 0, 30, 120, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.  - Any other value is rounded up to the nearest valid value.  - A value of 0 is equivalent to the default value of 1209600.</td>
</tr>
<tr>
    <td><CopyableCode code="group" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The group this domain belongs to.  This is for display purposes only.</td>
</tr>
<tr>
    <td><CopyableCode code="master_ips" /></td>
    <td><code>array</code></td>
    <td>The IP addresses representing the master DNS for this domain. At least one value is required for `type` slave domains. The total combined length of all data within this array cannot exceed 1000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="refresh_sec" /></td>
    <td><code>integer</code></td>
    <td>The amount of time in seconds before this domain should be refreshed.  - Valid values are 0, 30, 120, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.  - Any other value is rounded up to the nearest valid value.  - A value of 0 is equivalent to the default value of 14400.</td>
</tr>
<tr>
    <td><CopyableCode code="retry_sec" /></td>
    <td><code>integer</code></td>
    <td>The interval, in seconds, at which a failed refresh should be retried.  - Valid values are 0, 30, 120, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.  - Any other value is rounded up to the nearest valid value.  - A value of 0 is equivalent to the default value of 14400.</td>
</tr>
<tr>
    <td><CopyableCode code="soa_email" /></td>
    <td><code>string (email)</code></td>
    <td>Start of Authority email address. This is required for `type` master domains. (example: admin@example.org)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Used to control whether this domain is currently being rendered. (disabled, active) (default: active, example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>__Filterable__ An array of tags applied to this object.  Tags are for organizational purposes only.</td>
</tr>
<tr>
    <td><CopyableCode code="ttl_sec" /></td>
    <td><code>integer</code></td>
    <td>"Time to Live" - the amount of time in seconds that this domain's records may be cached by resolvers or other domain servers.  - Valid values are 0, 30, 120, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.  - Any other value is rounded up to the nearest valid value.  - A value of 0 is equivalent to the default value of 86400.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Whether this domain represents the authoritative source of information for the domain it describes (`master`), or whether it is a read-only copy of a master (`slave`). (master, slave) (example: master)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated list of Domains you have registered.

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
    <td>__Read-only__ This domain's unique ID.</td>
</tr>
<tr>
    <td><CopyableCode code="axfr_ips" /></td>
    <td><code>array</code></td>
    <td>The list of IPs that may perform a zone transfer for this domain. The total combined length of all data within this array cannot exceed 1000 characters.  &gt; 📘 &gt; &gt; This is potentially dangerous, and should be set to an empty list unless you intend to use it.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description for this domain. This is for display purposes only.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The domain this domain represents. domain labels cannot be longer than 63 characters and must conform to [RFC1035](https://tools.ietf.org/html/rfc1035). domains must be unique on Linode's platform, including across different Linode accounts; there cannot be two domains representing the same domain. (example: example.org, pattern: <code>^(\*\.)?(&#91;a-zA-Z0-9-_&#93;&#123;1,63&#125;\.)+(&#91;a-zA-Z&#93;&#123;2,3&#125;\.)?(&#91;a-zA-Z&#93;&#123;2,16&#125;|xn--&#91;a-zA-Z0-9&#93;+)$</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="expire_sec" /></td>
    <td><code>integer</code></td>
    <td>The amount of time in seconds that may pass before this domain is no longer authoritative.  - Valid values are 0, 30, 120, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.  - Any other value is rounded up to the nearest valid value.  - A value of 0 is equivalent to the default value of 1209600.</td>
</tr>
<tr>
    <td><CopyableCode code="group" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The group this domain belongs to.  This is for display purposes only.</td>
</tr>
<tr>
    <td><CopyableCode code="master_ips" /></td>
    <td><code>array</code></td>
    <td>The IP addresses representing the master DNS for this domain. At least one value is required for `type` slave domains. The total combined length of all data within this array cannot exceed 1000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="refresh_sec" /></td>
    <td><code>integer</code></td>
    <td>The amount of time in seconds before this domain should be refreshed.  - Valid values are 0, 30, 120, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.  - Any other value is rounded up to the nearest valid value.  - A value of 0 is equivalent to the default value of 14400.</td>
</tr>
<tr>
    <td><CopyableCode code="retry_sec" /></td>
    <td><code>integer</code></td>
    <td>The interval, in seconds, at which a failed refresh should be retried.  - Valid values are 0, 30, 120, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.  - Any other value is rounded up to the nearest valid value.  - A value of 0 is equivalent to the default value of 14400.</td>
</tr>
<tr>
    <td><CopyableCode code="soa_email" /></td>
    <td><code>string (email)</code></td>
    <td>Start of Authority email address. This is required for `type` master domains. (example: admin@example.org)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Used to control whether this domain is currently being rendered. (disabled, active) (default: active, example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>__Filterable__ An array of tags applied to this object.  Tags are for organizational purposes only.</td>
</tr>
<tr>
    <td><CopyableCode code="ttl_sec" /></td>
    <td><code>integer</code></td>
    <td>"Time to Live" - the amount of time in seconds that this domain's records may be cached by resolvers or other domain servers.  - Valid values are 0, 30, 120, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.  - Any other value is rounded up to the nearest valid value.  - A value of 0 is equivalent to the default value of 86400.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Whether this domain represents the authoritative source of information for the domain it describes (`master`), or whether it is a read-only copy of a master (`slave`). (master, slave) (example: master)</td>
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
    <td><a href="#parameter-domainId"><code>domainId</code></a></td>
    <td></td>
    <td>This is a single Domain that you have registered in Linode's DNS Manager. Linode is not a registrar, and in order for this Domain record to work you must own the domain and point your registrar at Linode's nameservers.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>This is a collection of Domains that you have registered in Linode's DNS Manager.  Linode is not a registrar, and in order for these to work you must own the domains and point your registrar at Linode's nameservers.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Adds a new Domain to Linode's DNS Manager. Linode is not a registrar, and you must own the domain before adding it here. Be sure to point your registrar to Linode's nameservers so that the records hosted here are used.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-domainId"><code>domainId</code></a></td>
    <td></td>
    <td>Update information about a Domain in Linode's DNS Manager.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domainId"><code>domainId</code></a></td>
    <td></td>
    <td>Deletes a Domain from Linode's DNS Manager. The Domain will be removed from Linode's nameservers shortly after this operation completes. This also deletes all associated Domain Records.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#import"><CopyableCode code="import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-remote_nameserver"><code>remote_nameserver</code></a></td>
    <td></td>
    <td>Imports a domain zone from a remote nameserver. Your nameserver must allow zone transfers (AXFR) from the following IPs:<br /><br />- 96.126.114.97<br />- 96.126.114.98<br />- 2600:3c00::5e<br />- 2600:3c00::5f<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#clone"><CopyableCode code="clone" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domainId"><code>domainId</code></a>, <a href="#parameter-domain"><code>domain</code></a></td>
    <td></td>
    <td>Clones a Domain and all associated DNS records from a Domain that is registered in Linode's DNS manager.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-domainId">
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>ID of the Domain to clone. (example: &#123;&#123;domainId&#125;&#125;)</td>
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

This is a single Domain that you have registered in Linode's DNS Manager. Linode is not a registrar, and in order for this Domain record to work you must own the domain and point your registrar at Linode's nameservers.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
axfr_ips,
description,
domain,
expire_sec,
group,
master_ips,
refresh_sec,
retry_sec,
soa_email,
status,
tags,
ttl_sec,
type
FROM linode.domains.domains
WHERE domainId = '{{ domainId }}' -- required
;
```
</TabItem>
<TabItem value="list">

This is a collection of Domains that you have registered in Linode's DNS Manager.  Linode is not a registrar, and in order for these to work you must own the domains and point your registrar at Linode's nameservers.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
axfr_ips,
description,
domain,
expire_sec,
group,
master_ips,
refresh_sec,
retry_sec,
soa_email,
status,
tags,
ttl_sec,
type
FROM linode.domains.domains
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

Adds a new Domain to Linode's DNS Manager. Linode is not a registrar, and you must own the domain before adding it here. Be sure to point your registrar to Linode's nameservers so that the records hosted here are used.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.domains.domains (
axfr_ips,
description,
domain,
expire_sec,
group,
master_ips,
refresh_sec,
retry_sec,
soa_email,
status,
tags,
ttl_sec,
type
)
SELECT 
'{{ axfr_ips }}',
'{{ description }}',
'{{ domain }}' /* required */,
{{ expire_sec }},
'{{ group }}',
'{{ master_ips }}',
{{ refresh_sec }},
{{ retry_sec }},
'{{ soa_email }}',
'{{ status }}',
'{{ tags }}',
{{ ttl_sec }},
'{{ type }}' /* required */
RETURNING
id,
axfr_ips,
description,
domain,
expire_sec,
group,
master_ips,
refresh_sec,
retry_sec,
soa_email,
status,
tags,
ttl_sec,
type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: domains
  props:
    - name: axfr_ips
      value:
        - "{{ axfr_ips }}"
      description: |
        The list of IPs that may perform a zone transfer for this domain. The total combined length of all data within this array cannot exceed 1000 characters.
        > 📘
        >
        > This is potentially dangerous, and should be set to an empty list unless you intend to use it.
    - name: description
      value: "{{ description }}"
      description: |
        A description for this domain. This is for display purposes only.
    - name: domain
      value: "{{ domain }}"
      description: |
        __Filterable__ The domain this domain represents. domain labels cannot be longer than 63 characters and must conform to [RFC1035](https://tools.ietf.org/html/rfc1035). domains must be unique on Linode's platform, including across different Linode accounts; there cannot be two domains representing the same domain.
    - name: expire_sec
      value: {{ expire_sec }}
      description: |
        The amount of time in seconds that may pass before this domain is no longer authoritative.
        - Valid values are 0, 30, 120, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.
        - Any other value is rounded up to the nearest valid value.
        - A value of 0 is equivalent to the default value of 1209600.
      default: 0
    - name: group
      value: "{{ group }}"
      description: |
        __Filterable__ The group this domain belongs to.  This is for display purposes only.
    - name: master_ips
      value:
        - "{{ master_ips }}"
      description: |
        The IP addresses representing the master DNS for this domain. At least one value is required for \`type\` slave domains. The total combined length of all data within this array cannot exceed 1000 characters.
    - name: refresh_sec
      value: {{ refresh_sec }}
      description: |
        The amount of time in seconds before this domain should be refreshed.
        - Valid values are 0, 30, 120, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.
        - Any other value is rounded up to the nearest valid value.
        - A value of 0 is equivalent to the default value of 14400.
      default: 0
    - name: retry_sec
      value: {{ retry_sec }}
      description: |
        The interval, in seconds, at which a failed refresh should be retried.
        - Valid values are 0, 30, 120, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.
        - Any other value is rounded up to the nearest valid value.
        - A value of 0 is equivalent to the default value of 14400.
      default: 0
    - name: soa_email
      value: "{{ soa_email }}"
      description: |
        Start of Authority email address. This is required for \`type\` master domains.
    - name: status
      value: "{{ status }}"
      description: |
        Used to control whether this domain is currently being rendered.
      valid_values: ['disabled', 'active']
      default: active
    - name: tags
      value:
        - "{{ tags }}"
      description: |
        __Filterable__ An array of tags applied to this object.  Tags are for organizational purposes only.
    - name: ttl_sec
      value: {{ ttl_sec }}
      description: |
        "Time to Live" - the amount of time in seconds that this domain's records may be cached by resolvers or other domain servers.
        - Valid values are 0, 30, 120, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.
        - Any other value is rounded up to the nearest valid value.
        - A value of 0 is equivalent to the default value of 86400.
      default: 0
    - name: type
      value: "{{ type }}"
      description: |
        Whether this domain represents the authoritative source of information for the domain it describes (\`master\`), or whether it is a read-only copy of a master (\`slave\`).
      valid_values: ['master', 'slave']
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

Update information about a Domain in Linode's DNS Manager.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.domains.domains
SET 
axfr_ips = '{{ axfr_ips }}',
description = '{{ description }}',
domain = '{{ domain }}',
expire_sec = {{ expire_sec }},
group = '{{ group }}',
master_ips = '{{ master_ips }}',
refresh_sec = {{ refresh_sec }},
retry_sec = {{ retry_sec }},
soa_email = '{{ soa_email }}',
status = '{{ status }}',
tags = '{{ tags }}',
ttl_sec = {{ ttl_sec }},
type = '{{ type }}'
WHERE 
domainId = '{{ domainId }}' --required
RETURNING
id,
axfr_ips,
description,
domain,
expire_sec,
group,
master_ips,
refresh_sec,
retry_sec,
soa_email,
status,
tags,
ttl_sec,
type;
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

Deletes a Domain from Linode's DNS Manager. The Domain will be removed from Linode's nameservers shortly after this operation completes. This also deletes all associated Domain Records.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.domains.domains
WHERE domainId = '{{ domainId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="import"
    values={[
        { label: 'import', value: 'import' },
        { label: 'clone', value: 'clone' }
    ]}
>
<TabItem value="import">

Imports a domain zone from a remote nameserver. Your nameserver must allow zone transfers (AXFR) from the following IPs:<br /><br />- 96.126.114.97<br />- 96.126.114.98<br />- 2600:3c00::5e<br />- 2600:3c00::5f<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.domains.domains.import 
@@json=
'{
"domain": "{{ domain }}", 
"remote_nameserver": "{{ remote_nameserver }}"
}'
;
```
</TabItem>
<TabItem value="clone">

Clones a Domain and all associated DNS records from a Domain that is registered in Linode's DNS manager.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.domains.domains.clone 
@domainId='{{ domainId }}' --required 
@@json=
'{
"domain": "{{ domain }}"
}'
;
```
</TabItem>
</Tabs>
