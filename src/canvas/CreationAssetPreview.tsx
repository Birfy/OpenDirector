import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Asset } from "../contracts/generated.ts";
import { creationClient } from "../backend/creationClient.ts";
import { CanvasIcon } from "./CanvasIcon.tsx";

export interface AssetPreview {
  id: string;
  name: string;
  label: string;
  kind: string;
  asset: Asset | null;
  anchor: DOMRect;
}

export function HoverPreview({
  projectId,
  preview,
}: {
  projectId: string;
  preview: AssetPreview;
}) {
  const panel = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState<string>();
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    let active = true;
    const asset = preview.asset;
    if (!asset) return;
    const client = creationClient(projectId);
    const pending =
      asset.kind === "image"
        ? client.thumbnailUrl(asset.id)
        : asset.kind === "text" && asset.metadata.size <= 65536
          ? client.textContent(asset.id)
          : asset.kind === "video"
            ? client.mediaUrl(asset.id)
            : Promise.resolve("");
    void pending
      .then((value) => {
        if (active) setContent(value);
      })
      .catch(() => {
        if (active) setFailed(true);
      });
    return () => {
      active = false;
    };
  }, [projectId, preview.asset]);
  useLayoutEffect(() => {
    const element = panel.current!;
    const bounds = element.getBoundingClientRect();
    const left = preview.anchor.left - bounds.width - 10;
    element.style.left = `${Math.max(12, Math.min(left >= 12 ? left : preview.anchor.right + 10, window.innerWidth - bounds.width - 12))}px`;
    element.style.top = `${Math.max(12, Math.min(preview.anchor.top, window.innerHeight - bounds.height - 12))}px`;
  }, [preview.anchor, content, failed]);
  const asset = preview.asset;
  return createPortal(
    <div
      ref={panel}
      id={`asset-preview-${preview.id}`}
      className="cw-creation-asset-preview"
      role="tooltip"
      aria-label={`${preview.name}预览`}
    >
      <header>
        <strong>{preview.name}</strong>
        <span>{preview.label}</span>
      </header>
      {failed ? (
        <p>暂时无法预览此素材</p>
      ) : !asset ? (
        <p>暂无可预览素材</p>
      ) : content === undefined ? (
        <p>正在加载预览…</p>
      ) : asset.kind === "image" ? (
        <img src={content} alt={preview.name} onError={() => setFailed(true)} />
      ) : asset.kind === "video" ? (
        <video
          src={content}
          muted
          playsInline
          preload="metadata"
          onError={() => setFailed(true)}
          onLoadedMetadata={(event) => {
            const video = event.currentTarget;
            if (video.duration > 0.3)
              video.currentTime = Math.min(0.3, video.duration / 2);
          }}
        />
      ) : asset.kind === "text" && asset.metadata.size <= 65536 ? (
        <pre>
          {content
            ? content.slice(0, 4000) + (content.length > 4000 ? "\n…" : "")
            : "（空文本）"}
        </pre>
      ) : (
        <p>
          <CanvasIcon
            name={asset.kind === "file" ? "folder" : asset.kind}
            size={40}
          />
          <span>{preview.name}</span>
          <small>
            {asset.kind === "text"
              ? "文本内容较长，可打开节点查看"
              : `${Math.ceil(asset.metadata.size / 1024)} KB`}
            {asset.metadata.durationSeconds != null &&
              ` · ${asset.metadata.durationSeconds.toFixed(1)} 秒`}
          </small>
        </p>
      )}
    </div>,
    document.body,
  );
}
export function AssetThumbnail({
  projectId,
  asset,
}: {
  projectId: string;
  asset: Asset;
}) {
  const element = useRef<HTMLSpanElement>(null);
  const [src, setSrc] = useState("");
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    if (asset.kind !== "image") return;
    let active = true;
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.disconnect();
      void creationClient(projectId)
        .thumbnailUrl(asset.id)
        .then((url) => {
          if (active) setSrc(url);
        })
        .catch(() => {
          if (active) setFailed(true);
        });
    });
    observer.observe(element.current!);
    return () => {
      active = false;
      observer.disconnect();
    };
  }, [projectId, asset.id, asset.kind]);
  return (
    <span
      ref={element}
      className="cw-creation-asset-thumbnail"
      aria-hidden="true"
    >
      {src && !failed ? (
        <img
          src={src}
          alt=""
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <CanvasIcon
          name={asset.kind === "file" ? "folder" : asset.kind}
          size={24}
        />
      )}
    </span>
  );
}
