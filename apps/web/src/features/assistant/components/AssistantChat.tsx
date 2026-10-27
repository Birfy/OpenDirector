import { Feedback } from '../../../components/Feedback';
import { ProductionMessage } from './ProductionMessage';
import { mergeProductionMessages, useProductionChat } from '../production';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import logo from '../../../assets/logo/logo.png';
import { Icon } from '../../../components/Icon';
import { attachment } from '../../assets/types';
import { ReferenceEditor, type ReferenceEditorHandle } from '../../references/ReferenceEditor';
import { ReferenceText } from '../../references/ReferenceText';
import { currentReferences, contentText, referenceContent, referenceIds, REFERENCE_LIMIT, type ReferenceAsset, type ReferenceContent } from '../../references/content';
import { ChoicePicker } from './ChoicePicker';
import { ModelPicker } from './ModelPicker';
import { emptyConversation, loadConversation, saveConversation, rememberConversation, flushConversation, scopeFor } from '../storage';
import { errorMessage, json, request } from '../../../lib/api';
import type { Asset, Conversation, Thinking, NewProjectMessage } from '../types';
import { THINKING, streamChat } from '../transport';
import { metadataOnlyReferenceKinds, MODEL_KINDS, type ModelKind } from '../../settings/models';
import type { ModelCatalog } from '../../settings/hooks/useModelConfigs';
import { NODE_LABELS, type CanvasNode, type CanvasSnapshot } from '../../canvas/types';
import type { ShotContext } from '../../storyboard/types';
import type { PendingReferenceControls } from '../hooks/usePendingCanvasReferences';
import { PendingReferences } from './PendingReferences';
import { mergeReferenceAssets, useReferenceUploads } from '../../references/useReferenceUploads';

