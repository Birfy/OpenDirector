import { indexNodes, ancestors, isNodeLocked } from "./hierarchy.ts";
import { mapCanvasToolTaskReferences } from "./toolCatalog.ts";
import type { CanvasToolTask } from "./toolCatalog.ts";
import type { LocalStageDocument } from "./stageDocument.ts";
import type { LayerDocument } from "./layerDocument.ts";
import type { CanvasTagId } from "./nodeTags.ts";
import { referenceIssue } from "./connectionPolicy.ts";
/** Authored local canvas model, compatible with React Flow's node/edge shape. */
export type CanvasNodeKind =
  | "image"
  | "video"
  | "audio"
  | "file"
  | "text"
  | "group"
  | "timeline"
  | "subject"
  | "stack"
  | "tool"
  | "external";
export interface Point {
  x: number;
  y: number;
}
export interface Rect extends Point {
  width: number;
  height: number;
}
export interface Viewport extends Point {
  zoom: number;
}

export interface GenerationSettings {
  mode: "image" | "video" | "audio";
  model: string;
  aspectRatio: string;
  durationSeconds: number;
  resolution: string;
  prompt: string;
  count?: number;
  camera?: string;
  palette?: string;
  style?: string;
  audioEnabled?: boolean;
  videoMode?: "reference" | "first-last" | "continuation";
  firstFrameNodeId?: string;
  lastFrameNodeId?: string;
  audioCreationType?: "audio" | "music";
  audioMode?: "unified" | "tts";
  voiceName?: string;
  imagePreset?: "none" | "product-views";
  /** A model configured in the local API; catalog models leave it unset. */
  modelConfigId?: string;
}

/** A retained media snapshot. nodeId records provenance, not ownership of the source. */
export interface CanvasResource {
  id: string;
  kind: "image" | "video" | "audio" | "file";
  title: string;
  src?: string;
  mimeType?: string;
  nodeId?: string;
  durationSeconds?: number;
  width?: number;
  height?: number;
}

export interface TimelineClip {
  id: string;
  resource: CanvasResource;
  /** Audio placement only. Visual placement is derived from the track's clip order. */
  start?: number;
  /** Source trim uses seconds in this local model; original runtime tick units are not assumed. */
  inPoint: number;
  outPoint: number;
  speed: number;
  volume: number;
  muted: boolean;
}

export interface TimelineTrack {
  id: string;
  kind: "visual" | "audio";
  title: string;
  muted: boolean;
  clips: TimelineClip[];
}

export interface TimelineData {
  tracks: TimelineTrack[];
  /** Retained independently of clip use; omitted only by older documents. */
  importedAssets?: CanvasResource[];
  fps: number;
  width: number;
  height: number;
}

export interface SubjectData {
  description: string;
  category: string;
  main?: CanvasResource;
  auxiliaries: CanvasResource[];
  voice?: CanvasResource;
}

export interface StackData {
  nodeIds: string[];
  /** Local presentation state; the observed source schema only owns nodeIds. */
  activeIndex: number;
}

export interface ToolData {
  kind: "camera" | "style" | "palette" | "camera_motion";
  fields: { name: string; values: string[] }[];
  provenance?: { paletteId: string; version: number };
  palette?: { name?: string; sourceImageUri?: string };
}

export interface ExternalData {
  externalType: "director-stage";
  /** Decimal uint64 identity from the external director stage; absent for a local draft. */
  current?: { versionId: string };
}

export interface CanvasNodeData extends Record<string, unknown> {
  kind: CanvasNodeKind;
  title: string;
  prompt: string;
  src?: string;
  tags?: CanvasTagId[];
  mimeType?: string;
  text?: string;
  assetState?: "ready" | "missing";
  settings?: GenerationSettings;
  timeline?: TimelineData;
  subject?: SubjectData;
  stack?: StackData;
  tool?: ToolData;
  external?: ExternalData;
  layers?: LayerDocument;
  localStage?: LocalStageDocument;
  taskDraft?: CanvasToolTask;
  media?: { width?: number; height?: number; durationSeconds?: number };
}

