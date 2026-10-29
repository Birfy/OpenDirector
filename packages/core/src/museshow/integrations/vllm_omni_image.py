"""Self-hosted vLLM-Omni Z-Image-Turbo text-to-image through /v1/images/generations.

The model draws from the prompt alone, so reference documents are inlined as
text and reference images are not accepted. Images land on H3's 16:9 canvas so
a keyframe can become an H3 first frame without cropping.
"""

import asyncio
import base64
import json

import httpx

from museshow.domain.assets import MAX_ASSET_BYTES
from museshow.domain.projects import ProjectError
from museshow.integrations.http_settings import auth_headers, trust_environment
from museshow.integrations.generation_errors import protocol_failure, transport_failure
from museshow.integrations.reference_inputs import generation_references
from museshow.integrations.volcengine import bounded, endpoint

SIZE = '1344x768'


class VllmOmniImageGeneration:
    def __init__(self, store, transport=None, poll_interval=3):
        self.store, self.transport = store, transport

    def validate(self, kind, config):
        if kind != 'image':
            raise ProjectError('vLLM-Omni Z-Image-Turbo 只用于图片生成。', 409)

    def prepare_inputs(self, project_id, node, config, *, complete=True):
        prepared = generation_references(self.store, {**node, 'projectId': project_id}, config, complete=complete)
        return {'profile': prepared['rules']['profile'], 'references': prepared['manifest']}

    async def generate(self, config, task, submitted, *, result_ready=None):
        prepared = await asyncio.to_thread(generation_references, self.store, task, config)
        payload = {'model': config['modelId'], 'prompt': prepared['prompt'], 'size': SIZE,
                   'response_format': 'b64_json', 'output_format': 'png'}
        secrets = (config.get('apiKey', ''),)
        try:
            async with httpx.AsyncClient(transport=self.transport, trust_env=trust_environment(config['url'], config=config), timeout=httpx.Timeout(240, connect=15), follow_redirects=False) as client:
                async with client.stream('POST', endpoint(config['url'], '/images/generations'),
                                         headers=auth_headers(config), json=payload) as response:
                    value = json.loads(await bounded(response, stage='submit', secrets=secrets))
            data = base64.b64decode(value['data'][0]['b64_json'], validate=True)
        except httpx.TimeoutException:
            raise transport_failure('submit', timeout=True) from None
        except httpx.HTTPError:
            raise transport_failure('submit') from None
        except (ValueError, TypeError, KeyError, IndexError):
            raise protocol_failure('submit') from None
        if len(data) > MAX_ASSET_BYTES:
            raise ProjectError('生成图片超过 50 MB。', 413)
        if not data.startswith(b'\x89PNG\r\n\x1a\n'):
            raise protocol_failure('submit')
        return 'png', data

    async def resume_result(self, config, suffix, url):
        # Results arrive inline with the response; there is never a URL to resume.
        raise protocol_failure('download')

    async def cancel(self, config, external_id):
        # Requests are synchronous and never receive an external task ID.
        return None
