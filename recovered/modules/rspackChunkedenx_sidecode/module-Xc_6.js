import n from "./module-vo_6.js";
import o from "./module-aq_6.js";
import a from "./module-Q_7.js";
import i from "./module-F4_7.js";
const c = (t) =>
  function (r, e, c, u) {
    n(e);
    const f = o(r);
    const l = a(f);
    const h = i(f);
    let p = t ? h - 1 : 0;
    const v = t ? -1 : 1;
    if (c < 2) {
      while (true) {
        if (p in l) {
          u = l[p];
          p += v;
          break;
        }
        p += v;
        if (t ? p < 0 : h <= p) {
          throw TypeError("Reduce of empty array with no initial value");
        }
      }
    }
    for (; t ? p >= 0 : h > p; p += v) {
      if (p in l) {
        u = e(u, l[p], p, f);
      }
    }
    return u;
  };
export default {
  left: c(false),
  right: c(true),
};
