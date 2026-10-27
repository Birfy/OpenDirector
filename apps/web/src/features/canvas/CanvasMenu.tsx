import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Icon } from '../../components/Icon';
import { NODE_LABELS, type NodeKind } from './types';
import type { ModelCatalog } from '../settings/hooks/useModelConfigs';

export interface MenuState { x: number; y: number; worldX: number; worldY: number; adding: boolean; nodeId?: string }
export function CanvasMenu({ state, onClose, onAdd, onUpload, onExisting, onTypes, reference, download }: { state: MenuState; download?: { enabled: boolean; pending: boolean; onClick: () => void }; onClose: () => void; onAdd: (kind: NodeKind) => void; onUpload: () => void; onExisting: () => void; onTypes: () => void; reference?: { kind: NodeKind; models: ModelCatalog; onAdd: (kind: NodeKind) => void } }) {
  const menu = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const close = (event: PointerEvent) => { if (!menu.current?.contains(event.target as Node)) onClose(); };
    window.addEventListener('pointerdown', close);
    menu.current?.querySelector<HTMLButtonElement>('button:not(:disabled)')?.focus();
    return () => window.removeEventListener('pointerdown', close);
  }, [onClose, state.adding]);
  return createPortal(<div ref={menu} className="canvas-menu" role="menu" aria-label={state.adding ? '添加节点' : '画布菜单'} style={{ left: Math.max(8, Math.min(state.x, window.innerWidth - 240)), top: Math.max(8, Math.min(state.y, window.innerHeight - 280)) }} onPointerDown={event => event.stopPropagation()} onContextMenu={event => { event.preventDefault(); event.stopPropagation(); }} onKeyDown={event => {
    event.stopPropagation();
    if (event.key === 'Escape') onClose();
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault(); const buttons = [...menu.current!.querySelectorAll<HTMLButtonElement>('button:not(:disabled)')];
      const index = buttons.indexOf(document.activeElement as HTMLButtonElement);
      buttons[(index + (event.key === 'ArrowDown' ? 1 : -1) + buttons.length) % buttons.length]?.focus();
    }
  }}>
    {state.adding ? <><p>{reference ? '添加下游节点' : '添加节点'}</p>{(Object.keys(NODE_LABELS) as NodeKind[]).map(kind => {
      const supported = !reference || reference.models.models.some(model => model.kind === (kind === 'text' ? 'agent' : kind)
        && model.inputRules.allowedKinds.includes(reference.kind)
        && (kind !== 'video' || model.inputRules.videoModes.some(mode => reference.kind === 'video' ? mode === 'continuation' : reference.kind !== 'audio' || mode !== 'first_frame')));
      return <button key={kind} type="button" role="menuitem" disabled={!supported} title={!supported ? '没有支持此参考的模型' : undefined} onClick={() => {
        if (reference) reference.onAdd(kind); else onAdd(kind);
      }}><Icon name={kind === 'text' ? 'file' : kind} />{NODE_LABELS[kind]}</button>;
    })}</> : <>
      <button type="button" role="menuitem" onClick={onUpload}><Icon name="upload" />上传</button>
      {download && <button type="button" role="menuitem" disabled={!download.enabled || download.pending} title={!download.enabled ? '成功生成视频后可下载' : undefined} onClick={download.onClick}><Icon name="download" />{download.pending ? '正在准备下载…' : '下载视频'}</button>}
      <button type="button" role="menuitem" onClick={onTypes}><Icon name="plus" />添加节点<span>›</span></button>
      <hr /><button type="button" role="menuitem" onClick={onExisting}><Icon name="folder" />资产列表</button>
    </>}
  </div>, document.body);
}
