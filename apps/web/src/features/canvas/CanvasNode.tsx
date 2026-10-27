import type { ReferenceContent } from '../references/content';
import { currentReferences, contentText, referenceContent, referenceIds } from '../references/content';
import { useEffect, useLayoutEffect, useRef, useState, type PointerEvent } from 'react';
import { useConfirmation } from '../../lib/useConfirmation';
import { ConfirmationDialog } from '../assets/components/ConfirmationDialog';
import { Icon } from '../../components/Icon';
import { AssetDialog } from '../assets/components/AssetDialog';
import { AssetPreview } from '../assets/components/AssetPreview';
import { GenerationInput } from '../assets/components/GenerationInput';
import { CanvasVersionDialog } from '../production-review/CanvasVersionDialog';
import { NodeDetailsPanel } from './NodeDetailsPanel';
import { CanvasMedia, CanvasVideoPreview } from './CanvasMedia';
import { GeneratingOverlay } from './GeneratingOverlay';
import type { CanvasPlayback } from './useCanvasPlayback';
import type { NodeDetails } from './useNodeDetails';
import { useAsset } from '../assets/useAsset';
import { ACCEPT_BY_KIND } from '../assets/types';
import '../assets/assets.css';
import type { ModelCatalog } from '../settings/hooks/useModelConfigs';
import { canvasReferenceAssets, NODE_LABELS, NODE_SIZE, type CanvasNode as Node, type NodeChanges } from './types';
import type { ProjectCanvas } from './useProjectCanvas';

function nodeInputs(node: Node): { prompt: string; referenceIds: string[]; promptContent: ReferenceContent | null; videoMode: Node['videoMode'] } {
  return { prompt: node.prompt, referenceIds: node.referenceIds, promptContent: node.promptContent ?? null, videoMode: node.videoMode ?? 'first_frame' };
}

