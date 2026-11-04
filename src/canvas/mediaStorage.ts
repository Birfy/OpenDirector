/** Wire format 2 stores repeated embedded media once; runtime documents stay v1. */
import { tNow } from "../i18n/messages.ts";
const PREFIX = "opendirector-media:";
const MIN_SHARED_LENGTH = 64 * 1024;

function mapSources(
  value: unknown,
  source: (value: string) => unknown,
): unknown {
  if (Array.isArray(value))
    return value.map((item) => mapSources(item, source));
  if (value && typeof value === "object")
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        key,
        key === "src" && typeof item === "string"
          ? source(item)
          : mapSources(item, source),
      ]),
    );
  return value;
}

export function compactMedia(document: unknown): unknown {
  const counts = new Map<string, number>();
  // Walk the already validated document without stringifying its media copies.
  const count = (value: unknown) => {
    if (Array.isArray(value)) value.forEach(count);
    else if (value && typeof value === "object")
      for (const [key, item] of Object.entries(value)) {
        if (
          key === "src" &&
          typeof item === "string" &&
          item.startsWith("data:") &&
          item.length >= MIN_SHARED_LENGTH
        )
          counts.set(item, (counts.get(item) ?? 0) + 1);
        else count(item);
      }
  };
  count(document);
  const mediaSources = [...counts].filter(([, n]) => n > 1).map(([src]) => src);
  if (!mediaSources.length) return document;
  const indices = new Map(mediaSources.map((src, i) => [src, i]));
  const value = mapSources(document, (src) =>
    indices.has(src) ? PREFIX + indices.get(src) : src,
  ) as Record<string, unknown>;
  return { ...value, version: 2, mediaSources };
}

export function expandMedia(value: Record<string, unknown>): unknown {
  if (value.version !== 2) return value;
  const sources = value.mediaSources;
  if (
    !Array.isArray(sources) ||
    !sources.length ||
    sources.some((src) => typeof src !== "string" || !src.startsWith("data:"))
  )
    throw new Error(tNow("errors.media.sharedTable"));
  const { mediaSources: _, ...document } = value;
  const expanded = mapSources(document, (src) => {
    if (!src.startsWith(PREFIX)) return src;
    const index = src.slice(PREFIX.length);
    if (
      !/^(0|[1-9]\d*)$/.test(index) ||
      !Number.isSafeInteger(Number(index)) ||
      Number(index) >= sources.length
    )
      throw new Error(tNow("errors.media.sharedMissing"));
    return sources[Number(index)];
  }) as Record<string, unknown>;
  return { ...expanded, version: 1 };
}
