"""Selection sources are read-only and subject limits use verified media bytes."""
import base64
from copy import deepcopy
from io import BytesIO
from pathlib import Path
import subprocess
import wave
from uuid import uuid4

import pytest
from test_library import app, client, store, png, upload
from test_creation_canvas_service import project, send
from opendirector.application.canvas_sources import CanvasSources
from opendirector.application.creation_canvas import asset_ref
from opendirector.domain.projects import ProjectError
from opendirector.infrastructure.workspace_documents import WorkspaceDocuments
from opendirector.infrastructure.creation_projects import CreationProjects
from test_subject_library import register_image


def legacy_source(store, kind='image', payload=None):
    owner, session, node_id = str(uuid4()), str(uuid4()), str(uuid4())
    store.create('Canvas source', owner, session)
    content = payload or png('red')
    src = 'data:application/octet-stream;base64,' + base64.b64encode(content).decode()
    node = dict(id=node_id, type=kind, data=dict(title='Source', src='opendirector-media:0'))
    document = dict(version=2,id=owner,title='Canvas source',viewport={},settings={},edges=[],mediaSources=[src],nodes=[node])
    saved = WorkspaceDocuments(store).save(owner,document,0,session)
    return owner, session, node_id, document, saved


def audio(seconds):
    out=BytesIO()
    with wave.open(out,'wb') as stream:
        stream.setnchannels(1);stream.setsampwidth(2);stream.setframerate(8000)
        stream.writeframes(bytes(8000*2*seconds))
    return out.getvalue()


def test_canvas_sources_preserve_identity_and_never_open_a_session(store):
    owner, session, node_id, document, saved=legacy_source(store)
    service=CanvasSources(CreationProjects(store))
    rows=service.list(owner)
    assert rows[0]['nodeId']==node_id
    assert rows[0]['main']['src'].startswith('data:')
    result=service.prepare(owner,node_id,rows[0]['revision'])
    assert result['media'][0]['kind']=='image'
    assert service.media(owner,node_id,rows[0]['revision'],'main')[0]==png('red')
    # A read cannot steal the original editor's lease.
    changed=deepcopy(document);changed['nodes'][0]['data']['title']='Edited / frame: 1'
    WorkspaceDocuments(store).save(owner,changed,saved['revision'],session)
    with pytest.raises(ProjectError,match='已变化'):
        service.prepare(owner,node_id,rows[0]['revision'])
    fresh=service.list(owner)[0]
    filename=service.prepare(owner,node_id,fresh['revision'])['media'][0]['name']
    assert '/' not in filename and ':' not in filename


@pytest.mark.parametrize('seconds,allowed',[(15,True),(16,False)])
def test_canvas_audio_limit_is_actual_not_declared_metadata(store,seconds,allowed):
    owner,_,node_id,_,_=legacy_source(store,'audio',audio(seconds))
    service=CanvasSources(CreationProjects(store));row=service.list(owner)[0]
    if allowed:
        result=service.prepare(owner,node_id,row['revision'],'voice')
        assert result['media'][0]['metadata']['durationSeconds']==15
    else:
        with pytest.raises(ProjectError,match='15 秒'):
            service.prepare(owner,node_id,row['revision'],'voice')
    with pytest.raises(ProjectError):service.prepare(owner,node_id,row['revision'],'main')


@pytest.mark.parametrize('seconds,allowed',[(15,True),(16,False)])
def test_library_video_limit_uses_actual_bytes(client,seconds,allowed):
    payload=subprocess.check_output(['ffmpeg','-v','error','-f','lavfi','-i','color=c=blue:s=32x32:r=1','-t',str(seconds),'-c:v','libx264','-threads','1','-pix_fmt','yuv420p','-movflags','frag_keyframe+empty_moov','-f','mp4','pipe:1'])
    item=client.post('/api/library/items/upload',params={'name':'clip.mp4'},content=payload,headers={'Content-Type':'video/mp4'}).json()
    response=client.post(f"/api/library/items/{item['id']}/prepare-subject-media",json={'revision':item['revision'],'slot':'main'})
    assert response.status_code==(200 if allowed else 422),response.text
    choices=client.get('/api/library/subject-media?slot=main').json()
    assert next(row for row in choices if row['id']==item['id'])['available'] is allowed
    assert client.post(f"/api/library/items/{item['id']}/prepare-subject-media",json={'revision':item['revision'],'slot':'auxiliary'}).status_code in {400,422}


