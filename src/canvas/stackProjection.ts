import type { CanvasNode, CanvasEdge } from "./model.ts";

/** A view-only projection: durable identities, positions and edges remain untouched. */
export function projectCanvasStacks<
  N extends Pick<CanvasNode, "id" | "data"> & { type?: string },
  E extends CanvasEdge,
>(
  nodes: readonly N[],
  edges: readonly E[],
): {
  nodes: Array<
    N & {
      hidden?: boolean;
      selectable?: boolean;
      draggable?: boolean;
      connectable?: boolean;
      focusable?: boolean;
      selected?: boolean;
    }
  >;
  edges: Array<E & { hidden?: boolean }>;
  ownerByNodeId: Map<string, string>;
} {
  const owners = new Map<string, string>();
  for (const node of nodes)
    if (node.type === "stack")
      for (const id of node.data.stack?.nodeIds ?? []) owners.set(id, node.id);
  return {
    nodes: nodes.map((node) =>
      owners.has(node.id)
        ? {
            ...node,
            hidden: true,
            selectable: false,
            draggable: false,
            connectable: false,
            focusable: false,
            selected: false,
          }
        : node,
    ),
    edges: edges.map((edge) => {
      const source = owners.get(edge.source),
        target = owners.get(edge.target);
      if (!source && !target) return edge;
      return {
        ...edge,
        ...(source && { source, sourceHandle: "out" }),
        ...(target && { target, targetHandle: "in" }),
        hidden: Boolean(
          (edge as E & { hidden?: boolean }).hidden ||
          (source && source === target),
        ),
      };
    }),
    ownerByNodeId: owners,
  };
}

/** Selection belongs to visible cards even when a copy includes folded members. */
export function visibleSelectionIds(
  nodes: readonly CanvasNode[],
  ids: readonly string[],
): string[] {
  const owners = new Map(
    nodes.flatMap((node) =>
      node.type === "stack"
        ? (node.data.stack?.nodeIds ?? []).map((id) => [id, node.id] as const)
        : [],
    ),
  );
  const present = new Set(nodes.map((node) => node.id));
  return [
    ...new Set(
      ids.filter((id) => present.has(id)).map((id) => owners.get(id) ?? id),
    ),
  ];
}
