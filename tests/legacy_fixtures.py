"""Write historical bytes only to test refusal and preservation."""
import json
from uuid import uuid4


def legacy_project(local, name='Legacy', project_id=None):
    project_id = str(project_id or uuid4())
    path = local.root / name
    path.mkdir(parents=True)
    (path / 'project.json').write_text(json.dumps(dict(formatVersion=1, id=project_id, name=name)))
    (path / 'conversation.json').write_text('{"version":1,"messages":[],"draft":"keep me"}')
    (path / 'canvas.json').write_text('{"version":1,"nodes":[],"edges":[]}')
    return dict(id=project_id, name=name, path=str(path))
