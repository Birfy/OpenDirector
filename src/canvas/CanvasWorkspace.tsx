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
  type Node,
  type Edge,
  type NodeChange,
  type Connection,
} from "@xyflow/react";
import { CanvasNodeView, CanvasActionsContext } from "./CanvasNodeView";
import { NodeComposer, getNodeGenerationSettings } from "./NodeComposer";
import { CanvasIcon } from "./CanvasIcon";
import { ImageEditor } from "./ImageEditor";
import { TimelineEditor } from "./TimelineEditor";
import { SubjectEditor } from "./SubjectEditor";
import { StackEditor } from "./StackEditor";
import { ToolEditor } from "./ToolEditor";
import { CanvasToolsPanel } from "./CanvasToolsPanel";
import { EditorModal } from "./EditorModal";
import { LocalImageTools } from "./LocalImageTools";
import { LocalMediaEditor } from "./LocalMediaEditor";
const DirectorStage = lazy(() =>
  import("./DirectorStage").then((module) => ({
    default: module.DirectorStage,
  })),
);
import { readEditorResource } from "./editorMedia";
import {
  appendLinkedMediaResults,
  type LinkedMediaResult,
  type ResultSource,
} from "./linkedResults";
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
  undo,
  redo,
  type CanvasHistory,
} from "./history";
import { absolutePosition, arrangeNodes, boundsOfNodes } from "./geometry";
import {
  saveDocument,
  loadDocument,
  listDocuments,
  parseDocument,
  serializeDocument,
  type DocumentSummary,
} from "./storage";
import {
  copySelection,
  orderNodesForCanvas,
  pasteFragment,
  groupSelection,
  ungroupSelection,
  stackSelection,
  updateStack,
  resourceFromNode,
  type CanvasFragment,
} from "./operations";
import { downloadFile, downloadFilename, exampleDocument, studyImage } from "./assets";
import "@xyflow/react/dist/style.css";
import "./workspace.css";

type FlowNode = Node<CanvasNodeData, CanvasNodeKind>;
type Panel =
  | "assets"
  | "search"
  | "history"
  | "assistant"
  | "projects"
  | "tools"
  | null;
type Menu = {
  x: number;
  y: number;
  world: Point;
  nodeId?: string;
  connected?: { id: string; direction: "source" | "target" };
};
type Job = {
  id: string;
  nodeId: string;
  title: string;
  status: "draft" | "imported";
  time: string;
};
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
  | "extract-audio";
const lastKey = "museshow-last-canvas";

function IconButton({
  name,
  label,
  onClick,
  active,
  disabled,
}: {
  name: string;
  label: string;
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
}) {
  return (
    <button
      className={`cw-icon-button ${active ? "is-active" : ""}`}
      aria-label={label}
      title={label}
      aria-pressed={active}
      onClick={onClick}
      disabled={disabled}
    >
      <CanvasIcon name={name} />
    </button>
  );
}

export default function CanvasWorkspace({ onExit }: { onExit: () => void }) {
  return (
    <ReactFlowProvider>
      <Workspace onExit={onExit} />
    </ReactFlowProvider>
  );
}

