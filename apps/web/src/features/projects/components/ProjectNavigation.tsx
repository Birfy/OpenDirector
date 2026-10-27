import type { RefObject } from 'react';
import { Icon } from '../../../components/Icon';
import type { Project } from '../types';
import { ProjectMenu } from './ProjectMenu';

interface Props {
  projects: Project[];
  activeId: string | null;
  newProjectRef: RefObject<HTMLButtonElement | null>;
  onNew: () => void;
  onClose: () => void;
  busy: boolean;
  loading: boolean;
  onSelect: (project: Project) => void;
  warnings: string[];
  onRename: (project: Project, trigger: HTMLButtonElement) => void;
}

export function ProjectNavigation({ projects, activeId, newProjectRef, onNew, onClose, onSelect, onRename, warnings, busy, loading }: Props) {
  return <>
    <nav className="project-actions" aria-label="项目操作">
      <button ref={newProjectRef} className="sidebar-row" disabled={busy || loading} onClick={onNew}><Icon name="plus" /><span>新建项目</span></button>
    </nav>
    <section className="project-list-section" aria-labelledby="project-list-heading">
      <div className="section-heading"><h2 id="project-list-heading">项目列表</h2><span className="project-count">{projects.length > 0 ? projects.length : ''}</span></div>
      {warnings.length > 0 && <div className="project-list-warnings" role="status">{warnings.map(warning => <p key={warning}>{warning}</p>)}</div>}
      {projects.length === 0 ? <p className="empty-project-list">{loading ? '正在读取项目列表…' : '当前暂无项目'}</p> :
        <ul className="project-list">{projects.map(project => <li key={project.id} className="project-list-item">
          <button disabled={busy} className={`sidebar-row project-row${activeId === project.id ? ' is-active' : ''}`} aria-current={activeId === project.id ? 'page' : undefined} title={`${project.name}\n${project.path}`} onClick={() => onSelect(project)}>
            <Icon name="folder" /><span className="project-name">{project.name}</span>
          </button>
          <ProjectMenu project={project} active={activeId === project.id} busy={busy} onClose={onClose} onRename={onRename} />
        </li>)}</ul>}
    </section>
  </>;
}
