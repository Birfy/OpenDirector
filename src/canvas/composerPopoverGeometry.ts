interface Rect {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

/** Place a composer popover outside its card when there is usable space. */
export function composerPopoverPlacement(
  anchor: Rect,
  composer: Rect,
  size: { width: number; height: number },
  viewport: Rect,
) {
  const margin = 12;
  const gap = 8;
  const leftEdge = viewport.left + margin;
  const topEdge = viewport.top + margin;
  const rightEdge = viewport.right - margin;
  const bottomEdge = viewport.bottom - margin;
  const maxWidth = Math.max(0, rightEdge - leftEdge);
  const availableHeight = Math.max(0, bottomEdge - topEdge);
  const above = Math.max(0, composer.top - gap - topEdge);
  const below = Math.max(0, bottomEdge - composer.bottom - gap);
  const placeAbove = size.height <= above || above >= below;
  const outsideSpace = placeAbove ? above : below;
  // A narrow strip beside an oversized composer is not a usable option list.
  // In that case overlay the card and keep the full panel inside the viewport.
  const maxHeight = Math.min(
    availableHeight,
    outsideSpace >= Math.min(size.height, 160) ? outsideSpace : availableHeight,
  );
  const height = Math.min(size.height, maxHeight);
  const width = Math.min(size.width, maxWidth);
  const preferredTop = placeAbove
    ? composer.top - gap - height
    : composer.bottom + gap;
  return {
    left: Math.round(
      Math.max(leftEdge, Math.min(anchor.left, rightEdge - width)),
    ),
    top: Math.round(
      Math.max(topEdge, Math.min(preferredTop, bottomEdge - height)),
    ),
    maxWidth,
    maxHeight,
  };
}
