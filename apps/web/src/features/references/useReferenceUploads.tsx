import { useEffect, useRef, useState, type RefObject } from 'react';
import { errorMessage } from '../../lib/api';
import { uploadReference } from '../assets/api';
import { AssetDialog } from '../assets/components/AssetDialog';
import { IMPORT_ACCEPT, type ProjectAsset } from '../assets/types';
import { type ReferenceAsset, type ReferenceContent } from './content';
import type { ReferenceEditorHandle } from './ReferenceEditor';
import { ReferenceThumbnail } from './ReferenceAsset';
import { referenceInsertion, referenceSizeLimit, type ReferenceRules } from './insertion';

export function mergeReferenceAssets(base: ReferenceAsset[], added: ReferenceAsset[]) {
  const versions = new Map(base.filter(asset => asset.nodeId).map(asset => [asset.nodeId, asset.id]));
  return [...new Map([...added, ...base].map(asset => [asset.id, asset])).values()]
    .filter(asset => !asset.nodeId || !versions.has(asset.nodeId) || versions.get(asset.nodeId) === asset.id);
}

export function useReferenceUploads({ scope, editor, disabled, assets, value, rules, targetNodeId, beforeUpload, onSaved }: {
  scope: string; editor: RefObject<ReferenceEditorHandle | null>; disabled: boolean; assets: ReferenceAsset[]; value: ReferenceContent;
  rules: ReferenceRules; targetNodeId?: string; beforeUpload?: () => Promise<void>; onSaved?: () => void;
}) {
  const [busy, setBusy] = useState(false);
  const [uploaded, setUploaded] = useState<ReferenceAsset[]>([]);
  const [pending, setPending] = useState<ReferenceAsset[]>([]);
  const [notice, setNotice] = useState('');
  const [hasError, setHasError] = useState(false);
  const [choice, setChoice] = useState<{ name: string; matches: (ProjectAsset & ReferenceAsset)[]; resolve: (id: string | null) => void } | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const running = useRef(false), alive = useRef(true);
  const selection = useRef<((id: string | null) => void) | null>(null);
  const latest = useRef({ assets, value, rules, onSaved }); latest.current = { assets, value, rules, onSaved };
  useEffect(() => { alive.current = true; return () => { alive.current = false; selection.current?.(null); }; }, [scope]);
  useEffect(() => {
    if (!notice || hasError) return;
    const timer = window.setTimeout(() => setNotice(''), 4000);
    return () => clearTimeout(timer);
  }, [notice, hasError]);
  const catalog = mergeReferenceAssets(assets, uploaded);
  useEffect(() => {
    if (disabled || busy || !pending.length) return;
    editor.current?.insert(pending);
    setPending([]);
  }, [disabled, busy, pending, editor]);

  async function upload(files: File[]) {
    if (disabled || running.current || !files.length) return;
    running.current = true; setBusy(true); setNotice(''); setHasError(false);
    const inserted: ReferenceAsset[] = [], problems: string[] = [];
    let reused = false;
    try {
      await beforeUpload?.();
      for (const file of files) {
        if (!alive.current) break;
        let saved = false;
        try {
          const suffix = file.name.split('.').at(-1)?.toLowerCase() ?? '';
          const kind = /^(png|jpe?g|gif|webp)$/.test(suffix) ? 'image' : /^(mp4|mov|webm)$/.test(suffix) ? 'video' : /^(mp3|wav|m4a|ogg|flac)$/.test(suffix) ? 'audio' : /^(txt|md)$/.test(suffix) ? 'text' : 'other';
          const candidate = { id: '', name: file.name, size: file.size, type: file.type, fingerprint: '', kind } as ReferenceAsset;
          if (!latest.current.rules.allowedKinds.includes(kind)) throw new Error('当前输入不支持此参考类型。');
          if (file.size > referenceSizeLimit(candidate, latest.current.rules.imageBytes)) throw new Error('超过当前输入的文件大小限制。');
          const id = crypto.randomUUID();
          let result = await uploadReference(scope, id, file, { targetNodeId });
          if (!alive.current) break;
          if (result.matches.length) {
            const selected = await new Promise<string | null>(resolve => {
              selection.current = resolve; setChoice({ name: file.name, matches: result.matches, resolve });
            });
            selection.current = null; setChoice(null);
            if (!selected || !alive.current) continue;
            result = await uploadReference(scope, id, file, { targetNodeId, reuseId: selected });
          }
          const asset = result.asset;
          if (!asset) throw new Error('未找到可复用的来源，请重新上传。');
          saved = true;
          const context = latest.current;
          const nextCatalog = mergeReferenceAssets(context.assets, [...uploaded, ...inserted, asset]);
          referenceInsertion(context.value, { start: 0, end: 0 }, [...inserted, asset], nextCatalog, {
            ...context.rules, availableIds: context.rules.availableIds ? [...context.rules.availableIds, ...inserted.map(item => item.id), asset.id] : undefined,
          });
          inserted.push(asset); reused ||= result.reused;
        } catch (failure) { problems.push(`“${file.name}”：${errorMessage(failure)}${saved ? ' 素材已保存在资产列表，本次未插入正文。' : ''}`); }
      }
      if (alive.current) {
        setUploaded(current => mergeReferenceAssets(current, inserted)); setPending(inserted);
        setHasError(problems.length > 0);
        setNotice([...problems, ...(reused ? ['已引用项目中已有素材。'] : [])].join(' '));
        latest.current.onSaved?.();
      }
    } catch (failure) { if (alive.current) { setNotice(errorMessage(failure)); setHasError(true); } }
    finally { running.current = false; if (alive.current) setBusy(false); }
  }
  const picker = <><input ref={fileInput} type="file" hidden multiple accept={IMPORT_ACCEPT} aria-label="选择参考素材" onChange={event => { void upload([...event.target.files ?? []]); event.target.value = ''; }} />
    {choice && <AssetDialog title="选择已有参考来源" onClose={() => choice.resolve(null)}><p>“{choice.name}”与多个来源内容相同，请选择需要跟随的来源。</p>
      <div className="reference-upload-choices">{choice.matches.map(asset => <button key={asset.id} type="button" className="secondary-button" onClick={() => choice.resolve(asset.id)}><ReferenceThumbnail scope={scope} asset={asset} /><span>{asset.nodeTitle || asset.name}<small>{asset.source === 'generated' ? '生成' : '素材'} · {asset.onCanvas ? '画布已显示' : '未展开'}{asset.createdAt && ` · ${new Date(asset.createdAt).toLocaleString('zh-CN')}`}</small></span></button>)}</div>
      <footer><button type="button" className="secondary-button" onClick={() => choice.resolve(null)}>取消</button></footer></AssetDialog>}</>;
  const versions = new Map(assets.filter(asset => asset.nodeId).map(asset => [asset.nodeId, asset.id]));
  const availableIds = rules.availableIds ? [...new Set([...rules.availableIds, ...uploaded.filter(asset =>
    !asset.nodeId || !versions.has(asset.nodeId) || versions.get(asset.nodeId) === asset.id).map(asset => asset.id)])] : undefined;
  return { busy, catalog, availableIds, upload, picker, notice, hasError, open: () => fileInput.current?.click() };
}
