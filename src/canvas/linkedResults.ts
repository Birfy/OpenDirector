import {
  applyCommand,
  createNode,
  DEFAULT_SETTINGS,
  type CanvasDocument,
  type CanvasNode,
  type CanvasNodeData,
  type CanvasNodeKind,
} from "./model.ts";
import { absolutePosition } from "./geometry.ts";
import { indexNodes, isNodeLocked } from "./hierarchy.ts";
import { sameNodeData } from "./dataBoundary.ts";
import type { CanvasToolTask } from "./toolCatalog.ts";
export interface ResultSource {
  documentId: string;
  nodeId: string;
  kind: CanvasNodeKind;
  src?: string;
  text?: string;
  referenceInputs?: Record<string, string>;
  editorData?: Pick<CanvasNodeData, "timeline" | "localStage">;
}

/** Compositions are backed by an authored document, not necessarily a media URL. */
export function captureEditorSource(
  documentId: string,
  node: CanvasNode,
): ResultSource {
  return {
    documentId,
    nodeId: node.id,
    kind: node.type,
    src: node.data.src,
    ...(node.type === "timeline"
      ? { editorData: structuredClone({ timeline: node.data.timeline }) }
      : node.type === "external"
        ? { editorData: structuredClone({ localStage: node.data.localStage }) }
        : {}),
  };
}
export interface LinkedMediaResult {
  kind: "image" | "video" | "audio";
  src: string;
  mimeType: string;
  title: string;
  media?: CanvasNodeData["media"];
}
export type GenerationResultMode = "replace" | "additional";

type PlacementResult = {
  document: CanvasDocument;
  ids: string[];
  error?: string;
};

function sourceError(document: CanvasDocument, source: ResultSource) {
  if (document.id !== source.documentId) return "项目已切换，结果未写入画布。";
  const target = document.nodes.find((node) => node.id === source.nodeId);
  if (!target) return "来源节点已被删除，结果未写入画布。";
  if (target.type !== source.kind)
    return "来源节点类型已改变，结果未写入画布。";
}

/** Post-edit sessions require the same media or composition and an editable source. */
export function validateNodeActionSource(
  document: CanvasDocument,
  source: Readonly<ResultSource>,
):
  | { node: CanvasNode; error?: undefined }
  | { node?: undefined; error: string } {
  const error = sourceError(document, source);
  if (error) return { error };
  const node = document.nodes.find((item) => item.id === source.nodeId)!;
  const composition =
    source.editorData &&
    ((node.type === "timeline" && source.editorData.timeline) ||
      (node.type === "external" &&
        node.data.external?.externalType === "director-stage"));
  const unchanged = composition
    ? sameNodeData(node.data, { ...node.data, ...source.editorData })
    : !!source.src && node.data.src === source.src;
  if (!unchanged || node.data.assetState === "missing")
    return { error: "来源素材已改变或不可用，请重新打开工具。" };
  if (isNodeLocked(node, indexNodes(document.nodes)))
    return { error: "来源节点已锁定，请先解锁节点。" };
  return { node };
}

function hasInvalidMedia(outputs: readonly LinkedMediaResult[]) {
  return outputs.some(
    (output) =>
      !output.src ||
      !output.mimeType ||
      !["image", "video", "audio"].includes(output.kind),
  );
}

