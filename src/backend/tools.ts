import { useCallback, useEffect, useState } from "react";
import { ApiError, assetBlob, errorMessage, json, request } from "./api.ts";
import {
  abortable,
  readDelay,
  resilientRead,
  transientReadFailure,
  type ReadOptions,
} from "./resilientRead.ts";
import {
  EXTENSIONS,
  fileName,
  fingerprint,
  type BackendAsset,
} from "./generation.ts";
import { openBackendProject } from "./projects.ts";
import { creationClient, creationEnabled } from "./creationClient.ts";
import { CANVAS_TOOLS } from "../canvas/toolCatalog.ts";
import { readEditorResource } from "../canvas/editorMedia.ts";
import type { GenerationJob } from "../canvas/generationHistory.ts";
import type { LinkedMediaResult } from "../canvas/linkedResults.ts";
import type {
  CanvasToolId,
  ToolCapabilities,
  ToolField,
  ToolParameters,
} from "../canvas/toolCatalog.ts";

/** Canvas AI tools run by the local API. The service maps each tool to model
 * capabilities, so the canvas never names a model or protocol here. */

export interface ToolCatalogEntry {
  id: CanvasToolId;
  available: boolean;
  reason?: string;
  note: string;
  parametersConfirmed: boolean;
  fields: ToolField[];
  requires: { capability: string; label: string }[];
  models: Record<string, { id: string; label: string }[]>;
}

export interface ToolTaskOutput {
  id: string;
  canvasItemId: string;
  kind: "image" | "video" | "audio";
  name: string;
  type: string;
  title: string;
  width?: number | null;
  height?: number | null;
  durationMs?: number | null;
}

export interface ToolTask {
  id: string;
  tool: CanvasToolId;
  status:
    | "queued"
    | "running"
    | "succeeded"
    | "failed"
    | "cancelled"
    | "interrupted";
  phase: string | null;
  error: string | null;
  outputs: ToolTaskOutput[];
  createdAt?: string;
  finishedAt?: string | null;
  canvas?: ToolCanvasOrigin | null;
  sourceFingerprint?: string;
  sourceKind?: "image" | "video" | "audio";
  placement?: "pending" | "placed" | "unplaced";
  parameters?: ToolParameters;
}

export interface ToolCanvasOrigin {
  nodeId: string;
  sourceNodeIds: string[];
  targetNodeId?: string;
  targetKind?: "image" | "video" | "audio";
  targetTitle?: string;
}

export interface ToolSourceInput {
  kind: "image" | "video" | "audio";
  title: string;
  src: string;
}

export interface ToolRequest {
  id: string;
  canvas: ToolCanvasOrigin;
  documentId: string;
  documentTitle: string;
  tool: CanvasToolId;
  sources: readonly ToolSourceInput[];
  parameters: ToolParameters;
  maskDataUrl?: string;
  annotatedDataUrl?: string;
  modelConfigIds?: Record<string, string>;
  boxes?: readonly { x: number; y: number; width: number; height: number }[];
}

/** Availability and service-supplied options for every tool, refreshed with the model list. */
export function useToolCatalog(connected: boolean, revision: unknown) {
  const [tools, setTools] = useState<ToolCatalogEntry[]>([]);
  const [error, setError] = useState("");
  const [selectionPreview, setSelectionPreview] = useState<{
    available: boolean;
    reason?: string;
  }>({ available: false });
  const refresh = useCallback(async () => {
    try {
      const value = await request<{
        tools: ToolCatalogEntry[];
        selectionPreview?: { available: boolean; reason?: string };
      }>("/tools");
      setTools(value.tools);
      setSelectionPreview(value.selectionPreview ?? { available: false });
      setError("");
    } catch (failure) {
      setTools([]);
      setSelectionPreview({ available: false });
      setError(errorMessage(failure));
    }
  }, []);
  useEffect(() => {
    if (connected) void refresh();
    else {
      setTools([]);
      setSelectionPreview({ available: false });
    }
  }, [connected, revision, refresh]);
  const capabilities: ToolCapabilities = Object.fromEntries(
    tools.map((entry) => [
      entry.id,
      {
        available: entry.available,
        reason: entry.reason,
        fields: entry.fields,
        models: entry.models,
        parametersConfirmed: entry.parametersConfirmed,
      },
    ]),
  );
  return { tools, capabilities, selectionPreview, error, refresh };
}

