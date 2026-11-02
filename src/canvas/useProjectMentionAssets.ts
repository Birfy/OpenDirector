import { useCallback, useEffect, useRef, useState } from "react";
import { errorMessage } from "../backend/api";
import { loadReferenceCatalog } from "../backend/referenceCatalog.ts";
import type { ReferenceAsset } from "./chatReferenceContent.ts";

/** Keep catalog metadata for this project; visible canvas candidates are local.
 * Reopening during a read reuses it instead of cancelling and starting over.
 */
export function useProjectMentionAssets(projectId: string, preload = false) {
  const [state, setState] = useState({
    projectId,
    assets: [] as ReferenceAsset[],
    ready: false,
    loading: false,
    error: "",
  });
  const pending = useRef<{
    projectId: string;
    abort: AbortController;
  } | null>(null);
  const load = useCallback(() => {
    if (
      pending.current?.projectId === projectId &&
      !pending.current.abort.signal.aborted
    )
      return;
    pending.current?.abort.abort();
    const abort = new AbortController();
    pending.current = { projectId, abort };
    setState((previous) => ({
      projectId,
      assets: previous.projectId === projectId ? previous.assets : [],
      ready: previous.projectId === projectId && previous.ready,
      loading: true,
      error: "",
    }));
    void loadReferenceCatalog(projectId, abort.signal)
      .then((value) => {
        if (!abort.signal.aborted)
          setState({
            projectId,
            assets: value.filter((asset) =>
              ["image", "video", "audio", "text"].includes(asset.kind ?? ""),
            ),
            ready: true,
            loading: false,
            error: "",
          });
      })
      .catch((reason) => {
        if (!abort.signal.aborted)
          setState((previous) => ({
            ...previous,
            loading: false,
            error: errorMessage(reason),
          }));
      })
      .finally(() => {
        if (pending.current?.abort === abort) pending.current = null;
      });
  }, [projectId]);
  useEffect(() => {
    if (preload) load();
    return () => pending.current?.abort.abort();
  }, [load, preload]);
  const current = state.projectId === projectId;
  return {
    assets: current ? state.assets : [],
    loading: current && state.loading && !state.ready,
    error: current && !state.ready ? state.error : "",
    load,
  };
}
