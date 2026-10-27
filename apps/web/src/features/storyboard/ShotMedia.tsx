import { useEffect, useState } from 'react';
import { Icon } from '../../components/Icon';
import { useAsset } from '../assets/useAsset';
import type { ProjectAsset } from '../assets/types';

export function ShotMedia({ projectId, asset, compact = false, muted = false, placeholder = '关联已有素材，开始制作这个镜头' }: { projectId: string; asset?: ProjectAsset; compact?: boolean; muted?: boolean; placeholder?: string }) {
  const media = useAsset(projectId, asset);
  const [invalid, setInvalid] = useState(false);
  useEffect(() => setInvalid(false), [asset?.id, media.url]);
  if (!asset || media.error || invalid || !media.url) return <div className="shot-media-placeholder">
    <Icon name={asset?.kind === 'audio' ? 'audio' : 'image'} />
    {!compact && media.error && media.retryable && <button type="button" className="secondary-button" onClick={media.retry}>重试预览</button>}
    {!compact && <span>{media.error || (invalid ? '素材无法预览，请检查原文件。' : asset ? '正在读取素材…' : placeholder)}</span>}
  </div>;
  if (asset.kind === 'image') return <img src={media.url} alt={asset.name} draggable={false} onError={() => setInvalid(true)} />;
  if (asset.kind === 'video') return <video src={media.url} controls={!compact} muted={compact || muted} playsInline preload="metadata" aria-label={compact ? undefined : `播放视频：${asset.name}`} onError={() => setInvalid(true)} />;
  if (asset.kind === 'audio' && !compact) return <audio src={media.url} controls preload="metadata" aria-label={`播放音频：${asset.name}`} onError={() => setInvalid(true)} />;
  return <div className="shot-media-placeholder"><Icon name="file" /></div>;
}
