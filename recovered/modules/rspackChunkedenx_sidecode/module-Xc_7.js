import n from "./module-vo_7.js";
import o from "./module-aq_7.js";
import i from "./module-Q_8.js";
import a from "./module-F4_8.js";
const u = (r) =>
  function (t, e, u, c) {
    n(e);
    const f = o(t);
    const l = i(f);
    const h = a(f);
    let v = r ? h - 1 : 0;
    const p = r ? -1 : 1;
    if (u < 2) {
      while (true) {
        if (v in l) {
          c = l[v];
          v += p;
          break;
        }
        v += p;
        if (r ? v < 0 : h <= v) {
          throw TypeError("Reduce of empty array with no initial value");
        }
      }
    }
    for (; r ? v >= 0 : h > v; v += p) {
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
