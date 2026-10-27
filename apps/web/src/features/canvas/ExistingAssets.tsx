import { Feedback } from '../../components/Feedback';
import { useEffect, useState } from 'react';
import { Icon } from '../../components/Icon';
import { AssetDialog } from '../assets/components/AssetDialog';
import { AssetPreview } from '../assets/components/AssetPreview';
import type { ProjectAsset } from '../assets/types';
import type { ProjectCanvas } from './useProjectCanvas';
import type { NodeKind } from './types';
import type { AssetDeletionImpact, AssetUsage } from '../assets/api';

export function ExistingAssets({ canvas, onClose }: { canvas: ProjectCanvas; onClose: () => void }) {
  const [filter, setFilter] = useState('');
  const [usageFilter, setUsageFilter] = useState<'all' | 'used' | 'unused'>('all');
  const [usage, setUsage] = useState<AssetUsage | null>(null);
  const [usageError, setUsageError] = useState(false);
  const [readAttempt, setReadAttempt] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [notice, setNotice] = useState('');
  const [preview, setPreview] = useState<ProjectAsset | null>(null);
  const [deleting, setDeleting] = useState<{ assets: ProjectAsset[]; impact: AssetDeletionImpact } | null>(null);
  useEffect(() => {
    let alive = true;
    setUsage(null); setUsageError(false);
    void canvas.loadAssetUsage().then(value => { if (alive) setUsage(value); }).catch(() => { if (alive) setUsageError(true); });
    return () => { alive = false; };
  }, [canvas.snapshot?.canvas.revision, readAttempt]);
  const listed = (canvas.snapshot?.assets.filter(asset => asset.kind !== 'other' && canvas.snapshot?.listedAssetIds.includes(asset.id)) ?? [])
    .sort((a, b) => (b.createdAt ?? '').localeCompare(a.createdAt ?? '') || a.name.localeCompare(b.name));
  const assets = listed.filter(asset => asset.name.toLowerCase().includes(filter.toLowerCase()) && (usageFilter === 'all' || usage?.[asset.id]?.used === (usageFilter === 'used')));
  async function inspect(values: ProjectAsset[]) {
    if (!values.length) return;
    setNotice('');
    try { setDeleting({ assets: values, impact: await canvas.deletionImpact(values.map(asset => asset.id)) }); }
    catch { /* Shared asset feedback reports failures. */ }
  }
  async function destroy() {
    if (!deleting) return;
    const { assets, impact } = deleting;
    try {
      const result = await canvas.destroyAssets(assets.map(asset => asset.id), impact);
      setSelected(current => current.filter(id => !result.deleted.includes(id)));
      setNotice(`已删除 ${result.deleted.length} 项资产。${clearsHistory && result.deleted.length ? '已按确认清空画布撤销与重做记录。' : ''}${result.failed.map(item => item.message).join(' ')}`);
    } catch { /* A changed or uncertain state always requires a new confirmation. */ }
    finally { setDeleting(null); }
  }
  const clearsHistory = !!deleting && deleting.impact.history.undo + deleting.impact.history.redo > 0;
  const toggle = (id: string) => setSelected(current => current.includes(id) ? current.filter(key => key !== id) : [...current, id]);
  return <AssetDialog title={preview ? `预览：${preview.name}` : deleting ? '永久删除资产' : '资产列表'} busy={canvas.busy} onClose={onClose}>
    {preview ? <><AssetPreview projectId={preview.projectId!} asset={preview} /><footer><button type="button" className="secondary-button" onClick={() => setPreview(null)}>返回资产列表</button></footer></>
      : deleting ? <><p>永久删除{deleting.assets.length === 1 ? `“${deleting.assets[0].name}”` : `这 ${deleting.assets.length} 项资产`}及其磁盘文件？此操作不可撤销。</p>
        {deleting.assets.length > 1 && <ul className="asset-deletion-list">{deleting.assets.map(asset => <li key={asset.id}>{asset.name}</li>)}</ul>}
        {deleting.impact.blockers.length ? <><p>以下资产仍被使用，暂时无法删除。请先处理对应引用；历史记录使用的文件需要保留。</p><ul className="asset-deletion-list">{deleting.impact.blockers.map((item, index) => <li key={`${item.kind}:${item.id}:${index}`}>{item.label}</li>)}</ul></>
          : clearsHistory && <p role="note">文件仍用于画布撤销或重做。继续删除将清空当前项目全部画布撤销和重做记录，包括其他节点的编辑记录。当前画布内容和资产生成历史保持不变。</p>}
        <footer className="asset-deletion-actions"><button type="button" className="secondary-button" disabled={canvas.busy} onClick={() => setDeleting(null)}>返回</button>
          {!deleting.impact.blockers.length && <button type="button" className="primary-button" disabled={canvas.busy} onClick={() => void destroy()}>{clearsHistory ? '删除并清空画布撤销记录' : '确认删除'}</button>}</footer></> : <>
        <div className="canvas-asset-filters"><input className="text-input" aria-label="查找资产" placeholder="按名称查找…" value={filter} onChange={event => setFilter(event.target.value)} />
          <label className="canvas-asset-usage-filter"><select className="text-input" aria-label="资产使用状态" value={usageFilter} onChange={event => setUsageFilter(event.target.value as typeof usageFilter)}><option value="all">全部</option><option value="used" disabled={!usage}>已使用</option><option value="unused" disabled={!usage}>未使用</option></select><Icon name="chevron-down" /></label></div>
        {!usage && <p role="status">{usageError ? '使用状态读取失败。' : '正在检查资产使用状态…'}{usageError && <button type="button" className="secondary-button" onClick={() => setReadAttempt(value => value + 1)}>重新读取使用状态</button>}</p>}
        <div className="canvas-existing-list">{assets.length ? assets.map(asset => {
          const placed = canvas.snapshot?.canvas.nodes.some(node => node.assetId === asset.id);
          return <div key={asset.id}><input type="checkbox" aria-label={`选择资产：${asset.name}`} checked={selected.includes(asset.id)} disabled={canvas.busy || !selected.includes(asset.id) && selected.length >= 100} onChange={() => toggle(asset.id)} />
            <button type="button" className="canvas-existing-open" disabled={canvas.busy} onClick={() => void canvas.create(asset.kind as NodeKind, undefined, undefined, asset).then(onClose).catch(() => {})}><Icon name={asset.kind === 'text' ? 'file' : asset.kind === 'other' ? 'file' : asset.kind} /><span>{asset.name}</span><small>{placed ? '定位节点' : '显示到画布'}{usage?.[asset.id]?.used === false ? ' · 未使用' : ''}</small></button>
            <button type="button" className="secondary-button" aria-label={`预览资产：${asset.name}`} onClick={() => setPreview(asset)}>预览</button>
            <button type="button" className="icon-button" aria-label={`永久删除：${asset.name}`} title={placed ? '先移除画布节点，再删除资产文件' : '永久删除资产文件'} disabled={canvas.busy || placed} onClick={() => void inspect([asset])}><Icon name="close" /></button></div>;
        }) : <p>{filter || usageFilter !== 'all' ? '未找到匹配的资产' : '当前暂无资产'}</p>}</div>
        <footer><button type="button" className="secondary-button" disabled={canvas.busy || !assets.length} onClick={() => setSelected(assets.slice(0, 100).map(asset => asset.id))}>全选当前列表</button>
          {!!selected.length && <button type="button" className="secondary-button" onClick={() => setSelected([])}>取消选择</button>}
          <button type="button" className="secondary-button" disabled={canvas.busy || !selected.some(id => listed.some(asset => asset.id === id))} onClick={() => void inspect(listed.filter(asset => selected.includes(asset.id)))}>删除所选（{selected.filter(id => listed.some(asset => asset.id === id)).length}）</button></footer>
      </>}
    {notice && <p role="status">{notice}</p>}
    <Feedback value={canvas.feedback.assets} onRead={() => canvas.readState('assets')} readLabel="重新读取资产列表" onDismiss={() => canvas.dismissFeedback('assets')} />
  </AssetDialog>;
}
