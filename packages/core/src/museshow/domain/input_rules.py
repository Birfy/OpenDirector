"""Explicit adapter profiles, not model-name guesses or online capability probes."""
from urllib.parse import urlsplit
from typing import Literal

MAX_REFERENCES = 64  # Storage/structure guard; provider budgets are checked separately.
VideoMode = Literal['first_frame', 'reference', 'continuation']


def input_rules(config):
    url = urlsplit(config['url'])
    host, path = url.hostname, url.path.rstrip('/')
    kind, model = config['kind'], config['modelId']
    rules = {'profile': 'compatible', 'allowedKinds': ['text', 'image'], 'maxImages': 8,
             'maxAudios': 0, 'imageBytes': 8 * 1024 * 1024, 'requestBytes': 48 * 1024 * 1024,
             'videoModes': ['first_frame'] if kind == 'video' else []}
    rules.update(maxVideos=0, videoBytes=50 * 1024 * 1024)
    if kind == 'video' and model.rsplit('/', 1)[-1].lower() == 'minimax-h3':
        # Self-hosted vLLM-Omni has no fixed host; the served model name selects it.
        # continuation continues one earlier H3 clip of the same server from its
        # cached latents: the source video is never uploaded, so maxVideos (video
        # references) stays zero.
        rules.update(profile='vllm-omni-h3', allowedKinds=['text', 'image', 'video', 'audio'], maxImages=9, maxAudios=3,
                     imageBytes=30 * 1024 * 1024, requestBytes=64 * 1024 * 1024, videoModes=['first_frame', 'reference', 'continuation'])
        return rules
    if kind == 'video' and config.get('protocol') == 'vllm_omni':
        rules.update(profile='fasth3-omni', allowedKinds=['text', 'image', 'video', 'audio'],
                     maxImages=9, maxVideos=3, maxAudios=3, imageBytes=30 * 1024 * 1024,
                     requestBytes=160 * 1024 * 1024, videoModes=['reference'])
        return rules
    if kind == 'agent':
        rules.update(allowedKinds=['text', 'image', 'video', 'audio'], maxImages=MAX_REFERENCES, imageBytes=32 * 1024 * 1024)
        if host == 'api.deepseek.com' and path in {'', '/v1'} and model == 'deepseek-flash':
            rules['profile'] = 'deepseek-flash'
    elif host == 'ark.cn-beijing.volces.com' and path == '/api/plan/v3':
        if kind == 'image' and model in {'doubao-seedream-5.0-pro', 'doubao-seedream-5-0-pro'}:
            rules.update(profile='seedream-5.0-pro', maxImages=10, imageBytes=30 * 1024 * 1024, requestBytes=64 * 1024 * 1024)
        elif kind == 'video' and model == 'doubao-seedance-2.0':
            rules.update(profile='seedance-2.0', allowedKinds=['text', 'image', 'audio'], maxImages=9, maxAudios=3, imageBytes=30 * 1024 * 1024,
                         requestBytes=64 * 1024 * 1024, videoModes=['first_frame', 'reference'])
    if kind == 'image' and model.rsplit('/', 1)[-1].lower() == 'z-image-turbo':
        # Self-hosted vLLM-Omni text-to-image: it draws from the prompt alone, so
        # documents are inlined as text and reference images are not accepted.
        rules.update(profile='vllm-omni-image', allowedKinds=['text'], maxImages=0)
    if kind == 'audio':
        rules.update(profile='tts', allowedKinds=[], maxImages=0)
    return rules
