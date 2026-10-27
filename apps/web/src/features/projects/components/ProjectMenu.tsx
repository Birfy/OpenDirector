import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { createPortal } from 'react-dom';
import { Icon } from '../../../components/Icon';
import type { Project } from '../types';

interface Props {
  project: Project;
  active: boolean;
  busy: boolean;
  onClose: () => void;
  onRename: (project: Project, trigger: HTMLButtonElement) => void;
}

export function ProjectMenu({ project, active, busy, onClose, onRename }: Props) {
  const [position, setPosition] = useState<{ left: number; top: number } | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!position) return;
    menuRef.current?.querySelector<HTMLButtonElement>('[role="menuitem"]')?.focus();
    const dismiss = (event: Event) => {
      if (event.target instanceof Node && (menuRef.current?.contains(event.target) || triggerRef.current?.contains(event.target))) return;
      setPosition(null);
    };
    const close = () => setPosition(null);
    document.addEventListener('pointerdown', dismiss);
    document.addEventListener('focusin', dismiss);
    window.addEventListener('resize', close);
    window.addEventListener('scroll', close, true);
    return () => {
      document.removeEventListener('pointerdown', dismiss);
      document.removeEventListener('focusin', dismiss);
      window.removeEventListener('resize', close);
      window.removeEventListener('scroll', close, true);
    };
  }, [position]);

  function toggle() {
    if (position) { setPosition(null); return; }
    const rect = triggerRef.current!.getBoundingClientRect();
    const height = active ? 84 : 48;
    setPosition({
      left: Math.max(8, Math.min(rect.right - 160, window.innerWidth - 168)),
      top: rect.bottom + 6 + height <= window.innerHeight ? rect.bottom + 6 : Math.max(8, rect.top - height - 6),
    });
  }

  function handleKeys(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Escape' || event.key === 'Tab') {
      if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); }
      triggerRef.current?.focus();
      setPosition(null);
      return;
    }
    const items = [...event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="menuitem"]')];
    const current = items.indexOf(document.activeElement as HTMLButtonElement);
    const next = event.key === 'ArrowDown' ? (current + 1) % items.length
      : event.key === 'ArrowUp' ? (current - 1 + items.length) % items.length
      : event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 : null;
    if (next !== null) { event.preventDefault(); items[next]?.focus(); }
  }

  return <>
    <button ref={triggerRef} disabled={busy} className="icon-button project-menu-trigger" aria-label={`项目“${project.name}”的更多操作`} title="更多操作" aria-haspopup="menu" aria-expanded={position !== null}
      onClick={toggle} onKeyDown={event => { if (event.key === 'ArrowDown') { event.preventDefault(); if (!position) toggle(); } }}>
      <Icon name="more" />
    </button>
    {position && createPortal(<div ref={menuRef} className="project-menu" role="menu" aria-label={`项目“${project.name}”的操作`} style={position} onKeyDown={handleKeys}>
      {active && <button role="menuitem" tabIndex={-1} onClick={() => { setPosition(null); onClose(); }}><Icon name="close" /><span>保存并关闭</span></button>}
      <button role="menuitem" tabIndex={-1} onClick={() => { setPosition(null); onRename(project, triggerRef.current!); }}><Icon name="edit" /><span>重命名</span></button>
    </div>, document.body)}
  </>;
}
