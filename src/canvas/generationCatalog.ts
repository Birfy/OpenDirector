import type { CanvasNode, GenerationSettings } from "./model.ts";
import { subjectReferenceNodes } from "./subjectReferences.ts";
import { frameImageLimitIssue } from "./frameReferences.ts";

/** Authored capability catalog, based on the 2026-10-26 original-site session.
 * Menu visibility is separate from a verified parameter combination. This is
 * not a service registry or a price API; no entry enables remote generation.
 * First/last-frame rules: canvas-core readable lines 118714–118743, 118392–118419.
 */
export interface GenerationModel {
  name: string;
  media: GenerationSettings["mode"];
  verifiedParameters: boolean;
  resolutions: readonly string[];
  videoModes?: readonly NonNullable<GenerationSettings["videoMode"]>[];
  duration?: { min: number; max: number; step: number };
  note?: string;
}

export const GENERATION_MODELS: readonly GenerationModel[] = [
  ...[
    "Seedream 5.0 Pro",
    "Seedream 5.0 Flash",
    "美学 V8.2",
    "Seedream 5.0 Lite",
    "Seedream 4.7",
    "Seedream 4.6",
    "Seedream 4.5",
    "Seedream 4.1",
    "Seedream 4.0",
  ].map((name) => ({
    name,
    media: "image" as const,
    verifiedParameters: [
      "Seedream 5.0 Pro",
      "Seedream 5.0 Flash",
      "Seedream 5.0 Lite",
      "Seedream 4.0",
    ].includes(name),
    resolutions: ["2K"],
    ...(name === "Seedream 5.0 Lite"
      ? { note: "智能编辑模型；本地未接入画笔等智能编辑能力。" }
      : {}),
  })),
  {
    name: "Seedance 2.0",
    media: "video",
    verifiedParameters: true,
    resolutions: ["720P"],
    videoModes: ["reference", "first-last"],
    duration: { min: 4, max: 15, step: 1 },
    note: "原站显示 VIP；本地选择不代表已取得模型服务。",
  },
  {
    name: "Seedance 2.0 mini",
    media: "video",
    verifiedParameters: true,
    resolutions: ["720P"],
    videoModes: ["reference", "first-last"],
    duration: { min: 4, max: 15, step: 1 },
  },
  {
    name: "Seedance 1.0 Fast",
    media: "video",
    verifiedParameters: true,
    resolutions: ["720P"],
    videoModes: ["first-last"],
    duration: { min: 5, max: 5, step: 1 },
    note: "仅首尾帧模式，可无参考做文生视频；目前只核实 5 秒参数。",
  },
  {
    name: "Seedance 2.5 样片",
    media: "video",
    verifiedParameters: false,
    resolutions: ["480P"],
    videoModes: ["reference", "first-last"],
    note: "已观察 480P 样片入口；普通生成的时长范围尚未核实。",
  },
  ...["Seedance 2.5", "Seedance 2.0 Fast", "HappyHorse 1.1", "Wan 3.0"].map(
    (name) => ({
      name,
      media: "video" as const,
      verifiedParameters: false,
      resolutions: [],
      note:
        name === "Seedance 2.0 Fast"
          ? "原站显示 VIP；普通生成参数尚未核实。"
          : "已观察模型入口；普通生成参数尚未核实。",
    }),
  ),
  {
    name: "SeedAudio 1.0",
    media: "audio",
    verifiedParameters: true,
    resolutions: [],
  },
  {
    name: "SeedMusic 1.0 Preview",
    media: "audio",
    verifiedParameters: true,
    resolutions: [],
    duration: { min: 30, max: 120, step: 1 },
  },
];

export const GENERATION_RATIOS = [
  "21:9",
  "16:9",
  "3:2",
  "4:3",
  "1:1",
  "3:4",
  "2:3",
  "9:16",
  "5:4",
  "4:5",
  "2:1",
] as const;

