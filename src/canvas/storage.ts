import {
  copyGenerationSettings,
  isGenerationSettings,
  nodeResources,
  parseNodeData,
} from "./dataBoundary.ts";
import { compactMedia, expandMedia } from "./mediaStorage.ts";
import type {
  CanvasDocument,
  CanvasEdge,
  CanvasNode,
  CanvasNodeKind,
  Point,
} from "./model.ts";
import { MAX_ZOOM, MIN_ZOOM } from "./model.ts";

export interface CanvasStorageError {
  code:
    | "invalid-document"
    | "invalid-json"
    | "unavailable"
    | "blocked"
    | "storage"
    | "transient-media";
  message: string;
}
export type Result<T> =
  | { ok: true; value: T }
  | { ok: false; error: CanvasStorageError };
const NODE_KINDS: CanvasNodeKind[] = [
  "image",
  "video",
  "audio",
  "file",
  "text",
  "group",
  "timeline",
  "subject",
  "stack",
  "tool",
  "external",
];
const failure = <T>(
  code: CanvasStorageError["code"],
  message: string,
): Result<T> => ({ ok: false, error: { code, message } });
const object = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);
const nonempty = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;
const finite = (value: unknown): value is number =>
  typeof value === "number" && Number.isFinite(value);
const point = (value: unknown): value is Point =>
  object(value) && finite(value.x) && finite(value.y);
const optionalString = (value: unknown) =>
  value === undefined || typeof value === "string";

/** Validates persisted JSON at the owning boundary, preserving source strings and explicit missing media. */
export function parseDocument(input: unknown): Result<CanvasDocument> {
  let value = input;
  if (typeof input === "string") {
    try {
      value = JSON.parse(input);
    } catch (error) {
      return failure(
        "invalid-json",
        `画布 JSON 无法解析：${errorMessage(error)}`,
      );
    }
  }
  if (object(value) && value.version === 2) {
    try {
      value = expandMedia(value);
    } catch (error) {
      return failure("invalid-document", errorMessage(error));
    }
  }
  if (
    !object(value) ||
    value.version !== 1 ||
    !nonempty(value.id) ||
    typeof value.title !== "string"
  )
    return failure("invalid-document", "画布版本、ID 或标题无效。");
  if (!Array.isArray(value.nodes) || !Array.isArray(value.edges))
    return failure("invalid-document", "画布缺少 nodes 或 edges 数组。");
  if (
    !point(value.viewport) ||
    !object(value.viewport) ||
    !finite(value.viewport.zoom) ||
    value.viewport.zoom < MIN_ZOOM ||
    value.viewport.zoom > MAX_ZOOM
  )
    return failure(
      "invalid-document",
      `画布缩放必须介于 ${MIN_ZOOM} 和 ${MAX_ZOOM} 之间，坐标必须是有限数字。`,
    );
  if (!isGenerationSettings(value.settings))
    return failure("invalid-document", "画布生成设置无效。");

  const nodes: CanvasNode[] = [];
  if (value.hiddenNodes !== undefined && !Array.isArray(value.hiddenNodes))
    return failure("invalid-document", "隐藏来源格式无效。");
  const hiddenIds = new Set(
    (value.hiddenNodes as { id: string }[] | undefined)?.map(
      (node) => node?.id,
    ) ?? [],
  );
  const nodeIds = new Set<string>();
  for (const raw of [
    ...value.nodes,
    ...((value.hiddenNodes as unknown[]) ?? []),
  ]) {
    if (
      !object(raw) ||
      !nonempty(raw.id) ||
      !NODE_KINDS.includes(raw.type as CanvasNodeKind) ||
      !point(raw.position) ||
      !finite(raw.width) ||
      raw.width <= 0 ||
      !finite(raw.height) ||
      raw.height <= 0 ||
      (raw.locked !== undefined && typeof raw.locked !== "boolean") ||
      (raw.zIndex !== undefined && !Number.isSafeInteger(raw.zIndex)) ||
      (raw.parentId !== undefined && !nonempty(raw.parentId))
    )
      return failure(
        "invalid-document",
        "节点 ID、类型、坐标、大小或分组信息无效。",
      );
    if (nodeIds.has(raw.id))
      return failure("invalid-document", `节点 ID 重复：${raw.id}`);
    const parsedData = parseNodeData(raw.type as CanvasNodeKind, raw.data);
    if (!parsedData.ok)
      return failure("invalid-document", `节点 ${raw.id}：${parsedData.error}`);
    nodes.push({
      id: raw.id,
      type: raw.type as CanvasNodeKind,
      position: { ...raw.position },
      width: raw.width,
      height: raw.height,
      data: parsedData.value,
      ...(typeof raw.locked === "boolean" ? { locked: raw.locked } : {}),
      ...(typeof raw.zIndex === "number" ? { zIndex: raw.zIndex } : {}),
      ...(typeof raw.parentId === "string" ? { parentId: raw.parentId } : {}),
    });
    nodeIds.add(raw.id);
  }
  const byId = new Map(nodes.map((node) => [node.id, node]));
  const stackedIds = new Set<string>();
  for (const node of nodes) {
    if (node.type === "stack" && node.data.stack) {
      if (node.parentId)
        return failure("invalid-document", "堆叠必须位于画布根层级。");
      for (const id of node.data.stack.nodeIds) {
        const member = byId.get(id);
        if (
          !member ||
          member.parentId ||
          ![
            "image",
            "video",
            "audio",
            "text",
            "subject",
            "timeline",
            "external",
          ].includes(member.type) ||
          stackedIds.has(id)
        )
          return failure(
            "invalid-document",
            "堆叠成员必须是独立且未属于另一堆叠的可引用根节点。",
          );
        stackedIds.add(id);
      }
    }
    if (node.parentId && byId.get(node.parentId)?.type !== "group")
      return failure(
        "invalid-document",
        `节点 ${node.id} 的父节点不存在或不是分组。`,
      );
    const ancestors = new Set([node.id]);
    let parentId = node.parentId;
    while (parentId) {
      if (ancestors.has(parentId))
        return failure(
          "invalid-document",
          `节点 ${node.id} 的分组存在循环引用。`,
        );
      ancestors.add(parentId);
      parentId = byId.get(parentId)?.parentId;
    }
  }
  const edges: CanvasEdge[] = [];
  const edgeIds = new Set<string>();
  for (const raw of value.edges) {
    if (
      !object(raw) ||
      !nonempty(raw.id) ||
      typeof raw.source !== "string" ||
      typeof raw.target !== "string" ||
      !nodeIds.has(raw.source) ||
      !nodeIds.has(raw.target) ||
      (raw.intent !== undefined &&
        raw.intent !== "generation_input" &&
        raw.intent !== "assembly_input" &&
        raw.intent !== "post_edit_result") ||
      (raw.intent === "assembly_input" && !nonempty(raw.assemblySlotId)) ||
      (raw.sourceHandle !== null && !optionalString(raw.sourceHandle)) ||
      (raw.targetHandle !== null && !optionalString(raw.targetHandle))
    )
      return failure("invalid-document", "连线格式无效或引用了不存在的节点。");
    if (edgeIds.has(raw.id))
      return failure("invalid-document", `连线 ID 重复：${raw.id}`);
    edges.push({
      id: raw.id,
      source: raw.source,
      target: raw.target,
      ...(raw.intent === "assembly_input"
        ? { assemblySlotId: raw.assemblySlotId as string }
        : {}),
      ...(raw.intent !== undefined
        ? { intent: raw.intent as CanvasEdge["intent"] }
        : {}),
      ...(raw.referenceBinding === "pinned" ||
      raw.referenceBinding === "follow_current"
        ? { referenceBinding: raw.referenceBinding }
        : {}),
      ...(raw.sourceHandle !== undefined
        ? { sourceHandle: raw.sourceHandle as string | null }
        : {}),
      ...(raw.targetHandle !== undefined
        ? { targetHandle: raw.targetHandle as string | null }
        : {}),
    });
    edgeIds.add(raw.id);
  }
  for (const node of nodes) {
    for (const key of ["firstFrameNodeId", "lastFrameNodeId"] as const) {
      const id = node.data.settings?.[key];
      if (
        id !== undefined &&
        (!nodeIds.has(id) ||
          !edges.some(
            (edge) =>
              edge.intent !== "post_edit_result" &&
              edge.source === id &&
              edge.target === node.id,
          ))
      )
        return failure("invalid-document", "视频首尾帧必须引用已连接的节点。");
    }
    if (
      node.data.taskDraft &&
      (node.data.taskDraft.sourceNodeIds.some((id) => !nodeIds.has(id)) ||
        (node.data.taskDraft.selection &&
          !nodeIds.has(node.data.taskDraft.selection.sourceNodeId)))
    )
      return failure("invalid-document", "工具草稿引用了不存在的节点。");
  }
  for (const key of ["firstFrameNodeId", "lastFrameNodeId"] as const)
    if (value.settings[key] !== undefined && !nodeIds.has(value.settings[key]!))
      return failure("invalid-document", "项目设置引用了不存在的首尾帧。");
  return {
    ok: true,
    value: {
      version: 1,
      id: value.id,
      title: value.title,
      nodes: nodes.filter((node) => !hiddenIds.has(node.id)),
      ...(hiddenIds.size
        ? { hiddenNodes: nodes.filter((node) => hiddenIds.has(node.id)) }
        : {}),
      edges,
      viewport: {
        x: value.viewport.x,
        y: value.viewport.y,
        zoom: value.viewport.zoom,
      },
      settings: copyGenerationSettings(value.settings),
    },
  };
}

