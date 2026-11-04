/** Pure message lookup used by React and non-React modules. */
import { enUS } from "./messages/en-US/index.ts";
import { zhCN } from "./messages/zh-CN/index.ts";
import { DEFAULT_LOCALE } from "./locale.ts";
import type {
  Locale,
  MessageDescriptor,
  MessageEntry,
  MessageKey,
  MessageParams,
} from "./types.ts";

export type { Locale, MessageDescriptor, MessageKey, MessageParams } from "./types.ts";

export const catalogs: Record<Locale, Record<string, MessageEntry>> = {
  "zh-CN": zhCN,
  "en-US": enUS,
};

let activeLocale: Locale = DEFAULT_LOCALE;

export function setActiveLocale(locale: Locale): void {
  activeLocale = locale;
}

export function getActiveLocale(): Locale {
  return activeLocale;
}

function interpolate(template: string, params?: MessageParams): string {
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (match, name: string) =>
    params[name] === undefined ? match : String(params[name]),
  );
}

function entryFor(locale: Locale, key: string): MessageEntry | undefined {
  return catalogs[locale][key] ?? catalogs[DEFAULT_LOCALE][key];
}

export function hasMessage(key: string): key is MessageKey {
  return Object.hasOwn(zhCN, key);
}

/** Resolve one message. Unknown keys fall back to the key itself so gaps are visible. */
export function translate(
  locale: Locale,
  key: MessageKey,
  params?: MessageParams,
): string {
  const entry = entryFor(locale, key);
  if (entry === undefined) return key;
  return renderEntry(locale, entry, params);
}

/**
 * Backend errors and generated status values arrive as plain strings. Prefer a
 * local translation when the key is known; otherwise the caller keeps `detail`.
 */
export function translateDynamic(
  locale: Locale,
  key: string,
  params?: MessageParams,
): string | undefined {
  if (!hasMessage(key)) return undefined;
  return translate(locale, key, params);
}

export function translateDescriptor(
  locale: Locale,
  descriptor: MessageDescriptor,
): string {
  return translate(locale, descriptor.key, descriptor.params);
}

function renderEntry(
  locale: Locale,
  entry: MessageEntry,
  params?: MessageParams,
): string {
  if (typeof entry === "string") return interpolate(entry, params);
  const count = Number(params?.count);
  const category = Number.isFinite(count)
    ? new Intl.PluralRules(locale).select(count)
    : "other";
  const template =
    category === "one" ? entry.one : entry.other;
  return interpolate(template, params);
}

/** For event handlers and non-React utilities that cannot call `useI18n`. */
export function tNow(
  key: MessageKey,
  params?: MessageParams,
): string {
  return translate(activeLocale, key, params);
}

export function descriptor(
  key: MessageKey,
  params?: MessageParams,
): MessageDescriptor {
  return params ? { key, params } : { key };
}
