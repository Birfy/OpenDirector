"""Bounded canvas task observations, independent of batch production tools."""


def basis_summary(value):
    if not value:
        return None
    result = {'references': value.get('references', {})}
    node = value.get('node')
    if node:
        result['node'] = {key: node.get(key) for key in ('kind', 'modelConfigId', 'referenceIds', 'videoMode', 'assetId')}
        result['node'].update(prompt=node['prompt'][:4000], promptTruncated=len(node['prompt']) > 4000,
            draftPreview=(node.get('draft') or '')[:4000], draftTruncated=len(node.get('draft') or '') > 4000)
    return result


def task_summary(task, *, include_inputs=True):
    if task is None:
        return None
    fields = ('id', 'nodeId', 'kind', 'status', 'assetId', 'error', 'errorDetails', 'phase', 'recovery', 'resumeAllowed',
              'technicalCheck', 'canvasAdoption', 'adoptionPolicy')
    result = {key: task.get(key) for key in fields}
    if include_inputs:
        result['inputSnapshot'] = basis_summary(task.get('inputSnapshot'))
        result['videoMode'] = task.get('videoMode', 'first_frame')
        result['referenceInputs'] = task.get('referenceInputs')
    return result
