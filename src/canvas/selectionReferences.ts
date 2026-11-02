import { referenceIssue, type ReferenceIssue } from "./connectionPolicy.ts";
import {
  portPoint,
  referencePreviewPath,
  REFERENCE_PORT_MAX_DISTANCE,
  REFERENCE_PORT_MIDPOINT_RADIUS,
  type PortSide,
} from "./connectionPorts.ts";
import { absolutePosition, boundsOfNodes } from "./geometry.ts";
import {
  createNode,
  type CanvasDocument,
  type CanvasEdge,
  type CanvasNode,
  type CanvasNodeKind,
  type Point,
} from "./model.ts";

export const SELECTION_PADDING = 6;
export const SELECTION_HEADING = 28;
export const SELECTION_PORT_SIZE = 20;

/** Titles scale with nodes; the surrounding gutter stays usable at any zoom. */
export function multiSelectionGeometry(
  nodes: readonly CanvasNode[],
  allNodes: readonly CanvasNode[],
  zoom: number,
) {
  if (nodes.length < 2) return null;
  const bounds = boundsOfNodes(nodes, allNodes);
  if (!bounds) return null;
  const padding = SELECTION_PADDING / zoom;
  const frame = {
    x: bounds.x - padding,
    y: bounds.y - SELECTION_HEADING - padding,
    width: bounds.width + 2 * padding,
    height: bounds.height + SELECTION_HEADING + 2 * padding,
  };
  return {
    frame,
    port: {
      x: frame.x + frame.width + (SELECTION_PORT_SIZE / 2 + 6) / zoom,
      y: frame.y + frame.height / 2,
    },
  };
}

/** Match individual ports' screen-space activation radius and sticky travel. */
export function magneticSelectionPort(
  anchor: Point,
  pointer: Point,
  zoom: number,
): Point {
  const dx = pointer.x - anchor.x,
    dy = pointer.y - anchor.y;
  const distance = Math.hypot(dx, dy);
  if (!distance || distance * zoom > REFERENCE_PORT_MIDPOINT_RADIUS)
    return anchor;
  const scale = Math.min(1, REFERENCE_PORT_MAX_DISTANCE / zoom / distance);
  return { x: anchor.x + dx * scale, y: anchor.y + dy * scale };
}

/** Every selected material keeps its own visible origin; only the end is shared. */
export function sourceReferencePreviews(
  nodes: readonly CanvasNode[],
  ids: readonly string[],
  end: Point,
  side: PortSide = "right",
) {
  return ids.flatMap((id) => {
    const node = nodes.find((node) => node.id === id);
    if (!node) return [];
    const from = portPoint(
      {
        ...absolutePosition(node, nodes),
        width: node.width,
        height: node.height,
      },
      side,
    );
    return [{ sourceId: id, path: referencePreviewPath(from, side, end) }];
  });
}

type ReferenceDocument = Pick<
  CanvasDocument,
  "nodes" | "edges" | "hiddenNodes"
>;

/** Validate the whole addition against cumulative limits before publishing it. */
export function planReferenceBatch(
  document: ReferenceDocument,
  sourceIds: readonly string[],
  target: string,
): {
  edges: CanvasEdge[];
  issue: { sourceId: string; code: ReferenceIssue } | null;
} {
  const edges: CanvasEdge[] = [];
  const ids = [...new Set(sourceIds)];
  for (const source of ids) {
    const code =
      ids.length > 1 && source === target
        ? "self_connection"
        : referenceIssue(
            { ...document, edges: [...document.edges, ...edges] },
            source,
            target,
          );
    if (code === "duplicate_relation") continue;
    if (code) return { edges: [], issue: { sourceId: source, code } };
    edges.push({
      id: crypto.randomUUID(),
      source,
      target,
      sourceHandle: "out",
      targetHandle: "in",
    });
  }
  return { edges, issue: null };
}

export function batchCreationKinds(
  document: ReferenceDocument,
  sourceIds: readonly string[],
  candidates: readonly CanvasNodeKind[],
) {
  return candidates.filter((kind) => {
    const target = createNode(
      kind,
      undefined,
      kind === "video" ? { settings: { videoMode: "reference" } } : {},
    );
    return !planReferenceBatch(
      { ...document, nodes: [...document.nodes, target] },
      sourceIds,
      target.id,
    ).issue;
  });
}
