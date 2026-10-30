import { useCallback, useEffect, useState } from "react";
import { assetBlob, errorMessage, json, request } from "./api.ts";
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
  boxes?: readonly { x: number; y: number; width: number; height: number }[];
}

/** Availability and service-supplied options for every tool, refreshed with the model list. */
export function useToolCatalog(connected: boolean, revision: unknown) {
  const [tools, setTools] = useState<ToolCatalogEntry[]>([]);
  const [error, setError] = useState("");
  const refresh = useCallback(async () => {
    try {
      const value = await request<{ tools: ToolCatalogEntry[] }>("/tools");
      setTools(value.tools);
      setError("");
    } catch (failure) {
      setTools([]);
      setError(errorMessage(failure));
    }
  }, []);
  useEffect(() => {
    if (connected) void refresh();
    else setTools([]);
  }, [connected, revision, refresh]);
  const capabilities: ToolCapabilities = Object.fromEntries(
    tools.map((entry) => [
      entry.id,
      {
        available: entry.available,
        reason: entry.reason,
        fields: entry.fields,
        parametersConfirmed: entry.parametersConfirmed,
      },
    ]),
  );
  return { tools, capabilities, error, refresh };
}

/** Sources and masks become project assets once; identical files are reused. */
async function uploadAsset(
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
  signal.throwIfAborted();
  const task = await request<ToolTask>(
    `/projects/${projectId}/tool-tasks`,
    json("POST", {
      id: crypto.randomUUID(),
      tool: value.tool,
      sourceAssetIds,
      ...(maskAssetId ? { maskAssetId } : {}),
      boxes: value.boxes ?? [],
      parameters: value.parameters,
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

/** Polls until the task ends; resolves with downloadable result files. */
export async function waitForToolTask(
  projectId: string,
  taskId: string,
  signal: AbortSignal,
  onProgress?: (task: ToolTask) => void,
) {
  for (;;) {
    const task = await request<ToolTask>(
      `/projects/${projectId}/tool-tasks/${taskId}`,
      { signal },
    );
    onProgress?.(task);
    if (task.status === "succeeded")
      return Promise.all(
        task.outputs.map(async (output) => ({
          output,
          file: new File(
            [await assetBlob(projectId, output.id, signal)],
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
