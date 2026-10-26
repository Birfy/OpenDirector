export function W(e, t, a, r) {
  let l;
  let n;
  let i;
  let s;
  const o =
    arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  const u = arguments.length > 5 ? arguments[5] : undefined;
  const d =
    e === "ArrowRight" || e === "ArrowUp"
      ? 1
      : e === "ArrowLeft" || e === "ArrowDown"
        ? -1
        : 0;
  const c = e === "PageUp" ? 10 : e === "PageDown" ? -10 : 0;
  const v =
    u == null
      ? undefined
      : u.filter((e) => e >= a && e <= r).sort((e, t) => e - t);
  if (e === "Home") {
    if ((l = v == null ? undefined : v[0]) != null) {
      return l;
    }
    return a;
  }
  if (e === "End") {
    if ((n = v == null ? undefined : v.at(-1)) != null) {
      return n;
    }
    return r;
  }
  if (d || c) {
    if (v == null ? undefined : v.length) {
      if (d > 0 || c > 0) {
        if ((i = v.find((e) => e > t)) != null) {
          return i;
        }
        return t;
      }
      if ((s = v.reverse().find((e) => e < t)) != null) {
        return s;
      }
      return t;
    }
    return Math.max(a, Math.min(r, Number((t + (d || c) * o).toFixed(10))));
  }
}
