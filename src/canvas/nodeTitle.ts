/** Default node names are generated copy; translate them when the UI locale changes. */
import type { Locale, MessageKey } from "../i18n/types.ts";
import { getActiveLocale, translate } from "../i18n/messages.ts";
import type { CanvasNodeKind } from "./model.ts";

const KIND_LABELS: Record<CanvasNodeKind, MessageKey> = {
  image: "canvasNodes.kind.image",
  video: "canvasNodes.kind.video",
  audio: "canvasNodes.kind.audio",
  file: "canvasNodes.kind.file",
  text: "canvasNodes.kind.text",
  group: "canvasNodes.kind.group",
  timeline: "canvasNodes.kind.timeline",
  subject: "canvasNodes.kind.subject",
  stack: "canvasNodes.kind.stack",
  tool: "canvasNodes.kind.tool",
  external: "canvasNodes.kind.external",
};

const SOURCE_LOCALES: readonly Locale[] = ["zh-CN", "en-US"];

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Translate names created as `<kind label> <number>` while leaving custom
 * names untouched. Both locale labels are recognized so a language switch is
 * reversible; a matching custom name is treated as a default name.
 */
export function displayNodeTitle(
  kind: CanvasNodeKind,
  title: string,
  locale: Locale = getActiveLocale(),
): string {
  if (!title.trim()) return translate(locale, KIND_LABELS[kind]);
  for (const source of SOURCE_LOCALES) {
    const label = translate(source, KIND_LABELS[kind]);
    const match = new RegExp(
      `^${escapeRegExp(label)}\\s*([1-9]\\d*)?$`,
    ).exec(title.trim());
    if (!match) continue;
    const translated = translate(locale, KIND_LABELS[kind]);
    return match[1] ? `${translated} ${match[1]}` : translated;
  }
  return title;
}
