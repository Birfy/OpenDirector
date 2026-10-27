import { useEffect, useRef, useState } from 'react';
import { Icon } from '../../components/Icon';
import { AssetDialog } from '../assets/components/AssetDialog';
import { useAsset } from '../assets/useAsset';
import { assetKind, type ReferenceAsset } from './content';

export function ReferenceThumbnail({ scope, asset }: { scope: string; asset?: ReferenceAsset }) {
  const root = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => { if (entries.some(entry => entry.isIntersecting)) { setVisible(true); observer.disconnect(); } });
    if (root.current) observer.observe(root.current);
    return () => observer.disconnect();
  }, []);
  const kind = asset ? assetKind(asset) : 'other';
  const media = useAsset(scope, visible && kind === 'image' ? asset : undefined);
  return <span ref={root} className="reference-thumbnail">{media.url ? <img src={media.url} alt="" draggable={false} /> : <Icon name={kind === 'other' || kind === 'text' ? 'file' : kind} />}</span>;
}
export function ReferencePreview({ scope, asset, onClose }: { scope: string; asset: ReferenceAsset; onClose: () => void }) {
  const media = useAsset(scope, asset);
  const kind = assetKind(asset);
  return <AssetDialog title={`参考预览：${asset.name}`} onClose={onClose}><div className="reference-preview">
    {media.error ? <div role="alert"><p>{media.error}</p>{media.retryable && <button type="button" className="secondary-button" onClick={media.retry}>重试预览</button>}</div> : !media.url ? <p role="status">正在读取素材…</p>
      : kind === 'image' ? <img src={media.url} alt={asset.name} /> : kind === 'video' ? <video src={media.url} controls /> : kind === 'audio' ? <audio src={media.url} controls /> : <pre>{media.text || '此格式暂不支持预览。'}</pre>}
  </div></AssetDialog>;
}