def test_canvas_full_subject_retains_every_slot_and_rejects_non_media(store):
    owner, session, node_id, document, saved=legacy_source(store)
    node=document['nodes'][0];node['type']='subject'
    node['data']['subject']=dict(description='User only',category='character',main=dict(id='main',kind='image',src='opendirector-media:0'),auxiliaries=[dict(id='aux',kind='image',src='data:image/png;base64,'+base64.b64encode(png('blue')).decode())],voice=dict(id='voice',kind='audio',src='data:audio/wav;base64,'+base64.b64encode(audio(15)).decode()))
    # The source starts as a subject; the ordinary node remains unchanged.
    node['id']=str(uuid4())
    document['nodes']=[node]
    WorkspaceDocuments(store).save(owner,document,saved['revision'],session)
    service=CanvasSources(CreationProjects(store));row=service.list(owner)[0]
    prepared=service.prepare(owner,row['nodeId'],row['revision'])
    assert [item['slot'] for item in prepared['media']]==['main','auxiliary:0','voice']
    assert prepared['description']=='User only'
    with pytest.raises(ProjectError):service.prepare(owner,row['nodeId'],row['revision'],'voice')
    document['nodes'][0]['data']['subject']['auxiliaries'] *= 4
    WorkspaceDocuments(store).save(owner,document,saved['revision']+1,session)
    invalid=service.list(owner)[0]
    with pytest.raises(ProjectError,match='3 张'):
        service.prepare(owner,invalid['nodeId'],invalid['revision'])


def test_unified_queries_do_not_take_lease_and_read_editor_data(project):
    store,pid,session=project
    asset=register_image(project)
    editor_id,node_id=uuid4(),uuid4()
    result=send(store,pid,'creation.batch',session=session,operations=[
        dict(type='editor.create',payload=dict(document=dict(id=editor_id,projectId=pid,kind='subject',data=dict(main=asset_ref(asset))))),
        dict(type='canvas.show',payload=dict(item=dict(id=node_id,projectId=pid,kind='subject',title='Whole',binding=dict(role='editor',objectRef=dict(id=editor_id,kind='subject')))))])
    assert result.status=='applied'
    sources=CanvasSources(store);row=sources.list(pid)[0]
    assert row['nodeId']==str(node_id) and row['kind']=='subject'
    assert sources.prepare(pid,node_id,row['revision'])['media'][0]['kind']=='image'
    store.heartbeat(str(session), str(pid))


def test_read_only_source_endpoints_support_canvas_ids_without_uuid(client,store):
    owner,session,node_id,document,saved=legacy_source(store)
    document['nodes'][0]['id']='imported-node'
    WorkspaceDocuments(store).save(owner,document,saved['revision'],session)
    rows=client.get(f'/api/library/canvases/{owner}/sources').json()
    assert rows[0]['nodeId']=='imported-node'
    response=client.post(f'/api/library/canvases/{owner}/prepare',json=dict(nodeId='imported-node',revision=rows[0]['revision'],slot='main'))
    assert response.status_code==200,response.text
    media=client.get(f'/api/library/canvases/{owner}/nodes/imported-node/media/main',params=dict(revision=rows[0]['revision']))
    assert media.status_code==200 and media.content==png('red')
    store.release(session)


def test_global_canvas_copy_probes_media_without_subject_duration_limit(store):
    owner,_,node_id,_,_=legacy_source(store,'audio',audio(16))
    sources=CanvasSources(CreationProjects(store))
    row=sources.list(owner)[0]
    value=sources.prepare(owner,node_id,row['revision'],subject=False)
    assert value['media'][0]['metadata']['durationSeconds']==16
    assert value['media'][0]['metadata']['mimeType']=='audio/wav'
