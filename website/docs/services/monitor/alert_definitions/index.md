--- 
title: alert_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - alert_definitions
  - monitor
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

Creates, updates, deletes, gets or lists an <code>alert_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="alert_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.monitor.alert_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list_by_service_type', value: 'list_by_service_type' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Returns the specified alert definition.

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
    <td>__Filterable__ The unique identifier for the alert definition.</td>
</tr>
<tr>
    <td><CopyableCode code="alert_channels" /></td>
    <td><code>array</code></td>
    <td>The alert channels set up for use with this alert. Run the [List alert channels](https://techdocs.akamai.com/linode-api/reference/get-alert-channels) operation to see all of the available channels.</td>
</tr>
<tr>
    <td><CopyableCode code="class" /></td>
    <td><code>string</code></td>
    <td>The plan type for the Managed Database cluster, either `shared` or `dedicated`. This only applies to a `system` alert for a `service_type` of `dbaas` (Managed Databases). For `user` alerts for `dbaas`, this is returned as `null`. (shared, dedicated) (example: dedicated)</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the alert definition was created. (example: 2025-03-20 01:42:11)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>For a `user` alert definition, this is the user on your account that [created](https://techdocs.akamai.com/linode-api/reference/post-alert-definition-for-service-type) it. For a `system` alert definition, this is returned as `system`. (example: system)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An additional description for the alert definition. (example: Alert for my PostgreSQL database)</td>
</tr>
<tr>
    <td><CopyableCode code="entity_ids" /></td>
    <td><code>array</code></td>
    <td>The `id` for each individual entity from a `service_type`. Get this value by running the list operation for the appropriate entity. For example, if your entity is one of your PostgreSQL databases, run the [List PostgreSQL Managed Databases](https://techdocs.akamai.com/linode-api/reference/get-databases-postgre-sql-instances) operation and store the `id` for the appropriate database from the response.  &gt; 📘 &gt; &gt; The format `type` for an `entity_id` may vary, based on the Akamai Cloud `service_type`. For example, the `dbaas` service returns an integer value for an `id`, that you'd use for the `entity_id`. Other services may return a string for their `id`. With the Alerts operations, all of these formats are recognized as an `entity_id`, when you include them as a `string`.</td>
</tr>
<tr>
    <td><CopyableCode code="has_more_resources" /></td>
    <td><code>boolean</code></td>
    <td>Whether there are additional `entity_ids` associated with the alert for which the user doesn't have at least `read-only` access.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The name of the alert definition. This is used for display purposes in Akamai Cloud Manager. (example: High Memory Usage Plan Dedicated)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_criteria" /></td>
    <td><code>object</code></td>
    <td>Details for the rules required to trigger the alert.</td>
</tr>
<tr>
    <td><CopyableCode code="service_type" /></td>
    <td><code>string</code></td>
    <td>The identifier for the Akamai Cloud Computing service. Use this value to call out the service in other Monitor operations in the API. (example: dbaas)</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>integer</code></td>
    <td>The severity of the alert. Supported values include `3` for info, `2` for low, `1` for medium, and `0` for severe. (0, 1, 2, 3)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The current status of the alert. This can be either `enabled`, `disabled`, `in progress`, or `failed`. (enabled, disabled, in progress, failed) (example: enabled)</td>
</tr>
<tr>
    <td><CopyableCode code="trigger_conditions" /></td>
    <td><code>object</code></td>
    <td>The conditions that need to be met to send a notification for the alert.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The type of alert. This can be either `user` for an alert specific to the current user, or `system` for one that applies to all users on your account. (user, system) (example: system)</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the alert definition was last updated. This is the same as `created` if the alert definition hasn't been updated. (example: 2025-03-20 01:42:11)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>For a `user` alert definition, this is the user on your account that last [updated](https://techdocs.akamai.com/linode-api/reference/put-alert-definition) it. For a `system` alert definition, this is returned as `system`. If it hasn't been updated, this value is the same as `created_by`. (example: system)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_by_service_type">

Returns a paginated list of alert definitions for the specified service type.

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
    <td>__Filterable__ The unique identifier for the alert definition.</td>
</tr>
<tr>
    <td><CopyableCode code="alert_channels" /></td>
    <td><code>array</code></td>
    <td>The alert channels set up for use with this alert. Run the [List alert channels](https://techdocs.akamai.com/linode-api/reference/get-alert-channels) operation to see all of the available channels.</td>
</tr>
<tr>
    <td><CopyableCode code="class" /></td>
    <td><code>string</code></td>
    <td>The plan type for the Managed Database cluster, either `shared` or `dedicated`. This only applies to a `system` alert for a `service_type` of `dbaas` (Managed Databases). For `user` alerts for `dbaas`, this is returned as `null`. (shared, dedicated) (example: dedicated)</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the alert definition was created. (example: 2025-03-20 01:42:11)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>For a `user` alert definition, this is the user on your account that [created](https://techdocs.akamai.com/linode-api/reference/post-alert-definition-for-service-type) it. For a `system` alert definition, this is returned as `system`. (example: system)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An additional description for the alert definition. (example: Alert for my PostgreSQL database)</td>
</tr>
<tr>
    <td><CopyableCode code="entity_ids" /></td>
    <td><code>array</code></td>
    <td>The `id` for each individual entity from a `service_type`. Get this value by running the list operation for the appropriate entity. For example, if your entity is one of your PostgreSQL databases, run the [List PostgreSQL Managed Databases](https://techdocs.akamai.com/linode-api/reference/get-databases-postgre-sql-instances) operation and store the `id` for the appropriate database from the response.  &gt; 📘 &gt; &gt; The format `type` for an `entity_id` may vary, based on the Akamai Cloud `service_type`. For example, the `dbaas` service returns an integer value for an `id`, that you'd use for the `entity_id`. Other services may return a string for their `id`. With the Alerts operations, all of these formats are recognized as an `entity_id`, when you include them as a `string`.</td>
</tr>
<tr>
    <td><CopyableCode code="has_more_resources" /></td>
    <td><code>boolean</code></td>
    <td>Whether there are additional `entity_ids` associated with the alert for which the user doesn't have at least `read-only` access.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The name of the alert definition. This is used for display purposes in Akamai Cloud Manager. (example: High Memory Usage Plan Dedicated)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_criteria" /></td>
    <td><code>object</code></td>
    <td>Details for the rules required to trigger the alert.</td>
</tr>
<tr>
    <td><CopyableCode code="service_type" /></td>
    <td><code>string</code></td>
    <td>The identifier for the Akamai Cloud Computing service. Use this value to call out the service in other Monitor operations in the API. (example: dbaas)</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>integer</code></td>
    <td>The severity of the alert. Supported values include `3` for info, `2` for low, `1` for medium, and `0` for severe. (0, 1, 2, 3)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The current status of the alert. This can be either `enabled`, `disabled`, `in progress`, or `failed`. (enabled, disabled, in progress, failed) (example: enabled)</td>
</tr>
<tr>
    <td><CopyableCode code="trigger_conditions" /></td>
    <td><code>object</code></td>
    <td>The conditions that need to be met to send a notification for the alert.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The type of alert. This can be either `user` for an alert specific to the current user, or `system` for one that applies to all users on your account. (user, system) (example: system)</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the alert definition was last updated. This is the same as `created` if the alert definition hasn't been updated. (example: 2025-03-20 01:42:11)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>For a `user` alert definition, this is the user on your account that last [updated](https://techdocs.akamai.com/linode-api/reference/put-alert-definition) it. For a `system` alert definition, this is returned as `system`. If it hasn't been updated, this value is the same as `created_by`. (example: system)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Returns a paginated list of all alert definitions.

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
    <td>__Filterable__ The unique identifier for the alert definition.</td>
</tr>
<tr>
    <td><CopyableCode code="alert_channels" /></td>
    <td><code>array</code></td>
    <td>The alert channels set up for use with this alert. Run the [List alert channels](https://techdocs.akamai.com/linode-api/reference/get-alert-channels) operation to see all of the available channels.</td>
</tr>
<tr>
    <td><CopyableCode code="class" /></td>
    <td><code>string</code></td>
    <td>The plan type for the Managed Database cluster, either `shared` or `dedicated`. This only applies to a `system` alert for a `service_type` of `dbaas` (Managed Databases). For `user` alerts for `dbaas`, this is returned as `null`. (shared, dedicated) (example: dedicated)</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the alert definition was created. (example: 2025-03-20 01:42:11)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>For a `user` alert definition, this is the user on your account that [created](https://techdocs.akamai.com/linode-api/reference/post-alert-definition-for-service-type) it. For a `system` alert definition, this is returned as `system`. (example: system)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An additional description for the alert definition. (example: Alert for my PostgreSQL database)</td>
</tr>
<tr>
    <td><CopyableCode code="entity_ids" /></td>
    <td><code>array</code></td>
    <td>The `id` for each individual entity from a `service_type`. Get this value by running the list operation for the appropriate entity. For example, if your entity is one of your PostgreSQL databases, run the [List PostgreSQL Managed Databases](https://techdocs.akamai.com/linode-api/reference/get-databases-postgre-sql-instances) operation and store the `id` for the appropriate database from the response.  &gt; 📘 &gt; &gt; The format `type` for an `entity_id` may vary, based on the Akamai Cloud `service_type`. For example, the `dbaas` service returns an integer value for an `id`, that you'd use for the `entity_id`. Other services may return a string for their `id`. With the Alerts operations, all of these formats are recognized as an `entity_id`, when you include them as a `string`.</td>
</tr>
<tr>
    <td><CopyableCode code="has_more_resources" /></td>
    <td><code>boolean</code></td>
    <td>Whether there are additional `entity_ids` associated with the alert for which the user doesn't have at least `read-only` access.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The name of the alert definition. This is used for display purposes in Akamai Cloud Manager. (example: High Memory Usage Plan Dedicated)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_criteria" /></td>
    <td><code>object</code></td>
    <td>Details for the rules required to trigger the alert.</td>
</tr>
<tr>
    <td><CopyableCode code="service_type" /></td>
    <td><code>string</code></td>
    <td>The identifier for the Akamai Cloud Computing service. Use this value to call out the service in other Monitor operations in the API. (example: dbaas)</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>integer</code></td>
    <td>The severity of the alert. Supported values include `3` for info, `2` for low, `1` for medium, and `0` for severe. (0, 1, 2, 3)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The current status of the alert. This can be either `enabled`, `disabled`, `in progress`, or `failed`. (enabled, disabled, in progress, failed) (example: enabled)</td>
</tr>
<tr>
    <td><CopyableCode code="trigger_conditions" /></td>
    <td><code>object</code></td>
    <td>The conditions that need to be met to send a notification for the alert.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The type of alert. This can be either `user` for an alert specific to the current user, or `system` for one that applies to all users on your account. (user, system) (example: system)</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the alert definition was last updated. This is the same as `created` if the alert definition hasn't been updated. (example: 2025-03-20 01:42:11)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>For a `user` alert definition, this is the user on your account that last [updated](https://techdocs.akamai.com/linode-api/reference/put-alert-definition) it. For a `system` alert definition, this is returned as `system`. If it hasn't been updated, this value is the same as `created_by`. (example: system)</td>
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
    <td><a href="#parameter-serviceType"><code>serviceType</code></a>, <a href="#parameter-alertId"><code>alertId</code></a></td>
    <td></td>
    <td>__Beta__ Returns a specific alert definition.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation is beta. Call it using the `v4beta` path in its URL. __OAuth scopes__.<br /><br />    ```<br />    monitor:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)<br /><br />-<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)</td>
</tr>
<tr>
    <td><a href="#list_by_service_type"><CopyableCode code="list_by_service_type" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-serviceType"><code>serviceType</code></a></td>
    <td></td>
    <td>__Beta__ Returns all available alert definitions for a specific service type.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation is beta. Call it using the `v4beta` path in its URL. __OAuth scopes__.<br /><br />    ```<br />    monitor:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)<br /><br />-<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>__Beta__ Returns all available alert definitions on your account.<br /><br />&gt; 📘<br />&gt;<br />&gt; - This operation is beta. Call it using the `v4beta` path in its URL.<br />&gt;<br />&gt; - [Filtering](https://techdocs.akamai.com/linode-api/reference/filtering-and-sorting) is supported for specific objects, labeled as **Filterable**. However, only the `+and` and `+or` operators are supported, and you can't nest filter operators. __OAuth scopes__.<br /><br />    ```<br />    monitor:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)<br /><br />-<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-serviceType"><code>serviceType</code></a>, <a href="#parameter-label"><code>label</code></a>, <a href="#parameter-severity"><code>severity</code></a>, <a href="#parameter-rule_criteria"><code>rule_criteria</code></a>, <a href="#parameter-trigger_conditions"><code>trigger_conditions</code></a>, <a href="#parameter-channel_ids"><code>channel_ids</code></a></td>
    <td></td>
    <td>__Beta__ Create a new alert definition for a specific service type. Akamai refers to these as `user` alerts. You need `read_only` access to the [scope](https://techdocs.akamai.com/linode-api/reference/get-started#oauth-reference) for the selected `serviceType`. Check out this [workflow](https://techdocs.akamai.com/linode-api/reference/create-a-logs-stream) for the basics on set up of a destination and a stream to gather logs.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation is beta. Call it using the `v4beta` path in its URL. __OAuth scopes__.<br /><br />    ```<br />    monitor:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)<br /><br />-<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-serviceType"><code>serviceType</code></a>, <a href="#parameter-alertId"><code>alertId</code></a></td>
    <td></td>
    <td>__Beta__ Update an existing alert definition. You need `read_only` access to the [scope](https://techdocs.akamai.com/linode-api/reference/get-started#oauth-reference) for the selected `serviceType`. Only include the objects in the request that you want to update. Leave any object out of the request to leave it set as is.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation is beta. Call it using the `v4beta` path in its URL.<br /><br />**User alert definitions**<br /><br />When updating an alert definition you've [created](https://techdocs.akamai.com/linode-api/reference/post-alert-definition-for-service-type), you can change the `status` to `enabled` or `disabled`. You can also modify the `label`, `description`, `severity`, `entity_ids`, `rule_criteria`, `trigger_conditions`, and `channel_ids` objects. If updating the `entity_ids`, `rule_criteria`, or `channel_ids` list objects, these points apply:<br /><br />- If you want to keep an existing item, you need to include it in the list.<br /><br />- If you want to remove an existing item, leave it out of the list.<br /><br />- To add a new item, include it in the list.<br /><br />- You can't pass an empty list to remove all items. This doesn't apply to the `entity_ids` or `dimension_filters` (in `rule_criteria`) list objects, because they are optional, while all other list objects are required.<br /><br />**System alert definitions**<br /><br />These are the default alert definitions offered by Akamai. You can only edit the `entity_ids` list object for these alerts. All of the points above regarding editing a list object apply here, too. __OAuth scopes__.<br /><br />    ```<br />    monitor:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)<br /><br />-<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-serviceType"><code>serviceType</code></a>, <a href="#parameter-alertId"><code>alertId</code></a></td>
    <td></td>
    <td>__Beta__ Delete a specific alert definition on your account.<br /><br />&gt; 📘<br />&gt;<br />&gt; - This operation is beta. Call it using the `v4beta` path in its URL.<br />&gt;<br />&gt; - You need `read_only` access to the [scope](https://techdocs.akamai.com/linode-api/reference/get-started#oauth-reference) for the target `serviceType`.<br />&gt;<br />&gt; - An [alert definition](https://techdocs.akamai.com/linode-api/reference/get-alert-definitions) with a `type` of `system` can't be deleted.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-alertId">
    <td><CopyableCode code="alertId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier assigned to the alert definition. Run the [List alert definitions](https://techdocs.akamai.com/linode-api/reference/get-alert-definitions) operation and store the `id` for the applicable alert definition.</td>
</tr>
<tr id="parameter-serviceType">
    <td><CopyableCode code="serviceType" /></td>
    <td><code>string</code></td>
    <td>The Akamai Cloud Computing service being monitored. To see your currently supported services, run the [List supported service types](https://techdocs.akamai.com/linode-api/reference/get-monitor-services) operation and store the appropriate `service_type`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list_by_service_type', value: 'list_by_service_type' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

__Beta__ Returns a specific alert definition.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation is beta. Call it using the `v4beta` path in its URL. __OAuth scopes__.<br /><br />    ```<br />    monitor:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)<br /><br />-<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)

```sql
SELECT
id,
alert_channels,
class,
created,
created_by,
description,
entity_ids,
has_more_resources,
label,
rule_criteria,
service_type,
severity,
status,
trigger_conditions,
type,
updated,
updated_by
FROM linode.monitor.alert_definitions
WHERE serviceType = '{{ serviceType }}' -- required
AND alertId = '{{ alertId }}' -- required
;
```
</TabItem>
<TabItem value="list_by_service_type">

__Beta__ Returns all available alert definitions for a specific service type.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation is beta. Call it using the `v4beta` path in its URL. __OAuth scopes__.<br /><br />    ```<br />    monitor:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)<br /><br />-<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)

```sql
SELECT
id,
alert_channels,
class,
created,
created_by,
description,
entity_ids,
has_more_resources,
label,
rule_criteria,
service_type,
severity,
status,
trigger_conditions,
type,
updated,
updated_by
FROM linode.monitor.alert_definitions
WHERE serviceType = '{{ serviceType }}' -- required
;
```
</TabItem>
<TabItem value="list">

__Beta__ Returns all available alert definitions on your account.<br /><br />&gt; 📘<br />&gt;<br />&gt; - This operation is beta. Call it using the `v4beta` path in its URL.<br />&gt;<br />&gt; - [Filtering](https://techdocs.akamai.com/linode-api/reference/filtering-and-sorting) is supported for specific objects, labeled as **Filterable**. However, only the `+and` and `+or` operators are supported, and you can't nest filter operators. __OAuth scopes__.<br /><br />    ```<br />    monitor:read_only<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)<br /><br />-<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)

```sql
SELECT
id,
alert_channels,
class,
created,
created_by,
description,
entity_ids,
has_more_resources,
label,
rule_criteria,
service_type,
severity,
status,
trigger_conditions,
type,
updated,
updated_by
FROM linode.monitor.alert_definitions
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

__Beta__ Create a new alert definition for a specific service type. Akamai refers to these as `user` alerts. You need `read_only` access to the [scope](https://techdocs.akamai.com/linode-api/reference/get-started#oauth-reference) for the selected `serviceType`. Check out this [workflow](https://techdocs.akamai.com/linode-api/reference/create-a-logs-stream) for the basics on set up of a destination and a stream to gather logs.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation is beta. Call it using the `v4beta` path in its URL. __OAuth scopes__.<br /><br />    ```<br />    monitor:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)<br /><br />-<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)

```sql
INSERT INTO linode.monitor.alert_definitions (
channel_ids,
description,
entity_ids,
label,
rule_criteria,
severity,
trigger_conditions,
serviceType
)
SELECT 
'{{ channel_ids }}' /* required */,
'{{ description }}',
'{{ entity_ids }}',
'{{ label }}' /* required */,
'{{ rule_criteria }}' /* required */,
{{ severity }} /* required */,
'{{ trigger_conditions }}' /* required */,
'{{ serviceType }}'
RETURNING
id,
alert_channels,
class,
created,
created_by,
description,
entity_ids,
has_more_resources,
label,
rule_criteria,
service_type,
severity,
status,
trigger_conditions,
type,
updated,
updated_by
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: alert_definitions
  props:
    - name: serviceType
      value: "{{ serviceType }}"
      description: Required parameter for the alert_definitions resource.
    - name: channel_ids
      value:
        - {{ channel_ids }}
      description: |
        The identifiers for the alert channels to use for the alert. Run the [List alert channels](https://techdocs.akamai.com/linode-api/reference/get-alert-channels) operation and store the \`id\` for the applicable channels.
    - name: description
      value: "{{ description }}"
      description: |
        An additional description for the alert definition.
    - name: entity_ids
      value:
        - "{{ entity_ids }}"
      description: |
        The \`id\` for each individual entity from a \`service_type\`. Get this value by running the list operation for the appropriate entity. For example, if your entity is one of your PostgreSQL databases, run the [List PostgreSQL Managed Databases](https://techdocs.akamai.com/linode-api/reference/get-databases-postgre-sql-instances) operation and store the \`id\` for the appropriate database from the response. You also need \`read_only\` access to the [scope](https://techdocs.akamai.com/linode-api/reference/get-started#oauth-reference) for the \`service_type\` for each of the \`entity_ids\`.
        > 📘
        >
        > The format \`type\` for an \`entity_id\` may vary, based on the Akamai Cloud \`service_type\`. For example, the \`dbaas\` service returns an integer value for an \`id\`, that you'd use for the \`entity_id\`, while other services may return a string for their \`id\`. With the Alerts operations, all of these formats are recognized as an \`entity_id\`, when you include them as a \`string\`.
    - name: label
      value: "{{ label }}"
      description: |
        The name of the alert definition. This is used for display purposes in Akamai Cloud Manager.
    - name: rule_criteria
      description: |
        Details for the rules required to trigger the alert.
      value:
        rules:
          - aggregate_function: "{{ aggregate_function }}"
            dimension_filters: "{{ dimension_filters }}"
            metric: "{{ metric }}"
            operator: "{{ operator }}"
            threshold: {{ threshold }}
    - name: severity
      value: {{ severity }}
      description: |
        The severity of the alert. Supported values include \`3\` for info, \`2\` for low, \`1\` for medium, and \`0\` for severe.
      valid_values: ['0', '1', '2', '3']
    - name: trigger_conditions
      description: |
        The conditions that need to be met to send a notification for the alert.
      value:
        criteria_condition: "{{ criteria_condition }}"
        evaluation_period_seconds: {{ evaluation_period_seconds }}
        polling_interval_seconds: {{ polling_interval_seconds }}
        trigger_occurrences: {{ trigger_occurrences }}
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

__Beta__ Update an existing alert definition. You need `read_only` access to the [scope](https://techdocs.akamai.com/linode-api/reference/get-started#oauth-reference) for the selected `serviceType`. Only include the objects in the request that you want to update. Leave any object out of the request to leave it set as is.<br /><br />&gt; 📘<br />&gt;<br />&gt; This operation is beta. Call it using the `v4beta` path in its URL.<br /><br />**User alert definitions**<br /><br />When updating an alert definition you've [created](https://techdocs.akamai.com/linode-api/reference/post-alert-definition-for-service-type), you can change the `status` to `enabled` or `disabled`. You can also modify the `label`, `description`, `severity`, `entity_ids`, `rule_criteria`, `trigger_conditions`, and `channel_ids` objects. If updating the `entity_ids`, `rule_criteria`, or `channel_ids` list objects, these points apply:<br /><br />- If you want to keep an existing item, you need to include it in the list.<br /><br />- If you want to remove an existing item, leave it out of the list.<br /><br />- To add a new item, include it in the list.<br /><br />- You can't pass an empty list to remove all items. This doesn't apply to the `entity_ids` or `dimension_filters` (in `rule_criteria`) list objects, because they are optional, while all other list objects are required.<br /><br />**System alert definitions**<br /><br />These are the default alert definitions offered by Akamai. You can only edit the `entity_ids` list object for these alerts. All of the points above regarding editing a list object apply here, too. __OAuth scopes__.<br /><br />    ```<br />    monitor:read_write<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)<br /><br />-<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)

```sql
REPLACE linode.monitor.alert_definitions
SET 
channel_ids = '{{ channel_ids }}',
description = '{{ description }}',
entity_ids = '{{ entity_ids }}',
label = '{{ label }}',
rule_criteria = '{{ rule_criteria }}',
severity = {{ severity }},
status = '{{ status }}',
trigger_conditions = '{{ trigger_conditions }}'
WHERE 
serviceType = '{{ serviceType }}' --required
AND alertId = '{{ alertId }}' --required
RETURNING
id,
alert_channels,
class,
created,
created_by,
description,
entity_ids,
has_more_resources,
label,
rule_criteria,
service_type,
severity,
status,
trigger_conditions,
type,
updated,
updated_by;
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

__Beta__ Delete a specific alert definition on your account.<br /><br />&gt; 📘<br />&gt;<br />&gt; - This operation is beta. Call it using the `v4beta` path in its URL.<br />&gt;<br />&gt; - You need `read_only` access to the [scope](https://techdocs.akamai.com/linode-api/reference/get-started#oauth-reference) for the target `serviceType`.<br />&gt;<br />&gt; - An [alert definition](https://techdocs.akamai.com/linode-api/reference/get-alert-definitions) with a `type` of `system` can't be deleted.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.monitor.alert_definitions
WHERE serviceType = '{{ serviceType }}' --required
AND alertId = '{{ alertId }}' --required
;
```
</TabItem>
</Tabs>
