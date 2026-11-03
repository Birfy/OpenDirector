import { useLayoutEffect, useState, type ReactNode } from "react";
import { useViewport } from "@xyflow/react";
import { boundsOfNodes } from "./geometry";
import type { CanvasNode } from "./model";
import {
  SELECTION_TITLE_SPACE,
  selectionBarPlacement,
} from "./selectionPresentation";

const GAP = 8;
const SAFE_TOP = 72;
const SAFE_BOTTOM = 24;
const SAFE_LEFT = 80;
const SAFE_LEFT_NARROW = 64;
const SAFE_RIGHT = 20;

/** Keeps the multi-selection bar over the selection while the viewport moves. */
export function SelectionBarAnchor({
  nodes,
  allNodes,
  children,
}: {
  nodes: readonly CanvasNode[];
  allNodes: readonly CanvasNode[];
  children: ReactNode;
}) {
  const viewport = useViewport();
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    if (!element) return;
    const measure = () => {
      const rect = element.getBoundingClientRect();
      setSize((current) =>
        current.width === rect.width && current.height === rect.height
          ? current
          : { width: rect.width, height: rect.height },
      );
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, [element]);
  const bounds = boundsOfNodes(nodes, allNodes);
  if (!bounds) return null;
  const narrow = window.innerWidth < 700;
  const left = narrow ? SAFE_LEFT_NARROW : SAFE_LEFT;
  const safe = {
    x: left,
    y: SAFE_TOP,
    width: Math.max(1, window.innerWidth - left - SAFE_RIGHT),
    height: Math.max(1, window.innerHeight - SAFE_TOP - SAFE_BOTTOM),
  };
  // Node coordinates start at the media frame; the title sits above it.
  const envelope = {
    ...bounds,
    y: bounds.y - SELECTION_TITLE_SPACE,
    height: bounds.height + SELECTION_TITLE_SPACE,
  };
  const placement = selectionBarPlacement(envelope, viewport, size, safe, GAP);
  if (!placement.visible) return null;
  return (
    <div
      ref={setElement}
      className="cw-selection-bar is-anchored"
      style={{
        left: placement.left,
        top: placement.top,
        maxWidth: safe.width,
        transform: "none",
        visibility: size.width ? undefined : "hidden",
      }}
    >
      {children}
    </div>
  );
}
