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
import {
  creationJobs,
  creationJobPreview,
  applyCreationPreview,
} from "../backend/creationJobs.ts";
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
  const previews = useRef(new Map<string, Promise<void>>());
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
              setRevision((n) => n + 1);
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
      const publish = (next: GenerationJob[]) => {
        cache.current.set(documentId, next);
        setRevision((n) => n + 1);
      };
      if (
        snapshot &&
        snapshot.eventCursor > (cacheCursors.current.get(documentId) ?? -1)
      ) {
        const current = cache.current.get(documentId) ?? [];
        publish([
          ...creationJobs(snapshot, current),
          ...current.filter((job) => job.tool),
        ]);
        cacheCursors.current.set(documentId, snapshot.eventCursor);
      }
      // Each preview hydrates independently. Late files only patch matching
      // preview identities, never status, phase, adoption or cancellation.
      for (const job of cache.current.get(documentId) ?? []) {
        if (!snapshot || job.preview?.state !== "pending") continue;
        const key = `${documentId}:${job.id}:${job.preview.assetId}`;
        if (previews.current.has(key)) continue;
        const asset = snapshot.assets.find(
          (asset) => asset.id === job.preview?.assetId,
        );
        if (!asset) continue;
        const pending = creationJobPreview(documentId, asset)
          .then((preview) => {
            const current = cache.current.get(documentId) ?? [];
            publish(
              current.map((entry) =>
                entry.id === job.id
                  ? applyCreationPreview(entry, preview)
                  : entry,
              ),
            );
          })
          .finally(() => previews.current.delete(key));
        previews.current.set(key, pending);
      }
      const tools = await abortable(
        toolHistoryJobs(documentId, cache.current.get(documentId), { signal }),
        signal,
      );
      signal?.throwIfAborted();
      if (reads.current.get(documentId) !== token)
        return cache.current.get(documentId) ?? [];
      const current = cache.current.get(documentId) ?? [];
      // Tool jobs are queried from their ledger. A creation snapshot owns only
      // GenerationSpec jobs and must never erase an accepted tool execution.
      const pending = current.filter(
        (job) =>
          job.tool && !job.taskId && !tools.some((tool) => tool.id === job.id),
      );
      const next = [
        ...current.filter((job) => !job.tool),
        ...tools,
        ...pending,
      ].sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0));
      if (
        next.length !== current.length ||
        next.some((job, index) => job !== current[index])
      )
        publish(next);
      return cache.current.get(documentId) ?? [];
    },
    [documentId, connected],
  );
  useEffect(() => {
    let active = true;
    const controller = new AbortController();
    let timer: ReturnType<typeof setTimeout> | undefined;
    const unsubscribe = creationEnabled()
      ? creationClient(documentId).listen(() => {
          void readJobs(controller.signal).catch(
            (reason) => active && error.current(String(reason)),
          );
        })
      : undefined;
    const poll = async () => {
      try {
        await readJobs(controller.signal);
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
