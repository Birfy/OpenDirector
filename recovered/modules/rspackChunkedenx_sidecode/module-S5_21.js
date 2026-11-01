import n from "./module-O9_21.js";
import i from "./module-aq_21.js";
const s = n("".charAt);
const a = n("".replace);
const u = n("".slice);
const c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
const f = /\$([$&'`]|\d{1,2})/g;
export default function (t, r, e, n, h, l) {
  const v = e + t.length;
  const n_length = n.length;
  let d = f;
  if (h !== undefined) {
    h = i(h);
    d = c;
  }
  return a(l, d, function (i, a) {
    let c;
    switch (s(a, 0)) {
      case "$":
        return "$";
      case "&":
        return t;
      case "`":
        return u(r, 0, e);
      case "'":
        return u(r, v);
      case "<":
        c = h[u(a, 1, -1)];
        break;
      default:
        const f = +a;
        if (f === 0) {
          return i;
        }
        if (f > n_length) {
          const l = Math.floor(f / 10);
          if (l === 0) {
            return i;
          }
          if (l <= n_length) {
            if (n[l - 1] === undefined) {
              return s(a, 1);
            }
            return n[l - 1] + s(a, 1);
          }
          return i;
        }
        c = n[f - 1];
    }
    if (c === undefined) {
      return "";
    }
    return c;
  });
}
