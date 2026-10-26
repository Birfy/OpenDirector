import n from "./module-o.js";
import o from "./module-O_2.js";
const a = n("".charAt);
const s = n("".replace);
const u = n("".slice);
const c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
const f = /\$([$&'`]|\d{1,2})/g;
export default function (e, t, r, n, l, p) {
  const h = r + e.length;
  const n_length = n.length;
  let d = f;
  if (l !== undefined) {
    l = o(l);
    d = c;
  }
  return s(p, d, function (o, s) {
    let c;
    switch (a(s, 0)) {
      case "$":
        return "$";
      case "&":
        return e;
      case "`":
        return u(t, 0, r);
      case "'":
        return u(t, h);
      case "<":
        c = l[u(s, 1, -1)];
        break;
      default:
        const f = +s;
        if (f === 0) {
          return o;
        }
        if (f > n_length) {
          const p = Math.floor(f / 10);
          if (p === 0) {
            return o;
          }
          if (p <= n_length) {
            if (n[p - 1] === undefined) {
              return a(s, 1);
            }
            return n[p - 1] + a(s, 1);
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
