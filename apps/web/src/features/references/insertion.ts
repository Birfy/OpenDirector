import { assetKind, fingerprintMatches, referenceIds, referencePart, validContent, type ReferenceAsset, type ReferenceContent } from './content';
import { editContent, type Caret } from './editor-dom';

export interface ReferenceRules {
  availableIds?: string[]; allowedKinds: string[]; maxImages: number; imageBytes: number;
}
export function referenceSizeLimit(asset: ReferenceAsset, imageBytes: number) {
  return assetKind(asset) === 'text' ? 64 * 1024 : assetKind(asset) === 'image' ? imageBytes : 50 * 1024 * 1024;
}

// Prepare the whole edit before publishing; never silently drop invalid items.
export function referenceInsertion(content: ReferenceContent, caret: Caret, added: ReferenceAsset[], catalog: ReferenceAsset[], rules: ReferenceRules, deduplicate = false) {
  for (const asset of added) {
    if (!rules.allowedKinds.includes(assetKind(asset))) throw new Error(`“${asset.name}”的类型不支持引用，整批未插入。`);
    if (rules.availableIds && !rules.availableIds.includes(asset.id)) throw new Error(`“${asset.name}”不是有效的当前版本，整批未插入。`);
    if (asset.size > referenceSizeLimit(asset, rules.imageBytes)) throw new Error(`“${asset.name}”超过当前输入的文件大小限制，整批未插入。`);
    if (content.some(part => part.type === 'reference' && part.assetId === asset.id && part.fingerprint && !fingerprintMatches(asset, part.fingerprint))) throw new Error(`“${asset.name}”与正文中的版本不同，请重新核对参考，整批未插入。`);
  }
  const ids = new Set(referenceIds(content));
  const chosen = deduplicate ? added.filter(asset => { if (ids.has(asset.id)) return false; ids.add(asset.id); return true; }) : added;
  const parts = chosen.map(referencePart);
  const next = parts.length ? editContent(content, caret, parts) : content;
  const images = referenceIds(next).filter(id => [...catalog, ...added].some(asset => asset.id === id && assetKind(asset) === 'image'));
  if (!validContent(next) || images.length > rules.maxImages) throw new Error(`合并后超过正文、参考数量或 ${rules.maxImages} 张图片限制，整批未插入。`);
  const end = caret.start + parts.length;
  return { content: next, caret: parts.length ? { start: end, end } : caret };
}
