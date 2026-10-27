import type { ReferenceContent } from '../references/content';
import type { ProjectAsset } from '../assets/types';
import { AssetPreview } from '../assets/components/AssetPreview';
import { GenerationInput } from '../assets/components/GenerationInput';
import type { NodeKind, CanvasNode } from '../canvas/types';
import './review.css';

export interface AssetVersion { number: number; asset: ProjectAsset; recorded: boolean; prompt: string | null; promptContent?: ReferenceContent | null; currentPromptContent?: ReferenceContent | null; videoMode?: 'first_frame' | 'reference' | 'continuation'; referenceIds: string[]; referenceFingerprints: Record<string, string>; modelConfigId: string | null; modelName: string | null; applicableModelConfigId: string | null; available: boolean; applied: boolean }
export function VersionHistory({ projectId, kind, versions, assets, nodes, currentId, adoptedIds = [], selectedId, onSelect, onApply, busy, canApply = true }: {
  projectId: string; kind: NodeKind; versions: AssetVersion[]; assets: ProjectAsset[]; nodes: CanvasNode[]; currentId?: string | null; adoptedIds?: string[];
  selectedId: string; onSelect: (id: string) => void; onApply: (version: AssetVersion) => void; busy: boolean; canApply?: boolean;
}) {
  return <section className="version-history" aria-label="历史版本列表">
    {!versions.length && <p className="asset-hint">暂无历史版本。</p>}
    {versions.slice().reverse().map(version => { const asset = version.asset; const expanded = selectedId === asset.id; return <article key={asset.id} className="version-entry">
      <button type="button" className="version-entry-heading" aria-expanded={expanded} disabled={busy} onClick={() => onSelect(asset.id)}>
        <strong>v{version.number} · {asset.name}</strong><span>{asset.source === 'upload' ? '上传' : asset.source === 'manual' ? '手动保存' : asset.source === 'legacy' ? '历史导入' : '模型生成'}</span>
        {asset.id === currentId && <small>当前画布</small>}{adoptedIds.includes(asset.id) && <small>分镜已用</small>}
        {asset.source === 'generated' && <span>{version.modelName ?? '模型未记录'}{version.modelConfigId && !version.applicableModelConfigId && '（配置不可用）'}</span>}
        {asset.createdAt && <time dateTime={asset.createdAt}>{new Date(asset.createdAt).toLocaleString('zh-CN')}</time>}
      </button>
      {expanded && <div className="version-entry-body">
        <div className="review-preview">{version.available ? <AssetPreview projectId={projectId} asset={asset} /> : <p role="alert">资产文件缺失，无法应用此版本。</p>}</div>
        {asset.source === 'generated' && <GenerationInput projectId={projectId} kind={kind} videoMode={version.videoMode} assets={assets} prompt={version.prompt ?? ''} content={version.currentPromptContent ?? version.promptContent} referenceIds={version.currentPromptContent ? [] : version.referenceIds} readOnly fingerprints={version.referenceFingerprints}
          placeholder="此版本未记录生成要求。" />}
        {asset.source === 'generated' && version.referenceIds.length > 0 && <details className="version-original-references"><summary>生成时的参考</summary>{version.referenceIds.map(id => { const source = nodes.find(node => node.assetIds.includes(id)); return <p key={id}>{assets.find(asset => asset.id === id)?.name ?? '参考缺失'}{source ? ` · v${source.assetIds.indexOf(id) + 1}` : ''}</p>; })}</details>}
        <button type="button" className="secondary-button" disabled={busy || !canApply || !version.available || version.applied} onClick={() => onApply(version)}>{version.applied ? '已应用' : '应用到画布'}</button>
      </div>}
    </article>; })}
  </section>;
}
