import n from "./module-O9_17.js";
import o from "./module-aq_17.js";
const a = n("".charAt);
const s = n("".replace);
const u = n("".slice);
const c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
const f = /\$([$&'`]|\d{1,2})/g;
export default function (r, t, e, n, h, l) {
  const v = e + r.length;
  const n_length = n.length;
  let d = f;
  if (h !== undefined) {
    h = o(h);
    d = c;
  }
  return s(l, d, function (o, s) {
    let c;
    switch (a(s, 0)) {
      case "$":
        return "$";
      case "&":
        return r;
      case "`":
        return u(t, 0, e);
      case "'":
        return u(t, v);
      case "<":
        c = h[u(s, 1, -1)];
        break;
      default:
        const f = +s;
        if (f === 0) {
          return o;
        }
        if (f > n_length) {
          const l = Math.floor(f / 10);
          if (l === 0) {
            return o;
          }
          if (l <= n_length) {
            if (n[l - 1] === undefined) {
              return a(s, 1);
            }
            return n[l - 1] + a(s, 1);
          }
          return o;
        }
        c = n[f - 1];
    }
    if (c === undefined) {
      return "";
    }
    return c;
  });
}
