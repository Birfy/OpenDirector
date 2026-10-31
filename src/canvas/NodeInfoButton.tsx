import { useEffect, useId, useRef, useState } from "react";

import type { CanvasNode } from "./model";
import { countNodesByKind, totalNodeCount } from "./nodeStats";

/** Grace period before closing, so moving from the trigger into the panel
 *  (crossing the 6px gap) does not dismiss it mid-travel. */
const HOVER_CLOSE_DELAY_MS = 120;

/**
 * Top-bar entry that summarises how many nodes of each kind the canvas holds.
 *
 * The panel is revealed on hover and dismissed when the pointer leaves the
 * trigger/panel group, so it reads as a passive summary rather than a
 * click-through menu. Keyboard users still get it: focus on the trigger opens
 * the panel and Escape closes it.
 *
 * The button renders only when the canvas has at least one reported node: on an
 * empty canvas the entry would carry no information, so it is removed from the
 * DOM rather than disabled. Counts are derived from `nodes` on every render,
 * so the panel tracks edits live without extra subscriptions or state.
 */
export function NodeInfoButton({ nodes }: { nodes: CanvasNode[] }) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | undefined>(undefined);
  const panelId = useId();

  const rows = countNodesByKind(nodes);
  const total = totalNodeCount(nodes);
  const visible = total > 0;

  // Hide the entry as soon as the canvas becomes empty while the panel is open,
  // otherwise the panel would float above nothing.
  useEffect(() => {
    if (!visible) setOpen(false);
  }, [visible]);

  useEffect(
    () => () => {
      if (timerRef.current !== undefined) window.clearTimeout(timerRef.current);
    },
    [],
  );

  const cancelClose = () => {
    if (timerRef.current === undefined) return;
    window.clearTimeout(timerRef.current);
    timerRef.current = undefined;
  };
  const show = () => {
    cancelClose();
    setOpen(true);
  };
  const scheduleClose = () => {
    cancelClose();
    timerRef.current = window.setTimeout(() => {
      timerRef.current = undefined;
      setOpen(false);
    }, HOVER_CLOSE_DELAY_MS);
  };

  // Escape dismisses the panel for keyboard users; the panel is hover-driven so
  // it needs no outside-click handler.
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      event.stopPropagation();
      setOpen(false);
    };
    document.addEventListener("keydown", escape, true);
    return () => document.removeEventListener("keydown", escape, true);
  }, [open]);

  if (!visible) return null;

  return (
    <div
      className="cw-node-info"
      ref={anchorRef}
      onMouseEnter={show}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        className="cw-node-info-trigger"
        aria-describedby={open ? panelId : undefined}
        title="当前画布的节点数量"
        onFocus={show}
        onBlur={scheduleClose}
      >
        节点 {total}
      </button>
      {open && (
        <div
          id={panelId}
          className="cw-node-info-panel nodrag nopan nowheel"
          role="tooltip"
          aria-label="节点信息"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          onPointerDown={(event) => event.stopPropagation()}
          onKeyDown={(event) => event.stopPropagation()}
          onWheel={(event) => event.stopPropagation()}
        >
          <ul className="cw-node-info-list">
            {rows.map((row) => (
              <li key={row.kind}>
                <span>{row.label}</span>
                <span className="cw-node-info-count">{row.count}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
