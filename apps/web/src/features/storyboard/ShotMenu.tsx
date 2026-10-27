import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Icon } from '../../components/Icon';

export function ShotMenu({ title, first, last, disabled, onMove, onCopy, onRemove }: { title: string; first: boolean; last: boolean; disabled: boolean; onMove: (direction: -1 | 1) => void; onCopy: () => void; onRemove: () => void }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const place = useCallback(() => {
    if (!trigger.current || !menu.current) return;
    const anchor = trigger.current.getBoundingClientRect(), bounds = menu.current.getBoundingClientRect();
    const next = { left: Math.max(8, Math.min(anchor.right - bounds.width, window.innerWidth - bounds.width - 8)),
      top: Math.max(8, Math.min(anchor.bottom + bounds.height + 8 > window.innerHeight ? anchor.top - bounds.height - 4 : anchor.bottom + 4, window.innerHeight - bounds.height - 8)) };
    setPosition(old => old.left === next.left && old.top === next.top ? old : next);
  }, []);
  useLayoutEffect(() => { if (open) place(); }, [open, place]);
  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => { if (!root.current?.contains(event.target as Node) && !menu.current?.contains(event.target as Node)) setOpen(false); };
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') { event.stopPropagation(); setOpen(false); trigger.current?.focus(); } };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    window.addEventListener('resize', place);
    document.addEventListener('scroll', place, true);
    return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', escape); window.removeEventListener('resize', place); document.removeEventListener('scroll', place, true); };
  }, [open, place]);
  const act = (action: () => void) => { setOpen(false); action(); };
  return <div ref={root} className="shot-menu">
    <button ref={trigger} type="button" className="icon-button" aria-label={`镜头操作：${title}`} aria-expanded={open} disabled={disabled} onClick={() => setOpen(value => !value)}><Icon name="more" /></button>
    {open && createPortal(<div ref={menu} className="shot-menu-options" aria-label="镜头操作" style={position}>
      <button type="button" disabled={first || disabled} onClick={() => act(() => onMove(-1))}><Icon name="arrow-up" />上移</button>
      <button type="button" disabled={last || disabled} onClick={() => act(() => onMove(1))}><span className="shot-down"><Icon name="arrow-up" /></span>下移</button>
      <button type="button" disabled={disabled} onClick={() => act(onCopy)}><Icon name="file" />复制镜头</button>
      <button type="button" disabled={disabled} onClick={() => act(onRemove)}><Icon name="close" />移除镜头</button>
    </div>, document.body)}
  </div>;
}