function persistentDocument(document: CanvasDocument): Result<CanvasDocument> {
  const parsed = parseDocument(document);
  if (!parsed.ok) return parsed;
  const transient = [
    ...parsed.value.nodes,
    ...(parsed.value.hiddenNodes ?? []),
  ].find(
    (node) =>
      node.data.src?.startsWith("blob:") ||
      node.data.imageCrop?.src.startsWith("blob:") ||
      nodeResources(node.data).some((resource) =>
        resource.src?.startsWith("blob:"),
      ) ||
      node.data.layers?.layers.some(
        (layer) =>
          layer.content.kind === "image" &&
          layer.content.src.startsWith("blob:"),
      ),
  );
  return transient
    ? failure(
        "transient-media",
        `素材「${transient.data.title}」仍使用临时 blob URL。请转换为 data URL 后保存，避免刷新后丢失素材。`,
      )
    : parsed;
}

export function serializeDocument(document: CanvasDocument): Result<string> {
  const parsed = persistentDocument(document);
  if (!parsed.ok) return parsed;
  try {
    return {
      ok: true,
      value: JSON.stringify(compactMedia(parsed.value), null, 2),
    };
  } catch (error) {
    return failure(
      "storage",
      `画布无法序列化，请减少项目内媒体或拆分项目：${errorMessage(error)}`,
    );
  }
}

function errorMessage(error: unknown): string {
  return error instanceof Error || error instanceof DOMException
    ? error.message
    : String(error ?? "未知错误");
}
