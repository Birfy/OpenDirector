import type {
  ReferenceAsset,
  ReferenceContent,
} from "../canvas/chatReferenceContent.ts";
import { assetBlob, headers, json, request } from "./api.ts";
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
  size?: number;
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
  nodeId?: string;
  sourceRole?: string;
  contextOnly?: boolean;
  binding?: "asset";
  assetId?: string;
  fingerprint?: string | null;
  referenceId?: string;
  src?: string;
  text?: string;
}

export interface GenerationRequest {
  documentId: string;
  documentTitle: string;
  nodeId?: string;
  promptContent?: ReferenceContent;
  batchId?: string;
  executionSlot?: number;
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
  assetId?: string;
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
  let base =
    title
      // eslint-disable-next-line no-control-regex
      .replace(/[<>:"/\\|?*\x00-\x1f]/g, "_")
      .trim()
      .slice(0, 80) || "素材";
  const suffix = `.${extension}`;
  while (base.toLowerCase().endsWith(suffix.toLowerCase()))
    base = base.slice(0, -suffix.length);
  return `${base || "素材"}${suffix}`;
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
async function uploadUnboundReferences(
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
      const matches = current.filter(
        (asset) =>
          asset.kind === "text" &&
          (asset.fingerprint === print ||
            asset.fingerprintAliases?.includes(print)),
      );
      if (matches.length > 1)
        throw new Error("存在多个相同内容的来源，请通过 @ 选择具体来源。");
      const existing = matches[0];
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
    const response = await fetch(reference.src!, {
      signal,
      ...(reference.src?.startsWith(`/api/data/${projectId}/assets/`)
        ? { headers }
        : {}),
    });
    if (!response.ok)
      throw new Error(
        `无法读取参考素材：${reference.title}（${response.status}）`,
      );
    const blob = await response.blob();
    const print = await fingerprint(blob);
    const matches = current.filter(
      (asset) =>
        asset.kind === reference.kind &&
        (asset.fingerprint === print ||
          asset.fingerprintAliases?.includes(print)),
    );
    if (matches.length > 1)
      throw new Error("存在多个相同内容的来源，请通过 @ 选择具体来源。");
    const existing = matches[0];
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

/** Stable bridge IDs keep default workspace identities separate from service roles. */
export async function serviceNodeId(logicalId: string, role: string) {
  const bytes = new Uint8Array(
    await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(`opendirector:${role}:${logicalId}`),
    ),
  );
  bytes[6] = (bytes[6]! & 15) | 80;
  bytes[8] = (bytes[8]! & 63) | 128;
  const hex = [...bytes.slice(0, 16)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}
interface ServiceSource {
  id: string;
  title?: string;
  kind: string;
  revision: number;
  assetId: string | null;
  role: string;
}
export interface PreparedReference {
  input: ReferenceInput;
  asset: ReferenceAsset;
}

/** Resolve identity before content. Equal bytes never select another logical owner. */
async function prepareReferenceSources(
  projectId: string,
  references: readonly ReferenceInput[],
  signal: AbortSignal,
): Promise<PreparedReference[]> {
  if (!references.length) return [];
  const snapshot = await request<{
    assets: BackendAsset[];
    canvas: { nodes: ServiceSource[] };
    referenceSources?: ServiceSource[];
  }>(`/projects/${projectId}/canvas`, { signal });
  const sources = [
    ...snapshot.canvas.nodes,
    ...(snapshot.referenceSources ?? []),
  ];
  const result: PreparedReference[] = [];
  for (const input of references) {
    signal.throwIfAborted();
    if (input.binding === "asset") {
      const asset = snapshot.assets.find((asset) => asset.id === input.assetId);
      if (
        !asset ||
        !input.fingerprint ||
        !(
          asset.fingerprint === input.fingerprint ||
          asset.fingerprintAliases?.includes(input.fingerprint)
        ) ||
        (await fingerprint(await assetBlob(projectId, asset.id, signal))) !==
          asset.fingerprint
      )
        throw new Error("固定参考素材缺失或内容已变化。");
      result.push({
        input,
        asset: { ...asset, size: asset.size ?? 0, available: true },
      });
      continue;
    }
    const response =
      input.kind === "text"
        ? null
        : await fetch(input.src!, {
            signal,
            ...(input.src?.startsWith(`/api/data/${projectId}/assets/`)
              ? { headers }
              : {}),
          });
    if (response && !response.ok)
      throw new Error(`无法读取参考素材：${input.title}（${response.status}）`);
    const blob = response
      ? await response.blob()
      : new Blob([input.text ?? ""], { type: "text/plain" });
    const print = await fingerprint(blob);
    const knownId =
      input.assetId ??
      /\/assets\/([0-9a-f-]{36})(?:$|[?#])/i.exec(input.src ?? "")?.[1];
    let canonical = knownId
      ? snapshot.assets.find(
          (asset) =>
            asset.id === knownId &&
            asset.kind === input.kind &&
            (asset.fingerprint === print ||
              asset.fingerprintAliases?.includes(print)),
        )
      : undefined;
    if (knownId && !canonical && input.kind === "text") {
      const record = snapshot.assets.find(
        (asset) => asset.id === knownId && asset.kind === "text",
      );
      if (record) {
        const bytes = await assetBlob(projectId, record.id, signal);
        if (
          (await fingerprint(bytes)) === record.fingerprint &&
          (await bytes.text()) === (input.text ?? "").replace(/^\uFEFF/, "")
        )
          canonical = record;
      }
    }
    if (knownId && !canonical)
      throw new Error("来源素材身份与当前内容不一致，请重新读取来源。");
    const bridgeId = input.nodeId
      ? await serviceNodeId(
          input.nodeId,
          `source:${input.sourceRole ?? "body"}`,
        )
      : crypto.randomUUID();
    let source =
      sources.find((source) => source.id === bridgeId) ??
      (!input.sourceRole
        ? sources.find((source) => source.id === input.nodeId)
        : undefined);
    let asset = source?.assetId
      ? snapshot.assets.find((asset) => asset.id === source!.assetId)
      : undefined;
    if (!source && !input.nodeId) {
      const matches = snapshot.assets.filter(
        (asset) =>
          asset.kind === input.kind &&
          (asset.fingerprint === print ||
            asset.fingerprintAliases?.includes(print)),
      );
      if (matches.length > 1)
        throw new Error("存在多个相同内容的来源，请通过 @ 选择具体来源。");
      asset = matches[0];
      source = asset && sources.find((source) => source.assetId === asset!.id);
    }
    const sameVersion = canonical
      ? asset?.id === canonical.id
      : !!asset &&
        (asset.fingerprint === print ||
          !!asset.fingerprintAliases?.includes(print));
    if (!source || !asset || !sameVersion) {
      if (!source) {
        source = await request<ServiceSource>(
          `/projects/${projectId}/canvas/nodes`,
          {
            ...json("POST", {
              id: bridgeId,
              kind: input.kind,
              title: input.title.slice(0, 255),
              logicalNodeId: input.nodeId,
              sourceRole: input.sourceRole,
            }),
            signal,
          },
        );
        sources.push(source);
      }
      if (source.kind !== input.kind || source.role === "generation")
        throw new Error("来源职责或类型已变化，请重新选择参考。");
      const id = crypto.randomUUID();
      if (canonical) {
        const bound = await request<{
          node: ServiceSource;
          asset: BackendAsset;
        }>(`/projects/${projectId}/canvas/nodes/${source.id}/source`, {
          ...json("PUT", {
            assetId: canonical.id,
            fingerprint: canonical.fingerprint,
            expectedRevision: source.revision,
            discardInputs: source.role === "empty",
          }),
          signal,
        });
        asset = bound.asset;
        Object.assign(source, bound.node);
      } else if (input.kind === "text") {
        asset = await request<BackendAsset>(
          `/projects/${projectId}/canvas/nodes/${source.id}/text`,
          {
            ...json("PUT", {
              id,
              name: fileName(input.title, "md"),
              text: input.text ?? "",
              expectedRevision: source.revision,
              discardInputs: source.role === "empty",
            }),
            signal,
          },
        );
      } else {
        asset = await request<BackendAsset>(
          `/projects/${projectId}/canvas/nodes/${source.id}/file`,
          {
            method: "PUT",
            signal,
            headers: {
              ...headers,
              "Content-Type": "application/octet-stream",
              "X-Asset-Name": encodeURIComponent(
                fileName(
                  input.title,
                  EXTENSIONS[blob.type] ?? blob.type.split("/")[1] ?? "bin",
                ),
              ),
              "X-Asset-Id": id,
              "X-Node-Revision": String(source.revision),
              "X-Discard-Inputs": String(source.role === "empty"),
            },
            body: blob,
          },
        );
      }
      source.assetId = asset.id;
      if (!canonical) source.revision++;
      source.role = "material";
      if (!snapshot.assets.some((item) => item.id === asset!.id))
        snapshot.assets.push(asset);
    }
    if (
      source.role !== "generation" &&
      source.title !== undefined &&
      source.title !== input.title.slice(0, 255)
    ) {
      const updated = await request<ServiceSource>(
        `/projects/${projectId}/canvas/nodes/${source.id}`,
        {
          ...json("PATCH", {
            title: input.title.slice(0, 255),
            expectedRevision: source.revision,
          }),
          signal,
        },
      );
      Object.assign(source, updated);
    }
    result.push({
      input,
      asset: {
        ...asset,
        nodeId: source.id,
        sourceRole: input.sourceRole,
        nodeTitle: input.title,
        size: asset.size ?? blob.size,
        available: true,
      },
    });
  }
  return result;
}
const preparations = new Map<string, Promise<unknown>>();
export async function prepareReferences(
  projectId: string,
  references: readonly ReferenceInput[],
  signal: AbortSignal,
) {
  const previous = preparations.get(projectId) ?? Promise.resolve();
  const pending = previous
    .catch(() => {})
    .then(() => prepareReferenceSources(projectId, references, signal));
  preparations.set(projectId, pending);
  try {
    return await pending;
  } finally {
    if (preparations.get(projectId) === pending) preparations.delete(projectId);
  }
}
export async function uploadReferences(
  projectId: string,
  references: readonly ReferenceInput[],
  signal: AbortSignal,
) {
  if (references.every((input) => !input.nodeId && input.binding !== "asset"))
    return uploadUnboundReferences(projectId, references, signal);
  return [
    ...new Set(
      (await prepareReferences(projectId, references, signal)).map(
        (value) => value.asset.id,
      ),
    ),
  ];
}

/** Keep inline positions and repeats; expand one subject mention into its frozen roles. */
export function submissionContent(
  content: ReferenceContent | undefined,
  prepared: PreparedReference[],
): ReferenceContent | undefined {
  if (content === undefined) return undefined;
  return content.flatMap<ReferenceContent[number]>((part) => {
    if (part.type === "text") return [part];
    const matches = prepared.filter(({ input }) =>
      part.binding === "asset"
        ? input.assetId === part.assetId
        : input.nodeId === part.nodeId &&
          (!part.sourceRole || input.sourceRole === part.sourceRole),
    );
    if (!matches.length)
      throw new Error("正文引用与实际参考关系不一致，请重新选择参考。");
    return matches.map(({ input, asset }) => ({
      type: "reference" as const,
      assetId: asset.id,
      ...(part.binding === "asset"
        ? { binding: "asset" as const }
        : { nodeId: asset.nodeId }),
      ...(input.sourceRole ? { sourceRole: input.sourceRole } : {}),
      ...(part.referenceId ? { referenceId: part.referenceId } : {}),
      name: part.name,
      fingerprint: asset.fingerprint,
      ...(input.contextOnly ? { transmission: "context_only" as const } : {}),
    }));
  });
}

export async function submitGeneration(
  value: GenerationRequest,
  signal: AbortSignal,
) {
  const projectId = await openBackendProject(
    value.documentId,
    value.documentTitle,
  );
  const prepared =
    value.promptContent !== undefined ||
    value.references.some((input) => input.nodeId || input.binding === "asset")
      ? await prepareReferences(projectId, value.references, signal)
      : [];
  const referenceIds = prepared.length
    ? [
        ...new Set(
          prepared
            .filter((value) => !value.input.contextOnly)
            .map((value) => value.asset.id),
        ),
      ]
    : await uploadReferences(projectId, value.references, signal);
  const promptContent = submissionContent(value.promptContent, prepared);
  signal.throwIfAborted();
  const executionId = value.nodeId
    ? await serviceNodeId(
        value.nodeId,
        `execution:${value.kind}:${value.executionSlot ?? 0}`,
      )
    : crypto.randomUUID();
  const snapshot = value.nodeId
    ? await request<{ canvas: { nodes: ServiceSource[] } }>(
        `/projects/${projectId}/canvas`,
        { signal },
      )
    : null;
  const node =
    snapshot?.canvas.nodes.find((node) => node.id === executionId) ??
    (await request<ServiceSource>(`/projects/${projectId}/canvas/nodes`, {
      ...json("POST", {
        id: executionId,
        kind: value.kind,
        logicalNodeId: value.nodeId,
      }),
      signal,
    }));
  const task = await request<BackendTask>(
    `/projects/${projectId}/canvas/nodes/${node.id}/generate`,
    json("POST", {
      id: crypto.randomUUID(),
      modelConfigId: value.config.id,
      logicalNodeId: value.nodeId,
      expectedRevision: node.revision,
      inputs: {
        prompt: value.prompt,
        ...(promptContent !== undefined ? { promptContent } : {}),
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
    assetId: asset.id,
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
  return {
    kind: "text" as const,
    title: asset.name,
    text: await blob.text(),
    assetId: asset.id,
  };
}
