--- 
title: trusted_devices
hide_title: false
hide_table_of_contents: false
keywords:
  - trusted_devices
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

Creates, updates, deletes, gets or lists a <code>trusted_devices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="trusted_devices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.profile.trusted_devices" /></td></tr>
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

The requested TrustedDevice object.

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
    <td>__Read-only__ The unique ID for this TrustedDevice.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this Remember Me session was started.  This corresponds to the time of login with the "Remember Me" box checked. (example: 2018-01-01T01:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="expiry" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this TrustedDevice session expires.  Sessions typically last 30 days. (example: 2018-01-31T01:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="last_authenticated" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ The last time this TrustedDevice was successfully used to authenticate to [login.linode.com](https://login.linode.com). (example: 2018-01-05T12:57:12)</td>
</tr>
<tr>
    <td><CopyableCode code="last_remote_addr" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The last IP Address to successfully authenticate with this TrustedDevice. (example: 203.0.113.1)</td>
</tr>
<tr>
    <td><CopyableCode code="user_agent" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The User Agent of the browser that created this TrustedDevice session. (example: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36 Vivaldi/2.1.1337.36)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Returns a paginated list of TrustedDevice objects.

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
    <td>__Read-only__ The unique ID for this TrustedDevice.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this Remember Me session was started.  This corresponds to the time of login with the "Remember Me" box checked. (example: 2018-01-01T01:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="expiry" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When this TrustedDevice session expires.  Sessions typically last 30 days. (example: 2018-01-31T01:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="last_authenticated" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ The last time this TrustedDevice was successfully used to authenticate to [login.linode.com](https://login.linode.com). (example: 2018-01-05T12:57:12)</td>
</tr>
<tr>
    <td><CopyableCode code="last_remote_addr" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The last IP Address to successfully authenticate with this TrustedDevice. (example: 203.0.113.1)</td>
</tr>
<tr>
    <td><CopyableCode code="user_agent" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The User Agent of the browser that created this TrustedDevice session. (example: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36 Vivaldi/2.1.1337.36)</td>
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
    <td><a href="#parameter-deviceId"><code>deviceId</code></a></td>
    <td></td>
    <td>Returns a single active trusted device for your user.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Returns a paginated list of active trusted devices for your user. Browsers with an active Remember Me Session are logged into your account until the session expires or is revoked.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-deviceId"><code>deviceId</code></a></td>
    <td></td>
    <td>Revoke an active trusted device for your user.  Once a trusted device is revoked, this device will have to log in again before accessing your account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-deviceId">
    <td><CopyableCode code="deviceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the TrustedDevice.</td>
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

Returns a single active trusted device for your user.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
created,
expiry,
last_authenticated,
last_remote_addr,
user_agent
FROM linode.profile.trusted_devices
WHERE deviceId = '{{ deviceId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns a paginated list of active trusted devices for your user. Browsers with an active Remember Me Session are logged into your account until the session expires or is revoked.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
created,
expiry,
last_authenticated,
last_remote_addr,
user_agent
FROM linode.profile.trusted_devices
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

Revoke an active trusted device for your user.  Once a trusted device is revoked, this device will have to log in again before accessing your account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.profile.trusted_devices
WHERE deviceId = '{{ deviceId }}' --required
;
```
</TabItem>
</Tabs>
