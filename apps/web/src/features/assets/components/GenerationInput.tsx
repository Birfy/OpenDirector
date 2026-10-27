import { useEffect, useRef, type ReactNode } from 'react';
import { Icon } from '../../../components/Icon';
import type { NodeKind } from '../../canvas/types';
import { ReferenceEditor, type ReferenceEditorHandle } from '../../references/ReferenceEditor';
import { ReferenceText } from '../../references/ReferenceText';
import { contentText, referenceContent, referenceIds as contentIds, type ReferenceContent } from '../../references/content';
import type { ProjectAsset } from '../types';
import type { InputRules } from '../../settings/models';
import { useReferenceUploads } from '../../references/useReferenceUploads';

export function GenerationInput({ projectId, kind, assets, prompt, referenceIds, content, onChange, onBlur, disabled = false, readOnly = false, fingerprints, placeholder, availableAssetIds, nodeTitles, nodeIds, rules, videoMode = 'first_frame', targetNodeId, beforeUpload, onSaved, onUploading, controls }: {
  projectId: string; kind: NodeKind; assets: ProjectAsset[]; prompt: string; referenceIds: string[]; content?: ReferenceContent | null;
  onChange?: (value: { prompt: string; referenceIds: string[]; promptContent: ReferenceContent }) => void; onBlur?: (target: HTMLElement | null) => void;
  nodeTitles?: Record<string, string>; nodeIds?: Record<string, string>; availableAssetIds?: string[]; disabled?: boolean; readOnly?: boolean; fingerprints?: Record<string, string>; placeholder?: string;
  rules?: InputRules; videoMode?: 'first_frame' | 'reference' | 'continuation';
  targetNodeId?: string; beforeUpload?: () => Promise<void>; onSaved?: () => void; onUploading?: (busy: boolean) => void;
  controls?: ReactNode;
}) {
  const editor = useRef<ReferenceEditorHandle>(null);
  const options = assets.map(asset => ({ ...asset, nodeTitle: nodeTitles?.[asset.id], nodeId: nodeIds?.[asset.id] }));
  const value = referenceContent(prompt, referenceIds, options, content);
  const allowedKinds = kind === 'text' ? ['text', 'image', 'video', 'audio'] : kind === 'audio' ? [] : kind === 'video' && videoMode === 'first_frame' ? ['text', 'image'] : rules?.allowedKinds ?? ['text', 'image'];
  const maxImages = kind === 'video' && videoMode === 'first_frame' ? 1 : rules?.maxImages ?? 8;
  const uploads = useReferenceUploads({ scope: projectId, editor, disabled: disabled || readOnly, assets: options, value,
    rules: { allowedKinds, availableIds: availableAssetIds, maxImages, imageBytes: rules?.imageBytes ?? 32 * 1024 * 1024 }, targetNodeId, beforeUpload, onSaved });
  const catalog = uploads.catalog;
  const busy = disabled || uploads.busy;
  const inactive = !readOnly && referenceIds.some(id => uploads.availableIds !== undefined && !uploads.availableIds.includes(id) || !catalog.some(asset => asset.id === id));
  useEffect(() => { onUploading?.(uploads.busy); return () => onUploading?.(false); }, [uploads.busy, onUploading]);
  const unsupported = !readOnly && kind !== 'audio' && referenceIds.some(id => { const asset = assets.find(item => item.id === id); return asset && !allowedKinds.includes(asset.kind); });
  const referenceHint = `@ 引用项目资产${kind === 'video' ? videoMode === 'first_frame' ? ' · 最多一张首帧图片' : `${videoMode === 'continuation' ? ' · 引用一段要接续的上一段 H3 视频' : ''} · 最多 ${maxImages} 张图片${rules?.maxVideos ? `、${rules.maxVideos} 段视频` : ''}${rules?.maxAudios ? `、${rules.maxAudios} 段音频` : ''}` : kind === 'image' ? ` · 最多 ${maxImages} 张图片` : ''}`;
  return <div className={`generation-input${readOnly ? ' is-readonly' : controls ? ' is-composer reference-composer' : ''}`}>
    {readOnly ? <ReferenceText scope={projectId} text={prompt} ids={referenceIds} assets={assets} content={content} fingerprints={fingerprints} />
      : <ReferenceEditor ref={editor} scope={projectId} assets={catalog} availableIds={uploads.availableIds} value={value} disabled={busy} allowReferences={kind !== 'audio'} allowedKinds={allowedKinds} maxImageReferences={maxImages} imageLimit={rules?.imageBytes} metadataOnlyKinds={kind === 'text' ? ['video', 'audio'] : []}
        label={kind === 'audio' ? '朗读正文' : '生成要求'} placeholder={placeholder ?? (kind === 'audio' ? '仅输入需要朗读的正文，不包含音色或制作说明…' : '描述要生成的内容，输入 @ 引用项目资产…')}
        onChange={next => onChange?.({ prompt: contentText(next, kind === 'audio'), referenceIds: contentIds(next), promptContent: next })} onBlur={onBlur} onPasteFiles={files => void uploads.upload(files)} />}
    {!readOnly && (controls || kind !== 'audio') && <div className="generation-input-footer">
      {kind !== 'audio' && <><button type="button" className="icon-button upload-button" aria-label="上传参考" title="上传文件作为参考" disabled={busy} onMouseDown={event => event.preventDefault()} onClick={uploads.open}><Icon name="plus" /></button>
        <button type="button" className="icon-button" aria-label="添加参考资产" title={referenceHint} disabled={busy} onMouseDown={event => event.preventDefault()} onClick={() => editor.current?.openPicker()}><Icon name="folder" /></button></>}
      {controls ?? <small>{referenceHint}</small>}
    </div>}
    {!readOnly && uploads.picker}
    {!readOnly && uploads.notice && <p className={uploads.hasError ? 'reference-warning' : 'asset-hint'} role="status">{uploads.notice}</p>}
    {kind === 'video' && readOnly && <p className="asset-hint">{videoMode === 'reference' ? '素材参考' : videoMode === 'continuation' ? '接续生成' : '首帧生成'}</p>}
    {unsupported && <p className="reference-warning" role="status">当前模型或模式暂不支持部分参考；视频参考请使用支持视频的素材参考模式，或 H3 接续模式。输入已保留，请调整参考后生成。</p>}
    {readOnly && !value.length && <p className="reference-warning">{placeholder ?? '此版本未记录生成要求。'}</p>}
    {inactive && !uploads.busy && <p className="reference-warning" role="status">参考不是有效的当前版本或已缺失，请应用对应版本，或重新选择后再生成。</p>}
  </div>;
}
