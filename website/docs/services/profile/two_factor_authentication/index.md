--- 
title: two_factor_authentication
hide_title: false
hide_table_of_contents: false
keywords:
  - two_factor_authentication
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

Creates, updates, deletes, gets or lists a <code>two_factor_authentication</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="two_factor_authentication" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.profile.two_factor_authentication" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#disable"><CopyableCode code="disable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Disables two-factor authentication (2FA) for your user. Once successful, login attempts from untrusted computers will only require a password. Keep 2FA enabled to protect your account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#enable"><CopyableCode code="enable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Generates a secret key for your user. To enable two-factor authentication (2FA), enter this secret into your third-party authenticator application. To complete the 2FA setup, use the [Enable two-factor authentication](https://techdocs.akamai.com/linode-api/reference/post-tfa-confirm) operation to enter a one-time passcode (OTP) from your authenticator app. Once enabled, logins from untrusted computers are required to provide an OTP before they are successful.<br /><br />Run the [Answer security questions](https://techdocs.akamai.com/linode-api/reference/post-security-questions) operation.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#confirm"><CopyableCode code="confirm" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Confirms that you can successfully generate one-time codes. Once confirmed, 2FA is enabled on your account. Login attempts from untrusted computers will be required to provide a one-time code before they are successful.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="disable"
    values={[
        { label: 'disable', value: 'disable' },
        { label: 'enable', value: 'enable' },
        { label: 'confirm', value: 'confirm' }
    ]}
>
<TabItem value="disable">

Disables two-factor authentication (2FA) for your user. Once successful, login attempts from untrusted computers will only require a password. Keep 2FA enabled to protect your account.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.profile.two_factor_authentication.disable 

;
```
</TabItem>
<TabItem value="enable">

Generates a secret key for your user. To enable two-factor authentication (2FA), enter this secret into your third-party authenticator application. To complete the 2FA setup, use the [Enable two-factor authentication](https://techdocs.akamai.com/linode-api/reference/post-tfa-confirm) operation to enter a one-time passcode (OTP) from your authenticator app. Once enabled, logins from untrusted computers are required to provide an OTP before they are successful.<br /><br />Run the [Answer security questions](https://techdocs.akamai.com/linode-api/reference/post-security-questions) operation.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.profile.two_factor_authentication.enable 

;
```
</TabItem>
<TabItem value="confirm">

Confirms that you can successfully generate one-time codes. Once confirmed, 2FA is enabled on your account. Login attempts from untrusted computers will be required to provide a one-time code before they are successful.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.profile.two_factor_authentication.confirm 
@@json=
'{
"tfa_code": "{{ tfa_code }}"
}'
;
```
</TabItem>
</Tabs>
