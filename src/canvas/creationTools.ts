import type { CanvasNodeKind } from "./model.ts";

/** Keep the creation menu and the left rail in the same order. */
export const CANVAS_CREATION_TOOLS: readonly {
  kind: CanvasNodeKind;
  label: string;
  icon: string;
  unavailable?: boolean;
}[] = [
  { kind: "text", label: "文本", icon: "rail-text" },
  { kind: "image", label: "图片", icon: "rail-image" },
  { kind: "video", label: "视频", icon: "rail-video" },
  { kind: "audio", label: "音频", icon: "rail-audio" },
  { kind: "timeline", label: "时间线", icon: "rail-timeline" },
  { kind: "subject", label: "主体", icon: "rail-subject" },
  { kind: "tool", label: "导演工具箱", icon: "rail-tool", unavailable: true },
  { kind: "external", label: "导演台", icon: "rail-stage", unavailable: true },
];
