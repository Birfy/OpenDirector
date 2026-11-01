export function xc(e) {
  if (!(e == null ? undefined : e.length)) {
    return [];
  }
  const t = new Set();
  return e.flatMap((e) => {
    var i = e.trim();
    if (!i || t.has(i)) {
      return [];
    }
    t.add(i);
    return [i];
  });
}
export function ys(e) {
  const t = Math.floor(e != null ? e : 0);
  if (t > 0) {
    return t;
  }
  return 2;
}
Object.defineProperty(exports, "tM", {
  enumerable: true,
  get: () => 2,
});
