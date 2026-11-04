/** Locale preference is a browser preference, not project business data. */
import type { Locale } from "./types.ts";

export const LOCALE_KEY = "opendirector.locale.v1";
export const DEFAULT_LOCALE: Locale = "zh-CN";

export function isLocale(value: unknown): value is Locale {
  return value === "zh-CN" || value === "en-US";
}

function browserLanguage(): string {
  if (typeof navigator === "undefined") return "";
  return navigator.languages?.[0] ?? navigator.language ?? "";
}

/** Saved preference wins; otherwise Chinese browsers stay Chinese, everyone else gets English. */
export function detectLocale(): Locale {
  try {
    const saved = localStorage.getItem(LOCALE_KEY);
    if (isLocale(saved)) return saved;
  } catch {
    // Private mode can reject storage; detection still works.
  }
  return /^zh\b/i.test(browserLanguage()) ? "zh-CN" : "en-US";
}

export function writeLocale(locale: Locale): void {
  try {
    localStorage.setItem(LOCALE_KEY, locale);
  } catch {
    // A rejected preference must not prevent the current session from switching.
  }
}

export function applyDocumentLocale(locale: Locale): void {
  if (typeof document === "undefined") return;
  document.documentElement.lang = locale;
  document.documentElement.dataset.locale = locale;
  document.documentElement.dir = "ltr";
}
