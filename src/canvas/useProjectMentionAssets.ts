import { useEffect, useRef, useState } from "react";
import { errorMessage, request } from "../backend/api";
import type { ProjectChatAsset } from "./useAssistantChat";
import {
  creationClient,
  creationEnabled,
  currentAsset,
} from "../backend/creationClient.ts";

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
    const read = async () => {
      if (creationEnabled()) {
        const client = creationClient(projectId);
        const snapshot = await client.refresh();
        const owners = new Map(
          snapshot.canvasItems.flatMap((item) => {
            const asset = currentAsset(snapshot, item);
            return asset ? [[asset.id, item] as const] : [];
          }),
        );
        const generated = new Set(
          snapshot.results.map((result) => result.asset.assetId),
        );
        return snapshot.assets.map((asset) => ({
          id: asset.id,
          name: asset.name,
          type: asset.metadata.mimeType,
          size: asset.metadata.size,
          fingerprint: asset.fingerprint,
          kind: asset.kind,
          nodeId: owners.get(asset.id)?.id,
          available: !generated.has(asset.id) || owners.has(asset.id),
        }));
      }
      const [assets, snapshot] = await Promise.all([
        request<ProjectChatAsset[]>(
          `/projects/${projectId}/assets?current_only=true`,
          { signal: abort.signal },
        ),
        request<{
          referenceSources: { id: string; assetId: string; title: string }[];
        }>(`/projects/${projectId}/canvas`, { signal: abort.signal }),
      ]);
      return assets.map((asset) => ({
        ...asset,
        nodeId: snapshot.referenceSources?.find(
          (source) => source.assetId === asset.id,
        )?.id,
      }));
    };
    void read()
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
