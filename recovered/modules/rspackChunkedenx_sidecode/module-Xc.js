import n from "./module-vo.js";
import o from "./module-aq.js";
import i from "./module-Q.js";
import a from "./module-F4.js";
const u = (t) =>
  function (r, e, u, c) {
    n(e);
    const f = o(r);
    const h = i(f);
    const l = a(f);
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
