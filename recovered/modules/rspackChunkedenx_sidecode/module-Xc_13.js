import n from "./module-vo_13.js";
import o from "./module-aq_13.js";
import i from "./module-Q_14.js";
import a from "./module-F4_14.js";
const u = (r) =>
  function (t, e, u, c) {
    n(e);
    const f = o(t);
    const h = i(f);
    const l = a(f);
    let v = r ? l - 1 : 0;
    const p = r ? -1 : 1;
    if (u < 2) {
      while (true) {
        if (v in h) {
          c = h[v];
          v += p;
          break;
        }
        v += p;
        if (r ? v < 0 : l <= v) {
          throw TypeError("Reduce of empty array with no initial value");
        }
      }
    }
    for (; r ? v >= 0 : l > v; v += p) {
      if (v in h) {
        c = e(c, h[v], v, f);
      }
    }
    return c;
  };
export default {
  left: u(false),
  right: u(true),
};
