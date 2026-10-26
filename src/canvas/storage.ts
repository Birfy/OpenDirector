import { MAX_ZOOM, MIN_ZOOM } from "./model.ts";
import type {
  CanvasDocument,
  CanvasEdge,
  CanvasNode,
  CanvasNodeData,
  CanvasNodeKind,
  GenerationSettings,
  Point,
} from "./model.ts";

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
export interface DocumentSummary {
  id: string;
  title: string;
  updatedAt: number;
  nodeCount: number;
}
export interface StorageOptions {
  indexedDB?: IDBFactory;
  databaseName?: string;
}
interface StoredDocument {
  id: string;
  document: CanvasDocument;
  updatedAt: number;
}

const NODE_KINDS: CanvasNodeKind[] = [
  "image",
  "video",
  "audio",
  "file",
  "text",
  "group",
];
const DB_NAME = "museshow-canvas";
const STORE_NAME = "documents";
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

function settings(value: unknown): value is GenerationSettings {
  return (
    object(value) &&
    typeof value.mode === "string" &&
    ["image", "video", "audio"].includes(value.mode) &&
    typeof value.model === "string" &&
    typeof value.aspectRatio === "string" &&
    finite(value.durationSeconds) &&
    value.durationSeconds > 0 &&
    typeof value.resolution === "string" &&
    typeof value.prompt === "string" &&
    (value.count === undefined ||
      (Number.isInteger(value.count) &&
        Number(value.count) >= 1 &&
        Number(value.count) <= 8)) &&
    optionalString(value.camera) &&
    optionalString(value.palette) &&
    optionalString(value.style) &&
    (value.audioEnabled === undefined ||
      typeof value.audioEnabled === "boolean")
  );
}

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
  if (!settings(value.settings))
    return failure("invalid-document", "画布生成设置无效。");

  const nodes: CanvasNode[] = [];
  const nodeIds = new Set<string>();
  for (const raw of value.nodes) {
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
    const data = raw.data;
    if (
      !object(data) ||
      data.kind !== raw.type ||
      typeof data.title !== "string" ||
      typeof data.prompt !== "string" ||
      !optionalString(data.src) ||
      !optionalString(data.mimeType) ||
      !optionalString(data.text) ||
      (data.assetState !== undefined &&
        data.assetState !== "ready" &&
        data.assetState !== "missing") ||
      (data.settings !== undefined && !settings(data.settings))
    )
      return failure("invalid-document", `节点 ${raw.id} 的内容无效。`);
    const cleanData: CanvasNodeData = {
      kind: raw.type as CanvasNodeKind,
      title: data.title,
      prompt: data.prompt,
    };
    for (const key of ["src", "mimeType", "text"] as const)
      if (typeof data[key] === "string") cleanData[key] = data[key];
    if (data.assetState) cleanData.assetState = data.assetState;
    if (data.settings)
      cleanData.settings = {
        ...(data.settings as unknown as GenerationSettings),
      };
    nodes.push({
      id: raw.id,
      type: raw.type as CanvasNodeKind,
      position: { ...raw.position },
      width: raw.width,
      height: raw.height,
      data: cleanData,
      ...(typeof raw.locked === "boolean" ? { locked: raw.locked } : {}),
      ...(typeof raw.zIndex === "number" ? { zIndex: raw.zIndex } : {}),
      ...(typeof raw.parentId === "string" ? { parentId: raw.parentId } : {}),
    });
    nodeIds.add(raw.id);
  }
  const byId = new Map(nodes.map((node) => [node.id, node]));
  for (const node of nodes) {
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
      ...(raw.sourceHandle !== undefined
        ? { sourceHandle: raw.sourceHandle as string | null }
        : {}),
      ...(raw.targetHandle !== undefined
        ? { targetHandle: raw.targetHandle as string | null }
        : {}),
    });
    edgeIds.add(raw.id);
  }
  return {
    ok: true,
    value: {
      version: 1,
      id: value.id,
      title: value.title,
      nodes,
      edges,
      viewport: {
        x: value.viewport.x,
        y: value.viewport.y,
        zoom: value.viewport.zoom,
      },
      settings: { ...value.settings },
    },
  };
}