/** Generation fills its existing node. Only explicitly requested extra results add siblings. */
export function applyGenerationResults(
  document: CanvasDocument,
  source: ResultSource,
  outputs: readonly LinkedMediaResult[],
  mode: GenerationResultMode = "replace",
): PlacementResult {
  const error = sourceError(document, source);
  if (error) return { document, ids: [], error };
  const target = document.nodes.find((node) => node.id === source.nodeId)!;
  if (isNodeLocked(target, indexNodes(document.nodes)))
    return {
      document,
      ids: [],
      error: "来源节点已锁定，结果仍保存在生成历史中。",
    };
  if (!outputs.length) return { document, ids: [] };
  if (
    hasInvalidMedia(outputs) ||
    outputs.some((output) => output.kind !== target.type)
  )
    return { document, ids: [], error: "生成结果与节点的媒体类型不匹配。" };
  // Additional results do not mutate their source; a parallel first result may
  // already have filled it. Replacement must never overwrite a user's later edit.
  if (mode === "replace" && target.data.src !== source.src)
    return {
      document,
      ids: [],
      error: "节点素材已改变，结果仍保存在生成历史中。",
    };
  let next = document;
  const ids: string[] = [];
  if (mode === "replace") {
    const first = outputs[0]!;
    next = applyCommand(document, {
      type: "update-node",
      id: target.id,
      patch: {
        data: {
          src: first.src,
          mimeType: first.mimeType,
          assetState: "ready",
          mediaRole: "generation",
          generationEvidence: source.referenceInputs
            ? { output: first.src, references: { ...source.referenceInputs } }
            : undefined,
          ...(first.media ? { media: { ...first.media } } : {}),
        },
      },
    });
    ids.push(target.id);
  }
  const remaining = mode === "replace" ? outputs.slice(1) : outputs;
  if (remaining.length) {
    const p = absolutePosition(target, document.nodes);
    const nodes = placeResults(next, remaining, {
      x: p.x + target.width + 100,
      y: p.y,
    }).map((node) => ({
      ...node,
      data: {
        ...node.data,
        mediaRole: "generation" as const,
        generationEvidence:
          source.referenceInputs && node.data.src
            ? {
                output: node.data.src,
                references: { ...source.referenceInputs },
              }
            : undefined,
        prompt: target.data.prompt,
        ...(target.data.settings
          ? { settings: structuredClone(target.data.settings) }
          : {}),
      },
    }));
    next = { ...next, nodes: [...next.nodes, ...nodes] };
    ids.push(...nodes.map((node) => node.id));
  }
  return { document: next, ids };
}

/** Local imports and pixel operations produce new nodes; their frozen origin must still exist. */
export function appendLinkedMediaResults(
  document: CanvasDocument,
  source: ResultSource,
  outputs: readonly LinkedMediaResult[],
  sourceTask?: CanvasToolTask,
  resultIds?: readonly string[],
): PlacementResult {
  if (
    resultIds &&
    (resultIds.length !== outputs.length ||
      new Set(resultIds).size !== resultIds.length)
  )
    return { document, ids: [], error: "工具结果身份不匹配。" };
  const validation = validateNodeActionSource(document, source);
  if (!validation.node) return { document, ids: [], error: validation.error };
  const target = validation.node;
  if (!outputs.length) return { document, ids: [] };
  if (hasInvalidMedia(outputs))
    return { document, ids: [], error: "结果不包含有效媒体。" };
  if (sourceTask && sourceTask.sourceNodeIds[0] !== source.nodeId)
    return { document, ids: [], error: "编辑草稿与来源节点不匹配。" };
  const p = absolutePosition(target, document.nodes);
  const remaining = outputs.flatMap((output, index) =>
    resultIds && document.nodes.some((node) => node.id === resultIds[index])
      ? []
      : [{ output, id: resultIds?.[index] }],
  );
  if (!remaining.length) return { document, ids: [] };
  const nodes = placeResults(
    document,
    remaining.map((item) => item.output),
    {
      x: p.x + target.width + 100,
      y: p.y,
    },
  ).map((node, index) =>
    remaining[index]!.id ? { ...node, id: remaining[index]!.id! } : node,
  );
  const edges = nodes.map((node) => ({
    id: crypto.randomUUID(),
    source: target.id,
    target: node.id,
    intent: "post_edit_result" as const,
  }));
  return {
    document: {
      ...document,
      nodes: [
        ...document.nodes.map((node) =>
          sourceTask && node.id === source.nodeId
            ? {
                ...node,
                data: { ...node.data, taskDraft: structuredClone(sourceTask) },
              }
            : node,
        ),
        ...nodes,
      ],
      edges: [...document.edges, ...edges],
    },
    ids: nodes.map((node) => node.id),
  };
}

/**
 * An empty result node linked from the source, placed where its result will
 * land, so a running tool shows its progress on the node it is filling.
 */
