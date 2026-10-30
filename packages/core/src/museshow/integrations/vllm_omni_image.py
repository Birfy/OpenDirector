"""Self-hosted vLLM-Omni image models (Z-Image-Turbo, Qwen-Image-2.1) for canvas nodes.

Reference documents are inlined as text. Z-Image-Turbo draws from the prompt
alone; Qwen-Image-2.1 also takes connected images as condition images. Images
land on H3's 16:9 canvas so a keyframe can become an H3 first frame without
cropping. The model API itself is reached through the capability adapter.
"""

import asyncio
import base64

from museshow.domain.capabilities import ImageRequest
from museshow.domain.projects import ProjectError
from museshow.integrations.generation_errors import protocol_failure
from museshow.integrations.model_adapters import adapter_for
from museshow.integrations.reference_inputs import generation_references

WIDTH, HEIGHT = 1344, 768


class VllmOmniImageGeneration:
    def __init__(self, store, transport=None, poll_interval=3):
        self.store, self.transport = store, transport

    def validate(self, kind, config):
        if kind != 'image':
            raise ProjectError('vLLM-Omni 图片模型只用于图片生成。', 409)

    def prepare_inputs(self, project_id, node, config, *, complete=True):
        prepared = generation_references(self.store, {**node, 'projectId': project_id}, config, complete=complete)
        return {'profile': prepared['rules']['profile'], 'references': prepared['manifest']}

    async def generate(self, config, task, submitted, *, result_ready=None):
        prepared = await asyncio.to_thread(generation_references, self.store, task, config)
        references = tuple(base64.b64decode(uri.split(',', 1)[1]) for uri in prepared['images'])
        adapter = adapter_for(config, self.transport)
        result = await adapter.image(config, ImageRequest(prompt=prepared['prompt'], width=WIDTH, height=HEIGHT,
                                                          image=references[0] if references else None, references=references[1:]))
        if result.suffix != 'png':
            raise protocol_failure('submit')
        return 'png', result.data

    async def resume_result(self, config, suffix, url):
        # Results arrive inline with the response; there is never a URL to resume.
        raise protocol_failure('download')

    async def cancel(self, config, external_id):
        # Requests are synchronous and never receive an external task ID.
        return None
