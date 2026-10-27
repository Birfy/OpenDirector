import type { Rect, Viewport } from "./model.ts";

export type ScreenSize = { width: number; height: number };
export type SelectionChrome = {
  safe: Rect;
  toolbar: ScreenSize;
  composer: ScreenSize;
};

const TITLE_SPACE = 32;
const TOOLBAR_GAP = 8;
const COMPOSER_GAP = 16;
const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

/** Keep the selected node and its screen-sized controls in one visible envelope.
 * Authored node geometry never changes when opening a generator. */
export function selectionViewport(
  node: Rect,
  viewport: Viewport,
  chrome: SelectionChrome,
): Viewport {
  const { safe, toolbar, composer } = chrome;
  const above =
    TITLE_SPACE + (toolbar.height ? toolbar.height + TOOLBAR_GAP : 0);
  const below = composer.height ? composer.height + COMPOSER_GAP : 0;
  const zoom = Math.max(
    0.08,
    Math.min(
      viewport.zoom,
      safe.width / Math.max(1, node.width),
      Math.max(1, safe.height - above - below) / Math.max(1, node.height),
    ),
  );
  const width = Math.max(node.width * zoom, toolbar.width, composer.width);
  // Zoom around the selected content, not the world origin, so a distant node
  // does not slide sideways simply because its controls need more vertical space.
  const screenCenter = (node.x + node.width / 2) * viewport.zoom + viewport.x;
  const center = clamp(
    screenCenter,
    safe.x + width / 2,
    safe.x + safe.width - width / 2,
  );
  const top = clamp(
    node.y * viewport.zoom + viewport.y,
    safe.y + above,
    safe.y + safe.height - below - node.height * zoom,
  );
  return {
    zoom,
    x: center - (node.x + node.width / 2) * zoom,
    y: top - node.y * zoom,
  };
}

/** Placement follows the viewport, including manual pan/zoom; it does not move it. */
export function selectionPlacement(
  node: Rect,
  view: Viewport,
  chrome: SelectionChrome,
) {
  const { safe, toolbar, composer } = chrome;
  const center = (node.x + node.width / 2) * view.zoom + view.x;
  const top = node.y * view.zoom + view.y;
  const bottom = top + node.height * view.zoom;
  const left = (width: number) =>
    clamp(center - width / 2, safe.x, safe.x + safe.width - width);
  return {
    toolbar: {
      left: left(toolbar.width),
      top: top - TITLE_SPACE - TOOLBAR_GAP - toolbar.height,
    },
    composer: { left: left(composer.width), top: bottom + COMPOSER_GAP },
    visible:
      bottom > safe.y &&
      top < safe.y + safe.height &&
      center + (node.width * view.zoom) / 2 > safe.x &&
      center - (node.width * view.zoom) / 2 < safe.x + safe.width,
  };
}