export interface CanvasNode {
  id: string;
  type: CanvasNodeKind;
  position: Point;
  data: CanvasNodeData;
  width: number;
  height: number;
  locked?: boolean;
  zIndex?: number;
  /** Child positions are relative to their parent's top-left corner. */
  parentId?: string;
}

export interface CanvasEdge {
  id: string;
  source: string;
  target: string;
  sourceHandle?: string | null;
  targetHandle?: string | null;
  /** Missing on legacy documents means generation_input; result provenance is not a reference. */
  intent?: "generation_input" | "post_edit_result";
}

export interface CanvasDocument {
  version: 1;
  id: string;
  title: string;
  nodes: CanvasNode[];
  edges: CanvasEdge[];
  viewport: Viewport;
  settings: GenerationSettings;
}

export const MIN_ZOOM = 0.08;
export const MAX_ZOOM = 8;
export const DEFAULT_SETTINGS: Readonly<GenerationSettings> = {
  mode: "image",
  model: "本地交互演示",
  aspectRatio: "1:1",
  durationSeconds: 5,
  resolution: "1024",
  prompt: "",
};

export function createDocument(title = "未命名画布"): CanvasDocument {
  return {
    version: 1,
    id: crypto.randomUUID(),
    title,
    nodes: [],
    edges: [],
    viewport: { x: 0, y: 0, zoom: 1 },
    settings: { ...DEFAULT_SETTINGS },
  };
}

export function createNode(
  kind: CanvasNodeKind,
  position: Point = { x: 0, y: 0 },
  data: Partial<Omit<CanvasNodeData, "kind">> = {},
): CanvasNode {
  const sizes: Record<CanvasNodeKind, [number, number]> = {
    image: [300, 220],
    video: [320, 220],
    audio: [300, 110],
    file: [260, 110],
    text: [280, 160],
    group: [640, 480],
    timeline: [600, 280],
    subject: [320, 320],
    stack: [320, 270],
    tool: [300, 180],
    external: [340, 180],
  };
  const titles: Record<CanvasNodeKind, string> = {
    image: "图片",
    video: "视频",
    audio: "音频",
    file: "文件",
    text: "文本",
    group: "分组",
    timeline: "时间线",
    subject: "主体",
    stack: "资源堆叠",
    tool: "工具",
    external: "导演预演",
  };
  const [width, height] = sizes[kind];
  return {
    id: crypto.randomUUID(),
    type: kind,
    position: { ...position },
    width,
    height,
    data: {
      title: titles[kind],
      prompt: "",
      ...(kind === "timeline"
        ? {
            timeline: {
              tracks: [
                {
                  id: "visual",
                  kind: "visual",
                  title: "画面轨",
                  muted: false,
                  clips: [],
                },
              ],
              fps: 30,
              width: 1920,
              height: 1080,
            },
          }
        : {}),
      ...(kind === "subject"
        ? {
            subject: {
              description: "",
              category: "character",
              auxiliaries: [],
            },
          }
        : {}),
      ...(kind === "stack" ? { stack: { nodeIds: [], activeIndex: 0 } } : {}),
      ...(kind === "tool" ? { tool: { kind: "camera", fields: [] } } : {}),
      ...(kind === "external"
        ? { external: { externalType: "director-stage" } }
        : {}),
      ...data,
      kind,
    },
    locked: false,
  };
}

export type NodePatch = Partial<Omit<CanvasNode, "id" | "data">> & {
  data?: Partial<CanvasNodeData>;
};
export type CanvasCommand =
  | { type: "add-nodes"; nodes: CanvasNode[] }
  | { type: "update-node"; id: string; patch: NodePatch }
  | {
      type: "resize-node";
      id: string;
      width: number;
      height: number;
      position?: Point;
    }
  | { type: "remove-nodes"; ids: string[] }
  | { type: "move-nodes"; ids: string[]; delta: Point }
  | {
      type: "reorder-nodes";
      ids: string[];
      direction: "front" | "back" | "forward" | "backward";
    }
  | { type: "add-edge"; edge: CanvasEdge }
  | { type: "remove-edges"; ids: string[] }
  | { type: "settings"; patch: Partial<GenerationSettings> }
  | { type: "title"; title: string }
  | { type: "viewport"; viewport: Viewport }
  | { type: "batch"; commands: CanvasCommand[] };

