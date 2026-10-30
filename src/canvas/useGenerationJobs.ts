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

/** Each callback retains its project owner, including a service result arriving after switching. */
export function useGenerationJobs(
  documentId: string,
  onError: (message: string) => void,
) {
  const cache = useRef(new Map<string, GenerationJob[]>());
  const loaded = useRef(new Set<string>());
  const loading = useRef(new Map<string, Promise<void>>());
  const [revision, setRevision] = useState(0);
  const cacheCursors = useRef(new Map<string, number>());
  const error = useRef(onError);
  error.current = onError;
  const readJobs = useCallback(async () => {
    if (creationEnabled()) {
      const client = creationClient(documentId);
      if (!client.snapshot) return [];
      const snapshot = client.snapshot;
      const jobs = await creationJobs(snapshot);
      if (
        snapshot.eventCursor >= (cacheCursors.current.get(documentId) ?? -1)
      ) {
        cache.current.set(documentId, jobs);
        cacheCursors.current.set(documentId, snapshot.eventCursor);
      }
      return cache.current.get(documentId) ?? jobs;
    }
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
          .finally(() => loading.current.delete(documentId));
        loading.current.set(documentId, pending);
      }
      await pending;
    }
    return cache.current.get(documentId) ?? [];
  }, [documentId]);
  useEffect(() => {
    let active = true;
    let generation = 0;
    const unsubscribe = creationEnabled()
      ? creationClient(documentId).listen(() => {
          const token = ++generation;
          void readJobs()
            .then(() => {
              if (active && token === generation) setRevision((n) => n + 1);
            })
            .catch((reason) => active && error.current(String(reason)));
        })
      : undefined;
    void readJobs()
      .then(() => active && setRevision((n) => n + 1))
      .catch((reason) => active && error.current(String(reason)));
    return () => {
      active = false;
      unsubscribe?.();
    };
  }, [readJobs]);
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
        if (!creationEnabled() && !old.includes(job))
          void saveGenerationJob(documentId, job).catch((reason) =>
            error.current(`历史保存失败：${String(reason)}`),
          );
    },
    [documentId],
  );
  void revision;
  return [cache.current.get(documentId) ?? [], setJobs, readJobs] as const;
}
