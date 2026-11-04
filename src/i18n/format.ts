/** Locale-aware formatters. Keep UI code free of hard-coded `zh-CN` calls. */
import type { Locale } from "./types.ts";

export function formatDateTime(
  locale: Locale,
  value: Date | number,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  },
): string {
  return new Intl.DateTimeFormat(locale, options).format(value);
}

export function formatTime(
  locale: Locale,
  value: Date | number,
  options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  },
): string {
  return formatDateTime(locale, value, options);
}

export function formatDate(
  locale: Locale,
  value: Date | number,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  },
): string {
  return formatDateTime(locale, value, options);
}

export function formatNumber(
  locale: Locale,
  value: number,
  options?: Intl.NumberFormatOptions,
): string {
  return new Intl.NumberFormat(locale, options).format(value);
}

export function formatList(locale: Locale, values: readonly string[]): string {
  return new Intl.ListFormat(locale, {
    style: "long",
    type: "conjunction",
  }).format(values);
}

export function formatRelativeTime(
  locale: Locale,
  value: number,
  unit: Intl.RelativeTimeFormatUnit,
): string {
  return new Intl.RelativeTimeFormat(locale, { numeric: "auto" }).format(
    value,
    unit,
  );
}
