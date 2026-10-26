import n from "./module-vo_10.js";
import o from "./module-aq_10.js";
import i from "./module-Q_11.js";
import a from "./module-F4_11.js";
const u = (t) =>
  function (r, e, u, c) {
    n(e);
    const f = o(r);
    const l = i(f);
    const h = a(f);
    let v = t ? h - 1 : 0;
    const p = t ? -1 : 1;
    if (u < 2) {
      while (true) {
        if (v in l) {
          c = l[v];
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
        c = e(c, l[v], v, f);
      }
    }
    return c;
  };
export default {
  left: u(false),
  right: u(true),
};
