import n from "./module-vo_8.js";
import i from "./module-aq_8.js";
import o from "./module-Q_9.js";
import s from "./module-F4_9.js";
const u = (t) =>
  function (r, e, u, c) {
    n(e);
    const f = i(r);
    const h = o(f);
    const l = s(f);
    let v = t ? l - 1 : 0;
    const p = t ? -1 : 1;
    if (u < 2) {
      while (true) {
        if (v in h) {
          c = h[v];
          v += p;
          break;
        }
        v += p;
        if (t ? v < 0 : l <= v) {
          throw TypeError("Reduce of empty array with no initial value");
        }
      }
    }
    for (; t ? v >= 0 : l > v; v += p) {
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
