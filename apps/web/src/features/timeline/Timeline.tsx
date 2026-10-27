import { Feedback } from '../../components/Feedback';
import { useEffect, useState } from 'react';
import { Icon } from '../../components/Icon';
import { TRACKS, TRACK_LABELS, endFrame, timeLabel, type TimelineClip, type TimelineState } from './types';
import type { TimelineControls } from './useTimeline';
import { useTimelinePlayer } from './useTimelinePlayer';
import { TimelineShot } from './TimelineShot';
import { TimelineExport } from './TimelineExport';
import './timeline.css';

const EMPTY: TimelineState = { version: 1, revision: 0, frameRate: 30, sourceStoryboardRevision: null, trackMutes: { original: false, narration: false }, clips: [] };

export function Timeline({ projectId, projectName, board, active }: { projectId: string; projectName: string; board: TimelineControls; active: boolean }) {
  const state = board.snapshot?.timeline ?? EMPTY;
  const preview = board.snapshot?.preview;
  const partial = preview?.partial ?? false;
  const readOnly = board.busy || partial;
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const player = useTimelinePlayer(projectId, state, active && !!preview?.availableShots && !board.loadError);
  const playingShot = preview?.shots.find(shot => shot.shotId === player.visual?.shotId);
  const selected = state.clips.find(clip => clip.id === selectedId) ?? player.visual;
  const railWidth = Math.max(720, Math.min(20000, player.totalFrames / state.frameRate * 44));
  const perform = (action: Promise<unknown>) => { void action.catch(() => {}); };
  useEffect(() => { if (selectedId && !state.clips.some(clip => clip.id === selectedId)) setSelectedId(null); }, [state.clips, selectedId]);
  useEffect(() => { if (player.error && player.visual) setSelectedId(player.visual.id); }, [player.error, player.visual?.id]);
  async function select(clip: TimelineClip) { await board.flush(); setSelectedId(clip.id); player.seek(clip.startFrame); }
  const fraction = (value: number) => `${value / Math.max(1, player.totalFrames) * 100}%`;

  return <div className="timeline" aria-label="项目时间线">
    <header className="timeline-toolbar"><div><h1>时间线</h1><p>{partial ? `草稿预览 · ${preview?.availableShots}/${preview?.totalShots} 镜 · 草稿时长 ${timeLabel(player.totalFrames)} · 完整片长待定` : `${preview?.totalShots ?? 0} 个镜头 · ${timeLabel(player.totalFrames)} · ${state.frameRate} fps`}</p></div>
      <TimelineExport projectId={projectId} projectName={projectName} board={board} active={active} />
    </header>
    <Feedback value={board.loadError ? { kind: 'read', message: board.loadError } : undefined} className="timeline-error" readLabel="重新读取时间线" onRead={() => board.readLatest()} />
    <Feedback value={board.issue} className="timeline-error" onRead={() => board.readLatest()} />
    {board.error && board.issue?.kind !== 'input' && board.draft && <button className="secondary-button" disabled={board.busy} onClick={() => perform(board.reload())}>放弃未保存修改并重新读取</button>}
    {partial && <section className="timeline-draft" aria-label="草稿预览范围">
      <strong>{preview?.availableShots ? '仅预览已就绪镜头' : '暂无可预览镜头'}</strong>
      <p>按原分镜顺序拼接，跳过未就绪镜头；草稿时长不含缺失镜头，完整片长待定。草稿只读，沿用已保存的时长和静音设置；补齐素材后可继续调整及完整导出。</p>
      <ol>{preview?.shots.map(shot => <li key={shot.shotId} data-preview-shot={shot.number} data-available={shot.available}>
        {shot.available ? <button className="secondary-button" disabled={!active || board.busy || !!board.draft || !!board.loadError} onClick={() => { const clip = state.clips.find(clip => clip.shotId === shot.shotId && clip.track === 'visual'); if (clip) perform(select(clip)); }}>第 {shot.number} 镜「{shot.title}」 · 可预览</button>
          : <span>第 {shot.number} 镜「{shot.title}」 · 未纳入预览{shot.problems.map(problem => <small key={problem}>{problem.slice(problem.indexOf('：') + 1)}</small>)}</span>}
      </li>)}</ol>
    </section>}
    {state.clips.length === 0 ? <div className="timeline-empty"><Icon name="timeline" /><h2>按分镜顺序串起你的短片</h2><p>在分镜板采用画面与旁白，时间线将自动按镜头顺序展示。</p></div> : <>
      <div className="timeline-preview-row">
        <section className="timeline-preview" aria-label="时间线预览">
          <button type="button" className="timeline-screen" data-playback-phase={player.phase} aria-label={player.playing ? '暂停时间线' : '播放时间线'} aria-pressed={player.playing} disabled={!active || !!board.loadError || board.busy || !!board.draft} onClick={() => player.playing ? player.pause() : player.play()}>
            {player.shots.map(shot => {
              const original = state.clips.find(clip => clip.track === 'original' && clip.shotId === shot.shotId);
              return <TimelineShot key={shot.id} shot={shot} active={shot.id === player.visual?.id}
                narration={state.clips.find(clip => clip.track === 'narration' && clip.shotId === shot.shotId)}
                muted={!original || original.muted || state.trackMutes.original} sources={player.sources} register={player.register} />;
            })}
            {player.notice && <span className="timeline-buffering" role="status">{player.notice}</span>}
            {!player.notice && <span className={`timeline-play-toggle${player.playing ? ' is-playing' : ''}`} aria-hidden="true"><Icon name={player.playing ? 'pause' : 'play'} /></span>}
          </button>
          <div className="timeline-transport"><output aria-label="播放进度">{timeLabel(player.frame)} / {timeLabel(player.totalFrames)}</output><span>{partial && '草稿 · '}{playingShot && `第 ${playingShot.number} 镜 · `}{player.visual?.title}</span></div>
          {player.error && <div className="timeline-error" role="alert"><p>{player.error}</p>{player.retryable && <button className="secondary-button" onClick={player.retry}>重试预览</button>}</div>}
        </section>
        <aside className="timeline-inspector" aria-label="片段设置">{selected && <>
          <h2>{selected.title}</h2><p>{TRACK_LABELS[selected.track]} · {board.assetsById.get(selected.assetId)?.name ?? '素材缺失'}</p><dl><dt>{partial ? '草稿内位置' : '时间位置'}</dt><dd>{timeLabel(selected.startFrame)} — {timeLabel(endFrame(selected))}</dd><dt>播放时长</dt><dd>{Number((selected.durationFrames / state.frameRate).toFixed(3))} 秒</dd></dl>
          {selected.kind === 'image' && <label>图片停留时长（秒）<input className="text-input" aria-label="图片停留时长（秒）" type="number" min="0.1" max="3600" step="0.1" disabled={readOnly} value={board.draft?.clipId === selected.id ? board.draft.value : Number((selected.durationFrames / state.frameRate).toFixed(3))} onChange={event => { player.pause(); board.editDuration(selected, event.target.value); }} /><button className="secondary-button" disabled={readOnly || !board.draft} onClick={() => perform(board.flush())}>保存时长</button></label>}
          {selected.track !== 'visual' && <label className="timeline-check"><input type="checkbox" aria-label="静音当前片段" checked={selected.muted} disabled={readOnly} onChange={event => perform(board.muteClip(selected, event.target.checked))} />静音当前片段</label>}
          <p className="timeline-hint">视频使用完整素材时长；原声与旁白分别控制。调整图片时长会同步移动后续镜头。</p>
        </>}</aside>
      </div>
      <div className="timeline-tracks-scroll"><div className="timeline-tracks" style={{ width: railWidth + 130 }}>
        <div className="timeline-ruler-row"><span className="timeline-track-label">时间 / 秒</span><div className="timeline-ruler" style={{ width: railWidth }}><div className="timeline-ticks">{Array.from({ length: 9 }, (_, i) => <span key={i}>{timeLabel(player.totalFrames * i / 8)}</span>)}</div><input type="range" aria-label="时间线播放位置" min="0" max={player.totalFrames} step="1" value={player.frame} onChange={event => player.seek(Number(event.target.value))} /></div></div>
        {TRACKS.map(track => <div key={track} className={`timeline-track is-${track}`} data-track={track}><div className="timeline-track-label"><strong>{TRACK_LABELS[track]}</strong>{track !== 'visual' && <label><input type="checkbox" aria-label={`静音${TRACK_LABELS[track]}`} checked={state.trackMutes[track]} disabled={readOnly} onChange={event => perform(board.muteTrack(track, event.target.checked))} />静音</label>}</div>
          <div className="timeline-lane" style={{ width: railWidth }} onClick={event => { if (event.target === event.currentTarget) player.seek(Math.round((event.clientX - event.currentTarget.getBoundingClientRect().left) / railWidth * player.totalFrames)); }}>
            {state.clips.filter(clip => clip.track === track).map(clip => <button key={clip.id} type="button" className={`timeline-clip${selected?.id === clip.id ? ' is-selected' : ''}${clip.muted || (track !== 'visual' && state.trackMutes[track]) ? ' is-muted' : ''}`} data-clip-id={clip.id} aria-label={`选择${TRACK_LABELS[track]}片段：${clip.title}`} aria-pressed={selected?.id === clip.id} title={`${clip.title} · ${timeLabel(clip.durationFrames)}${clip.muted ? ' · 静音' : ''}`} disabled={board.busy} style={{ left: fraction(clip.startFrame), width: fraction(clip.durationFrames) }} onClick={() => perform(select(clip))}><Icon name={clip.kind === 'audio' ? 'audio' : clip.kind === 'image' ? 'image' : 'video'} /><span>{clip.title}</span></button>)}
            <span className="timeline-playhead" style={{ left: fraction(player.frame) }} />
          </div>
        </div>)}
      </div></div>
      {!!board.snapshot?.warnings.length && <ul className="timeline-warnings">{board.snapshot.warnings.map(message => <li key={message}>{message}</li>)}</ul>}
    </>}
  </div>;
}
