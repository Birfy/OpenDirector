import { useRef, useState } from 'react';
import { Icon } from '../../components/Icon';
import type { ProjectAsset } from '../assets/types';
import { MEDIA_ROLES, ROLE_LABELS, type MediaRole, type Shot } from './types';
import type { StoryboardControls } from './useStoryboard';
import { ShotAssetPicker } from './ShotAssetPicker';
import { ShotMedia } from './ShotMedia';
import { ShotOriginalAudio } from './ShotOriginalAudio';

export function ShotEditor({ projectId, shot, number, board, onLocate, onNavigate, first, last }: { projectId: string; shot: Shot; number: number; board: StoryboardControls; onLocate: (asset: ProjectAsset) => Promise<void>; onNavigate: (direction: -1 | 1) => void; first: boolean; last: boolean }) {
  const [picker, setPicker] = useState<MediaRole | null>(null);
  const [previews, setPreviews] = useState<Partial<Record<MediaRole, string>>>({});
  const [locating, setLocating] = useState(false);
  const hero = useRef<HTMLDivElement>(null);
  const visualIds = shot.candidates.visual.filter(id => board.availableAssetIds.includes(id) || id === shot.selected.visual);
  const visualPreviewId = previews.visual && visualIds.includes(previews.visual) ? previews.visual : shot.selected.visual ?? (shot.legacyVisualChoices.length ? '' : visualIds[0] ?? '');
  const media = board.assetsById.get(visualPreviewId);
  const perform = (action: Promise<unknown>) => { void action.catch(() => {}); };
  const locate = async (asset: ProjectAsset) => { setLocating(true); try { await onLocate(asset); } finally { setLocating(false); } };
  async function openPicker(role: MediaRole) { await board.flush(); setPicker(role); }
  return <section className="shot-editor" aria-label={`编辑镜头：${shot.title}`}>
    <header className="shot-editor-heading"><h2>{String(number).padStart(2, '0')} <span>{shot.title}</span></h2>
      <span className={`shot-save-state${board.dirty && board.error ? ' has-error' : ''}`} role="status">{board.dirty && board.error ? '尚未保存' : board.saving ? '保存中…' : board.dirty ? '等待保存' : '已保存'}</span>
      <div className="shot-editor-pagination"><button className="icon-button" aria-label="上一个镜头" disabled={first || board.busy} onClick={() => onNavigate(-1)}><span className="shot-chevron-left"><Icon name="chevron-down" /></span></button><button className="icon-button" aria-label="下一个镜头" disabled={last || board.busy} onClick={() => onNavigate(1)}><span className="shot-chevron-right"><Icon name="chevron-down" /></span></button></div>
    </header>
    {shot.legacyVisualChoices.length > 0 && <div className="shot-choice-notice" role="status"><p>此前同时采用了图片和视频，请明确选择一份主画面。原候选均已保留：{shot.legacyVisualChoices.map(id => board.assetsById.get(id)?.name ?? '素材已缺失').join('、')}。</p><button className="secondary-button" disabled={board.busy || board.dirty} onClick={() => perform(board.adopt(shot.id, 'visual', null))}>暂不采用主画面</button></div>}
    <div ref={hero} className="shot-editor-hero"><ShotMedia projectId={projectId} asset={media} muted={media?.id === shot.selected.visual && shot.originalAudioMode === 'mute'} placeholder={shot.legacyVisualChoices.length ? '请从画面候选中明确选择主画面' : undefined} /></div>
    {media && <p className="shot-preview-caption">{media.id === shot.selected.visual ? '当前主画面' : '候选预览 · 不改变当前采用'} · {media.name}</p>}
    <ShotOriginalAudio shot={shot} board={board} />
    <div className="shot-fields">
      <label>标题<input className="text-input" aria-label="镜头标题" value={shot.title} maxLength={255} disabled={board.busy} onChange={event => board.edit(shot.id, { title: event.target.value })} onBlur={() => perform(board.flush())} /></label>
      <label>画面描述<textarea className="text-input" aria-label="画面描述" value={shot.description} maxLength={20000} disabled={board.busy} placeholder="描述这个镜头要表现的画面与动作…" onChange={event => board.edit(shot.id, { description: event.target.value })} onBlur={() => perform(board.flush())} /></label>
    </div>
    <section className="shot-candidates" aria-label="镜头候选与采用"><header><h3><Icon name="storyboard" />素材与采用</h3></header>
      {MEDIA_ROLES.map(kind => {
        const ids = shot.candidates[kind].filter(id => board.availableAssetIds.includes(id) || id === shot.selected[kind]);
        const previewId = kind === 'visual' ? visualPreviewId : previews[kind] && ids.includes(previews[kind]!) ? previews[kind]! : shot.selected[kind] ?? ids[0] ?? '';
        const asset = board.assetsById.get(previewId);
        const adopted = !!previewId && shot.selected[kind] === previewId;
        return <div key={kind} className="shot-role-section"><header><strong>{ROLE_LABELS[kind]} <small>{ids.length}</small></strong><button className="secondary-button" disabled={board.busy} onClick={() => perform(openPicker(kind))}>关联素材</button></header>
          {ids.length > 0 ? <>
            <div className="shot-role-controls"><select className="text-input" aria-label={`预览${ROLE_LABELS[kind]}候选`} value={previewId} disabled={board.busy} onChange={event => setPreviews(current => ({ ...current, [kind]: event.target.value }))}>{!previewId && <option value="" disabled>选择图片或视频进行预览</option>}{ids.map((id, i) => <option key={id} value={id}>v{i + 1} · {board.assetsById.get(id)?.name ?? '素材已缺失'}</option>)}</select>
              {adopted ? <span className="shot-status is-adopted"><Icon name="check" />已采用</span> : <button className="primary-button" disabled={!asset || board.busy || board.dirty} onClick={() => perform(board.adopt(shot.id, kind, previewId))}>{kind === 'visual' ? '采用为主画面' : '采用旁白'}</button>}
            </div>
            {asset && kind === 'audio' && <div className="shot-role-preview"><ShotMedia projectId={projectId} asset={asset} /></div>}
            <div className="shot-role-footer">{asset && kind === 'visual' && <button className="shot-text-button" onClick={() => hero.current?.scrollIntoView({ block: 'nearest' })}>查看画面预览</button>}{asset && <button className="shot-text-button" disabled={board.busy || locating} onClick={() => perform(locate(asset))}>到画布查看</button>}{shot.selected[kind] && <button className="shot-text-button" disabled={board.busy || board.dirty} onClick={() => perform(board.adopt(shot.id, kind, null))}>{kind === 'visual' ? '取消主画面' : '取消采用旁白'}</button>}</div>
          </> : <p className="shot-hint">{kind === 'audio' ? '可按需关联已有旁白音频。' : `尚未关联${ROLE_LABELS[kind]}素材。`}</p>}
        </div>;
      })}
      <p className="shot-hint">图片和视频只采用一份主画面，切换候选仅预览。素材制作在画布完成；旁白独立采用，不自动静音视频，背景音乐与音效后续在时间线编排。</p>
    </section>
    <footer className="shot-editor-footer"><p className="shot-hint">镜头描述表达创作意图；各类素材的生成要求可在画布中调整。</p>{media && <button className="secondary-button" disabled={board.busy || locating} onClick={() => perform(locate(media))}><Icon name="canvas" />到画布查看</button>}</footer>
    {picker && <ShotAssetPicker projectId={projectId} shot={shot} role={picker} board={board} onClose={() => setPicker(null)} />}
  </section>;
}
