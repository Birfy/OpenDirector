import { useRef, useState } from "react";
import { CanvasIcon } from "./CanvasIcon";

export type CanvasToolRailItem = {
  name: string;
  label: string;
  actionLabel?: string;
  shortcut?: string;
  active?: boolean;
  separatorBefore?: boolean;
  preserveCollapsedOnFocusRestore?: boolean;
  onClick: () => void;
};

/** The creation rail reveals all labels together, rather than individual tooltips. */
export function CanvasToolRail({
  items,
  holdCollapsed,
}: {
  items: CanvasToolRailItem[];
  holdCollapsed: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const focusRestoreTarget = useRef<HTMLButtonElement | null>(null);
  const [restoreSuppressed, setRestoreSuppressed] = useState(false);
  const reveal = () => {
    focusRestoreTarget.current = null;
    setRestoreSuppressed(false);
    setDismissed(false);
  };
  const revealed =
    !holdCollapsed && !dismissed && !restoreSuppressed && (hovered || focused);

  return (
    <div
      className="cw-rail-shell"
      data-revealed={revealed}
      onMouseEnter={() => {
        setHovered(true);
        if (!focusRestoreTarget.current && !restoreSuppressed)
          setDismissed(false);
      }}
      onMouseLeave={() => setHovered(false)}
      onPointerMove={(event) => {
        if (!event.buttons && (focusRestoreTarget.current || restoreSuppressed))
          reveal();
      }}
    >
      <div className="cw-rail-mask" aria-hidden="true" />
      <div className="cw-rail-scroll">
        <nav
          className="cw-rail"
          role="toolbar"
          aria-label="画布创作工具"
          aria-orientation="vertical"
          onFocusCapture={(event) => {
            setFocused(true);
            // Restoring focus after a picker or panel closes must not reopen the labels.
            if (event.target === focusRestoreTarget.current) {
              focusRestoreTarget.current = null;
              setRestoreSuppressed(true);
              setDismissed(false);
            } else reveal();
          }}
          onBlurCapture={(event) => {
            if (
              !event.currentTarget.contains(event.relatedTarget as Node | null)
            ) {
              setFocused(false);
              setDismissed(false);
              if (!focusRestoreTarget.current) setRestoreSuppressed(false);
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              event.preventDefault();
              event.stopPropagation();
              setDismissed(true);
              return;
            }
            const buttons = Array.from(
              event.currentTarget.querySelectorAll<HTMLButtonElement>("button"),
            );
            const index = buttons.indexOf(event.target as HTMLButtonElement);
            const next =
              event.key === "Home"
                ? 0
                : event.key === "End"
                  ? buttons.length - 1
                  : event.key === "ArrowDown"
                    ? (index + 1) % buttons.length
                    : event.key === "ArrowUp"
                      ? (index - 1 + buttons.length) % buttons.length
                      : null;
            if (next !== null) {
              event.preventDefault();
              reveal();
              buttons[next]?.focus({ preventScroll: true });
              buttons[next]?.scrollIntoView({ block: "nearest" });
            } else if (event.key === "Tab") {
              reveal();
            }
          }}
        >
          {items.map((item, index) => (
            <div className="cw-rail-item" key={item.name}>
              {item.separatorBefore && <span className="cw-divider" />}
              <button
                type="button"
                className={`cw-rail-button ${item.active ? "is-active" : ""}`}
                aria-label={item.actionLabel ?? item.label}
                aria-keyshortcuts={item.shortcut}
                aria-pressed={item.active}
                tabIndex={index === activeIndex ? 0 : -1}
                onFocus={() => setActiveIndex(index)}
                onClick={(event) => {
                  focusRestoreTarget.current =
                    item.preserveCollapsedOnFocusRestore
                      ? event.currentTarget
                      : null;
                  setRestoreSuppressed(false);
                  setDismissed(true);
                  item.onClick();
                }}
              >
                <span className="cw-rail-icon">
                  <CanvasIcon name={item.name} />
                </span>
                <span className="cw-rail-label" aria-hidden="true">
                  {item.label}
                </span>
              </button>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
