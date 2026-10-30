import { assetBlob, json, request } from "./api.ts";
import { openBackendProject } from "./projects.ts";
import type { BackendVideoMode, ModelConfig } from "./rules.ts";
import { creationClient, creationEnabled } from "./creationClient.ts";

/** Generation through the local API. Each submission has a service execution
 * node so batch requests can run independently. This is not a new UI node:
 * the canvas retains each task's result owner and fills that existing node.
 * Retained asset records remain valid continuation sources for the H3 service. */

export interface BackendAsset {
  id: string;
  kind: "text" | "image" | "video" | "audio" | "other";
  name: string;
  type: string;
  fingerprint: string;
  fingerprintAliases?: string[];
  width?: number | null;
  height?: number | null;
  durationMs?: number | null;
  agentRunId?: string | null;
  generationTaskId?: string | null;
}

export interface BackendTask {
  id: string;
  nodeId: string;
  kind: string;
  status:
    | "queued"
    | "running"
    | "succeeded"
    | "failed"
    | "cancelled"
    | "interrupted";
  phase?: string | null;
  protocol?: string | null;
  externalTaskId?: string | null;
  recovery?: string | null;
  resumeAllowed?: boolean;
  assetId: string | null;
  error: string | null;
  title?: string;
  createdAt?: string;
}

interface CanvasSnapshot {
  assets: BackendAsset[];
  tasks: BackendTask[];
}

export interface ReferenceInput {
  kind: "image" | "video" | "audio" | "text";
  title: string;
  src?: string;
  text?: string;
}

export interface GenerationRequest {
  documentId: string;
  documentTitle: string;
  batchId?: string;
  config: ModelConfig;
  kind: "text" | "image" | "video" | "audio";
  thinking?: "auto" | "low" | "medium" | "high";
  maxTokens?: number;
  prompt: string;
  title: string;
  videoMode: BackendVideoMode;
  durationSeconds?: number;
  aspectRatio?: string;
  resolution?: string;
  voice?: string;
  references: readonly ReferenceInput[];
}

export interface BackendResult {
  kind: "image" | "video" | "audio";
  file: File;
  media: { width?: number; height?: number; durationSeconds?: number };
}

export const EXTENSIONS: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
  "image/gif": "gif",
  "video/mp4": "mp4",
  "video/webm": "webm",
  "video/quicktime": "mov",
  "audio/mpeg": "mp3",
  "audio/wav": "wav",
  "audio/x-wav": "wav",
  "audio/mp4": "m4a",
  "audio/aac": "aac",
  "audio/ogg": "ogg",
  "audio/webm": "webm",
};

