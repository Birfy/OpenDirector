import type { CanvasResource, SubjectData } from "./model.ts";
import { subjectError } from "./dataBoundary.ts";
import { assertUpload } from "./uploadPolicy.ts";

export type SubjectMediaSlot = "main" | "auxiliary" | "voice";

/** Slot selection must never turn an auxiliary upload into a main replacement. */
export function subjectWithResource(
  current: SubjectData | undefined,
  resource: CanvasResource,
  slot: SubjectMediaSlot = resource.kind === "audio" ? "voice" : "main",
): SubjectData {
  assertUpload(resource.kind, `subject-${slot}`);
  const subject: SubjectData = current ?? {
    description: "",
    category: "character",
    auxiliaries: [],
  };
  if (slot !== "main" && subject.main?.kind !== "image")
    throw new Error("请先添加主体主图片，再添加附加图片或声音。");
  const next = {
    ...subject,
    ...(slot === "auxiliary"
      ? { auxiliaries: [...subject.auxiliaries, resource] }
      : slot === "voice"
        ? { voice: resource }
        : { main: resource }),
  };
  const issue = subjectError(next);
  if (issue) throw new Error(issue);
  return next;
}

export function subjectChoiceIssue(
  kind: string,
  seconds: number | undefined | null,
  slot: SubjectMediaSlot,
): string | null {
  if (kind === "subject") return slot === "main" ? null : "请选择单个媒体。";
  const allowed =
    slot === "voice"
      ? ["audio"]
      : slot === "auxiliary"
        ? ["image"]
        : ["image", "video"];
  if (!allowed.includes(kind)) return "该素材不适用于当前主体槽位。";
  if (kind === "video" || kind === "audio") {
    if (
      seconds != null &&
      (!Number.isFinite(seconds) || seconds <= 0 || seconds > 15)
    )
      return "主体视频和音频需在 15 秒以内。";
  }
  return null;
}
