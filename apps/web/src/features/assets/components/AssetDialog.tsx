import { useEffect, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Icon } from '../../../components/Icon';

export function AssetDialog({ title, busy = false, onClose, children }: { title: string; busy?: boolean; onClose: () => void; children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => { dialog.current?.showModal(); }, []);
  return createPortal(<dialog ref={dialog} className="project-asset-dialog" aria-label={title}
    onPointerDown={event => event.stopPropagation()} onContextMenu={event => event.stopPropagation()}
    onKeyDown={event => event.stopPropagation()} onDoubleClick={event => event.stopPropagation()}
    onCancel={event => { event.preventDefault(); if (!busy) onClose(); }}
    onClick={event => { event.stopPropagation(); if (event.target === event.currentTarget && !busy) onClose(); }}>
    <header><h2>{title}</h2><button type="button" className="icon-button" aria-label={`关闭${title}`} disabled={busy} onClick={onClose}><Icon name="close" /></button></header>
    {children}
  </dialog>, document.body);
}