export function generationModel(settings: GenerationSettings) {
  return GENERATION_MODELS.find(
    (model) => model.name === settings.model && model.media === settings.mode,
  );
}

export function generationModelsFor(settings: GenerationSettings) {
  return GENERATION_MODELS.filter(
    (model) =>
      model.media === settings.mode &&
      (settings.mode !== "audio" ||
        model.name ===
          (settings.audioCreationType === "music"
            ? "SeedMusic 1.0 Preview"
            : "SeedAudio 1.0")),
  );
}

export function generationDefaults(
  mode: GenerationSettings["mode"],
): GenerationSettings {
  return {
    mode,
    model:
      mode === "image"
        ? "Seedream 5.0 Pro"
        : mode === "video"
          ? "Seedance 2.0"
          : "SeedAudio 1.0",
    aspectRatio: mode === "video" ? "16:9" : "1:1",
    durationSeconds: mode === "video" ? 4 : 5,
    resolution: mode === "audio" ? "自动" : mode === "image" ? "2K" : "720P",
    prompt: "",
    count: 1,
    audioEnabled: true,
    videoMode: "reference",
    audioCreationType: "audio",
    audioMode: "unified",
    voiceName: "动漫海绵",
    imagePreset: "none",
  };
}

/** A user selection changes dependent settings once, before persistence. */
export function changeGenerationSettings(
  settings: GenerationSettings,
  patch: Partial<GenerationSettings>,
): GenerationSettings {
  const next = { ...settings, ...patch };
  if (next.mode === "audio" && patch.audioCreationType) {
    next.model =
      patch.audioCreationType === "music"
        ? "SeedMusic 1.0 Preview"
        : "SeedAudio 1.0";
    next.resolution = "自动";
    next.durationSeconds = patch.audioCreationType === "music" ? 30 : 5;
    next.count = 1;
  }
  const model = generationModel(next);
  if (patch.model || patch.audioCreationType) {
    if (
      !next.modelConfigId &&
      model?.resolutions.length &&
      !model.resolutions.includes(next.resolution)
    )
      next.resolution = model.resolutions[0]!;
    else if (!next.modelConfigId && !model?.resolutions.length)
      next.resolution = "自动";
    if (!next.modelConfigId && model?.duration)
      next.durationSeconds = Math.max(
        model.duration.min,
        Math.min(model.duration.max, next.durationSeconds),
      );
    if (
      next.mode === "video" &&
      model?.videoModes &&
      !model.videoModes.includes(next.videoMode ?? "reference")
    )
      next.videoMode = model.videoModes[0];
    if (next.model !== "Seedream 5.0 Pro") next.imagePreset = "none";
  }
  if (next.mode === "image" && next.imagePreset === "product-views") {
    next.model = "Seedream 5.0 Pro";
    next.aspectRatio = "16:9";
    next.resolution = "2K";
    next.count = 1;
  }
  return next;
}

export function generationReferenceRole(node: CanvasNode): string {
  return (
    (
      {
        image: "图片参考",
        video: "视频参考",
        audio: "声音参考",
        subject: "主体参考",
        tool: "工具参数上下文",
      } as Record<string, string>
    )[node.data.kind] ?? "不支持的参考"
  );
}

