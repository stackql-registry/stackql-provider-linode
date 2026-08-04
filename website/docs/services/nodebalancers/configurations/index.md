--- 
title: configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - configurations
  - nodebalancers
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

Creates, updates, deletes, gets or lists a <code>configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="linode.nodebalancers.configurations" /></td></tr>
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

The requested NodeBalancer config.

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
    <td>__Read-only__ This config's unique ID.</td>
</tr>
<tr>
    <td><CopyableCode code="nodebalancer_id" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ The ID for the NodeBalancer this config belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="algorithm" /></td>
    <td><code>string</code></td>
    <td>The algorithm this UDP NodeBalancer uses to route traffic to backends. (roundrobin, leastconn, ring_hash) (default: roundrobin, example: leastconn)</td>
</tr>
<tr>
    <td><CopyableCode code="check" /></td>
    <td><code>string</code></td>
    <td>The type of check to perform against backends to ensure they are serving requests. This determines if backends are up or down.  - If `none`, no check is performed. - `connection` requires only a connection to the backend to succeed. - `http` and `http_body` rely on the backend serving HTTP, and that the response returned matches what is expected. (none, connection, http, http_body) (default: none, example: http_body)</td>
</tr>
<tr>
    <td><CopyableCode code="check_attempts" /></td>
    <td><code>integer</code></td>
    <td>How many times to attempt a check before considering a backend to be down.</td>
</tr>
<tr>
    <td><CopyableCode code="check_body" /></td>
    <td><code>string</code></td>
    <td>This value must be present in the response body of the check in order for it to pass. If this value isn't present in the response body of a check request, the backend is considered to be down. (example: it works)</td>
</tr>
<tr>
    <td><CopyableCode code="check_interval" /></td>
    <td><code>integer</code></td>
    <td>How often, in seconds, to check that backends are up and serving requests.  Must be greater than `check_timeout`.</td>
</tr>
<tr>
    <td><CopyableCode code="check_passive" /></td>
    <td><code>boolean</code></td>
    <td>__Read-only__ Must be `false` for UDP.</td>
</tr>
<tr>
    <td><CopyableCode code="check_path" /></td>
    <td><code>string</code></td>
    <td>The URL path to check on each backend. If the backend does not respond to this request, it's considered to be down. (example: /test, pattern: <code>^&#91;a-zA-Z0-9\/\-%?&=.&#93;*$</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="check_timeout" /></td>
    <td><code>integer</code></td>
    <td>How long, in seconds, to wait for a check attempt before considering it failed.  Must be less than `check_interval`.</td>
</tr>
<tr>
    <td><CopyableCode code="cipher_suite" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ Not applicable for `udp` configs. (example: none)</td>
