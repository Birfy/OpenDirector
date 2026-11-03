/** Short-lived cache for list reads that panels repeat every time they open.
 *
 * Only whole-list reads use it. Mutations invalidate the entries they touch,
 * and callers that must observe the newest rows pass `fresh`. Entries are
 * never written on failure, so a transient error leaves the previous list
 * available instead of caching the error.
 */
type Entry = { at: number; value: unknown };

const entries = new Map<string, Entry>();
const inflight = new Map<string, Promise<unknown>>();

/** A reopened dialog or a project switch happens within seconds. */
export const CACHE_MAX_AGE_MS = 30_000;

export function peekCached<T>(
  key: string,
  maxAgeMs = CACHE_MAX_AGE_MS,
): T | undefined {
  const entry = entries.get(key);
  if (!entry || Date.now() - entry.at > maxAgeMs) return undefined;
  return entry.value as T;
}

export function invalidateCached(prefix = ""): void {
  for (const key of [...entries.keys()])
    if (key.startsWith(prefix)) entries.delete(key);
}

export function cachedRequest<T>(
  key: string,
  read: () => Promise<T>,
  options: { maxAgeMs?: number; fresh?: boolean } = {},
): Promise<T> {
  const maxAge = options.maxAgeMs ?? CACHE_MAX_AGE_MS;
  if (!options.fresh) {
    const cached = peekCached<T>(key, maxAge);
    if (cached !== undefined) return Promise.resolve(cached);
  }
  // Panels mount together (a dialog and a project selector): one request serves
  // both, and a caller that asked for fresh rows waits for the running read.
  const running = inflight.get(key);
  if (running) return running as Promise<T>;
  const pending = read()
    .then((value) => {
      entries.set(key, { at: Date.now(), value });
      return value;
    })
    .finally(() => {
      if (inflight.get(key) === pending) inflight.delete(key);
    });
  inflight.set(key, pending);
  return pending;
}

/** Warms a list the UI is about to show. Failures stay silent on purpose. */
export function prefetchRequest<T>(
  key: string,
  read: () => Promise<T>,
  options: { maxAgeMs?: number } = {},
): void {
  if (peekCached<T>(key, options.maxAgeMs) !== undefined) return;
  void cachedRequest(key, read, options).catch(() => {});
}
