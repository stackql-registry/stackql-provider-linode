#!/usr/bin/env python3
"""Post-generate patches for the generated provider docs (provider-dev/openapi).

Run after `make provider` (the Makefile wires this in). Two fixes, both
required for EXEC lifecycle methods to work with current stackql/any-sdk:

1. Integer path params -> string. any-sdk's EXEC parameter validation
   (providerTypeConditionIsValid) accepts "string"/"int"/"int32"/"int64"
   schema types but not OpenAPI's "integer", so EXEC methods addressed by an
   integer path param (e.g. `EXEC linode.linode.instances.shutdown
   @linodeId = '123'`) fail validation. Path params serialize into the URL
   identically either way. The DigitalOcean provider ships the same
   workaround.

2. Opaque action responses -> minimal object schema. Linode action ops
   (boot, shutdown, reboot, ...) declare their 200 body as an opaque
   `type: string` ("(opaque JSON object)" - the wire response is `{}`).
   stackql's EXEC planner requires a tabulatable object schema, and it also
   resolves every supplied @param name against that schema via FindByPath -
   a miss returns a wrapped nil that panics the engine (nil-interface bug in
   any-sdk's formulation wrappers). So each opaque response is rewritten to
   an object whose properties are the operation's parameter names plus a
   `message` column. These columns are always null on the wire (the API
   returns `{}`) - they exist purely to satisfy the engine.
"""
import glob
import yaml

param_count = 0
response_count = 0
file_count = 0

for path in sorted(glob.glob('provider-dev/openapi/src/linode/v*/services/*.yaml')):
    with open(path, encoding='utf-8') as f:
        doc = yaml.safe_load(f)

    file_changed = False

    def retype_param(param):
        global param_count
        schema = param.get('schema') if isinstance(param, dict) else None
        if (
            isinstance(param, dict)
            and param.get('in') == 'path'
            and isinstance(schema, dict)
            and schema.get('type') == 'integer'
        ):
            schema['type'] = 'string'
            param_count += 1
            return True
        return False

    def patch_opaque_response(resp, param_names):
        global response_count
        content = resp.get('content', {}).get('application/json', {}) if isinstance(resp, dict) else {}
        schema = content.get('schema')
        if (
            isinstance(schema, dict)
            and schema.get('type') == 'string'
            and 'opaque' in str(schema.get('description', ''))
        ):
            props = {
                name: {
                    'type': 'string',
                    'description': 'Echo of the request parameter (always null - the API returns an empty object).',
                }
                for name in param_names
            }
            props['message'] = {
                'type': 'string',
                'description': 'Always null - the API returns an empty object on success.',
            }
            schema.clear()
            schema['type'] = 'object'
            schema['properties'] = props
            response_count += 1
            return True
        return False

    for path_item in doc.get('paths', {}).values():
        shared_params = [p for p in path_item.get('parameters', []) if isinstance(p, dict)]
        for key, value in path_item.items():
            if key == 'parameters':
                for p in value:
                    file_changed |= retype_param(p)
            elif isinstance(value, dict):
                op_params = [p for p in value.get('parameters', []) if isinstance(p, dict)]
                for p in op_params:
                    file_changed |= retype_param(p)
                param_names = [
                    p.get('name') for p in shared_params + op_params
                    if p.get('in') in ('path', 'query') and p.get('name')
                ]
                for resp in value.get('responses', {}).values():
                    file_changed |= patch_opaque_response(resp, param_names)

    for p in doc.get('components', {}).get('parameters', {}).values():
        file_changed |= retype_param(p)

    if file_changed:
        with open(path, 'w', encoding='utf-8') as f:
            yaml.dump(doc, f, default_flow_style=False, sort_keys=False, allow_unicode=True)
        file_count += 1

print(f'retyped {param_count} integer path params, patched {response_count} opaque responses, {file_count} files changed')
