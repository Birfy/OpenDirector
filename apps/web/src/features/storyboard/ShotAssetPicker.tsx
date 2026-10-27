import { useState } from 'react';
import { AssetDialog } from '../assets/components/AssetDialog';
import { Icon } from '../../components/Icon';
import { ROLE_LABELS, type MediaRole, type Shot } from './types';
import type { StoryboardControls } from './useStoryboard';
import { ShotMedia } from './ShotMedia';

export function ShotAssetPicker({ projectId, shot, role, board, onClose }: { projectId: string; shot: Shot; role: MediaRole; board: StoryboardControls; onClose: () => void }) {
  const [selection, setSelection] = useState(shot.candidates[role]);
  const [expectedRevision] = useState(shot.revision);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const retained = [shot.selected[role]];
  const visible = (id: string) => board.availableAssetIds.includes(id) || retained.includes(id);
  const options = board.assets.filter(asset => visible(asset.id) && (role === 'visual' ? asset.kind === 'image' || asset.kind === 'video' : asset.kind === 'audio') && asset.name.toLowerCase().includes(search.toLowerCase()));
  const missing = selection.filter(id => !board.assetsById.has(id) && retained.includes(id));
  async function save() {
    try { await board.associate(shot.id, role, selection, expectedRevision); onClose(); }
    catch (failure) { setError(failure instanceof Error ? failure.message : '关联未保存，请重试。'); }
  }
  return <AssetDialog title={`关联${ROLE_LABELS[role]}`} busy={board.busy} onClose={onClose}>
    <p className="asset-hint">从项目来源的当前版本中选择，不复制文件，也无需先显示到画布。{role === 'visual' ? '图片和视频共用候选列表，只能采用一份主画面；移除当前主画面会取消采用。' : '旁白独立采用，不会自动关闭视频原声；移除已采用旁白会取消采用。'}</p>
    <input className="text-input" aria-label="查找镜头素材" placeholder="按名称查找…" value={search} onChange={event => setSearch(event.target.value)} />
    <div className="shot-asset-picker-list">
      {options.map(asset => <label key={asset.id} className={`shot-asset-choice${selection.includes(asset.id) ? ' is-picked' : ''}`}>
        <input type="checkbox" checked={selection.includes(asset.id)} disabled={board.busy || (!selection.includes(asset.id) && !board.availableAssetIds.includes(asset.id))} onChange={event => setSelection(current => event.target.checked ? [...current, asset.id] : current.filter(id => id !== asset.id))} />
        <div className="shot-asset-choice-thumb" aria-hidden="true">{asset.kind === 'image' ? <ShotMedia projectId={projectId} asset={asset} compact /> : <Icon name={asset.kind === 'video' ? 'video' : asset.kind === 'audio' ? 'audio' : 'file'} />}</div>
        <span>{asset.name}{!board.availableAssetIds.includes(asset.id) && '（已有采用的历史版本）'}</span>
      </label>)}
      {missing.map(id => <label key={id} className="shot-asset-choice"><input type="checkbox" checked disabled={board.busy} onChange={() => setSelection(current => current.filter(value => value !== id))} /><span>素材已缺失 · {id.slice(0, 8)}（取消勾选以移除引用）</span></label>)}
      {!options.length && <p className="asset-hint">暂无匹配素材，可先上传素材或到画布生成。</p>}
    </div>
    {error && <p className="asset-error" role="alert">{error}</p>}
    <footer><span className="asset-hint">已选择 {selection.filter(visible).length} 份</span><button className="secondary-button" disabled={board.busy} onClick={onClose}>取消</button><button className="primary-button" disabled={board.busy} onClick={() => void save()}>{board.busy ? '保存中…' : '保存关联'}</button></footer>
  </AssetDialog>;
}