const LIMIT = REFERENCE_LIMIT;
export function AssistantChat({ pendingReferences, projectId, onBusyChange, modelCatalog, onModelSettings, selectedNode, selectedShot, beforeSend, onCanvasChange, onLocateNode, onCreateProject, initialTurnId, onInitialTurnHandled }: { pendingReferences: PendingReferenceControls; projectId: string | null; onBusyChange: (busy: boolean) => void; modelCatalog: ModelCatalog; onModelSettings: () => void; selectedNode?: CanvasNode; selectedShot?: ShotContext; beforeSend?: () => Promise<void>; onCanvasChange: (event: { nodeId?: string | null }) => void; onLocateNode: (nodeId: string) => void; onCreateProject: (value: NewProjectMessage) => Promise<void>; initialTurnId?: string; onInitialTurnHandled: () => void }) {
  const scope = scopeFor(projectId);
  const [conversation, setConversation] = useState<Conversation>(emptyConversation);
  const production = useProductionChat(projectId);
  const messages = mergeProductionMessages(conversation.messages, production.messages);
  const [loaded, setLoaded] = useState(false);
  const [sending, setSending] = useState(false);
  const [started, setStarted] = useState(false);
  const [thinkingNow, setThinkingNow] = useState(false);
  const [stopping, setStopping] = useState(false);
  const [toolNotice, setToolNotice] = useState('');
  const turnId = useRef<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState('');
  const [loadAttempt, setLoadAttempt] = useState(0);
  const [modelNotice, setModelNotice] = useState('');
  const editor = useRef<ReferenceEditorHandle>(null);
  const [referenceAssets, setReferenceAssets] = useState<ReferenceAsset[]>([]);
  const [referencesLoading, setReferencesLoading] = useState(false);
  const [referencesError, setReferencesError] = useState('');
  const [checkingReferences, setCheckingReferences] = useState(false);
  const referenceCheck = useRef<AbortController | null>(null);
  const pending = pendingReferences.pending;
  useEffect(() => () => referenceCheck.current?.abort(), [pending?.id]);
  const pendingAssets = pending?.items.flatMap(item => item.asset ? [item.asset] : []) ?? [];
  const baseCatalog = mergeReferenceAssets(pendingReferences.currentAssets, [...conversation.assets, ...referenceAssets, ...pendingAssets]);
  const uploads = useReferenceUploads({ scope, editor, disabled: !loaded || sending, assets: baseCatalog,
    value: referenceContent(conversation.draft, conversation.assets.map(asset => asset.id), baseCatalog, conversation.draftContent),
    rules: { availableIds: projectId ? pendingReferences.currentAssets.map(asset => asset.id) : undefined, allowedKinds: ['text', 'image', 'video', 'audio'], maxImages: LIMIT, imageBytes: 32 * 1024 * 1024 },
    onSaved: () => onCanvasChange({}),
  });
  const adding = uploads.busy;
  const editorDisabled = !loaded || (sending && !started) || adding;
  const referenceCatalog = uploads.catalog;
  useEffect(() => {
    if (!loaded || !projectId) return;
    setConversation(current => {
      const body = referenceContent(current.draft, current.assets.map(asset => asset.id), referenceCatalog, current.draftContent);
      const content = currentReferences(body, pendingReferences.currentAssets);
      if (JSON.stringify(content) === JSON.stringify(current.draftContent) || !referenceIds(content).length) return current;
      return { ...current, draftContent: content, draft: contentText(content), assets: referenceIds(content).flatMap(id => {
        const asset = referenceCatalog.find(asset => asset.id === id); return asset ? [attachment(asset)] : [];
      }) };
    });
  }, [loaded, pendingReferences.canvasRevision]);
  async function confirmReferences(content: ReferenceContent) {
    if (!pending || !projectId || editorDisabled || !pendingReferences.isCurrent(pending.id)) return false;
    const invalid = pending.items.filter(item => item.error);
    if (invalid.length) throw new Error(invalid.map(item => `${item.title || '空白节点'}：${item.error}`).join(' ') + ' 整批未插入。');
    setCheckingReferences(true);
    const abort = new AbortController(); referenceCheck.current = abort;
    try {
      await request(`/projects/${projectId}/chat-references/validate`, {
        signal: abort.signal,
        ...json('POST', { content, selections: pending.items.map(item => ({ nodeId: item.nodeId, assetId: item.assetId, fingerprint: item.asset!.fingerprint })) }),
      });
      if (!alive.current || !pendingReferences.isCurrent(pending.id)) return false;
      setReferenceAssets(current => [...new Map([...current, ...pendingAssets].map(asset => [asset.id, asset])).values()]);
      return true;
    } finally { if (referenceCheck.current === abort) referenceCheck.current = null; if (alive.current) setCheckingReferences(false); }
  }
  async function loadReferences() {
    if (!projectId) return;
    setReferencesLoading(true); setReferencesError('');
    try {
      const snapshot = await request<CanvasSnapshot>(`/projects/${projectId}/canvas`);
      const nodes = new Map((snapshot.referenceSources ?? snapshot.canvas.nodes).filter(node => node.assetId).map(node => [node.assetId, node]));
      if (alive.current) { setReferenceAssets(snapshot.assets.filter(asset => snapshot.availableAssetIds.includes(asset.id)).map(asset => ({ ...asset, nodeTitle: nodes.get(asset.id)?.title, nodeId: nodes.get(asset.id)?.id }))); }
    }
    catch (failure) { if (alive.current) setReferencesError(errorMessage(failure)); }
    finally { if (alive.current) setReferencesLoading(false); }
  }
  const history = useRef<HTMLDivElement>(null);
  const controller = useRef<AbortController | null>(null);
  const alive = useRef(false);
  const submitting = useRef(false);
  const creation = useRef<{ id: string; turnId: string } | null>(null);
  const initialHandled = useRef(false);
  const retryTurn = useRef<string | null>(null);
  const nearBottom = useRef(true);

  useEffect(() => {
    alive.current = true;
    let cancelled = false;
    void (projectId ? loadConversation(projectId) : Promise.resolve(emptyConversation())).then(value => { if (!cancelled) { setConversation(value); setLoaded(true); setError(''); } }).catch(error => {
      if (!cancelled) setError(`读取对话失败：${errorMessage(error)}`);
    });
    return () => {
      cancelled = true; alive.current = false; controller.current?.abort();
    };
  }, [scope, loadAttempt]);
  useEffect(() => { if (loaded && projectId) void loadReferences(); }, [loaded, projectId]);
  useLayoutEffect(() => { if (loaded && projectId) rememberConversation(projectId, conversation); }, [projectId, loaded, conversation]);
  useEffect(() => { onBusyChange(sending || adding || !!initialTurnId); }, [sending, adding, initialTurnId, onBusyChange]);
  useEffect(() => {
    if (!loaded || !modelCatalog.loaded) return;
    const selections = { ...conversation.modelSelections };
    let changed = false;
    let removed = false;
    for (const kind of MODEL_KINDS) {
      const selected = selections[kind.id];
      const options = modelCatalog.models.filter(model => model.kind === kind.id);
      if (selected == null && options.length) {
        selections[kind.id] = options[0].id;
        changed = true;
      } else if (selected && !options.some(model => model.id === selected)) {
        selections[kind.id] = options[0]?.id ?? null;
        changed = removed = true;
      }
    }
    if (changed) setConversation(current => ({ ...current, modelSelections: selections }));
    if (removed) setModelNotice('所选模型已被删除，已更新模型选择，请确认。');
  }, [loaded, modelCatalog.loaded, modelCatalog.models, conversation.modelSelections]);
  useEffect(() => {
    if (!loaded || !projectId) return;
    const timer = window.setTimeout(() => {
      void saveConversation(scope, conversation).catch(error => { if (alive.current) setError(`保存对话失败，当前内容尚未丢弃：${errorMessage(error)}`); });
    }, 180);
    return () => clearTimeout(timer);
  }, [scope, conversation, loaded]);
  useEffect(() => {
    if (!initialTurnId || !loaded || !modelCatalog.loaded || initialHandled.current) return;
    // Defer until mount settles: StrictMode's disposable effect must not send.
    const timer = window.setTimeout(() => {
      if (initialHandled.current) return;
      initialHandled.current = true;
      onInitialTurnHandled();
      if (!conversation.messages.some(message => message.id === initialTurnId)) void send(initialTurnId);
    }, 0);
    return () => clearTimeout(timer);
  }, [initialTurnId, loaded, modelCatalog.loaded]);
  useEffect(() => {
    if (nearBottom.current && history.current) history.current.scrollTop = history.current.scrollHeight;
  }, [conversation.messages, production.messages]);

  function selectModel(kind: ModelKind, id: string) {
    setConversation(current => ({ ...current, modelSelections: { ...current.modelSelections, [kind]: id || null } }));
    setModelNotice('');
  }
  async function send(initialId?: string) {
    if (!loaded || submitting.current || sending || adding || checkingReferences || (!conversation.draft.trim() && !conversation.assets.length)) return;
    const model = modelCatalog.models.find(item => item.kind === 'agent' && item.id === conversation.modelSelections.agent);
    if (!model) { setError('请先配置并选择 Agent 模型。'); return; }
    pendingReferences.cancel();
    submitting.current = true;
    onBusyChange(true);
    const id = initialId ?? retryTurn.current ?? crypto.randomUUID();
    retryTurn.current = id;
    turnId.current = id;
    const abort = new AbortController();
    controller.current = abort;
    nearBottom.current = true; setSending(true); setStarted(false); setThinkingNow(false); setError(''); setToolNotice('');
    let accepted = false;
    try {
      if (!projectId) {
        creation.current ??= { id: crypto.randomUUID(), turnId: id };
        setToolNotice('正在创建项目…');
        await onCreateProject({ ...creation.current, modelId: model.id, conversation });
        return;
      }
      await beforeSend?.();
      await flushConversation(scope);
      if (abort.signal.aborted) return;
      for await (const event of streamChat(scope, { id, modelId: model.id, text: conversation.draft.trim(), content: conversation.draftContent ?? null, assets: conversation.assets.map(asset => asset.id), thinking: conversation.thinking, modelSelections: conversation.modelSelections, selectedNodeId: selectedNode?.id ?? null, selectedShotId: selectedShot?.id ?? null }, abort.signal)) {
        if (!alive.current) return;
        if (event.type === 'start') {
          accepted = true; retryTurn.current = null;
          setStarted(true);
          setConversation(current => ({ ...current, messages: event.conversation.messages, draft: '', draftContent: null, assets: [] }));
        } else if (event.type === 'tool') {
          const labels: Record<string, string> = { read_project: '读取项目', read_text_asset: '读取文本', save_text_asset: '保存文本', generate_asset: '提交生成', get_generation_task: '查看制作状态', create_storyboard_shot: '创建镜头', edit_storyboard_shot: '更新镜头', set_shot_asset: '采用镜头素材', reorder_storyboard: '调整镜头顺序', start_production_plan: '登记制作计划', list_production_plans: '查看制作计划', get_production_plan: '核对镜头与素材', repair_production_step: '登记局部制作', control_production_plan: '处理制作进度' };
          setToolNotice(event.error ? `本次操作未完成：${event.error}` : event.message ?? (event.name === 'start_production_plan' && event.status === 'complete' ? '制作计划已开始，进度将在下方更新。' : event.name === 'generate_asset' && event.status === 'complete' ? '生成请求已提交，完成后会显示到画布。' : `${labels[event.name] ?? '处理创作请求'}${event.status === 'running' ? '中…' : '已完成'}`));
          if (event.status === 'complete') onCanvasChange(event);
        } else if (event.type === 'thinking') setThinkingNow(true);
        else if (event.type === 'delta') {
          setThinkingNow(false);
          setConversation(current => ({ ...current, messages: current.messages.map(message => message.id === id ? { ...message, text: message.text + event.text } : message) }));
        } else if (event.type === 'end') {
          if (event.conversation) setConversation(current => ({ ...current, messages: event.conversation!.messages }));
          if (event.error) throw new Error(event.error);
        }
      }
    } catch (failure) {
      if (alive.current) {
        // A lost response may still have reached the server. Recover the saved
        // turn before allowing a retry to invoke the model a second time.
        if (projectId && !accepted && !abort.signal.aborted) {
          try {
            const saved = await loadConversation(projectId);
            if (!alive.current) return;
            if (saved.messages.some(message => message.id === id)) {
              setConversation(saved);
              retryTurn.current = null;
            }
          } catch { /* Reuse this turn ID until acceptance can be established. */ }
        }
        setConversation(current => ({ ...current, messages: current.messages.map(message => message.id === id && message.status === 'streaming' ? { ...message, status: 'interrupted' } : message) }));
        if (!abort.signal.aborted) setError(errorMessage(failure));
      }
    } finally { submitting.current = false; if (alive.current) { controller.current = null; turnId.current = null; setSending(false); setStarted(false); setStopping(false); setToolNotice(current => current === '正在创建项目…' ? '' : current); } }
  }
  async function stop() {
    if (!turnId.current || stopping) return;
    setStopping(true);
    try { await request(`/data/${scope}/chat/${turnId.current}/stop`, { method: 'POST' }); }
    catch (failure) { setError(`停止回复失败：${errorMessage(failure)}`); setStopping(false); }
  }
  const agent = modelCatalog.models.find(item => item.kind === 'agent' && item.id === conversation.modelSelections.agent);
  const metadataOnlyKinds = metadataOnlyReferenceKinds(modelCatalog.models.find(item => item.kind === 'video' && item.id === conversation.modelSelections.video));

  return <div className={`assistant-chat${dragOver ? ' is-drag-over' : ''}`}
    onDragOver={event => { if (event.dataTransfer.types.includes('Files')) { event.preventDefault(); setDragOver(true); } }}
    onDragLeave={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setDragOver(false); }}
    onDrop={event => { if (event.dataTransfer.files.length) { event.preventDefault(); setDragOver(false); void uploads.upload([...event.dataTransfer.files]); } }}>
    {selectedShot && <div className="assistant-shot-context"><Icon name="storyboard" /><div><small>当前镜头 {String(selectedShot.number).padStart(2, '0')}</small><strong>{selectedShot.title}</strong></div></div>}
    <div ref={history} className="chat-history" role="log" aria-label="对话消息" aria-live="polite" onScroll={event => { const element = event.currentTarget; nearBottom.current = element.scrollHeight - element.scrollTop - element.clientHeight < 80; }}>
      {messages.length === 0 ? <div className="assistant-welcome">
        <div className="assistant-avatar"><img src={logo} alt="" /></div>
        <h1>从一个想法开始</h1>
        <p>和 MuseShow 一起构思你的下一部作品。<br />描述故事，或输入 @ 添加图片、视频、音频与文本参考。</p>
      </div> : <div className="message-list">{messages.map(message => 'planId' in message
        ? <ProductionMessage key={message.id} message={message} projectId={projectId} onUpdated={() => onCanvasChange({})} onLocate={onLocateNode} enabled={production.canAct(message)} onAction={action => void production.act(message, action, conversation.messages.at(-1)?.id ?? null)} />
        : <article key={message.id} className={`chat-message message-${message.role}`}>
        <div className="message-heading">{message.role === 'assistant' ? <><Icon name="sparkles" /><span>MuseShow</span>{message.source === 'preview' ? <span className="preview-tag">历史预览回复</span> : <span>{message.model}</span>}</> : <span>你</span>}</div>
        {message.role === 'user' ? <div className="message-content"><ReferenceText scope={scope} text={message.text} content={message.content} assets={message.assets} currentAssets={pendingReferences.currentAssets} metadataOnlyKinds={metadataOnlyKinds} /></div>
          : <div className="message-content">{message.text || (message.status === 'streaming' ? <span className="reply-pending">{thinkingNow ? '正在思考' : '正在回复'}<span>···</span></span> : '本次回复未生成内容。')}{message.status === 'streaming' && message.text && <span className="stream-cursor" />}</div>}
        {(message.status === 'stopped' || message.status === 'interrupted') && <div className="message-status">{message.status === 'stopped' ? '已停止回复' : '回复已中断'}</div>}
      </article>)}</div>}
      <Feedback value={production.issue} className="chat-error" readLabel="重新读取制作状态" onRead={production.refresh} />
    </div>
    <div className="composer-area">
      {selectedNode && <p className="composer-footnote">当前节点：{selectedNode.title || `${NODE_LABELS[selectedNode.kind]}节点`}</p>}
      {toolNotice && <p className="composer-footnote" role="status">{toolNotice}</p>}
      {error && <div className="chat-error" role="alert"><span>{error}</span>{!loaded && <button className="secondary-button" onClick={() => setLoadAttempt(value => value + 1)}>重新加载</button>}<button className="icon-button" aria-label="关闭助手提示" onClick={() => setError('')}><Icon name="close" /></button></div>}
      {modelNotice && <div className="chat-error" role="alert"><span>{modelNotice}</span><button className="icon-button" aria-label="关闭模型提示" onClick={() => setModelNotice('')}><Icon name="close" /></button></div>}
      {modelCatalog.error && <div className="chat-error" role="alert"><span>{modelCatalog.error}</span><button className="secondary-button" disabled={modelCatalog.loading || modelCatalog.busy} onClick={() => void modelCatalog.refresh()}>重新读取模型列表</button></div>}
      <form className="chat-composer reference-composer" aria-label="聊天输入框" onSubmit={event => { event.preventDefault(); void send(); }}>
        {pending && <PendingReferences pending={pending} metadataOnlyKinds={metadataOnlyKinds} onCancel={pendingReferences.cancel} disabled={editorDisabled || checkingReferences} />}
        <ReferenceEditor ref={editor} scope={scope} label="消息内容" placeholder="描述你的想法，输入 @ 引用项目资产…" value={referenceContent(conversation.draft, conversation.assets.map(asset => asset.id), conversation.assets, conversation.draftContent)}
          assets={referenceCatalog} availableIds={uploads.availableIds} imageLimit={32 * 1024 * 1024} metadataOnlyKinds={metadataOnlyKinds} disabled={editorDisabled} onLoadAssets={loadReferences} loading={referencesLoading} loadError={referencesError}
          pendingReferences={pendingAssets} confirmationKey={pending?.id} onConfirmReferences={pending ? confirmReferences : undefined} onReferencesInserted={() => { if (pending) pendingReferences.consume(pending.id); }}
          onChange={content => setConversation(current => {
            const catalog = new Map(referenceCatalog.map(asset => [asset.id, asset]));
            return { ...current, draftContent: content, draft: contentText(content), assets: referenceIds(content).flatMap(id => { const asset = catalog.get(id); return asset ? [attachment(asset)] : []; }) };
          })} onPasteFiles={files => void uploads.upload(files)} onSubmit={() => void send()} />
        <div className="composer-toolbar">
          <button type="button" className="icon-button upload-button" title="上传参考图片、视频、音频或文本" aria-label="上传参考" disabled={!loaded || sending || adding || conversation.assets.length >= LIMIT} onMouseDown={event => event.preventDefault()} onClick={uploads.open}><Icon name={adding ? 'upload' : 'plus'} /></button>
          {projectId && <button type="button" className="icon-button" aria-label="从项目资产添加" title="引用项目资产（@）" disabled={!loaded || sending || adding} onMouseDown={event => event.preventDefault()} onClick={() => editor.current?.openPicker()}><Icon name="folder" /></button>}
          <ModelPicker models={modelCatalog.models} selections={conversation.modelSelections} disabled={!loaded || !modelCatalog.loaded || (sending && !projectId)} onChange={selectModel} onConfigure={onModelSettings} />
          <div className="composer-toolbar-spacer" />
          <ChoicePicker label="思考程度" icon="thinking" options={THINKING} disabled={!loaded || (sending && !projectId)} value={conversation.thinking} onChange={thinking => setConversation(current => ({ ...current, thinking: thinking as Thinking }))} />
          {sending ? <button type="button" className="send-button stop-button" aria-label="停止回复" title="停止回复" disabled={!started || stopping} onClick={() => void stop()}><Icon name="stop" /></button>
            : <button type="submit" className="send-button" aria-label="发送消息" title="发送消息（Enter）" disabled={!loaded || !agent || adding || checkingReferences || (!conversation.draft.trim() && !conversation.assets.length)}><Icon name="arrow-up" /></button>}
        </div>
        {uploads.picker}
        {uploads.notice && <p className={uploads.hasError ? 'reference-warning' : 'asset-hint'} role="status">{uploads.notice}</p>}
      </form>
      <p className="composer-footnote">{agent ? `Agent · ${agent.modelId}` : '请先在设置中配置并选择 Agent 模型'}</p>
    </div>
    {dragOver && <div className="asset-drop-overlay"><Icon name="upload" /><span>松开以添加参考素材</span><small>图片、视频、音频或文本；可按所选视频模型的能力作为生成参考</small></div>}
  </div>;
}
