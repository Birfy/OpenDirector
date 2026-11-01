import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type SetStateAction,
} from "react";
import {
  loadGenerationJobs,
  mergeGenerationJobs,
  saveGenerationJob,
  type GenerationJob,
} from "./generationHistory";
import { creationClient, creationEnabled } from "../backend/creationClient.ts";
import { creationJobs } from "../backend/creationJobs.ts";
import { toolHistoryJobs } from "../backend/tools.ts";
import { abortable } from "../backend/resilientRead.ts";

/** Each callback retains its project owner, including a service result arriving after switching. */
export function useGenerationJobs(
  documentId: string,
  onError: (message: string) => void,
  connected = true,
) {
  const cache = useRef(new Map<string, GenerationJob[]>());
  const loaded = useRef(new Set<string>());
  const loading = useRef(new Map<string, Promise<void>>());
  const [revision, setRevision] = useState(0);
  const cacheCursors = useRef(new Map<string, number>());
  const reads = useRef(new Map<string, number>());
  const error = useRef(onError);
  error.current = onError;
  const readJobs = useCallback(
    async (signal?: AbortSignal) => {
      signal?.throwIfAborted();
      if (creationEnabled()) loaded.current.add(documentId);
      if (!loaded.current.has(documentId)) {
        let pending = loading.current.get(documentId);
        if (!pending) {
          pending = loadGenerationJobs(documentId)
            .then((saved) => {
              cache.current.set(
                documentId,
                mergeGenerationJobs(saved, cache.current.get(documentId) ?? []),
              );
              loaded.current.add(documentId);
            })
            .catch((reason) => {
              // Tool history is service-owned, including when browser storage is
              // unavailable. Losing the old cache must not block those queries.
              loaded.current.add(documentId);
              error.current(`浏览器历史读取失败：${String(reason)}`);
            })
            .finally(() => loading.current.delete(documentId));
          loading.current.set(documentId, pending);
        }
        await pending;
      }
      if (!connected) return cache.current.get(documentId) ?? [];
      const token = (reads.current.get(documentId) ?? 0) + 1;
      reads.current.set(documentId, token);
      const snapshot = creationEnabled()
        ? creationClient(documentId).snapshot
        : undefined;
      const [normal, tools] = await abortable(
        Promise.all([
          snapshot &&
          snapshot.eventCursor > (cacheCursors.current.get(documentId) ?? -1)
            ? creationJobs(snapshot)
            : Promise.resolve(undefined),
          toolHistoryJobs(documentId, cache.current.get(documentId), {
            signal,
          }),
        ]),
        signal,
      );
      signal?.throwIfAborted();
      if (reads.current.get(documentId) !== token)
        return cache.current.get(documentId) ?? [];
      const current = cache.current.get(documentId) ?? [];
      const base =
        normal &&
        snapshot &&
        snapshot.eventCursor >= (cacheCursors.current.get(documentId) ?? -1)
          ? normal
          : creationEnabled()
            ? current.filter((job) => !job.tool)
            : current;
      if (normal && snapshot)
        cacheCursors.current.set(
          documentId,
          Math.max(
            snapshot.eventCursor,
            cacheCursors.current.get(documentId) ?? -1,
          ),
        );
      // Tool jobs are queried from their ledger. A creation snapshot owns only
      // GenerationSpec jobs and must never erase an accepted tool execution.
      const pending = current.filter(
        (job) =>
          job.tool && !job.taskId && !tools.some((tool) => tool.id === job.id),
      );
      const next = [
        ...base.filter((job) => !job.tool),
        ...tools,
        ...pending,
      ].sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0));
      if (
        next.length !== current.length ||
        next.some((job, index) => job !== current[index])
      )
        cache.current.set(documentId, next);
      return cache.current.get(documentId) ?? [];
    },
    [documentId, connected],
  );
  useEffect(() => {
    let active = true;
    const controller = new AbortController();
    let generation = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const unsubscribe = creationEnabled()
      ? creationClient(documentId).listen(() => {
          const token = ++generation;
          const before = cache.current.get(documentId);
          void readJobs(controller.signal)
            .then((next) => {
              if (active && token === generation && next !== before)
                setRevision((n) => n + 1);
            })
            .catch((reason) => active && error.current(String(reason)));
        })
      : undefined;
    const poll = async () => {
      try {
        const before = cache.current.get(documentId);
        const next = await readJobs(controller.signal);
        if (active && before !== next) setRevision((n) => n + 1);
      } catch (reason) {
        if (active) error.current(String(reason));
      }
      if (active && connected) timer = setTimeout(poll, 2000);
    };
    void poll();
    return () => {
      active = false;
      controller.abort();
      clearTimeout(timer);
      unsubscribe?.();
    };
  }, [readJobs, connected]);
  const setJobs = useCallback(
    (action: SetStateAction<GenerationJob[]>) => {
      const old = cache.current.get(documentId) ?? [];
      const updated = typeof action === "function" ? action(old) : action;
      const next = updated.map((job) =>
        job.createdAt === undefined ? { ...job, createdAt: Date.now() } : job,
      );
      cache.current.set(documentId, next);
      setRevision((n) => n + 1);
      for (const job of next)
        if (!creationEnabled() && !job.tool && !old.includes(job))
          void saveGenerationJob(documentId, job).catch((reason) =>
            error.current(`历史保存失败：${String(reason)}`),
          );
    },
    [documentId],
  );
  void revision;
  return [cache.current.get(documentId) ?? [], setJobs, readJobs] as const;
}
