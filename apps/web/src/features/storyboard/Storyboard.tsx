import { Feedback } from '../../components/Feedback';
import { useEffect, useRef, useState } from 'react';
import { Icon } from '../../components/Icon';
import { AssetDialog } from '../assets/components/AssetDialog';
import type { ProjectAsset } from '../assets/types';
import { MEDIA_ROLES, STATUS_LABELS, previewAsset, seconds, shotStatus, visualDurationLabel, type Shot, type ShotStatus } from './types';
import type { StoryboardControls } from './useStoryboard';
import { ShotEditor } from './ShotEditor';
import { ShotMedia } from './ShotMedia';
import { ShotMenu } from './ShotMenu';
import '../assets/assets.css';
import './storyboard.css';

function Status({ shot, status }: { shot: Shot; status: ShotStatus }) {
  return <span className={`shot-status is-${status}`}>{status === 'adopted' && <Icon name="check" />}{shot.legacyVisualChoices.length ? '待确认主画面' : STATUS_LABELS[status]}</span>;
}

function ShotRoles({ shot, visual }: { shot: Shot; visual?: ProjectAsset }) {
  return <span className="storyboard-card-roles">
    <span className={visual ? 'is-chosen' : ''}><Icon name={visual?.kind === 'video' ? 'video' : 'image'} />{visual?.kind === 'image' ? '图片主画面' : visual?.kind === 'video' ? '视频主画面' : '未采用画面'}{visual && <Icon name="check" />}</span>
    <span className={shot.selected.audio ? 'is-chosen' : ''}><Icon name="audio" />{shot.selected.audio ? '旁白已采用' : '旁白可选'}</span>
    {visual?.kind === 'video' && <span>{visual.hasAudio === false ? '无原声' : visual.hasAudio == null ? '原声未知' : shot.originalAudioMode === 'mute' ? '原声静音' : '保留原声'}</span>}
  </span>;
}

