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

/** Each callback retains its project owner, including a service result arriving after switching. */
export function useGenerationJobs(
  documentId: string,
  onError: (message: string) => void,
) {
  const cache = useRef(new Map<string, GenerationJob[]>());
  const loaded = useRef(new Set<string>());
  const loading = useRef(new Map<string, Promise<void>>());
  const [revision, setRevision] = useState(0);
  const error = useRef(onError);
  error.current = onError;
  const readJobs = useCallback(async () => {
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
    void readJobs()
      .then(() => active && setRevision((n) => n + 1))
      .catch((reason) => active && error.current(String(reason)));
    return () => {
      active = false;
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
        if (!old.includes(job))
          void saveGenerationJob(documentId, job).catch((reason) =>
            error.current(`历史保存失败：${String(reason)}`),
          );
    },
    [documentId],
  );
  void revision;
  return [cache.current.get(documentId) ?? [], setJobs, readJobs] as const;
}
