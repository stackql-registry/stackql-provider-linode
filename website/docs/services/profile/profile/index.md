--- 
title: profile
hide_title: false
hide_table_of_contents: false
keywords:
  - profile
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

Creates, updates, deletes, gets or lists a <code>profile</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="profile" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.profile.profile" /></td></tr>
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

Profile response.

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
    <td><CopyableCode code="authentication_type" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ This account's Cloud Manager authentication type. You choose an authentication type in Cloud Manager and Akamai authorizes it when you log into your account. Authentication types include your user's password (in conjunction with your username), or the name of your identity provider, such as GitHub. Here are some examples:  - If a user has never used third-party authentication, the authentication type will be `password`.  - If a user is using third-party authentication, the name of their identity provider is used for the authentication type, for example, `github`.  - If a user has used third-party authentication and has since revoked it, the authentication type is `password`. (password, github) (example: password)</td>
</tr>
<tr>
    <td><CopyableCode code="authorized_keys" /></td>
    <td><code>array</code></td>
    <td>Your user can use these SSH Keys to access Lish. This value is ignored if `lish_auth_method` is `disabled`.</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string (email)</code></td>
    <td>Your email address. We use this address for Akamai Cloud Computing-related communication. (example: example-user@gmail.com)</td>
</tr>
<tr>
    <td><CopyableCode code="email_notifications" /></td>
    <td><code>boolean</code></td>
    <td>When set to `true`, you will receive email notifications about account activity. When `false`, you may still receive business-critical communications through email.</td>
</tr>
<tr>
    <td><CopyableCode code="ip_whitelist_enabled" /></td>
    <td><code>boolean</code></td>
    <td>When set to `true`, your user logins are only allowed from whitelisted IPs. This setting is deprecated, and can't be enabled. If you disable this setting, you won't be able to re-enable it.</td>
