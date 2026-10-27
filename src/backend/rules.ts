import type { CanvasNode, GenerationSettings } from "../canvas/model.ts";

/** Model configurations and input rules published by the local API. */
export type ModelKind = "agent" | "image" | "video" | "audio";
export type BackendVideoMode = "first_frame" | "reference" | "continuation";

export interface InputRules {
  profile: string;
  allowedKinds: string[];
  maxImages: number;
  maxVideos: number;
  maxAudios: number;
  videoModes: BackendVideoMode[];
}

export interface ModelConfig {
  id: string;
  kind: ModelKind;
  url: string;
  modelId: string;
  connectionType: "api" | "self_hosted";
  protocol: "openai" | "volcengine" | "vllm_omni" | null;
  authMode: "none" | "bearer" | null;
  inputRules: InputRules;
}

export interface BackendReference {
  node: CanvasNode;
  role: "reference" | "firstFrame" | "continuation";
}

const LABELS: Record<string, string> = {
  image: "图片",
  video: "视频",
  audio: "音频",
  text: "文本",
};

/** Speaker names a speech service accepts; others fall back to its default voice. */
export function serviceVoice(settings: Pick<GenerationSettings, "voiceName">) {
  return /^[A-Za-z0-9_.-]{1,64}$/.test(settings.voiceName ?? "")
    ? settings.voiceName
    : undefined;
}

export function modelLabel(config: Pick<ModelConfig, "modelId">) {
  return config.modelId.split("/").at(-1) || config.modelId;
}

export function backendModel(
  settings: Pick<GenerationSettings, "modelConfigId">,
  models: readonly ModelConfig[],
) {
  return settings.modelConfigId
    ? models.find((model) => model.id === settings.modelConfigId)
    : undefined;
}

export function backendReferenceIssue(
  node: CanvasNode,
  settings: GenerationSettings,
  config: ModelConfig,
): string | null {
  const kind = node.data.kind;
  const rules = config.inputRules;
  if (!["image", "video", "audio", "text"].includes(kind))
    return "本地服务暂不接收此类节点";
  if (kind === "text")
    return rules.allowedKinds.includes("text")
      ? node.data.text?.trim()
        ? null
        : "文本节点为空"
      : "当前模型不接收文本参考";
  const continuation =
    settings.mode === "video" && settings.videoMode === "continuation";
  if (kind === "video" && !continuation && !rules.maxVideos)
    return rules.videoModes.includes("continuation")
      ? "视频只能在“接续”模式中作为上一段"
      : "当前模型不接收视频参考";
  if (!rules.allowedKinds.includes(kind))
    return `当前模型不接收${LABELS[kind]}参考`;
  return node.data.src && node.data.assetState !== "missing"
    ? null
    : "素材尚未导入或已丢失";
}

/** First-frame mode submits only the chosen frame; other modes use every usable input. */
export function backendReferences(
  settings: GenerationSettings,
  incoming: readonly CanvasNode[],
  config: ModelConfig,
): BackendReference[] {
  const usable = incoming.filter(
    (node) => !backendReferenceIssue(node, settings, config),
  );
  if (settings.mode === "video" && settings.videoMode === "first-last") {
    const frame = usable.find(
      (node) =>
        node.id === settings.firstFrameNodeId && node.data.kind === "image",
    );
    return [
      ...(frame ? [{ node: frame, role: "firstFrame" as const }] : []),
      ...usable
        .filter((node) => node.data.kind === "text")
        .map((node) => ({ node, role: "reference" as const })),
    ];
  }
  return usable.map((node) => ({
    node,
    role:
      settings.videoMode === "continuation" && node.data.kind === "video"
        ? "continuation"
        : "reference",
  }));
}

export function backendVideoMode(
  settings: GenerationSettings,
  references: readonly BackendReference[],
): BackendVideoMode {
  if (settings.videoMode === "continuation") return "continuation";
  if (settings.videoMode === "first-last") return "first_frame";
  // Without media inputs a reference request is plain text-to-video.
  return references.some((item) => item.node.data.kind !== "text")
    ? "reference"
    : "first_frame";
}

export function backendBlocker(
  settings: GenerationSettings,
  incoming: readonly CanvasNode[],
  models: readonly ModelConfig[],
): string | null {
  const config = backendModel(settings, models);
  if (!config) return "所选模型配置已删除或尚未读取，请在设置中重新选择。";
  if (config.kind !== settings.mode)
    return "模型类型与节点不符，请重新选择模型。";
  if (!settings.prompt.trim())
    return settings.mode === "audio"
      ? "请输入要合成的文字。"
      : "请输入生成要求。";
  const rules = config.inputRules;
  const references = backendReferences(settings, incoming, config);
  if (settings.mode === "video") {
    if (!rules.videoModes.includes(backendVideoMode(settings, references)))
      return "当前模型不支持所选视频模式。";
    if (settings.videoMode === "first-last") {
      if (settings.lastFrameNodeId) return "本地服务只支持首帧，请移除尾帧。";
      if (
        settings.firstFrameNodeId &&
        !references.some((item) => item.role === "firstFrame")
      )
        return "首帧素材未连接或已丢失，请重新选择。";
    }
    if (
      settings.videoMode === "continuation" &&
      references.filter((item) => item.role === "continuation").length !== 1
    )
      return "接续需要连接一段由当前 H3 服务生成的视频作为上一段。";
    if (
      !Number.isFinite(settings.durationSeconds) ||
      settings.durationSeconds < 4 ||
      settings.durationSeconds > 15
    )
      return "视频时长需在 4–15 秒之间。";
  }
  const count = (kind: string) =>
    references.filter(
      (item) => item.role !== "continuation" && item.node.data.kind === kind,
    ).length;
  for (const [kind, limit] of [
    ["image", rules.maxImages],
    ["video", rules.maxVideos],
    ["audio", rules.maxAudios],
  ] as const)
    if (count(kind) > limit)
      return `参考${LABELS[kind]}超过当前模型上限（${limit} 个）。`;
  return null;
}