/** Sources and masks become project assets once; identical files are reused. */
export async function uploadAsset(
  projectId: string,
  known: BackendAsset[],
  blob: Blob,
  title: string,
  signal: AbortSignal,
) {
  const print = await fingerprint(blob);
  if (creationEnabled()) {
    const client = creationClient(projectId);
    const existing = client.snapshot.assets.find(
      (asset) => asset.fingerprint === print,
    );
    return (
      existing?.id ??
      (
        await client.importBlob(
          blob,
          fileName(title, EXTENSIONS[blob.type] ?? "png"),
          blob.type.startsWith("video/")
            ? "video"
            : blob.type.startsWith("audio/")
              ? "audio"
              : "image",
        )
      ).assetId
    );
  }
  const existing = known.find(
    (asset) =>
      asset.fingerprint === print || asset.fingerprintAliases?.includes(print),
  );
  if (existing) return existing.id;
  const type = blob.type.split(";")[0] ?? "";
  const asset = await request<BackendAsset>(
    `/projects/${projectId}/assets/${crypto.randomUUID()}`,
    {
      method: "PUT",
      signal,
      headers: {
        "X-Asset-Name": encodeURIComponent(
          fileName(title, EXTENSIONS[type] ?? type.split("/")[1] ?? "bin"),
        ),
        "Content-Type": "application/octet-stream",
      },
      body: blob,
    },
  );
  known.push(asset);
  return asset.id;
}

export class ToolSubmissionError extends Error {
  uncertain: boolean;
  constructor(message: string, uncertain: boolean) {
    super(message);
    this.uncertain = uncertain;
  }
}

export async function submitToolTask(value: ToolRequest, signal: AbortSignal) {
  let attempted = false;
  try {
    const projectId = await openBackendProject(
      value.documentId,
      value.documentTitle,
    );
    const known = creationEnabled()
      ? []
      : await request<BackendAsset[]>(`/projects/${projectId}/assets`, {
          signal,
        });
    const sourceAssetIds: string[] = [];
    for (const source of value.sources) {
      signal.throwIfAborted();
      const blob = await (await fetch(source.src, { signal })).blob();
      sourceAssetIds.push(
        await uploadAsset(projectId, known, blob, source.title, signal),
      );
    }
    const maskAssetId = value.maskDataUrl
      ? await uploadAsset(
          projectId,
          known,
          await (await fetch(value.maskDataUrl, { signal })).blob(),
          "选区",
          signal,
        )
      : undefined;
    const annotationAssetId = value.annotatedDataUrl
      ? await uploadAsset(
          projectId,
          known,
          await (await fetch(value.annotatedDataUrl, { signal })).blob(),
          "改图标注",
          signal,
        )
      : undefined;
    signal.throwIfAborted();
    attempted = true;
    const task = await request<ToolTask>(
      toolTaskPath(projectId),
      json("POST", {
        id: value.id,
        canvas: value.canvas,
        tool: value.tool,
        sourceAssetIds,
        ...(maskAssetId ? { maskAssetId } : {}),
        ...(annotationAssetId ? { annotationAssetId } : {}),
        ...(value.modelConfigIds
          ? { modelConfigIds: value.modelConfigIds }
          : {}),
        boxes: value.boxes ?? [],
        parameters: value.parameters,
      }),
    );
    if (signal.aborted) {
      // Acceptance may race a click on Cancel. Once the identity is known,
      // cancel the accepted task too; aborting a browser request is not enough.
      await cancelToolTask(projectId, task.id);
      attempted = false; // Cancellation was confirmed by the service.
      signal.throwIfAborted();
    }
    return { projectId, taskId: task.id };
  } catch (failure) {
    const rejected =
      failure instanceof ApiError &&
      failure.status !== null &&
      failure.status >= 400 &&
      failure.status < 500;
    throw new ToolSubmissionError(
      errorMessage(failure),
      attempted && !rejected,
    );
  }
}

