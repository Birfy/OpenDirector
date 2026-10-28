import { lockedNodeIds } from "./hierarchy";
import {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  BackgroundVariant,
  MiniMap,
  SelectionMode,
  useReactFlow,
  useKeyPress,
  type Node,
  type Edge,
  type NodeChange,
  type Connection,
  type OnConnectEnd,
} from "@xyflow/react";
import {
  CanvasReferenceEdge,
  CanvasConnectionLine,
  CanvasInteractionOverlay,
} from "./CanvasConnections";
import {
  snapNodePositions,
  alignNodes,
  type SnapGuide,
  type Alignment,
} from "./snapping";
import { CanvasContextMenu } from "./CanvasContextMenu";
import { CanvasNodeView } from "./CanvasNodeView";
import { CanvasActionsContext } from "./CanvasActionsContext";
import { CanvasPointerGesture } from "./pointerGesture";
import {
  generationActivities,
  generationPhase,
  GENERATION_LABELS,
  type ActiveGeneration,
  type GenerationPhase,
} from "./generationActivity";
import { NodeComposer, getNodeGenerationSettings } from "./NodeComposer";
import { NodeSelectionToolbar } from "./NodeSelectionToolbar";
import { useSelectionPresentation } from "./useSelectionPresentation";
import { CanvasIcon } from "./CanvasIcon";
import { CanvasToolRail } from "./CanvasToolRail";
import { TooltipButton, TooltipProvider } from "./TooltipButton";
import { ImageEditor } from "./ImageEditor";
import { ProjectAssetLibrary } from "./ProjectAssetLibrary";
import { CanvasTagsPanel } from "./CanvasTagsPanel";
import { CANVAS_TAGS, setNodeTag, type CanvasTagId } from "./nodeTags";
import {
  connectedCreationKinds,
  referenceIssue,
  REFERENCE_ISSUE_TEXT,
} from "./connectionPolicy";
import { projectCanvasStacks, visibleSelectionIds } from "./stackProjection";
import { ProjectManagerPanel } from "./ProjectManagerPanel";
import {
  duplicateCanvasDocument,
  persistCurrentDocument,
} from "./projectManagement";
import { CanvasSearchPanel } from "./CanvasSearchPanel";
import { resourceNodeData } from "./projectAssets";
import { TimelineEditor } from "./TimelineEditor";
import { SubjectEditor } from "./SubjectEditor";
import { StackEditor } from "./StackEditor";
import { ToolEditor } from "./ToolEditor";
import { ImageActionEditor, isImageActionTool } from "./ImageActionEditor";
import { VideoActionEditor } from "./VideoActionEditor";
import { NodeTaskPanel } from "./NodeTaskPanel";
import {
  createVideoExtensionDraft,
  gridSplitImage,
} from "./nodeActionWorkflow";
import { captureVideoEndpoint, extractVideoAudio } from "./videoActionRuntime";
import { EditorModal } from "./EditorModal";
import { LocalImageTools } from "./LocalImageTools";
import { LocalMediaEditor } from "./LocalMediaEditor";
const DirectorStage = lazy(() =>
  import("./DirectorStage").then((module) => ({
    default: module.DirectorStage,
  })),
);
import { readEditorResource } from "./editorMedia";
import { readImportBatch } from "./importBatch";
import { useGenerationJobs } from "./useGenerationJobs";
import { GenerationHistoryPanel } from "./GenerationHistoryPanel";
import {
  reconcileGenerationJobs,
  mergeGenerationJobs,
  applyRecoveredGenerationResults,
  type GenerationJob as Job,
} from "./generationHistory";
import {
  appendLinkedMediaResults,
  validateNodeActionSource,
  appendServiceResults,
  applyGenerationResults,
  type GenerationResultMode,
  type LinkedMediaResult,
  type ResultSource,
  type ServiceResult,
} from "./linkedResults";
import { AssistantPanel } from "./AssistantPanel";
import { ModelSettingsDialog } from "./ModelSettingsDialog";
import { errorMessage } from "../backend/api.ts";
import {
  cancelGeneration,
  submitGeneration,
  waitForResult,
  type BackendResult,
  type BackendTask,
  type GenerationRequest,
} from "../backend/generation.ts";
import { useBackendModels } from "../backend/models.ts";
import { backendProjectId } from "../backend/projects.ts";
import {
  backendBlocker,
  backendModel,
  backendReferences,
  backendVideoMode,
  serviceVoice,
} from "../backend/rules.ts";
import { isHandled, markHandled, unsyncedResults } from "../backend/sync.ts";
import {
  CANVAS_TOOLS,
  createCanvasToolTask,
  initialToolParameters,
  type CanvasToolId,
  type CanvasToolTask,
  type ToolSource,
} from "./toolCatalog";
import {
  generationBlocker,
  generationActiveReferences,
} from "./generationCatalog";
import {
  createDocument,
  createNode,
  canAddReference,
  MAX_ZOOM,
  MIN_ZOOM,
  type CanvasDocument,
  type CanvasNode,
  type CanvasNodeData,
  type CanvasNodeKind,
  type CanvasCommand,
  type Point,
} from "./model";
import {
  createHistory,
  executeCommand,
  recordChange,
  beginTransaction,
  commitTransaction,
  cancelTransaction,
  undo,
  redo,
  type CanvasHistory,
} from "./history";
import { absolutePosition, arrangeNodes } from "./geometry";
import {
  saveDocument,
  loadDocument,
  trashDocument,
  restoreDocument,
  parseDocument,
  serializeDocument,
} from "./storage";
import {
  copySelection,
  cutSelection,
  orderNodesForCanvas,
  pasteFragment,
  groupSelection,
  ungroupSelection,
  stackSelection,
  unstackSelection,
  updateStack,
  resourceFromNode,
  type CanvasFragment,
} from "./operations";
import {
  downloadFile,
  downloadFilename,
  exampleDocument,
  studyImage,
} from "./assets";
import "@xyflow/react/dist/style.css";
import "./workspace.css";

type FlowNode = Node<CanvasNodeData, CanvasNodeKind>;
type Panel =
  | "assets"
  | "search"
  | "tags"
  | "history"
  | "assistant"
  | "projects"
  | "director"
  | null;
type Menu = {
  x: number;
  y: number;
  world: Point;
  nodeId?: string;
  parentId?: string;
  connected?: { id: string; direction: "source" | "target" };
};
/** A generation submitted to the local API from this page. */
type ServiceRun = ActiveGeneration & {
  controller: AbortController;
  projectId?: string;
  taskId?: string;
};
const jobTime = () =>
  new Date().toLocaleTimeString("zh-CN", {
    hour: "2-digit",
    minute: "2-digit",
  });
const nodeTypes = {
  image: CanvasNodeView,
  video: CanvasNodeView,
  audio: CanvasNodeView,
  file: CanvasNodeView,
  text: CanvasNodeView,
  group: CanvasNodeView,
  timeline: CanvasNodeView,
  subject: CanvasNodeView,
  stack: CanvasNodeView,
  tool: CanvasNodeView,
  external: CanvasNodeView,
};
const edgeTypes = { reference: CanvasReferenceEdge };
const labels: Record<CanvasNodeKind, string> = {
  image: "图片",
  video: "视频",
  audio: "音频",
  text: "文本",
  file: "文件",
  group: "分组",
  timeline: "时间线",
  subject: "主体",
  stack: "资源堆叠",
  tool: "工具",
  external: "导演台",
};
const kinds: CanvasNodeKind[] = [
  "image",
  "video",
  "audio",
  "text",
  "timeline",
  "subject",
  "stack",
  "tool",
  "external",
  "file",
  "group",
];
const ORIGINAL_CANVAS_URL = "https://jimeng.jianying.com/ai-tool/ai-canvas";
type EditorMode =
  | "default"
  | "layers"
  | "annotation"
  | "grid"
  | "mask"
  | "trim"
  | "frame"
  | "extract-audio"
  | "crop";
const lastKey = "museshow-last-canvas";

function IconButton({
  name,
  label,
  onClick,
  active,
  disabled,
  shortcut,
  tooltipSide = "top",
  tooltipDelay = 200,
}: {
  name: string;
  label: string;
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  shortcut?: string;
  tooltipSide?: "top" | "bottom" | "left" | "right";
  tooltipDelay?: number;
}) {
  return (
    <TooltipButton
      className={`cw-icon-button ${active ? "is-active" : ""}`}
      aria-label={label}
      label={label}
      shortcut={shortcut}
      tooltipSide={tooltipSide}
      tooltipDelay={tooltipDelay}
      aria-pressed={active}
      onClick={onClick}
      disabled={disabled}
    >
      <CanvasIcon name={name} />
    </TooltipButton>
  );
}

export default function CanvasWorkspace() {
  return (
    <TooltipProvider>
      <ReactFlowProvider>
        <Workspace />
      </ReactFlowProvider>
    </TooltipProvider>
  );
}

function incomingNodes(
  document: CanvasDocument,
  nodeId: string | null | undefined,
) {
  return document.nodes.filter((node) =>
    document.edges.some(
      (edge) =>
        edge.intent !== "post_edit_result" &&
        edge.target === nodeId &&
        edge.source === node.id,
    ),
  );
}

