import { Icon } from '../../../components/Icon';
import { AssistantChat } from './AssistantChat';
import type { AssistantPanelControls } from '../hooks/useAssistantPanel';
import type { ModelCatalog } from '../../settings/hooks/useModelConfigs';
import type { CanvasNode } from '../../canvas/types';
import type { ShotContext } from '../../storyboard/types';
import type { PendingReferenceControls } from '../hooks/usePendingCanvasReferences';
import type { NewProjectMessage } from '../types';
export function AssistantPanel({ pendingReferences, controls, projectId, projectName, onBusyChange, modelCatalog, onModelSettings, selectedNode, selectedShot, beforeSend, onCanvasChange, onLocateNode, onCreateProject, initialTurnId, onInitialTurnHandled }: { pendingReferences: PendingReferenceControls; controls: AssistantPanelControls; projectId: string | null; projectName?: string; onBusyChange: (busy: boolean) => void; modelCatalog: ModelCatalog; onModelSettings: () => void; selectedNode?: CanvasNode; selectedShot?: ShotContext; beforeSend?: () => Promise<void>; onCanvasChange: (event: { nodeId?: string | null }) => void; onLocateNode: (nodeId: string) => void; onCreateProject: (value: NewProjectMessage) => Promise<void>; initialTurnId?: string; onInitialTurnHandled: () => void }) {
  return <aside id="assistant-panel" className={`context-panel assistant-panel${controls.dragging ? ' is-resizing' : ''}`} aria-label="AI 助手" hidden={controls.collapsed}>
    <div className="assistant-header"><div className="assistant-heading"><span className="assistant-title">AI 助手</span><span className="assistant-context" title={projectName}>{projectName ?? '新对话'}</span></div>
      <button data-assistant-toggle ref={controls.hideRef} className="icon-button" aria-label="收起 AI 助手" aria-controls="assistant-panel" aria-expanded="true" title="收起 AI 助手" onClick={controls.toggle}><Icon name="panel-right" /></button>
    </div>
    <AssistantChat pendingReferences={pendingReferences} key={projectId ?? 'new'} projectId={projectId} onBusyChange={onBusyChange} modelCatalog={modelCatalog} onModelSettings={onModelSettings} selectedNode={selectedNode} selectedShot={selectedShot} beforeSend={beforeSend} onCanvasChange={onCanvasChange} onLocateNode={onLocateNode} onCreateProject={onCreateProject} initialTurnId={initialTurnId} onInitialTurnHandled={onInitialTurnHandled} />
    {!controls.mobile && <div className="sidebar-resizer assistant-resizer" role="separator" tabIndex={0} aria-label="调整 AI 助手宽度" aria-orientation="vertical" aria-valuemin={0} aria-valuemax={controls.maxWidth} aria-valuenow={controls.width} {...controls.resizer} />}
  </aside>;
}
