export default function (e, t, r) {
  const n = r || 8192;
  const i = n >>> 1;
  let o = null;
  let s = n;
  return function (r) {
    if (r < 1 || r > i) {
      return e(r);
    }
    if (s + r > n) {
      o = e(n);
      s = 0;
    }
    const a = t.call(o, s, (s += r));
    if (7 & s) {
      s = (7 | s) + 1;
    }
    return a;
  };
}