export function appendPendingResult(
  document: CanvasDocument,
  source: ResultSource,
  kind: "image" | "video" | "audio",
  title: string,
  resultId?: string,
): PlacementResult {
  if (resultId && document.nodes.some((node) => node.id === resultId))
    return { document, ids: [], error: "结果节点身份已存在。" };
  const validation = validateNodeActionSource(document, source);
  if (!validation.node) return { document, ids: [], error: validation.error };
  const target = validation.node;
  const p = absolutePosition(target, document.nodes);
  const [placed] = placeResults(
    document,
    [{ kind, src: "", mimeType: "", title }],
    { x: p.x + target.width + 100, y: p.y },
  );
  const node = {
    ...createNode(kind, placed!.position, {
      title,
      settings: pendingSettings(kind),
    }),
    ...(resultId ? { id: resultId } : {}),
  };
  return {
    document: {
      ...document,
      nodes: [...document.nodes, node],
      edges: [
        ...document.edges,
        {
          id: crypto.randomUUID(),
          source: target.id,
          target: node.id,
          intent: "post_edit_result" as const,
        },
      ],
    },
    ids: [node.id],
  };
}

/** Canonical draft parameters survive the C04 presentation round trip. */
function pendingSettings(kind: "image" | "video" | "audio") {
  return {
    ...DEFAULT_SETTINGS,
    mode: kind,
    count: 1,
    ...(kind === "video"
      ? { videoMode: "first-last" as const, resolution: "auto" }
      : {}),
  };
}

/** Task-owned identity plus unchanged content; movement is deliberately allowed. */
export function pendingResultNode(
  document: CanvasDocument,
  id: string,
  expectedTitle?: string,
  expectedKind?: string,
) {
  const node = document.nodes.find((item) => item.id === id);
  if (
    !node ||
    !["image", "video", "audio"].includes(node.type) ||
    isNodeLocked(node, indexNodes(document.nodes)) ||
    node.data.src ||
    node.data.text ||
    node.data.prompt ||
    node.data.assetState === "missing" ||
    node.data.mediaRole === "asset" ||
    node.data.taskDraft ||
    node.data.layers ||
    node.data.localStage ||
    node.data.promptMentions?.length ||
    (expectedTitle !== undefined && node.data.title !== expectedTitle) ||
    (expectedKind !== undefined && node.type !== expectedKind) ||
    document.edges.some(
      (edge) => edge.target === id && edge.intent !== "post_edit_result",
    )
  )
    return undefined;
  const settings = node.data.settings;
  const defaults = pendingSettings(node.type as "image" | "video" | "audio");
  if (
    settings &&
    Object.entries(settings).some(
      ([key, value]) =>
        value !== undefined &&
        value !== (defaults as unknown as Record<string, unknown>)[key],
    )
  )
    return undefined;
  return node;
}

/** Fill an owned placeholder once. Stable IDs make a replay or partial placement
 * idempotent; edited, hidden, removed and locked targets remain untouched. */
export function fillPendingResult(
  document: CanvasDocument,
  source: ResultSource,
  pendingId: string,
  outputs: readonly LinkedMediaResult[],
  sourceTask?: CanvasToolTask,
  resultIds?: readonly string[],
  expectedTitle?: string,
): PlacementResult {
  const validation = validateNodeActionSource(document, source);
  if (validation.error) return { document, ids: [], error: validation.error };
  if (sourceTask && sourceTask.sourceNodeIds[0] !== source.nodeId)
    return { document, ids: [], error: "编辑草稿与来源节点不匹配。" };
  const [first, ...rest] = outputs;
  if (
    !first ||
    hasInvalidMedia(outputs) ||
    (resultIds &&
      (resultIds.length !== outputs.length ||
        resultIds[0] !== pendingId ||
        new Set(resultIds).size !== resultIds.length))
  )
    return { document, ids: [], error: "工具结果身份或素材无效。" };
  const existing = document.nodes.find((node) => node.id === pendingId);
  const alreadyFilled =
    existing?.type === first.kind &&
    existing.data.src === first.src &&
    existing.data.mimeType === first.mimeType;
  const pending = pendingResultNode(document, pendingId, expectedTitle);
  if (!alreadyFilled && (!pending || pending.type !== first.kind))
    return {
      document,
      ids: [],
      error: "结果节点已修改、锁定或移除，结果保留在历史中。",
    };
  if (
    rest.some((output, index) => {
      const node =
        resultIds &&
        document.nodes.find((node) => node.id === resultIds[index + 1]);
      return (
        node && (node.type !== output.kind || node.data.src !== output.src)
      );
    })
  )
    return { document, ids: [], error: "结果节点已修改，结果保留在历史中。" };
  const filled = alreadyFilled
    ? document
    : applyCommand(document, {
        type: "update-node",
        id: pendingId,
        patch: {
          data: {
            src: first.src,
            title: first.title,
            mimeType: first.mimeType,
            assetState: "ready",
            mediaRole: "asset",
            ...(first.media ? { media: { ...first.media } } : {}),
          },
        },
      });
  if (rest.length) {
    const linked = appendLinkedMediaResults(
      filled,
      source,
      rest,
      sourceTask,
      resultIds?.slice(1),
    );
    if (linked.error) return { document, ids: [], error: linked.error };
    return {
      document: linked.document,
      ids: [...(alreadyFilled ? [] : [pendingId]), ...linked.ids],
    };
  }
  const next =
    sourceTask && !alreadyFilled
      ? {
          ...filled,
          nodes: filled.nodes.map((node) =>
            node.id === source.nodeId
              ? {
                  ...node,
                  data: {
                    ...node.data,
                    taskDraft: structuredClone(sourceTask),
                  },
                }
              : node,
          ),
        }
      : filled;
  return { document: next, ids: alreadyFilled ? [] : [pendingId] };
}