function persistentDocument(document: CanvasDocument): Result<CanvasDocument> {
  const parsed = parseDocument(document);
  if (!parsed.ok) return parsed;
  const transient = parsed.value.nodes.find((node) =>
    node.data.src?.startsWith("blob:"),
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
  return parsed.ok
    ? { ok: true, value: JSON.stringify(parsed.value, null, 2) }
    : parsed;
}

/** IndexedDB owns the document and embedded data URLs; errors are reported for the UI to display. */
export async function saveDocument(
  document: CanvasDocument,
  options: StorageOptions = {},
): Promise<Result<DocumentSummary>> {
  const parsed = persistentDocument(document);
  if (!parsed.ok) return parsed;
  const updatedAt = Date.now();
  const stored: StoredDocument = {
    id: parsed.value.id,
    document: parsed.value,
    updatedAt,
  };
  const written = await requestStore(
    "readwrite",
    (store) => store.put(stored),
    options,
  );
  return written.ok
    ? {
        ok: true,
        value: {
          id: stored.id,
          title: stored.document.title,
          updatedAt,
          nodeCount: stored.document.nodes.length,
        },
      }
    : written;
}

/** An absent document is a normal first-use state, represented by successful null. */
export async function loadDocument(
  id: string,
  options: StorageOptions = {},
): Promise<Result<CanvasDocument | null>> {
  const read = await requestStore<unknown>(
    "readonly",
    (store) => store.get(id),
    options,
  );
  if (!read.ok) return read;
  if (read.value === undefined) return { ok: true, value: null };
  if (!object(read.value))
    return failure("invalid-document", "本地画布记录无效。");
  const parsed = parseDocument(read.value.document);
  if (parsed.ok && parsed.value.id !== id)
    return failure("invalid-document", "本地画布 ID 与存储键不一致。");
  return parsed;
}

export async function listDocuments(
  options: StorageOptions = {},
): Promise<Result<DocumentSummary[]>> {
  const read = await requestStore<unknown[]>(
    "readonly",
    (store) => store.getAll(),
    options,
  );
  if (!read.ok) return read;
  const summaries: DocumentSummary[] = [];
  for (const item of read.value) {
    if (
      !object(item) ||
      !nonempty(item.id) ||
      !finite(item.updatedAt) ||
      !object(item.document) ||
      typeof item.document.title !== "string" ||
      !Array.isArray(item.document.nodes)
    )
      return failure("invalid-document", "本地画布列表含有无效记录。");
    summaries.push({
      id: item.id,
      title: item.document.title,
      updatedAt: item.updatedAt,
      nodeCount: item.document.nodes.length,
    });
  }
  return {
    ok: true,
    value: summaries.sort((a, b) => b.updatedAt - a.updatedAt),
  };
}

export async function deleteDocument(
  id: string,
  options: StorageOptions = {},
): Promise<Result<void>> {
  const deleted = await requestStore(
    "readwrite",
    (store) => store.delete(id),
    options,
  );
  return deleted.ok ? { ok: true, value: undefined } : deleted;
}

function openDatabase(options: StorageOptions): Promise<Result<IDBDatabase>> {
  const factory = options.indexedDB ?? globalThis.indexedDB;
  if (!factory)
    return Promise.resolve(
      failure(
        "unavailable",
        "当前环境不支持 IndexedDB，无法在浏览器中保存画布。",
      ),
    );
  return new Promise((resolve) => {
    let settled = false;
    const finish = (result: Result<IDBDatabase>) => {
      if (settled) {
        if (result.ok) result.value.close();
        return;
      }
      settled = true;
      resolve(result);
    };
    let request: IDBOpenDBRequest;
    try {
      request = factory.open(options.databaseName ?? DB_NAME, 1);
    } catch (error) {
      finish(failure("storage", `无法打开本地画布库：${errorMessage(error)}`));
      return;
    }
    request.onupgradeneeded = () => {
      if (settled) {
        request.transaction?.abort();
        return;
      }
      if (!request.result.objectStoreNames.contains(STORE_NAME))
        request.result.createObjectStore(STORE_NAME, { keyPath: "id" });
    };
    request.onsuccess = () => {
      request.result.onversionchange = () => request.result.close();
      finish({ ok: true, value: request.result });
    };
    request.onerror = () =>
      finish(
        failure(
          "storage",
          `无法打开本地画布库：${errorMessage(request.error)}`,
        ),
      );
    request.onblocked = () =>
      finish(
        failure(
          "blocked",
          "另一个页面正在使用旧版画布库。请关闭该页面后重试保存。",
        ),
      );
  });
}

async function requestStore<T>(
  mode: IDBTransactionMode,
  operation: (store: IDBObjectStore) => IDBRequest<T>,
  options: StorageOptions,
): Promise<Result<T>> {
  const opened = await openDatabase(options);
  if (!opened.ok) return opened;
  const database = opened.value;
  try {
    return await new Promise<Result<T>>((resolve) => {
      let transaction: IDBTransaction;
      let request: IDBRequest<T>;
      try {
        transaction = database.transaction(STORE_NAME, mode);
        request = operation(transaction.objectStore(STORE_NAME));
      } catch (error) {
        resolve(failure("storage", `无法读写本地画布：${errorMessage(error)}`));
        return;
      }
      let value: T;
      request.onsuccess = () => {
        value = request.result;
      };
      // A successful request is not yet a successful write: wait for transaction completion.
      transaction.oncomplete = () => resolve({ ok: true, value });
      transaction.onabort = () =>
        resolve(
          failure(
            "storage",
            `本地画布操作未完成：${errorMessage(transaction.error ?? request.error)}`,
          ),
        );
      transaction.onerror = () =>
        resolve(
          failure(
            "storage",
            `本地画布读写失败：${errorMessage(transaction.error ?? request.error)}`,
          ),
        );
    });
  } finally {
    database.close();
  }
}

function errorMessage(error: unknown): string {
  return error instanceof Error || error instanceof DOMException
    ? error.message
    : String(error ?? "未知错误");
}