function Workspace({ onExit }: { onExit: () => void }) {
  const flow = useReactFlow<FlowNode, Edge>();
  const [history, setHistory] = useState<CanvasHistory>(() =>
    createHistory(createDocument()),
  );
  const historyRef = useRef(history);
  historyRef.current = history;
  const doc = history.present;
  const [ready, setReady] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [selectedEdges, setSelectedEdges] = useState<string[]>([]);
  const selectedRef = useRef(selected);
  selectedRef.current = selected;
  const [panel, setPanel] = useState<Panel>(null);
  const [projectMenu, setProjectMenu] = useState(false);
  const [moreMenu, setMoreMenu] = useState(false);
  const [zoomMenu, setZoomMenu] = useState(false);
  const [hand, setHand] = useState(false);
  const [minimap, setMinimap] = useState(false);
  const [showEdges, setShowEdges] = useState(true);
  const [menu, setMenu] = useState<Menu | null>(null);
  const [saveStatus, setSaveStatus] = useState("正在打开…");
  const [toast, setToast] = useState("");
  const [search, setSearch] = useState("");
  const [projects, setProjects] = useState<DocumentSummary[]>([]);
  const [preview, setPreview] = useState<CanvasNode | null>(null);
  const [editing, setEditing] = useState<CanvasNode | null>(null);
  const [editorMode, setEditorMode] = useState<EditorMode>("default");
  const editorOrigin = useRef<ResultSource | null>(null);
  const [toolInitial, setToolInitial] = useState<CanvasToolId>("layers");
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
        jobId?: string;
      })
    | null
  >(null);
  const importAbort = useRef<AbortController | null>(null);
  const [rename, setRename] = useState<{ id?: string; value: string } | null>(
    null,
  );
  const [help, setHelp] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [chat, setChat] = useState("");
  const [chatLog, setChatLog] = useState<string[]>([]);
  const clipboard = useRef<CanvasFragment | null>(null);
  const pasteCount = useRef(0);
  const fileInput = useRef<HTMLInputElement>(null);
  const jsonInput = useRef<HTMLInputElement>(null);
  const uploadTarget = useRef<string | null>(null);
  const referenceTarget = useRef<string | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const saveQueue = useRef(Promise.resolve(true));
  const [zoom, setZoom] = useState(1);
  const single =
    selected.length === 1
      ? (doc.nodes.find((n) => n.id === selected[0]) ?? null)
      : null;
  const selectedOwner = doc.nodes.find((node) => node.id === selected[0]);
  const incoming = useMemo(
    () =>
      doc.nodes.filter((n) =>
        doc.edges.some((e) => e.target === single?.id && e.source === n.id),
      ),
    [doc.nodes, doc.edges, single?.id],
  );
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
      setPreview(null);
      editorOrigin.current = null;
      referenceTarget.current = null;
      uploadTarget.current = null;
      setJobs([]);
      setHistory(createHistory(next));
      setSelected([]);
      setSelectedEdges([]);
      setPanel(null);
      setMenu(null);
      setProjectMenu(false);
      window.history.replaceState({}, "", `/ai-tool/ai-canvas/${next.id}`);
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

  useEffect(() => {
    let alive = true;
    const init = async () => {
      const urlId = window.location.pathname.split("/ai-canvas/")[1];
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
    setSelected((ids) => {
      const existing = ids.filter((id) => nodeIds.has(id));
      return existing.length === ids.length ? ids : existing;
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
    if (panel === "projects")
      void listDocuments().then((result) =>
        result.ok ? setProjects(result.value) : notify(result.error.message),
      );
  }, [panel, doc.id, notify]);
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
    const where = position ?? center();
    const count = doc.nodes.filter((n) => n.type === kind).length + 1;
    const node = createNode(
      kind,
      { x: where.x - 160, y: where.y - 140 },
      { title: `${labels[kind]} ${count}`, ...extra },
    );
    if (kind === "image") {
      node.width = 320;
      node.height = 320;
    }
    if (kind === "video") {
      node.width = 360;
      node.height = 240;
    }
    if (kind === "text") node.height = 220;
    if (kind === "timeline") node.width = 720;
    if (menu?.connected) {
      const original = doc.nodes.find((n) => n.id === menu.connected!.id);
      if (original) {
        const abs = absolutePosition(original, doc.nodes);
        node.position = {
          x:
            abs.x +
            (menu.connected.direction === "source"
              ? original.width + 160
              : -node.width - 160),
          y: abs.y,
        };
      }
    }
    const commands: CanvasCommand[] = [{ type: "add-nodes", nodes: [node] }];
    if (menu?.connected)
      commands.push({
        type: "add-edge",
        edge: {
          id: crypto.randomUUID(),
          source:
            menu.connected.direction === "source" ? menu.connected.id : node.id,
          target:
            menu.connected.direction === "source" ? node.id : menu.connected.id,
        },
      });
    command({ type: "batch", commands });
    setSelected([node.id]);
    referenceTarget.current = null;
    setMenu(null);
    setPanel(null);
    return node;
  };
  const fit = (selection = false) => {
    const ids = selection ? selected : doc.nodes.map((n) => n.id);
    void flow.fitView({
      nodes: ids.map((id) => ({ id })),
      padding: 0.28,
      maxZoom: 1.5,
      duration: 250,
    });
  };
  const selectAndFocus = (node: CanvasNode) => {
    setSelected([node.id]);
    const p = absolutePosition(node, doc.nodes);
    void flow.setCenter(p.x + node.width / 2, p.y + node.height / 2, {
      zoom: Math.min(flow.getZoom(), 1),
      duration: 250,
    });
  };
  const connect = useCallback(
    (connection: Connection) => {
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
  const onNodesChange = useCallback(
    (changes: NodeChange<FlowNode>[]) => {
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
      for (const c of changes) {
        if (c.type === "position" && c.position)
          patches.push({
            type: "update-node",
            id: c.id,
            patch: { position: c.position },
          });
        if (c.type === "dimensions" && c.dimensions && c.setAttributes)
          patches.push({
            type: "update-node",
            id: c.id,
            patch: { width: c.dimensions.width, height: c.dimensions.height },
          });
      }
      if (patches.length) command({ type: "batch", commands: patches });
    },
    [command],
  );
  const flowNodes: FlowNode[] = useMemo(
    () =>
      orderNodesForCanvas(doc.nodes).map((n) => ({
        ...n,
        selected: selected.includes(n.id),
        draggable: !n.locked,
        style: { width: n.width, height: n.height },
        zIndex: n.type === "group" ? -1 : n.zIndex,
        ariaLabel: `${labels[n.type]}节点：${n.data.title}`,
      })),
    [doc.nodes, selected],
  );
  const flowEdges: Edge[] = useMemo(
    () =>
      doc.edges.map((e) => ({
        ...e,
        type: "default",
        selected: selectedEdges.includes(e.id),
        hidden: !showEdges,
        style: {
          stroke: selectedEdges.includes(e.id) ? "#c6d5c4" : "#68696a",
          strokeWidth: 1.5,
        },
        ariaLabel: "参考连线",
      })),
    [doc.edges, selectedEdges, showEdges],
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
          new Blob([node.data.text ?? ""], { type: "text/plain;charset=utf-8" }),
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
      for (const [i, file] of files.entries()) {
        const resource = await readEditorResource(file, controller.signal);
        const kind = resource.kind;
        const data = {
          src: resource.src,
          title: resource.title,
          mimeType: resource.mimeType,
          assetState: "ready" as const,
          layers: undefined,
          taskDraft: undefined,
          media: {
            width: resource.width,
            height: resource.height,
            durationSeconds: resource.durationSeconds,
          },
        };
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
          { x: origin.x - 160 + i * 360, y: origin.y - 130 },
          data,
        );
        if (kind === "image") {
          node.width = 320;
          node.height = 320;
        }
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
      if (refTarget)
        for (const node of nodes)
          commands.push({
            type: "add-edge",
            edge: {
              id: crypto.randomUUID(),
              source: node.id,
              target: refTarget,
            },
          });
      command({ type: "batch", commands });
      setSelected(
        target ? [target] : refTarget ? [refTarget] : nodes.map((n) => n.id),
      );
      notify(`已导入 ${files.length} 个素材，保存在本机。`);
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
        })),
    [doc.nodes, selected],
  );
  const openEditor = (node: CanvasNode, mode: EditorMode = "default") => {
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
      target.locked
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
  ) => {
    const result = appendLinkedMediaResults(
      historyRef.current.present,
      source,
      outputs,
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
    if (editorOrigin.current) addLinkedOutputs(editorOrigin.current, outputs);
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
  const openTools = (tool: CanvasToolId = "layers") => {
    setToolInitial(tool);
    setPanel("tools");
    referenceTarget.current = null;
    setMenu(null);
  };
  const editSelected = (
    mode: EditorMode = "default",
    kind: "image" | "video" | "audio" = "image",
  ) => {
    const source = doc.nodes.find(
      (node) => selected.includes(node.id) && node.type === kind,
    );
    if (source) openEditor(source, mode);
    else notify("请先选择一个媒体节点。");
  };
  const prepareGeneration = () => {
    if (!single) return;
    const settings = getNodeGenerationSettings(single);
    const blocked = generationBlocker(settings, incoming);
    if (blocked) {
      notify(blocked);
      return;
    }
    const jobId = crypto.randomUUID();
    setGenerationTarget({ documentId: doc.id, nodeId: single.id, jobId });
    setJobs((current) => [
      {
        id: jobId,
        nodeId: single.id,
        title: single.data.prompt || single.data.title,
        status: "draft",
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
  const generationIncoming = generationNode
    ? doc.nodes.filter((node) =>
        doc.edges.some(
          (edge) =>
            edge.source === node.id && edge.target === generationNode.id,
        ),
      )
    : [];
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
      if (addLinkedOutputs(origin, outputs)) {
        setJobs((current) =>
          current.map((job) =>
            job.id === binding.jobId ? { ...job, status: "imported" } : job,
          ),
        );
        setGenerationTarget(null);
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

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const el = event.target as HTMLElement;
      const editingText = el.closest(
        "input,textarea,select,[contenteditable=true]",
      );
      if (event.key === "Escape") {
        setMenu(null);
        setPreview(null);
        setEditing(null);
        setGenerationTarget(null);
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
        rename ||
        preview ||
        editing ||
        help ||
        generationTarget
      )
        return;
      const mod = event.metaKey || event.ctrlKey;
      const key = event.key.toLowerCase();
      if (mod && key === "z") {
        event.preventDefault();
        setHistory(event.shiftKey ? redo : undo);
      } else if (mod && key === "y") {
        event.preventDefault();
        setHistory(redo);
      } else if (mod && key === "a") {
        event.preventDefault();
        setSelected(doc.nodes.map((n) => n.id));
      } else if (mod && key === "c") {
        event.preventDefault();
        copy();
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
    const onPaste = (event: ClipboardEvent) => {
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
    window.addEventListener("keydown", onKey);
    window.addEventListener("paste", onPaste);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("paste", onPaste);
    };
  });

  const actions = {
    update: (id: string, data: Partial<CanvasNodeData>) =>
      command({ type: "update-node", id, patch: { data } }),
    rename: (id: string) => {
      const n = doc.nodes.find((n) => n.id === id);
      if (n) setRename({ id, value: n.data.title });
    },
    upload: (id: string) => openFilePicker(id),
    preview: (id: string) => {
      const n = doc.nodes.find((n) => n.id === id);
      if (n) setPreview(n);
    },
    newConnected: (id: string, direction: "source" | "target") => {
      const n = doc.nodes.find((n) => n.id === id);
      if (!n) return;
      const p = absolutePosition(n, doc.nodes);
      const screen = flow.flowToScreenPosition({
        x: p.x + (direction === "source" ? n.width : 0),
        y: p.y + n.height / 2,
      });
      setMenu({
        x: Math.min(screen.x, window.innerWidth - 232),
        y: Math.min(screen.y, window.innerHeight - 330),
        world: p,
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
    getNode: (id: string) => doc.nodes.find((node) => node.id === id),
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
  };
  const contextItems = (children: ReactNode) => (
    <div
      className="cw-context-menu"
      role="menu"
      style={{
        left: Math.max(8, Math.min(menu!.x, window.innerWidth - 232)),
        top: Math.max(
          64,
          Math.min(menu!.y, window.innerHeight - (menu?.nodeId ? 490 : 330)),
        ),
      }}
    >
      {children}
    </div>
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

  return (
    <div
      className="cw-workspace"
      ref={root}
      data-testid="canvas-workspace"
      onKeyDownCapture={(event) => {
        if (
          !(event.target as HTMLElement).closest(".react-flow") ||
          (event.target as HTMLElement).closest(
            "input,textarea,select,[contenteditable=true]",
          )
        )
          return;
        if (
          !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(
            event.key,
          )
        )
          return;
        // Own keyboard movement before React Flow's node handler, avoiding duplicate commands.
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
          nodes={flowNodes}
          edges={flowEdges}
          nodeTypes={nodeTypes}
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
          isValidConnection={(c) =>
            c.source !== c.target &&
            !doc.edges.some(
              (e) => e.source === c.source && e.target === c.target,
            )
          }
          onNodeClick={(_, node) => {
            if (!["image", "video", "audio"].includes(node.type ?? "")) return;
            const item = doc.nodes.find((n) => n.id === node.id);
            if (!item) return;
            const p = absolutePosition(item, doc.nodes);
            const view = flow.getViewport();
            const bottom = (p.y + item.height) * view.zoom + view.y;
            const available =
              window.innerHeight - (window.innerWidth < 700 ? 108 : 80) - 290;
            if (bottom > available)
              void flow.setViewport(
                { ...view, y: view.y - (bottom - Math.max(180, available)) },
                { duration: 180 },
              );
          }}
          onNodeDragStart={begin}
          onNodeDragStop={end}
          onSelectionDragStart={begin}
          onSelectionDragStop={end}
          onPaneClick={(event) => {
            setMenu(null);
            setSelected([]);
            setSelectedEdges([]);
            setProjectMenu(false);
            setMoreMenu(false);
            setZoomMenu(false);
            if (event.detail === 2)
              setMenu({
                x: event.clientX,
                y: event.clientY,
                world: flow.screenToFlowPosition({
                  x: event.clientX,
                  y: event.clientY,
                }),
              });
          }}
          onPaneContextMenu={(event) => {
            event.preventDefault();
            setMenu({
              x: event.clientX,
              y: event.clientY,
              world: flow.screenToFlowPosition({
                x: event.clientX,
                y: event.clientY,
              }),
            });
          }}
          onMove={(_, view) => setZoom(view.zoom)}
          onMoveEnd={(_, viewport) => command({ type: "viewport", viewport })}
          minZoom={MIN_ZOOM}
          maxZoom={MAX_ZOOM}
          nodeDragThreshold={4}
          selectionMode={SelectionMode.Partial}
          selectionOnDrag={!hand}
          panOnDrag={hand ? [0, 1, 2] : [1, 2]}
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
          <Background
            variant={BackgroundVariant.Dots}
            gap={24}
            size={1}
            color="#333338"
            bgColor="#0d0d0d"
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
          <button
            className="cw-brand"
            title="返回首页"
            aria-label="返回首页"
            onClick={() => {
              void persist(doc).then((saved) => {
                if (saved) onExit();
              });
            }}
          >
            ✦
          </button>
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
            active={panel === "search"}
            onClick={() => togglePanel("search")}
          />
          <IconButton
            name="history"
            label="生成历史"
            active={panel === "history"}
            onClick={() => togglePanel("history")}
          />
          <span className="cw-local-badge">本地学习版</span>
          <button className="cw-export-button" onClick={exportDocument}>
            导出画布
          </button>
          <IconButton
            name="more"
            label="更多操作"
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
              void persist(doc).then((saved) => {
                if (saved) installDocument(createDocument());
              });
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
              void persist(doc).then((saved) => {
                if (saved) installDocument(exampleDocument(), true);
              });
            }}
          >
            打开示例画布
          </button>
        </div>
      )}
      {moreMenu && (
        <div className="cw-more-menu cw-menu-popover">
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
              setHelp(true);
              setMoreMenu(false);
            }}
          >
            快捷键与使用说明
          </button>
          <button
            onClick={() => {
              void persist(doc).then((saved) => {
                if (saved) installDocument(exampleDocument(), true);
              });
              setMoreMenu(false);
            }}
          >
            打开示例画布
          </button>
        </div>
      )}

      <nav className="cw-rail" aria-label="画布创作工具">
        <IconButton
          name="text"
          label="添加文本 (T)"
          onClick={() => addNode("text")}
        />
        <IconButton
          name="image"
          label="添加图片"
          onClick={() => addNode("image")}
        />
        <IconButton
          name="video"
          label="添加视频"
          onClick={() => addNode("video")}
        />
        <IconButton
          name="audio"
          label="添加音频"
          onClick={() => addNode("audio")}
        />
        <IconButton
          name="timeline"
          label="添加时间线"
          onClick={() => openEditor(addNode("timeline"))}
        />
        <IconButton
          name="subject"
          label="添加主体"
          onClick={() => openEditor(addNode("subject"))}
        />
        <IconButton
          name="external"
          label="添加导演台"
          onClick={() => openEditor(addNode("external"))}
        />
        <span className="cw-divider" />
        <IconButton
          name="tool"
          label="媒体工具箱"
          active={panel === "tools"}
          onClick={() =>
            panel === "tools"
              ? setPanel(null)
              : openTools(single?.data.taskDraft?.tool ?? "layers")
          }
        />
        <IconButton
          name="folder"
          label="资产库"
          active={panel === "assets"}
          onClick={() => togglePanel("assets")}
        />
        <IconButton
          name="upload"
          label="上传本地素材"
          onClick={() => openFilePicker()}
        />
      </nav>
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
                void persist(doc).then((saved) => {
                  if (saved) installDocument(exampleDocument(), true);
                });
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
          label={hand ? "切换到选择工具 (V)" : "切换到抓手工具 (H)"}
          active={hand}
          onClick={() => setHand(!hand)}
        />
        <span className="cw-vline" />
        <IconButton
          name="map"
          label="小地图"
          active={minimap}
          onClick={() => setMinimap(!minimap)}
        />
        <IconButton
          name="link"
          label="显示连线"
          active={showEdges}
          onClick={() => setShowEdges(!showEdges)}
        />
        <button
          className="cw-zoom-button"
          aria-label="缩放选项"
          onClick={() => setZoomMenu(!zoomMenu)}
        >
          {Math.round(zoom * 100)}%<CanvasIcon name="chevron" size={11} />
        </button>
      </div>
      <div className="cw-undo-controls">
        <IconButton
          name="undo"
          label="撤销"
          disabled={!history.past.length && !history.transaction}
          onClick={() => setHistory(undo)}
        />
        <IconButton
          name="redo"
          label="重做"
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
              onClick={() => void flow.zoomOut()}
            />
            <input
              aria-label="缩放百分比"
              type="number"
              min="8"
              max="800"
              value={Math.round(zoom * 100)}
              onChange={(e) => {
                const v = Number(e.target.value);
                if (v >= 8 && v <= 800) void flow.zoomTo(v / 100);
              }}
            />
            <span>%</span>
            <IconButton
              name="plus"
              label="放大"
              onClick={() => void flow.zoomIn()}
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
          onClick={() => setHelp(true)}
        />
        <button
          className="cw-chat-button"
          onClick={() => togglePanel("assistant")}
        >
          <CanvasIcon name="star" size={18} />与 AI 对话
          <span className="cw-tiny-tag">本地</span>
        </button>
      </div>
      {selected.length > 1 && (
        <div className="cw-selection-bar">
          <span>已选 {selected.length} 个节点</span>
          <button onClick={group}>
            <CanvasIcon name="group" size={16} />
            编组
          </button>
          <button onClick={stack}>
            <CanvasIcon name="stack" size={16} />
            堆叠
          </button>
          <button
            onClick={() =>
              change((d) => ({ ...d, nodes: arrangeNodes(d.nodes, selected) }))
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
      {single &&
        ["image", "video", "audio"].includes(single.type) &&
        !single.locked &&
        !editing &&
        !preview &&
        !generationTarget && (
          <div className={`cw-composer-dock ${panel ? "has-panel" : ""}`}>
            <div className="cw-selected-tools">
              <span>{single.data.title}</span>
              {single.data.src && (
                <>
                  <button onClick={() => setPreview(single)}>
                    <CanvasIcon name="expand" size={14} />
                    全屏
                  </button>
                  {single.type === "image" && (
                    <>
                      <button onClick={() => openEditor(single)}>
                        <CanvasIcon name="crop" size={14} />
                        编辑图片
                      </button>
                      <button onClick={() => openEditor(single, "layers")}>
                        <CanvasIcon name="stack" size={14} />
                        图层
                      </button>
                    </>
                  )}
                  <button
                    onClick={() =>
                      openTools(
                        single.data.taskDraft?.tool ??
                          (single.type === "image"
                            ? "smart-edit"
                            : single.type === "video"
                              ? "video-trim"
                              : "audio-trim"),
                      )
                    }
                  >
                    <CanvasIcon name="tool" size={14} />
                    工具
                  </button>
                  <button onClick={() => downloadNode(single)}>
                    <CanvasIcon name="download" size={14} />
                    下载
                  </button>
                </>
              )}
              <button aria-label="关闭生成面板" onClick={() => setSelected([])}>
                ×
              </button>
            </div>
            <NodeComposer
              selectedNode={single}
              incomingNodes={incoming}
              onUpdate={(patch) =>
                command({
                  type: "update-node",
                  id: single.id,
                  patch: { data: patch },
                })
              }
              onRun={prepareGeneration}
              onCancel={() => setGenerationTarget(null)}
              onPickReference={() => {
                referenceTarget.current = single.id;
                setPanel("assets");
              }}
              running={false}
            />
          </div>
        )}

      {menu &&
        contextItems(
          menu.nodeId ? (
            <>
              {menuButton("重命名", "text", () => actions.rename(menu.nodeId!))}
              {menuButton("复制", "copy", copy, "⌘ C")}
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
              {menuButton(single?.locked ? "解锁" : "锁定", "lock", () =>
                command({
                  type: "batch",
                  commands: selected.map((id) => ({
                    type: "update-node",
                    id,
                    patch: {
                      locked: !doc.nodes.find((n) => n.id === id)?.locked,
                    },
                  })),
                }),
              )}
              {menuButton("移到顶层", "arrow", () =>
                command({
                  type: "reorder-nodes",
                  ids: selected,
                  direction: "front",
                }),
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
                menuButton("媒体工具箱", "tool", () =>
                  openTools(
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
              {kinds.map((kind) => (
                <div key={kind}>
                  {menuButton(labels[kind], kind, () =>
                    addNode(kind, menu.world),
                  )}
                </div>
              ))}
              <hr />
              {menuButton("上传素材", "upload", () => openFilePicker())}
              {menuButton("粘贴", "copy", () => paste(), "⌘ V")}
            </>
          ),
        )}

      {panel && (
        <aside
          className={`cw-side-panel ${panel === "assets" || panel === "tools" ? "from-left" : ""} ${panel === "tools" ? "is-tools" : ""}`}
          aria-label={
            {
              assets: "资产库",
              search: "搜索节点",
              history: "生成历史",
              assistant: "AI 对话",
              projects: "本地项目",
              tools: "导演工具箱",
            }[panel]
          }
        >
          <div className="cw-panel-heading">
            <h2>
              {
                {
                  assets: "资产库",
                  search: "搜索节点",
                  history: "生成历史",
                  assistant: "与 AI 对话",
                  projects: "本地项目",
                  tools: "导演工具箱",
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
          {panel === "search" && (
            <>
              <input
                className="cw-search-input"
                placeholder="搜索名称、提示词或文本"
                autoFocus
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="cw-node-list">
                {doc.nodes
                  .filter((n) =>
                    `${n.data.title} ${n.data.prompt} ${n.data.text ?? ""}`
                      .toLowerCase()
                      .includes(search.toLowerCase()),
                  )
                  .map((n) => (
                    <button key={n.id} onClick={() => selectAndFocus(n)}>
                      <CanvasIcon name={n.type} />
                      <span>
                        {n.data.title}
                        <small>
                          {n.data.prompt || n.data.text || labels[n.type]}
                        </small>
                      </span>
                    </button>
                  ))}
              </div>
            </>
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
                          command({
                            type: "add-edge",
                            edge: {
                              id: crypto.randomUUID(),
                              source: n.id,
                              target: referenceTarget.current,
                            },
                          });
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
              <h3>原创示例素材</h3>
              <div className="cw-asset-grid">
                {["青山", "暮色", "远湖"].map((title, i) => (
                  <button
                    key={title}
                    onClick={() => {
                      const target = referenceTarget.current;
                      const n = addNode("image", undefined, {
                        title,
                        src: studyImage(i, title),
                        assetState: "ready",
                        mimeType: "image/svg+xml",
                      });
                      if (
                        target &&
                        doc.nodes.some((item) => item.id === target)
                      ) {
                        command({
                          type: "add-edge",
                          edge: {
                            id: crypto.randomUUID(),
                            source: n.id,
                            target,
                          },
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
            <>
              <button
                className="cw-wide-button"
                onClick={() => {
                  void persist(doc).then((saved) => {
                    if (saved) installDocument(createDocument());
                  });
                }}
              >
                <CanvasIcon name="plus" />
                新建空白画布
              </button>
              <div className="cw-node-list">
                {projects.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      void persist(doc).then(async (saved) => {
                        if (!saved) return;
                        const r = await loadDocument(p.id);
                        if (r.ok && r.value) installDocument(r.value);
                        else notify(r.ok ? "项目不存在" : r.error.message);
                      });
                    }}
                  >
                    <CanvasIcon name="folder" />
                    <span>
                      {p.title}
                      <small>
                        {p.nodeCount} 个节点 ·{" "}
                        {new Date(p.updatedAt).toLocaleString("zh-CN")}
                      </small>
                    </span>
                    {p.id === doc.id && <CanvasIcon name="check" size={15} />}
                  </button>
                ))}
              </div>
            </>
          )}
          {panel === "history" && (
            <>
              <p className="cw-panel-note">
                本次打开期间创建的请求草稿及导入记录。没有向即梦服务提交任务。
              </p>
              {!jobs.length ? (
                <div className="cw-panel-empty">
                  <CanvasIcon name="history" size={32} />
                  <p>还没有任务草稿</p>
                  <small>选中媒体节点，填写参数后创建本地任务。</small>
                </div>
              ) : (
                jobs.map((job) => (
                  <button
                    className="cw-job"
                    key={job.id}
                    onClick={() => {
                      const n = doc.nodes.find((n) => n.id === job.nodeId);
                      if (n) selectAndFocus(n);
                    }}
                  >
                    <span>{job.title}</span>
                    <small>
                      {job.time} ·{" "}
                      {
                        {
                          draft: "本地草稿",
                          imported: "已导入结果",
                        }[job.status]
                      }
                    </small>
                  </button>
                ))
              )}
            </>
          )}
          {panel === "tools" && (
            <CanvasToolsPanel
              key={`${doc.id}:${selected.join(",")}:${toolInitial}`}
              sources={selectedSources}
              initialTool={toolInitial}
              initialDraft={
                selectedOwner?.data.taskDraft?.tool === toolInitial
                  ? selectedOwner.data.taskDraft
                  : undefined
              }
              selection={selectedOwner?.data.taskDraft?.selection}
              selectionTool={selectedOwner?.data.taskDraft?.tool}
              onClose={() => setPanel(null)}
              localTools={{
                layers: () => editSelected("layers"),
                crop: () => editSelected(),
                composition: () => editSelected(),
                annotation: () => editSelected("annotation"),
                "grid-split": () => editSelected("grid"),
                "video-trim": () => editSelected("trim", "video"),
                "audio-trim": () => editSelected("trim", "audio"),
                "video-frame-capture": () => editSelected("frame", "video"),
                "extract-audio": () => editSelected("extract-audio", "video"),
                "director-stage": () =>
                  openEditor(
                    single?.type === "external" ? single : addNode("external"),
                  ),
              }}
              onDraftChange={(task) => {
                const owner = doc.nodes.find((node) => node.id === selected[0]);
                if (owner && !owner.locked)
                  command({
                    type: "update-node",
                    id: owner.id,
                    patch: { data: { taskDraft: task } },
                  });
              }}
              onEditSelection={(tool) => {
                const source = doc.nodes.find(
                  (node) =>
                    node.id === selected[0] &&
                    node.type === "image" &&
                    node.data.src,
                );
                if (!source) {
                  notify("请先选择有素材的图片节点。");
                  return;
                }
                setMaskTool(tool);
                openEditor(source, "mask");
              }}
              onImportResults={(task) => {
                const owner = doc.nodes.find(
                  (node) => node.id === task.sourceNodeIds[0],
                );
                if (!owner) {
                  notify("请选择结果对应的来源素材。");
                  return;
                }
                if (!owner.locked)
                  command({
                    type: "update-node",
                    id: owner.id,
                    patch: { data: { taskDraft: task } },
                  });
                resultBinding.current = {
                  documentId: doc.id,
                  nodeId: owner.id,
                  kind: owner.type,
                  src: owner.data.src,
                };
                if (resultInput.current) {
                  resultInput.current.accept = "image/*,video/*,audio/*";
                  resultInput.current.click();
                }
              }}
              importingResults={resultBusy}
            />
          )}
          {panel === "assistant" && (
            <>
              <div className="cw-assistant-intro">
                <span>✦</span>
                <h3>从想法开始，串联你的创作</h3>
                <p>
                  本地编排助手会把每一行描述转为一个图片节点，并连接为参考链。此版本未连接对话模型。
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
                  const nodes = prompts.map((prompt, i) => {
                    const n = createNode(
                      "image",
                      { x: p.x + i * 440, y: p.y },
                      { title: `画面 ${i + 1}`, prompt },
                    );
                    n.width = 320;
                    n.height = 320;
                    return n;
                  });
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
            void f.text().then(async (text) => {
              const r = parseDocument(text);
              if (!r.ok) {
                notify(r.error.message);
                return;
              }
              if (!(await persist(historyRef.current.present))) return;
              installDocument({ ...r.value, id: crypto.randomUUID() }, true);
              notify("已导入画布，并创建独立本地副本。");
            });
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
              target.locked
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
              const spec = CANVAS_TOOLS.find((tool) => tool.id === maskTool)!;
              const previous =
                editing.data.taskDraft?.tool === maskTool
                  ? editing.data.taskDraft
                  : undefined;
              const draft =
                previous ??
                createCanvasToolTask(
                  maskTool,
                  selectedSources
                    .filter((source) =>
                      spec.sources.some((kind) => kind === source.kind),
                    )
                    .map((source) => source.nodeId),
                  initialToolParameters(spec),
                );
              applyEditorData({ taskDraft: { ...draft, selection } });
              setToolInitial(maskTool);
              setPanel("tools");
            }}
          />
        )}
      {editing &&
        ["video", "audio"].includes(editing.type) &&
        ["trim", "frame", "extract-audio"].includes(editorMode) && (
          <LocalMediaEditor
            node={editing}
            mode={editorMode as "trim" | "frame" | "extract-audio"}
            onApply={(output) => editorOutputs([output])}
            onClose={closeEditor}
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
              在原站完成生成并下载后，选择实际媒体文件。结果会创建为新节点，连接到本次任务来源；不会覆盖原素材。
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
              生成、云分享和云端资产尚未接入。
            </p>
          </section>
        </div>
      )}
    </div>
  );
}
