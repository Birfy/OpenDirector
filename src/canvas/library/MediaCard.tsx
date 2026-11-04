/** Shared card for every library panel: square media, wide canvas, or subject. */
import { useState } from "react";
import { CanvasIcon } from "../CanvasIcon";
import { useT } from "../../i18n/I18nProvider";
import {
  itemContentUrl,
  useItemContentUrl,
  type LibraryItem,
} from "./libraryClient";

export type CardShape = "square" | "wide";

/** Loads library media through the authenticated client, as a blob: URL. */
function LibraryThumb({ item }: { item: LibraryItem }) {
  const t = useT();
  const url = useItemContentUrl(item, t);
  if (!url) return null;
  return item.mediaKind === "video" || item.mediaKind === "audio" ? (
    <MediaThumb src={url} kind={item.mediaKind} />
  ) : (
    <img src={url} alt="" loading="lazy" />
  );
}

/**
 * Video/audio thumbnails: a muted <video> pinned to its first frame renders a
 * real poster without any server-side transcoding, and hovering plays inline
 * just like canvas nodes do.
 */
function MediaThumb({ src, kind }: { src: string; kind: "video" | "audio" }) {
  const [failed, setFailed] = useState(false);
  if (failed)
    return (
      <span className="cw-lib-placeholder" aria-hidden>
        <CanvasIcon name={kind} size={26} />
      </span>
    );
  return (
    <>
      <video
        className="cw-lib-video"
        src={src}
        muted
        playsInline
        preload="metadata"
        // A frame at ~0s is often black, so nudge past the intro.
        onLoadedMetadata={(event) => {
          const media = event.currentTarget;
          if (Number.isFinite(media.duration) && media.duration > 0.3)
            media.currentTime = Math.min(0.3, media.duration / 2);
        }}
        onMouseEnter={(event) =>
          void event.currentTarget.play().catch(() => {})
        }
        onMouseLeave={(event) => {
          const media = event.currentTarget;
          media.pause();
          media.currentTime = Math.min(0.3, media.duration || 0);
        }}
        onError={() => setFailed(true)}
      />
      <span className="cw-lib-badge" aria-hidden>
        <CanvasIcon name={kind} size={16} />
      </span>
    </>
  );
}

export function MediaCard({
  shape = "square",
  title,
  subtitle,
  item,
  src,
  kind,
  icon,
  selected,
  selectable = true,
  disabled = false,
  starred = false,
  onSelect,
  onOpen,
  action,
}: {
  shape?: CardShape;
  title: string;
  subtitle?: string;
  /** A library item whose bytes load through the authenticated client. */
  item?: LibraryItem;
  /** An already-resolved URL (canvas projections carry their own src). */
  src?: string;
  /** Media kind of `src`, so video/audio render a frame instead of <img>. */
  kind?: "image" | "video" | "audio" | "text" | "file";
  icon?: Parameters<typeof CanvasIcon>[0]["name"];
  selected?: boolean;
  selectable?: boolean;
  disabled?: boolean;
  starred?: boolean;
  onSelect?: () => void;
  onOpen?: () => void;
  action?: React.ReactNode;
}) {
  const t = useT();
  const className = [
    "cw-lib-card",
    shape === "wide" ? "cw-lib-card-wide" : "",
    selected ? "cw-lib-card-selected" : "",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={className}>
      <div
        className="cw-lib-thumb"
        onClick={disabled ? undefined : onOpen}
        role={onOpen ? "button" : undefined}
        aria-label={onOpen ? title : undefined}
        aria-disabled={onOpen ? disabled : undefined}
        tabIndex={onOpen ? (disabled ? -1 : 0) : undefined}
        onKeyDown={
          onOpen
            ? (event) => {
                if (!disabled && (event.key === "Enter" || event.key === " ")) {
                  event.preventDefault();
                  onOpen();
                }
              }
            : undefined
        }
      >
        {item ? (
          <LibraryThumb item={item} />
        ) : src ? (
          kind === "video" || kind === "audio" ? (
            <MediaThumb src={src} kind={kind} />
          ) : (
            <img src={src} alt="" loading="lazy" />
          )
        ) : (
          <span className="cw-lib-placeholder" aria-hidden>
            <CanvasIcon name={icon ?? "image"} size={26} />
          </span>
        )}
        {selectable && (
          <button
            type="button"
            disabled={disabled}
            className={
              selected ? "cw-lib-check cw-lib-check-on" : "cw-lib-check"
            }
            role="checkbox"
            aria-checked={Boolean(selected)}
            aria-label={t("library.card.select", { title })}
            onClick={(event) => {
              event.stopPropagation();
              onSelect?.();
            }}
          />
        )}
        {starred && (
          <span className="cw-lib-star" aria-label={t("library.card.starred")}>
            ★
          </span>
        )}
        {action}
      </div>
      <div className="cw-lib-caption" onClick={onOpen}>
        <span className="cw-lib-title" title={title}>
          {title}
        </span>
        {subtitle && <span className="cw-lib-subtitle">{subtitle}</span>}
      </div>
    </div>
  );
}

export { itemContentUrl };
