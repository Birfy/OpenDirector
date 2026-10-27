import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { Icon } from '../../../components/Icon';
interface Option { id: string; label: string; description: string }
export function ChoicePicker({ label, icon, options, value, onChange, disabled = false }: {
  label: string; icon: 'model' | 'thinking'; options: Option[]; value: string; onChange: (value: string) => void; disabled?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const selected = options.find(option => option.id === value);
  useEffect(() => {
    if (!open) return;
    (menu.current?.querySelector<HTMLButtonElement>('[aria-selected="true"]') ?? menu.current?.querySelector<HTMLButtonElement>('button'))?.focus();
    const dismiss = (event: Event) => { if (event.target instanceof Node && !root.current?.contains(event.target)) setOpen(false); };
    document.addEventListener('pointerdown', dismiss);
    document.addEventListener('focusin', dismiss);
    return () => { document.removeEventListener('pointerdown', dismiss); document.removeEventListener('focusin', dismiss); };
  }, [open]);
  function keys(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Escape' || event.key === 'Tab') {
      if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); }
      if (event.key === 'Tab') { setOpen(false); return; }
      trigger.current?.focus(); setOpen(false); return;
    }
    const items = [...event.currentTarget.querySelectorAll<HTMLButtonElement>('button')];
    const current = items.indexOf(document.activeElement as HTMLButtonElement);
    const next = event.key === 'ArrowDown' ? (current + 1) % items.length : event.key === 'ArrowUp' ? (current - 1 + items.length) % items.length : event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 : null;
    if (next !== null) { event.preventDefault(); items[next]?.focus(); }
  }
  return <div ref={root} className="chat-picker">
    <button ref={trigger} type="button" className="chat-picker-trigger" disabled={disabled} aria-label={`${label}：${selected?.label ?? '未配置'}`} title={label} aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen(!open)} onKeyDown={event => { if (event.key === 'ArrowDown') { event.preventDefault(); setOpen(true); } }}>
      <Icon name={icon} /><span>{selected?.label ?? '未配置'}</span><Icon name="chevron-down" />
    </button>
    {open && <div ref={menu} className="chat-picker-menu" onKeyDown={keys}>
      <div className="picker-heading">{label}</div>
      <div role="listbox" aria-label={label}>
      {options.map(option => <button type="button" key={option.id} role="option" tabIndex={-1} aria-selected={value === option.id} onClick={() => { onChange(option.id); setOpen(false); trigger.current?.focus(); }}>
        <span><strong>{option.label}</strong><small>{option.description}</small></span>{value === option.id && <Icon name="check" />}
      </button>)}
      </div>
    </div>}
  </div>;
}
