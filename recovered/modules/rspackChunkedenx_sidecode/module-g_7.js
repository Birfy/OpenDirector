import n from "./module-F_7.js";
import o from "./module-j_2_6.js";
import a from "./module-F4_7.js";
const i = (t) =>
  function (r, e, i) {
    let s;
    const c = n(r);
    const u = a(c);
    let f = o(i, u);
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
  includes: i(true),
  indexOf: i(false),
};
