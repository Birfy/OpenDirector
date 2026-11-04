import type { CanvasNode, CanvasResource } from "./model.ts";
import { tNow } from "../i18n/messages.ts";
import type { MessageKey } from "../i18n/types.ts";

export type UploadIntent =
  | "create"
  | "replace"
  | "reference"
  | "timeline"
  | "subject-main"
  | "subject-auxiliary"
  | "subject-voice";
const labels: Record<string, MessageKey> = {
  image: "errors.upload.kindImage",
  video: "errors.upload.kindVideo",
  audio: "errors.upload.kindAudio",
  text: "errors.upload.kindText",
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
  const labelKey = labels[targetKind ?? ""];
  return allowed.includes(kind)
    ? null
    : intent === "replace"
      ? tNow("errors.upload.kindMismatch", {
          kind: labelKey ? tNow(labelKey) : (targetKind ?? ""),
        })
      : tNow("errors.upload.unsupported");
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
      tNow("errors.upload.size", { kib: Math.round(maximum / 1024) }),
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
