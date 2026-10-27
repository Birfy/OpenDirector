import type { GenerationTask } from './types';

export type GeneratingKind = 'image' | 'video' | 'audio';

const NOUNS: Record<GeneratingKind, string> = { image: '图片', video: '视频', audio: '音频' };
const PHASES: Record<string, string> = { prepare: '正在准备参考', download: '正在下载结果', save: '正在保存', adopt: '正在更新节点' };

/**
 * Cover for a media node while its generation task is queued or running:
 * blurred colour fields drift and shift hue like a developing picture, with a
 * sheen sweeping across. No visible text; the status is for screen readers.
 * An earlier result stays visible behind frosted glass.
 */
export function GeneratingOverlay({ task, kind, hasResult }: { task: GenerationTask; kind: GeneratingKind; hasResult: boolean }) {
  const queued = task.status === 'queued' || task.phase === 'queued';
  // submit and poll are the generation itself; later phases name their own step.
  const label = queued ? '排队中' : PHASES[task.phase ?? ''] ?? `正在生成${NOUNS[kind]}`;
  return <div className={`canvas-generating${hasResult ? ' has-result' : ''}${queued ? ' is-queued' : ''}`}>
    <span className="canvas-generating-field" aria-hidden="true"><i /><i /><i /><i /></span>
    <span className="canvas-generating-sheen" aria-hidden="true" />
    <span className="canvas-generating-grain" aria-hidden="true" />
    <span className="canvas-generating-status" role="status">{label}</span>
  </div>;
}
