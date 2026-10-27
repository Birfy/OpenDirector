import asyncio
import json
from pathlib import Path
import shutil
import subprocess
from uuid import uuid4

import pytest

from museshow.application.exports import Exports, export_filename
from museshow.domain.projects import ProjectError
from museshow.infrastructure.asset_catalog import AssetCatalog
from museshow.infrastructure.local_projects import LocalProjects, write_json
from museshow.domain.storyboard import StoryboardState


@pytest.mark.skipif(not shutil.which('ffmpeg'), reason='requires local FFmpeg')
def test_export_snapshot_mixed_media_exact_duration_and_audio(tmp_path):
    store = LocalProjects(tmp_path)
    session = str(uuid4())
    project = store.create('导出', str(uuid4()), session)
    catalog = AssetCatalog(store)
    assets = []
    for name, args in [('still.png', ['-f', 'lavfi', '-i', 'color=c=red:s=80x120', '-frames:v', '1']),
                       ('clip.mp4', ['-f', 'lavfi', '-i', 'color=c=blue:s=160x90:r=30', '-f', 'lavfi', '-i', 'sine=frequency=440', '-t', '0.4', '-pix_fmt', 'yuv420p']),
                       ('voice.wav', ['-f', 'lavfi', '-i', 'sine=frequency=880', '-t', '0.2'])]:
        path = tmp_path / name
        subprocess.run(['ffmpeg', '-v', 'error', *args, str(path)], check=True)
        assets.append(catalog.import_file(project['id'], str(uuid4()), name, path.read_bytes(), session))
    shots = [{'id': str(uuid4()), 'title': str(index), 'candidates': {'visual': [asset['id']], 'audio': [assets[2]['id']]},
              'selected': {'visual': asset['id'], 'audio': assets[2]['id']}} for index, asset in enumerate(assets[:2])]
    board = StoryboardState(revision=1, orderRevision=1, shots=shots).model_dump(mode='json')
    directory = Path(project['path'])
    write_json(directory / 'storyboard.json', board)
    manager = Exports(store)
    snapshot = manager.timeline.snapshot(project['id'])
    image = snapshot['timeline']['clips'][0]
    manager.timeline.patch(project['id'], 0, 1, session, clip_id=image['id'], fields={'durationFrames': 9})
    async def run():
        value = {'id': str(uuid4()), 'name': '雨后清晨_终稿', 'expectedRevision': 1, 'expectedStoryboardRevision': 1}
        with pytest.raises(ProjectError, match='变化'):
            manager._prepare(project['id'], {**value, 'expectedRevision': 0}, session)
        with pytest.raises(ProjectError, match='文件名'):
            manager._prepare(project['id'], {**value, 'name': '../逃逸'}, session)
        assert manager.list(project['id']) == []
        task = await manager.submit(project['id'], value, session)
        assert task['name'] == '雨后清晨_终稿.mp4'
        # Changing the live board after acceptance cannot change this export.
        write_json(directory / 'storyboard.json', {**board, 'shots': list(reversed(board['shots'])), 'revision': 2})
        await asyncio.gather(*manager.jobs.values())
        receipt = manager.list(project['id'])[0]
        assert receipt['status'] == 'succeeded', receipt
        file = manager.download(project['id'], task['id'])
        assert file.name == 'movie.mp4'
        assert manager.filename(project['id'], task['id']) == '雨后清晨_终稿.mp4'
        probe = json.loads(subprocess.check_output(['ffprobe', '-v', 'error', '-show_streams', '-show_format', '-of', 'json', str(file)]))
        assert [stream['codec_type'] for stream in probe['streams']] == ['video', 'audio']
        assert (probe['streams'][0]['width'], probe['streams'][0]['height']) == (1280, 720)
        assert abs(float(probe['format']['duration']) - 0.7) < 0.05
        assert probe['streams'][0]['nb_frames'] == '21'
        subprocess.run(['ffmpeg', '-v', 'error', '-i', str(file), '-f', 'null', '-'], check=True)
        stored = json.loads((file.parent / 'timeline.json').read_text())
        assert stored['clips'][0]['assetId'] == assets[0]['id']
        assert (directory / 'assets' / assets[1]['id']).is_file()
    asyncio.run(run())


@pytest.mark.parametrize('name', ['', '   ', '../outside', 'a/b', 'a\\b', 'a:b', 'a?', 'a|b', 'CON', 'nul.txt.mp4', 'LPT1.mp4', 'a.', 'a .mp4', 'a\nvideo', 'x' * 61])
def test_export_filename_rejects_unsafe_portable_names(name):
    with pytest.raises(ProjectError):
        export_filename(name)


def test_export_filename_keeps_unicode_and_normalizes_extension():
    assert export_filename(' 雨后清晨_终稿 ') == '雨后清晨_终稿.mp4'
    assert export_filename('片段.MP4') == '片段.mp4'
    assert export_filename('e\u0301.mp4') == 'é.mp4'