</tr>
<tr>
    <td><CopyableCode code="lish_auth_method" /></td>
    <td><code>string</code></td>
    <td>The authentication methods that you can use when connecting to the [Linode Shell (Lish)](https://www.linode.com/docs/guides/lish/).  - `keys_only` is the most secure if you intend to use Lish.  - `disabled` is recommended if you don't want to use Lish.  - If this account's Cloud Manager authentication type is set to a third-party authentication method, you can't use `password_keys` as your Lish authentication method. Run the [Get a profile](https://techdocs.akamai.com/linode-api/reference/get-profile) operation to view your account's Cloud Manager `authentication_type` field. (password_keys, keys_only, disabled) (example: keys_only)</td>
</tr>
<tr>
    <td><CopyableCode code="referrals" /></td>
    <td><code>object</code></td>
    <td>__Read-only__ Information about your status in our referral program. The API makes this information available after this profile's account has established at least $25.00 USD of total payments.</td>
</tr>
<tr>
    <td><CopyableCode code="restricted" /></td>
    <td><code>boolean</code></td>
    <td>When set to `true`, there are restrictions on what your user can access on your account. Run [List grants](https://techdocs.akamai.com/linode-api/reference/get-profile-grants) to get details on what entities and actions you can access and perform.</td>
</tr>
<tr>
    <td><CopyableCode code="timezone" /></td>
    <td><code>string</code></td>
    <td>The time zone you want to display for your Linode assets. This API doesn't directly use this time zone. It's provided for the benefit of clients such as the Akamai Cloud Manager and other clients built on the API. All times returned by the API are in UTC. (example: US/Eastern)</td>
</tr>
<tr>
    <td><CopyableCode code="two_factor_auth" /></td>
    <td><code>boolean</code></td>
    <td>When set to `true`, a login from an untrusted computer requires two-factor authentication. You also need to run [Create a two factor secret](https://techdocs.akamai.com/linode-api/reference/post-tfa-enable) to enable two-factor authentication.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ Your unique ID in our system. This value will never change, and can safely be used to identify your user.</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ Your username, used for logging in to our system. (example: exampleUser)</td>
</tr>
<tr>
    <td><CopyableCode code="verified_phone_number" /></td>
    <td><code>string (phone)</code></td>
    <td>__Read-only__ The phone number verified for this profile with the [Verify a phone number](https://techdocs.akamai.com/linode-api/reference/post-profile-phone-number-verify) operation. Displayed as `null` if the profile doesn't have a verified phone number. (example: +5555555555)</td>
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
    <td>Returns information about the current user. Use this to see who is acting in applications where more than one token is managed, such as a third-party OAuth application.<br /><br />&gt; 📘<br />&gt;<br />&gt; A third-party OAuth application accessing a profile with this operation has full access to all aspects of that profile.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td></td>
    <td></td>
    <td>Update information in your profile. You need the `account:read_write` [OAuth scope](https://techdocs.akamai.com/linode-api/reference/get-started#oauth-reference) to use this operation.<br /><br />**Parent and child accounts**<br /><br />In a [parent and child account](https://www.linode.com/docs/guides/parent-child-accounts/) environment, you can't edit the `email` for a child account parent user (proxy user). This value is fixed and set when you provision this environment.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#get_preferences"><CopyableCode code="get_preferences" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>View a list of user preferences tied to the OAuth client that generated the token making the request. The user preferences endpoints allow consumers of the API to store arbitrary JSON data, such as a user's font size preference or preferred display name. User preferences are available for each OAuth client registered to your account, and as such an account can have multiple user preferences. __OAuth scopes__.<br /><br />    ```<br />    account:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update_preferences"><CopyableCode code="update_preferences" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Updates a user's preferences. These preferences are tied to the OAuth client that generated the token making the request. The user preferences endpoints allow consumers of the API to store arbitrary JSON data, such as a user's font size preference or preferred display name. An account may have multiple preferences. Preferences, and the pertaining request body, may contain any arbitrary JSON data that the user would like to store. __OAuth scopes__.<br /><br />    ```<br />    account:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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

Returns information about the current user. Use this to see who is acting in applications where more than one token is managed, such as a third-party OAuth application.<br /><br />&gt; 📘<br />&gt;<br />&gt; A third-party OAuth application accessing a profile with this operation has full access to all aspects of that profile.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)

```sql
SELECT
authentication_type,
authorized_keys,
email,
email_notifications,
ip_whitelist_enabled,
lish_auth_method,
referrals,
restricted,
timezone,
two_factor_auth,
uid,
username,
verified_phone_number
FROM linode.profile.profile
;
```
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

Update information in your profile. You need the `account:read_write` [OAuth scope](https://techdocs.akamai.com/linode-api/reference/get-started#oauth-reference) to use this operation.<br /><br />**Parent and child accounts**<br /><br />In a [parent and child account](https://www.linode.com/docs/guides/parent-child-accounts/) environment, you can't edit the `email` for a child account parent user (proxy user). This value is fixed and set when you provision this environment.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.profile.profile
SET 
authorized_keys = '{{ authorized_keys }}',
email = '{{ email }}',
email_notifications = {{ email_notifications }},
ip_whitelist_enabled = {{ ip_whitelist_enabled }},
lish_auth_method = '{{ lish_auth_method }}',
restricted = {{ restricted }},
timezone = '{{ timezone }}',
two_factor_auth = {{ two_factor_auth }}
RETURNING
authentication_type,
authorized_keys,
email,
email_notifications,
ip_whitelist_enabled,
lish_auth_method,
referrals,
restricted,
timezone,
two_factor_auth,
uid,
username,
verified_phone_number;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="get_preferences"
    values={[
        { label: 'get_preferences', value: 'get_preferences' },
        { label: 'update_preferences', value: 'update_preferences' }
    ]}
>
<TabItem value="get_preferences">

View a list of user preferences tied to the OAuth client that generated the token making the request. The user preferences endpoints allow consumers of the API to store arbitrary JSON data, such as a user's font size preference or preferred display name. User preferences are available for each OAuth client registered to your account, and as such an account can have multiple user preferences. __OAuth scopes__.<br /><br />    ```<br />    account:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.profile.profile.get_preferences 

;
```
</TabItem>
<TabItem value="update_preferences">

Updates a user's preferences. These preferences are tied to the OAuth client that generated the token making the request. The user preferences endpoints allow consumers of the API to store arbitrary JSON data, such as a user's font size preference or preferred display name. An account may have multiple preferences. Preferences, and the pertaining request body, may contain any arbitrary JSON data that the user would like to store. __OAuth scopes__.<br /><br />    ```<br />    account:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.profile.profile.update_preferences 

;
```
</TabItem>
</Tabs>
