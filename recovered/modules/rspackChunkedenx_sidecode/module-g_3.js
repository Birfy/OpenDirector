import n from "./module-F_3.js";
import i from "./module-j_2_2.js";
import o from "./module-F4_3.js";
const s = (t) =>
  function (r, e, s) {
    let a;
    const u = n(r);
    const c = o(u);
    let f = i(s, c);
    if (t && e != e) {
      while (c > f) {
        if ((a = u[f++]) != a) {
          return true;
        }
      }
    } else {
      for (; c > f; f++) {
        if ((t || f in u) && u[f] === e) {
          return t || f || 0;
        }
      }
    }
    return !t && -1;
  };
export default {
  includes: s(true),
  indexOf: s(false),
};
