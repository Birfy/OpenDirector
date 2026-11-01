export function xc(t) {
  if (!(t == null ? undefined : t.length)) {
    return [];
  }
  const e = new Set();
  return t.flatMap((t) => {
    var i = t.trim();
    if (!i || e.has(i)) {
      return [];
    }
    e.add(i);
    return [i];
  });
}
export function ys(t) {
  const e = Math.floor(t != null ? t : 0);
  if (e > 0) {
    return e;
  }
  return 2;
}
Object.defineProperty(exports, "tM", {
  enumerable: true,
  get: () => 2,
});