export function generationReferenceIssue(
  node: CanvasNode,
  settings: GenerationSettings,
): string | null {
  if (
    settings.mode === "audio" &&
    (settings.audioCreationType === "music" || settings.audioMode === "tts")
  )
    return "此模式使用提示词或朗读文本，不使用该参考";
  if (
    settings.mode === "video" &&
    settings.videoMode === "first-last" &&
    !["image", "text", "tool"].includes(node.data.kind)
  )
    return "首尾帧模式请使用图片节点选择帧素材";
  if (node.data.kind === "tool" && settings.mode !== "audio") {
    if (settings.mode === "image" && node.data.tool?.kind === "camera_motion")
      return "运镜工具只用于视频创作";
    return node.data.tool?.fields.some((field) =>
      field.values.some((value) => value.trim()),
    )
      ? null
      : "工具尚未配置参数";
  }
  if (node.data.kind === "subject") {
    const resources = subjectReferenceNodes(node);
    if (!resources.length) return "主体尚未添加可用主素材";
    return resources.some(
      (resource) => !generationReferenceIssue(resource, settings),
    )
      ? null
      : "当前模式不接收主体中的素材";
  }
  const allowed =
    settings.mode === "image"
      ? ["image", "text"]
      : settings.mode === "video"
        ? ["image", "video", "audio", "text"]
        : ["audio"];
  if (!allowed.includes(node.data.kind)) return "此模式未核实支持该素材类型";
  if (node.type === "text")
    return node.data.text?.trim() ? null : "文本节点为空";
  return node.data.src && node.data.assetState !== "missing"
    ? null
    : "素材尚未导入或已丢失";
}

/** Only the explicitly chosen frame slots are submitted in first/last mode. */
export function generationBlocker(
  settings: GenerationSettings,
  incomingNodes: readonly CanvasNode[],
): string | null {
  const frameLimit = frameImageLimitIssue(settings, incomingNodes);
  if (frameLimit) return frameLimit;
  const model = generationModel(settings);
  if (!model) return "此模型不在已观察目录中，请重新选择模型。";
  if (
    settings.mode === "audio" &&
    !generationModelsFor(settings).some((item) => item.name === settings.model)
  )
    return "创作类型与模型不匹配，请重新选择创作类型。";
  if (!model.verifiedParameters)
    return "仅确认了模型菜单入口；参数范围待核实，暂不能提交本地任务。";
  if (
    settings.imagePreset === "product-views" &&
    (settings.mode !== "image" ||
      settings.model !== "Seedream 5.0 Pro" ||
      settings.aspectRatio !== "16:9" ||
      settings.resolution !== "2K" ||
      (settings.count ?? 1) !== 1)
  )
    return "产品三视图仅支持 Seedream 5.0 Pro、16:9、2K、1 张。";
  if (
    model.resolutions.length &&
    !model.resolutions.includes(settings.resolution)
  )
    return "当前清晰度尚未核实，请选择面板中已核实的参数。";
  if (
    model.duration &&
    (!Number.isInteger(settings.durationSeconds) ||
      settings.durationSeconds < model.duration.min ||
      settings.durationSeconds > model.duration.max)
  )
    return "时长超出当前模型已核实范围。";
  if (settings.mode === "video") {
    if (
      model.videoModes &&
      !model.videoModes.includes(settings.videoMode ?? "reference")
    )
      return "当前模型不支持所选视频模式。";
    if (settings.videoMode === "first-last") {
      if (settings.lastFrameNodeId && !settings.firstFrameNodeId)
        return "使用尾帧前，请先选择首帧。";
      for (const [id, label] of [
        [settings.firstFrameNodeId, "首帧"],
        [settings.lastFrameNodeId, "尾帧"],
      ] as const) {
        if (!id) continue;
        const node = incomingNodes.find((item) => item.id === id);
        if (
          !node ||
          node.data.kind !== "image" ||
          !node.data.src ||
          node.data.assetState === "missing"
        )
          return `${label}素材未连接或已丢失，请重新选择。`;
      }
      if (!settings.prompt.trim() && !settings.firstFrameNodeId)
        return "填写提示词或选择首帧。";
      return null;
    }
  }
  if (
    settings.mode === "audio" &&
    settings.audioCreationType !== "music" &&
    settings.audioMode === "tts" &&
    !settings.voiceName?.trim()
  )
    return "请选择朗读音色。";
  if (
    !settings.prompt.trim() &&
    !incomingNodes.some(
      (node) =>
        node.data.kind !== "tool" && !generationReferenceIssue(node, settings),
    )
  )
    return settings.mode === "audio"
      ? "请填写朗读文本或声音创作提示词。"
      : "请填写提示词或连接可用参考素材。";
  return null;
}

