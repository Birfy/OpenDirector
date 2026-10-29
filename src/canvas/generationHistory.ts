import { isGenerationSettings } from "./dataBoundary.ts";
import type { CanvasDocument, GenerationSettings } from "./model.ts";
import {
  appendServiceResults,
  applyGenerationResults,
  type GenerationResultMode,
  type ResultSource,
  type ServiceResult,
} from "./linkedResults.ts";

export interface GenerationJob {
  id: string;
  nodeId: string;
  title: string;
  status:
    | "draft"
    | "imported"
    | "running"
    | "succeeded"
    | "failed"
    | "cancelled"
    | "interrupted";
  time: string;
  createdAt?: number;
  message?: string;
  taskId?: string;
  serviceTask?: {
    protocol?: string | null;
    externalTaskId?: string | null;
    recovery?: string | null;
    resumeAllowed?: boolean;
  };
  /** Frozen placement owner, retained so a reopened canvas fills the same node. */
  resultSource?: ResultSource;
  resultMode?: GenerationResultMode;
  request?: {
    kind: "image" | "video" | "audio";
    title: string;
    prompt: string;
    settings: GenerationSettings;
  };
  outputs?: ServiceResult[];
}
interface StoredJob {
  id: string;
  documentId: string;
  job: GenerationJob;
}

export function parseGenerationJob(value: unknown): GenerationJob {
  if (!value || typeof value !== "object")
    throw new Error("生成历史格式无效。");
  const raw = value as GenerationJob;
  if (
    ![raw.id, raw.nodeId, raw.title, raw.time].every(
      (v) => typeof v === "string",
    ) ||
    ![
      "draft",
      "imported",
      "running",
      "succeeded",
      "failed",
      "cancelled",
      "interrupted",
    ].includes(raw.status) ||
    (raw.createdAt !== undefined && !Number.isFinite(raw.createdAt)) ||
    [raw.message, raw.taskId].some(
      (v) => v !== undefined && typeof v !== "string",
    )
  )
    throw new Error("生成历史字段无效。");
  if (
    raw.serviceTask !== undefined &&
    (!raw.serviceTask ||
      typeof raw.serviceTask !== "object" ||
      [
        raw.serviceTask.protocol,
        raw.serviceTask.externalTaskId,
        raw.serviceTask.recovery,
      ].some((v) => v != null && typeof v !== "string") ||
      (raw.serviceTask.resumeAllowed !== undefined &&
        typeof raw.serviceTask.resumeAllowed !== "boolean"))
  )
    throw new Error("历史任务恢复信息无效。");
  if (
    (raw.resultMode !== undefined &&
      !["replace", "additional"].includes(raw.resultMode)) ||
    (raw.resultSource !== undefined &&
      (!raw.resultSource ||
        typeof raw.resultSource.documentId !== "string" ||
        raw.resultSource.nodeId !== raw.nodeId ||
        !["image", "video", "audio"].includes(raw.resultSource.kind) ||
        (raw.resultSource.src !== undefined &&
          typeof raw.resultSource.src !== "string")))
  )
    throw new Error("生成历史的结果归属无效。");
  if (
    raw.request &&
    (!isGenerationSettings(raw.request.settings) ||
      !["image", "video", "audio"].includes(raw.request.kind) ||
      typeof raw.request.title !== "string" ||
      typeof raw.request.prompt !== "string")
  )
    throw new Error("历史请求无效。");
  if (
    raw.outputs &&
    (!Array.isArray(raw.outputs) ||
      raw.outputs.some(
        (item) =>
          !item ||
          typeof item.title !== "string" ||
          (item.kind === "text"
            ? typeof item.text !== "string"
            : !["image", "video", "audio"].includes(item.kind) ||
              typeof item.src !== "string" ||
              item.src.startsWith("blob:")),
      ))
  )
    throw new Error("历史结果缺少可保存的素材。");
  return structuredClone(raw);
}

async function historyStore<T>(
  mode: IDBTransactionMode,
  operation: (store: IDBObjectStore) => IDBRequest<T>,
): Promise<T> {
  if (!globalThis.indexedDB) throw new Error("当前环境无法保存生成历史。");
  const db = await new Promise<IDBDatabase>((resolve, reject) => {
    let blocked = false;
    const request = indexedDB.open("opendesign-generation-history", 2);
    request.onupgradeneeded = () => {
      if (blocked) {
        request.transaction?.abort();
        return;
      }
      const store = request.result.objectStoreNames.contains("jobs")
        ? request.transaction!.objectStore("jobs")
        : request.result.createObjectStore("jobs", { keyPath: "id" });
      if (!store.indexNames.contains("documentId"))
        store.createIndex("documentId", "documentId");
    };
    request.onsuccess = () => {
      if (blocked) {
        request.result.close();
        return;
      }
      request.result.onversionchange = () => request.result.close();
      resolve(request.result);
    };
    request.onerror = () => reject(request.error);
    request.onblocked = () => {
      blocked = true;
      reject(new Error("生成历史数据库被旧页面占用。"));
    };
  });
  try {
    return await new Promise<T>((resolve, reject) => {
      const tx = db.transaction("jobs", mode);
      const request = operation(tx.objectStore("jobs"));
      let result: T;
      request.onsuccess = () => {
        result = request.result;
      };
      tx.oncomplete = () => resolve(result);
      tx.onabort = tx.onerror = () =>
        reject(tx.error ?? request.error ?? new Error("生成历史保存失败。"));
    });
  } finally {
    db.close();
  }
}

