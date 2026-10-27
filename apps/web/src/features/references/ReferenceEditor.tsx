import { useEffect, useId, useImperativeHandle, useLayoutEffect, useRef, useState, type Ref } from 'react';
import { Icon } from '../../components/Icon';
import { loadAsset } from '../assets/api';
import { ReferencePreview, ReferenceThumbnail } from './ReferenceAsset';
import { assetKind, fingerprintMatches, contentText, currentReferences, normalizeContent, referenceIds, validContent, REFERENCE_LIMIT, type ReferenceAsset, type ReferenceContent } from './content';
import { editContent, editingText, readDOM, select, selection, type Caret } from './editor-dom';
import { referenceInsertion, referenceSizeLimit } from './insertion';
import './references.css';

export interface ReferenceEditorHandle { insert: (assets: ReferenceAsset[]) => void; openPicker: () => void }
interface Props {
  scope: string; value: ReferenceContent; assets: ReferenceAsset[]; availableIds?: string[]; disabled?: boolean; allowReferences?: boolean;
  allowedKinds?: string[]; maxImageReferences?: number; imageLimit?: number; label: string; placeholder?: string;
  metadataOnlyKinds?: string[];
  pendingReferences?: ReferenceAsset[]; confirmationKey?: string;
  onConfirmReferences?: (content: ReferenceContent) => Promise<boolean>; onReferencesInserted?: () => void;
  onChange: (content: ReferenceContent) => void; onBlur?: (target: HTMLElement | null) => void; onSubmit?: () => void;
  onPasteFiles?: (files: File[]) => void; onLoadAssets?: () => Promise<void>; loading?: boolean; loadError?: string;
  ref?: Ref<ReferenceEditorHandle>;
}
const CATEGORIES = [{ id: 'all', label: '全部' }, { id: 'image', label: '图片' }, { id: 'video', label: '视频' }, { id: 'audio', label: '音频' }, { id: 'text', label: '文本' }];
const CLIPBOARD = 'application/x-museshow-references';
type Snapshot = { content: ReferenceContent; caret: Caret };
export function ReferenceEditor({ scope, value, assets, availableIds, disabled, allowReferences = true, allowedKinds = ['image', 'text', 'video', 'audio'], maxImageReferences = REFERENCE_LIMIT, imageLimit = 32 * 1024 * 1024, metadataOnlyKinds = [], pendingReferences, confirmationKey, onConfirmReferences, onReferencesInserted, label, placeholder, onChange, onBlur, onSubmit, onPasteFiles, onLoadAssets, loading, loadError, ref }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const current = useRef(value);
  const savedCaret = useRef<Caret>({ start: 0, end: 0 });
  const composing = useRef(false);
  const dismissedMention = useRef<number | null>(null);
  const past = useRef<Snapshot[]>([]), future = useRef<Snapshot[]>([]);
  const lastEdit = useRef(0);
  const [picker, setPicker] = useState<Caret | null>(null);
  const pickerRef = useRef(picker); pickerRef.current = picker;
  const [category, setCategory] = useState('all'), [active, setActive] = useState(0);
  const [preview, setPreview] = useState<ReferenceAsset | null>(null);
  const [notice, setNotice] = useState('');
  const [confirming, setConfirming] = useState(false);
  const confirmingRef = useRef(false);
  const confirmation = useRef(confirmationKey); confirmation.current = confirmationKey;
  useEffect(() => { setNotice(''); }, [confirmationKey]);
  const [position, setPosition] = useState({ left: 0, top: 0, width: 0, maxHeight: 320 });
  const listId = useId();
  const urls = useRef(new Map<string, string>());
  const metadata = useRef(assets); metadata.current = assets;
  const callbacks = useRef({ onChange, onLoadAssets }); callbacks.current = { onChange, onLoadAssets };
  const available = (asset: ReferenceAsset) => availableIds === undefined || availableIds.includes(asset.id);
  const eligible = (asset: ReferenceAsset) => allowedKinds.includes(assetKind(asset)) && available(asset);
  const sizeLimit = (asset: ReferenceAsset) => referenceSizeLimit(asset, imageLimit);
  const rules = { availableIds, allowedKinds, maxImages: maxImageReferences, imageBytes: imageLimit };
  const options = assets.filter(asset => eligible(asset) && (category === 'all' || assetKind(asset) === category));
  function blocked(asset: ReferenceAsset) {
    const ids = referenceIds(current.current);
    return asset.size > sizeLimit(asset) || !ids.includes(asset.id) && (ids.length >= REFERENCE_LIMIT || (assetKind(asset) === 'image' && ids.filter(id => assets.some(item => item.id === id && assetKind(item) === 'image')).length >= maxImageReferences));
  }
  function decorate() {
    root.current?.querySelectorAll<HTMLElement>('[data-reference]').forEach(element => {
      const part = JSON.parse(element.dataset.reference!);
      const asset = metadata.current.find(item => item.id === part.assetId);
      const unavailable = !asset || (availableIds !== undefined && !availableIds.includes(part.assetId));
      const changed = asset && part.fingerprint && !fingerprintMatches(asset, part.fingerprint);
      element.classList.toggle('is-unavailable', !!unavailable || !!changed);
      element.title = `${part.name}${unavailable ? '（非当前版本或已缺失）' : changed ? '（内容已变化）' : ''}`;
      const metadataOnly = asset && metadataOnlyKinds.includes(assetKind(asset));
      element.querySelector('[data-reference-info]')?.remove();
      if (metadataOnly) { const hint = document.createElement('small'); hint.dataset.referenceInfo = '1'; hint.textContent = '仅素材信息'; element.append(hint); element.title += '（助手暂不读取音画内容）'; }
      const src = urls.current.get(`${part.assetId}:${asset?.fingerprint ?? ''}`);
      const previousImage = element.querySelector('img');
      if (previousImage && previousImage.getAttribute('src') !== src) previousImage.remove();
      if (src && !element.querySelector('img')) {
        const image = document.createElement('img'); image.src = src; image.alt = ''; image.draggable = false;
        element.prepend(image);
      }
    });
  }
  function paint(content: ReferenceContent, caret?: Caret) {
    if (!root.current) return;
    const fragment = document.createDocumentFragment();
    content.forEach(part => {
      if (part.type === 'text') fragment.append(document.createTextNode(part.text));
      else {
        const chip = document.createElement('span'); chip.contentEditable = 'false'; chip.dataset.reference = JSON.stringify(part);
        chip.className = 'reference-token'; chip.setAttribute('role', 'button'); chip.setAttribute('tabindex', '0'); chip.setAttribute('aria-label', `预览参考：${part.name}`);
        const text = document.createElement('span'); text.textContent = part.name; chip.append(text); fragment.append(chip);
      }
    });
    // A trailing text node lets the caret sit after an atomic last reference.
    fragment.append(document.createTextNode('\u200b'));
    root.current.replaceChildren(fragment); root.current.dataset.empty = String(content.length === 0);
    decorate();
    if (caret) { root.current.focus({ preventScroll: true }); select(root.current, caret); savedCaret.current = caret; }
  }
  function publish(content: ReferenceContent, caret: Caret, redraw = true, mergeTyping = false) {
    const next = normalizeContent(content);
    if (!validContent(next)) { setNotice(`正文最多 20000 字，参考数量系统上限为 ${REFERENCE_LIMIT} 份。`); paint(current.current, savedCaret.current); return; }
    try {
      const existing = new Set(referenceIds(current.current));
      for (const id of referenceIds(next).filter(id => !existing.has(id))) {
        const asset = assets.find(asset => asset.id === id);
        if (!asset) throw new Error('引用素材不存在，未插入。');
        referenceInsertion([], { start: 0, end: 0 }, [asset], assets, rules);
      }
    } catch (failure) { setNotice((failure as Error).message); paint(current.current, savedCaret.current); return; }
    if (JSON.stringify(next) !== JSON.stringify(current.current)) {
      if (!mergeTyping || Date.now() - lastEdit.current > 600) {
        past.current.push({ content: current.current, caret: savedCaret.current });
        if (past.current.length > 100) past.current.shift();
      }
      future.current = []; lastEdit.current = mergeTyping ? Date.now() : 0;
      current.current = next; callbacks.current.onChange(next);
    }
    savedCaret.current = caret;
    if (redraw) paint(next, caret);
    else if (root.current) root.current.dataset.empty = String(next.length === 0);
    setNotice('');
  }
  function updateMention() {
    if (!allowReferences || disabled || composing.current || !root.current) return;
    const caret = selection(root.current);
    if (!caret || caret.start !== caret.end) { setPicker(null); return; }
    savedCaret.current = caret;
    const before = editingText(current.current).slice(0, caret.start).replaceAll('\u200b', '');
    const match = /(?:^|[^A-Za-z0-9_.+%@])@$/.exec(before);
    if (!match) { dismissedMention.current = null; setPicker(null); return; }
    const next = { start: caret.start - 1, end: caret.end };
    if (dismissedMention.current === next.start) return;
    if (!pickerRef.current) { setActive(0); setCategory('all'); void callbacks.current.onLoadAssets?.(); }
    setPicker(next);
  }
  function insert(added: ReferenceAsset[]) {
    if (disabled || confirmingRef.current || !allowReferences || !root.current) return;
    const range = pickerRef.current ?? selection(root.current) ?? savedCaret.current;
    try {
      const next = referenceInsertion(current.current, range, added, assets, rules);
      publish(next.content, next.caret); setPicker(null);
    } catch (error) { setNotice((error as Error).message); }
  }
  async function confirmReferences() {
    if (disabled || confirmingRef.current || !allowReferences || !root.current || !onConfirmReferences || composing.current) return;
    const clicked = selection(root.current) ?? savedCaret.current;
    // A pending batch adds context; even a drag-select in the body must not
    // replace existing text. Normal @ insertion keeps its replacement behavior.
    const range = { start: clicked.end, end: clicked.end };
    const before = current.current, key = confirmationKey;
    confirmingRef.current = true; setConfirming(true); setPicker(null); setNotice('');
    try {
      const next = referenceInsertion(before, range, pendingReferences ?? [], assets, rules, true);
      if (!await onConfirmReferences(next.content) || confirmation.current !== key || !root.current) return;
      if (JSON.stringify(current.current) !== JSON.stringify(before)) throw new Error('正文已变化，整批未插入，请重新点击正文确认。');
      // One publish gives the entire batch exactly one editor undo entry.
      publish(next.content, next.caret); onReferencesInserted?.();
    } catch (error) {
      if (confirmation.current === key && root.current) setNotice((error as Error).message);
    } finally {
      confirmingRef.current = false; setConfirming(false);
    }
  }
  function openPicker() {
    if (disabled || confirmingRef.current || !allowReferences) return;
    const caret = root.current && selection(root.current) || savedCaret.current;
    dismissedMention.current = null;
    setPicker(caret); setCategory('all'); setActive(0);
    void callbacks.current.onLoadAssets?.(); root.current?.focus({ preventScroll: true });
  }
  useImperativeHandle(ref, () => ({ insert, openPicker }));
  useLayoutEffect(() => {
    if (JSON.stringify(value) !== JSON.stringify(current.current) || !root.current?.childNodes.length) {
      const caret = root.current && document.activeElement === root.current ? selection(root.current) : null;
      if (editingText(value) === editingText(current.current)) {
        for (const stack of [past, future]) stack.current = stack.current.map(item => ({ ...item, content: currentReferences(item.content, assets) }));
      } else { past.current = []; future.current = []; }
      current.current = value; paint(value, caret ?? undefined);
    }
  }, [value]);
  useEffect(() => { decorate(); }, [assets, availableIds, metadataOnlyKinds.join(',')]);
  const thumbnailKey = referenceIds(value).map(id => `${id}:${assets.find(asset => asset.id === id)?.fingerprint ?? ''}`).join('|');
  useEffect(() => {
    let disposed = false;
    const controller = new AbortController();
    for (const id of referenceIds(value)) {
      const asset = assets.find(item => item.id === id);
      const key = `${id}:${asset?.fingerprint ?? ''}`;
      if (!asset || assetKind(asset) !== 'image' || urls.current.has(key)) continue;
      void loadAsset(scope, id, controller.signal).then(blob => {
        if (disposed) return;
        urls.current.set(key, URL.createObjectURL(blob)); decorate();
      }).catch(() => {});
    }
    const activeKeys = new Set(referenceIds(value).map(id => `${id}:${assets.find(asset => asset.id === id)?.fingerprint ?? ''}`));
    urls.current.forEach((url, key) => { if (!activeKeys.has(key)) { URL.revokeObjectURL(url); urls.current.delete(key); } });
    return () => { disposed = true; controller.abort(); };
  }, [scope, thumbnailKey]);
  useEffect(() => () => { urls.current.forEach(url => URL.revokeObjectURL(url)); urls.current.clear(); }, [scope]);
  useEffect(() => {
    if (!picker) return;
    function place() {
      if (!root.current) return;
      const rect = root.current.getBoundingClientRect();
      const width = Math.min(440, window.innerWidth - 24, Math.max(280, rect.width));
      const above = rect.top - 12, below = window.innerHeight - rect.bottom - 12;
      const height = Math.min(360, Math.max(100, above >= below ? above : below));
      setPosition({ left: Math.max(12, Math.min(rect.left, window.innerWidth - width - 12)), top: above >= below ? rect.top - height - 6 : rect.bottom + 6, width, maxHeight: height });
    }
    place(); window.addEventListener('resize', place); window.addEventListener('scroll', place, true);
    return () => { window.removeEventListener('resize', place); window.removeEventListener('scroll', place, true); };
  }, [!!picker]);
  useEffect(() => { panel.current?.querySelector('[aria-selected="true"][role="option"]')?.scrollIntoView({ block: 'nearest' }); }, [active, category, !!picker]);
  function undo(redo: boolean) {
    const from = redo ? future : past, to = redo ? past : future;
    const snapshot = from.current.pop();
    if (!snapshot) return;
    to.current.push({ content: current.current, caret: root.current && selection(root.current) || savedCaret.current });
    current.current = snapshot.content; callbacks.current.onChange(snapshot.content); paint(snapshot.content, snapshot.caret); setPicker(null); lastEdit.current = 0;
  }
  function input() {
    if (!root.current || composing.current || confirmingRef.current) return;
    const caret = selection(root.current) ?? savedCaret.current;
    publish(readDOM(root.current), caret, false, true); updateMention();
  }
  return <div className="reference-editor-wrap">
    <div ref={root} className="reference-editor" contentEditable={!disabled && !confirming} suppressContentEditableWarning role="textbox" aria-multiline="true" aria-label={label} aria-disabled={disabled} aria-busy={confirming} data-placeholder={placeholder}
      aria-controls={picker ? listId : undefined} aria-expanded={!!picker} aria-autocomplete="list" aria-activedescendant={picker && options[active] ? `${listId}-${active}` : undefined}
      onCompositionStart={() => { composing.current = true; setPicker(null); }} onCompositionEnd={() => { composing.current = false; input(); }} onInput={input}
      onFocus={() => { if (root.current) savedCaret.current = selection(root.current) ?? savedCaret.current; }}
      onBlur={event => { if (!event.relatedTarget || !event.currentTarget.parentElement?.contains(event.relatedTarget as Node)) setPicker(null); onBlur?.(event.relatedTarget as HTMLElement | null); }}
      onPointerUp={() => { if (root.current) savedCaret.current = selection(root.current) ?? savedCaret.current; }}
      onClick={event => { if (onConfirmReferences) { void confirmReferences(); return; } const token = (event.target as HTMLElement).closest<HTMLElement>('[data-reference]'); if (token) { const part = JSON.parse(token.dataset.reference!); setPreview(assets.find(asset => asset.id === part.assetId) ?? null); } }}
      onBeforeInput={event => { if (disabled || confirmingRef.current) { event.preventDefault(); return; } const native = event.nativeEvent as InputEvent; if (native.inputType === 'historyUndo' || native.inputType === 'historyRedo') { event.preventDefault(); undo(native.inputType === 'historyRedo'); } }}
      onKeyDown={event => {
        event.stopPropagation();
        if (disabled || confirmingRef.current) { event.preventDefault(); return; }
        const token = (event.target as HTMLElement).closest<HTMLElement>('[data-reference]');
        if (token && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); const part = JSON.parse(token.dataset.reference!); setPreview(assets.find(asset => asset.id === part.assetId) ?? null); return; }
        if (composing.current || event.nativeEvent.isComposing || event.nativeEvent.keyCode === 229) return;
        if ((event.ctrlKey || event.metaKey) && !event.altKey && (event.key.toLowerCase() === 'z' || event.key.toLowerCase() === 'y')) { event.preventDefault(); undo(event.shiftKey || event.key.toLowerCase() === 'y'); return; }
        if (picker && ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter', 'Escape'].includes(event.key)) {
          event.preventDefault();
          if (event.key === 'Escape') { dismissedMention.current = picker.start; setPicker(null); }
          else if (event.key === 'Enter') { if (loading || loadError) return; const asset = options[Math.min(active, options.length - 1)]; if (asset && !blocked(asset)) insert([asset]); }
          else if (event.key === 'ArrowUp' || event.key === 'ArrowDown') setActive(value => options.length ? (value + (event.key === 'ArrowDown' ? 1 : -1) + options.length) % options.length : 0);
          else { const categories = CATEGORIES.filter(item => item.id === 'all' || allowedKinds.includes(item.id)); const index = categories.findIndex(item => item.id === category); setCategory(categories[(index + (event.key === 'ArrowRight' ? 1 : -1) + categories.length) % categories.length].id); setActive(0); }
          return;
        }
        if (event.key === 'Backspace' || event.key === 'Delete') {
          const caret = selection(root.current!) ?? savedCaret.current;
          const text = editingText(current.current);
          const start = caret.start === caret.end && event.key === 'Backspace' ? Math.max(0, caret.start - 1) : caret.start;
          const end = caret.start === caret.end && event.key === 'Delete' ? Math.min(text.length, caret.end + 1) : caret.end;
          if (text.slice(start, end).includes('\ufffc')) { event.preventDefault(); publish(editContent(current.current, { start, end }, []), { start, end: start }); setPicker(null); return; }
        }
        if (event.key === 'Enter') {
          event.preventDefault();
          if (onSubmit && !event.shiftKey) onSubmit();
          else { const caret = selection(root.current!) ?? savedCaret.current; publish(editContent(current.current, caret, [{ type: 'text', text: '\n' }]), { start: caret.start + 1, end: caret.start + 1 }); }
        } else if (event.key.startsWith('Arrow') || event.key === 'Home' || event.key === 'End') queueMicrotask(updateMention);
      }}
      onCopy={event => {
        const caret = selection(root.current!); if (!caret || caret.start === caret.end) return;
        const selected = editContent(editContent(current.current, { start: caret.end, end: editingText(current.current).length }, []), { start: 0, end: caret.start }, []);
        event.preventDefault(); event.clipboardData.setData('text/plain', contentText(selected)); event.clipboardData.setData(CLIPBOARD, JSON.stringify({ scope, content: selected }));
      }}
      onCut={event => {
        if (disabled || confirmingRef.current) { event.preventDefault(); return; }
        const caret = selection(root.current!); if (!caret || caret.start === caret.end) return;
        const selected = editContent(editContent(current.current, { start: caret.end, end: editingText(current.current).length }, []), { start: 0, end: caret.start }, []);
        event.preventDefault(); event.clipboardData.setData('text/plain', contentText(selected)); event.clipboardData.setData(CLIPBOARD, JSON.stringify({ scope, content: selected }));
        publish(editContent(current.current, caret, []), { start: caret.start, end: caret.start });
      }}
      onDrop={event => {
        if (disabled || confirmingRef.current) { event.preventDefault(); return; }
        if (event.dataTransfer.files.length) { if (onPasteFiles) { event.preventDefault(); event.stopPropagation(); onPasteFiles([...event.dataTransfer.files]); } return; }
        event.preventDefault();
        const text = event.dataTransfer.getData('text/plain');
        if (text) { const caret = selection(root.current!) ?? savedCaret.current; publish(editContent(current.current, caret, [{ type: 'text', text }]), { start: caret.start + text.length, end: caret.start + text.length }); }
      }}
      onPaste={event => {
        event.preventDefault();
        if (disabled || confirmingRef.current) return;
        if (event.clipboardData.files.length && onPasteFiles) { if (root.current) savedCaret.current = selection(root.current) ?? savedCaret.current; onPasteFiles([...event.clipboardData.files]); return; }
        let inserted: ReferenceContent = [{ type: 'text', text: event.clipboardData.getData('text/plain') }];
        try {
          const data = JSON.parse(event.clipboardData.getData(CLIPBOARD));
          if (Array.isArray(data.content) && !allowReferences) inserted = data.content.filter((part: ReferenceContent[number]) => part.type === 'text' && typeof part.text === 'string');
          else if (data.scope === scope && Array.isArray(data.content) && allowReferences && data.content.every((part: ReferenceContent[number]) => part.type === 'text' ? typeof part.text === 'string' : part.type === 'reference' && typeof part.name === 'string' && part.name.length > 0 && part.name.length <= 255 && assets.some(asset => asset.id === part.assetId && available(asset)))) inserted = normalizeContent(data.content);
        } catch { /* Plain text is the safe cross-project/foreign clipboard fallback. */ }
        const caret = selection(root.current!) ?? savedCaret.current;
        const next = editContent(current.current, caret, inserted);
        if (referenceIds(next).filter(id => assets.some(asset => asset.id === id && assetKind(asset) === 'image')).length > maxImageReferences) { setNotice('参考图片数量超过当前生成限制。'); return; }
        const end = caret.start + editingText(inserted).length; publish(next, { start: end, end }); updateMention();
      }} />
    {picker && <div ref={panel} className="reference-picker" style={position} onPointerDown={event => event.preventDefault()} onKeyDown={event => event.stopPropagation()}>
      <header><strong>引用项目资产</strong><small>↑↓ 选择 · ←→ 分类 · Enter 确认 · Esc 关闭</small></header>
      <div role="tablist" aria-label="参考资产类型">{CATEGORIES.map(item => <button key={item.id} type="button" role="tab" aria-selected={category === item.id} disabled={item.id !== 'all' && !allowedKinds.includes(item.id)} title={item.id !== 'all' && !allowedKinds.includes(item.id) ? '当前输入暂不支持此类参考' : undefined} onClick={() => { setCategory(item.id); setActive(0); }}>{item.label}</button>)}</div>
      <div role="listbox" id={listId} aria-label="可引用资产" className="reference-picker-list">
        {loading ? <p role="status">正在读取资产…</p> : loadError ? <p role="alert">{loadError}<button type="button" className="secondary-button" onClick={() => void callbacks.current.onLoadAssets?.()}>重新读取资产列表</button></p> : !options.length ? <p>暂无可引用的项目资产，请先上传或保存。</p> : options.map((asset, index) => <button key={asset.id} id={`${listId}-${index}`} type="button" role="option" aria-selected={active === index} aria-disabled={blocked(asset)} onMouseEnter={() => setActive(index)} onClick={() => { if (!blocked(asset)) insert([asset]); }}>
          <ReferenceThumbnail scope={scope} asset={asset} /><span><strong>{asset.nodeTitle || asset.name}</strong><small>{CATEGORIES.find(item => item.id === assetKind(asset))?.label} · {referenceIds(value).includes(asset.id) ? '已引用，可再次提及' : asset.nodeTitle && asset.nodeTitle !== asset.name ? asset.name : '项目素材'}</small></span>{blocked(asset) && <small>{asset.size > sizeLimit(asset) ? '文件过大' : '已达数量限制'}</small>}
        </button>)}
      </div>
    </div>}
    {notice && <p className="reference-warning" role="status">{notice}</p>}
    {preview && <ReferencePreview scope={scope} asset={preview} onClose={() => setPreview(null)} />}
  </div>;
}