export const toolTaskPath = (projectId: string) =>
  `${creationEnabled() ? "/creation" : ""}/projects/${projectId}/tool-tasks`;

export const getToolTask = (
  projectId: string,
  taskId: string,
  signal?: AbortSignal,
) => request<ToolTask>(`${toolTaskPath(projectId)}/${taskId}`, { signal });

export const acknowledgeToolPlacement = (
  projectId: string,
  taskId: string,
  state: "placed" | "unplaced",
) =>
  request<ToolTask>(
    `${toolTaskPath(projectId)}/${taskId}/placement`,
    json("POST", { state }),
  );

export function cancelToolTask(projectId: string, taskId: string) {
  return request<ToolTask>(`${toolTaskPath(projectId)}/${taskId}/cancel`, {
    method: "POST",
  });
}

export interface ToolReadOptions {
  signal?: AbortSignal;
  timeouts?: { status: number; download: number };
  retryDelayMs?: number;
}

const TIMEOUTS = { status: 15_000, download: 120_000 };
const downloadOptions = (options: ToolReadOptions): ReadOptions => ({
  signal: options.signal,
  timeoutMs: (options.timeouts ?? TIMEOUTS).download,
  attempts: 3,
  retryDelayMs: options.retryDelayMs,
});

/** Polls until the task ends; resolves with downloadable result files. */
export async function waitForToolTask(
  projectId: string,
  taskId: string,
  signal: AbortSignal,
  onProgress?: (task: ToolTask) => void,
  timeouts = TIMEOUTS,
) {
  for (;;) {
    const task = await resilientRead(
      (attempt) => getToolTask(projectId, taskId, attempt),
      { signal, timeoutMs: timeouts.status },
    );
    onProgress?.(task);
    if (task.status === "succeeded")
      return Promise.all(
        task.outputs.map(async (output) => ({
          output,
          file: new File(
            [
              await toolBlob(
                projectId,
                output.id,
                downloadOptions({ signal, timeouts }),
              ),
            ],
            output.name,
            { type: output.type },
          ),
        })),
      );
    if (!["queued", "running"].includes(task.status))
      throw new Error(
        task.error ??
          (task.status === "cancelled" ? "任务已取消。" : "工具任务未完成。"),
      );
    await readDelay(2000, signal);
  }
}

function toolBlob(projectId: string, assetId: string, options: ReadOptions) {
  return creationEnabled()
    ? creationClient(projectId).blob(assetId, options)
    : resilientRead((signal) => assetBlob(projectId, assetId, signal), options);
}

const outputCache = new Map<string, Promise<LinkedMediaResult>>();
async function toolOutput(
  projectId: string,
  output: ToolTaskOutput,
  options: ToolReadOptions,
) {
  options.signal?.throwIfAborted();
  if (creationEnabled())
    return {
      kind: output.kind,
      title: output.title,
      src: await creationClient(projectId).mediaUrl(
        output.id,
        downloadOptions(options),
      ),
      mimeType: output.type,
      media: {
        width: output.width ?? undefined,
        height: output.height ?? undefined,
        durationSeconds: output.durationMs
          ? output.durationMs / 1000
          : undefined,
      },
    };
  const key = `${creationEnabled()}:${projectId}:${output.id}`;
  let pending = outputCache.get(key);
  if (!pending) {
    pending = (async () => {
      // Share a bounded download, not a consumer's cancellation lifetime.
      const blob = await toolBlob(projectId, output.id, {
        ...downloadOptions(options),
        signal: undefined,
      });
      const resource = await readEditorResource(
        new File([blob], output.name, { type: output.type }),
      );
      return {
        kind: output.kind,
        title: output.title,
        src: resource.src!,
        mimeType: output.type,
        media: {
          width: output.width ?? undefined,
          height: output.height ?? undefined,
          durationSeconds: output.durationMs
            ? output.durationMs / 1000
            : undefined,
        },
      };
    })().catch((error) => {
      outputCache.delete(key);
      throw error;
    });
    outputCache.set(key, pending);
    if (outputCache.size > 128)
      outputCache.delete(outputCache.keys().next().value!);
  }
  return abortable(pending, options.signal);
}

/** Tool execution lives on the service in both workspace modes. Browser job
 * records are used only to recover ownership of tasks from older clients. */