export function Storyboard({ projectId, board, onLocate }: { projectId: string; board: StoryboardControls; onLocate: (asset: ProjectAsset) => Promise<void> }) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [filter, setFilter] = useState<ShotStatus | 'all'>('all');
  const [removing, setRemoving] = useState<string | null>(null);
  const [navigationError, setNavigationError] = useState('');
  const heading = useRef<HTMLHeadingElement>(null);
  const rows = board.shots.map((shot, index) => {
    const visual = previewAsset(shot, board.assetsById);
    return { shot, index, visual, status: shotStatus(shot, board.assetsById, board.availableAssetIds), durationLabel: visualDurationLabel(visual) };
  });
  const selectedIndex = rows.findIndex(({ shot }) => shot.id === editingId);
  const selected = rows[selectedIndex]?.shot;
  const removed = board.shots.find(shot => shot.id === removing);
  const shown = rows.filter(({ status }) => filter === 'all' || status === filter);
  const totals = rows.reduce((sum, { visual, status }) => {
    if (status === 'adopted') sum.adopted++;
    if (visual?.kind === 'video') {
      sum.videos++;
      sum.durationMs += visual.durationMs ?? 0;
      if (visual.durationMs == null || visual.durationMs <= 0) sum.unknownDurations++;
    }
    return sum;
  }, { adopted: 0, videos: 0, durationMs: 0, unknownDurations: 0 });
  useEffect(() => { heading.current?.focus({ preventScroll: true }); }, [editingId]);
  useEffect(() => { if (editingId && board.loaded && !selected) setEditingId(null); }, [editingId, selected, board.loaded]);

  const perform = (action: Promise<unknown>) => { void action.catch(() => {}); };
  async function navigate(id: string | null) {
    try { await board.flush(); setNavigationError(''); setEditingId(id); if (id) board.setSelectedId(id); }
    catch { /* The save error remains visible and the current editor stays open. */ }
  }
  async function create(afterId: string | null, sourceId: string | null = null) {
    const id = await board.create(afterId, sourceId); setEditingId(id); setFilter('all');
  }
  async function remove() {
    if (!removing) return;
    const index = board.shots.findIndex(shot => shot.id === removing);
    const next = board.shots[index + 1]?.id ?? board.shots[index - 1]?.id ?? null;
    await board.remove(removing); setRemoving(null);
    if (editingId === removing) { setEditingId(next); board.setSelectedId(next); }
  }
  async function locate(asset: ProjectAsset) {
    try { await board.flush(); await onLocate(asset); }
    catch (failure) { setNavigationError(failure instanceof Error ? failure.message : '无法定位画布素材，请重试。'); }
  }
  const menu = (shot: Shot, index: number) => <ShotMenu title={shot.title} first={index === 0} last={index === board.shots.length - 1} disabled={board.busy}
    onMove={direction => perform(board.move(shot.id, direction))} onCopy={() => perform(create(shot.id, shot.id))} onRemove={() => setRemoving(shot.id)} />;

  return <div className={`storyboard${selected ? ' is-editing' : ''}`}>
    <header className="storyboard-toolbar">
      <div className="storyboard-summary">
        {selected && <button type="button" className="secondary-button storyboard-back" disabled={board.busy} onClick={() => perform(navigate(null))}><span className="shot-chevron-left"><Icon name="chevron-down" /></span>返回分镜板</button>}
        <h1 ref={heading} tabIndex={-1}>{selected ? '镜头编辑' : '分镜板'}</h1>
        <p>{board.shots.length} 个镜头{totals.videos > 0 && <><span>·</span>视频合计 {seconds(totals.durationMs)} 秒{totals.unknownDurations > 0 && `（${totals.unknownDurations} 份时长未知）`}</>}<span>·</span>已采用 {totals.adopted}/{board.shots.length}</p>
      </div>
      {!selected && <div className="storyboard-filters" aria-label="筛选镜头">{(['all', 'empty', 'pending'] as const).map(value => <button key={value} type="button" aria-pressed={filter === value} onClick={() => setFilter(value)}>{value === 'all' ? '全部' : STATUS_LABELS[value]}</button>)}</div>}
      <button className="primary-button storyboard-add" disabled={!board.loaded || board.busy || board.shots.length >= 500} onClick={() => perform(create(board.shots.at(-1)?.id ?? null))}><Icon name="plus" />新增镜头</button>
    </header>
    <Feedback value={board.loadError ? { kind: 'read', message: board.loadError } : undefined} className="storyboard-error" readLabel="重新读取分镜" onRead={() => board.readLatest()} />
    <Feedback value={board.issue} className="storyboard-error" onRead={() => board.readLatest()} />
    {navigationError && <p className="storyboard-error" role="alert">{navigationError}</p>}
    {board.error && board.issue?.kind !== 'input' && board.dirty && <div className="storyboard-error"><div>
      {!['uncertain', 'conflict', 'input'].includes(board.issue?.kind ?? '') && <button className="secondary-button" disabled={board.busy || board.saving} onClick={() => perform(board.flush())}>重试保存</button>}
      <button className="secondary-button" disabled={board.busy || board.saving} onClick={() => perform(board.reload())}>{board.dirty ? '放弃未保存修改并重新读取' : '重新读取分镜'}</button>
    </div></div>}
    {board.loading && !board.loaded ? <div className="storyboard-empty" role="status"><Icon name="storyboard" /><p>正在读取分镜…</p></div> : !board.loaded ? <div className="storyboard-empty"><p>分镜尚未读取，请检查本地服务后重试。</p></div> : selected ? <div className="storyboard-editor-layout">
      <aside className="storyboard-shot-list" aria-label="镜头顺序">
        <button className="shot-insert" disabled={board.busy} aria-label="在首个镜头前插入" onClick={() => perform(create(null))}><Icon name="plus" /></button>
        {rows.map(({ shot, index, visual, durationLabel }) => <div key={shot.id} className="storyboard-shot-list-item">
          <div className={`shot-list-card${shot.id === selected.id ? ' is-selected' : ''}`}>
            <button type="button" className="shot-list-select" aria-label={`编辑镜头 ${index + 1}：${shot.title}`} aria-current={shot.id === selected.id ? 'true' : undefined} disabled={board.busy} onClick={() => perform(navigate(shot.id))}>
              <span className="shot-list-thumbnail"><ShotMedia projectId={projectId} asset={visual} compact /></span>
              <span className="shot-list-copy"><strong>{String(index + 1).padStart(2, '0')} {shot.title}</strong><small>{durationLabel}</small><span>{shot.description || '尚未填写画面描述'}</span></span>
            </button>{menu(shot, index)}
          </div>
          <button type="button" className="shot-insert" disabled={board.busy || board.shots.length >= 500} aria-label={`在镜头 ${index + 1} 后插入`} onClick={() => perform(create(shot.id))}><Icon name="plus" /></button>
        </div>)}
      </aside>
      <ShotEditor key={selected.id} projectId={projectId} shot={selected} number={selectedIndex + 1} board={board} onLocate={locate} first={selectedIndex === 0} last={selectedIndex === board.shots.length - 1} onNavigate={direction => perform(navigate(board.shots[selectedIndex + direction].id))} />
    </div> : board.shots.length === 0 ? <div className="storyboard-empty"><Icon name="storyboard" /><h2>从一个镜头开始</h2><p>规划镜头画面，再关联画布中已有的图片、视频和旁白音频。</p><button className="primary-button" disabled={board.busy} onClick={() => perform(create(null))}><Icon name="plus" />新增第一个镜头</button></div> : <div className="storyboard-overview">
      {!shown.length && <div className="storyboard-empty"><p>当前筛选下暂无镜头</p><button className="secondary-button" onClick={() => setFilter('all')}>查看全部镜头</button></div>}
      <div className="storyboard-card-grid">{shown.map(({ shot, index, visual, status, durationLabel }) => {
        return <article key={shot.id} className={`storyboard-card${board.selectedId === shot.id ? ' is-selected' : ''}`}>
          <button type="button" className="storyboard-card-main" aria-label={`编辑镜头 ${index + 1}：${shot.title}`} disabled={board.busy} onClick={() => perform(navigate(shot.id))}>
            <span className="storyboard-card-thumbnail"><ShotMedia projectId={projectId} asset={visual} compact /></span>
            <span className="storyboard-card-copy"><span className="storyboard-card-title"><strong>{String(index + 1).padStart(2, '0')} {shot.title}</strong><small>{durationLabel}</small></span><Status shot={shot} status={status} /><span className="storyboard-card-description">{shot.description || '尚未填写画面描述'}</span>
              <ShotRoles shot={shot} visual={visual} />
            </span>
          </button>
          <footer className="storyboard-card-actions"><button className="secondary-button" disabled={board.busy} onClick={() => perform(navigate(shot.id))}><Icon name="edit" />编辑镜头</button><span>{MEDIA_ROLES.reduce((sum, kind) => sum + shot.candidates[kind].filter(id => board.availableAssetIds.includes(id) || id === shot.selected[kind]).length, 0)} 份候选</span>{menu(shot, index)}</footer>
        </article>;
      })}</div>
    </div>}
    {removed && <AssetDialog title="移除镜头" busy={board.busy} onClose={() => setRemoving(null)}><p>移除“{removed.title}”？磁盘素材和已有画布节点会保留。</p><footer><button className="secondary-button" disabled={board.busy} onClick={() => setRemoving(null)}>取消</button><button className="primary-button" disabled={board.busy} onClick={() => perform(remove())}>移除镜头</button></footer></AssetDialog>}
  </div>;
}
