"""Isolated browser fixture API; never points at the user's projects or models.

PYTHONPATH=packages/core/src:apps/api/src python tests/browser/creation_server.py
"""
import argparse
import asyncio
from io import BytesIO
from pathlib import Path
import tempfile

from fastapi import Request
from PIL import Image
import uvicorn

from museshow.domain.projects import ProjectError
from museshow.infrastructure.local_projects import LocalProjects
from museshow.infrastructure.model_configs import ModelConfigs
from museshow_api.main import create_app


parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--port', type=int, default=8019)
parser.add_argument('--root', type=Path)
args = parser.parse_args()
root = (args.root or Path(tempfile.mkdtemp(prefix='opendesign-creation-'))).resolve()
if root.parent != Path(tempfile.gettempdir()).resolve() or not root.name.startswith('opendesign-creation-'):
    parser.error('Browser fixtures require an opendesign-creation-* directory directly under the system temp directory')
store = LocalProjects(root)
configs = ModelConfigs(root)
if not configs.list():
    for kind in ('agent', 'image'):
        configs.save(kind, 'http://127.0.0.1:12345/v1', f'fixture-{kind}', '',
                     connection_type='self_hosted', protocol='openai', auth_mode='none')


class FixtureProvider:
    def __init__(self):
        self.gate = asyncio.Event()
        self.gate.set()
        self.calls = []

    def validate(self, kind, config):
        if kind not in {'text', 'image'}:
            raise ProjectError('This fixture only generates text/images')

    async def generate(self, config, task, submitted, *, result_ready=None):
        self.calls.append(dict(id=task['id'], kind=task['kind'], referenceIds=task['referenceIds']))
        await self.gate.wait()
        await asyncio.sleep(.2)
        if task['kind'] == 'text':
            return 'md', ('Fixture generated: ' + task['prompt']).encode('utf-8')
        image = BytesIO()
        Image.new('RGB', (320, 240), 'purple').save(image, 'PNG')
        return 'png', image.getvalue()


provider = FixtureProvider()
app = create_app(store, generation_provider=provider)


@app.get('/api/creation-test-health')
def health():
    return dict(isolated=True, provider='fixture', root=str(root), calls=provider.calls)


@app.post('/api/creation-test-gate')
async def gate(request: Request):
    value = await request.json()
    if value.get('open') is True:
        provider.gate.set()
    else:
        provider.gate.clear()
    return dict(open=provider.gate.is_set())


print('Isolated browser fixture root:', root, flush=True)
uvicorn.run(app, host='127.0.0.1', port=args.port)
