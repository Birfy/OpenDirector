import { useEffect, useRef, useState } from "react";
import { errorMessage } from "../backend/api";
import { loadReferenceCatalog } from "../backend/referenceCatalog.ts";

/** Read on opening, so generated/uploaded assets appear without reloading chat. */
export function useProjectMentionAssets(projectId: string) {
  const [assets, setAssets] = useState<
    import("./chatReferenceContent.ts").ReferenceAsset[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const controller = useRef<AbortController | null>(null);
  useEffect(() => {
    setAssets([]);
    setError("");
    setLoading(false);
    return () => controller.current?.abort();
  }, [projectId]);
  const load = () => {
    controller.current?.abort();
    const abort = new AbortController();
    controller.current = abort;
    setLoading(true);
    setError("");
    const read = () => loadReferenceCatalog(projectId, abort.signal);
    void read()
      .then((value) => {
        if (!abort.signal.aborted)
          setAssets(
            value.filter((asset) =>
              ["image", "video", "audio", "text"].includes(asset.kind ?? ""),
            ),
          );
      })
      .catch((reason) => {
        if (!abort.signal.aborted) setError(errorMessage(reason));
      })
      .finally(() => {
        if (!abort.signal.aborted) setLoading(false);
      });
  };
  return { assets, loading, error, load };
}
