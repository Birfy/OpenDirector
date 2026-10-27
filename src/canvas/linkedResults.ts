import {
  createNode,
  type CanvasDocument,
  type CanvasNodeData,
  type CanvasNodeKind,
} from "./model.ts";
import { absolutePosition } from "./geometry.ts";
export interface ResultSource {
  documentId: string;
  nodeId: string;
  kind: CanvasNodeKind;
  src?: string;
}
export interface LinkedMediaResult {
  kind: "image" | "video" | "audio";
  src: string;
  mimeType: string;
  title: string;
  media?: CanvasNodeData["media"];
}
/** Local imports and pixel operations produce new nodes; their frozen origin must still exist. */
export function appendLinkedMediaResults(
  document: CanvasDocument,
  source: ResultSource,
  outputs: readonly LinkedMediaResult[],
): { document: CanvasDocument; ids: string[]; error?: string } {
  if (document.id !== source.documentId)
    return { document, ids: [], error: "项目已切换，结果未写入画布。" };
  const target = document.nodes.find((node) => node.id === source.nodeId);
  if (!target)
    return { document, ids: [], error: "来源节点已被删除，结果未写入画布。" };
  if (target.type !== source.kind)
    return { document, ids: [], error: "来源节点类型已改变，结果未写入画布。" };
  if (target.data.src !== source.src)
    return {
      document,
      ids: [],
      error: "来源素材已改变，请重新打开工具后处理。",
    };
  if (!outputs.length) return { document, ids: [] };
  if (
    outputs.some(
      (output) =>
        !output.src ||
        !output.mimeType ||
        !["image", "video", "audio"].includes(output.kind),
    )
  )
    return { document, ids: [], error: "结果不包含有效媒体。" };
  const p = absolutePosition(target, document.nodes);
  const nodes = placeResults(document, outputs, {
    x: p.x + target.width + 100,
    y: p.y,
  });
  const edges = nodes.map((node) => ({
    id: crypto.randomUUID(),
    source: target.id,
    target: node.id,
    intent: "post_edit_result" as const,
  }));
  return {
    document: {
      ...document,
      nodes: [...document.nodes, ...nodes],
      edges: [...document.edges, ...edges],
    },
    ids: nodes.map((node) => node.id),
  };
}

export type ServiceResult =
  | LinkedMediaResult
  | { kind: "text"; title: string; text: string };

/** Results made outside a canvas source (such as by the assistant) start right of the content. */
export function appendServiceResults(
  document: CanvasDocument,
  outputs: readonly ServiceResult[],
): { document: CanvasDocument; ids: string[] } {
  const placed = document.nodes
    .filter((node) => node.type !== "group")
    .map((node) => ({
      ...absolutePosition(node, document.nodes),
      width: node.width,
    }));
  const nodes = placeResults(
    document,
    outputs,
    placed.length
      ? {
          x: Math.max(...placed.map((rect) => rect.x + rect.width)) + 160,
          y: Math.min(...placed.map((rect) => rect.y)),
        }
      : { x: 0, y: 0 },
  );
  return {
    document: { ...document, nodes: [...document.nodes, ...nodes] },
    ids: nodes.map((node) => node.id),
  };
}

function placeResults(
  document: CanvasDocument,
  outputs: readonly ServiceResult[],
  start: { x: number; y: number },
) {
  const occupied = document.nodes
    .filter((node) => node.type !== "group")
    .map((node) => ({
      ...absolutePosition(node, document.nodes),
      width: node.width,
      height: node.height,
    }));
  return outputs.map((output, index) => {
    const node = createNode(
      output.kind as CanvasNodeKind,
      {
        x: start.x + (index % 4) * 400,
        y: start.y + Math.floor(index / 4) * 400,
      },
      output.kind === "text"
        ? { title: output.title, text: output.text }
        : {
            src: output.src,
            title: output.title,
            mimeType: output.mimeType,
            assetState: "ready",
            ...(output.media ? { media: { ...output.media } } : {}),
          },
    );
    if (output.kind === "image") {
      node.width = 320;
      node.height = 320;
    }
    // Repeated operations share an origin, but each result needs its own space.
    // Moving down past a collision cannot collide with that rectangle again.
    for (let attempt = 0; attempt <= occupied.length; attempt++) {
      const collisions = occupied.filter(
        (rect) =>
          node.position.x < rect.x + rect.width + 64 &&
          node.position.x + node.width + 64 > rect.x &&
          node.position.y < rect.y + rect.height + 64 &&
          node.position.y + node.height + 64 > rect.y,
      );
      if (!collisions.length) break;
      node.position.y = Math.max(
        ...collisions.map((rect) => rect.y + rect.height + 64),
      );
    }
    occupied.push({ ...node.position, width: node.width, height: node.height });
    return node;
  });
}
