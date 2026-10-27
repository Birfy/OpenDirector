import { Icon } from '../../../components/Icon';
import { ReferenceThumbnail } from '../../references/ReferenceAsset';
import { assetKind } from '../../references/content';
import type { PendingCanvasReferences } from '../hooks/usePendingCanvasReferences';

export function PendingReferences({ pending, onCancel, disabled, metadataOnlyKinds = ['video', 'audio'] }: { pending: PendingCanvasReferences; onCancel: () => void; disabled: boolean; metadataOnlyKinds?: string[] }) {
  return <div className="pending-references" data-pending-references aria-label="待插入参考">
    <div className="pending-reference-heading"><span role="status">待插入 {pending.items.length} 项 · {disabled ? '输入框暂不可用，请稍候' : '点击正文插入，点击外部或 Esc 取消'}</span>
      <button type="button" className="icon-button" aria-label="取消待插入参考" onClick={onCancel}><Icon name="close" /></button></div>
    <div className="pending-reference-list">{pending.items.map(item => <span key={item.nodeId} className={`pending-reference${item.error ? ' is-invalid' : ''}`} title={item.error ?? item.asset?.name}>
      <ReferenceThumbnail scope={pending.projectId} asset={item.asset ?? undefined} /><span>{item.title || item.asset?.name || '空白节点'}</span>
      {item.asset && metadataOnlyKinds.includes(assetKind(item.asset)) && <small>仅素材信息</small>}
      {item.error && <small>{item.error}</small>}
    </span>)}</div>
  </div>;
}
