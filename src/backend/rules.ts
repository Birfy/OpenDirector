import { nodeByteSize } from "../canvas/uploadPolicy.ts";
import type { CanvasNode, GenerationSettings } from "../canvas/model.ts";
import { subjectReferenceNodes } from "../canvas/subjectReferences.ts";
export { subjectReferenceNodes } from "../canvas/subjectReferences.ts";
import { frameImageLimitIssue } from "../canvas/frameReferences.ts";
import { nodeDownstreamKinds } from "../canvas/connectionPolicy.ts";

/** Model configurations and input rules published by the local API. */
export type ModelKind = "agent" | "image" | "video" | "audio" | "vision";
export type BackendVideoMode = "first_frame" | "reference" | "continuation";
export type VideoAdapter = "auto" | "fasth3" | "minimax_h3" | "standard";
export interface VideoCapabilities {
  outputs: {
    resolution: string;
    durations: number[];
    width?: number;
    height?: number;
  }[];
  defaultResolution: string;
  defaultDuration: number;
  dimensionStep: 1 | 2 | 8 | 16 | 32 | 64;
}

export interface InputRules {
  profile: string;
  allowedKinds: string[];
  maxImages: number;
  imageBytes?: number;
  videoBytes?: number;
  requestBytes?: number;
  maxVideos: number;
  maxAudios: number;
  videoModes: BackendVideoMode[];
  outputResolutions?: string[];
  referenceImageResolutions?: string[];
  videoCapabilities?: VideoCapabilities | null;
}

export interface ModelConfig {
  id: string;
  kind: ModelKind;
  url: string;
  modelId: string;
  connectionType: "api" | "self_hosted";
  protocol:
    | "openai"
    | "volcengine"
    | "vllm_omni"
    | "vllm_omni_segmentation"
    | null;
  authMode: "none" | "bearer" | null;
  inputRules: InputRules;
  videoAdapter?: VideoAdapter;
  videoCapabilities?: VideoCapabilities | null;
}

export interface BackendReference {
  node: CanvasNode;
  role: "reference" | "firstFrame" | "continuation";
}

/** SAM configurations serve editing tools, including legacy vision entries. */
export function isSegmentationModel(
  model: Pick<ModelConfig, "kind" | "protocol">,
) {
  return model.kind === "vision" || model.protocol === "vllm_omni_segmentation";
}

export function isGenerationModel(
  model: Pick<ModelConfig, "kind" | "protocol">,
) {
  return !isSegmentationModel(model);
}