function Workspace() {
  const flow = useReactFlow<FlowNode, Edge>();
  const [history, setHistory] = useState<CanvasHistory>(() =>
    createHistory(createDocument()),
  );
  const historyRef = useRef(history);
  historyRef.current = history;
  const doc = history.present;
  const [ready, setReady] = useState(false);
  const [switching, setSwitching] = useState(false);
  const switchPending = useRef(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [selectedEdges, setSelectedEdges] = useState<string[]>([]);
  // React Flow's measured geometry is UI state, independent of authored dimensions.
  const [measurements, setMeasurements] = useState<
    Record<string, { width: number; height: number }>
  >({});
  const selectedRef = useRef(selected);
  selectedRef.current = selected;
  const selectionAtPointerDown = useRef<string[]>([]);
  const pointerGesture = useRef(new CanvasPointerGesture());
  const [interacting, setInteracting] = useState(false);
  const [textEditingId, setTextEditingId] = useState<string | null>(null);
  const [composerNodeId, setComposerNodeId] = useState<string | null>(null);
  const [dismissedComposer, setDismissedComposer] = useState<string | null>(
    null,
  );
  const [panel, setPanel] = useState<Panel>(null);
  const [projectMenu, setProjectMenu] = useState(false);
  const [moreMenu, setMoreMenu] = useState(false);
  const [zoomMenu, setZoomMenu] = useState(false);
  const [hand, setHand] = useState(false);
  const [minimap, setMinimap] = useState(false);
  const [showEdges, setShowEdges] = useState(true);
  const [showDots, setShowDots] = useState(true);
  const [objectSnapping, setObjectSnapping] = useState(true);
  const [gridSnapping, setGridSnapping] = useState(false);
  const [guides, setGuides] = useState<SnapGuide[]>([]);
  const snapGuides = useRef<SnapGuide[]>([]);
  const dragging = useRef(false);
  const bypassSnapping = useRef(false);
  const connectionStarted = useRef<Point | null>(null);
  const [menu, setMenu] = useState<Menu | null>(null);
  const [saveStatus, setSaveStatus] = useState("正在打开…");
  const [toast, setToast] = useState("");
  const [activeTag, setActiveTag] = useState<CanvasTagId | null>(null);
  const [preview, setPreview] = useState<CanvasNode | null>(null);
  const [editing, setEditing] = useState<CanvasNode | null>(null);
  const [editorMode, setEditorMode] = useState<EditorMode>("default");
  const editorOrigin = useRef<ResultSource | null>(null);
  const [actionSession, setActionSession] = useState<
    (ResultSource & { tool: CanvasToolId; token: string }) | null
  >(null);
  const actionSessionRef = useRef(actionSession);
  actionSessionRef.current = actionSession;
  const [actionMedia, setActionMedia] = useState<HTMLDivElement | null>(null);
  const quickAction = useRef<AbortController | null>(null);
  const [maskTool, setMaskTool] = useState<CanvasToolId>("cutout");
  const [generationTarget, setGenerationTarget] = useState<{
    documentId: string;
    nodeId: string;
    jobId: string;
  } | null>(null);
  const [resultBusy, setResultBusy] = useState(false);
  const resultInput = useRef<HTMLInputElement>(null);
  const resultBinding = useRef<
    | (ResultSource & {
        expectedKind?: "image" | "video" | "audio";
        placement: "generation" | "post-edit";
        actionToken?: string;
        jobId?: string;
      })
    | null
  >(null);
  const importAbort = useRef<AbortController | null>(null);
  const [rename, setRename] = useState<{ id?: string; value: string } | null>(
    null,
  );
  const [help, setHelp] = useState(false);
  const [jobs, setJobs, readJobs] = useGenerationJobs(doc.id, setToast);
  const backendCatalog = useBackendModels();
  const [modelSettings, setModelSettings] = useState(false);
  const serviceRuns = useRef(new Map<string, ServiceRun>());
  const [activeGenerations, setActiveGenerations] = useState<
    ActiveGeneration[]
  >([]);
  const generationByNode = useMemo(
    () => generationActivities(activeGenerations, doc.id),
    [activeGenerations, doc.id],
  );
  const [arrivingNodes, setArrivingNodes] = useState<ReadonlySet<string>>(
    new Set(),
  );
  useEffect(() => {
    if (!arrivingNodes.size) return;
    const timer = window.setTimeout(() => setArrivingNodes(new Set()), 1200);
    return () => window.clearTimeout(timer);
  }, [arrivingNodes]);
  const syncing = useRef(new Set<string>());
  const following = useRef(new Set<string>());
  const [chat, setChat] = useState("");
  const [chatLog, setChatLog] = useState<string[]>([]);
  const clipboard = useRef<CanvasFragment | null>(null);
  const pasteCount = useRef(0);
  const fileInput = useRef<HTMLInputElement>(null);
  const jsonInput = useRef<HTMLInputElement>(null);
  const uploadTarget = useRef<string | null>(null);
  const referenceTarget = useRef<string | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const toolbarElement = useRef<HTMLDivElement>(null);
  const composerElement = useRef<HTMLDivElement>(null);
  const [presentationFocus, setPresentationFocus] = useState(0);
  const focusSelection = (id: string) => {
    setComposerNodeId(id);
    setPresentationFocus((value) => value + 1);
  };
  const saveQueue = useRef(Promise.resolve(true));
  const [zoom, setZoom] = useState(1);
  const spacePressed = useKeyPress("Space");
  const panning = hand || spacePressed;
  const single =
    selected.length === 1
      ? (doc.nodes.find((n) => n.id === selected[0]) ?? null)
      : null;
  // Keep the existing generator mounted while manipulating the canvas. Selection
  // can change on pointerdown; it must not mount a different panel mid-gesture.
  useEffect(() => {
    if (!interacting) setComposerNodeId(single?.id ?? null);
  }, [single?.id, interacting]);
  const composerNode = doc.nodes.find((node) => node.id === composerNodeId);
  const composerIncoming = useMemo(
    () => incomingNodes(doc, composerNodeId),
    [doc.nodes, doc.edges, composerNodeId],
  );
  const actionSource = actionSession
    ? validateNodeActionSource(doc, actionSession)
    : null;
  const actionNode =
    actionSource &&
    "node" in actionSource &&
    single?.id === actionSession?.nodeId
      ? actionSource.node
      : undefined;
  const activeAction = actionNode ? actionSession : null;
  useEffect(() => {
    if (actionSession && !actionNode) setActionSession(null);
  }, [actionSession, actionNode]);
  useEffect(() => () => quickAction.current?.abort(), [doc.id]);
  const command = useCallback(
    (value: CanvasCommand) => setHistory((h) => executeCommand(h, value)),
    [],
  );
  const change = useCallback(
    (fn: (document: CanvasDocument) => CanvasDocument) =>
      setHistory((h) => recordChange(h, fn(h.present))),
    [],
  );
  const begin = useCallback(() => setHistory(beginTransaction), []);
  const end = useCallback(() => setHistory(commitTransaction), []);
  const clearGuides = useCallback(() => {
    snapGuides.current = [];
    setGuides([]);
  }, []);
  const beginDrag = () => {
    selectionPresentation.userNavigation();
    dragging.current = true;
    setInteracting(true);
    setMenu(null);
    begin();
  };
  const endDrag = useCallback(() => {
    dragging.current = false;
    setInteracting(false);
    clearGuides();
    end();
  }, [clearGuides, end]);
  const cancelDrag = useCallback(() => {
    pointerGesture.current.cancel();
    connectionStarted.current = null;
    if (dragging.current) setHistory(cancelTransaction);
    dragging.current = false;
    setInteracting(false);
    clearGuides();
  }, [clearGuides]);
  useEffect(() => {
    const move = (event: PointerEvent) =>
      pointerGesture.current.move(
        event.pointerId,
        event.clientX,
        event.clientY,
      );
    const up = (event: PointerEvent) => {
      pointerGesture.current.end(event.pointerId, event.clientX, event.clientY);
      setInteracting(false);
    };
    const blur = () => {
      bypassSnapping.current = false;
      cancelDrag();
    };
    window.addEventListener("pointermove", move, true);
    window.addEventListener("pointerup", up, true);
    window.addEventListener("pointercancel", blur);
    window.addEventListener("blur", blur);
    return () => {
      window.removeEventListener("pointermove", move, true);
      window.removeEventListener("pointerup", up, true);
      window.removeEventListener("pointercancel", blur);
      window.removeEventListener("blur", blur);
    };
  }, [cancelDrag]);
  const notify = useCallback((message: string) => setToast(message), []);
  const togglePanel = (value: Panel) => {
    referenceTarget.current = null;
    setPanel((p) => (p === value ? null : value));
    setMenu(null);
    setProjectMenu(false);
  };

  const persist = useCallback((snapshot: CanvasDocument): Promise<boolean> => {
    saveQueue.current = saveQueue.current
      .then(async () => {
        const result = await saveDocument(snapshot);
        if (historyRef.current.present === snapshot)
          setSaveStatus(result.ok ? "已保存到本机" : result.error.message);
        if (result.ok) {
          try {
            localStorage.setItem(lastKey, snapshot.id);
          } catch {
            /* IndexedDB is the document owner. */
          }
        }
        return result.ok;
      })
      .catch((error) => {
        setSaveStatus(`保存失败：${String(error)}`);
        return false;
      });
    return saveQueue.current;
  }, []);

  const installDocument = useCallback(
    (next: CanvasDocument, fit = false) => {
      importAbort.current?.abort();
      importAbort.current = null;
      resultBinding.current = null;
      setResultBusy(false);
      setGenerationTarget(null);
      setEditing(null);
      setActionSession(null);
      quickAction.current?.abort();
      setPreview(null);
      editorOrigin.current = null;
      referenceTarget.current = null;
      uploadTarget.current = null;
      setArrivingNodes(new Set());
      setHistory(createHistory(next));
      setMeasurements({});
      setSelected([]);
      setComposerNodeId(null);
      setTextEditingId(null);
      setDismissedComposer(null);
      setInteracting(false);
      pointerGesture.current.cancel();
      setSelectedEdges([]);
      setPanel(null);
      setMenu(null);
      setProjectMenu(false);
      setRename(null);
      setMoreMenu(false);
      setZoomMenu(false);
      setHand(false);
      window.history.replaceState(
        {},
        "",
        `/ai-tool/ai-canvas/${encodeURIComponent(next.id)}`,
      );
      requestAnimationFrame(() => {
        void flow.setViewport(next.viewport);
        if (fit)
          requestAnimationFrame(
            () =>
              void flow.fitView({ padding: 0.25, maxZoom: 1, duration: 250 }),
          );
      });
    },
    [flow],
  );

  const switchDocument = useCallback(
    async (
      read: () => CanvasDocument | Promise<CanvasDocument>,
      fit = false,
    ) => {
      if (switchPending.current) return false;
      switchPending.current = true;
      setSwitching(true);
      // The workspace is inert until saving and loading finish, so later edits cannot be lost.
      importAbort.current?.abort();
      try {
        const next = await read();
        if (
          !(await persistCurrentDocument(
            () => historyRef.current.present,
            persist,
          ))
        )
          return false;
        installDocument(next, fit);
        return true;
      } catch (error) {
        notify(error instanceof Error ? error.message : "无法打开画布。");
        return false;
      } finally {
        switchPending.current = false;
        setSwitching(false);
      }
    },
    [installDocument, persist, notify],
  );

  useEffect(() => {
    let alive = true;
    const init = async () => {
      const rawId = window.location.pathname.split("/ai-canvas/")[1];
      let urlId: string | undefined;
      try {
        urlId = rawId ? decodeURIComponent(rawId) : undefined;
      } catch {
        notify("项目地址格式无效，将打开最近的画布。");
      }
      let id: string | undefined = urlId;
      if (!id)
        try {
          id = localStorage.getItem(lastKey) ?? undefined;
        } catch {
          /* A new document still works. */
        }
      let restored = false;
      if (id) {
        const result = await loadDocument(id);
        if (!alive) return;
        if (result.ok && result.value) {
          installDocument(result.value);
          restored = true;
        } else if (!result.ok) notify(result.error.message);
      }
      if (alive) {
        if (!restored) installDocument(historyRef.current.present);
        setReady(true);
      }
    };
    void init();
    return () => {
      alive = false;
      importAbort.current?.abort();
    };
  }, [installDocument, notify]);
  useEffect(() => {
    if (!ready) return;
    setSaveStatus("保存中…");
    const timeout = setTimeout(() => void persist(doc), 450);
    return () => clearTimeout(timeout);
  }, [doc, ready, persist]);
  useEffect(() => {
    const nodeIds = new Set(doc.nodes.map((node) => node.id));
    const edgeIds = new Set(doc.edges.map((edge) => edge.id));
    setMeasurements((current) => {
      const entries = Object.entries(current).filter(([id]) => nodeIds.has(id));
      return entries.length === Object.keys(current).length
        ? current
        : Object.fromEntries(entries);
    });
    setSelected((ids) => {
      const existing = visibleSelectionIds(doc.nodes, ids);
      return existing.length === ids.length &&
        existing.every((id, index) => id === ids[index])
        ? ids
        : existing;
    });
    setSelectedEdges((ids) => {
      const existing = ids.filter((id) => edgeIds.has(id));
      return existing.length === ids.length ? ids : existing;
    });
  }, [doc.nodes, doc.edges]);
  useEffect(() => {
    const input = fileInput.current;
    const result = resultInput.current;
    const cancelUpload = () => {
      uploadTarget.current = null;
    };
    input?.addEventListener("cancel", cancelUpload);
    const cancelResult = () => {
      resultBinding.current = null;
    };
    result?.addEventListener("cancel", cancelResult);
    return () => {
      input?.removeEventListener("cancel", cancelUpload);
      result?.removeEventListener("cancel", cancelResult);
    };
  }, []);
  useEffect(() => {
    if (!toast) return;
    const timeout = setTimeout(() => setToast(""), 3800);
    return () => clearTimeout(timeout);
  }, [toast]);
  useEffect(() => {
    const flush = () => {
      if (document.visibilityState === "hidden" && ready)
        void persist(historyRef.current.present);
    };
    document.addEventListener("visibilitychange", flush);
    return () => document.removeEventListener("visibilitychange", flush);
  }, [persist, ready]);

  const center = (): Point =>
    flow.screenToFlowPosition({
      x: window.innerWidth / 2 - (panel ? 150 : 0),
      y: window.innerHeight * 0.32,
    });
  const addNode = (
    kind: CanvasNodeKind,
    position?: Point,
    extra: Partial<CanvasNodeData> = {},
  ) => {
    const connected = position ? menu?.connected : undefined;
    if (
      connected &&
      !connectedCreationKinds(
        historyRef.current.present,
        connected.id,
        connected.direction,
        [kind],
      ).length
    ) {
      notify("该类型不能与当前节点建立参考关系。");
      return;
    }
    const where = position ?? center();
    const count = doc.nodes.filter((n) => n.type === kind).length + 1;
    const node = createNode(kind, where, {
      title: `${labels[kind]} ${count}`,
      ...extra,
    });
    if (kind === "text") node.height = 220;
    if (kind === "timeline") node.width = 720;
    node.position = {
      x: where.x - node.width / 2,
      y: where.y - node.height / 2,
    };
    if (connected) {
      // The dropped endpoint becomes the new node's input/output port.
      node.position = {
        x: where.x - (connected.direction === "target" ? node.width : 0),
        y: where.y - node.height / 2,
      };
    }
    if (menu?.parentId) {
      const parent = doc.nodes.find(
        (candidate) => candidate.id === menu.parentId,
      );
      if (parent) {
        const origin = absolutePosition(parent, doc.nodes);
        node.parentId = parent.id;
        node.position = {
          x: node.position.x - origin.x,
          y: node.position.y - origin.y,
        };
      }
    }
    const commands: CanvasCommand[] = [{ type: "add-nodes", nodes: [node] }];
    if (connected)
      commands.push({
        type: "add-edge",
        edge: {
          id: crypto.randomUUID(),
          source: connected.direction === "source" ? connected.id : node.id,
          target: connected.direction === "source" ? node.id : connected.id,
          sourceHandle: "out",
          targetHandle: "in",
        },
      });
    command({ type: "batch", commands });
    setSelected([node.id]);
    focusSelection(node.id);
    setDismissedComposer(null);
    referenceTarget.current = null;
    setMenu(null);
    setPanel(null);
    return node;
  };
  const fit = (selection = false) => {
    if (selection && selected.length === 1) {
      selectionPresentation.fitSelection();
      return;
    }
    selectionPresentation.userNavigation();
    const ids = selection ? selected : doc.nodes.map((n) => n.id);
    void flow.fitView({
      nodes: ids.map((id) => ({ id })),
      padding: 0.28,
      maxZoom: 1.5,
      duration: 250,
    });
  };
  /** Reference pickers connect what the policy allows and name what it refused. */
  const referenceEdges = (
    sources: readonly string[],
    target: string,
    added: readonly CanvasNode[] = [],
  ) => {
    const present = historyRef.current.present;
    const working = {
      nodes: [...present.nodes, ...added],
      edges: [...present.edges],
    };
    const issues = new Set<string>();
    for (const source of sources) {
      const issue = referenceIssue(working, source, target);
      if (issue) issues.add(REFERENCE_ISSUE_TEXT[issue]);
      else working.edges.push({ id: crypto.randomUUID(), source, target });
    }
    return {
      commands: working.edges
        .slice(present.edges.length)
        .map((edge): CanvasCommand => ({ type: "add-edge", edge })),
      issue: issues.size ? `未连接为参考：${[...issues].join("、")}。` : "",
    };
  };
  const selectAndFocus = (requested: CanvasNode) => {
    const owner = doc.nodes.find(
      (n) => n.type === "stack" && n.data.stack?.nodeIds.includes(requested.id),
    );
    const node = owner ?? requested;
    if (owner) {
      command({
        type: "update-node",
        id: owner.id,
        patch: {
          data: {
            stack: {
              ...owner.data.stack!,
              activeIndex: owner.data.stack!.nodeIds.indexOf(requested.id),
            },
          },
        },
      });
    }
    setSelected([node.id]);
    setDismissedComposer(null);
    focusSelection(node.id);
  };
  const connect = useCallback(
    (connection: Connection) => {
      setMenu(null);
      if (
        !connection.source ||
        !connection.target ||
        connection.source === connection.target
      )
        return;
      command({
        type: "add-edge",
        edge: { ...connection, id: crypto.randomUUID() },
      });
    },
    [command],
  );
  const onConnectEnd: OnConnectEnd = (event, state) => {
    const start = connectionStarted.current;
    connectionStarted.current = null;
    const point = "changedTouches" in event ? event.changedTouches[0] : event;
    if (
      !point ||
      !start ||
      (!pointerGesture.current.moved &&
        Math.hypot(point.clientX - start.x, point.clientY - start.y) <= 4)
    )
      return;
    if (state.isValid || !state.fromNode || !state.fromHandle) return;
    const target = document.elementFromPoint(point.clientX, point.clientY);
    const targetId = target
      ?.closest(".react-flow__node")
      ?.getAttribute("data-id");
    const group = doc.nodes.find(
      (node) =>
        node.id === targetId &&
        node.type === "group" &&
        !lockedIds.has(node.id),
    );
    if (state.toNode && state.toNode.id !== group?.id) return;
    if (!group && !target?.classList.contains("react-flow__pane")) return;
    setMenu({
      x: point.clientX,
      y: point.clientY,
      world: flow.screenToFlowPosition({ x: point.clientX, y: point.clientY }),
      connected: { id: state.fromNode.id, direction: state.fromHandle.type },
      parentId: group?.id,
    });
  };
  const onNodesChange = useCallback(
    (changes: NodeChange<FlowNode>[]) => {
      const dimensionChanges = changes.flatMap((c) =>
        c.type === "dimensions" && c.dimensions
          ? [{ id: c.id, dimensions: c.dimensions }]
          : [],
      );
      if (dimensionChanges.length)
        setMeasurements((current) => {
          const next = { ...current };
          let changed = false;
          for (const { id, dimensions } of dimensionChanges) {
            if (
              next[id]?.width === dimensions.width &&
              next[id]?.height === dimensions.height
            )
              continue;
            next[id] = dimensions;
            changed = true;
          }
          return changed ? next : current;
        });
      const selections = changes.filter((c) => c.type === "select");
      if (selections.length)
        setSelected((ids) => {
          const next = new Set(ids);
          for (const c of selections)
            if (c.type === "select") {
              if (c.selected) next.add(c.id);
              else next.delete(c.id);
            }
          return [...next];
        });
      const patches: CanvasCommand[] = [];
      // XYFlow may still deliver a final move/resize after cancellation.
      if (pointerGesture.current.cancelled) return;
      // Capture the grab offset immediately, but do not author a move inside
      // click tolerance (or let that jitter snap a node to a nearby guide).
      if (dragging.current && !pointerGesture.current.moved) return;
      const resize = changes.find(
        (c) => c.type === "dimensions" && c.dimensions && c.setAttributes,
      );
      if (resize?.type === "dimensions" && resize.dimensions) {
        const move = changes.find(
          (c) => c.type === "position" && c.id === resize.id,
        );
        // The document owns child-coordinate compensation, including locked children.
        // Do not apply React Flow's child position patches a second time.
        command({
          type: "resize-node",
          id: resize.id,
          ...resize.dimensions,
          ...(move?.type === "position" && move.position
            ? { position: move.position }
            : {}),
        });
        return;
      }
      let positions = changes.flatMap((c) =>
        c.type === "position" && c.position
          ? [{ id: c.id, position: c.position }]
          : [],
      );
      if (positions.length && dragging.current) {
        const snapped = snapNodePositions(
          historyRef.current.present.nodes,
          positions,
          {
            zoom: flow.getZoom(),
            objects: objectSnapping,
            grid: gridSnapping,
            bypass: bypassSnapping.current,
            previous: snapGuides.current,
          },
        );
        positions = snapped.positions;
        snapGuides.current = snapped.guides;
        setGuides(snapped.guides);
      }
      for (const { id, position } of positions)
        patches.push({ type: "update-node", id, patch: { position } });
      if (patches.length) command({ type: "batch", commands: patches });
    },
    [command, flow, objectSnapping, gridSnapping],
  );
  const lockedIds = useMemo(() => lockedNodeIds(doc.nodes), [doc.nodes]);
  const selectionControls = Boolean(
    single && !editing && !preview && !generationTarget,
  );
  const hasComposer = Boolean(
    selectionControls &&
    !activeAction &&
    composerNode &&
    single?.id === composerNode.id &&
    ["image", "video", "audio"].includes(composerNode.type) &&
    composerNode.data.mediaRole !== "asset" &&
    composerNode.id !== dismissedComposer &&
    !lockedIds.has(composerNode.id),
  );
  const hasToolbar = Boolean(
    selectionControls &&
    !activeAction &&
    single &&
    (!["image", "video", "audio", "file"].includes(single.type) ||
      (single.data.src && single.data.assetState !== "missing")),
  );
  const mediaBounds = single
    ? {
        ...absolutePosition(single, doc.nodes),
        width: single.width,
        height: single.height,
      }
    : null;
  const actionParameters =
    actionNode?.data.taskDraft?.tool === activeAction?.tool
      ? actionNode?.data.taskDraft?.parameters
      : undefined;
  const expansion = (key: string) =>
    typeof actionParameters?.[key] === "number"
      ? Math.max(0, Math.min(4, actionParameters[key] as number))
      : 0.25;
  const presentationBounds =
    activeAction?.tool === "outpaint" && mediaBounds
      ? {
          x: mediaBounds.x - mediaBounds.width * expansion("left"),
          y: mediaBounds.y - mediaBounds.height * expansion("top"),
          width:
            mediaBounds.width * (1 + expansion("left") + expansion("right")),
          height:
            mediaBounds.height * (1 + expansion("top") + expansion("bottom")),
        }
      : mediaBounds;
  const selectionPresentation = useSelectionPresentation({
    root,
    toolbar: toolbarElement,
    composer: composerElement,
    bounds: presentationBounds,
    mediaBounds,
    preferredZoom: activeAction ? 1.5 : undefined,
    nodeId: single?.id,
    panel,
    focusRequest: presentationFocus,
    blocked:
      interacting ||
      panning ||
      pointerGesture.current.moved ||
      !selectionControls,
    controlsKey: `${hasComposer}:${hasToolbar}:${activeAction?.token ?? ""}:${activeAction?.tool === "outpaint" ? JSON.stringify(presentationBounds) : ""}`,
  });
  const flowNodes: FlowNode[] = useMemo(
    () =>
      orderNodesForCanvas(doc.nodes).map((n) => ({
        ...n,
        measured: measurements[n.id],
        selected: selected.includes(n.id),
        draggable:
          !lockedIds.has(n.id) && !panning && activeAction?.nodeId !== n.id,
        connectable:
          !lockedIds.has(n.id) && !panning && activeAction?.nodeId !== n.id,
        style: { width: n.width, height: n.height },
        zIndex: n.type === "group" ? -1 : n.zIndex,
        ariaLabel: `${labels[n.type]}节点：${n.data.title}`,
      })),
    [
      doc.nodes,
      selected,
      panning,
      measurements,
      lockedIds,
      activeAction?.nodeId,
    ],
  );
  const flowEdges: Edge[] = useMemo(
    () =>
      doc.edges.map((e) => ({
        ...e,
        type: "reference",
        selected: selectedEdges.includes(e.id),
        hidden: !showEdges,
        data: {
          emphasized:
            selectedEdges.includes(e.id) ||
            selected.includes(e.source) ||
            selected.includes(e.target),
          running: generationByNode.has(e.target),
        },
        ariaLabel: "参考连线",
      })),
    [doc.edges, selectedEdges, selected, showEdges, generationByNode],
  );

  const projected = useMemo(
    () => projectCanvasStacks(flowNodes, flowEdges),
    [flowNodes, flowEdges],
  );

  const removeSelected = () => {
    command({
      type: "batch",
      commands: [
        { type: "remove-nodes", ids: selectedRef.current },
        { type: "remove-edges", ids: selectedEdges },
      ],
    });
    setSelected([]);
    setSelectedEdges([]);
    setMenu(null);
  };
  const copy = () => {
    clipboard.current = copySelection(
      historyRef.current.present,
      selectedRef.current,
    );
    pasteCount.current = 0;
    notify(`已复制 ${clipboard.current.nodes.length} 个节点`);
  };
  const cut = () => {
    const movable = selectedRef.current.filter((id) => !lockedIds.has(id));
    if (!movable.length) {
      notify("请先选择可编辑的节点。");
      return;
    }
    const result = cutSelection(historyRef.current.present, movable);
    if (!result.fragment) {
      notify("节点或其成员受锁定引用保护，未剪切。");
      return;
    }
    const fragment = result.fragment;
    change(() => result.document);
    clipboard.current = fragment;
    pasteCount.current = 0;
    setSelected([]);
    setMenu(null);
    notify(`已剪切 ${fragment.nodes.length} 个节点，可粘贴或撤销。`);
  };
  const paste = (duplicate = false) => {
    const fragment = duplicate
      ? copySelection(historyRef.current.present, selectedRef.current)
      : clipboard.current;
    if (!fragment?.nodes.length) return;
    const distance = 40 * (duplicate ? 1 : ++pasteCount.current);
    const result = pasteFragment(historyRef.current.present, fragment, {
      x: distance,
      y: distance,
    });
    change(() => result.document);
    setSelected(result.ids);
    setMenu(null);
  };
  const group = () => {
    change((d) => groupSelection(d, selectedRef.current));
    setSelected([]);
    setMenu(null);
  };
  const ungroup = () => {
    change((d) => ungroupSelection(d, selectedRef.current));
    setSelected([]);
    setMenu(null);
  };
  const downloadNode = (node: CanvasNode) => {
    try {
      if (node.data.src)
        downloadFile(
          node.data.src,
          downloadFilename(node.data.title, node.data.mimeType),
        );
      else if (node.type === "text")
        downloadFile(
          new Blob([node.data.text ?? ""], {
            type: "text/plain;charset=utf-8",
          }),
          downloadFilename(node.data.title, "text/plain"),
        );
      else notify("这个节点还没有可下载的素材。");
    } catch (error) {
      notify(error instanceof Error ? error.message : "无法下载素材，请重试。");
    }
  };
  const exportDocument = () => {
    const result = serializeDocument(historyRef.current.present);
    if (!result.ok) {
      notify(result.error.message);
      return;
    }
    downloadFile(
      new Blob([result.value], { type: "application/json" }),
      `${doc.title}.canvas.json`,
    );
    setMoreMenu(false);
    setProjectMenu(false);
  };
  const openFilePicker = (id: string | null = null) => {
    if (id && lockedIds.has(id)) {
      notify("请先解锁节点或所属分组。");
      return;
    }
    uploadTarget.current = id;
    fileInput.current?.click();
  };
  const importFiles = async (files: File[], point?: Point) => {
    const target = uploadTarget.current;
    uploadTarget.current = null;
    let refTarget = referenceTarget.current;
    const importDocumentId = historyRef.current.present.id;
    referenceTarget.current = null;
    const controller = new AbortController();
    importAbort.current?.abort();
    importAbort.current = controller;
    try {
      const nodes: CanvasNode[] = [];
      const commands: CanvasCommand[] = [];
      const origin = point ?? center();
      const { successes, failures } = await readImportBatch(
        files,
        readEditorResource,
        controller.signal,
      );
      for (const { index: i, value: resource } of successes) {
        const kind = resource.kind;
        const data = resourceNodeData(resource);
        if (target && i === 0) {
          commands.push({
            type: "update-node",
            id: target,
            patch: { type: kind, data },
          });
          continue;
        }
        const node = createNode(
          kind,
          { x: origin.x - 176 + i * 400, y: origin.y - 130 },
          data,
        );
        nodes.push(node);
      }
      if (controller.signal.aborted) return;
      if (historyRef.current.present.id !== importDocumentId) {
        notify("已切换项目，本次素材导入已取消。");
        return;
      }
      if (
        target &&
        !historyRef.current.present.nodes.some((n) => n.id === target)
      ) {
        notify("目标节点已被删除，本次素材导入已取消。");
        return;
      }
      if (
        refTarget &&
        !historyRef.current.present.nodes.some((n) => n.id === refTarget)
      )
        refTarget = null;
      if (nodes.length) commands.unshift({ type: "add-nodes", nodes });
      const linked = refTarget
        ? referenceEdges(
            nodes.map((node) => node.id),
            refTarget,
            nodes,
          )
        : { commands: [], issue: "" };
      commands.push(...linked.commands);
      if (commands.length) command({ type: "batch", commands });
      setSelected(
        target ? [target] : refTarget ? [refTarget] : nodes.map((n) => n.id),
      );
      notify(
        `已导入 ${successes.length} 个素材${failures.length ? `；${failures.length} 个失败：${failures.map((item) => `${item.name}（${item.message}）`).join("；")}` : "，保存在本机。"}${linked.issue}`,
      );
    } catch (error) {
      if (!controller.signal.aborted)
        notify(error instanceof Error ? error.message : "素材导入失败");
    } finally {
      if (importAbort.current === controller) importAbort.current = null;
    }
  };

  const resources = useMemo(
    () =>
      doc.nodes.flatMap((node) => {
        const resource = resourceFromNode(node);
        return resource ? [resource] : [];
      }),
    [doc.nodes],
  );
  const selectedSources: ToolSource[] = useMemo(
    () =>
      selected
        .flatMap((id) => {
          const node = doc.nodes.find((item) => item.id === id);
          return node ? [node] : [];
        })
        .map((node) => ({
          nodeId: node.id,
          kind: node.type,
          title: node.data.title,
          src: node.data.src,
          mimeType: node.data.mimeType,
          width: node.data.media?.width,
          height: node.data.media?.height,
          durationSeconds: node.data.media?.durationSeconds,
        })),
    [doc.nodes, selected],
  );
  const openEditor = (node: CanvasNode, mode: EditorMode = "default") => {
    if (lockedIds.has(node.id)) {
      notify("请先解锁节点或所属分组。");
      return;
    }
    if (node.type === "text") {
      setPreview(node);
      return;
    }
    editorOrigin.current = {
      documentId: doc.id,
      nodeId: node.id,
      kind: node.type,
      src: node.data.src,
    };
    setActionSession(null);
    setEditorMode(mode);
    setEditing(node);
    setMenu(null);
    setGenerationTarget(null);
  };
  const closeEditor = () => {
    setEditing(null);
    editorOrigin.current = null;
  };
  const applyEditorData = (data: Partial<CanvasNodeData>) => {
    const origin = editorOrigin.current;
    const current = historyRef.current.present;
    const target = current.nodes.find((node) => node.id === origin?.nodeId);
    if (
      !origin ||
      current.id !== origin.documentId ||
      !target ||
      target.type !== origin.kind ||
      target.data.src !== origin.src ||
      lockedNodeIds(current.nodes).has(target.id)
    ) {
      notify("编辑来源已改变、删除或锁定，本次修改未应用。");
      return;
    }
    command({ type: "update-node", id: target.id, patch: { data } });
    notify("修改已应用到画布，可以撤销。");
  };
  const addLinkedOutputs = (
    source: ResultSource,
    outputs: readonly LinkedMediaResult[],
    sourceTask?: CanvasToolTask,
  ) => {
    const result = appendLinkedMediaResults(
      historyRef.current.present,
      source,
      outputs,
      sourceTask,
    );
    if (result.error) {
      notify(result.error);
      return false;
    }
    if (!result.ids.length) return false;
    change(() => result.document);
    setSelected(result.ids);
    notify(`已加入 ${result.ids.length} 个真实素材，并连接来源节点。`);
    return true;
  };
  const editorOutputs = (outputs: readonly LinkedMediaResult[]) => {
    return editorOrigin.current
      ? addLinkedOutputs(editorOrigin.current, outputs)
      : false;
  };
  const stack = () => {
    try {
      const next = stackSelection(
        historyRef.current.present,
        selectedRef.current,
      );
      change(() => next);
      const created = next.nodes.at(-1)!;
      setSelected([created.id]);
      setMenu(null);
    } catch (error) {
      notify(error instanceof Error ? error.message : "无法创建堆叠。");
    }
  };
  const sourceFor = (node: CanvasNode): ResultSource => ({
    documentId: doc.id,
    nodeId: node.id,
    kind: node.type,
    src: node.data.src,
  });
  const closeAction = () => {
    setActionSession(null);
    root.current?.focus({ preventScroll: true });
  };
  const openNodeAction = (tool: CanvasToolId, source = single) => {
    if (!source) return;
    const origin = sourceFor(source);
    const valid = validateNodeActionSource(historyRef.current.present, origin);
    if (valid.error) {
      notify(valid.error);
      return;
    }
    setMenu(null);
    setGenerationTarget(null);
    setPanel(null);
    if (tool === "video-extend") {
      const next = createVideoExtensionDraft(
        historyRef.current.present,
        origin,
      );
      if (next.error) {
        notify(next.error);
        return;
      }
      setActionSession(null);
      change(() => next.document);
      setSelected(next.ids);
      if (next.ids[0]) focusSelection(next.ids[0]);
      return;
    }
    const modalModes: Partial<Record<CanvasToolId, EditorMode>> = {
      layers: "layers",
      composition: "default",
      crop: "default",
      "audio-trim": "trim",
      "director-stage": "default",
    };
    if (modalModes[tool]) {
      openEditor(source, modalModes[tool]);
      return;
    }
    setEditing(null);
    editorOrigin.current = null;
    setActionSession({ ...origin, tool, token: crypto.randomUUID() });
    focusSelection(source.id);
  };
  const saveActionDraft = (session: ResultSource, task: CanvasToolTask) => {
    const valid = validateNodeActionSource(historyRef.current.present, session);
    if ("error" in valid || task.sourceNodeIds[0] !== session.nodeId) return;
    if (JSON.stringify(valid.node.data.taskDraft) !== JSON.stringify(task))
      command({
        type: "update-node",
        id: session.nodeId,
        patch: { data: { taskDraft: task } },
      });
  };
  const importActionResults = (
    session: ResultSource & { token: string },
    task: CanvasToolTask,
  ) => {
    const valid = validateNodeActionSource(historyRef.current.present, session);
    if (valid.error) {
      notify(valid.error);
      return;
    }
    saveActionDraft(session, task);
    resultBinding.current = {
      ...session,
      placement: "post-edit",
      actionToken: session.token,
    };
    if (resultInput.current) {
      resultInput.current.accept = "image/*,video/*,audio/*";
      resultInput.current.click();
    }
  };
  const runQuickAction = async (
    operation: (
      source: ResultSource,
      signal: AbortSignal,
    ) => Promise<LinkedMediaResult[]>,
  ) => {
    if (!single) return;
    const source = sourceFor(single);
    const valid = validateNodeActionSource(historyRef.current.present, source);
    if (valid.error) {
      notify(valid.error);
      return;
    }
    quickAction.current?.abort();
    const controller = new AbortController();
    quickAction.current = controller;
    setActionSession(null);
    notify("正在处理素材…");
    try {
      const outputs = await operation(source, controller.signal);
      if (!controller.signal.aborted) addLinkedOutputs(source, outputs);
    } catch (error) {
      if (!controller.signal.aborted)
        notify(error instanceof Error ? error.message : "素材处理失败。");
    } finally {
      if (quickAction.current === controller) quickAction.current = null;
    }
  };
  const updateJob = (id: string, patch: Partial<Job>) =>
    setJobs((current) =>
      current.map((job) => (job.id === id ? { ...job, ...patch } : job)),
    );
  const refreshRunning = () =>
    setActiveGenerations(
      [...serviceRuns.current.values()]
        .filter((run) => !run.controller.signal.aborted)
        .map(({ documentId, nodeId, phase }) => ({
          documentId,
          nodeId,
          phase,
        })),
    );
  const revealResults = (ids: readonly string[]) =>
    setArrivingNodes((current) => new Set([...current, ...ids]));
  const mediaOutput = async (
    result: BackendResult,
    signal?: AbortSignal,
  ): Promise<LinkedMediaResult> => {
    const resource = await readEditorResource(result.file, signal);
    return {
      kind: result.kind,
      src: resource.src!,
      mimeType: resource.mimeType || result.file.type,
      title: resource.title,
      media: {
        ...result.media,
        ...(resource.width ? { width: resource.width } : {}),
        ...(resource.height ? { height: resource.height } : {}),
        ...(resource.durationSeconds
          ? { durationSeconds: resource.durationSeconds }
          : {}),
      },
    };
  };
  /** Pull finished results this page did not place, e.g. the assistant's. */
  const syncServiceResults = async (announce = false) => {
    const documentId = doc.id;
    if (
      !backendCatalog.connected ||
      historyRef.current.present.id !== documentId
    )
      return 0;
    if (syncing.current.has(documentId)) return 1;
    syncing.current.add(documentId);
    const projectId = backendProjectId(documentId);
    try {
      // Read persisted ownership before polling: a completed task may predate this mount.
      const allJobs = await readJobs();
      if (historyRef.current.present.id !== documentId) return 0;
      const awaitingTaskIdentity = () =>
        [...serviceRuns.current.values()].some(
          (run) => run.documentId === documentId && !run.taskId,
        );
      // Acceptance can finish on the service before its response reaches this page.
      // Wait for that response to associate the task with its original node.
      if (awaitingTaskIdentity()) return 1;
      const running = new Set(
        [...serviceRuns.current.values()].flatMap((run) =>
          run.documentId === documentId && run.taskId ? [run.taskId] : [],
        ),
      );
      const { results, active, tasks } = await unsyncedResults(
        projectId,
        running,
        undefined,
        new Set(allJobs.flatMap((job) => (job.taskId ? [job.taskId] : []))),
      );
      const received: { taskId: string; output: ServiceResult }[] = [];
      const isClaimed = (taskId: string) =>
        isHandled(projectId, taskId) ||
        [...serviceRuns.current.values()].some(
          (run) => run.documentId === documentId && run.taskId === taskId,
        );
      for (const item of results) {
        if (isClaimed(item.taskId)) continue;
        received.push({
          taskId: item.taskId,
          output:
            item.kind === "text"
              ? { kind: "text", title: item.title, text: item.text }
              : await mediaOutput(item.result),
        });
      }
      const currentJobs = await readJobs();
      if (historyRef.current.present.id !== documentId) return active;
      if (awaitingTaskIdentity()) return Math.max(active, 1);
      // A live task can finish during media decoding; it alone owns that completion.
      const pending = received.filter((item) => !isClaimed(item.taskId));
      setJobs((current) =>
        reconcileGenerationJobs(
          mergeGenerationJobs(currentJobs, current),
          tasks,
        ),
      );
      if (pending.length) {
        const next = applyRecoveredGenerationResults(
          historyRef.current.present,
          pending,
          currentJobs,
        );
        change(() => next.document);
        revealResults(next.ids);
        setJobs((current) => {
          const updated = mergeGenerationJobs(currentJobs, current);
          pending.forEach((item, index) => {
            const existing = updated.findIndex(
              (job) => job.taskId === item.taskId,
            );
            const patch: Job = {
              id: existing >= 0 ? updated[existing]!.id : crypto.randomUUID(),
              nodeId:
                existing >= 0
                  ? updated[existing]!.nodeId
                  : next.placements[index]!.ids[0]!,
              title: item.output.title,
              taskId: item.taskId,
              status: "succeeded",
              time: jobTime(),
              outputs: [item.output],
              message: next.placements[index]!.error ?? "已更新到画布",
            };
            if (existing >= 0)
              updated[existing] = { ...updated[existing]!, ...patch };
            else updated.unshift(patch);
          });
          return updated;
        });
        for (const item of pending) markHandled(projectId, item.taskId);
        const unplaced = next.placements.filter((item) => item.error).length;
        notify(
          unplaced
            ? `${pending.length - unplaced} 个结果已更新到画布，${unplaced} 个结果因来源变化保留在生成历史。`
            : `已从本地服务同步 ${pending.length} 个结果到画布。`,
        );
      } else if (announce)
        notify(
          active ? `还有 ${active} 个任务正在生成。` : "没有需要同步的新结果。",
        );
      return active;
    } catch (error) {
      if (announce) notify(errorMessage(error));
      return 0;
    } finally {
      syncing.current.delete(documentId);
    }
  };
  /** The assistant's generations finish after its reply; keep syncing until they do. */
  const followServiceTasks = async () => {
    const documentId = doc.id;
    if (
      historyRef.current.present.id !== documentId ||
      following.current.has(documentId)
    )
      return;
    following.current.add(documentId);
    try {
      for (let round = 0; round < 720; round++) {
        if (
          historyRef.current.present.id !== documentId ||
          !(await syncServiceResults())
        )
          return;
        await new Promise((resolve) => setTimeout(resolve, 5000));
      }
    } finally {
      following.current.delete(documentId);
    }
  };
  const runServiceTask = async (
    request: GenerationRequest,
    origin: ResultSource,
    title: string,
    resultMode: GenerationResultMode = "replace",
  ) => {
    const id = crypto.randomUUID();
    const run: ServiceRun = {
      controller: new AbortController(),
      documentId: origin.documentId,
      nodeId: origin.nodeId,
      phase: "preparing",
    };
    const { signal } = run.controller;
    serviceRuns.current.set(id, run);
    refreshRunning();
    setJobs((current) => [
      {
        id,
        nodeId: origin.nodeId,
        resultSource: origin,
        resultMode,
        title,
        status: "running",
        time: jobTime(),
        message: GENERATION_LABELS[run.phase],
        request: {
          kind: request.kind,
          title: request.title,
          prompt: request.prompt,
          settings: getNodeGenerationSettings(
            historyRef.current.present.nodes.find(
              (node) => node.id === origin.nodeId,
            )!,
          ),
        },
      },
      ...current,
    ]);
    const setPhase = (phase: GenerationPhase) => {
      if (signal.aborted) return;
      run.phase = phase;
      refreshRunning();
      updateJob(id, { message: GENERATION_LABELS[phase] });
    };
    try {
      const submitted = await submitGeneration(request, signal);
      Object.assign(run, submitted);
      updateJob(id, { taskId: submitted.taskId });
      if (signal.aborted) {
        await cancelGeneration(submitted.projectId, submitted.taskId).catch(
          () => {},
        );
        throw signal.reason;
      }
      setPhase("submitting");
      const result = await waitForResult(
        submitted.projectId,
        submitted.taskId,
        signal,
        (task: BackendTask) => {
          const phase = generationPhase(task);
          if (phase) setPhase(phase);
          else if (task.status === "succeeded") setPhase("finishing");
        },
      );
      setPhase("finishing");
      const output = await mediaOutput(result, signal);
      updateJob(id, {
        status: "succeeded",
        outputs: [output],
        message: "结果已保存到历史",
      });
      const appended = applyGenerationResults(
        historyRef.current.present,
        origin,
        [output],
        resultMode,
      );
      if (appended.error || !appended.ids.length) {
        const sameDocument =
          historyRef.current.present.id === origin.documentId;
        const message = `${appended.error ?? "结果未写入画布。"}${sameDocument ? "可在生成历史中恢复结果。" : "回到原画布后可同步本地服务结果。"}`;
        updateJob(id, { status: "succeeded", message });
        if (sameDocument) markHandled(submitted.projectId, submitted.taskId);
        notify(message);
        return;
      }
      change(() => appended.document);
      revealResults(appended.ids);
      markHandled(submitted.projectId, submitted.taskId);
      updateJob(id, { status: "succeeded", message: "已加入画布" });
      notify(
        resultMode === "replace"
          ? "生成完成，结果已更新到当前节点。"
          : "批量生成完成，额外结果已加入画布。",
      );
    } catch (error) {
      if (signal.aborted)
        updateJob(id, { status: "cancelled", message: "已取消" });
      else {
        const message = errorMessage(error);
        updateJob(id, { status: "failed", message });
        notify(message);
      }
    } finally {
      serviceRuns.current.delete(id);
      refreshRunning();
    }
  };
  const runServiceGeneration = (node: CanvasNode, incoming: CanvasNode[]) => {
    const settings = getNodeGenerationSettings(node);
    const config = backendModel(settings, backendCatalog.models);
    const blocked = backendBlocker(settings, incoming, backendCatalog.models);
    if (blocked || !config) {
      notify(blocked ?? "所选模型配置不可用。");
      return;
    }
    const references = backendReferences(settings, incoming, config);
    const document = historyRef.current.present;
    const request: GenerationRequest = {
      documentId: document.id,
      documentTitle: document.title,
      config,
      kind: settings.mode,
      prompt: settings.prompt,
      title: node.data.title,
      videoMode: backendVideoMode(settings, references),
      durationSeconds: settings.durationSeconds,
      aspectRatio: settings.aspectRatio,
      voice: serviceVoice(settings),
      references: references.map(({ node: item }) => ({
        kind: item.data.kind as "image" | "video" | "audio" | "text",
        title: item.data.title,
        src: item.data.src,
        text: item.data.text,
      })),
    };
    const origin: ResultSource = {
      documentId: document.id,
      nodeId: node.id,
      kind: node.type,
      src: node.data.src,
    };
    const count = settings.mode === "audio" ? 1 : (settings.count ?? 1);
    for (let index = 0; index < count; index++)
      void runServiceTask(
        request,
        origin,
        settings.prompt || node.data.title,
        index === 0 ? "replace" : "additional",
      );
  };
  const cancelServiceRuns = (nodeId: string) => {
    for (const run of serviceRuns.current.values()) {
      if (run.nodeId !== nodeId || run.documentId !== doc.id) continue;
      run.controller.abort();
      if (run.projectId && run.taskId)
        void cancelGeneration(run.projectId, run.taskId).catch((error) =>
          notify(errorMessage(error)),
        );
    }
    refreshRunning();
  };
  useEffect(() => {
    // Results that finished while this canvas was closed join it on opening.
    if (ready && backendCatalog.connected) void followServiceTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doc.id, ready, backendCatalog.connected]);
  const prepareGeneration = (nodeId: string) => {
    const current = historyRef.current.present;
    const node = current.nodes.find((node) => node.id === nodeId);
    if (!node || lockedNodeIds(current.nodes).has(nodeId)) return;
    if (
      [...serviceRuns.current.values()].some(
        (run) => run.documentId === current.id && run.nodeId === nodeId,
      )
    )
      return;
    const incoming = incomingNodes(current, nodeId);
    const settings = getNodeGenerationSettings(node);
    if (settings.modelConfigId) {
      runServiceGeneration(node, incoming);
      return;
    }
    const blocked = generationBlocker(settings, incoming);
    if (blocked) {
      notify(blocked);
      return;
    }
    const jobId = crypto.randomUUID();
    setGenerationTarget({ documentId: current.id, nodeId: node.id, jobId });
    setJobs((current) => [
      {
        id: jobId,
        nodeId: node.id,
        title: node.data.prompt || node.data.title,
        status: "draft",
        request: {
          kind: settings.mode,
          title: node.data.title,
          prompt: node.data.prompt,
          settings: structuredClone(settings),
        },
        time: new Date().toLocaleTimeString("zh-CN", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
      ...current,
    ]);
  };
  const generationNode =
    generationTarget?.documentId === doc.id
      ? doc.nodes.find((node) => node.id === generationTarget.nodeId)
      : undefined;
  const generationIncoming = incomingNodes(doc, generationNode?.id);
  const generationSettings = generationNode
    ? getNodeGenerationSettings(generationNode)
    : undefined;
  const generationDraft =
    generationNode && generationSettings
      ? {
          format: "museshow-generation-request",
          version: 1,
          status: "draft",
          sourcePage: ORIGINAL_CANVAS_URL,
          documentId: doc.id,
          targetNodeId: generationNode.id,
          requestId: generationTarget?.jobId,
          title: generationNode.data.title,
          prompt: generationNode.data.prompt,
          settings: generationSettings,
          references: generationActiveReferences(
            generationSettings,
            generationIncoming,
          ).map(({ node, role }) => ({
            nodeId: node.id,
            title: node.data.title,
            kind: node.type,
            role,
            ...(node.data.src
              ? {
                  src: node.data.src,
                  mimeType: node.data.mimeType,
                  media: node.data.media,
                }
              : {}),
            ...(node.data.subject ? { subject: node.data.subject } : {}),
            ...(node.data.tool ? { tool: node.data.tool } : {}),
            ...(node.data.text ? { text: node.data.text } : {}),
          })),
        }
      : undefined;
  const exportGenerationDraft = () => {
    if (!generationDraft || !generationNode) return;
    downloadFile(
      new Blob([JSON.stringify(generationDraft, null, 2)], {
        type: "application/json",
      }),
      `${generationNode.data.title}.request.json`,
    );
    notify("已导出生成请求草稿，没有向服务提交任务。");
  };
  const pickGenerationResults = () => {
    if (
      !generationNode ||
      !["image", "video", "audio"].includes(generationNode.type)
    )
      return;
    resultBinding.current = {
      documentId: doc.id,
      nodeId: generationNode.id,
      kind: generationNode.type,
      expectedKind: generationNode.type as "image" | "video" | "audio",
      src: generationNode.data.src,
      jobId: generationTarget?.jobId,
      placement: "generation",
    };
    if (resultInput.current) {
      resultInput.current.accept = `${generationNode.type}/*`;
      resultInput.current.click();
    }
  };
  const importGenerationResults = async (files: File[]) => {
    const binding = resultBinding.current;
    resultBinding.current = null;
    if (!binding || !files.length) return;
    const source = historyRef.current.present.nodes.find(
      (node) => node.id === binding.nodeId,
    );
    if (!source || historyRef.current.present.id !== binding.documentId) {
      notify("任务来源已失效，请重新选择。");
      return;
    }
    const origin = binding;
    const controller = new AbortController();
    importAbort.current?.abort();
    importAbort.current = controller;
    setResultBusy(true);
    try {
      const outputs: LinkedMediaResult[] = [];
      for (const file of files) {
        const resource = await readEditorResource(file, controller.signal);
        if (resource.kind === "file")
          throw new Error("结果必须是实际图片、视频或音频文件。");
        if (binding.expectedKind && resource.kind !== binding.expectedKind)
          throw new Error(
            `该任务需要${labels[binding.expectedKind]}结果，文件「${file.name}」类型不匹配。`,
          );
        outputs.push({
          kind: resource.kind,
          src: resource.src!,
          mimeType: resource.mimeType || `${resource.kind}/*`,
          title: resource.title,
          media: {
            ...(resource.width ? { width: resource.width } : {}),
            ...(resource.height ? { height: resource.height } : {}),
            ...(resource.durationSeconds
              ? { durationSeconds: resource.durationSeconds }
              : {}),
          },
        });
      }
      if (controller.signal.aborted) return;
      const placed =
        binding.placement === "post-edit"
          ? appendLinkedMediaResults(
              historyRef.current.present,
              origin,
              outputs,
            )
          : applyGenerationResults(historyRef.current.present, origin, outputs);
      setJobs((current) =>
        current.map((job) =>
          job.id === binding.jobId
            ? {
                ...job,
                status: "imported",
                resultSource: origin,
                resultMode: "replace",
                outputs,
                message: placed.error ?? "已更新到画布",
              }
            : job,
        ),
      );
      if (placed.error) notify(placed.error);
      else if (placed.ids.length) {
        change(() => placed.document);
        revealResults(placed.ids);
        if (binding.placement === "generation")
          setGenerationTarget((target) =>
            target?.documentId === binding.documentId &&
            target.nodeId === binding.nodeId &&
            target.jobId === binding.jobId
              ? null
              : target,
          );
        // A late file decode may finish after another tool or node was selected.
        // Keep its frozen output provenance without closing the newer workflow.
        if (
          binding.placement === "post-edit" &&
          actionSessionRef.current?.token === binding.actionToken &&
          selectedRef.current.length === 1 &&
          selectedRef.current[0] === binding.nodeId
        ) {
          setActionSession(null);
          setSelected(placed.ids);
        }
      }
    } catch (error) {
      if (!controller.signal.aborted)
        notify(error instanceof Error ? error.message : "结果导入失败。");
    } finally {
      if (importAbort.current === controller) {
        importAbort.current = null;
        setResultBusy(false);
      }
    }
  };

  const closeGeneration = () => {
    importAbort.current?.abort();
    resultBinding.current = null;
    setResultBusy(false);
    setGenerationTarget(null);
  };

  const onWorkspaceKey = (event: React.KeyboardEvent<HTMLDivElement>) => {
    bypassSnapping.current = event.metaKey || event.ctrlKey;
    if (bypassSnapping.current) clearGuides();
    if (!ready || switchPending.current) return;
    const el = event.target as HTMLElement;
    // These components own their keyboard shortcuts and cancellation lifecycle.
    if (
      el.closest(
        ".cw-composer-dock,.cw-composer-popover,.cw-node-toolbar-anchor,.cw-domain-dialog,.cw-selection-menu,.cw-action-media-host",
      )
    )
      return;
    if (event.key === "Escape" && el.closest(".cw-rail")) return;
    const editingText = el.closest(
      "input,textarea,select,[contenteditable=true]",
    );
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      if (activeAction) {
        closeAction();
        return;
      }
      if (textEditingId) {
        end();
        setTextEditingId(null);
        root.current?.focus({ preventScroll: true });
        return;
      }
      clearGuides();
      cancelDrag();
      setSelectedEdges([]);
      setMenu(null);
      setPreview(null);
      setEditing(null);
      closeGeneration();
      setRename(null);
      setHelp(false);
      setProjectMenu(false);
      setMoreMenu(false);
      setZoomMenu(false);
      if (!editingText) setSelected([]);
      return;
    }
    if (
      editingText ||
      activeAction ||
      rename ||
      preview ||
      editing ||
      help ||
      generationTarget ||
      modelSettings ||
      el.closest("button,a,video,audio,[role=dialog]") ||
      (el !== root.current && !el.closest(".react-flow"))
    )
      return;
    const mod = event.metaKey || event.ctrlKey;
    const key = event.key.toLowerCase();
    if (
      !mod &&
      event.key === "Enter" &&
      single?.type === "text" &&
      !lockedIds.has(single.id) &&
      (el === root.current ||
        el.closest(".react-flow__node")?.getAttribute("data-id") === single.id)
    ) {
      event.preventDefault();
      event.stopPropagation();
      setTextEditingId(single.id);
    } else if (mod && key === "z") {
      event.preventDefault();
      setHistory(event.shiftKey ? redo : undo);
    } else if (mod && key === "y") {
      event.preventDefault();
      setHistory(redo);
    } else if (mod && key === "a") {
      event.preventDefault();
      setSelected(
        doc.nodes
          .filter((n) => !projected.ownerByNodeId.has(n.id))
          .map((n) => n.id),
      );
    } else if (mod && key === "c") {
      event.preventDefault();
      copy();
    } else if (mod && key === "x") {
      event.preventDefault();
      cut();
    } else if (
      mod &&
      (event.code === "BracketLeft" || event.code === "BracketRight")
    ) {
      event.preventDefault();
      command({
        type: "reorder-nodes",
        ids: selectedRef.current,
        direction:
          event.code === "BracketLeft"
            ? event.shiftKey
              ? "back"
              : "backward"
            : event.shiftKey
              ? "front"
              : "forward",
      });
    } else if (mod && key === "v" && clipboard.current) {
      event.preventDefault();
      paste();
    } else if (mod && key === "d") {
      event.preventDefault();
      paste(true);
    } else if (mod && key === "g") {
      event.preventDefault();
      if (event.shiftKey) ungroup();
      else group();
    } else if (mod && key === "s") {
      event.preventDefault();
      void persist(doc);
    } else if (mod && key === "o") {
      event.preventDefault();
      openFilePicker();
    } else if (event.key === "Delete" || event.key === "Backspace") {
      event.preventDefault();
      removeSelected();
    } else if (event.shiftKey && event.code === "Digit1") {
      event.preventDefault();
      fit();
    } else if (event.shiftKey && event.code === "Digit2") {
      event.preventDefault();
      fit(true);
    } else if (!mod && key === "v") setHand(false);
    else if (!mod && key === "h") setHand(true);
    else if (!mod && key === "t") addNode("text");
    else if (!mod && key === "f" && single) setPreview(single);
    else if (!mod && key === "?") setHelp(true);
    else if (
      ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)
    ) {
      event.preventDefault();
      event.stopPropagation();
      const step = event.shiftKey ? 10 : 1;
      command({
        type: "move-nodes",
        ids: selectedRef.current,
        delta: {
          x:
            event.key === "ArrowLeft"
              ? -step
              : event.key === "ArrowRight"
                ? step
                : 0,
          y:
            event.key === "ArrowUp"
              ? -step
              : event.key === "ArrowDown"
                ? step
                : 0,
        },
      });
    }
  };
  useEffect(() => {
    const onPaste = (event: ClipboardEvent) => {
      if (!ready || switchPending.current) return;
      if (
        editing ||
        generationTarget ||
        preview ||
        (event.target as HTMLElement).closest("[role=dialog]")
      )
        return;
      if (
        (event.target as HTMLElement).closest(
          "input,textarea,[contenteditable=true]",
        )
      )
        return;
      if (event.clipboardData?.files.length) {
        event.preventDefault();
        uploadTarget.current = null;
        void importFiles([...event.clipboardData.files]);
      }
    };
    window.addEventListener("paste", onPaste);
    return () => {
      window.removeEventListener("paste", onPaste);
    };
  });

  const actions = {
    select: (id: string, event: React.MouseEvent) => {
      if (panning || pointerGesture.current.blocksClick(event.detail)) return;
      setMenu(null);
      setDismissedComposer(null);
      if (event.shiftKey || event.metaKey || event.ctrlKey) {
        const ids = new Set(selectionAtPointerDown.current);
        if (ids.has(id)) ids.delete(id);
        else ids.add(id);
        setSelected([...ids]);
      } else {
        setSelected([id]);
        focusSelection(id);
      }
    },
    editTags: (id: string) => {
      if (!selected.includes(id)) setSelected([id]);
      setPanel("tags");
    },
    update: (id: string, data: Partial<CanvasNodeData>) =>
      command({ type: "update-node", id, patch: { data } }),
    rename: (id: string) => {
      const n = doc.nodes.find((n) => n.id === id);
      if (lockedIds.has(id)) notify("请先解锁节点或所属分组。");
      else if (n) setRename({ id, value: n.data.title });
    },
    upload: (id: string) => openFilePicker(id),
    preview: (id: string) => {
      const node = doc.nodes.find((node) => node.id === id);
      if (node) setPreview(node);
    },
    newConnected: (id: string, direction: "source" | "target") => {
      const n = doc.nodes.find((n) => n.id === id);
      if (!n || lockedIds.has(id)) return;
      const p = absolutePosition(n, doc.nodes);
      const world = {
        x: p.x + (direction === "source" ? n.width + 140 : -140),
        y: p.y + n.height / 2,
      };
      const screen = flow.flowToScreenPosition(world);
      setMenu({
        x: Math.min(screen.x, window.innerWidth - 232),
        y: Math.min(screen.y, window.innerHeight - 330),
        world,
        connected: { id, direction },
      });
    },
    contextMenu: (id: string, event: React.MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      if (!selected.includes(id)) setSelected([id]);
      setMenu({
        x: event.clientX,
        y: event.clientY,
        world: flow.screenToFlowPosition({
          x: event.clientX,
          y: event.clientY,
        }),
        nodeId: id,
      });
    },
    edit: (id: string) => {
      const node = doc.nodes.find((node) => node.id === id);
      if (node) openEditor(node);
    },
    isLocked: (id: string) => lockedIds.has(id),
    getNode: (id: string) => doc.nodes.find((node) => node.id === id),
    generationActivity: (id: string) => generationByNode.get(id),
    isArriving: (id: string) => arrivingNodes.has(id),
    cycleStack: (id: string, delta: number) => {
      const node = doc.nodes.find((node) => node.id === id),
        stack = node?.data.stack;
      if (!node || !stack?.nodeIds.length) return;
      try {
        const next = updateStack(historyRef.current.present, id, {
          ...stack,
          activeIndex:
            (stack.activeIndex + delta + stack.nodeIds.length) %
            stack.nodeIds.length,
        });
        change(() => next);
      } catch (error) {
        notify(error instanceof Error ? error.message : "堆叠切换失败。");
      }
    },
    metadata: (id: string, media: NonNullable<CanvasNodeData["media"]>) => {
      const node = historyRef.current.present.nodes.find(
        (node) => node.id === id,
      );
      if (!node) return;
      const actual = Object.fromEntries(
        Object.entries(media).filter(
          ([, value]) =>
            typeof value === "number" && Number.isFinite(value) && value > 0,
        ),
      );
      if (
        !Object.keys(actual).length ||
        Object.entries(actual).every(
          ([key, value]) =>
            node.data.media?.[
              key as keyof NonNullable<CanvasNodeData["media"]>
            ] === value,
        )
      )
        return;
      // Decoded dimensions are derived facts; filling them must not consume the user's undo step.
      setHistory((current) => ({
        ...current,
        present: executeCommand(current, {
          type: "update-node",
          id,
          patch: { data: { media: { ...node.data.media, ...actual } } },
        }).present,
      }));
    },
    beginEdit: begin,
    endEdit: end,
    beginResize: beginDrag,
    endResize: endDrag,
    isTextEditing: (id: string) => textEditingId === id,
    finishTextEdit: () => {
      end();
      setTextEditingId(null);
    },
  };
  const contextItems = (children: ReactNode) => (
    <CanvasContextMenu x={menu!.x} y={menu!.y}>
      {children}
    </CanvasContextMenu>
  );
  const menuButton = (
    text: string,
    icon: string,
    action: () => void,
    shortcut?: string,
  ) => (
    <button
      role="menuitem"
      onClick={() => {
        action();
        setMenu(null);
      }}
    >
      <CanvasIcon name={icon} size={16} />
      <span>{text}</span>
      {shortcut && <kbd>{shortcut}</kbd>}
    </button>
  );
  const pendingSource =
    menu?.connected && doc.nodes.find((node) => node.id === menu.connected!.id);
  const pendingConnection =
    pendingSource && menu?.connected
      ? {
          from: {
            x:
              absolutePosition(pendingSource, doc.nodes).x +
              (menu.connected.direction === "source" ? pendingSource.width : 0),
            y:
              absolutePosition(pendingSource, doc.nodes).y +
              pendingSource.height / 2,
          },
          to: menu.world,
          direction: menu.connected.direction,
        }
      : undefined;

  const workspace = (
    <div
      inert={!ready || switching}
      aria-busy={!ready || switching}
      className={`cw-workspace${panning ? " cw-workspace-panning" : ""}`}
      ref={root}
      data-testid="canvas-workspace"
      tabIndex={-1}
      onPointerDownCapture={(event) => {
        selectionAtPointerDown.current = selectedRef.current;
        bypassSnapping.current = event.metaKey || event.ctrlKey;
        const target = event.target as HTMLElement;
        const surface = Boolean(target.closest(".react-flow"));
        if (surface) selectionPresentation.userNavigation();
        pointerGesture.current.begin(
          event.pointerId,
          event.clientX,
          event.clientY,
          surface,
          panning,
        );
        if (
          surface &&
          !target.closest(
            "button,input,textarea,select,video,audio,a,[contenteditable=true],.nodrag:not(.react-flow__handle)",
          )
        )
          setInteracting(true);
      }}
      onClickCapture={(event) => {
        if (pointerGesture.current.blocksClick(event.detail)) {
          event.preventDefault();
          event.stopPropagation();
        } else if (
          event.detail === 2 &&
          !pointerGesture.current.blocksDoubleClick() &&
          !panning &&
          (event.target as HTMLElement).classList.contains("react-flow__pane")
        ) {
          // In selection mode onPaneClick receives pointerup (detail=0).
          // Read native click count here; the pan/zoom layer can consume dblclick.
          setMenu({
            x: event.clientX,
            y: event.clientY,
            world: flow.screenToFlowPosition({
              x: event.clientX,
              y: event.clientY,
            }),
          });
        }
      }}
      onDoubleClickCapture={(event) => {
        if (pointerGesture.current.blocksDoubleClick()) {
          event.preventDefault();
          event.stopPropagation();
        }
      }}
      onKeyDownCapture={onWorkspaceKey}
      onKeyUpCapture={(event) => {
        bypassSnapping.current = event.metaKey || event.ctrlKey;
      }}
      onDragOver={(event) => {
        if ((event.target as HTMLElement).closest("[role=dialog]")) return;
        if (event.dataTransfer.types.includes("Files")) {
          event.preventDefault();
          event.dataTransfer.dropEffect = "copy";
        }
      }}
      onDrop={(event) => {
        if (
          event.defaultPrevented ||
          (event.target as HTMLElement).closest("[role=dialog]")
        )
          return;
        if (event.dataTransfer.files.length) {
          event.preventDefault();
          uploadTarget.current = null;
          void importFiles(
            [...event.dataTransfer.files],
            flow.screenToFlowPosition({ x: event.clientX, y: event.clientY }),
          );
        }
      }}
    >
      <CanvasActionsContext.Provider value={actions}>
        <ReactFlow<FlowNode, Edge>
          nodes={projected.nodes}
          edges={projected.edges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={(changes) => {
            for (const c of changes)
              if (c.type === "select")
                setSelectedEdges((ids) =>
                  c.selected
                    ? [...new Set([...ids, c.id])]
                    : ids.filter((id) => id !== c.id),
                );
          }}
          onConnect={connect}
          connectionLineComponent={CanvasConnectionLine}
          onConnectStart={(event) => {
            setMenu(null);
            const point = "touches" in event ? event.touches[0] : event;
            connectionStarted.current = point
              ? { x: point.clientX, y: point.clientY }
              : null;
          }}
          onConnectEnd={onConnectEnd}
          connectOnClick={false}
          elementsSelectable={!panning}
          nodesConnectable={!panning}
          isValidConnection={(c) =>
            !lockedIds.has(c.source) &&
            !lockedIds.has(c.target) &&
            canAddReference(doc, c.source, c.target)
          }
          onNodeClick={(event, node) => {
            if (
              panning ||
              (event.target as HTMLElement).closest(
                "button,input,textarea,select,video,audio,a,[contenteditable=true],.nodrag",
              )
            )
              return;
            setMenu(null);
            setDismissedComposer(null);
            // Read modifiers from the gesture itself, including focus changes between clicks.
            if (event.shiftKey || event.metaKey || event.ctrlKey) {
              const ids = new Set(selectionAtPointerDown.current);
              if (ids.has(node.id)) ids.delete(node.id);
              else ids.add(node.id);
              setSelected([...ids]);
              return;
            }
            setSelected([node.id]);
            focusSelection(node.id);
            if (
              node.type === "text" &&
              !lockedIds.has(node.id) &&
              selectionAtPointerDown.current.length === 1 &&
              selectionAtPointerDown.current[0] === node.id
            )
              setTextEditingId(node.id);
          }}
          onNodeDoubleClick={(event, node) => {
            if (
              panning ||
              (event.target as HTMLElement).closest(
                "button,input,textarea,select,video,audio,a,[contenteditable=true],.nodrag",
              )
            )
              return;
            setSelected([node.id]);
            if (node.type === "text" && !lockedIds.has(node.id)) {
              setTextEditingId(node.id);
              return;
            }
            focusSelection(node.id);
          }}
          onNodeDragStart={beginDrag}
          onNodeDragStop={endDrag}
          onSelectionDragStart={beginDrag}
          onSelectionDragStop={endDrag}
          onPaneClick={(event) => {
            if (panning || pointerGesture.current.blocksClick(1)) return;
            root.current?.focus({ preventScroll: true });
            setMenu(null);
            setSelected([]);
            setDismissedComposer(null);
            setSelectedEdges([]);
            setProjectMenu(false);
            setMoreMenu(false);
            setZoomMenu(false);
          }}
          onPaneContextMenu={(event) => {
            event.preventDefault();
            root.current?.focus({ preventScroll: true });
            setMenu({
              x: event.clientX,
              y: event.clientY,
              world: flow.screenToFlowPosition({
                x: event.clientX,
                y: event.clientY,
              }),
            });
          }}
          onMoveStart={(event) => {
            if (event) selectionPresentation.userNavigation();
          }}
          onMove={(_, view) => setZoom(view.zoom)}
          onMoveEnd={(_, viewport) => command({ type: "viewport", viewport })}
          minZoom={MIN_ZOOM}
          maxZoom={MAX_ZOOM}
          nodeDragThreshold={0}
          nodeClickDistance={4}
          selectionMode={SelectionMode.Partial}
          selectionOnDrag={!panning}
          panOnDrag={panning ? [0, 1, 2] : [1, 2]}
          panOnScroll
          zoomOnScroll={false}
          zoomOnPinch
          zoomActivationKeyCode={["Meta", "Control"]}
          panActivationKeyCode="Space"
          multiSelectionKeyCode={["Meta", "Control", "Shift"]}
          selectionKeyCode="Shift"
          deleteKeyCode={null}
          zoomOnDoubleClick={false}
          colorMode="dark"
          aria-label="无限创作画布"
        >
          {showDots && (
            <Background
              variant={BackgroundVariant.Dots}
              gap={18 * Math.max(1, 2 ** Math.ceil(Math.log2(0.65 / zoom)))}
              size={Math.max(1, 1 / zoom)}
              color="#55565d"
              bgColor="#0d0d0d"
            />
          )}
          <CanvasInteractionOverlay
            guides={guides}
            pending={pendingConnection}
          />
          {minimap && (
            <MiniMap
              pannable
              zoomable
              nodeColor={(n) => (n.type === "text" ? "#8b887f" : "#59656c")}
              maskColor="#080809bb"
              position="bottom-left"
              style={{ bottom: 66, left: 12 }}
            />
          )}
        </ReactFlow>
      </CanvasActionsContext.Provider>

      <header className="cw-topbar">
        <div className="cw-project-heading">
          <TooltipButton
            className="cw-brand"
            label="本地项目"
            tooltipSide="bottom"
            aria-label="本地项目"
            onClick={() => togglePanel("projects")}
          >
            ✦
          </TooltipButton>
          <button
            className="cw-project-title"
            onClick={() => setProjectMenu(!projectMenu)}
          >
            {doc.title}
            <CanvasIcon name="chevron" size={14} />
          </button>
          <span className="cw-save-status" title={saveStatus}>
            <i className={saveStatus === "已保存到本机" ? "saved" : ""} />
            {saveStatus}
          </span>
        </div>
        <div className="cw-top-actions">
          <IconButton
            name="search"
            label="搜索节点"
            tooltipSide="bottom"
            active={panel === "search"}
            onClick={() => togglePanel("search")}
          />
          <IconButton
            name="history"
            label="生成历史"
            tooltipSide="bottom"
            active={panel === "history"}
            onClick={() => togglePanel("history")}
          />
          <button
            className="cw-local-badge"
            title={
              backendCatalog.connected
                ? "本地服务已连接，点击管理模型接入"
                : `本地服务未连接：${backendCatalog.error}`
            }
            onClick={() => setModelSettings(true)}
          >
            {backendCatalog.connected
              ? `模型接入 · ${backendCatalog.models.length}`
              : "本地学习版"}
          </button>
          <button className="cw-export-button" onClick={exportDocument}>
            导出画布
          </button>
          <IconButton
            name="more"
            label="更多操作"
            tooltipSide="bottom"
            active={moreMenu}
            onClick={() => setMoreMenu(!moreMenu)}
          />
          <span className="cw-avatar">M</span>
        </div>
      </header>
      {projectMenu && (
        <div className="cw-project-menu cw-menu-popover">
          <button
            onClick={() => {
              setRename({ value: doc.title });
              setProjectMenu(false);
            }}
          >
            重命名项目
          </button>
          <button
            onClick={() => {
              void switchDocument(createDocument);
            }}
          >
            新建空白画布 <kbd>＋</kbd>
          </button>
          <button onClick={() => togglePanel("projects")}>打开本地项目</button>
          <hr />
          <button
            onClick={() => {
              jsonInput.current?.click();
              setProjectMenu(false);
            }}
          >
            导入画布 JSON
          </button>
          <button onClick={exportDocument}>导出画布 JSON</button>
          <hr />
          <button
            onClick={() => {
              void switchDocument(exampleDocument, true);
            }}
          >
            打开示例画布
          </button>
        </div>
      )}
      {moreMenu && (
        <div className="cw-more-menu cw-menu-popover">
          <button
            role="menuitemcheckbox"
            aria-checked={showDots}
            onClick={() => setShowDots(!showDots)}
          >
            背景点阵 <span>{showDots ? "✓" : ""}</span>
          </button>
          <button
            role="menuitemcheckbox"
            aria-checked={objectSnapping}
            onClick={() => {
              setObjectSnapping(!objectSnapping);
              clearGuides();
            }}
          >
            对齐吸附与辅助线 <span>{objectSnapping ? "✓" : ""}</span>
          </button>
          <button
            role="menuitemcheckbox"
            aria-checked={gridSnapping}
            onClick={() => setGridSnapping(!gridSnapping)}
          >
            吸附到网格 <span>{gridSnapping ? "✓" : ""}</span>
          </button>
          <small className="cw-snap-hint">
            拖动时按住 ⌘ / Ctrl 暂时取消吸附
          </small>
          <hr />
          <button
            onClick={() => {
              setHistory(undo);
              setMoreMenu(false);
            }}
          >
            撤销 <kbd>⌘ Z</kbd>
          </button>
          <button
            onClick={() => {
              setHistory(redo);
              setMoreMenu(false);
            }}
          >
            重做 <kbd>⌘ ⇧ Z</kbd>
          </button>
          <button
            onClick={() => {
              jsonInput.current?.click();
              setMoreMenu(false);
            }}
          >
            导入画布 JSON
          </button>
          <button
            onClick={() => {
              exportDocument();
              setMoreMenu(false);
            }}
          >
            导出画布 JSON
          </button>
          <hr />
          <button
            onClick={() => {
              setModelSettings(true);
              setMoreMenu(false);
            }}
          >
            模型接入
          </button>
          <button
            onClick={() => {
              void syncServiceResults(true);
              setMoreMenu(false);
            }}
          >
            同步本地服务结果
          </button>
          <button
            onClick={() => {
              setHelp(true);
              setMoreMenu(false);
            }}
          >
            快捷键与使用说明
          </button>
          <button
            onClick={() => {
              void switchDocument(exampleDocument, true);
              setMoreMenu(false);
            }}
          >
            打开示例画布
          </button>
        </div>
      )}

      <CanvasToolRail
        holdCollapsed={false}
        items={[
          {
            name: "text",
            label: "文本",
            actionLabel: "添加文本",
            shortcut: "T",
            onClick: () => addNode("text"),
          },
          {
            name: "image",
            label: "图片",
            actionLabel: "添加图片",
            onClick: () => addNode("image"),
          },
          {
            name: "video",
            label: "视频",
            actionLabel: "添加视频",
            onClick: () => addNode("video"),
          },
          {
            name: "audio",
            label: "音频",
            actionLabel: "添加音频",
            onClick: () => addNode("audio"),
          },
          {
            name: "timeline",
            label: "时间线",
            actionLabel: "添加时间线",
            onClick: () => addNode("timeline"),
          },
          {
            name: "subject",
            label: "主体",
            actionLabel: "添加主体",
            onClick: () => addNode("subject"),
          },
          {
            name: "tool",
            label: "导演参数",
            active: panel === "director",
            onClick: () => togglePanel("director"),
          },
          {
            name: "external",
            label: "导演台",
            actionLabel: "添加导演台",
            onClick: () => addNode("external"),
          },
          {
            name: "folder",
            label: "资产库",
            preserveCollapsedOnFocusRestore: true,
            separatorBefore: true,
            active: panel === "assets",
            onClick: () => togglePanel("assets"),
          },
          {
            name: "tag",
            label: "节点标签",
            active: panel === "tags",
            onClick: () => togglePanel("tags"),
          },
          {
            name: "upload",
            label: "上传",
            preserveCollapsedOnFocusRestore: true,
            actionLabel: "上传本地素材",
            shortcut: navigator.platform.includes("Mac")
              ? "Meta+O"
              : "Control+O",
            onClick: () => openFilePicker(),
          },
        ]}
      />
      {!doc.nodes.length && ready && (
        <div className="cw-empty">
          <div className="cw-aurora" />
          <div className="cw-empty-orb">✦</div>
          <h1>开启创作，即刻造梦</h1>
          <p>双击画布创建节点，或拖入你的素材</p>
          <div>
            <button onClick={() => addNode("image")}>
              <CanvasIcon name="plus" size={15} />
              图片节点
            </button>
            <button
              onClick={() => {
                void switchDocument(exampleDocument, true);
              }}
            >
              体验示例画布 <span>↗</span>
            </button>
          </div>
          <small>参考连接 · 自由编排 · 本机自动保存</small>
        </div>
      )}
      {!ready && <div className="cw-loading">正在打开画布…</div>}

      <div className="cw-bottom-controls">
        <IconButton
          name={hand ? "hand" : "pointer"}
          label={hand ? "切换到选择工具" : "切换到抓手工具"}
          shortcut={hand ? "V" : "H"}
          tooltipDelay={0}
          active={hand}
          onClick={() => setHand(!hand)}
        />
        <span className="cw-vline" />
        <IconButton
          name="map"
          label={minimap ? "隐藏小地图" : "显示小地图"}
          tooltipDelay={0}
          active={minimap}
          onClick={() => setMinimap(!minimap)}
        />
        <IconButton
          name="link"
          label={showEdges ? "隐藏连线" : "显示连线"}
          tooltipDelay={0}
          active={showEdges}
          onClick={() => setShowEdges(!showEdges)}
        />
        <TooltipButton
          className="cw-zoom-button"
          label="缩放选项"
          tooltipDelay={0}
          onClick={() => setZoomMenu(!zoomMenu)}
        >
          {Math.round(zoom * 100)}%<CanvasIcon name="chevron" size={11} />
        </TooltipButton>
      </div>
      <div className="cw-undo-controls">
        <IconButton
          name="undo"
          label="撤销"
          shortcut={navigator.platform.includes("Mac") ? "⌘ Z" : "Ctrl Z"}
          tooltipDelay={0}
          disabled={!history.past.length && !history.transaction}
          onClick={() => setHistory(undo)}
        />
        <IconButton
          name="redo"
          label="重做"
          shortcut={
            navigator.platform.includes("Mac") ? "⌘ ⇧ Z" : "Ctrl Shift Z"
          }
          tooltipDelay={0}
          disabled={!history.future.length}
          onClick={() => setHistory(redo)}
        />
      </div>
      {zoomMenu && (
        <div className="cw-zoom-menu cw-menu-popover">
          <div className="cw-zoom-row">
            <IconButton
              name="minus"
              label="缩小"
              onClick={() => {
                selectionPresentation.userNavigation();
                void flow.zoomOut();
              }}
            />
            <input
              aria-label="缩放百分比"
              type="number"
              min="8"
              max="800"
              value={Math.round(zoom * 100)}
              onChange={(e) => {
                const v = Number(e.target.value);
                if (v >= 8 && v <= 800) {
                  selectionPresentation.userNavigation();
                  void flow.zoomTo(v / 100);
                }
              }}
            />
            <span>%</span>
            <IconButton
              name="plus"
              label="放大"
              onClick={() => {
                selectionPresentation.userNavigation();
                void flow.zoomIn();
              }}
            />
          </div>
          <button
            onClick={() => {
              fit();
              setZoomMenu(false);
            }}
          >
            适应所有内容 <kbd>⇧ 1</kbd>
          </button>
          <button
            onClick={() => {
              fit(true);
              setZoomMenu(false);
            }}
          >
            适应选中内容 <kbd>⇧ 2</kbd>
          </button>
          {[0.5, 1, 2].map((z) => (
            <button
              key={z}
              onClick={() => {
                selectionPresentation.userNavigation();
                void flow.zoomTo(z);
                setZoomMenu(false);
              }}
            >
              {z * 100}%
            </button>
          ))}
        </div>
      )}
      <div className="cw-bottom-right">
        <IconButton
          name="help"
          label="使用帮助"
          shortcut="?"
          onClick={() => setHelp(true)}
        />
        <button
          className="cw-chat-button"
          onClick={() => togglePanel("assistant")}
        >
          <CanvasIcon name="star" size={18} />与 AI 对话
          <span className="cw-tiny-tag">
            {backendCatalog.models.some((model) => model.kind === "agent")
              ? "Agent"
              : "本地"}
          </span>
        </button>
      </div>
      {selected.length > 1 && !interacting && !panning && (
        <div className="cw-selection-bar">
          <span>已选 {selected.length} 个节点</span>
          <select
            aria-label="对齐所选节点"
            value=""
            onChange={(event) => {
              const alignment = event.target.value as Alignment;
              if (alignment)
                change((document) => ({
                  ...document,
                  nodes: alignNodes(document.nodes, selected, alignment),
                }));
            }}
          >
            <option value="" disabled>
              对齐 / 分布
            </option>
            <option value="left">左对齐</option>
            <option value="center">水平居中</option>
            <option value="right">右对齐</option>
            <option value="top">顶对齐</option>
            <option value="middle">垂直居中</option>
            <option value="bottom">底对齐</option>
            <option value="horizontal" disabled={selected.length < 3}>
              水平等间距
            </option>
            <option value="vertical" disabled={selected.length < 3}>
              垂直等间距
            </option>
          </select>
          <button onClick={group}>
            <CanvasIcon name="group" size={16} />
            编组
          </button>
          <button onClick={() => setPanel("tags")}>
            <CanvasIcon name="tag" size={16} />
            标签
          </button>
          <button onClick={stack}>
            <CanvasIcon name="stack" size={16} />
            堆叠
          </button>
          <button
            onClick={() =>
              change((d) => ({
                ...d,
                nodes: arrangeNodes(d.nodes, selected),
              }))
            }
          >
            自动排列
          </button>
          <IconButton
            name="copy"
            label="复制副本"
            onClick={() => paste(true)}
          />
          <IconButton name="trash" label="删除所选" onClick={removeSelected} />
        </div>
      )}
      {hasToolbar && single && (
        <div
          ref={toolbarElement}
          className="cw-node-toolbar-anchor"
          style={{
            ...selectionPresentation.placement?.toolbar,
            maxWidth: selectionPresentation.toolbarMaxWidth,
          }}
          data-interacting={
            interacting || panning || !selectionPresentation.visible
          }
          aria-hidden={interacting || panning || !selectionPresentation.visible}
          inert={interacting || panning || !selectionPresentation.visible}
        >
          <NodeSelectionToolbar
            node={single}
            locked={lockedIds.has(single.id)}
            style={{ maxWidth: selectionPresentation.toolbarMaxWidth }}
            onTool={openNodeAction}
            onCaptureFrame={(position) =>
              void runQuickAction(async (source, signal) => [
                await captureVideoEndpoint(
                  source.src!,
                  single.data.title,
                  position,
                  signal,
                ),
              ])
            }
            onGridSplit={(rows, columns) =>
              void runQuickAction((source, signal) =>
                gridSplitImage(source, rows, columns, signal),
              )
            }
            onEdit={(mode) => {
              if (single.type === "text") setTextEditingId(single.id);
              else if (single.type === "video") {
                if (mode === "extract-audio")
                  void runQuickAction(async (source, signal) => [
                    await extractVideoAudio(
                      source.src!,
                      single.data.title,
                      undefined,
                      signal,
                    ),
                  ]);
                else
                  openNodeAction(
                    mode === "frame" ? "video-frame-capture" : "video-trim",
                  );
              } else openEditor(single, mode);
            }}
            onPreview={() => setPreview(single)}
            onDownload={() => downloadNode(single)}
            onAssistant={() => togglePanel("assistant")}
            onDuplicate={() => paste(true)}
          />
        </div>
      )}
      {activeAction && actionNode && (
        <>
          <div
            ref={setActionMedia}
            className="cw-action-media-host"
            style={selectionPresentation.mediaRect ?? undefined}
            data-hidden={
              interacting || panning || !selectionPresentation.visible
            }
            onPointerDown={(event) => event.stopPropagation()}
            onClick={(event) => event.stopPropagation()}
            onDoubleClick={(event) => event.stopPropagation()}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                event.preventDefault();
                closeAction();
              }
              event.stopPropagation();
            }}
          />
          <div
            ref={composerElement}
            className="cw-composer-dock cw-node-action-dock"
            style={{
              ...selectionPresentation.placement?.composer,
              width: selectionPresentation.composerWidth,
              maxHeight: selectionPresentation.composerMaxHeight,
              background: "#1e2028",
              border: "1px solid #ffffff20",
            }}
            data-interacting={
              interacting || panning || !selectionPresentation.visible
            }
            inert={interacting || panning || !selectionPresentation.visible}
          >
            {isImageActionTool(activeAction.tool) ? (
              <ImageActionEditor
                key={activeAction.token}
                node={actionNode}
                tool={activeAction.tool}
                draft={actionNode.data.taskDraft}
                mediaContainer={actionMedia}
                onDraftChange={(task) => saveActionDraft(activeAction, task)}
                onImportResults={(task) =>
                  importActionResults(activeAction, task)
                }
                onApply={(outputs, task) =>
                  addLinkedOutputs(activeAction, outputs, task)
                }
                onClose={closeAction}
              />
            ) : actionNode.type === "video" ? (
              <VideoActionEditor
                key={activeAction.token}
                node={actionNode}
                tool={activeAction.tool}
                draft={actionNode.data.taskDraft}
                mediaContainer={actionMedia}
                onDraftChange={(task) => saveActionDraft(activeAction, task)}
                onImportResults={(task) =>
                  importActionResults(activeAction, task)
                }
                onApply={(outputs) => addLinkedOutputs(activeAction, outputs)}
                onClose={closeAction}
              />
            ) : (
              <NodeTaskPanel
                key={activeAction.token}
                node={actionNode}
                nodes={doc.nodes}
                tool={activeAction.tool}
                draft={actionNode.data.taskDraft}
                onDraftChange={(task) => saveActionDraft(activeAction, task)}
                onImportResults={(task) =>
                  importActionResults(activeAction, task)
                }
                onClose={closeAction}
                onEditSelection={() => {
                  setMaskTool(activeAction.tool);
                  openEditor(actionNode, "mask");
                }}
              />
            )}
          </div>
        </>
      )}
      {hasComposer && composerNode && (
        <div
          ref={composerElement}
          className="cw-composer-dock"
          style={{
            ...selectionPresentation.placement?.composer,
            width: selectionPresentation.composerWidth,
            maxHeight: selectionPresentation.composerMaxHeight,
          }}
          data-interacting={
            interacting || panning || !selectionPresentation.visible
          }
          aria-hidden={interacting || panning || !selectionPresentation.visible}
          inert={interacting || panning || !selectionPresentation.visible}
        >
          <TooltipButton
            className="cw-composer-dismiss"
            label="关闭生成面板"
            onClick={() => {
              setDismissedComposer(composerNode.id);
              root.current?.focus({ preventScroll: true });
            }}
          >
            <CanvasIcon name="close" size={14} />
          </TooltipButton>
          <NodeComposer
            selectedNode={composerNode}
            incomingNodes={composerIncoming}
            onUpdate={(patch) =>
              command({
                type: "update-node",
                id: composerNode.id,
                patch: { data: patch },
              })
            }
            onRun={() => prepareGeneration(composerNode.id)}
            onCancel={() => {
              setGenerationTarget(null);
              cancelServiceRuns(composerNode.id);
            }}
            onPickReference={() => {
              referenceTarget.current = composerNode.id;
              setPanel("assets");
            }}
            running={generationByNode.has(composerNode.id)}
            backendModels={backendCatalog.models}
          />
        </div>
      )}

      {menu &&
        contextItems(
          menu.nodeId ? (
            <>
              {menuButton("重命名", "text", () => actions.rename(menu.nodeId!))}
              {menuButton("复制", "copy", copy, "⌘ C")}
              {menuButton("剪切", "copy", cut, "⌘ X")}
              {menuButton("粘贴", "copy", () => paste(), "⌘ V")}
              {menuButton("复制副本", "copy", () => paste(true), "⌘ D")}
              <hr />
              {menuButton("编组", "group", group, "⌘ G")}
              {selected.length > 1 && menuButton("资源堆叠", "stack", stack)}
              {menuButton("取消编组", "group", ungroup, "⌘ ⇧ G")}
              {menuButton("自动排列", "map", () =>
                change((d) => ({
                  ...d,
                  nodes: arrangeNodes(d.nodes, selected),
                })),
              )}
              <hr />
              {menuButton(
                single && lockedIds.has(single.id) && !single.locked
                  ? "所属分组已锁定"
                  : single?.locked
                    ? "解锁"
                    : "锁定",
                "lock",
                () => {
                  if (single && lockedIds.has(single.id) && !single.locked) {
                    notify("请先选择并解锁所属分组。");
                    return;
                  }
                  command({
                    type: "batch",
                    commands: selected.map((id) => ({
                      type: "update-node",
                      id,
                      patch: {
                        locked: !doc.nodes.find((n) => n.id === id)?.locked,
                      },
                    })),
                  });
                },
              )}
              {menuButton("设置标签", "tag", () => setPanel("tags"))}
              {single?.type === "stack" &&
                menuButton("解散堆叠", "stack", () =>
                  change((d) => unstackSelection(d, selected)),
                )}
              {menuButton("移到顶层", "arrow", () =>
                command({
                  type: "reorder-nodes",
                  ids: selected,
                  direction: "front",
                }),
              )}
              {menuButton(
                "上移一层",
                "arrow",
                () =>
                  command({
                    type: "reorder-nodes",
                    ids: selected,
                    direction: "forward",
                  }),
                "⌘ ]",
              )}
              {menuButton(
                "下移一层",
                "arrow",
                () =>
                  command({
                    type: "reorder-nodes",
                    ids: selected,
                    direction: "backward",
                  }),
                "⌘ [",
              )}
              {menuButton(
                "移到底层",
                "arrow",
                () =>
                  command({
                    type: "reorder-nodes",
                    ids: selected,
                    direction: "back",
                  }),
                "⌘ ⇧ [",
              )}
              {single &&
                ["image", "video", "audio", "file"].includes(single.type) &&
                !lockedIds.has(single.id) &&
                menuButton(
                  single.data.src ? "替换素材" : "上传素材",
                  "upload",
                  () => openFilePicker(single.id),
                )}
              {single?.data.src &&
                menuButton("下载素材", "download", () => downloadNode(single))}
              {single?.type === "image" &&
                single.data.src &&
                menuButton("编辑图片", "crop", () => openEditor(single))}
              {single &&
                ["timeline", "subject", "stack", "tool", "external"].includes(
                  single.type,
                ) &&
                menuButton("打开编辑器", single.type, () => openEditor(single))}
              {single?.data.src &&
                ["image", "video", "audio"].includes(single.type) &&
                menuButton("编辑素材", "tool", () =>
                  openNodeAction(
                    single.data.taskDraft?.tool ??
                      (single.type === "image"
                        ? "smart-edit"
                        : single.type === "video"
                          ? "video-trim"
                          : "audio-trim"),
                  ),
                )}
              <hr />
              {menuButton("删除", "trash", removeSelected, "⌫")}
            </>
          ) : (
            <>
              <div className="cw-menu-caption">
                {menu.connected ? "创建参考关联节点" : "添加节点"}
              </div>
              {(menu.connected
                ? connectedCreationKinds(
                    doc,
                    menu.connected.id,
                    menu.connected.direction,
                    kinds,
                  )
                : kinds
              ).map((kind) => (
                <div key={kind}>
                  {menuButton(labels[kind], kind, () =>
                    addNode(kind, menu.world),
                  )}
                </div>
              ))}
              {!menu.connected && (
                <>
                  <hr />
                  {menuButton("上传素材", "upload", () => openFilePicker())}
                  {menuButton("粘贴", "copy", () => paste(), "⌘ V")}
                </>
              )}
            </>
          ),
        )}

      {panel && (
        <aside
          className={`cw-side-panel ${panel === "assets" || panel === "director" ? "from-left" : ""}`}
          aria-label={
            {
              assets: "资产库",
              search: "搜索节点",
              tags: "节点标签",
              history: "生成历史",
              assistant: "AI 对话",
              projects: "本地项目",
              director: "导演参数",
            }[panel]
          }
        >
          <div className="cw-panel-heading">
            <h2>
              {
                {
                  assets: "资产库",
                  search: "搜索节点",
                  tags: "节点标签",
                  history: "生成历史",
                  assistant: "与 AI 对话",
                  projects: "本地项目",
                  director: "导演参数",
                }[panel]
              }
            </h2>
            <IconButton
              name="close"
              label="关闭侧栏"
              onClick={() => {
                setPanel(null);
                referenceTarget.current = null;
              }}
            />
          </div>
          {panel === "tags" && (
            <CanvasTagsPanel
              nodes={doc.nodes}
              selectedIds={selected}
              activeTag={activeTag}
              onActiveTagChange={setActiveTag}
              onChange={(tag, enabled) =>
                change((d) => setNodeTag(d, selected, tag, enabled))
              }
              onClear={() =>
                change((d) =>
                  CANVAS_TAGS.reduce(
                    (next, tag) => setNodeTag(next, selected, tag.id, false),
                    d,
                  ),
                )
              }
              onLocate={(id) => {
                const node = doc.nodes.find((n) => n.id === id);
                if (node) selectAndFocus(node);
              }}
            />
          )}
          {panel === "search" && (
            <CanvasSearchPanel nodes={doc.nodes} onSelect={selectAndFocus} />
          )}
          {panel === "assets" && (
            <>
              <p className="cw-panel-note">
                {referenceTarget.current
                  ? "选择素材作为参考，或上传本地文件。"
                  : "素材保存在当前浏览器，可拖入图片、视频、音频。"}
              </p>
              <button
                className="cw-wide-button"
                onClick={() => openFilePicker()}
              >
                <CanvasIcon name="upload" />
                上传本地素材
              </button>
              <h3>画布素材</h3>
              <div className="cw-asset-grid">
                {doc.nodes
                  .filter((n) => n.data.src)
                  .map((n) => (
                    <button
                      key={n.id}
                      onClick={() => {
                        if (
                          referenceTarget.current &&
                          referenceTarget.current !== n.id &&
                          doc.nodes.some(
                            (item) => item.id === referenceTarget.current,
                          )
                        ) {
                          const linked = referenceEdges(
                            [n.id],
                            referenceTarget.current,
                          );
                          if (linked.issue) {
                            notify(linked.issue);
                            return;
                          }
                          command({ type: "batch", commands: linked.commands });
                          referenceTarget.current = null;
                          setPanel(null);
                        } else selectAndFocus(n);
                      }}
                    >
                      {n.type === "image" ? (
                        <img src={n.data.src} alt={n.data.title} />
                      ) : (
                        <CanvasIcon name={n.type} size={34} />
                      )}
                      <span>{n.data.title}</span>
                    </button>
                  ))}
              </div>
              <ProjectAssetLibrary
                key={doc.id}
                currentId={doc.id}
                onImport={(resource) => {
                  const target = referenceTarget.current;
                  const where = center();
                  const node = createNode(
                    resource.kind,
                    { x: where.x - 160, y: where.y - 140 },
                    resourceNodeData(resource),
                  );
                  const linked =
                    target && doc.nodes.some((item) => item.id === target)
                      ? referenceEdges([node.id], target, [node])
                      : { commands: [], issue: "" };
                  command({
                    type: "batch",
                    commands: [
                      { type: "add-nodes", nodes: [node] },
                      ...linked.commands,
                    ],
                  });
                  setSelected([node.id]);
                  referenceTarget.current = null;
                  setPanel(null);
                  notify(`素材已复制到当前画布，可独立编辑。${linked.issue}`);
                }}
              />
              <h3>原创示例素材</h3>
              <div className="cw-asset-grid">
                {["青山", "暮色", "远湖"].map((title, i) => (
                  <button
                    key={title}
                    onClick={() => {
                      const target = referenceTarget.current;
                      const n = addNode("image", undefined, {
                        title,
                        mediaRole: "asset",
                        src: studyImage(i, title),
                        assetState: "ready",
                        mimeType: "image/svg+xml",
                      });
                      if (
                        n &&
                        target &&
                        doc.nodes.some((item) => item.id === target)
                      ) {
                        const linked = referenceEdges([n.id], target, [n]);
                        if (linked.issue) notify(linked.issue);
                        else
                          command({
                            type: "batch",
                            commands: linked.commands,
                          });
                        setSelected([target]);
                        referenceTarget.current = null;
                      }
                    }}
                  >
                    <img src={studyImage(i, title)} alt={title} />
                    <span>{title}</span>
                  </button>
                ))}
              </div>
              <small className="cw-panel-note">
                示例为本工程绘制的矢量插画。
              </small>
            </>
          )}
          {panel === "projects" && (
            <ProjectManagerPanel
              currentId={doc.id}
              onCreate={() => {
                void switchDocument(createDocument);
              }}
              onOpen={async (id) => {
                if (id === doc.id) {
                  setPanel(null);
                  return;
                }
                await switchDocument(async () => {
                  const result = await loadDocument(id);
                  if (!result.ok || !result.value)
                    throw new Error(
                      result.ok ? "项目不存在" : result.error.message,
                    );
                  return result.value;
                });
              }}
              onDuplicate={async (id) => {
                if (!(await persist(historyRef.current.present)))
                  throw new Error("当前画布未保存，复制未执行。");
                const loaded = await loadDocument(id);
                if (!loaded.ok || !loaded.value)
                  throw new Error(
                    loaded.ok ? "项目不存在" : loaded.error.message,
                  );
                const copy = duplicateCanvasDocument(loaded.value);
                const saved = await saveDocument(copy);
                if (!saved.ok) throw new Error(saved.error.message);
                notify("已创建独立副本，原项目保持不变。");
              }}
              onTrash={async (id) => {
                if (
                  id === historyRef.current.present.id &&
                  !(await switchDocument(createDocument))
                )
                  throw new Error("当前画布未能保存，未移入回收站。");
                const result = await trashDocument(id);
                if (!result.ok) throw new Error(result.error.message);
                notify("项目已移入本机回收站，可随时恢复。");
              }}
              onRestore={async (id) => {
                const result = await restoreDocument(id);
                if (!result.ok) throw new Error(result.error.message);
                notify("项目已恢复。");
              }}
            />
          )}
          {panel === "history" && (
            <GenerationHistoryPanel
              key={doc.id}
              jobs={jobs}
              onSync={
                backendCatalog.connected
                  ? () => void syncServiceResults(true)
                  : undefined
              }
              onLocate={(id) => {
                const node = doc.nodes.find((n) => n.id === id);
                if (node) selectAndFocus(node);
                else
                  notify(
                    "来源节点已删除，可以从历史重新放置结果或恢复请求节点。",
                  );
              }}
              onRestore={(entries, requests = false) => {
                if (requests) {
                  const origin = center();
                  const nodes = entries.flatMap((job, index) =>
                    job.request
                      ? [
                          createNode(
                            job.request.kind,
                            { x: origin.x + index * 360, y: origin.y },
                            {
                              title: job.request.title,
                              prompt: job.request.prompt,
                              settings: {
                                ...job.request.settings,
                                firstFrameNodeId: undefined,
                                lastFrameNodeId: undefined,
                              },
                            },
                          ),
                        ]
                      : [],
                  );
                  if (nodes.length) {
                    command({ type: "add-nodes", nodes });
                    setSelected(nodes.map((node) => node.id));
                    notify("请求节点已恢复；请重新选择需要的参考素材。");
                  }
                } else {
                  const outputs = entries.flatMap((job) => job.outputs ?? []);
                  if (!outputs.length) return;
                  const next = appendServiceResults(
                    historyRef.current.present,
                    outputs,
                  );
                  change(() => next.document);
                  // A re-placed service result must not be synced again.
                  for (const job of entries)
                    if (job.taskId && job.outputs?.length)
                      markHandled(backendProjectId(doc.id), job.taskId);
                  setSelected(next.ids);
                  revealResults(next.ids);
                  notify(
                    `已从历史重新放置 ${next.ids.length} 个结果，可撤销。`,
                  );
                }
              }}
            />
          )}
          {panel === "director" && (
            <div className="cw-director-parameters">
              <p>添加参数节点，连接到图片或视频作为创作参考。</p>
              {(
                [
                  ["camera", "相机参数"],
                  ["palette", "配色"],
                  ["style", "风格"],
                  ["camera_motion", "运镜"],
                ] as const
              ).map(([kind, title]) => (
                <button
                  key={kind}
                  onClick={() => {
                    addNode("tool", undefined, {
                      title,
                      tool: { kind, fields: [] },
                    });
                    setPanel(null);
                  }}
                >
                  {title}
                  <CanvasIcon name="plus" size={16} />
                </button>
              ))}
            </div>
          )}
          {panel === "assistant" && backendCatalog.connected && (
            <AssistantPanel
              key={doc.id}
              documentId={doc.id}
              documentTitle={doc.title}
              catalog={backendCatalog}
              selectedNodes={doc.nodes.filter((node) =>
                selected.includes(node.id),
              )}
              onTurnEnd={() => void followServiceTasks()}
              onOpenSettings={() => setModelSettings(true)}
            />
          )}
          {panel === "assistant" && !backendCatalog.connected && (
            <>
              <div className="cw-assistant-intro">
                <span>✦</span>
                <h3>从想法开始，串联你的创作</h3>
                <p>
                  本地编排助手会把每一行描述转为一个图片节点，并连接为参考链。用
                  scripts/museshow.py 启动本地服务并接入对话模型后，可与 AI
                  助手对话并生成素材。
                </p>
              </div>
              <div className="cw-chat-log">
                {chatLog.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <form
                className="cw-chat-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  const prompts = chat
                    .split("\n")
                    .map((s) => s.trim())
                    .filter(Boolean);
                  if (!prompts.length) return;
                  const p = center();
                  const nodes = prompts.map((prompt, i) =>
                    createNode(
                      "image",
                      { x: p.x + i * 440, y: p.y },
                      { title: `画面 ${i + 1}`, prompt },
                    ),
                  );
                  command({
                    type: "batch",
                    commands: [
                      { type: "add-nodes", nodes },
                      ...nodes.slice(1).map(
                        (n, i): CanvasCommand => ({
                          type: "add-edge",
                          edge: {
                            id: crypto.randomUUID(),
                            source: nodes[i]!.id,
                            target: n.id,
                          },
                        }),
                      ),
                    ],
                  });
                  setChatLog((log) => [
                    ...log,
                    chat,
                    `已创建 ${nodes.length} 个可编辑节点，连线表示参考关系。`,
                  ]);
                  setChat("");
                  selectionPresentation.userNavigation();
                  setSelected([]);
                  requestAnimationFrame(
                    () =>
                      void flow.fitView({
                        padding: 0.3,
                        maxZoom: 1,
                        duration: 200,
                      }),
                  );
                }}
              >
                <textarea
                  placeholder={"描述你的画面，每行一个镜头…"}
                  aria-label="编排描述"
                  value={chat}
                  onChange={(e) => setChat(e.target.value)}
                />
                <button type="submit" disabled={!chat.trim()}>
                  添加到画布 <CanvasIcon name="arrow" size={16} />
                </button>
              </form>
            </>
          )}
        </aside>
      )}

      <input
        ref={fileInput}
        className="sr-only"
        type="file"
        multiple
        aria-label="选择本地素材文件"
        onChange={(e) => {
          if (e.target.files?.length) void importFiles([...e.target.files]);
          e.target.value = "";
        }}
      />
      <input
        ref={resultInput}
        className="sr-only"
        type="file"
        multiple
        aria-label="导入真实生成结果"
        onChange={(event) => {
          if (event.target.files?.length)
            void importGenerationResults([...event.target.files]);
          event.target.value = "";
        }}
      />
      <input
        ref={jsonInput}
        className="sr-only"
        type="file"
        accept=".json,application/json"
        aria-label="导入画布文件"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f)
            void switchDocument(async () => {
              const r = parseDocument(await f.text());
              if (!r.ok) throw new Error(r.error.message);
              return { ...r.value, id: crypto.randomUUID() };
            }, true);
          e.target.value = "";
        }}
      />
      {toast && (
        <div className="cw-toast" role="status">
          <CanvasIcon name="check" size={16} />
          {toast}
        </div>
      )}
      {rename && (
        <div className="cw-modal-backdrop" onClick={() => setRename(null)}>
          <form
            className="cw-modal cw-rename"
            onClick={(e) => e.stopPropagation()}
            onSubmit={(e) => {
              e.preventDefault();
              if (!rename.value.trim()) return;
              command(
                rename.id
                  ? {
                      type: "update-node",
                      id: rename.id,
                      patch: { data: { title: rename.value.trim() } },
                    }
                  : { type: "title", title: rename.value.trim() },
              );
              setRename(null);
            }}
          >
            <h2>重命名{rename.id ? "节点" : "项目"}</h2>
            <input
              autoFocus
              aria-label="新名称"
              value={rename.value}
              onChange={(e) => setRename({ ...rename, value: e.target.value })}
            />
            <div>
              <button type="button" onClick={() => setRename(null)}>
                取消
              </button>
              <button className="cw-light-button" type="submit">
                保存
              </button>
            </div>
          </form>
        </div>
      )}
      {preview && (
        <div
          className="cw-modal-backdrop cw-preview"
          role="dialog"
          aria-label="素材全屏预览"
          onClick={() => setPreview(null)}
        >
          <header>
            <span>{preview.data.title}</span>
            <IconButton
              name="download"
              label="下载预览素材"
              onClick={() => downloadNode(preview)}
            />
            <IconButton
              name="close"
              label="关闭全屏"
              onClick={() => setPreview(null)}
            />
          </header>
          <div onClick={(e) => e.stopPropagation()}>
            {preview.type === "image" && preview.data.src ? (
              <img src={preview.data.src} alt={preview.data.title} />
            ) : preview.type === "video" && preview.data.src ? (
              <video src={preview.data.src} controls />
            ) : preview.type === "audio" && preview.data.src ? (
              <audio src={preview.data.src} controls />
            ) : (
              <p>
                {preview.data.text ||
                  (preview.data.src
                    ? "此文件可通过右上角下载按钮保存查看。"
                    : "这个节点还没有素材，先上传本地文件。")}
              </p>
            )}
          </div>
        </div>
      )}
      {editing && editorMode === "default" && editing.type === "timeline" && (
        <TimelineEditor
          node={editing}
          resources={resources}
          onApply={(timeline) => applyEditorData({ timeline })}
          onRender={(result) => editorOutputs([result])}
          onClose={closeEditor}
        />
      )}
      {editing && editorMode === "default" && editing.type === "subject" && (
        <SubjectEditor
          node={editing}
          resources={resources}
          onApply={(subject) => applyEditorData({ subject })}
          onClose={closeEditor}
        />
      )}
      {editing && editorMode === "default" && editing.type === "stack" && (
        <StackEditor
          node={editing}
          nodes={doc.nodes}
          onApply={(stack) => {
            const origin = editorOrigin.current,
              current = historyRef.current.present;
            const target = current.nodes.find(
              (node) => node.id === origin?.nodeId,
            );
            if (
              !origin ||
              current.id !== origin.documentId ||
              !target ||
              target.type !== origin.kind ||
              lockedNodeIds(current.nodes).has(target.id)
            ) {
              notify("编辑来源已改变，堆叠未应用。");
              return;
            }
            try {
              const next = updateStack(current, target.id, stack);
              change(() => next);
            } catch (error) {
              notify(error instanceof Error ? error.message : "堆叠更新失败。");
            }
          }}
          onClose={closeEditor}
          onSelectNode={(id) => {
            const node = doc.nodes.find((node) => node.id === id);
            if (node) selectAndFocus(node);
          }}
        />
      )}
      {editing && editorMode === "default" && editing.type === "tool" && (
        <ToolEditor
          node={editing}
          onApply={(tool) => applyEditorData({ tool })}
          onClose={closeEditor}
        />
      )}
      {editing && editorMode === "default" && editing.type === "external" && (
        <Suspense
          fallback={
            <EditorModal
              title="正在打开导演台"
              subtitle="加载本地 3D 编辑器"
              onClose={closeEditor}
            >
              <p>正在加载…</p>
            </EditorModal>
          }
        >
          <DirectorStage
            onRender={(result) => editorOutputs([result])}
            node={editing}
            onApply={(localStage, screenshot) =>
              applyEditorData({
                localStage,
                ...(screenshot
                  ? {
                      src: screenshot,
                      mimeType: "image/png",
                      assetState: "ready",
                      media: undefined,
                    }
                  : {}),
              })
            }
            onClose={closeEditor}
          />
        </Suspense>
      )}
      {editing &&
        editing.type === "image" &&
        ["default", "layers"].includes(editorMode) && (
          <ImageEditor
            node={editing}
            initialTab={editorMode === "layers" ? "layers" : "crop"}
            initialLayers={editing.data.layers}
            onClose={closeEditor}
            onApply={(src, layers) => {
              applyEditorData({
                src,
                mimeType: "image/png",
                assetState: "ready",
                layers,
                media: layers
                  ? { width: layers.width, height: layers.height }
                  : undefined,
                taskDraft: undefined,
              });
              closeEditor();
            }}
          />
        )}
      {editing &&
        editing.type === "image" &&
        ["annotation", "grid", "mask"].includes(editorMode) && (
          <LocalImageTools
            node={editing}
            mode={editorMode as "annotation" | "grid" | "mask"}
            onClose={closeEditor}
            onApply={(outputs) =>
              editorOutputs(
                outputs.map((output) => ({
                  kind: "image",
                  src: output.src,
                  mimeType: output.mimeType,
                  title: output.title,
                  media: { width: output.width, height: output.height },
                })),
              )
            }
            onSelection={(selection) => {
              const origin = editorOrigin.current;
              if (!origin) return;
              const current = validateNodeActionSource(
                historyRef.current.present,
                origin,
              );
              if (!current.node) {
                notify(current.error);
                return;
              }
              const spec = CANVAS_TOOLS.find((tool) => tool.id === maskTool)!;
              // The panel saved its latest parameters before opening this editor;
              // editing is an older image snapshot and does not own that draft.
              const previous =
                current.node.data.taskDraft?.tool === maskTool
                  ? current.node.data.taskDraft
                  : undefined;
              const draft =
                previous ??
                createCanvasToolTask(
                  maskTool,
                  [origin.nodeId],
                  initialToolParameters(spec),
                );
              saveActionDraft(origin, { ...draft, selection });
              setActionSession({
                ...origin,
                tool: maskTool,
                token: crypto.randomUUID(),
              });
              focusSelection(origin.nodeId);
            }}
          />
        )}
      {editing &&
        ["video", "audio"].includes(editing.type) &&
        ["trim", "frame", "extract-audio", "crop"].includes(editorMode) && (
          <LocalMediaEditor
            node={editing}
            mode={editorMode as "trim" | "frame" | "extract-audio" | "crop"}
            onApply={(output) => editorOutputs([output])}
            onClose={closeEditor}
          />
        )}
      {modelSettings && (
        <ModelSettingsDialog
          catalog={backendCatalog}
          onClose={() => setModelSettings(false)}
        />
      )}
      {generationNode && generationSettings && generationDraft && (
        <EditorModal
          title={`本地任务 · ${generationNode.data.title}`}
          subtitle="真实生成服务尚未接入。这里仅保留创作参数；不会调用模型，也不会扣除积分。"
          onClose={closeGeneration}
          className="cw-generation-dialog"
          actions={
            <>
              <button onClick={exportGenerationDraft}>导出任务草稿</button>
              <a href={ORIGINAL_CANVAS_URL} target="_blank" rel="noreferrer">
                在原站生成 ↗
              </a>
            </>
          }
        >
          <div className="cw-generation-summary">
            <span>待提交 · 本地草稿</span>
            <strong>{generationSettings.model}</strong>
            <small>
              {generationSettings.aspectRatio} · {generationSettings.resolution}{" "}
              · {generationDraft.references.length} 个参考
            </small>
          </div>
          <label className="cw-generation-prompt">
            提示词
            <textarea
              readOnly
              value={generationNode.data.prompt}
              aria-label="任务提示词"
            />
          </label>
          <div className="cw-generation-references">
            {generationDraft.references.map((reference) => (
              <div key={reference.nodeId}>
                <CanvasIcon name={reference.kind} size={17} />
                <span>{reference.title}</span>
                <small>
                  {
                    {
                      reference: "参考",
                      firstFrame: "首帧",
                      lastFrame: "尾帧",
                      tool: "工具参数",
                    }[reference.role]
                  }
                </small>
              </div>
            ))}
          </div>
          <div className="cw-generation-import">
            <h3>导入实际生成结果</h3>
            <p>
              在原站完成生成并下载后，选择实际媒体文件。首个结果会更新到本次任务节点，可撤销；多份结果保留为额外节点。
            </p>
            <button onClick={pickGenerationResults} disabled={resultBusy}>
              {resultBusy
                ? "正在读取结果…"
                : `导入${labels[generationNode.type]}结果`}
            </button>
          </div>
        </EditorModal>
      )}
      {help && (
        <div className="cw-modal-backdrop" onClick={() => setHelp(false)}>
          <section
            className="cw-modal cw-help"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="画布使用说明"
          >
            <div className="cw-panel-heading">
              <h2>在画布上，自由创作</h2>
              <IconButton
                name="close"
                label="关闭说明"
                onClick={() => setHelp(false)}
              />
            </div>
            <p>
              拖动节点排列画面，从节点右侧圆点拖到另一个节点左侧即可建立参考连线。点击圆点旁的按钮可创建关联节点。
            </p>
            <dl>
              {[
                ["平移画布", "滚动 / 空格＋拖动"],
                ["缩放画布", "⌘ / Ctrl＋滚动"],
                ["框选多个节点", "空白处拖动 / Shift"],
                ["选择 / 抓手 / 文本", "V / H / T"],
                ["上传本地素材", "⌘ / Ctrl＋O"],
                ["撤销 / 重做", "⌘ Z / ⌘ ⇧ Z"],
                ["复制 / 粘贴 / 副本", "⌘ C / ⌘ V / ⌘ D"],
                ["编组 / 取消编组", "⌘ G / ⌘ ⇧ G"],
                ["适应内容 / 选区", "Shift 1 / Shift 2"],
                ["移动 / 快速移动", "方向键 / Shift＋方向键"],
                ["删除选中节点或连线", "Delete / Backspace"],
              ].map(([name, key]) => (
                <div key={name}>
                  <dt>{name}</dt>
                  <dd>{key}</dd>
                </div>
              ))}
            </dl>
            <p className="cw-panel-note">
              媒体与项目存储在当前浏览器的 IndexedDB。导出 JSON
              可备份或迁移。图像裁剪与调色在本机实际执行；AI
              生成和助手通过本地服务调用“模型接入”中的模型，云分享和云端资产尚未接入。
            </p>
          </section>
        </div>
      )}
    </div>
  );
  return (
    <>
      {workspace}
      {(!ready || switching) && (
        <div className="canvas-loading-screen" role="status">
          {switching ? "正在切换画布…" : "正在打开画布…"}
        </div>
      )}
    </>
  );
}
