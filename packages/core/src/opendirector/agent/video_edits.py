"""Keep a direct, user-authored reference-video edit intact at the tool boundary."""
from copy import deepcopy
import re

from opendirector.domain.input_rules import input_rules
from opendirector.domain.projects import ProjectError
from opendirector.domain.references import project_content


def video_edit_request(turn):
    messages = getattr(turn, 'conversation', {}).get('messages', [])
    user = next((message for message in reversed(messages) if message.get('role') == 'user'), {})
    assets = user.get('assets', [])
    videos = [asset['id'] for asset in assets if asset.get('type', '').startswith('video/')]
    if not videos:
        return None
    content = user.get('content')
    # Only the human's current typed words establish edit intent, never an asset's
    # filename/content, an old assistant reply, or a generated tool description.
    text = project_content(content, speech=True)[0] if content is not None else user.get('text', '')
    if not re.search(r'替换|换人|换脸|换装|换成|改成|修改|编辑|重绘|去除|去掉|移除|擦除|\b(?:replace|swap|edit|remove)\b', text, re.I):
        return None
    if re.search(r'(?:不要|不用|无需|不再|别).{0,8}(?:参考|使用|沿用).{0,8}(?:视频|原片)|\b(?:without|do not use|don\'t use)\b.{0,20}\bvideo\b', text, re.I):
        return None
    # Explicit multi-shot authoring remains a separate workflow; merely mentioning
    # an existing shot or camera movement does not opt into a new production plan.
    if re.search(r'(?:制作|创作|编写|设计).{0,8}(?:多镜|分镜脚本)|(?:拆分|分成|拆成).{0,8}(?:镜头|分镜)|\b(?:create|write)\b.{0,20}\b(?:storyboard|multi[- ]shot)\b', text, re.I):
        return None
    prompt = project_content(content)[0] if content is not None else user.get('text', '')
    return {'prompt': prompt, 'promptContent': deepcopy(content),
            'referenceIds': list(dict.fromkeys(asset['id'] for asset in assets)),
            'sourceVideoIds': videos, 'videoMode': 'reference'}


def preserve_video_edit(arguments, request, config):
    rules = input_rules(config)
    if ('video' not in rules['allowedKinds'] or not rules.get('maxVideos')
            or 'reference' not in rules['videoModes']):
        raise ProjectError('当前请求需要引用原视频，但所选视频模型不支持视频参考。请选择支持视频参考的模型；未改成纯图片重制，也未提交生成。', 409)
    return {**arguments, **{key: deepcopy(request[key]) for key in
                            ('prompt', 'promptContent', 'referenceIds', 'videoMode')}}