/** Only an unchanged, editable placeholder owned by the terminal task is removed. */
export function removePendingResult(
  document: CanvasDocument,
  pendingId: string,
  expectedTitle?: string,
  expectedKind?: string,
): CanvasDocument {
  return pendingResultNode(document, pendingId, expectedTitle, expectedKind)
    ? applyCommand(document, { type: "remove-nodes", ids: [pendingId] })
    : document;
}

function placedOutput(
  document: CanvasDocument,
  id: string,
  output: LinkedMediaResult,
  hidden: ReadonlySet<string>,
) {
  const node = document.nodes.find((node) => node.id === id);
  return node
    ? node.type === output.kind &&
        node.data.src === output.src &&
        node.data.mimeType === output.mimeType
    : hidden.has(id);
}

export function toolResultsPlaced(
  document: CanvasDocument,
  outputs: readonly LinkedMediaResult[],
  ids: readonly string[],
  hidden: ReadonlySet<string> = new Set(),
) {
  return (
    outputs.length > 0 &&
    outputs.length === ids.length &&
    outputs.every((output, index) =>
      placedOutput(document, ids[index]!, output, hidden),
    )
  );
}

/** The same stable identities drive initial fill, reload and partial recovery. */
export function placeToolResults(
  document: CanvasDocument,
  source: ResultSource,
  outputs: readonly LinkedMediaResult[],
  task: CanvasToolTask | undefined,
  ids: readonly string[],
  target?: { id: string; title?: string; kind?: string },
  hidden: ReadonlySet<string> = new Set(),
): PlacementResult {
  if (
    !outputs.length ||
    ids.length !== outputs.length ||
    new Set(ids).size !== ids.length
  )
    return { document, ids: [], error: "工具结果身份不匹配。" };
  if (toolResultsPlaced(document, outputs, ids, hidden))
    return { document, ids: [] };
  const validation = validateNodeActionSource(document, source);
  if (validation.error) return { document, ids: [], error: validation.error };
  for (let index = 0; index < outputs.length; index++) {
    const node = document.nodes.find((node) => node.id === ids[index]);
    if (
      node &&
      !placedOutput(document, ids[index]!, outputs[index]!, hidden) &&
      !(
        index === 0 &&
        target?.id === ids[index] &&
        pendingResultNode(document, node.id, target.title, target.kind)
      )
    )
      return { document, ids: [], error: "结果节点已修改，结果保留在历史中。" };
  }
  if (target?.id === ids[0] && !hidden.has(target.id))
    return fillPendingResult(
      document,
      source,
      target.id,
      outputs,
      task,
      ids,
      target.title,
    );
  const remaining = outputs.flatMap((output, index) =>
    placedOutput(document, ids[index]!, output, hidden)
      ? []
      : [{ output, id: ids[index]! }],
  );
  const base =
    target && target.id !== ids[0]
      ? removePendingResult(document, target.id, target.title, target.kind)
      : document;
  return appendLinkedMediaResults(
    base,
    source,
    remaining.map((item) => item.output),
    task,
    remaining.map((item) => item.id),
  );
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
            mediaRole: "asset",
            ...(output.media ? { media: { ...output.media } } : {}),
          },
    );
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
