"""Read an optional, explicit videoCapabilities extension on GET /models."""
import json

import httpx

from opendirector.domain.projects import ProjectError
from opendirector.domain.video_capabilities import VideoCapabilities
from opendirector.integrations.http_settings import auth_headers, trust_environment
from opendirector.integrations.volcengine import endpoint


async def read_video_capabilities(config, transport=None):
    try:
        async with httpx.AsyncClient(transport=transport, trust_env=trust_environment(config['url'], config=config),
                                     timeout=15, follow_redirects=False) as client:
            async with client.stream('GET', endpoint(config['url'], '/models'), headers=auth_headers(config)) as response:
                if response.status_code != 200:
                    raise ProjectError(f'读取模型声明失败（HTTP {response.status_code}），未修改配置。')
                data = bytearray()
                async for chunk in response.aiter_bytes():
                    data.extend(chunk)
                    if len(data) > 1024 * 1024:
                        raise ProjectError('模型声明超过 1 MB，未修改配置。')
                models = json.loads(data).get('data', [])
        matching = [item for item in models if isinstance(item, dict) and item.get('id') == config['modelId']]
        if len(matching) != 1 or not matching[0].get('videoCapabilities'):
            raise ProjectError('服务未为该 Model ID 返回明确的 videoCapabilities 声明，请手动配置输出规格；未修改配置。')
        return VideoCapabilities.model_validate(matching[0]['videoCapabilities']).model_dump(exclude_none=True)
    except (httpx.HTTPError, ValueError, TypeError, AttributeError):
        raise ProjectError('无法读取有效的视频能力声明，请检查连接或手动配置；未修改配置。') from None
