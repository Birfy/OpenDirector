import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';
import { Icon } from '../../../components/Icon';
import { MODEL_KINDS, modelOptions, type ModelConfig, type ModelKind, type ModelSelections } from '../../settings/models';

const icons = { agent: 'model', video: 'video', image: 'image', audio: 'audio' } as const;

export function ModelPicker({ models, selections, onChange, onConfigure, disabled }: {
  models: ModelConfig[]; selections: ModelSelections; onChange: (kind: ModelKind, id: string) => void;
  onConfigure: () => void; disabled: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [kind, setKind] = useState<ModelKind>('agent');
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const id = useId();
  const category = MODEL_KINDS.find(item => item.id === kind)!;
  const options = modelOptions(models, kind);
  const agent = modelOptions(models, 'agent').find(item => item.id === selections.agent);
  const focusIndex = Math.max(0, options.findIndex(option => option.id === selections[kind]));

  useEffect(() => {
    if (!open) return;
    panel.current?.querySelector<HTMLButtonElement>('[role="tab"][aria-selected="true"]')?.focus();
    const dismiss = (event: Event) => {
      if (event.target instanceof Node && !root.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener('pointerdown', dismiss);
    document.addEventListener('focusin', dismiss);
    return () => { document.removeEventListener('pointerdown', dismiss); document.removeEventListener('focusin', dismiss); };
  }, [open]);

  function close() { setOpen(false); trigger.current?.focus(); }
  function configure() { setOpen(false); onConfigure(); }
  function tabKeys(event: KeyboardEvent<HTMLDivElement>) {
    const buttons = [...event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
    const current = buttons.indexOf(document.activeElement as HTMLButtonElement);
    const next = event.key === 'ArrowRight' ? (current + 1) % MODEL_KINDS.length
      : event.key === 'ArrowLeft' ? (current - 1 + MODEL_KINDS.length) % MODEL_KINDS.length
      : event.key === 'Home' ? 0 : event.key === 'End' ? MODEL_KINDS.length - 1 : null;
    if (next !== null) { event.preventDefault(); setKind(MODEL_KINDS[next].id); buttons[next].focus(); }
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      panel.current?.querySelector<HTMLButtonElement>('[role="option"][tabindex="0"]')?.focus();
    }
  }
  function optionKeys(event: KeyboardEvent<HTMLDivElement>) {
    const buttons = [...event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="option"]')];
    if (!buttons.length) return;
    const current = buttons.indexOf(document.activeElement as HTMLButtonElement);
    const next = event.key === 'ArrowDown' ? (current + 1) % buttons.length
      : event.key === 'ArrowUp' ? (current - 1 + buttons.length) % buttons.length
      : event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length - 1 : null;
    if (next !== null) { event.preventDefault(); buttons[next].focus(); }
  }

  return <div ref={root} className="chat-picker model-picker">
    <button ref={trigger} type="button" className="chat-picker-trigger" disabled={disabled}
      aria-label={`模型配置：${agent?.label ?? '未配置 Agent'}`} title="选择 Agent、图片、视频和音频模型"
      aria-haspopup="dialog" aria-expanded={open} aria-controls={open ? id : undefined}
      onClick={() => setOpen(!open)} onKeyDown={event => { if (event.key === 'ArrowDown') { event.preventDefault(); setOpen(true); } }}>
      <Icon name="model" /><span>{agent?.label ?? '选择模型'}</span><Icon name="chevron-down" />
    </button>
    {open && <div ref={panel} id={id} className="model-picker-panel" role="dialog" aria-label="模型配置"
      onKeyDown={event => { if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); close(); } }}>
      <header className="model-picker-header">
        <span>模型配置</span>
        <button type="button" className="model-picker-configure" aria-haspopup="dialog" aria-controls="settings-dialog" onClick={configure}>
          <Icon name="settings" /><span>修改模型配置</span>
        </button>
      </header>
      <div className="model-picker-tabs" role="tablist" aria-label="模型类型" onKeyDown={tabKeys}>
        {MODEL_KINDS.map(tab => <button key={tab.id} id={`${id}-${tab.id}`} type="button" role="tab" aria-selected={kind === tab.id}
          aria-controls={`${id}-content`} tabIndex={kind === tab.id ? 0 : -1} onClick={() => setKind(tab.id)}>
          {tab.label}<span>{models.filter(model => model.kind === tab.id).length}</span>
        </button>)}
      </div>
      <div id={`${id}-content`} className="model-picker-content" role="tabpanel" aria-labelledby={`${id}-${kind}`}>
        {options.length === 0 ? <div className="model-picker-empty"><p>暂无{category.label}模型</p><button type="button" className="secondary-button" onClick={configure}>添加模型</button></div>
          : <div role="listbox" aria-label={`${category.label}模型`} onKeyDown={optionKeys}>
            {options.map((option, index) => <button key={option.id} type="button" role="option" aria-label={option.label}
              aria-selected={selections[kind] === option.id} tabIndex={index === focusIndex ? 0 : -1}
              onClick={() => { onChange(kind, option.id); close(); }}>
              <span className="model-picker-icon"><Icon name={icons[kind]} /></span>
              <span className="model-picker-copy"><strong>{option.label}</strong><small>{option.description}</small></span>
              {selections[kind] === option.id && <Icon name="check" />}
            </button>)}
          </div>}
      </div>
    </div>}
  </div>;
}
