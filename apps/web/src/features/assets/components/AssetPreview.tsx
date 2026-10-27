import { useAsset } from '../useAsset';
import type { ProjectAsset } from '../types';
import { ShotMedia } from '../../storyboard/ShotMedia';

export function AssetPreview({ projectId, asset }: { projectId: string; asset: ProjectAsset }) {
  const text = useAsset(projectId, asset.kind === 'text' ? asset : undefined);
  if (asset.kind !== 'text') return <ShotMedia projectId={projectId} asset={asset} />;
  if (text.error) return <div role="alert"><p>{text.error}</p>{text.retryable && <button type="button" className="secondary-button" onClick={text.retry}>重试预览</button>}</div>;
  return text.url ? <pre className="review-text">{text.text}</pre> : <p role="status">正在读取素材…</p>;
}
