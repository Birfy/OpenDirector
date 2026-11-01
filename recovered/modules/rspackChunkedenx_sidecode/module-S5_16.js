import n from "./module-O9_16.js";
import o from "./module-aq_16.js";
const a = n("".charAt);
const s = n("".replace);
const u = n("".slice);
const c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
const f = /\$([$&'`]|\d{1,2})/g;
export default function (t, r, e, n, l, h) {
  const v = e + t.length;
  const n_length = n.length;
  let d = f;
  if (l !== undefined) {
    l = o(l);
    d = c;
  }
  return s(h, d, function (o, s) {
    let c;
    switch (a(s, 0)) {
      case "$":
        return "$";
      case "&":
        return t;
      case "`":
        return u(r, 0, e);
      case "'":
        return u(r, v);
      case "<":
        c = l[u(s, 1, -1)];
        break;
      default:
        const f = +s;
        if (f === 0) {
          return o;
        }
        if (f > n_length) {
          const h = Math.floor(f / 10);
          if (h === 0) {
            return o;
          }
          if (h <= n_length) {
            if (n[h - 1] === undefined) {
              return a(s, 1);
            }
            return n[h - 1] + a(s, 1);
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
