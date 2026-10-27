"""Portable inline references. Plain inputs are projections, never a second draft."""

from typing import Annotated, Literal
from museshow.domain.input_rules import MAX_REFERENCES
from uuid import UUID

from pydantic import BaseModel, ConfigDict, Field, TypeAdapter


class TextPart(BaseModel):
    model_config = ConfigDict(extra='forbid')
    type: Literal['text']
    text: str = Field(max_length=20000)


class ReferencePart(BaseModel):
    model_config = ConfigDict(extra='forbid')
    type: Literal['reference']
    assetId: UUID
    nodeId: UUID | None = Field(default=None, exclude_if=lambda value: value is None)
    name: str = Field(min_length=1, max_length=255)
    fingerprint: str | None = Field(default=None, max_length=1000)


ReferenceContent = Annotated[list[Annotated[TextPart | ReferencePart, Field(discriminator='type')]], Field(max_length=2000)]
content_adapter = TypeAdapter(ReferenceContent)


def project_content(content, *, speech=False):
    """Accept JSON or validated parts; retain first-mention ordering for providers."""
    parts = content_adapter.validate_python(content)
    references, text = [], []
    for part in parts:
        if part.type == 'text':
            text.append(part.text)
        else:
            asset_id = str(part.assetId)
            if asset_id not in references:
                references.append(asset_id)
            if not speech:
                text.append(f'［参考{references.index(asset_id) + 1}：{part.name}］')
    prompt = ''.join(text)
    if speech:
        prefix, has_reference = '', False
        for part in parts:
            if part.type == 'reference':
                has_reference = True
                continue
            line, newline, _ = part.text.partition('\n')
            prefix += line
            if newline:
                if has_reference and not prefix.strip():
                    prompt = prompt[len(prefix) + 1:]
                break
    if len(references) > MAX_REFERENCES or len(prompt) > 20000:
        raise ValueError(f'正文最多 20000 字、{MAX_REFERENCES} 份不同参考')
    return prompt, references


def reference_content(prompt, reference_ids, records, content=None):
    """Retain positioned parts; put only unlocated references on the first line."""
    body = [part.model_dump(mode='json') for part in content_adapter.validate_python(content)] if content is not None else (
        [{'type': 'text', 'text': prompt}] if prompt else [])
    located = {part['assetId'] for part in body if part['type'] == 'reference'}
    unlocated = [asset_id for asset_id in dict.fromkeys(map(str, reference_ids)) if asset_id not in located]
    if not unlocated:
        return body
    header = []
    for asset_id in unlocated:
        if header:
            header.append({'type': 'text', 'text': ' '})
        asset = records.get(asset_id, {})
        header.append({'type': 'reference', 'assetId': asset_id, 'name': asset.get('name') or '参考缺失',
                       'fingerprint': asset.get('fingerprint')})
    return header + ([{'type': 'text', 'text': '\n'}] + body if any(
        part['type'] == 'reference' or part['text'] for part in body) else [])


def replace_inputs(original, updates, records=None):
    """Legacy text/reference edits invalidate an older structured draft."""
    result = {**original, **updates}
    if 'promptContent' not in updates and {'prompt', 'referenceIds'} & updates.keys():
        result['promptContent'] = None
    elif updates.get('promptContent') is not None and 'referenceIds' in updates:
        result['promptContent'] = reference_content(result.get('prompt', ''), updates['referenceIds'],
                                                    records or {}, updates['promptContent'])
    return result
