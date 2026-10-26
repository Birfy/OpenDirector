import n from "./module-vo_14.js";
import o from "./module-aq_14.js";
import i from "./module-Q_15.js";
import a from "./module-F4_15.js";
const c = (t) =>
  function (r, e, c, u) {
    n(e);
    const f = o(r);
    const l = i(f);
    const h = a(f);
    let v = t ? h - 1 : 0;
    const p = t ? -1 : 1;
    if (c < 2) {
      while (true) {
        if (v in l) {
          u = l[v];
          v += p;
          break;
        }
        v += p;
        if (t ? v < 0 : h <= v) {
          throw TypeError("Reduce of empty array with no initial value");
        }
      }
    }
    for (; t ? v >= 0 : h > v; v += p) {
      if (v in l) {
        u = e(u, l[v], v, f);
      }
    }
    return u;
  };
export default {
  left: c(false),
  right: c(true),
};
