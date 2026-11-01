import n from "./module-F_17.js";
import o from "./module-j_2_16.js";
import i from "./module-F4_17.js";
const a = (t) =>
  function (r, e, a) {
    let s;
    const u = n(r);
    const c = i(u);
    let f = o(a, c);
    if (t && e != e) {
      while (c > f) {
        if ((s = u[f++]) != s) {
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
  includes: a(true),
  indexOf: a(false),
};
