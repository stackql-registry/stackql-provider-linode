--- 
title: events
hide_title: false
hide_table_of_contents: false
keywords:
  - events
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

Creates, updates, deletes, gets or lists an <code>events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.account.events" /></td></tr>
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

An Event object.

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
    <td>__Read-only__ The unique ID of this event.</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The action that caused this event. New actions may be added in the future. (account_agreement_eu_model, account_promo_apply, account_update, account_settings_update, backups_enable, backups_cancel, backups_restore, community_question_reply, community_like, community_mention, credit_card_updated, database_create, database_delete, database_update, database_failed, database_degraded, database_create_failed, database_update_failed, database_backup_create, database_backup_restore, database_backup_delete, database_credentials_reset, database_low_disk_space, database_scale, database_resize, database_resize_create, database_migrate, database_upgrade, database_suspend, database_resume, disk_create, disk_delete, disk_update, disk_duplicate, disk_imagize, disk_resize, dns_record_create, dns_record_delete, dns_record_update, dns_zone_create, dns_zone_delete, dns_zone_import, dns_zone_update, entity_transfer_accept, entity_transfer_accept_recipient, entity_transfer_cancel, entity_transfer_create, entity_transfer_fail, entity_transfer_stale, firewall_apply, firewall_create, firewall_delete, firewall_disable, firewall_enable, firewall_update, firewall_device_add, firewall_device_remove, firewall_rules_update, host_reboot, image_delete, image_update, image_upload, interface_create, interface_delete, interface_update, ipaddress_update, ipv6pool_add, ipv6pool_delete, lassie_reboot, lish_boot, linode_addip, linode_boot, linode_clone, linode_create, linode_delete, linode_update, linode_deleteip, linode_kvmify, linode_migrate, linode_migrate_datacenter, linode_migrate_datacenter_create, linode_mutate, linode_mutate_create, linode_poweroff_on, linode_reboot, linode_rebuild, linode_resize, linode_resize_create, linode_resize_warm_create, linode_shutdown, linode_snapshot, linode_config_create, linode_config_delete, linode_config_update, lke_control_plane_acl_create, lke_control_plane_acl_update, lke_control_plane_acl_delete, lke_cluster_create, lke_cluster_update, lke_cluster_delete, lke_cluster_recycle, lke_cluster_regenerate, lke_node_create, lke_node_delete, lke_node_recycle, lke_pool_create, lke_pool_delete, lke_pool_recycle, lke_kubeconfig_regenerate, lke_token_rotate, longviewclient_create, longviewclient_delete, longviewclient_update, managed_disabled, managed_enabled, managed_service_create, managed_service_delete, nodebalancer_create, nodebalancer_delete, nodebalancer_update, nodebalancer_config_create, nodebalancer_config_delete, nodebalancer_config_update, nodebalancer_node_create, nodebalancer_node_delete, nodebalancer_node_update, oauth_client_create, oauth_client_delete, oauth_client_secret_reset, oauth_client_update, obj_access_key_create, obj_access_key_delete, obj_access_key_update, password_reset, payment_method_add, payment_submitted, placement_group_assign, placement_group_became_compliant, placement_group_became_non_compliant, placement_group_create, placement_group_delete, placement_group_unassign, placement_group_update, profile_update, stackscript_create, stackscript_delete, stackscript_update, stackscript_publicize, stackscript_revise, subnet_create, subnet_delete, subnet_update, tag_create, tag_delete, tag_update, tax_id_valid, tax_id_invalid, tfa_disabled, tfa_enabled, ticket_attachment_upload, ticket_create, ticket_update, token_create, token_delete, token_update, user_create, user_update, user_delete, user_ssh_key_add, user_ssh_key_delete, user_ssh_key_update, vlan_attach, vlan_detach, volume_attach, volume_clone, volume_create, volume_delete, volume_update, volume_detach, volume_resize, volume_migrate, volume_migrate_scheduled, vpc_create, vpc_delete, vpc_update) (example: ticket_create)</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Read-only__ When the system created this event. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="details" /></td>
    <td><code>object</code></td>
    <td>__Beta__, __Read-only__ Maintenance details for this event, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>number</code></td>
    <td>__Read-only__ The number of seconds that it takes for the event to complete.</td>
</tr>
<tr>
    <td><CopyableCode code="entity" /></td>
    <td><code>object</code></td>
    <td>__Read-only__ Detailed information about the entity that triggered this event.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Additional information about the event. This can be a more detailed representation of an event that can help you diagnose non-obvious failures. (example: None)</td>
