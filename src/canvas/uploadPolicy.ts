import type { CanvasNode, CanvasResource } from "./model.ts";

export type UploadIntent =
  | "create"
  | "replace"
  | "reference"
  | "timeline"
  | "subject-main"
  | "subject-auxiliary"
  | "subject-voice";
const labels: Record<string, string> = {
  image: "图片",
  video: "视频",
  audio: "音频",
  text: "文本",
};
export function uploadIssue(
  kind: CanvasResource["kind"],
  intent: UploadIntent,
  targetKind?: CanvasNode["type"],
): string | null {
  const allowed =
    intent === "replace"
      ? [targetKind]
      : intent === "subject-main"
        ? ["image", "video"]
        : intent === "subject-auxiliary"
          ? ["image"]
          : intent === "subject-voice"
            ? ["audio"]
            : intent === "timeline"
              ? ["image", "video", "audio"]
              : intent === "reference"
                ? ["image", "video", "audio", "text"]
                : ["image", "video", "audio", "text", "file"];
  return allowed.includes(kind)
    ? null
    : intent === "replace"
      ? `该节点仅支持${labels[targetKind ?? ""] ?? targetKind}素材，上传文件类型不匹配。`
      : "当前操作不支持此素材类型。";
}
export function assertUpload(
  kind: CanvasResource["kind"],
  intent: UploadIntent,
  targetKind?: CanvasNode["type"],
) {
  const reason = uploadIssue(kind, intent, targetKind);
  if (reason) throw new Error(reason);
}
export function assertReferenceSize(
  kind: string,
  size: number,
  imageBytes = 32 * 1024 * 1024,
) {
  const maximum =
    kind === "text"
      ? 64 * 1024
      : kind === "image"
        ? imageBytes
        : 50 * 1024 * 1024;
  if (size > maximum)
    throw new Error(
      `参考文件超过大小限制（${Math.round(maximum / 1024)} KiB）。`,
    );
}

export function nodeByteSize(node: CanvasNode): number {
  if (node.data.byteSize !== undefined) return node.data.byteSize;
  if (node.type === "text")
    return new TextEncoder().encode(node.data.text ?? "").length;
  const src = node.data.src ?? "";
  const comma = src.indexOf(",");
  return src.startsWith("data:") && comma >= 0
    ? Math.max(
        0,
        Math.floor(((src.length - comma - 1) * 3) / 4) -
          (src.endsWith("==") ? 2 : src.endsWith("=") ? 1 : 0),
      )
    : 0;
}