/** Shared by the port preview and every reference-creation command. */
export function canAddReference(
  document: Pick<CanvasDocument, "nodes" | "edges">,
  source: string | null | undefined,
  target: string | null | undefined,
  intent: CanvasEdge["intent"] = "generation_input",
): boolean {
  return referenceIssue(document, source, target, intent) === null;
}

/** Applies a document command; UI-only selection and dragging flags stay outside this model. */
export function applyCommand(
  document: CanvasDocument,
  command: CanvasCommand,
): CanvasDocument {
  if (command.type === "batch")
    return command.commands.reduce(applyCommand, document);
  if (command.type === "title")
    return document.title === command.title
      ? document
      : { ...document, title: command.title };
  if (command.type === "settings")
    return {
      ...document,
      settings: { ...document.settings, ...command.patch },
    };
  if (command.type === "viewport")
    return { ...document, viewport: { ...command.viewport } };
  if (command.type === "add-nodes") {
    const ids = new Set(document.nodes.map((node) => node.id));
    for (const node of command.nodes) {
      if (ids.has(node.id)) throw new Error(`节点 ID 重复：${node.id}`);
      ids.add(node.id);
    }
    return command.nodes.length
      ? { ...document, nodes: [...document.nodes, ...command.nodes] }
      : document;
  }
  const byId = indexNodes(document.nodes);
  const locked = (node: CanvasNode) => isNodeLocked(node, byId);
  if (command.type === "resize-node") {
    const source = document.nodes.find((node) => node.id === command.id);
    if (!source || locked(source)) return document;
    const position = command.position ?? source.position;
    if (
      ![position.x, position.y, command.width, command.height].every(
        Number.isFinite,
      ) ||
      command.width <= 0 ||
      command.height <= 0
    )
      throw new Error("节点尺寸必须为正数，坐标必须是有限数字。");
    const dx = source.position.x - position.x,
      dy = source.position.y - position.y;
    if (
      !dx &&
      !dy &&
      source.width === command.width &&
      source.height === command.height
    )
      return document;
    return {
      ...document,
      nodes: document.nodes.map((node) => {
        if (node.id === source.id)
          return {
            ...node,
            position: { ...position },
            width: command.width,
            height: command.height,
          };
        // Resizing the frame changes its local origin, not its children's world positions.
        // This coordinate compensation also applies to locked children.
        if (node.parentId === source.id && (dx || dy))
          return {
            ...node,
            position: { x: node.position.x + dx, y: node.position.y + dy },
          };
        return node;
      }),
    };
  }
  if (command.type === "update-node") {
    let changed = false;
    const nodes = document.nodes.map((node) => {
      if (node.id !== command.id) return node;
      // A child cannot override a parent lock. Only the explicit lock owner can unlock itself.
      if (ancestors(node, byId).some((parent) => parent.locked)) return node;
      if (node.locked && command.patch.locked !== false) return node;
      changed = true;
      const type = command.patch.type ?? node.type;
      let base = node.data;
      if (type !== node.type) {
        // Only title/prompt survive a kind change; type-specific editors own their payloads.
        base = {
          kind: type,
          title: node.data.title,
          prompt: node.data.prompt,
          ...(node.data.tags ? { tags: [...node.data.tags] } : {}),
        };
      } else if (
        command.patch.data &&
        "src" in command.patch.data &&
        command.patch.data.src !== node.data.src
      ) {
        // Layers, masks and dimensions belong to the previous pixels. A producer may
        // supply a new layer document or metadata in this same atomic patch.
        base = { ...node.data };
        for (const key of [
          "layers",
          "taskDraft",
          "media",
          "mimeType",
          "assetState",
        ] as const)
          delete base[key];
      }
      const data = command.patch.data
        ? { ...base, ...command.patch.data }
        : base;
      return { ...node, ...command.patch, type, data: { ...data, kind: type } };
    });
    return changed ? { ...document, nodes } : document;
  }
  if (command.type === "move-nodes") {
    if (!Number.isFinite(command.delta.x) || !Number.isFinite(command.delta.y))
      throw new Error("移动坐标必须是有限数字。");
    if (!command.delta.x && !command.delta.y) return document;
    const selected = new Set(command.ids);
    let changed = false;
    const nodes = document.nodes.map((node) => {
      if (
        !selected.has(node.id) ||
        locked(node) ||
        ancestors(node, byId).some((parent) => selected.has(parent.id))
      )
        return node;
      changed = true;
      return {
        ...node,
        position: {
          x: node.position.x + command.delta.x,
          y: node.position.y + command.delta.y,
        },
      };
    });
    return changed ? { ...document, nodes } : document;
  }
  if (command.type === "remove-nodes") {
    const requested = new Set(command.ids);
    const removed = new Set(
      document.nodes
        .filter((node) => requested.has(node.id) && !locked(node))
        .map((node) => node.id),
    );
    // Locked content retains live references and their ancestors; no indirect mutation via deletion.
    const protectedIds = new Set<string>();
    for (const node of document.nodes.filter(locked)) {
      protectedIds.add(node.id);
      for (const id of node.data.stack?.nodeIds ?? []) protectedIds.add(id);
      for (const key of ["firstFrameNodeId", "lastFrameNodeId"] as const) {
        const id = node.data.settings?.[key];
        if (id) protectedIds.add(id);
      }
      for (const id of node.data.taskDraft?.sourceNodeIds ?? [])
        protectedIds.add(id);
      if (node.data.taskDraft?.selection)
        protectedIds.add(node.data.taskDraft.selection.sourceNodeId);
    }
    for (const id of protectedIds) {
      removed.delete(id);
      let parent = document.nodes.find((node) => node.id === id)?.parentId;
      const visited = new Set<string>();
      while (parent && !visited.has(parent)) {
        visited.add(parent);
        removed.delete(parent);
        parent = document.nodes.find((node) => node.id === parent)?.parentId;
      }
    }
    let added = true;
    while (added) {
      added = false;
      for (const node of document.nodes)
        if (
          node.parentId &&
          removed.has(node.parentId) &&
          !removed.has(node.id)
        ) {
          removed.add(node.id);
          added = true;
        }
    }
    if (!removed.size) return document;
    return {
      ...document,
      nodes: document.nodes
        .filter((node) => !removed.has(node.id))
        .map((node) => {
          const settings =
            node.data.settings &&
            mapSettingsNodeReferences(node.data.settings, (id) =>
              removed.has(id) ? undefined : id,
            );
          const taskDraft =
            node.data.taskDraft &&
            (node.data.taskDraft.sourceNodeIds.some((id) => removed.has(id)) ||
              (node.data.taskDraft.selection &&
                removed.has(node.data.taskDraft.selection.sourceNodeId)))
              ? mapCanvasToolTaskReferences(node.data.taskDraft, (id) =>
                  removed.has(id) ? undefined : id,
                )
              : node.data.taskDraft;
          const stack = node.data.stack;
          const nodeIds = stack?.nodeIds.filter((id) => !removed.has(id));
          if (
            taskDraft === node.data.taskDraft &&
            settings === node.data.settings &&
            (!stack || nodeIds!.length === stack.nodeIds.length)
          )
            return node;
          return {
            ...node,
            data: {
              ...node.data,
              ...(settings ? { settings } : {}),
              ...(taskDraft ? { taskDraft } : {}),
              ...(stack && nodeIds
                ? {
                    stack: {
                      nodeIds,
                      activeIndex: Math.min(
                        stack.activeIndex,
                        Math.max(0, nodeIds.length - 1),
                      ),
                    },
                  }
                : {}),
            },
          };
        }),
      settings: mapSettingsNodeReferences(document.settings, (id) =>
        removed.has(id) ? undefined : id,
      ),
      edges: document.edges.filter(
        (edge) => !removed.has(edge.source) && !removed.has(edge.target),
      ),
    };
  }
  if (command.type === "reorder-nodes") {
    const selected = new Set(command.ids);
    const nodes = [...document.nodes].sort(
      (a, b) => (a.zIndex ?? 0) - (b.zIndex ?? 0),
    );
    const movable = (node: CanvasNode) =>
      selected.has(node.id) && !locked(node);
    if (!nodes.some(movable)) return document;
    let ordered = [...nodes];
    if (command.direction === "front")
      ordered = [
        ...nodes.filter((node) => !movable(node)),
        ...nodes.filter(movable),
      ];
    if (command.direction === "back")
      ordered = [
        ...nodes.filter(movable),
        ...nodes.filter((node) => !movable(node)),
      ];
    if (command.direction === "forward") {
      for (let i = ordered.length - 2; i >= 0; i--)
        if (movable(ordered[i]!) && !movable(ordered[i + 1]!))
          [ordered[i], ordered[i + 1]] = [ordered[i + 1]!, ordered[i]!];
    }
    if (command.direction === "backward") {
      for (let i = 1; i < ordered.length; i++)
        if (movable(ordered[i]!) && !movable(ordered[i - 1]!))
          [ordered[i], ordered[i - 1]] = [ordered[i - 1]!, ordered[i]!];
    }
    if (ordered.every((node, index) => node === nodes[index])) return document;
    return {
      ...document,
      nodes: ordered.map((node, zIndex) => ({ ...node, zIndex })),
    };
  }
  if (command.type === "add-edge") {
    if (document.edges.some((edge) => edge.id === command.edge.id))
      throw new Error(`连线 ID 重复：${command.edge.id}`);
    const ids = new Set(document.nodes.map((node) => node.id));
    if (!ids.has(command.edge.source) || !ids.has(command.edge.target))
      throw new Error("连线两端必须是当前画布中的节点。");
    if (
      !canAddReference(
        document,
        command.edge.source,
        command.edge.target,
        command.edge.intent,
      )
    )
      return document;
    return { ...document, edges: [...document.edges, { ...command.edge }] };
  }
  const removed = new Set(command.ids);
  for (const edge of document.edges) {
    const target = document.nodes.find((node) => node.id === edge.target);
    if (
      target &&
      locked(target) &&
      edge.intent !== "post_edit_result" &&
      (target.data.settings?.firstFrameNodeId === edge.source ||
        target.data.settings?.lastFrameNodeId === edge.source)
    )
      removed.delete(edge.id);
  }
  const edges = document.edges.filter((edge) => !removed.has(edge.id));
  if (edges.length === document.edges.length) return document;
  const disconnected = document.edges.filter(
    (edge) => removed.has(edge.id) && edge.intent !== "post_edit_result",
  );
  return {
    ...document,
    edges,
    nodes: document.nodes.map((node) => {
      if (!node.data.settings) return node;
      const settings = mapSettingsNodeReferences(node.data.settings, (id) =>
        disconnected.some(
          (edge) => edge.source === id && edge.target === node.id,
        ) &&
        !edges.some(
          (edge) =>
            edge.intent !== "post_edit_result" &&
            edge.source === id &&
            edge.target === node.id,
        )
          ? undefined
          : id,
      );
      return settings === node.data.settings
        ? node
        : { ...node, data: { ...node.data, settings } };
    }),
  };
}

/** Node references are identities, unlike retained timeline/subject source snapshots. */
export function mapSettingsNodeReferences(
  settings: GenerationSettings,
  resolve: (id: string) => string | undefined,
): GenerationSettings {
  let next = settings;
  for (const key of ["firstFrameNodeId", "lastFrameNodeId"] as const) {
    const before = settings[key];
    if (before === undefined) continue;
    const after = resolve(before);
    if (after === before) continue;
    if (next === settings) next = { ...settings };
    if (after === undefined) delete next[key];
    else next[key] = after;
  }
  return next;
}
