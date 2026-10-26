import n from "./module-O9_9.js";
import o from "./module-aq_9.js";
const a = n("".charAt);
const s = n("".replace);
const u = n("".slice);
const c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
const f = /\$([$&'`]|\d{1,2})/g;
export default function (t, e, r, n, l, h) {
  const v = r + t.length;
  const n_length = n.length;
  let p = f;
  if (l !== undefined) {
    l = o(l);
    p = c;
  }
  return s(h, p, function (o, s) {
    let c;
    switch (a(s, 0)) {
      case "$":
        return "$";
      case "&":
        return t;
      case "`":
        return u(e, 0, r);
      case "'":
        return u(e, v);
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