export interface GenerationReference {
  node: CanvasNode;
  role: "reference" | "firstFrame" | "lastFrame" | "tool";
}

/** Call after generationBlocker; a connected node is not automatically a frame. */
export function generationActiveReferences(
  settings: GenerationSettings,
  incomingNodes: readonly CanvasNode[],
): GenerationReference[] {
  if (settings.mode === "video" && settings.videoMode === "first-last") {
    const result: GenerationReference[] = [];
    for (const [id, role] of [
      [settings.firstFrameNodeId, "firstFrame"],
      [settings.lastFrameNodeId, "lastFrame"],
    ] as const) {
      const node = incomingNodes.find(
        (item) =>
          item.id === id &&
          item.data.kind === "image" &&
          item.data.src &&
          item.data.assetState !== "missing",
      );
      if (node) result.push({ node, role });
    }
    return [
      ...result,
      ...incomingNodes
        .filter(
          (node) =>
            node.type === "text" && !generationReferenceIssue(node, settings),
        )
        .map((node) => ({ node, role: "reference" as const })),
      ...incomingNodes
        .filter(
          (node) =>
            node.data.kind === "tool" &&
            !generationReferenceIssue(node, settings),
        )
        .map((node) => ({ node, role: "tool" as const })),
    ];
  }
  return incomingNodes
    .filter((node) => !generationReferenceIssue(node, settings))
    .map((node) => ({
      node,
      role: node.data.kind === "tool" ? "tool" : "reference",
    }));
}

export interface ObservedPrice {
  credits: number;
  beforeDiscount?: number;
  context: string;
}

/** No extrapolation across duration, resolution, quantity, or unobserved models. */
export function observedGenerationPrice(
  settings: GenerationSettings,
): ObservedPrice | null {
  if ((settings.count ?? 1) !== 1) return null;
  if (
    settings.mode === "image" &&
    settings.resolution === "2K" &&
    settings.imagePreset !== "product-views"
  ) {
    const prices: Record<string, number> = {
      "Seedream 5.0 Pro": 8,
      "Seedream 5.0 Flash": 3,
      "Seedream 5.0 Lite": 3,
      "Seedream 4.0": 1,
    };
    const credits = prices[settings.model];
    return credits === undefined
      ? null
      : {
          credits,
          ...(settings.model === "Seedream 5.0 Pro"
            ? { beforeDiscount: 11 }
            : {}),
          context: "2K · 1 张",
        };
  }
  if (settings.mode === "video" && settings.resolution === "720P") {
    if (settings.videoMode === "reference" && settings.durationSeconds === 4) {
      if (settings.model === "Seedance 2.0")
        return { credits: 56, context: "全能参考 · 4 秒 · 720P · 1 条" };
      if (settings.model === "Seedance 2.0 mini")
        return {
          credits: 24,
          beforeDiscount: 36,
          context: "全能参考 · 4 秒 · 720P · 1 条",
        };
    }
    if (
      settings.model === "Seedance 1.0 Fast" &&
      settings.videoMode === "first-last" &&
      settings.durationSeconds === 5
    )
      return { credits: 10, context: "首尾帧 · 5 秒 · 720P · 1 条" };
  }
  if (settings.mode === "audio") {
    if (
      settings.model === "SeedMusic 1.0 Preview" &&
      settings.audioCreationType === "music" &&
      settings.durationSeconds === 30
    )
      return { credits: 6, context: "音乐生成 · 30 秒 · 本次实测" };
    if (
      settings.model === "SeedAudio 1.0" &&
      settings.audioCreationType === "audio" &&
      settings.audioMode === "tts" &&
      settings.voiceName === "动漫海绵"
    )
      return {
        credits: 12,
        beforeDiscount: 24,
        context: "动漫海绵朗读 · 本次输入实测，非按字数报价",
      };
  }
  return null;
}
