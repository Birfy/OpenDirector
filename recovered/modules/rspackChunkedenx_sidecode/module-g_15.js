import n from "./module-F_15.js";
import o from "./module-j_2_14.js";
import i from "./module-F4_15.js";
const a = (t) =>
  function (r, e, a) {
    let s;
    const c = n(r);
    const u = i(c);
    let f = o(a, u);
    if (t && e != e) {
      while (u > f) {
        if ((s = c[f++]) != s) {
          return true;
        }
      }
    } else {
      for (; u > f; f++) {
        if ((t || f in c) && c[f] === e) {
          return t || f || 0;
        }
      }
    }
    return !t && -1;
  };
export default {
  includes: a(true),
  indexOf: a(false),
};