export function CanvasNode({ projectId, node, canvas, models, details, onDrag, onResize, onHover, playback, previewEnabled }: { projectId: string; node: Node; canvas: ProjectCanvas; models: ModelCatalog; details: NodeDetails; onDrag: (event: PointerEvent, node: Node) => void; onResize: (id: string, size: typeof NODE_SIZE | null) => void; onHover: (id: string | null) => void; playback: CanvasPlayback; previewEnabled: boolean }) {
  const asset = canvas.snapshot?.assets.find(item => item.id === node.assetId);
  const media = useAsset(projectId, asset);
  const task = canvas.snapshot?.tasks.find(item => item.id === node.taskId);
  const running = task?.status === 'queued' || task?.status === 'running';
  const material = node.role === 'material';
  const generation = node.role === 'generation';
  const uncertain = canvas.feedback[node.id]?.kind === 'uncertain';
  const showGeneration = !material;
  const recoverable = task && task.status !== 'succeeded' && (task.resumeAllowed || task.recovery === 'review');
  const title = node.title;
  const [generationInput, setGenerationInput] = useState(() => nodeInputs(node));
  const { prompt, referenceIds: references, promptContent } = generationInput;
  const dirtyInput = useRef(false);
  const inputVersion = useRef(0);
  const [draft, setDraft] = useState(node.draft ?? '');
  const currentDraft = useRef(draft); currentDraft.current = draft;
  const textAssetId = useRef(node.assetId);
  const [editingText, setEditingText] = useState(false);
  const textElement = useRef<HTMLDivElement | HTMLTextAreaElement>(null);
  const textScroll = useRef(0);
  const textVersion = useRef(0);
  const savingText = useRef(false);
  const focusTextOnExit = useRef(false);
  const detailsOpen = details.id === node.id;
  const [closing, setClosing] = useState(false);
  const [uploadingReference, setUploadingReference] = useState(false);
  const [recoveryFeedback, setRecoveryFeedback] = useState<{ taskId: string; message: string; pending: boolean } | null>(null);
  const recoveryRequest = useRef<string | null>(null);
  const feedback = recoveryFeedback?.taskId === node.taskId ? recoveryFeedback : null;
  const recovering = !!feedback?.pending;
  const [dialog, setDialog] = useState<'preview' | 'review' | null>(null);
  const confirmation = useConfirmation(`${projectId}:${node.id}`);
  const closeDialog = () => setDialog(null);
  const [modelId, setModelId] = useState(node.modelConfigId ?? '');
  const input = useRef<HTMLInputElement>(null);
  const root = useRef<HTMLElement>(null);
  const dirtyText = useRef(false);
  useLayoutEffect(() => {
    playback.blockPreview(node.id, dialog !== null);
    return () => playback.blockPreview(node.id, false);
  }, [node.id, dialog, playback.blockPreview]);
  useLayoutEffect(() => {
    if (!textElement.current) return;
    textElement.current.scrollTop = textScroll.current;
    if (editingText || focusTextOnExit.current) textElement.current.focus({ preventScroll: true });
    focusTextOnExit.current = false;
  }, [editingText]);
  const options = models.models.filter(item => item.kind === (node.kind === 'text' ? 'agent' : node.kind));
  const selectedModel = modelId || options[0]?.id || '';
  const modelAvailable = options.some(model => model.id === selectedModel);
  const rules = options.find(model => model.id === selectedModel)?.inputRules;
  const availableAssetIds = canvas.snapshot?.availableAssetIds ?? [];
  const referencesAvailable = references.every(id => availableAssetIds.includes(id));
  const visibleAssets = new Set(canvas.snapshot?.canvas.nodes.map(item => item.assetId));
  const hiddenReferences = references.filter(id => availableAssetIds.includes(id) && !visibleAssets.has(id));
  useEffect(() => {
    const incoming = nodeInputs(node);
    // Queued saves may contain an earlier draft. Only an explicit save of the
    // latest edit can release this guard, even if an older response looks equal.
    if (dirtyInput.current) return;
    setGenerationInput(incoming);
  }, [node.id, node.prompt, node.referenceIds.join(','), JSON.stringify(node.promptContent), node.videoMode]);
  useEffect(() => {
    const sources = canvasReferenceAssets(canvas.snapshot);
    setGenerationInput(current => {
      if (!current.referenceIds.length) return current;
      const content = currentReferences(referenceContent(current.prompt, current.referenceIds, sources, current.promptContent), sources);
      return JSON.stringify(content) === JSON.stringify(current.promptContent) ? current : { ...current, promptContent: content, prompt: contentText(content, node.kind === 'audio'), referenceIds: referenceIds(content) };
    });
  }, [canvas.snapshot?.canvas.revision]);
  useEffect(() => {
    recoveryRequest.current = null; setRecoveryFeedback(null);
    return () => { recoveryRequest.current = null; };
  }, [projectId, node.taskId]);
  useEffect(() => { setModelId(node.modelConfigId ?? ''); }, [node.id, node.modelConfigId]);
  useEffect(() => {
    if (material) { dirtyInput.current = false; setGenerationInput(nodeInputs(node)); }
  }, [material]);
  useEffect(() => {
    // Accept undo/redo and saved versions without replacing an in-progress edit.
    if (savingText.current && dirtyText.current) { textAssetId.current = node.assetId; return; }
    if (!dirtyText.current || textAssetId.current !== node.assetId) {
      dirtyText.current = false; setDraft(node.draft ?? media.text);
    }
    textAssetId.current = node.assetId;
  }, [node.assetId, node.draft, media.text]);
  useEffect(() => {
    const element = root.current!;
    const observer = new ResizeObserver(() => onResize(node.id, { width: element.offsetWidth, height: element.offsetHeight }));
    observer.observe(element);
    return () => { observer.disconnect(); onResize(node.id, null); };
  }, [node.id, onResize]);
  const perform = (action: Promise<unknown>) => { void action.catch(() => {}); };
  function patch(changes: NodeChanges) {
    const version = inputVersion.current;
    return canvas.patch(node.id, changes).then(value => {
      if ('promptContent' in changes && version === inputVersion.current) dirtyInput.current = false;
      return value;
    });
  }
  function persist(changes: NodeChanges) { perform(patch(changes)); }
  const fields = { ...generationInput, modelConfigId: selectedModel || null };
  const name = title || asset?.name || `${NODE_LABELS[node.kind]}节点`;
  const playable = asset && media.url && !media.error && (node.kind === 'video' || node.kind === 'audio');
  function openDetails() {
    if (details.show(node.id)) canvas.selectNode(node.id);
  }
  function openPreview() {
    playback.pauseAll();
    canvas.selectNode(node.id);
    setDialog('preview');
  }
  function editText() {
    if (running) return;
    if (generation) { openPreview(); return; }
    canvas.selectNode(node.id);
    setEditingText(true);
  }
  function confirmMaterialConversion(action: 'upload' | 'text') {
    return confirmation.ask({
      title: '转为素材节点',
      message: `「${name}」${action === 'upload' ? '上传文件' : '保存文本'}后将成为素材节点，提示词和上游参考将被清除，下游引用将保留。此操作可撤销。`,
      confirmLabel: action === 'upload' ? '上传并转换' : '保存并转换',
    });
  }
  async function finishTextEditing() {
    if (savingText.current) return;
    const version = textVersion.current;
    let saved = false;
    savingText.current = true;
    try {
      if (dirtyText.current) {
        const discard = node.role === 'empty' && !!(prompt.trim() || references.length || node.prompt.trim() || node.referenceIds.length);
        if (discard && !await confirmMaterialConversion('text')) return;
        await canvas.saveText(node.id, currentDraft.current, title, discard);
      }
      saved = true;
      if (version === textVersion.current) { dirtyText.current = false; setEditingText(false); }
    } catch { focusTextOnExit.current = false; /* Retain the editable draft and this node's save error. */ }
    finally { savingText.current = false; }
    // A second blur can arrive while an earlier save is still in flight. Save
    // the latest draft after it, without replacing text typed in the meantime.
    if (saved && version !== textVersion.current && textElement.current !== document.activeElement) void finishTextEditing();
  }
  async function uploadFile(file: File) {
    const discard = !!(prompt.trim() || references.length || node.prompt.trim() || node.referenceIds.length);
    if (discard && !await confirmMaterialConversion('upload')) return;
    try {
      await canvas.flush();
      await canvas.upload(node.id, file, discard);
      dirtyInput.current = false; inputVersion.current += 1;
    } catch { /* Keep inputs and the node's own failure feedback. */ }
  }
  function dragNode(event: PointerEvent<HTMLElement>) {
    const target = event.target as HTMLElement;
    if (!root.current?.contains(target)) return;
    if (target.closest('button,input,textarea,select,[contenteditable="true"]')) { canvas.selectNode(node.id); return; }
    // Preserve native scrollbar dragging in the read-only text body, including
    // when the whole canvas is scaled.
    const text = target.closest<HTMLElement>('.canvas-text-content');
    if (text) {
      const rect = text.getBoundingClientRect();
      const gutter = (text.offsetWidth - text.clientWidth) * rect.width / text.offsetWidth;
      if (event.clientX >= rect.right - gutter) { canvas.selectNode(node.id); return; }
    }
    onDrag(event, node);
  }
  async function applied(value: Node) {
    dirtyText.current = false;
    setGenerationInput(nodeInputs(value)); inputVersion.current += 1; dirtyInput.current = false; setModelId(value.modelConfigId ?? '');
    setDraft(value.draft ?? '');
    await canvas.refresh();
  }
  async function recoverTask() {
    if (!task || recoveryRequest.current || canvas.busy) return;
    const taskId = task.id;
    recoveryRequest.current = taskId;
    setRecoveryFeedback({ taskId, pending: true, message: '正在核对已有任务记录和结果…' });
    try {
      const result = await canvas.recover(taskId);
      if (recoveryRequest.current !== taskId) return;
      const message = result.recovery === 'review'
        ? '核对完成，当前仍需人工确认。请查看下方原因并到供应商控制台核对；本次未重新提交生成。'
        : result.status === 'succeeded'
          ? '核对完成，已有结果已保存。'
          : result.status === 'queued' || result.status === 'running'
            ? result.recovery === 'submit' ? '原任务尚未提交，已安排首次生成。' : '已安排恢复原任务，将继续查询、下载或处理已有结果。'
            : '核对完成，任务仍未完成，请查看下方原因。';
      setRecoveryFeedback({ taskId, pending: false, message });
    } catch {
      if (recoveryRequest.current === taskId) setRecoveryFeedback({ taskId, pending: false, message: '本次核对未完成，请查看下方错误信息；不会自动重复提交。' });
    } finally { if (recoveryRequest.current === taskId) recoveryRequest.current = null; }
  }
  async function closeDetails() {
    if (closing) return;
    setClosing(true);
    const changes: NodeChanges = {};
    // Current-reference hydration is display synchronization, not a user edit.
    if (showGeneration && dirtyInput.current) Object.assign(changes, generationInput);
    try {
      if (Object.keys(changes).length) await patch(changes);
      details.dismiss(node.id);
    } catch { /* Keep the editor open so its error and draft remain visible. */ }
    finally { setClosing(false); }
  }
  return <article ref={root} data-node-id={node.id} className={`canvas-node${canvas.selectedIds.includes(node.id) ? ' is-selected' : ''}`} style={{ left: node.x, top: node.y, width: NODE_SIZE.width }} aria-label={`${NODE_LABELS[node.kind]}节点：${title || asset?.name || '未命名'}`} onPointerDown={dragNode}
    onPointerEnter={event => { if (event.pointerType !== 'touch') { onHover(node.id); details.enter(node.id); } }} onPointerLeave={() => { onHover(null); details.leave(node.id); }}>
    <header className="canvas-node-header" title="按住卡片移动节点">
      <Icon name={node.kind === 'text' ? 'file' : node.kind} />
      <span className="canvas-node-title">{name}</span>
      {node.role !== 'empty' && <span className="canvas-node-role">{material ? '素材' : '生成'}</span>}
      {canvas.snapshot?.inputChanges?.includes(node.id) && <span className="canvas-node-status" title="生成要求或参考已变化，当前展示结果保持不变。">有待生成修改</span>}
      {(running || task?.error) && <span className={`canvas-node-status${task?.error && !running ? ' has-error' : ''}`} role="status">{running ? task.status === 'queued' ? '等待中' : '生成中' : '任务异常'}</span>}
      <button type="button" className="icon-button" title="节点详情" aria-label={`${NODE_LABELS[node.kind]}节点详情：${name}`} aria-haspopup="dialog" aria-expanded={detailsOpen} onPointerDown={event => event.stopPropagation()} onClick={openDetails}><Icon name="more" /></button>
    </header>
    {!!hiddenReferences.length && <button type="button" className="canvas-hidden-references" disabled={canvas.busy} onPointerDown={event => event.stopPropagation()} onClick={() => perform(canvas.expandReferences(node.id))}>{hiddenReferences.length} 个参考未展开 · 展开参考</button>}
    <div className="canvas-node-body">
    {playable ? <CanvasMedia kind={node.kind as 'video' | 'audio'} url={media.url} name={name} durationMs={'durationMs' in asset ? asset.durationMs : null} playback={playback} previewEnabled={previewEnabled && dialog === null} onExpand={openPreview} onSelect={() => canvas.selectNode(node.id)} />
    : node.kind === 'text' ? editingText && !generation ? <textarea ref={element => { textElement.current = element; }} className="canvas-text-content is-editing" aria-label={`文本内容：${name}`} value={draft} disabled={running} maxLength={1024 * 1024}
      placeholder="编写文本内容，结束编辑后自动保存为素材。"
      onScroll={event => { textScroll.current = event.currentTarget.scrollTop; }}
      onPointerDown={event => event.stopPropagation()} onKeyDown={event => { event.stopPropagation(); if (event.key === 'Escape' && !event.nativeEvent.isComposing && event.nativeEvent.keyCode !== 229) { event.preventDefault(); focusTextOnExit.current = true; void finishTextEditing(); } }}
      onFocus={() => { details.show(node.id, false); }} onChange={event => { textVersion.current += 1; dirtyText.current = true; setDraft(event.target.value); }}
      onBlur={() => void finishTextEditing()} />
      : <div ref={element => { textElement.current = element; }} className="canvas-text-content" role="textbox" aria-readonly="true" aria-label={`文本内容：${name}`} tabIndex={0} title={generation ? '滚动查看全文，双击放大查看' : '滚动查看全文，双击编辑'}
        onScroll={event => { textScroll.current = event.currentTarget.scrollTop; }}
        onDoubleClick={event => { event.stopPropagation(); editText(); }}
        onKeyDown={event => { if (event.key === 'Enter') { event.preventDefault(); event.stopPropagation(); editText(); } }}>
        {draft || <span className="canvas-text-placeholder">{media.error || (asset && !media.url ? '正在读取文本…' : generation ? '在详情中输入要求生成文本。' : '双击编写文本，或打开详情上传、生成文本。')}</span>}
      </div>
    : <div role="button" tabIndex={0} data-canvas-open className={`canvas-node-preview${node.kind === 'image' && media.url && !media.error ? ' has-image' : ''}`} aria-label={`查看${NODE_LABELS[node.kind]}节点详情：${name}`} aria-haspopup="dialog" title="按住拖动，双击查看" onDoubleClick={event => {
      event.stopPropagation();
      if (node.kind === 'image' && asset && media.url && !media.error) openPreview();
      else openDetails();
    }} onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); event.stopPropagation(); if (node.kind === 'image' && asset && media.url && !media.error) openPreview(); else openDetails(); } }}>
      {media.error ? <span className="canvas-preview-placeholder">文件无法读取，双击查看详情</span>
        : asset && media.url ? <img src={media.url} alt={asset.name} draggable={false} />
        : <span className="canvas-preview-placeholder"><Icon name={node.kind} />{asset ? '正在读取内容…' : `悬停或双击添加${NODE_LABELS[node.kind]}内容`}</span>}
    </div>}
    {running && node.kind !== 'text' && <GeneratingOverlay task={task} kind={node.kind} hasResult={!!asset} />}
    </div>
    {detailsOpen && <NodeDetailsPanel id={node.id} title={`${NODE_LABELS[node.kind]}节点详情`} anchor={root} details={details} busy={closing || recovering || uploadingReference} compact={material}
      blocked={dialog !== null || confirmation.value !== null} onClose={() => void closeDetails()}>
    <div className="canvas-node-details">
      <div className="canvas-node-actions">
        <button type="button" className="secondary-button" onClick={() => {
          const changes: NodeChanges = {};
          if (showGeneration && dirtyInput.current) Object.assign(changes, generationInput);
          if (Object.keys(changes).length) perform(patch(changes));
          void canvas.flush().then(() => setDialog('review')).catch(() => {});
        }} disabled={!node.assetIds.length}>历史版本</button>
        {!generation && <button type="button" className="secondary-button" disabled={canvas.busy || uncertain || uploadingReference} onClick={() => input.current?.click()}><Icon name="upload" />{material ? '替换文件' : '上传为节点内容'}</button>}
        {node.kind === 'text' && !generation && <button type="button" className="secondary-button" disabled={canvas.busy} onClick={() => { details.dismiss(node.id); editText(); }}>编辑文本</button>}
        <button type="button" className="secondary-button canvas-node-remove" title="移除节点，保留项目资产" disabled={running || canvas.busy} onClick={() => perform(canvas.remove(node.id))}>移除节点</button>
      </div>
      {showGeneration && <>{node.kind === 'video' && <label className="canvas-video-mode">生成方式<select aria-label="视频生成方式" value={generationInput.videoMode} disabled={running || canvas.busy} onChange={event => {
        const value = { ...generationInput, videoMode: event.target.value as Node['videoMode'] }; inputVersion.current += 1; dirtyInput.current = true; setGenerationInput(value);
        perform(patch(value).catch(failure => { setGenerationInput(current => ({ ...current, videoMode: node.videoMode })); throw failure; }));
      }}><option value="first_frame" disabled={!!rules && !rules.videoModes.includes('first_frame')}>首帧生成</option><option value="reference" disabled={!rules?.videoModes.includes('reference')}>素材参考</option><option value="continuation" disabled={!rules?.videoModes.includes('continuation')}>接续上一段</option></select></label>}
      <GenerationInput projectId={projectId} targetNodeId={node.id} beforeUpload={canvas.flush} onUploading={setUploadingReference} onSaved={() => canvas.invalidate({})} kind={node.kind} rules={rules} videoMode={generationInput.videoMode} assets={canvas.snapshot?.assets ?? []} nodeTitles={Object.fromEntries((canvas.snapshot?.referenceSources ?? canvas.snapshot?.canvas.nodes ?? []).filter(item => item.assetId).map(item => [item.assetId!, item.title]))} nodeIds={Object.fromEntries((canvas.snapshot?.referenceSources ?? canvas.snapshot?.canvas.nodes ?? []).filter(item => item.assetId).map(item => [item.assetId!, item.id]))} availableAssetIds={availableAssetIds} prompt={prompt} referenceIds={references} content={promptContent} disabled={running}
        onChange={value => { inputVersion.current += 1; dirtyInput.current = true; setGenerationInput(current => ({ ...current, ...value }));
          if (references.join(',') !== value.referenceIds.join(',')) persist(value);
        }}
        onBlur={target => { if (!target?.closest('.canvas-generate-row') && dirtyInput.current) persist(generationInput); }}
        controls={<div className="canvas-generate-row"><label className="canvas-model-picker"><select aria-label="节点生成模型" value={selectedModel} disabled={running || canvas.busy} onChange={event => { const id = event.target.value; setModelId(id); const nextRules = options.find(item => item.id === id)?.inputRules; const mode = node.kind === 'video' && nextRules && !nextRules.videoModes.includes(generationInput.videoMode) ? nextRules.videoModes[0] : generationInput.videoMode; setGenerationInput(current => ({ ...current, videoMode: mode })); perform(patch({ modelConfigId: id || null, videoMode: mode }).catch(failure => { setModelId(node.modelConfigId ?? ''); throw failure; })); }}>
        {selectedModel && !modelAvailable && <option value={selectedModel}>原模型配置不可用，请重新选择</option>}<option value="">选择{node.kind === 'text' ? 'Agent' : NODE_LABELS[node.kind]}模型</option>{options.map(model => <option key={model.id} value={model.id}>{model.modelId}</option>)}
      </select></label>{running ? <button type="button" className="secondary-button" disabled={canvas.busy} onClick={() => perform(canvas.cancel(task.id))}>取消</button> : recoverable ? <button type="button" className="primary-button" disabled={canvas.busy || recovering} onClick={() => void recoverTask()}>{recovering ? task.recovery === 'review' ? '正在核对…' : '正在恢复…' : task.recovery === 'review' ? '重新核对任务' : '恢复已有任务'}</button> : <button type="button" className="primary-button" disabled={canvas.busy || uncertain || uploadingReference || !prompt.trim() || !modelAvailable || !referencesAvailable} onClick={() => perform(canvas.generate(node.id, fields))}><Icon name="sparkles" />生成</button>}</div>} />
      {!options.length && <p className="asset-hint">尚未配置对应类别的模型，请在左下角设置中添加。{node.role === 'empty' ? '也可上传素材。' : ''}</p>}
      {selectedModel && !modelAvailable && <p className="asset-error" role="alert">原模型配置不可用，请重新选择。</p>}
      </>}
      {feedback && <p className="canvas-task-state" role="status">{feedback.message}</p>}
      {running && <p className="canvas-task-state" role="status">{task.status === 'queued' ? '等待生成…' : '正在生成…'} 切换页面后仍会继续</p>}
      {task?.error && !running && <p className="canvas-inline-error" role="status">{task.error}</p>}
      {media.error && <p className="canvas-inline-error" role="status">{media.error}</p>}
      {!generation && <input ref={input} type="file" hidden accept={ACCEPT_BY_KIND[node.kind]} aria-label={`上传${NODE_LABELS[node.kind]}文件`} onChange={event => { const file = event.target.files?.[0]; if (file) void uploadFile(file); event.target.value = ''; }} />}
    </div>
    </NodeDetailsPanel>}
    {dialog === 'preview' && media.url && <AssetDialog title={asset?.name ?? '素材预览'} onClose={closeDialog}>{node.kind === 'video'
      ? <CanvasVideoPreview url={media.url} name={name} playback={playback} /> : node.kind === 'image'
        ? <img className="canvas-expanded-image" src={media.url} alt={asset?.name} /> : asset && <AssetPreview projectId={projectId} asset={asset} />}</AssetDialog>}
    {dialog === 'review' && <CanvasVersionDialog key={`${projectId}:${node.id}`} projectId={projectId} nodeId={node.id} onClose={closeDialog} onUpdated={() => canvas.invalidate({})} onApplied={applied} />}
    {confirmation.value && <ConfirmationDialog value={confirmation.value} onRespond={confirmation.respond} />}
  </article>;
}
