import { useEffect, useRef, useState } from "react";
import { errorMessage, request } from "../backend/api";
import type { ProjectChatAsset } from "./useAssistantChat";

/** Read on opening, so generated/uploaded assets appear without reloading chat. */
export function useProjectMentionAssets(projectId: string) {
  const [assets, setAssets] = useState<ProjectChatAsset[]>([]);
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
    void request<ProjectChatAsset[]>(
      `/projects/${projectId}/assets?current_only=true`,
      { signal: abort.signal },
    )
      .then((value) => {
        if (!abort.signal.aborted)
          setAssets(
            value.filter((asset) =>
              ["image", "video", "audio", "text"].includes(asset.kind),
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
