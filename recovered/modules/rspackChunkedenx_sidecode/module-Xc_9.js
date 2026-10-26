import n from "./module-vo_9.js";
import o from "./module-aq_9.js";
import i from "./module-Q_10.js";
import a from "./module-F4_10.js";
const u = (t) =>
  function (e, r, u, c) {
    n(r);
    const f = o(e);
    const l = i(f);
    const h = a(f);
    let v = t ? h - 1 : 0;
    const d = t ? -1 : 1;
    if (u < 2) {
      while (true) {
        if (v in l) {
          c = l[v];
          v += d;
          break;
        }
        v += d;
        if (t ? v < 0 : h <= v) {
          throw TypeError("Reduce of empty array with no initial value");
        }
      }
    }
    for (; t ? v >= 0 : h > v; v += d) {
      if (v in l) {
        c = r(c, l[v], v, f);
      }
    }
    return c;
  };
export default {
  left: u(false),
  right: u(true),
};
