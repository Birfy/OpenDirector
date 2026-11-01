import n from "./module-O9_6.js";
import o from "./module-aq_6.js";
const i = n("".charAt);
const s = n("".replace);
const c = n("".slice);
const u = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
const f = /\$([$&'`]|\d{1,2})/g;
export default function (t, r, e, n, l, h) {
  const p = e + t.length;
  const n_length = n.length;
  let d = f;
  if (l !== undefined) {
    l = o(l);
    d = u;
  }
  return s(h, d, function (o, s) {
    let u;
    switch (i(s, 0)) {
      case "$":
        return "$";
      case "&":
        return t;
      case "`":
        return c(r, 0, e);
      case "'":
        return c(r, p);
      case "<":
        u = l[c(s, 1, -1)];
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
              return i(s, 1);
            }
            return n[h - 1] + i(s, 1);
          }
          return o;
        }
        u = n[f - 1];
    }
    if (u === undefined) {
      return "";
    }
    return u;
  });
}