</tr>
<tr>
    <td><CopyableCode code="percent_complete" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ A percentage estimating the amount of time remaining for an event. Returned as `null` for notification events.</td>
</tr>
<tr>
    <td><CopyableCode code="rate" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The rate of completion of the event. Only some events return a `rate`, such as the `migration` and `resize` events.</td>
</tr>
<tr>
    <td><CopyableCode code="secondary_entity" /></td>
    <td><code>object</code></td>
    <td>__Read-only__ Detailed information about the event's secondary entity, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="seen" /></td>
    <td><code>boolean</code></td>
    <td>__Read-only__ If a user on your account has [marked an event as seen](https://techdocs.akamai.com/linode-api/reference/post-event-seen).</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The current status of this event. (failed, finished, notification, scheduled, started)</td>
</tr>
<tr>
    <td><CopyableCode code="time_remaining" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The estimated time remaining until the event completes. This is only returned for some in-progress migration events. Otherwise, `percent_complete` indicates how long until completion.</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ The name of the user whose action caused the event. (example: exampleUser)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Returns a paginated list of Event objects from the last 90 days.

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
    <td>__Filterable__ The unique ID of this event.</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>__Filterable__ The action that caused this event. New actions may be added in the future. (account_agreement_eu_model, account_promo_apply, account_update, account_settings_update, backups_enable, backups_cancel, backups_restore, community_question_reply, community_like, community_mention, credit_card_updated, database_create, database_delete, database_update, database_failed, database_degraded, database_create_failed, database_update_failed, database_backup_create, database_backup_restore, database_backup_delete, database_credentials_reset, database_low_disk_space, database_scale, database_resize, database_resize_create, database_migrate, database_upgrade, database_suspend, database_resume, disk_create, disk_delete, disk_update, disk_duplicate, disk_imagize, disk_resize, dns_record_create, dns_record_delete, dns_record_update, dns_zone_create, dns_zone_delete, dns_zone_import, dns_zone_update, entity_transfer_accept, entity_transfer_accept_recipient, entity_transfer_cancel, entity_transfer_create, entity_transfer_fail, entity_transfer_stale, firewall_apply, firewall_create, firewall_delete, firewall_disable, firewall_enable, firewall_update, firewall_device_add, firewall_device_remove, firewall_rules_update, host_reboot, image_delete, image_update, image_upload, interface_create, interface_delete, interface_update, ipaddress_update, ipv6pool_add, ipv6pool_delete, lassie_reboot, lish_boot, linode_addip, linode_boot, linode_clone, linode_create, linode_delete, linode_update, linode_deleteip, linode_kvmify, linode_migrate, linode_migrate_datacenter, linode_migrate_datacenter_create, linode_mutate, linode_mutate_create, linode_poweroff_on, linode_reboot, linode_rebuild, linode_resize, linode_resize_create, linode_resize_warm_create, linode_shutdown, linode_snapshot, linode_config_create, linode_config_delete, linode_config_update, lke_cluster_create, lke_cluster_update, lke_cluster_delete, lke_cluster_recycle, lke_cluster_regenerate, lke_control_plane_acl_create, lke_control_plane_acl_update, lke_control_plane_acl_delete, lke_node_create, lke_node_delete, lke_node_recycle, lke_pool_create, lke_pool_delete, lke_pool_recycle, lke_kubeconfig_regenerate, lke_token_rotate, longviewclient_create, longviewclient_delete, longviewclient_update, managed_disabled, managed_enabled, managed_service_create, managed_service_delete, nodebalancer_create, nodebalancer_delete, nodebalancer_update, nodebalancer_config_create, nodebalancer_config_delete, nodebalancer_config_update, nodebalancer_node_create, nodebalancer_node_delete, nodebalancer_node_update, oauth_client_create, oauth_client_delete, oauth_client_secret_reset, oauth_client_update, obj_access_key_create, obj_access_key_delete, obj_access_key_update, password_reset, payment_method_add, payment_submitted, placement_group_assign, placement_group_became_compliant, placement_group_became_non_compliant, placement_group_create, placement_group_delete, placement_group_unassign, placement_group_update, profile_update, stackscript_create, stackscript_delete, stackscript_update, stackscript_publicize, stackscript_revise, subnet_create, subnet_delete, subnet_update, tag_create, tag_delete, tag_update, tax_id_valid, tax_id_invalid, tfa_disabled, tfa_enabled, ticket_attachment_upload, ticket_create, ticket_update, token_create, token_delete, token_update, user_create, user_update, user_delete, user_ssh_key_add, user_ssh_key_delete, user_ssh_key_update, vlan_attach, vlan_detach, volume_attach, volume_clone, volume_create, volume_delete, volume_update, volume_detach, volume_resize, volume_migrate, volume_migrate_scheduled, vpc_create, vpc_delete, vpc_update) (example: ticket_create)</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>__Filterable__ When the system created this event. (example: 2018-01-01T00:01:01)</td>
</tr>
<tr>
    <td><CopyableCode code="details" /></td>
    <td><code>object</code></td>
    <td>__Beta__ Maintenance details for this event, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>number</code></td>
    <td>The number of seconds that it takes for the event to complete.</td>
</tr>
<tr>
    <td><CopyableCode code="entity" /></td>
    <td><code>object</code></td>
    <td>Detailed information about the entity that triggered this event.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Additional information about the event. This can be a more detailed representation of an event that can help you diagnose non-obvious failures. (example: None)</td>
</tr>
<tr>
    <td><CopyableCode code="percent_complete" /></td>
    <td><code>integer</code></td>
    <td>A percentage estimating the amount of time remaining for an event. Returned as `null` for notification events.</td>
</tr>
<tr>
    <td><CopyableCode code="rate" /></td>
    <td><code>string</code></td>
    <td>The rate of completion of the event. Only some events return a `rate`, such as the `migration` and `resize` events.</td>
</tr>
<tr>
    <td><CopyableCode code="secondary_entity" /></td>
    <td><code>object</code></td>
    <td>Detailed information about the event's secondary entity, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="seen" /></td>
    <td><code>boolean</code></td>
    <td>If a user on your account has [marked an event as seen](https://techdocs.akamai.com/linode-api/reference/post-event-seen).</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of this event. (completed, failed, finished, in_progress, notification, scheduled, started)</td>
</tr>
<tr>
    <td><CopyableCode code="time_remaining" /></td>
    <td><code>string</code></td>
    <td>The estimated time remaining until the event completes. This is only returned for some in-progress migration events. Otherwise, the `percent_complete` attribute indicates how long until completion.</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The name of the user whose action caused the event. (example: exampleUser)</td>
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
    <td><a href="#parameter-eventId"><code>eventId</code></a></td>
    <td></td>
    <td>Returns a single event object.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-X-Filter"><code>X-Filter</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Returns a collection of event objects that represent actions you've taken on your account, over the last 90 days. The events returned depend on your user grants.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#mark_seen"><CopyableCode code="mark_seen" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-eventId"><code>eventId</code></a></td>
    <td></td>
    <td>Acknowledge an event by marking it as seen.<br /><br />&gt; 📘<br />&gt;<br />&gt; On June 17, 2025, the "Mark an event as read" operation was sunset. Attempts to call it will return a 404. Use this operation instead.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-eventId">
    <td><CopyableCode code="eventId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Event to designate as seen.</td>
</tr>
<tr id="parameter-X-Filter">
    <td><CopyableCode code="X-Filter" /></td>
    <td><code></code></td>
    <td>Specifies a JSON object to filter down the results. See [Filtering and sorting](https://techdocs.akamai.com/linode-api/reference/filtering-and-sorting) for details. (example: &#123;&#123;X-Filter&#125;&#125;)</td>
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

Returns a single event object.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
action,
created,
details,
duration,
entity,
message,
percent_complete,
rate,
secondary_entity,
seen,
status,
time_remaining,
username
FROM linode.account.events
WHERE eventId = '{{ eventId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns a collection of event objects that represent actions you've taken on your account, over the last 90 days. The events returned depend on your user grants.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
action,
created,
details,
duration,
entity,
message,
percent_complete,
rate,
secondary_entity,
seen,
status,
time_remaining,
username
FROM linode.account.events
WHERE X-Filter = '{{ X-Filter }}'
AND page = '{{ page }}'
AND page_size = '{{ page_size }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="mark_seen"
    values={[
        { label: 'mark_seen', value: 'mark_seen' }
    ]}
>
<TabItem value="mark_seen">

Acknowledge an event by marking it as seen.<br /><br />&gt; 📘<br />&gt;<br />&gt; On June 17, 2025, the "Mark an event as read" operation was sunset. Attempts to call it will return a 404. Use this operation instead.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.account.events.mark_seen 
@eventId='{{ eventId }}' --required
;
```
</TabItem>
</Tabs>
