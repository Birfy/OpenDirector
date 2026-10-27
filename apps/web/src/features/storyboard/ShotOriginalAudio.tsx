import { previewAsset, type Shot } from './types';
import type { StoryboardControls } from './useStoryboard';
import { Switch } from '../../components/Switch';

export function ShotOriginalAudio({ shot, board }: { shot: Shot; board: StoryboardControls }) {
  const asset = previewAsset(shot, board.assetsById);
  if (asset?.kind !== 'video') return null;
  const perform = (action: Promise<unknown>) => { void action.catch(() => {}); };
  const controlId = `shot-original-audio-${shot.id}`;
  const unknown = asset.hasAudio == null;
  return <section className="shot-original-audio" aria-label="当前主画面的视频原声">
    <div className="shot-original-audio-copy">
      <label id={`${controlId}-label`} htmlFor={controlId}>保留视频原声</label>
      {asset.hasAudio !== true && <p className="shot-hint" id={`${controlId}-hint`}>{unknown ? '音轨尚未检测。' : '视频不含原声，可单独添加旁白。'}{unknown && <button type="button" className="secondary-button" disabled={board.busy} onClick={() => perform(board.probeAudio(asset))}>{board.busy ? '检测中…' : '检测原声'}</button>}</p>}
    </div>
    <Switch id={controlId} checked={asset.hasAudio === true && shot.originalAudioMode === 'keep'}
      aria-labelledby={`${controlId}-label`} aria-describedby={asset.hasAudio === true ? undefined : `${controlId}-hint`}
      disabled={asset.hasAudio !== true || board.busy || board.dirty}
      onClick={() => perform(board.originalAudio(shot.id, shot.originalAudioMode === 'keep' ? 'mute' : 'keep'))} />
  </section>;
}
