import { useCallback, useRef, useState } from 'react';
import { Icon } from '../components/Icon';
import { WorkbenchLayout } from '../layouts/workbench/WorkbenchLayout';
import { useSidebar } from '../layouts/workbench/useSidebar';
import { ProjectNavigation } from '../features/projects/components/ProjectNavigation';
import { ProjectDialog } from '../features/projects/components/ProjectDialog';
import { useLocalProjects } from '../features/projects/hooks/useLocalProjects';
import { useProjectDialog } from '../features/projects/hooks/useProjectDialog';
import type { Project } from '../features/projects/types';
import { ProjectWorkspace, type WorkspaceView } from '../features/workspace/ProjectWorkspace';
import { AssistantPanel } from '../features/assistant/components/AssistantPanel';
import { useAssistantPanel } from '../features/assistant/hooks/useAssistantPanel';
import { SettingsDialog } from '../features/settings/components/SettingsDialog';
import { useTheme } from '../features/settings/hooks/useTheme';
import { useModelConfigs } from '../features/settings/hooks/useModelConfigs';
import { useProjectCanvas } from '../features/canvas/useProjectCanvas';
import { useStoryboard } from '../features/storyboard/useStoryboard';
import { useTimeline } from '../features/timeline/useTimeline';
import type { ProjectAsset } from '../features/assets/types';
import { usePendingCanvasReferences } from '../features/assistant/hooks/usePendingCanvasReferences';
import type { NewProjectMessage } from '../features/assistant/types';

export default function App() {
  const sidebar = useSidebar();
  const assistant = useAssistantPanel(sidebar.collapsed ? 0 : sidebar.width);
  const projects = useLocalProjects();
  const [activeView, setActiveView] = useState<WorkspaceView>('canvas');
  const [initialTurn, setInitialTurn] = useState<{ projectId: string; id: string } | null>(null);
  const setAssetActivity = useCallback((busy: boolean) => projects.setActivity(busy, 'assets'), [projects.setActivity]);
  const setStoryboardActivity = useCallback((busy: boolean) => projects.setActivity(busy, 'storyboard'), [projects.setActivity]);
  const setTimelineActivity = useCallback((busy: boolean) => projects.setActivity(busy, 'timeline'), [projects.setActivity]);
  const canvas = useProjectCanvas(projects.activeId, setAssetActivity);
  const storyboard = useStoryboard(projects.activeId, activeView === 'storyboard', setStoryboardActivity);
  const timeline = useTimeline(projects.activeId, activeView === 'timeline', setTimelineActivity);
  const pendingReferences = usePendingCanvasReferences(projects.activeId, activeView === 'canvas', canvas.snapshot);
  const stageReferences = (ids: string[], extend = false) => { if (canvas.snapshot) pendingReferences.stage(canvas.snapshot, ids, extend); };
  const dialog = useProjectDialog();
  const theme = useTheme();
  const modelCatalog = useModelConfigs();
  const [settingsPage, setSettingsPage] = useState<'general' | 'models' | null>(null);
  const settingsOpen = settingsPage !== null;
  const settingsTrigger = useRef<HTMLButtonElement>(null);
  const selectedShotIndex = storyboard.shots.findIndex(shot => shot.id === storyboard.selectedId);
  const selectedShot = activeView === 'storyboard' && selectedShotIndex >= 0 ? { ...storyboard.shots[selectedShotIndex], number: selectedShotIndex + 1 } : undefined;

  async function changeView(view: WorkspaceView) {
    try {
      if (activeView === 'storyboard') await storyboard.flush();
      if (activeView === 'timeline') await timeline.flush();
      setActiveView(view);
      return true;
    }
    catch { return false; /* Keep unsaved edits and their visible error in the current view. */ }
  }
  async function locateAsset(asset: ProjectAsset) {
    if (asset.kind === 'other') return;
    await canvas.create(asset.kind, undefined, undefined, asset);
    setActiveView('canvas');
  }

  function closeSettings() {
    setSettingsPage(null);
    requestAnimationFrame(() => {
      if (settingsTrigger.current?.isConnected) settingsTrigger.current.focus();
      else sidebar.showRef.current?.focus();
    });
  }

  async function activateProject(project: Project) {
    await projects.run(async () => { await projects.activateProject(project); setActiveView('canvas'); });
  }
  async function createProject(name: string, id: string) {
    await projects.createProject(name, id);
    setActiveView('canvas');
  }

  async function createFromMessage(value: NewProjectMessage) {
    const project = await projects.createFromMessage(value);
    setInitialTurn({ projectId: project.id, id: value.turnId });
    setActiveView('canvas');
  }

  return <WorkbenchLayout
    sidebar={sidebar}
    assistant={assistant}
    hasProject={Boolean(projects.activeProject)}
    settings={<button ref={settingsTrigger} className="sidebar-row settings-button" aria-haspopup="dialog" aria-expanded={settingsOpen} aria-controls={settingsOpen ? 'settings-dialog' : undefined} onClick={() => setSettingsPage('general')}><Icon name="settings" /><span>设置</span></button>}
    navigation={<ProjectNavigation projects={projects.projects} activeId={projects.activeId} newProjectRef={dialog.newProjectRef}
      busy={projects.busy} loading={projects.loading} warnings={projects.warnings} onClose={() => void projects.run(projects.closeProject)}
      onNew={dialog.openNewDialog} onSelect={activateProject} onRename={dialog.openRenameDialog} />}
    rightPanel={<AssistantPanel pendingReferences={pendingReferences} controls={assistant} projectId={projects.activeId} projectName={projects.activeProject?.name} onBusyChange={projects.setActivity} modelCatalog={modelCatalog} onModelSettings={() => setSettingsPage('models')}
      onCreateProject={createFromMessage} initialTurnId={initialTurn?.projectId === projects.activeId ? initialTurn.id : undefined} onInitialTurnHandled={() => setInitialTurn(null)}
      selectedNode={activeView === 'canvas' ? canvas.snapshot?.canvas.nodes.find(node => node.id === canvas.selectedId) : undefined} selectedShot={selectedShot} beforeSend={selectedShot ? storyboard.flush : undefined} onCanvasChange={canvas.invalidate} onLocateNode={nodeId => { void changeView('canvas').then(changed => { if (changed) canvas.invalidate({ nodeId }); }); }} />}
    overlays={<>
      {projects.notice && <div className="notice" role="alert"><span>{projects.notice}</span><button className="icon-button" aria-label="关闭提示" onClick={() => projects.setNotice('')}><Icon name="close" /></button></div>}
      {projects.loadFailed && <button className="retry-projects secondary-button" onClick={() => void projects.run(projects.refresh)}>重新读取项目列表</button>}
      <ProjectDialog controls={dialog} onCreate={createProject} onRename={projects.renameProject} />
      {settingsPage && <SettingsDialog initialCategory={settingsPage} modelCatalog={modelCatalog} theme={theme.theme} onThemeChange={theme.setTheme} error={theme.error} onDismissError={theme.clearError} onClose={closeSettings} />}
    </>}
  >
    {projects.activeProject && <ProjectWorkspace key={projects.activeProject.id} project={projects.activeProject} view={activeView} onViewChange={view => void changeView(view)} canvas={canvas} models={modelCatalog} storyboard={storyboard} timeline={timeline} onLocateAsset={locateAsset} onReferenceSelection={stageReferences} pendingReferenceCount={pendingReferences.pending?.items.length ?? 0} assistantCollapsed={assistant.collapsed} onShowAssistant={assistant.toggle} />}
  </WorkbenchLayout>;
}