export async function loadGenerationJobs(
  documentId: string,
): Promise<GenerationJob[]> {
  const records = await historyStore<StoredJob[]>("readonly", (store) =>
    store.index("documentId").getAll(documentId),
  );
  const jobs: GenerationJob[] = [];
  for (const entry of records) {
    if (entry.documentId !== documentId) continue;
    try {
      const job = parseGenerationJob(entry.job);
      jobs.push(
        job.status === "running"
          ? {
              ...job,
              status: "interrupted" as const,
              message: "上次会话未完成，可同步本地服务结果。",
            }
          : job,
      );
    } catch {
      // A single damaged record must not take down the whole history view.
    }
  }
  return jobs.sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0));
}

let writes: Promise<unknown> = Promise.resolve();
export function saveGenerationJob(
  documentId: string,
  job: GenerationJob,
): Promise<unknown> {
  const record = {
    id: `${documentId}:${job.id}`,
    documentId,
    job: parseGenerationJob(job),
  };
  const operation = writes
    .catch(() => {})
    .then(() => historyStore("readwrite", (store) => store.put(record)));
  writes = operation;
  return operation;
}

/** A persisted interrupted run is reconciled without creating jobs for unrelated server tasks. */
export function reconcileGenerationJobs(
  jobs: GenerationJob[],
  tasks: ({
    id: string;
    status: string;
    error: string | null;
  } & GenerationJob["serviceTask"])[],
): GenerationJob[] {
  const byId = new Map(tasks.map((task) => [task.id, task]));
  return jobs.map((job) => {
    const task = job.taskId ? byId.get(job.taskId) : undefined;
    if (!task) return job;
    const serviceTask = {
      protocol: task.protocol,
      externalTaskId: task.externalTaskId,
      recovery: task.recovery,
      resumeAllowed: task.resumeAllowed,
    };
    const updated =
      JSON.stringify(job.serviceTask) === JSON.stringify(serviceTask)
        ? job
        : { ...job, serviceTask };
    if (
      ["queued", "running"].includes(task.status) &&
      !job.outputs?.length &&
      job.status !== "succeeded"
    ) {
      const message =
        task.status === "queued"
          ? "等待同一服务的前序任务完成。"
          : "正在查询原任务进度。";
      return { ...updated, status: "running", message };
    }
    if (!["failed", "cancelled", "interrupted"].includes(task.status))
      return updated;
    const status = task.status as "failed" | "cancelled" | "interrupted";
    const message =
      task.error ||
      (status === "cancelled"
        ? "任务已取消。"
        : status === "interrupted"
          ? "服务任务已中断。"
          : "生成失败，请检查服务日志。");
    return job.status === status && job.message === message
      ? updated
      : { ...updated, status, message };
  });
}

/** These actions continue or stop existing jobs; they never repeat submission. */
export function generationTaskActions(job: GenerationJob) {
  const remote =
    !!job.taskId &&
    ["interrupted", "failed"].includes(job.status) &&
    job.serviceTask?.protocol === "vllm_omni" &&
    !!job.serviceTask.externalTaskId;
  return {
    recover:
      remote &&
      job.serviceTask?.resumeAllowed === true &&
      ["remote", "download", "local"].includes(job.serviceTask.recovery ?? ""),
    cancel: remote && job.serviceTask?.recovery === "remote",
  };
}

/** Current in-memory changes win over a persisted snapshot read earlier. */
export function mergeGenerationJobs(
  saved: readonly GenerationJob[],
  current: readonly GenerationJob[],
): GenerationJob[] {
  return [
    ...new Map([...saved, ...current].map((job) => [job.id, job])).values(),
  ].sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0));
}

/** Live completion and recovery share the same ownership and replacement policy. */
export function applyRecoveredGenerationResults(
  document: CanvasDocument,
  outputs: readonly { taskId: string; output: ServiceResult }[],
  jobs: readonly GenerationJob[],
) {
  const byTask = new Map(
    jobs.filter((job) => job.taskId).map((job) => [job.taskId!, job]),
  );
  let next = document;
  const placements = outputs.map(({ taskId, output }) => {
    const job = byTask.get(taskId);
    const result: { document: CanvasDocument; ids: string[]; error?: string } =
      job?.resultSource
        ? output.kind === "text"
          ? {
              document: next,
              ids: [],
              error: "媒体节点收到文本结果，结果未写入画布。",
            }
          : applyGenerationResults(
              next,
              job.resultSource,
              [output],
              job.resultMode,
            )
        : appendServiceResults(next, [output]);
    next = result.document;
    return {
      taskId,
      output,
      ids: result.ids,
      error: result.error,
    };
  });
  return {
    document: next,
    placements,
    ids: placements.flatMap((entry) => entry.ids),
  };
}
