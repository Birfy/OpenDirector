import { useRef, type KeyboardEvent } from 'react';
import { Icon } from '../../components/Icon';
import type { Project } from '../projects/types';
import { ProjectCanvas } from '../canvas/ProjectCanvas';
import type { ProjectCanvas as CanvasControls } from '../canvas/useProjectCanvas';
import type { ModelCatalog } from '../settings/hooks/useModelConfigs';
import { Storyboard } from '../storyboard/Storyboard';
import type { StoryboardControls } from '../storyboard/useStoryboard';
import type { ProjectAsset } from '../assets/types';
import { Timeline } from '../timeline/Timeline';
import type { TimelineControls } from '../timeline/useTimeline';

const VIEWS = [
  { id: 'canvas', label: '画布', icon: 'canvas' },
  { id: 'storyboard', label: '分镜板', icon: 'storyboard' },
  { id: 'timeline', label: '时间线', icon: 'timeline' },
] as const;
export type WorkspaceView = typeof VIEWS[number]['id'];

export function ProjectWorkspace({ project, view, onViewChange, canvas, models, storyboard, timeline, onLocateAsset, onReferenceSelection, pendingReferenceCount, assistantCollapsed, onShowAssistant }: {
  onReferenceSelection: (ids: string[], extend?: boolean) => void; pendingReferenceCount: number; assistantCollapsed: boolean; onShowAssistant: () => void;
  project: Project; view: WorkspaceView; onViewChange: (view: WorkspaceView) => void; canvas: CanvasControls; models: ModelCatalog; storyboard: StoryboardControls; timeline: TimelineControls; onLocateAsset: (asset: ProjectAsset) => Promise<void>;
}) {
  const tabsRef = useRef<HTMLDivElement>(null);
  function navigateTabs(event: KeyboardEvent<HTMLDivElement>) {
    const current = VIEWS.findIndex(item => item.id === view);
    const next = event.key === 'ArrowRight' ? (current + 1) % VIEWS.length
      : event.key === 'ArrowLeft' ? (current - 1 + VIEWS.length) % VIEWS.length
      : event.key === 'Home' ? 0 : event.key === 'End' ? VIEWS.length - 1 : null;
    if (next === null) return;
    event.preventDefault();
    onViewChange(VIEWS[next].id);
    tabsRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  }

  return <div className="project-workspace">
    <header className="workspace-project-header">
      <Icon name="folder" />
      <h1 title={project.name}>{project.name}</h1>
    </header>
    <div ref={tabsRef} className="workspace-tabs" role="tablist" aria-label="创作视图" onKeyDown={navigateTabs}>
      {VIEWS.map(item => <button key={item.id} id={`workspace-tab-${item.id}`} className="workspace-tab" role="tab" aria-selected={view === item.id} aria-controls={`workspace-view-${item.id}`} tabIndex={view === item.id ? 0 : -1} onClick={() => onViewChange(item.id)}>
        <Icon name={item.icon} /><span>{item.label}</span>
      </button>)}
    </div>
    <div className="workspace-content">
      {VIEWS.map(item => <section key={item.id} id={`workspace-view-${item.id}`} className={`workspace-view ${item.id}-view`} role="tabpanel" aria-labelledby={`workspace-tab-${item.id}`} hidden={view !== item.id} tabIndex={0}>
        {item.id === 'canvas' ? <ProjectCanvas projectId={project.id} canvas={canvas} models={models} active={view === 'canvas'} onReferenceSelection={onReferenceSelection} pendingReferenceCount={pendingReferenceCount} assistantCollapsed={assistantCollapsed} onShowAssistant={onShowAssistant} /> : item.id === 'storyboard' ? <Storyboard projectId={project.id} board={storyboard} onLocate={onLocateAsset} /> : <Timeline projectId={project.id} projectName={project.name} board={timeline} active={view === 'timeline'} />}
      </section>)}
    </div>
  </div>;
}
