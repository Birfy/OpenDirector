"""Shared canvas generation fixtures with no storyboard or production services."""
import asyncio
from copy import deepcopy
import io
from pathlib import Path
import shutil
import subprocess
from types import SimpleNamespace
from uuid import uuid4
import wave

from PIL import Image
import pytest

from museshow.application.generation import Generation
from museshow.domain.generation import GenerationError, GenerationFailure
from museshow.infrastructure.local_projects import LocalProjects
from museshow.infrastructure.model_configs import ModelConfigs

def setup(tmp_path):
    store = LocalProjects(tmp_path)
    session = str(uuid4())
    project = store.create('画布生成', str(uuid4()), session)
    configs = ModelConfigs(tmp_path)
    config = configs.save('image', 'https://ark.test/api/plan/v3', 'seedream', 'private')
    stream = io.BytesIO()
    Image.new('RGB', (16, 12), 'red').save(stream, 'PNG')
    class Provider:
        def __init__(self):
            self.calls = []
            self.gate = asyncio.Event()
            self.gate.set()
            self.fail = False
        def validate(self, kind, config): pass
        async def generate(self, config, task, submitted):
            self.calls.append(task['id'])
            await self.gate.wait()
            if self.fail:
                self.fail = False
                raise GenerationError(GenerationFailure(category='input', stage='submit',
                    message='测试供应商失败', suggestion='请检查输入。', httpStatus=400))
            return 'png', stream.getvalue()
    provider = Provider()
    generation = Generation(store, configs, provider)
    return store, session, project, config, generation, provider


def image(generation, owner, session, name, *, source='upload'):
    from PIL import Image
    data = io.BytesIO()
    Image.new('RGB', (12, 10), 'blue').save(data, 'PNG')
    return generation.canvas.assets.import_file(owner, str(uuid4()), name + '.png', data.getvalue(), session, source=source)


def audio_bytes():
    data = io.BytesIO()
    with wave.open(data, 'wb') as stream:
        stream.setnchannels(1); stream.setsampwidth(2); stream.setframerate(8000)
        stream.writeframes(b'\0\0' * 8000)
    return data.getvalue()


@pytest.fixture(scope='module')
def media(tmp_path_factory):
    if not shutil.which('ffmpeg') or not shutil.which('ffprobe'):
        pytest.skip('media tests require FFmpeg tools')
    video = tmp_path_factory.mktemp('repair-media') / 'clip.mp4'
    subprocess.run(['ffmpeg', '-v', 'error', '-f', 'lavfi', '-i', 'color=c=blue:s=32x24:d=0.2',
        '-pix_fmt', 'yuv420p', str(video)], check=True)
    return video.read_bytes(), audio_bytes()



def context(tmp_path, media=None):
    store, session, project, config, generation, provider = setup(tmp_path)
    owner = project['id']
    png = image(generation, owner, session, '本地参考')
    provider.calls, provider.failures = [], set()
    data = {'image': ('png', store.asset(owner, png['id'])[0])}
    if media:
        data.update(video=('mp4', media[0]), audio=('wav', media[1]))
    async def generate(config, task, submitted):
        provider.calls.append(deepcopy(task))
        await provider.gate.wait()
        if task['prompt'] in provider.failures:
            provider.failures.remove(task['prompt'])
            raise GenerationError(GenerationFailure(category='reference', stage='submit',
                message='测试参考被拒绝', suggestion='请更换参考。', httpStatus=400))
        return data[task['kind']]
    provider.generate = generate
    models = {'image': config['id']}
    for kind in ('video', 'audio') if media else ():
        models[kind] = generation.configs.save(kind, 'https://model.test', kind, 'private')['id']
    return SimpleNamespace(store=store, session=session, owner=owner, directory=Path(project['path']),
        generation=generation, provider=provider, models=models, reference=png)


async def close(c):
    await c.generation.close()
