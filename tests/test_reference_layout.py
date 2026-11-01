"""Reference placement is explicit, or a context line above an unchanged body."""
import asyncio
from uuid import uuid4

import pytest

from opendirector.domain.references import project_content, reference_content
from opendirector.infrastructure.canvas_versions import node_history
from test_inline_references import document
from canvas_helpers import close, context


def assets():
    values = [{'id': str(uuid4()), 'name': name, 'fingerprint': name} for name in ('A.png', 'B.png')]
    return values, {item['id']: item for item in values}


@pytest.mark.parametrize('body', ['', '提示词', '\n保留开头空行\n\n末尾\n', '原参考：这是用户实际输入的文字'])
def test_unpositioned_references_are_first_line_and_body_is_verbatim(body):
    (a, b), records = assets()
    result = reference_content(body, [a['id'], a['id'], b['id']], records)
    assert [part['assetId'] for part in result if part['type'] == 'reference'] == [a['id'], b['id']]
    assert result[1] == {'type': 'text', 'text': ' '}
    assert result[3:] == ([{'type': 'text', 'text': '\n'}, {'type': 'text', 'text': body}] if body else [])
    assert reference_content(body, [], records) == ([{'type': 'text', 'text': body}] if body else [])


@pytest.mark.parametrize(('before', 'after'), [('', '正文'), ('中间', '引用'), ('正文', ''), ('\n首段\n', '\n下一段\n')])
def test_positioned_references_preserve_order_repeated_mentions_and_line_breaks(before, after):
    (a, _), records = assets()
    content = document(a, before, after) + document(a, '', '')
    assert reference_content('不要用此值替换正文', [a['id']], records, content) == content
    assert project_content(content)[0].count('参考1：') == 2


def test_mixed_inputs_prepend_only_missing_reference_and_speech_omits_context_line():
    (a, b), records = assets()
    content = document(a, '按', '创作\n保留此换行')
    result = reference_content('unused', [a['id'], b['id'], b['id']], records, content)
    assert result[0]['assetId'] == b['id'] and result[1] == {'type': 'text', 'text': '\n'}
    assert result[2:] == content and project_content(result)[1] == [b['id'], a['id']]
    speech = reference_content('\n朗读正文\n第二行', [a['id'], b['id']], records)
    assert project_content(speech, speech=True)[0] == '\n朗读正文\n第二行'
    assert project_content(document(a, '朗读', '\n正文'), speech=True)[0] == '朗读\n正文'


def test_generation_mixed_references_survive_task_snapshot_and_history(tmp_path):
    c = context(tmp_path)
    canvas = c.generation.canvas
    other = canvas.assets.import_file(c.owner, str(uuid4()), '补充参考.png', c.store.asset(c.owner, c.reference['id'])[0], c.session)
    content = document(c.reference, '主体使用', '，保留文字与位置\n')
    async def run():
        node = canvas.create(c.owner, {'id': str(uuid4()), 'kind': 'image'}, c.session)
        task = await c.generation.submit(c.owner, node['id'], {'id': str(uuid4()), 'expectedRevision': node['revision'],
            'modelConfigId': c.models['image'], 'inputs': {'prompt': 'fallback', 'promptContent': content,
                'referenceIds': [c.reference['id'], other['id']]}}, c.session)
        await asyncio.gather(*(job.future for job in list(c.generation.jobs.values())))
        assert task['promptContent'][0]['assetId'] == other['id'] and task['promptContent'][2:] == content
        assert task['referenceIds'] == [other['id'], c.reference['id']]
        version = node_history(canvas, c.owner, node['id'])['versions'][0]
        assert version['promptContent'] == task['promptContent']
        assert version['referenceIds'] == task['referenceIds']
        assert version['prompt'] == task['prompt']
        await close(c)
    asyncio.run(run())


def test_mixed_references_cannot_bypass_tool_reference_limit():
    from opendirector.domain.input_rules import MAX_REFERENCES
    from opendirector.agent.loop import Generate
    asset = {'id': str(uuid4()), 'name': '正文引用.png', 'fingerprint': 'a'}
    content = document(asset)
    extras = [str(uuid4()) for _ in range(MAX_REFERENCES)]
    with pytest.raises(ValueError, match=str(MAX_REFERENCES)):
        Generate(kind='image', prompt='原始输入', promptContent=content, referenceIds=extras)
