import type { CSSProperties, ReactNode, RefObject } from 'react';
import logoWithText from '../../assets/logo/logo_with_text.png';
import { Icon } from '../../components/Icon';
import type { SidebarControls } from './useSidebar';

interface Props {
  sidebar: SidebarControls;
  assistant: {
    collapsed: boolean;
    width: number;
    gridWidth: number;
    showRef: RefObject<HTMLButtonElement | null>;
    toggle: () => void;
  };
  hasProject: boolean;
  navigation: ReactNode;
  rightPanel: ReactNode;
  children: ReactNode;
  overlays: ReactNode;
  settings: ReactNode;
}

export function WorkbenchLayout({ sidebar, assistant, hasProject, navigation, rightPanel, children, overlays, settings }: Props) {
  const style = {
    '--project-panel-width': `${sidebar.collapsed ? 0 : sidebar.width}px`,
    '--context-panel-width': `${assistant.gridWidth}px`,
    '--assistant-expanded-width': `${assistant.width}px`,
  } as CSSProperties;

  return <div className={`app-shell${sidebar.collapsed ? ' sidebar-collapsed' : ''}${assistant.collapsed ? ' assistant-collapsed' : ''}`} style={style}>
    {!sidebar.collapsed && <>
      {sidebar.mobile && <button className="sidebar-backdrop" aria-label="收起项目侧边栏" onClick={sidebar.toggle} />}
      <aside id="project-sidebar" className={`project-panel${sidebar.dragging ? ' is-resizing' : ''}`} aria-label="项目导航">
        <header className="brand-header">
          <img className="brand-image" src={logoWithText} alt="MuseShow" draggable={false} />
          <button ref={sidebar.hideRef} className="icon-button sidebar-toggle" title="收起侧边栏" aria-label="收起侧边栏" aria-expanded="true" aria-controls="project-sidebar" onClick={sidebar.toggle}><Icon name="panel" /></button>
        </header>
        {navigation}
        <footer className="sidebar-footer">{settings}</footer>
        {!sidebar.mobile && <div className="sidebar-resizer" role="separator" tabIndex={0} aria-label="调整侧边栏宽度" aria-orientation="vertical" aria-valuemin={0} aria-valuemax={sidebar.maxWidth} aria-valuenow={sidebar.width} {...sidebar.resizer} />}
      </aside>
    </>}
    <main className={`workspace-panel${hasProject ? ' has-project' : ''}`} aria-label="创作工作区">
      {children}
      {sidebar.collapsed && <button ref={sidebar.showRef} className="icon-button show-sidebar" title="展开侧边栏" aria-label="展开侧边栏" aria-expanded="false" onClick={sidebar.toggle}><Icon name="panel" /></button>}
      {assistant.collapsed && <button data-assistant-toggle ref={assistant.showRef} className="icon-button show-assistant" title="展开 AI 助手" aria-label="展开 AI 助手" aria-expanded="false" onClick={assistant.toggle}><Icon name="panel-right" /></button>}
    </main>
    {rightPanel}
    {overlays}
  </div>;
}