const LABELS: Record<string, string> = {
  image: "图片",
  video: "视频",
  audio: "音频",
  text: "文本",
  subject: "主体",
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
  if (
    settings.mode === "video" &&
    settings.videoMode === "first-last" &&
    ["video", "audio"].includes(kind)
  )
    return "首尾帧模式不接收视频或音频参考";
  if (kind === "subject") {
    if (!nodeDownstreamKinds(node).includes(settings.mode))
      return "视频主体只能作为视频节点的参考";
    if (settings.mode === "video" && settings.videoMode === "first-last")
      return "首尾帧模式请使用图片节点选择帧素材";
    const resources = subjectReferenceNodes(node);
    if (!resources.length) return "主体尚未添加可用素材";
    return resources.some(
      (resource) =>
        !(resource.type === "video" && settings.videoMode === "continuation") &&
        !backendReferenceIssue(resource, settings, config),
    )
      ? null
      : "当前模型或模式不接收主体中的素材";
  }
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
  const usable = incoming
    .filter((node) => !backendReferenceIssue(node, settings, config))
    .flatMap((node) =>
      node.type === "subject"
        ? subjectReferenceNodes(node).filter(
            (resource) =>
              !(
                resource.type === "video" &&
                settings.videoMode === "continuation"
              ) && !backendReferenceIssue(resource, settings, config),
          )
        : [node],
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

/** The backend publishes adapter capabilities; unknown services retain automatic sizing. */
export function backendResolutions(
  settings: Pick<GenerationSettings, "mode" | "videoMode"> &
    Partial<Pick<GenerationSettings, "durationSeconds">>,
  config: ModelConfig | undefined,
  incoming: readonly CanvasNode[] = [],
): string[] {
  if (settings.mode !== "video" || settings.videoMode === "continuation")
    return ["自动"];
  const rules = config?.inputRules;
  const choices =
    settings.videoMode === "reference" &&
    incoming.some(
      (node) =>
        node.data.kind === "image" ||
        subjectReferenceNodes(node).some(
          (resource) => resource.type === "image",
        ),
    )
      ? (rules?.referenceImageResolutions ?? rules?.outputResolutions)
      : rules?.outputResolutions;
  const outputs = rules?.videoCapabilities?.outputs;
  return [
    "自动",
    ...(choices ?? []).filter(
      (label) =>
        !outputs ||
        settings.durationSeconds === undefined ||
        outputs.some(
          (item) =>
            item.resolution === label &&
            item.durations.includes(settings.durationSeconds!),
        ),
    ),
  ];
}

export function backendDurations(config: ModelConfig | undefined): number[] {
  return [
    ...new Set(
      config?.inputRules.videoCapabilities?.outputs.flatMap(
        (item) => item.durations,
      ) ?? [],
    ),
  ].sort((a, b) => a - b);
}

/** Normalize a deliberate model/time change before persisting it to the canvas. */
export function serviceVideoSettings(
  settings: GenerationSettings,
  config: ModelConfig,
  incoming: readonly CanvasNode[] = [],
  modelChanged = false,
): GenerationSettings {
  const next = { ...settings };
  const caps = config.inputRules.videoCapabilities;
  const durations = backendDurations(config);
  if (durations.length && !durations.includes(next.durationSeconds))
    next.durationSeconds = caps!.defaultDuration;
  if (
    next.videoMode === "continuation" &&
    !config.inputRules.videoModes.includes("continuation")
  )
    next.videoMode = "reference";
  const resolutions = backendResolutions(next, config, incoming);
  if (modelChanged || !resolutions.includes(next.resolution)) {
    const preferred =
      caps?.defaultResolution === "auto" ? "自动" : caps?.defaultResolution;
    next.resolution =
      !modelChanged && resolutions.includes(next.resolution)
        ? next.resolution
        : preferred && resolutions.includes(preferred)
          ? preferred
          : "自动";
  }
  return next;
}

export function backendBlocker(
  settings: GenerationSettings,
  incoming: readonly CanvasNode[],
  models: readonly ModelConfig[],
): string | null {
  const frameLimit = frameImageLimitIssue(settings, incoming);
  if (frameLimit) return frameLimit;
  const config = backendModel(settings, models);
  if (!config) return "所选模型配置已删除或尚未读取，请在设置中重新选择。";
  if (config.kind !== settings.mode)
    return "模型类型与节点不符，请重新选择模型。";
  if (!isGenerationModel(config))
    return "视觉分割模型仅用于选区、分割和抠像，请选择生成模型。";
  if (!settings.prompt.trim())
    return settings.mode === "audio"
      ? "请输入要合成的文字。"
      : "请输入生成要求。";
  const rules = config.inputRules;
  const references = backendReferences(settings, incoming, config);
  if (settings.mode === "video") {
    const durations = backendDurations(config);
    if (durations.length && !durations.includes(settings.durationSeconds))
      return "当前模型不支持所选时长，请重新选择。";
    if (
      rules.outputResolutions &&
      !backendResolutions(settings, config, incoming).includes(
        settings.resolution,
      )
    )
      return "当前模型或参考模式不支持所选分辨率，请重新选择。";
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

/** The same budget applies to following nodes, pinned assets and expanded subjects. */
export function referenceBudgetIssue(
  sources: readonly CanvasNode[],
  config: ModelConfig,
  settings?: GenerationSettings,
) {
  const usable = settings
    ? backendReferences(settings, sources, config)
        .filter((ref) => ref.role !== "continuation")
        .map((ref) => ref.node)
    : sources.flatMap((node) =>
        node.type === "subject" ? subjectReferenceNodes(node) : [node],
      );
  let total = 0;
  const seen = new Set<string>();
  for (const source of usable) {
    const key = `${source.id}:${source.type}:${source.data.src ?? source.data.text ?? ""}`;
    if (seen.has(key)) continue;
    seen.add(key);
    const size = nodeByteSize(source);
    const limit =
      source.type === "text"
        ? 64 * 1024
        : source.type === "image"
          ? (config.inputRules.imageBytes ?? 32 * 1024 * 1024)
          : source.type === "video"
            ? (config.inputRules.videoBytes ?? 50 * 1024 * 1024)
            : 50 * 1024 * 1024;
    if (size > limit) return "参考文件超过当前模型的大小限制";
    total += size;
  }
  if (total > (config.inputRules.requestBytes ?? Infinity))
    return "参考总大小超过当前模型的请求预算";
  for (const [kind, maximum] of [
    ["image", config.inputRules.maxImages],
    ["video", config.inputRules.maxVideos],
    ["audio", config.inputRules.maxAudios],
  ] as const)
    if (
      !(config.kind === "agent" && kind !== "image") &&
      usable.filter((source) => source.type === kind).length > maximum
    )
      return "参考数量超出当前模型限制";
  return null;
}
