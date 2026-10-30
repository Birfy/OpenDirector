import { useCallback, useEffect, useState } from "react";
import { ApiError, assetBlob, errorMessage, json, request } from "./api.ts";
import {
  EXTENSIONS,
  fileName,
  fingerprint,
  type BackendAsset,
} from "./generation.ts";
import { openBackendProject } from "./projects.ts";
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
}

export interface ToolSourceInput {
  kind: "image" | "video" | "audio";
  title: string;
  src: string;
}

export interface ToolRequest {
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

export async function submitToolTask(value: ToolRequest, signal: AbortSignal) {
  const projectId = await openBackendProject(
    value.documentId,
    value.documentTitle,
  );
  const known = await request<BackendAsset[]>(`/projects/${projectId}/assets`, {
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
  const task = await request<ToolTask>(
    `/projects/${projectId}/tool-tasks`,
    json("POST", {
      id: crypto.randomUUID(),
      tool: value.tool,
      sourceAssetIds,
      ...(maskAssetId ? { maskAssetId } : {}),
      ...(annotationAssetId ? { annotationAssetId } : {}),
      boxes: value.boxes ?? [],
      parameters: value.parameters,
      ...(value.modelConfigIds ? { modelConfigIds: value.modelConfigIds } : {}),
    }),
  );
  return { projectId, taskId: task.id };
}

export function cancelToolTask(projectId: string, taskId: string) {
  return request<ToolTask>(
    `/projects/${projectId}/tool-tasks/${taskId}/cancel`,
    {
      method: "POST",
    },
  );
}

const wait = (ms: number, signal: AbortSignal) =>
  new Promise<void>((resolve, reject) => {
    const timer = setTimeout(resolve, ms);
    signal.addEventListener(
      "abort",
      () => {
        clearTimeout(timer);
        reject(signal.reason);
      },
      { once: true },
    );
  });

/**
 * One read that cannot hang the follow loop. A request stalled in transit (for
 * example in a port-forwarding tunnel) never reaches the API and never fails,
 * so each attempt has a timeout and transport failures are retried.
 */
async function resilient<T>(
  read: (signal: AbortSignal) => Promise<T>,
  signal: AbortSignal,
  timeoutMs: number,
  attempts = 5,
): Promise<T> {
  for (let attempt = 1; ; attempt++) {
    try {
      return await read(
        AbortSignal.any([signal, AbortSignal.timeout(timeoutMs)]),
      );
    } catch (failure) {
      const rejected =
        failure instanceof ApiError && failure.code !== "network_error";
      if (signal.aborted || rejected || attempt >= attempts) throw failure;
      await wait(2000, signal);
    }
  }
}

/** Polls until the task ends; resolves with downloadable result files. */
export async function waitForToolTask(
  projectId: string,
  taskId: string,
  signal: AbortSignal,
  onProgress?: (task: ToolTask) => void,
  timeouts = { status: 15_000, download: 120_000 },
) {
  for (;;) {
    const task = await resilient(
      (attempt) =>
        request<ToolTask>(`/projects/${projectId}/tool-tasks/${taskId}`, {
          signal: attempt,
        }),
      signal,
      timeouts.status,
    );
    onProgress?.(task);
    if (task.status === "succeeded")
      return Promise.all(
        task.outputs.map(async (output) => ({
          output,
          file: new File(
            [
              await resilient(
                (attempt) => assetBlob(projectId, output.id, attempt),
                signal,
                timeouts.download,
                3,
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
    await wait(2000, signal);
  }
}
