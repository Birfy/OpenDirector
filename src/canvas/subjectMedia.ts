import type { CanvasResource, SubjectData } from "./model.ts";
import { subjectError } from "./dataBoundary.ts";
import { assertUpload } from "./uploadPolicy.ts";
import { tNow } from "../i18n/messages.ts";
import type { Translate } from "../i18n/I18nProvider";
import type {
  MessageDescriptor,
  MessageKey,
  MessageParams,
} from "../i18n/types";

export type SubjectMediaSlot = "main" | "auxiliary" | "voice";

/** Module-level fallback for helpers that cannot call React hooks. */
const nowTranslate: Translate = (
  input: MessageKey | MessageDescriptor,
  params?: MessageParams,
) =>
  typeof input === "string"
    ? tNow(input, params)
    : tNow(input.key, input.params);

/** Slot selection must never turn an auxiliary upload into a main replacement. */
export function subjectWithResource(
  current: SubjectData | undefined,
  resource: CanvasResource,
  slot: SubjectMediaSlot = resource.kind === "audio" ? "voice" : "main",
  t: Translate = nowTranslate,
): SubjectData {
  assertUpload(resource.kind, `subject-${slot}`);
  const subject: SubjectData = current ?? {
    description: "",
    category: "character",
    auxiliaries: [],
  };
  if (slot !== "main" && subject.main?.kind !== "image")
    throw new Error(t("library.subject.mainRequired"));
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
  t: Translate = nowTranslate,
): string | null {
  if (kind === "subject")
    return slot === "main" ? null : t("library.subject.singleMedia");
  const allowed =
    slot === "voice"
      ? ["audio"]
      : slot === "auxiliary"
        ? ["image"]
        : ["image", "video"];
  if (!allowed.includes(kind)) return t("library.subject.slotMismatch");
  if (kind === "video" || kind === "audio") {
    if (
      seconds != null &&
      (!Number.isFinite(seconds) || seconds <= 0 || seconds > 15)
    )
      return t("library.subject.durationLimit");
  }
  return null;
}
