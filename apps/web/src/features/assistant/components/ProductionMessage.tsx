import { Icon } from '../../../components/Icon';
import { useState } from 'react';
import { ProductionStepDialog } from '../../production-review/ProductionStepDialog';
import { CanvasVersionDialog } from '../../production-review/CanvasVersionDialog';
import { ReferencePreview } from '../../references/ReferenceAsset';
import { ACTION_LABELS, type ProductionAction, type ProductionMessage as Entry, type ProgressStep, type ReferenceDifference } from '../production';

const STAGES: Record<string, string> = { prepare: '准备', submit: '提交', poll: '查询', download: '下载', check: '技术检查', save: '保存', adopt: '采用', cancel: '取消' };
export function ProductionMessage({ message, enabled, onAction, projectId, onUpdated, onLocate }: { message: Entry; enabled: boolean; onAction: (action: ProductionAction) => void; projectId?: string | null; onUpdated?: () => void; onLocate?: (nodeId: string) => void }) {
  const [stepId, setStepId] = useState<string | null>(null);
  const [preview, setPreview] = useState<ReferenceDifference | null>(null);
  const [reference, setReference] = useState<ReferenceDifference | null>(null);
  const snapshot = message.snapshot;
  const diagnosis = snapshot?.errorDetails;
  const settled = snapshot && !snapshot.activeCount && !snapshot.candidateCount && !snapshot.issueCount && !snapshot.actions.length;
  const historical = message.role === 'assistant' && !message.pending && (message.current === false || (message.primary === false && settled));
  const groups = new Map<string, ProgressStep[]>();
  for (const step of snapshot?.steps ?? []) { const key = step.shotId ?? step.id; groups.set(key, [...(groups.get(key) ?? []), step]); }
  const notable = [...groups.values()].filter(steps => steps.some(step => ['generating', 'queued', 'adopting', 'candidate', 'review', 'failed', 'cancelled', 'rejected'].includes(step.state)));
  const content = <>
    {message.text && <div className="message-content" role={message.pending ? 'status' : undefined}>{message.text}</div>}
    {message.error && <p className="production-error" role="alert">{message.error}</p>}
    {!message.pending && snapshot && <>
      {!historical && message.primary !== false && snapshot.delivery && <div className="production-delivery">
        <p>{snapshot.delivery.text}</p>
        {!!snapshot.delivery.totalShots && <progress aria-label="当前分镜可用进度" max={snapshot.delivery.totalShots} value={snapshot.delivery.readyShots} />}
        {!snapshot.delivery.ready && <details><summary>查看缺失或待核对素材</summary>{snapshot.delivery.problems.map((problem, index) => <p key={index}>{problem}</p>)}</details>}
      </div>}
      <div className="message-content">{snapshot.text}</div>
      <progress aria-label="本次制作生成进度" max={Math.max(1, snapshot.total)} value={snapshot.completed} />
      {!historical && <>
        {!!notable.length && <ul className="production-shot-status">{notable.slice(0, 4).map(steps => <li key={steps[0].shotId}><strong>{steps[0].shotTitle}</strong>：{steps.filter(step => step.state !== 'adopted' && step.state !== 'completed').map(step => `${step.title.split('｜').at(-1)} ${step.status}${['generating', 'queued'].includes(step.state) && step.nextAction ? `（${step.nextAction}）` : ''}`).join('；')}</li>)}{notable.length > 4 && <li>另有 {notable.length - 4} 镜，展开制作详情查看。</li>}</ul>}
        {snapshot.nextAction && <p className="message-status">{snapshot.nextAction}</p>}
      </>}
      <details className="production-step-details"><summary>制作详情</summary>
        {snapshot.script && <p>依据剧本：{snapshot.script.name}{snapshot.script.fingerprint && <><br />内容版本：{snapshot.script.fingerprint.slice(7, 19)}</>}</p>}
        {[...groups.values()].map(steps => <section key={steps[0].shotId ?? steps[0].id} className="production-shot-group"><strong>{steps[0].shotTitle ?? steps[0].title}</strong>{steps.map(step => <div key={step.id}>
          <p>{step.title} · {step.status}</p>{step.error && <p>{step.error}</p>}{step.nextAction && <p>{step.nextAction}</p>}
          {step.technicalCheck && <p>技术检查：{step.technicalCheck.status === 'passed' ? '文件检查通过；内容质量仍需人工确认。' : step.technicalCheck.message}</p>}
          {projectId && <button type="button" className="secondary-button" onClick={() => setStepId(step.id)}>历史版本</button>}
        </div>)}</section>)}
        {diagnosis && <p>失败阶段：{STAGES[diagnosis.stage] ?? diagnosis.stage}{diagnosis.httpStatus && ` · HTTP ${diagnosis.httpStatus}`}<br />{diagnosis.providerCode}{diagnosis.requestId && <><br />Request ID：{diagnosis.requestId}</>}</p>}
      </details>
      {!historical && message.primary !== false && !!snapshot.referenceDifferences?.length && <details className="production-reference-differences"><summary>视频参考与画布版本不同（{snapshot.referenceDifferences.length}）</summary>
        {snapshot.referenceDifferences.map(diff => <div key={`${diff.shotId}:${diff.asset.id}`}><strong>{diff.title}</strong><p>{diff.message}</p>
          <p>视频生成时：{diff.asset.name}{diff.usedVersion && ` · v${diff.usedVersion}`}<br />画布当前：{diff.currentName ?? '原节点不可用'}{diff.currentVersion && ` · v${diff.currentVersion}`}</p>
          <div className="production-actions"><button type="button" className="secondary-button" disabled={!diff.available} onClick={() => setPreview(diff)}>查看视频使用的关键帧</button>
            {diff.sourceNodeId && <><button type="button" className="secondary-button" onClick={() => onLocate?.(diff.sourceNodeId!)}>定位参考节点</button><button type="button" className="secondary-button" disabled={!diff.available} onClick={() => setReference(diff)}>选择该关键帧的画布版本</button></>}
          </div>
        </div>)}
        <p>切换后保留已有视频和分镜采用，后续参考跟随画布版本；生成时的原始依据保留。</p>
      </details>}
      {!!snapshot.actions.length && <div className="production-actions">{snapshot.actions.map(action => <button key={action} className="secondary-button" disabled={!enabled || historical} onClick={() => onAction(action)}>{ACTION_LABELS[action]}</button>)}</div>}
      {enabled && !historical && snapshot.actions.includes('resume') && <p className="message-status">沿用原设置，优先核对已有任务；提交结果不明时保持待核对。</p>}
    </>}
  </>;
  return <article className={`chat-message message-${message.role} production-message${historical ? ' production-history' : ''}`} data-current={message.current} data-plan-id={message.planId} aria-label={message.role === 'assistant' ? '制作状态消息' : '制作操作消息'}>
    {historical ? <details><summary>历史 · {message.createdAt && <time dateTime={message.createdAt}>{new Date(message.createdAt).toLocaleString('zh-CN')}</time>} · {snapshot?.title ?? snapshot?.text.split('\n')[0]} · {snapshot?.work?.title ?? '制作记录'} · {snapshot?.label ?? snapshot?.status ?? message.text}</summary>{content}</details> : <>
      <div className="message-heading">{message.role === 'assistant' ? <><Icon name="sparkles" /><span>MuseShow</span><span>制作状态</span></> : <span>你</span>}</div>{content}
    </>}
    {stepId && projectId && <ProductionStepDialog key={`${projectId}:${message.planId}:${stepId}`} projectId={projectId} planId={message.planId} stepId={stepId} onClose={() => setStepId(null)} onUpdated={() => onUpdated?.()} />}
    {preview && projectId && <ReferencePreview scope={projectId} asset={preview.asset} onClose={() => setPreview(null)} />}
    {reference?.sourceNodeId && projectId && <CanvasVersionDialog key={`${reference.sourceNodeId}:${reference.asset.id}`} projectId={projectId} nodeId={reference.sourceNodeId} initialAssetId={reference.asset.id} expectedRevision={reference.sourceRevision ?? undefined} onClose={() => setReference(null)} onUpdated={() => onUpdated?.()} />}
  </article>;
}