</tr>
<tr>
    <td><CopyableCode code="nodes_status" /></td>
    <td><code>object</code></td>
    <td>__Read-only__ Describes the health of the backends for this port. This data updates periodically as checks are performed against backends.</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>This is the port the NodeBalancer listens on for this configuration. Port numbers must be unique across TCP, HTTP, and HTTPS configurations on a single NodeBalancer. However, ports assigned to TCP, HTTP, or HTTPS configurations can also be reused for UDP configurations. For example, Port 80 can simultaneously serve a TCP and a UDP configuration on the same NodeBalancer, but it can't be shared by both a TCP and an HTTP configuration. Although certain ports are traditionally associated with specific protocols, this isn't strictly enforced, and you may configure your NodeBalancer however you find useful.</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol the port is configured to serve, `udp` in this case. Review our guide on [Available Protocols](https://www.linode.com/docs/products/networking/nodebalancers/guides/protocols/) for information on protocol features. (udp) (default: http, example: udp)</td>
</tr>
<tr>
    <td><CopyableCode code="proxy_protocol" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ Must be `none` for UDP. (example: none)</td>
</tr>
<tr>
    <td><CopyableCode code="ssl_cert" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ Not applicable for UDP configs.</td>
</tr>
<tr>
    <td><CopyableCode code="ssl_commonname" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ Not applicable for UPD configs. (example: )</td>
</tr>
<tr>
    <td><CopyableCode code="ssl_fingerprint" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ Not applicable for UDP configs. (example: )</td>
</tr>
<tr>
    <td><CopyableCode code="ssl_key" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ Not applicable for UDP configs.</td>
</tr>
<tr>
    <td><CopyableCode code="stickiness" /></td>
    <td><code>string</code></td>
    <td>Controls how session stickiness is handled on this port.  - If set to `none`, connections are assigned a backend server based on the algorithm configured. - If set to `session`, all packets with the same session identifiers are routed to the same backend server. Two packets are considered part of the same session if they share the same source and destination IP addresses or ports, and are received within a short time window. - If set to `source_ip`, the NodeBalancer uses the client's source IP address to route all packets from the same client to the same backend server. (none, session, source_ip) (default: session, example: none)</td>
</tr>
<tr>
    <td><CopyableCode code="udp_check_port" /></td>
    <td><code>integer</code></td>
    <td>UDP NodeBalancers use TCP and HTTP active health checks to ensure back-end nodes can receive traffic. You can specify the health check port that the backend node listens on, which may differ from the UDP port used to serve traffic.</td>
</tr>
<tr>
    <td><CopyableCode code="udp_session_timeout" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ The maximum duration in seconds, a UDP session can be idle before it is closed.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated list of NodeBalancer Configs.

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
    <td>__Read-only__ This config's unique ID.</td>
</tr>
<tr>
    <td><CopyableCode code="nodebalancer_id" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ The ID for the NodeBalancer this config belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="algorithm" /></td>
    <td><code>string</code></td>
    <td>The algorithm this UDP NodeBalancer uses to route traffic to backends. (roundrobin, leastconn, ring_hash) (default: roundrobin, example: leastconn)</td>
</tr>
<tr>
    <td><CopyableCode code="check" /></td>
    <td><code>string</code></td>
    <td>The type of check to perform against backends to ensure they are serving requests. This determines if backends are up or down.  - If `none`, no check is performed. - `connection` requires only a connection to the backend to succeed. - `http` and `http_body` rely on the backend serving HTTP, and that the response returned matches what is expected. (none, connection, http, http_body) (default: none, example: http_body)</td>
</tr>
<tr>
    <td><CopyableCode code="check_attempts" /></td>
    <td><code>integer</code></td>
    <td>How many times to attempt a check before considering a backend to be down.</td>
</tr>
<tr>
    <td><CopyableCode code="check_body" /></td>
    <td><code>string</code></td>
    <td>This value must be present in the response body of the check in order for it to pass. If this value isn't present in the response body of a check request, the backend is considered to be down. (example: it works)</td>
</tr>
<tr>
    <td><CopyableCode code="check_interval" /></td>
    <td><code>integer</code></td>
    <td>How often, in seconds, to check that backends are up and serving requests.  Must be greater than `check_timeout`.</td>
</tr>
<tr>
    <td><CopyableCode code="check_passive" /></td>
    <td><code>boolean</code></td>
    <td>__Read-only__ Must be `false` for UDP.</td>
</tr>
<tr>
    <td><CopyableCode code="check_path" /></td>
    <td><code>string</code></td>
    <td>The URL path to check on each backend. If the backend does not respond to this request, it's considered to be down. (example: /test, pattern: <code>^&#91;a-zA-Z0-9\/\-%?&=.&#93;*$</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="check_timeout" /></td>
    <td><code>integer</code></td>
    <td>How long, in seconds, to wait for a check attempt before considering it failed.  Must be less than `check_interval`.</td>
</tr>
<tr>
    <td><CopyableCode code="cipher_suite" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ Not applicable for `udp` configs. (example: none)</td>
</tr>
<tr>
    <td><CopyableCode code="nodes_status" /></td>
    <td><code>object</code></td>
    <td>__Read-only__ Describes the health of the backends for this port. This data updates periodically as checks are performed against backends.</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>This is the port the NodeBalancer listens on for this configuration. Port numbers must be unique across TCP, HTTP, and HTTPS configurations on a single NodeBalancer. However, ports assigned to TCP, HTTP, or HTTPS configurations can also be reused for UDP configurations. For example, Port 80 can simultaneously serve a TCP and a UDP configuration on the same NodeBalancer, but it can't be shared by both a TCP and an HTTP configuration. Although certain ports are traditionally associated with specific protocols, this isn't strictly enforced, and you may configure your NodeBalancer however you find useful.</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol the port is configured to serve, `udp` in this case. Review our guide on [Available Protocols](https://www.linode.com/docs/products/networking/nodebalancers/guides/protocols/) for information on protocol features. (udp) (default: http, example: udp)</td>
</tr>
<tr>
    <td><CopyableCode code="proxy_protocol" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ Must be `none` for UDP. (example: none)</td>
</tr>
<tr>
    <td><CopyableCode code="ssl_cert" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ Not applicable for UDP configs.</td>
</tr>
<tr>
    <td><CopyableCode code="ssl_commonname" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ Not applicable for UPD configs. (example: )</td>
</tr>
<tr>
    <td><CopyableCode code="ssl_fingerprint" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ Not applicable for UDP configs. (example: )</td>
</tr>
<tr>
    <td><CopyableCode code="ssl_key" /></td>
    <td><code>string</code></td>
    <td>__Read-only__ Not applicable for UDP configs.</td>
</tr>
<tr>
    <td><CopyableCode code="stickiness" /></td>
    <td><code>string</code></td>
    <td>Controls how session stickiness is handled on this port.  - If set to `none`, connections are assigned a backend server based on the algorithm configured. - If set to `session`, all packets with the same session identifiers are routed to the same backend server. Two packets are considered part of the same session if they share the same source and destination IP addresses or ports, and are received within a short time window. - If set to `source_ip`, the NodeBalancer uses the client's source IP address to route all packets from the same client to the same backend server. (none, session, source_ip) (default: session, example: none)</td>
</tr>
<tr>
    <td><CopyableCode code="udp_check_port" /></td>
    <td><code>integer</code></td>
    <td>UDP NodeBalancers use TCP and HTTP active health checks to ensure back-end nodes can receive traffic. You can specify the health check port that the backend node listens on, which may differ from the UDP port used to serve traffic.</td>
</tr>
<tr>
    <td><CopyableCode code="udp_session_timeout" /></td>
    <td><code>integer</code></td>
    <td>__Read-only__ The maximum duration in seconds, a UDP session can be idle before it is closed.</td>
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
    <td><a href="#parameter-nodeBalancerId"><code>nodeBalancerId</code></a>, <a href="#parameter-configId"><code>configId</code></a></td>
    <td></td>
    <td>Returns configuration information for a single port of this NodeBalancer.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-nodeBalancerId"><code>nodeBalancerId</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Returns a paginated list of NodeBalancer Configs associated with this NodeBalancer. NodeBalancer Configs represent individual ports that this NodeBalancer will accept traffic on, one Config per port.<br /><br />For example, if you wanted to accept standard HTTP traffic, you would need a Config listening on port 80.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-nodeBalancerId"><code>nodeBalancerId</code></a>, <a href="#parameter-nodes"><code>nodes</code></a></td>
    <td></td>
    <td>Creates a NodeBalancer configuration, which allows the NodeBalancer to accept traffic on a new port. You will need to add NodeBalancer nodes to the new configuration before it can actually serve requests.<br /><br />&gt; 🚧<br />&gt;<br />&gt; You can configure UDP on the same NodeBalancer that also uses TCP, HTTP, or HTTPS, but only when managing it through the API. If UDP is configured and you make changes to the TCP, HTTP or HTTPS settings in Cloud Manager, the existing UDP configuration will be overwritten. This is because Cloud Manager doesn't currently support UDP. __CLI: HTTPS__.<br /><br />    ```<br />    linode-cli nodebalancers config-create 12345 \<br />  --port 443 \<br />  --protocol https \<br />  --algorithm roundrobin \<br />  --stickiness http_cookie \<br />  --check http_body \<br />  --check_interval 90 \<br />  --check_timeout 10 \<br />  --check_attempts 3 \<br />  --check_path "/test" \<br />  --check_body "it works" \<br />  --check_passive true \<br />  --proxy_protocol "none" \<br />  --ssl_cert "-----BEGIN CERTIFICATE-----<br />              CERTIFICATE_INFORMATION<br />              -----END CERTIFICATE-----" \<br />  --ssl_key "-----BEGIN PRIVATE KEY-----<br />             PRIVATE_KEY_INFORMATION<br />             -----END PRIVATE KEY-----" \<br />  --cipher_suite recommended<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />- __CLI: UDP__.<br /><br />    ```<br />    linode-cli nodebalancers config-create 12345 \<br />  --port 80 \<br />  --protocol udp \<br />  --algorithm ring_hash \<br />  --stickiness session \<br />  --check http_body \<br />  --check_interval 90 \<br />  --check_timeout 10 \<br />  --check_attempts 3 \<br />  --check_path "/test" \<br />  --check_body "it works" \<br />  --udp_check_port 80<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />- __CLI: TCP__.<br /><br />    ```<br />    linode-cli nodebalancers config-create 12345 \<br />  --port 80 \<br />  --protocol tcp \<br />  --algorithm roundrobin \<br />  --stickiness none \<br />  --check http_body \<br />  --check_interval 90 \<br />  --check_timeout 10 \<br />  --check_attempts 3 \<br />  --check_path "/test" \<br />  --check_body "it works" \<br />  --proxy_protocol "v2"<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />- __CLI: HTTP__.<br /><br />    ```<br />    linode-cli nodebalancers config-create 12345 \<br />  --port 440 \<br />  --protocol http \<br />  --algorithm roundrobin \<br />  --stickiness http_cookie \<br />  --check http_body \<br />  --check_interval 90 \<br />  --check_timeout 10 \<br />  --check_attempts 3 \<br />  --check_path "/test" \<br />  --check_body "it works"<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-nodeBalancerId"><code>nodeBalancerId</code></a>, <a href="#parameter-configId"><code>configId</code></a></td>
    <td></td>
    <td>Updates the configuration for a single port on a NodeBalancer.<br /><br />&gt; 🚧<br />&gt;<br />&gt; You can configure UDP on the same NodeBalancer that also uses TCP, HTTP, or HTTPS, but only when managing it through the API. If UDP is configured and you make changes to the TCP, HTTP or HTTPS settings in Cloud Manager, the existing UDP configuration will be overwritten. This is because Cloud Manager doesn't currently support UDP. __CLI: HTTPS__.<br /><br />    ```<br />    linode-cli nodebalancers config-update \<br />  12345 4567 \<br />  --port 443 \<br />  --protocol https \<br />  --algorithm roundrobin \<br />  --stickiness http_cookie \<br />  --check http_body \<br />  --check_interval 90 \<br />  --check_timeout 10 \<br />  --check_attempts 3 \<br />  --check_path "/test" \<br />  --check_body "it works" \<br />  --check_passive true \<br />  --proxy_protocol "none" \<br />  --ssl_cert "-----BEGIN CERTIFICATE-----<br />              CERTIFICATE_INFORMATION<br />              -----END CERTIFICATE-----" \<br />  --ssl_key "-----BEGIN PRIVATE KEY-----<br />             PRIVATE_KEY_INFORMATION<br />             -----END PRIVATE KEY-----" \<br />  --cipher_suite recommended<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />- __CLI: UDP__.<br /><br />    ```<br />    linode-cli nodebalancers config-update \<br />  12345 4567 \<br />  --port 80 \<br />  --protocol udp \<br />  --algorithm ring_hash \<br />  --stickiness session \<br />  --check http_body \<br />  --check_interval 90 \<br />  --check_timeout 10 \<br />  --check_attempts 3 \<br />  --check_path "/test" \<br />  --check_body "it works" \<br />  --udp_check_port 80<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />- __CLI: TCP__.<br /><br />    ```<br />    linode-cli nodebalancers config-update \<br />  12345 4567 \<br />  --port 80 \<br />  --protocol tcp \<br />  --algorithm roundrobin \<br />  --stickiness none \<br />  --stickiness http_cookie \<br />  --check http_body \<br />  --check_interval 90 \<br />  --check_timeout 10 \<br />  --check_attempts 3 \<br />  --check_path "/test" \<br />  --check_body "it works" \<br />  --proxy_protocol "v2"<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />- __CLI: HTTP__.<br /><br />    ```<br />    linode-cli nodebalancers config-update \<br />  12345 4567 \<br />  --port 440 \<br />  --protocol http \<br />  --algorithm roundrobin \<br />  --stickiness http_cookie \<br />  --check http_body \<br />  --check_interval 90 \<br />  --check_timeout 10 \<br />  --check_attempts 3 \<br />  --check_path "/test" \<br />  --check_body "it works"<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-nodeBalancerId"><code>nodeBalancerId</code></a>, <a href="#parameter-configId"><code>configId</code></a></td>
    <td></td>
    <td>Deletes the Config for a port of this NodeBalancer.<br /><br />__This cannot be undone.__<br /><br />Once completed, this NodeBalancer will no longer respond to requests on the given port. This also deletes all associated NodeBalancerNodes, but the Linodes they were routing traffic to will be unchanged and will not be removed.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
</tr>
<tr>
    <td><a href="#rebuild"><CopyableCode code="rebuild" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-nodeBalancerId"><code>nodeBalancerId</code></a>, <a href="#parameter-configId"><code>configId</code></a>, <a href="#parameter-nodes"><code>nodes</code></a></td>
    <td></td>
    <td>Rebuilds a NodeBalancer config and its nodes that you have permission to modify.<br /><br />Use this operation to update a NodeBalancer's config and nodes with a single request.<br /><br />&gt; 🚧<br />&gt;<br />&gt; You can configure UDP on the same NodeBalancer that also uses TCP, HTTP, or HTTPS, but only when managing it through the API. If UDP is configured and you make changes to the TCP, HTTP or HTTPS settings in Cloud Manager, the existing UDP configuration will be overwritten. This is because Cloud Manager doesn't currently support UDP. __CLI: HTTPS__.<br /><br />    ```<br />    linode-cli nodebalancers config-rebuild \<br />  12345 4567 \<br />  --port 443 \<br />  --protocol https \<br />  --algorithm roundrobin \<br />  --stickiness http_cookie \<br />  --check http_body \<br />  --check_interval 90 \<br />  --check_timeout 10 \<br />  --check_attempts 3 \<br />  --check_path "/test" \<br />  --check_body "it works" \<br />  --check_passive true \<br />  --proxy_protocol "none" \<br />  --ssl_cert "-----BEGIN CERTIFICATE-----<br />              CERTIFICATE_INFORMATION<br />              -----END CERTIFICATE-----" \<br />  --ssl_key "-----BEGIN PRIVATE KEY-----<br />             PRIVATE_KEY_INFORMATION<br />             -----END PRIVATE KEY-----" \<br />  --cipher_suite recommended \<br />  --nodes.label "node1" --nodes.address "192.168.210.120:80" --nodes.mode "accept" --nodes.weight 50 \<br />  --nodes '[&#123;"address":"192.168.210.122:80","label":"node2","weight":50,"mode":"accept"&#125;]' \<br />  --nodes '[&#123;"address":"10.0.0.45:80","label":"vpc-node","weight":10,"mode":"accept","subnet_id:1"&#125;]'<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />- __CLI: UDP__.<br /><br />    ```<br />    linode-cli nodebalancers config-rebuild \<br />   12345 4567 \<br />   --port 80 \<br />   --protocol udp \<br />   --algorithm ring_hash \<br />   --udp_check_port 80 \<br />   --nodes.label "node1" --nodes.address "192.168.210.120:80" --nodes.mode "accept" --nodes.weight 50 \<br />   --nodes '[&#123;"address":"192.168.210.122:80","label":"node2","weight":50&#125;]' \<br />   --nodes '[&#123;"address":"10.0.0.45:80","label":"vpc-node","weight":10,"mode":"accept","subnet_id:1"&#125;]'<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />- __CLI: TCP__.<br /><br />    ```<br />    linode-cli nodebalancers config-rebuild \<br />  12345 4567 \<br />  --port 80 \<br />  --protocol tcp \<br />  --algorithm roundrobin \<br />  --stickiness none \<br />  --proxy_protocol "v2"<br />  --nodes.label "node1" --nodes.address "192.168.210.120:80" --nodes.mode "accept" --nodes.weight 50 \<br />  --nodes '[&#123;"address":"192.168.210.122:80","label":"node2","weight":50,"mode":"accept"&#125;]' \<br />  --nodes '[&#123;"address":"10.0.0.45:80","label":"vpc-node","weight":10,"mode":"accept","subnet_id:1"&#125;]'<br />    ```<br /><br />[Learn more...](https://www.linode.com/docs/products/tools/cli/get-started/)<br /><br />- __CLI: HTTP__.<br /><br />    ```<br />    linode-cli nodebalancers config-rebuild \<br />  12345 4567 \<br />  --port 440 \<br />  --protocol http \<br />  --algorithm roundrobin \<br />  --stickiness none \<br />  --check http_body \<br />  --check_interval 90 \<br />  --check_timeout 10 \<br />  --check_attempts 3 \<br />  --check_path "/test" \<br />  --check_body "it works" \<br />  --nodes.label "node1" --nodes.address "192.168.210.120:80" --nodes.mode "accept" --nodes.weight 50 \<br />  --nodes '[&#123;"address":"192.168.210.122:80","label":"node2","weight":50,"mode":"accept"&#125;]' \<br />  --nodes '[&#123;"address":"10.0.0.45:80","label":"vpc-node","weight":10,"mode":"accept","subnet_id:1"&#125;]'<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)</td>
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
<tr id="parameter-configId">
    <td><CopyableCode code="configId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Config to access.</td>
</tr>
<tr id="parameter-nodeBalancerId">
    <td><CopyableCode code="nodeBalancerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the NodeBalancer. (example: &#123;&#123;nodeBalancerId&#125;&#125;)</td>
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

Returns configuration information for a single port of this NodeBalancer.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
nodebalancer_id,
algorithm,
check,
check_attempts,
check_body,
check_interval,
check_passive,
check_path,
check_timeout,
cipher_suite,
nodes_status,
port,
protocol,
proxy_protocol,
ssl_cert,
ssl_commonname,
ssl_fingerprint,
ssl_key,
stickiness,
udp_check_port,
udp_session_timeout
FROM linode.nodebalancers.configurations
WHERE nodeBalancerId = '{{ nodeBalancerId }}' -- required
AND configId = '{{ configId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns a paginated list of NodeBalancer Configs associated with this NodeBalancer. NodeBalancer Configs represent individual ports that this NodeBalancer will accept traffic on, one Config per port.<br /><br />For example, if you wanted to accept standard HTTP traffic, you would need a Config listening on port 80.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
SELECT
id,
nodebalancer_id,
algorithm,
check,
check_attempts,
check_body,
check_interval,
check_passive,
check_path,
check_timeout,
cipher_suite,
nodes_status,
port,
protocol,
proxy_protocol,
ssl_cert,
ssl_commonname,
ssl_fingerprint,
ssl_key,
stickiness,
udp_check_port,
udp_session_timeout
FROM linode.nodebalancers.configurations
WHERE nodeBalancerId = '{{ nodeBalancerId }}' -- required
AND page = '{{ page }}'
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

Creates a NodeBalancer configuration, which allows the NodeBalancer to accept traffic on a new port. You will need to add NodeBalancer nodes to the new configuration before it can actually serve requests.<br /><br />&gt; 🚧<br />&gt;<br />&gt; You can configure UDP on the same NodeBalancer that also uses TCP, HTTP, or HTTPS, but only when managing it through the API. If UDP is configured and you make changes to the TCP, HTTP or HTTPS settings in Cloud Manager, the existing UDP configuration will be overwritten. This is because Cloud Manager doesn't currently support UDP. __CLI: HTTPS__.<br /><br />    ```<br />    linode-cli nodebalancers config-create 12345 \<br />  --port 443 \<br />  --protocol https \<br />  --algorithm roundrobin \<br />  --stickiness http_cookie \<br />  --check http_body \<br />  --check_interval 90 \<br />  --check_timeout 10 \<br />  --check_attempts 3 \<br />  --check_path "/test" \<br />  --check_body "it works" \<br />  --check_passive true \<br />  --proxy_protocol "none" \<br />  --ssl_cert "-----BEGIN CERTIFICATE-----<br />              CERTIFICATE_INFORMATION<br />              -----END CERTIFICATE-----" \<br />  --ssl_key "-----BEGIN PRIVATE KEY-----<br />             PRIVATE_KEY_INFORMATION<br />             -----END PRIVATE KEY-----" \<br />  --cipher_suite recommended<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />- __CLI: UDP__.<br /><br />    ```<br />    linode-cli nodebalancers config-create 12345 \<br />  --port 80 \<br />  --protocol udp \<br />  --algorithm ring_hash \<br />  --stickiness session \<br />  --check http_body \<br />  --check_interval 90 \<br />  --check_timeout 10 \<br />  --check_attempts 3 \<br />  --check_path "/test" \<br />  --check_body "it works" \<br />  --udp_check_port 80<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />- __CLI: TCP__.<br /><br />    ```<br />    linode-cli nodebalancers config-create 12345 \<br />  --port 80 \<br />  --protocol tcp \<br />  --algorithm roundrobin \<br />  --stickiness none \<br />  --check http_body \<br />  --check_interval 90 \<br />  --check_timeout 10 \<br />  --check_attempts 3 \<br />  --check_path "/test" \<br />  --check_body "it works" \<br />  --proxy_protocol "v2"<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />- __CLI: HTTP__.<br /><br />    ```<br />    linode-cli nodebalancers config-create 12345 \<br />  --port 440 \<br />  --protocol http \<br />  --algorithm roundrobin \<br />  --stickiness http_cookie \<br />  --check http_body \<br />  --check_interval 90 \<br />  --check_timeout 10 \<br />  --check_attempts 3 \<br />  --check_path "/test" \<br />  --check_body "it works"<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
INSERT INTO linode.nodebalancers.configurations (
algorithm,
check,
check_attempts,
check_body,
check_interval,
check_path,
check_timeout,
nodes,
port,
protocol,
stickiness,
udp_check_port,
nodeBalancerId
)
SELECT 
'{{ algorithm }}',
'{{ check }}',
{{ check_attempts }},
'{{ check_body }}',
{{ check_interval }},
'{{ check_path }}',
{{ check_timeout }},
'{{ nodes }}' /* required */,
{{ port }},
'{{ protocol }}',
'{{ stickiness }}',
{{ udp_check_port }},
'{{ nodeBalancerId }}'
RETURNING
id,
nodebalancer_id,
algorithm,
check,
check_attempts,
check_body,
check_interval,
check_passive,
check_path,
check_timeout,
cipher_suite,
nodes_status,
port,
protocol,
proxy_protocol,
ssl_cert,
ssl_commonname,
ssl_fingerprint,
ssl_key,
stickiness,
udp_check_port,
udp_session_timeout
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: configurations
  props:
    - name: nodeBalancerId
      value: "{{ nodeBalancerId }}"
      description: Required parameter for the configurations resource.
    - name: algorithm
      value: "{{ algorithm }}"
      description: |
        The algorithm this UDP NodeBalancer uses to route traffic to backends.
      valid_values: ['roundrobin', 'leastconn', 'ring_hash']
      default: roundrobin
    - name: check
      value: "{{ check }}"
      description: |
        The type of check to perform against backends to ensure they are serving requests. This determines if backends are up or down.
        - If \`none\`, no check is performed.
        - \`connection\` requires only a connection to the backend to succeed.
        - \`http\` and \`http_body\` rely on the backend serving HTTP, and that the response returned matches what is expected.
      valid_values: ['none', 'connection', 'http', 'http_body']
      default: none
    - name: check_attempts
      value: {{ check_attempts }}
      description: |
        How many times to attempt a check before considering a backend to be down.
      default: 3
    - name: check_body
      value: "{{ check_body }}"
      description: |
        This value must be present in the response body of the check in order for it to pass. If this value isn't present in the response body of a check request, the backend is considered to be down.
    - name: check_interval
      value: {{ check_interval }}
      description: |
        How often, in seconds, to check that backends are up and serving requests.
        Must be greater than \`check_timeout\`.
      default: 5
    - name: check_path
      value: "{{ check_path }}"
      description: |
        The URL path to check on each backend. If the backend does not respond to this request, it's considered to be down.
    - name: check_timeout
      value: {{ check_timeout }}
      description: |
        How long, in seconds, to wait for a check attempt before considering it failed.
        Must be less than \`check_interval\`.
      default: 30
    - name: nodes
      description: |
        The NodeBalancer nodes that serve this configuration.
      value:
        - address: "{{ address }}"
          config_id: {{ config_id }}
          id: {{ id }}
          label: "{{ label }}"
          mode: "{{ mode }}"
          nodebalancer_id: {{ nodebalancer_id }}
          status: "{{ status }}"
          subnet_id: {{ subnet_id }}
          weight: {{ weight }}
    - name: port
      value: {{ port }}
      description: |
        This is the port the NodeBalancer listens on for this configuration. Port numbers must be unique across TCP, HTTP, and HTTPS configurations on a single NodeBalancer. However, ports assigned to TCP, HTTP, or HTTPS configurations can also be reused for UDP configurations. For example, Port 80 can simultaneously serve a TCP and a UDP configuration on the same NodeBalancer, but it can't be shared by both a TCP and an HTTP configuration. Although certain ports are traditionally associated with specific protocols, this isn't strictly enforced, and you may configure your NodeBalancer however you find useful.
      default: 80
    - name: protocol
      value: "{{ protocol }}"
      description: |
        The protocol the port is configured to serve, \`udp\` in this case. Review our guide on [Available Protocols](https://www.linode.com/docs/products/networking/nodebalancers/guides/protocols/) for information on protocol features.
      valid_values: ['udp']
      default: http
    - name: stickiness
      value: "{{ stickiness }}"
      description: |
        Controls how session stickiness is handled on this port.
        - If set to \`none\`, connections are assigned a backend server based on the algorithm configured.
        - If set to \`session\`, all packets with the same session identifiers are routed to the same backend server. Two packets are considered part of the same session if they share the same source and destination IP addresses or ports, and are received within a short time window.
        - If set to \`source_ip\`, the NodeBalancer uses the client's source IP address to route all packets from the same client to the same backend server.
      valid_values: ['none', 'session', 'source_ip']
      default: session
    - name: udp_check_port
      value: {{ udp_check_port }}
      description: |
        UDP NodeBalancers use TCP and HTTP active health checks to ensure back-end nodes can receive traffic. You can specify the health check port that the backend node listens on, which may differ from the UDP port used to serve traffic.
      default: 80
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

Updates the configuration for a single port on a NodeBalancer.<br /><br />&gt; 🚧<br />&gt;<br />&gt; You can configure UDP on the same NodeBalancer that also uses TCP, HTTP, or HTTPS, but only when managing it through the API. If UDP is configured and you make changes to the TCP, HTTP or HTTPS settings in Cloud Manager, the existing UDP configuration will be overwritten. This is because Cloud Manager doesn't currently support UDP. __CLI: HTTPS__.<br /><br />    ```<br />    linode-cli nodebalancers config-update \<br />  12345 4567 \<br />  --port 443 \<br />  --protocol https \<br />  --algorithm roundrobin \<br />  --stickiness http_cookie \<br />  --check http_body \<br />  --check_interval 90 \<br />  --check_timeout 10 \<br />  --check_attempts 3 \<br />  --check_path "/test" \<br />  --check_body "it works" \<br />  --check_passive true \<br />  --proxy_protocol "none" \<br />  --ssl_cert "-----BEGIN CERTIFICATE-----<br />              CERTIFICATE_INFORMATION<br />              -----END CERTIFICATE-----" \<br />  --ssl_key "-----BEGIN PRIVATE KEY-----<br />             PRIVATE_KEY_INFORMATION<br />             -----END PRIVATE KEY-----" \<br />  --cipher_suite recommended<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />- __CLI: UDP__.<br /><br />    ```<br />    linode-cli nodebalancers config-update \<br />  12345 4567 \<br />  --port 80 \<br />  --protocol udp \<br />  --algorithm ring_hash \<br />  --stickiness session \<br />  --check http_body \<br />  --check_interval 90 \<br />  --check_timeout 10 \<br />  --check_attempts 3 \<br />  --check_path "/test" \<br />  --check_body "it works" \<br />  --udp_check_port 80<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />- __CLI: TCP__.<br /><br />    ```<br />    linode-cli nodebalancers config-update \<br />  12345 4567 \<br />  --port 80 \<br />  --protocol tcp \<br />  --algorithm roundrobin \<br />  --stickiness none \<br />  --stickiness http_cookie \<br />  --check http_body \<br />  --check_interval 90 \<br />  --check_timeout 10 \<br />  --check_attempts 3 \<br />  --check_path "/test" \<br />  --check_body "it works" \<br />  --proxy_protocol "v2"<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />- __CLI: HTTP__.<br /><br />    ```<br />    linode-cli nodebalancers config-update \<br />  12345 4567 \<br />  --port 440 \<br />  --protocol http \<br />  --algorithm roundrobin \<br />  --stickiness http_cookie \<br />  --check http_body \<br />  --check_interval 90 \<br />  --check_timeout 10 \<br />  --check_attempts 3 \<br />  --check_path "/test" \<br />  --check_body "it works"<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
REPLACE linode.nodebalancers.configurations
SET 
algorithm = '{{ algorithm }}',
check = '{{ check }}',
check_attempts = {{ check_attempts }},
check_body = '{{ check_body }}',
check_interval = {{ check_interval }},
check_path = '{{ check_path }}',
check_timeout = {{ check_timeout }},
port = {{ port }},
protocol = '{{ protocol }}',
stickiness = '{{ stickiness }}',
udp_check_port = {{ udp_check_port }}
WHERE 
nodeBalancerId = '{{ nodeBalancerId }}' --required
AND configId = '{{ configId }}' --required
RETURNING
id,
nodebalancer_id,
algorithm,
check,
check_attempts,
check_body,
check_interval,
check_passive,
check_path,
check_timeout,
cipher_suite,
nodes_status,
port,
protocol,
proxy_protocol,
ssl_cert,
ssl_commonname,
ssl_fingerprint,
ssl_key,
stickiness,
udp_check_port,
udp_session_timeout;
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

Deletes the Config for a port of this NodeBalancer.<br /><br />__This cannot be undone.__<br /><br />Once completed, this NodeBalancer will no longer respond to requests on the given port. This also deletes all associated NodeBalancerNodes, but the Linodes they were routing traffic to will be unchanged and will not be removed.<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
DELETE FROM linode.nodebalancers.configurations
WHERE nodeBalancerId = '{{ nodeBalancerId }}' --required
AND configId = '{{ configId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="rebuild"
    values={[
        { label: 'rebuild', value: 'rebuild' }
    ]}
>
<TabItem value="rebuild">

Rebuilds a NodeBalancer config and its nodes that you have permission to modify.<br /><br />Use this operation to update a NodeBalancer's config and nodes with a single request.<br /><br />&gt; 🚧<br />&gt;<br />&gt; You can configure UDP on the same NodeBalancer that also uses TCP, HTTP, or HTTPS, but only when managing it through the API. If UDP is configured and you make changes to the TCP, HTTP or HTTPS settings in Cloud Manager, the existing UDP configuration will be overwritten. This is because Cloud Manager doesn't currently support UDP. __CLI: HTTPS__.<br /><br />    ```<br />    linode-cli nodebalancers config-rebuild \<br />  12345 4567 \<br />  --port 443 \<br />  --protocol https \<br />  --algorithm roundrobin \<br />  --stickiness http_cookie \<br />  --check http_body \<br />  --check_interval 90 \<br />  --check_timeout 10 \<br />  --check_attempts 3 \<br />  --check_path "/test" \<br />  --check_body "it works" \<br />  --check_passive true \<br />  --proxy_protocol "none" \<br />  --ssl_cert "-----BEGIN CERTIFICATE-----<br />              CERTIFICATE_INFORMATION<br />              -----END CERTIFICATE-----" \<br />  --ssl_key "-----BEGIN PRIVATE KEY-----<br />             PRIVATE_KEY_INFORMATION<br />             -----END PRIVATE KEY-----" \<br />  --cipher_suite recommended \<br />  --nodes.label "node1" --nodes.address "192.168.210.120:80" --nodes.mode "accept" --nodes.weight 50 \<br />  --nodes '[&#123;"address":"192.168.210.122:80","label":"node2","weight":50,"mode":"accept"&#125;]' \<br />  --nodes '[&#123;"address":"10.0.0.45:80","label":"vpc-node","weight":10,"mode":"accept","subnet_id:1"&#125;]'<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />- __CLI: UDP__.<br /><br />    ```<br />    linode-cli nodebalancers config-rebuild \<br />   12345 4567 \<br />   --port 80 \<br />   --protocol udp \<br />   --algorithm ring_hash \<br />   --udp_check_port 80 \<br />   --nodes.label "node1" --nodes.address "192.168.210.120:80" --nodes.mode "accept" --nodes.weight 50 \<br />   --nodes '[&#123;"address":"192.168.210.122:80","label":"node2","weight":50&#125;]' \<br />   --nodes '[&#123;"address":"10.0.0.45:80","label":"vpc-node","weight":10,"mode":"accept","subnet_id:1"&#125;]'<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />- __CLI: TCP__.<br /><br />    ```<br />    linode-cli nodebalancers config-rebuild \<br />  12345 4567 \<br />  --port 80 \<br />  --protocol tcp \<br />  --algorithm roundrobin \<br />  --stickiness none \<br />  --proxy_protocol "v2"<br />  --nodes.label "node1" --nodes.address "192.168.210.120:80" --nodes.mode "accept" --nodes.weight 50 \<br />  --nodes '[&#123;"address":"192.168.210.122:80","label":"node2","weight":50,"mode":"accept"&#125;]' \<br />  --nodes '[&#123;"address":"10.0.0.45:80","label":"vpc-node","weight":10,"mode":"accept","subnet_id:1"&#125;]'<br />    ```<br /><br />[Learn more...](https://www.linode.com/docs/products/tools/cli/get-started/)<br /><br />- __CLI: HTTP__.<br /><br />    ```<br />    linode-cli nodebalancers config-rebuild \<br />  12345 4567 \<br />  --port 440 \<br />  --protocol http \<br />  --algorithm roundrobin \<br />  --stickiness none \<br />  --check http_body \<br />  --check_interval 90 \<br />  --check_timeout 10 \<br />  --check_attempts 3 \<br />  --check_path "/test" \<br />  --check_body "it works" \<br />  --nodes.label "node1" --nodes.address "192.168.210.120:80" --nodes.mode "accept" --nodes.weight 50 \<br />  --nodes '[&#123;"address":"192.168.210.122:80","label":"node2","weight":50,"mode":"accept"&#125;]' \<br />  --nodes '[&#123;"address":"10.0.0.45:80","label":"vpc-node","weight":10,"mode":"accept","subnet_id:1"&#125;]'<br />    ```<br /><br />[Learn more...](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-the-linode-cli)<br /><br />[Learn more...](https://techdocs.akamai.com/linode-api/reference/get-started#oauth)

```sql
EXEC linode.nodebalancers.configurations.rebuild 
@nodeBalancerId='{{ nodeBalancerId }}' --required, 
@configId='{{ configId }}' --required 
@@json=
'{
"algorithm": "{{ algorithm }}", 
"check": "{{ check }}", 
"check_attempts": {{ check_attempts }}, 
"check_body": "{{ check_body }}", 
"check_interval": {{ check_interval }}, 
"check_path": "{{ check_path }}", 
"check_timeout": {{ check_timeout }}, 
"nodes": "{{ nodes }}", 
"port": {{ port }}, 
"protocol": "{{ protocol }}", 
"stickiness": "{{ stickiness }}", 
"udp_check_port": {{ udp_check_port }}
}'
;
```
</TabItem>
</Tabs>
