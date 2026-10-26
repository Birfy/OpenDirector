/** Authored local canvas model, compatible with React Flow's node/edge shape. */
export type CanvasNodeKind =
  | "image"
  | "video"
  | "audio"
  | "file"
  | "text"
  | "group";
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
}

export interface CanvasNodeData extends Record<string, unknown> {
  kind: CanvasNodeKind;
  title: string;
  prompt: string;
  src?: string;
  mimeType?: string;
  text?: string;
  assetState?: "ready" | "missing";
  settings?: GenerationSettings;
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
  };
  const titles: Record<CanvasNodeKind, string> = {
    image: "图片",
    video: "视频",
    audio: "音频",
    file: "文件",
    text: "文本",
    group: "分组",
  };
  const [width, height] = sizes[kind];
  return {
    id: crypto.randomUUID(),
    type: kind,
    position: { ...position },
    width,
    height,
    data: { title: titles[kind], prompt: "", ...data, kind },
    locked: false,
  };
}

export type NodePatch = Partial<Omit<CanvasNode, "id" | "data">> & {
  data?: Partial<CanvasNodeData>;
};
export type CanvasCommand =
  | { type: "add-nodes"; nodes: CanvasNode[] }
  | { type: "update-node"; id: string; patch: NodePatch }
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
  if (command.type === "update-node") {
    let changed = false;
    const nodes = document.nodes.map((node) => {
      if (node.id !== command.id) return node;
      // Unlocking remains available. Other mutations of a locked node are ignored.
      if (node.locked && command.patch.locked !== false) return node;
      changed = true;
      const data = command.patch.data
        ? { ...node.data, ...command.patch.data }
        : node.data;
      const type = command.patch.type ?? node.type;
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
        node.locked ||
        hasSelectedAncestor(node, document.nodes, selected)
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
        .filter((node) => requested.has(node.id) && !node.locked)
        .map((node) => node.id),
    );
    // Locked descendants retain their group too, so deletion cannot move a locked node implicitly.
    for (const node of document.nodes.filter((node) => node.locked)) {
      let parent = node.parentId;
      const visited = new Set<string>();
      while (parent && !visited.has(parent)) {
        visited.add(parent);
        removed.delete(parent);
        parent = document.nodes.find((item) => item.id === parent)?.parentId;
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
      nodes: document.nodes.filter((node) => !removed.has(node.id)),
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
    const movable = (node: CanvasNode) => selected.has(node.id) && !node.locked;
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
      command.edge.source === command.edge.target ||
      document.edges.some(
        (edge) =>
          edge.source === command.edge.source &&
          edge.target === command.edge.target,
      )
    )
      return document;
    return { ...document, edges: [...document.edges, { ...command.edge }] };
  }
  const removed = new Set(command.ids);
  const edges = document.edges.filter((edge) => !removed.has(edge.id));
  return edges.length === document.edges.length
    ? document
    : { ...document, edges };
}

function hasSelectedAncestor(
  node: CanvasNode,
  nodes: CanvasNode[],
  selected: Set<string>,
): boolean {
  let parent = node.parentId;
  const visited = new Set<string>();
  while (parent && !visited.has(parent)) {
    if (selected.has(parent)) return true;
    visited.add(parent);
    parent = nodes.find((item) => item.id === parent)?.parentId;
  }
  return false;
}
