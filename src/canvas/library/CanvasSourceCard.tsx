import { useEffect, useState } from "react";
import { headers, responseError } from "../../backend/api";
import {
  canvasSourceMedia,
  type CanvasSource,
} from "../../backend/canvasSources";
import { MediaCard } from "./MediaCard";

export function CanvasSourceCard({
  item,
  projectId,
  selected,
  disabled,
  onSelect,
}: {
  item: CanvasSource;
  projectId: string;
  selected: boolean;
  disabled: boolean;
  onSelect: () => void;
}) {
  const [src, setSrc] = useState<string>();
  useEffect(() => {
    if (item.main.kind !== "image") return;
    let active = true,
      url: string | undefined;
    fetch(canvasSourceMedia(projectId, item), { headers })
      .then(async (response) => {
        if (!response.ok) throw await responseError(response);
        url = URL.createObjectURL(await response.blob());
        if (active) setSrc(url);
        else URL.revokeObjectURL(url);
      })
      .catch(() => {});
    return () => {
      active = false;
      if (url) URL.revokeObjectURL(url);
    };
  }, [item, projectId]);
  return (
    <MediaCard
      title={item.title}
      src={src}
      icon={
        item.kind === "subject"
          ? "subject"
          : item.main.kind === "audio"
            ? "audio"
            : item.main.kind === "video"
              ? "video"
              : item.main.kind === "text"
                ? "text"
                : item.main.kind === "file"
                  ? "file"
                  : "image"
      }
      selected={selected}
      disabled={disabled}
      onSelect={onSelect}
    />
  );
}
