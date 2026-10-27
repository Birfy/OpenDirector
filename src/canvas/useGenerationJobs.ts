import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type SetStateAction,
} from "react";
import {
  loadGenerationJobs,
  saveGenerationJob,
  type GenerationJob,
} from "./generationHistory";

/** Each callback retains its project owner, including a service result arriving after switching. */
export function useGenerationJobs(
  documentId: string,
  onError: (message: string) => void,
) {
  const cache = useRef(new Map<string, GenerationJob[]>());
  const [revision, setRevision] = useState(0);
  const error = useRef(onError);
  error.current = onError;
  useEffect(() => {
    let active = true;
    if (!cache.current.has(documentId))
      void loadGenerationJobs(documentId)
        .then((saved) => {
          const current = cache.current.get(documentId) ?? [];
          const byId = new Map(saved.map((job) => [job.id, job]));
          for (const job of current) byId.set(job.id, job);
          cache.current.set(
            documentId,
            [...byId.values()].sort(
              (a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0),
            ),
          );
          if (active) setRevision((n) => n + 1);
        })
        .catch((reason) => active && error.current(String(reason)));
    return () => {
      active = false;
    };
  }, [documentId]);
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
  return [cache.current.get(documentId) ?? [], setJobs] as const;
}