export function fileName(title: string, extension: string) {
  const base =
    title
      // eslint-disable-next-line no-control-regex
      .replace(/[<>:"/\\|?*\x00-\x1f]/g, "_")
      .trim()
      .slice(0, 80) || "素材";
  return `${base}.${extension}`;
}

export async function fingerprint(blob: Blob) {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    await blob.arrayBuffer(),
  );
  return (
    "sha256:" +
    [...new Uint8Array(digest)]
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("")
  );
}

async function placeOnCanvas(
  projectId: string,
  kind: string,
  assetId: string,
  signal: AbortSignal,
) {
  await request(`/projects/${projectId}/canvas/nodes`, {
    ...json("POST", { id: crypto.randomUUID(), kind, assetId }),
    signal,
  });
}

/** Reuse an identical current asset (such as an earlier H3 result), else upload one. */
export async function uploadReferences(
  projectId: string,
  references: readonly ReferenceInput[],
  signal: AbortSignal,
) {
  if (!references.length) return [];
  const current = await request<BackendAsset[]>(
    `/projects/${projectId}/assets?current_only=true`,
    { signal },
  );
  const ids: string[] = [];
  for (const reference of references) {
    signal.throwIfAborted();
    if (reference.kind === "text") {
      const print = await fingerprint(new Blob([reference.text ?? ""]));
      const existing = current.find(
        (asset) =>
          asset.kind === "text" &&
          (asset.fingerprint === print ||
            asset.fingerprintAliases?.includes(print)),
      );
      if (existing) {
        if (!ids.includes(existing.id)) ids.push(existing.id);
        continue;
      }
      const asset = await request<BackendAsset>(
        `/projects/${projectId}/assets/text`,
        {
          ...json("POST", {
            id: crypto.randomUUID(),
            name: fileName(reference.title, "md"),
            text: reference.text ?? "",
          }),
          signal,
        },
      );
      await placeOnCanvas(projectId, "text", asset.id, signal);
      current.push(asset);
      ids.push(asset.id);
      continue;
    }
    const response = await fetch(reference.src!, { signal });
    if (!response.ok)
      throw new Error(
        `无法读取参考素材：${reference.title}（${response.status}）`,
      );
    const blob = await response.blob();
    const print = await fingerprint(blob);
    const existing = current.find(
      (asset) =>
        asset.kind === reference.kind &&
        (asset.fingerprint === print ||
          asset.fingerprintAliases?.includes(print)),
    );
    if (existing) {
      if (!ids.includes(existing.id)) ids.push(existing.id);
      continue;
    }
    const type = blob.type.split(";")[0] ?? "";
    const asset = await request<BackendAsset>(
      `/projects/${projectId}/assets/${crypto.randomUUID()}`,
      {
        method: "PUT",
        signal,
        headers: {
          "X-Asset-Name": encodeURIComponent(
            fileName(
              reference.title,
              EXTENSIONS[type] ?? type.split("/")[1] ?? "bin",
            ),
          ),
          "Content-Type": "application/octet-stream",
        },
        body: blob,
      },
    );
    await placeOnCanvas(projectId, reference.kind, asset.id, signal);
    current.push(asset);
    ids.push(asset.id);
  }
  return ids;
}

export async function submitGeneration(
  value: GenerationRequest,
  signal: AbortSignal,
) {
  const projectId = await openBackendProject(
    value.documentId,
    value.documentTitle,
  );
  const referenceIds = await uploadReferences(
    projectId,
    value.references,
    signal,
  );
  signal.throwIfAborted();
  const node = await request<{ id: string; revision: number }>(
    `/projects/${projectId}/canvas/nodes`,
    json("POST", { id: crypto.randomUUID(), kind: value.kind }),
  );
  const task = await request<BackendTask>(
    `/projects/${projectId}/canvas/nodes/${node.id}/generate`,
    json("POST", {
      id: crypto.randomUUID(),
      modelConfigId: value.config.id,
      expectedRevision: node.revision,
      inputs: {
        prompt: value.prompt,
        title: value.title.slice(0, 255),
        referenceIds,
        videoMode: value.videoMode,
        ...(value.kind === "video"
          ? {
              durationSeconds: value.durationSeconds,
              aspectRatio: value.aspectRatio,
              ...(value.resolution &&
              (value.resolution !== "自动" ||
                "videoCapabilities" in value.config.inputRules)
                ? {
                    resolution:
                      value.resolution === "自动" ? "auto" : value.resolution,
                  }
                : {}),
            }
          : {}),
        ...(value.kind === "text"
          ? {
              thinking: value.thinking ?? "auto",
              maxTokens: value.maxTokens ?? 8192,
            }
          : {}),
        ...(value.kind === "audio" && value.voice
          ? { voice: value.voice }
          : {}),
      },
    }),
  );
  return { projectId, taskId: task.id };
}

export async function cancelGeneration(projectId: string, taskId: string) {
  if (creationEnabled()) {
    await creationClient(projectId).control(taskId, "cancel");
    return;
  }
  await request(`/projects/${projectId}/tasks/${taskId}/cancel`, {
    method: "POST",
  });
}

/** Resume the saved task; this endpoint never creates a new generation ID. */
export async function recoverGeneration(projectId: string, taskId: string) {
  if (creationEnabled()) {
    const client = creationClient(projectId);
    await client.control(taskId, "recover");
    const job = client.snapshot.jobs.find((job) => job.id === taskId)!;
    return {
      id: job.id,
      nodeId: job.originItemId ?? job.inputSnapshot.spec.id,
      kind: job.inputSnapshot.spec.kind,
      status: job.status,
      assetId: job.asset?.assetId ?? null,
      error: job.errorDetails?.message ?? null,
    } as BackendTask;
  }
  return request<BackendTask>(
    `/projects/${projectId}/tasks/${taskId}/recover`,
    {
      method: "POST",
    },
  );
}

export function projectSnapshot(projectId: string, signal?: AbortSignal) {
  return request<CanvasSnapshot>(`/projects/${projectId}/canvas`, { signal });
}

export async function downloadAsset(
  projectId: string,
  asset: BackendAsset,
  signal?: AbortSignal,
): Promise<BackendResult | null> {
  if (!["image", "video", "audio"].includes(asset.kind)) return null;
  const blob = await assetBlob(projectId, asset.id, signal);
  return {
    kind: asset.kind as BackendResult["kind"],
    file: new File([blob], asset.name, { type: asset.type || blob.type }),
    media: {
      ...(asset.width ? { width: asset.width } : {}),
      ...(asset.height ? { height: asset.height } : {}),
      ...(asset.durationMs ? { durationSeconds: asset.durationMs / 1000 } : {}),
    },
  };
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

const FAILED = new Set(["failed", "cancelled", "interrupted"]);

async function waitForTaskAsset(
  projectId: string,
  taskId: string,
  signal: AbortSignal,
  onProgress?: (task: BackendTask) => void,
): Promise<BackendAsset> {
  for (;;) {
    const snapshot = await projectSnapshot(projectId, signal);
    const task = snapshot.tasks.find((item) => item.id === taskId);
    if (!task) throw new Error("生成任务不存在，可能已被项目外的操作移除。");
    onProgress?.(task);
    if (task.status === "succeeded") {
      const asset = snapshot.assets.find((item) => item.id === task.assetId);
      if (!asset) throw new Error("任务已完成但未返回结果文件。");
      return asset;
    }
    if (FAILED.has(task.status))
      throw new Error(
        task.error ??
          (task.status === "cancelled" ? "任务已取消。" : "生成未完成。"),
      );
    await wait(3000, signal);
  }
}
export async function waitForResult(
  projectId: string,
  taskId: string,
  signal: AbortSignal,
  onProgress?: (task: BackendTask) => void,
): Promise<BackendResult> {
  const asset = await waitForTaskAsset(projectId, taskId, signal, onProgress);
  const result = await downloadAsset(projectId, asset, signal);
  if (!result) throw new Error("生成结果不是图片、视频或音频文件。");
  return result;
}
export async function waitForTextResult(
  projectId: string,
  taskId: string,
  signal: AbortSignal,
  onProgress?: (task: BackendTask) => void,
) {
  const asset = await waitForTaskAsset(projectId, taskId, signal, onProgress);
  if (asset.kind !== "text") throw new Error("Agent 返回了非文本结果。");
  const blob = await assetBlob(projectId, asset.id, signal);
  return { kind: "text" as const, title: asset.name, text: await blob.text() };
}