export async function toolHistoryJobs(
  projectId: string,
  previous: readonly GenerationJob[] = [],
  options: ToolReadOptions = {},
) {
  const { tasks } = await resilientRead(
    (signal) =>
      request<{ tasks: ToolTask[] }>(toolTaskPath(projectId), { signal }),
    {
      signal: options.signal,
      timeoutMs: (options.timeouts ?? TIMEOUTS).status,
      retryDelayMs: options.retryDelayMs,
    },
  );
  return Promise.all(
    tasks.map(async (task) => {
      const old = previous.find((job) => job.tool && job.taskId === task.id);
      const canvas: ToolCanvasOrigin | undefined =
        task.canvas ??
        (old?.tool
          ? { nodeId: old.nodeId, sourceNodeIds: old.tool.sourceNodeIds }
          : undefined);
      const definition = CANVAS_TOOLS.find((tool) => tool.id === task.tool);
      let outputs: LinkedMediaResult[] = [];
      let unavailable = false;
      let outputFailure: unknown;
      try {
        outputs = await Promise.all(
          task.outputs.map((output) => toolOutput(projectId, output, options)),
        );
      } catch (failure) {
        if (options.signal?.aborted) throw failure;
        unavailable = true;
        outputFailure = failure;
      }
      const job = {
        id: task.id,
        taskId: task.id,
        nodeId: canvas?.nodeId ?? task.id,
        targetNodeId: canvas?.targetNodeId,
        targetKind: canvas?.targetKind,
        targetTitle: canvas?.targetTitle,
        title: definition?.title ?? task.tool,
        time: "",
        createdAt: task.createdAt ? Date.parse(task.createdAt) : old?.createdAt,
        finishedAt: task.finishedAt ? Date.parse(task.finishedAt) : undefined,
        durationKey: `tool:${task.tool}`,
        status: task.status === "queued" ? "running" : task.status,
        message:
          task.error ??
          (unavailable
            ? transientReadFailure(outputFailure)
              ? "结果读取暂时失败，将自动重试。"
              : outputFailure instanceof ApiError &&
                  [404, 410].includes(outputFailure.status ?? 0)
                ? "结果文件缺失，任务记录已保留。"
                : `结果读取失败：${errorMessage(outputFailure)}`
            : (task.phase ??
              (task.placement === "placed"
                ? "已加入画布"
                : task.placement === "unplaced"
                  ? "来源已变化，结果保留在历史中，可重新放置。"
                  : "等待加入画布"))),
        outputs,
        tool: {
          version: 1,
          tool: task.tool,
          parameters: task.parameters ?? old?.tool?.parameters ?? {},
          sourceNodeIds: canvas?.sourceNodeIds ?? [],
        },
        resultSource: canvas
          ? {
              documentId: projectId,
              nodeId: canvas.nodeId,
              kind:
                task.sourceKind ??
                old?.resultSource?.kind ??
                definition?.sources[0] ??
                "image",
            }
          : undefined,
        toolTask: {
          placement: task.placement ?? "pending",
          sourceFingerprint: task.sourceFingerprint,
          outputIds: task.outputs.map((output) => output.canvasItemId),
          unavailable,
        },
      } satisfies GenerationJob;
      // Preserve stable rows between polls, including their media URLs. Idle
      // history queries should not invalidate canvas memoization during drags.
      return old?.toolTask &&
        old.targetNodeId === job.targetNodeId &&
        old.targetKind === job.targetKind &&
        old.targetTitle === job.targetTitle &&
        old.createdAt === job.createdAt &&
        old.finishedAt === job.finishedAt &&
        old.status === job.status &&
        old.message === job.message &&
        old.toolTask.placement === job.toolTask.placement &&
        old.toolTask.sourceFingerprint === job.toolTask.sourceFingerprint &&
        old.toolTask.unavailable === job.toolTask.unavailable &&
        old.toolTask.outputIds.join() === job.toolTask.outputIds.join() &&
        old.outputs?.length === outputs.length &&
        old.outputs.every(
          (output, index) =>
            output.kind !== "text" && output.src === outputs[index]?.src,
        )
        ? old
        : job;
    }),
  );
}
