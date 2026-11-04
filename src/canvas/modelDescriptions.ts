import { getActiveLocale } from "../i18n/messages.ts";

const MINIMAX_DESCRIPTIONS: Record<string, string> = {
  "MiniMax-H3": "高品质视频创作",
  "MiniMax-H3-Highspeed": "兼顾生成质量与速度",
  "MiniMax-H3-Lite": "轻量版本",
  "MiniMax-H3-Max": "极速生成",
};

const EN_MINIMAX_DESCRIPTIONS: Record<string, string> = {
  "MiniMax-H3": "Premium video creation",
  "MiniMax-H3-Highspeed": "Balanced quality and speed",
  "MiniMax-H3-Lite": "Lightweight version",
  "MiniMax-H3-Max": "Fast generation",
};

export function modelDescription(model: { protocol?: string | null; modelId: string }) {
  if (model.protocol !== "minimax_video_v2") return undefined;
  const source =
    getActiveLocale() === "en-US"
      ? EN_MINIMAX_DESCRIPTIONS
      : MINIMAX_DESCRIPTIONS;
  return source[model.modelId];
}
