import { useState } from 'react';
import { ReferencePreview, ReferenceThumbnail } from './ReferenceAsset';
import { assetKind, fingerprintMatches, currentReferences, referenceContent, type ReferenceAsset, type ReferenceContent } from './content';
import './references.css';

export function ReferenceText({ scope, text, assets, currentAssets, ids = assets.map(asset => asset.id), content, fingerprints, metadataOnlyKinds = [] }: { scope: string; text: string; assets: ReferenceAsset[]; currentAssets?: ReferenceAsset[]; ids?: string[]; content?: ReferenceContent | null; fingerprints?: Record<string, string>; metadataOnlyKinds?: string[] }) {
  const [preview, setPreview] = useState<ReferenceAsset | null>(null);
  const originalParts = referenceContent(text, ids, assets, content);
  const parts = currentAssets ? currentReferences(originalParts, currentAssets) : originalParts;
  return <div className="reference-text">{parts.map((part, index) => {
    if (part.type === 'text') return part.text;
    const asset = currentAssets && part.nodeId ? currentAssets.find(item => item.nodeId === part.nodeId) : [...(currentAssets ?? []), ...assets].find(item => item.id === part.assetId);
    const previous = originalParts[index];
    const followed = previous?.type === 'reference' && previous.assetId !== part.assetId;
    const original = fingerprints?.[part.assetId] ?? part.fingerprint;
    const changed = !!asset && !!original && !fingerprintMatches(asset, original);
    return <button key={index} type="button" className={`reference-token${!asset || changed ? ' is-unavailable' : ''}`} title={`${part.name}${followed ? `（显示来源当前版本；当时引用：${previous.name} · ${previous.assetId.slice(0, 8)}）` : ''}${!asset ? '（参考缺失）' : changed ? '（内容已变化）' : ''}`} disabled={!asset} onClick={() => asset && setPreview(asset)}><ReferenceThumbnail scope={scope} asset={asset} /><span>{part.name}</span>{asset && metadataOnlyKinds.includes(assetKind(asset)) && <small title="助手暂不读取音画内容">仅素材信息</small>}{changed && <small>已变化</small>}{!asset && <small>缺失</small>}</button>;
  })}{preview && <ReferencePreview scope={scope} asset={preview} onClose={() => setPreview(null)} />}</div>;
}
