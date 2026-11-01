import n from "./module-B.js";
import o from "./module-O_2.js";
import i from "./module-x.js";
import a from "./module-OG_2.js";
const u = (e) =>
  function (t, r, u, c) {
    n(r);
    const f = o(t);
    const l = i(f);
    const p = a(f);
    let h = e ? p - 1 : 0;
    const v = e ? -1 : 1;
    if (u < 2) {
      while (true) {
        if (h in l) {
          c = l[h];
          h += v;
          break;
        }
        h += v;
        if (e ? h < 0 : p <= h) {
          throw TypeError("Reduce of empty array with no initial value");
        }
      }
    }
    for (; e ? h >= 0 : p > h; h += v) {
      if (h in l) {
        c = r(c, l[h], h, f);
      }
    }
    return c;
  };
export default {
  left: u(false),
  right: u(true),
};
