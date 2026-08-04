--- 
title: promo_credits
hide_title: false
hide_table_of_contents: false
keywords:
  - promo_credits
  - account
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

Creates, updates, deletes, gets or lists a <code>promo_credits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="promo_credits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.account.promo_credits" /></td></tr>
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
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-promo_code"><code>promo_code</code></a></td>
    <td></td>
    <td>Adds an expiring Promo Credit to your account. The following restrictions apply:<br /><br />- Your account needs to be less than 90 days old.<br /><br />- You can't already have a Promo Credit on your account.<br /><br />- The user making the request needs to be unrestricted. You can run the [Update a user](https://techdocs.akamai.com/linode-api/reference/put-user) operation to change a user's restricted status.<br /><br />- The `promo_code` needs to be valid and unexpired.<br /><br />__Parent and child accounts__<br /><br />In a [parent and child account](https://www.linode.com/docs/guides/parent-child-accounts/) environment, the following apply:<br /><br />- Child account users can't run this operation. These users don't have access to billing-related operations.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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

## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Adds an expiring Promo Credit to your account. The following restrictions apply:<br /><br />- Your account needs to be less than 90 days old.<br /><br />- You can't already have a Promo Credit on your account.<br /><br />- The user making the request needs to be unrestricted. You can run the [Update a user](https://techdocs.akamai.com/linode-api/reference/put-user) operation to change a user's restricted status.<br /><br />- The `promo_code` needs to be valid and unexpired.<br /><br />__Parent and child accounts__<br /><br />In a [parent and child account](https://www.linode.com/docs/guides/parent-child-accounts/) environment, the following apply:<br /><br />- Child account users can't run this operation. These users don't have access to billing-related operations.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.account.promo_credits (
promo_code
)
SELECT 
'{{ promo_code }}' /* required */
RETURNING
credit_monthly_cap,
credit_remaining,
description,
expire_dt,
image_url,
service_type,
summary,
this_month_credit_remaining
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: promo_credits
  props:
    - name: promo_code
      value: "{{ promo_code }}"
      description: |
        The Promo Code.
`}</CodeBlock>

</TabItem>
</Tabs>
