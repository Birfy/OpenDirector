interface Bounds { x: number; y: number; width: number; height: number }

export function edgeDirection(source: Bounds, target: Bounds) {
  const dx = target.x + target.width / 2 - source.x - source.width / 2;
  const dy = target.y + target.height / 2 - source.y - source.height / 2;
  // Account for actual node sizes so stacked wide nodes use top/bottom ports.
  const horizontal = Math.abs(dx) / (source.width + target.width) >= Math.abs(dy) / (source.height + target.height);
  return { horizontal, direction: (horizontal ? dx : dy) >= 0 ? 1 : -1 };
}

export function edgePath(source: Bounds, target: Bounds, bidirectional = false) {
  if (source.x === target.x && source.y === target.y && source.width === target.width && source.height === target.height) {
    const x = source.x + source.width, y = source.y + source.height / 2;
    return `M${x},${y} C${x + 130},${y} ${x + 130},${source.y - 90} ${source.x + source.width / 2},${source.y - 8}`;
  }
  const sx = source.x + source.width / 2, sy = source.y + source.height / 2;
  const tx = target.x + target.width / 2, ty = target.y + target.height / 2;
  const dx = tx - sx, dy = ty - sy;
  const { horizontal, direction } = edgeDirection(source, target);
  const gap = Math.max(0, horizontal
    ? Math.abs(dx) - (source.width + target.width) / 2
    : Math.abs(dy) - (source.height + target.height) / 2);
  const start = horizontal
    ? { x: sx + direction * source.width / 2, y: sy }
    : { x: sx, y: sy + direction * source.height / 2 };
  const end = horizontal
    ? { x: tx - direction * target.width / 2, y: ty }
    : { x: tx, y: ty - direction * target.height / 2 };
  if (bidirectional) {
    if (horizontal) { start.y += direction * 18; end.y += direction * 18; }
    else { start.x -= direction * 18; end.x -= direction * 18; }
  }
  const bend = Math.min(120, gap / 2);
  const offsetX = horizontal ? direction * bend : 0;
  const offsetY = horizontal ? 0 : direction * bend;
  return `M${start.x},${start.y} C${start.x + offsetX},${start.y + offsetY} ${end.x - offsetX},${end.y - offsetY} ${end.x},${end.y}`;
}
