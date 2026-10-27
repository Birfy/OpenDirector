import { useLayoutEffect, useRef, useState, type MouseEvent, type PointerEvent } from 'react';
import { Icon } from '../../../components/Icon';
import type { Theme } from '../theme';
import { GeneralSettings } from './GeneralSettings';
import { ModelSettings } from './ModelSettings';
import type { ModelCatalog } from '../hooks/useModelConfigs';
import { useGeneralSettings } from '../hooks/useGeneralSettings';

const categories = [
  { id: 'general', label: '通用', icon: 'settings' },
  { id: 'models', label: '模型接入', icon: 'model' },
] as const;

interface Props {
  initialCategory: 'general' | 'models';
  modelCatalog: ModelCatalog;
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
  error: string;
  onDismissError: () => void;
  onClose: () => void;
}

export function SettingsDialog({ initialCategory, modelCatalog, theme, onThemeChange, error, onDismissError, onClose }: Props) {
  const generalSettings = useGeneralSettings();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const backdropPressed = useRef(false);
  const [category, setCategory] = useState<(typeof categories)[number]['id']>(initialCategory);
  const current = categories.find(item => item.id === category)!;

  useLayoutEffect(() => {
    const dialog = dialogRef.current!;
    dialog.showModal();
    return () => dialog.close();
  }, []);

  function isBackdrop(event: PointerEvent<HTMLDialogElement> | MouseEvent<HTMLDialogElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    return event.target === event.currentTarget &&
      (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom);
  }

  return <dialog ref={dialogRef} id="settings-dialog" className="settings-dialog" aria-labelledby="settings-title" aria-modal="true"
    onCancel={event => { event.preventDefault(); onClose(); }}
    onPointerDown={event => { backdropPressed.current = isBackdrop(event); }}
    onPointerCancel={() => { backdropPressed.current = false; }}
    onClick={event => {
      if (backdropPressed.current && isBackdrop(event)) onClose();
      backdropPressed.current = false;
    }}>
    <div className="settings-layout">
      <aside className="settings-sidebar">
        <h1 id="settings-title">设置</h1>
        <nav className="settings-navigation" aria-label="设置分类">
          {categories.map(item => <button key={item.id} type="button" autoFocus={item.id === initialCategory} aria-current={category === item.id ? 'page' : undefined} aria-controls="settings-content" onClick={() => setCategory(item.id)}>
            <Icon name={item.icon} /><span>{item.label}</span>
          </button>)}
        </nav>
      </aside>
      <section className="settings-main" id="settings-content" aria-labelledby="settings-section-title">
        <header className="settings-header"><h2 id="settings-section-title">{current.label}</h2></header>
        <div className="settings-body">
          {error && <div className="settings-notice" role="alert"><span>{error}</span><button type="button" className="icon-button" aria-label="关闭主题提示" onClick={onDismissError}><Icon name="close" /></button></div>}
          {category === 'general' ? <GeneralSettings theme={theme} onThemeChange={onThemeChange} controls={generalSettings} /> : <ModelSettings catalog={modelCatalog} />}
        </div>
      </section>
      <button type="button" className="icon-button settings-close" aria-label="关闭设置" onClick={onClose}><Icon name="close" /></button>
    </div>
  </dialog>;
}
