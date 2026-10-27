import { useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent } from 'react';
import { Icon } from '../../../components/Icon';
import type { Theme } from '../theme';

const options = [
  { value: 'light', label: '浅色', icon: 'sun' },
  { value: 'dark', label: '深色', icon: 'moon' },
] as const;

export function ThemeSelect({ theme, onThemeChange }: { theme: Theme; onThemeChange: (theme: Theme) => void }) {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<{ left: number; top: number; width: number } | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const list = useRef<HTMLDivElement>(null);
  const positioned = position !== null;
  const selected = options.find(option => option.value === theme)!;

  function close(restoreFocus = false) {
    setOpen(false);
    setPosition(null);
    if (restoreFocus) trigger.current?.focus();
  }

  useLayoutEffect(() => {
    if (!open) return;
    const place = () => {
      const anchor = trigger.current!.getBoundingClientRect();
      const height = list.current!.getBoundingClientRect().height;
      const below = window.innerHeight - anchor.bottom - 8;
      const top = below < height + 4 && anchor.top > below ? anchor.top - height - 4 : anchor.bottom + 4;
      const next = {
        left: Math.max(8, Math.min(anchor.left, document.documentElement.clientWidth - anchor.width - 8)),
        top: Math.max(8, Math.min(top, window.innerHeight - height - 8)),
        width: anchor.width,
      };
      setPosition(current => current?.left === next.left && current.top === next.top && current.width === next.width ? current : next);
    };
    place();
    const observer = new ResizeObserver(place);
    observer.observe(trigger.current!);
    window.addEventListener('resize', place);
    window.addEventListener('scroll', place, true);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', place);
      window.removeEventListener('scroll', place, true);
    };
  }, [open]);

  useLayoutEffect(() => {
    if (open && positioned) list.current?.querySelector<HTMLButtonElement>('[aria-selected="true"]')?.focus();
  }, [open, positioned]);

  useEffect(() => {
    if (!open) return;
    const dismiss = (event: Event) => {
      if (event.target instanceof Node && !root.current?.contains(event.target)) close();
    };
    document.addEventListener('pointerdown', dismiss);
    document.addEventListener('focusin', dismiss);
    return () => {
      document.removeEventListener('pointerdown', dismiss);
      document.removeEventListener('focusin', dismiss);
    };
  }, [open]);

  function keys(event: KeyboardEvent<HTMLDivElement>) {
    if (!open) {
      if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(event.key)) { event.preventDefault(); setOpen(true); }
      return;
    }
    if (event.key === 'Escape') {
      event.preventDefault(); event.stopPropagation(); close(true);
    } else if (event.key === 'Tab') {
      close(true);
    } else if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      event.preventDefault();
      const items = [...list.current!.querySelectorAll<HTMLButtonElement>('[role="option"]')];
      const current = items.indexOf(document.activeElement as HTMLButtonElement);
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1
        : (current + (event.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
      items[next]?.focus();
    }
  }

  return <div ref={root} className="settings-select" onKeyDown={keys}>
    <button ref={trigger} id="settings-theme" type="button" className="settings-theme-trigger" aria-labelledby="settings-theme-label settings-theme-value" aria-describedby="settings-theme-hint" aria-haspopup="listbox" aria-expanded={open} aria-controls={open ? 'settings-theme-options' : undefined} onClick={() => { if (open) close(); else setOpen(true); }}>
      <Icon name={selected.icon} /><span id="settings-theme-value">{selected.label}</span><Icon name="chevron-down" />
    </button>
    {open && <div ref={list} id="settings-theme-options" className="settings-theme-options" role="listbox" aria-labelledby="settings-theme-label" style={{ left: position?.left ?? 0, top: position?.top ?? 0, width: position?.width ?? 144, visibility: position ? 'visible' : 'hidden' }}>
      {options.map(option => <button key={option.value} type="button" role="option" tabIndex={-1} aria-selected={theme === option.value} onClick={() => { onThemeChange(option.value); close(true); }}>
        <Icon name={option.icon} /><span>{option.label}</span>
      </button>)}
    </div>}
  </div>;
}
