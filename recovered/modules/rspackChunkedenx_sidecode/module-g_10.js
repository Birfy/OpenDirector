import n from "./module-F_10.js";
import o from "./module-j_2_9.js";
import i from "./module-F4_10.js";
const a = (t) =>
  function (e, r, a) {
    let s;
    const u = n(e);
    const c = i(u);
    let f = o(a, c);
    if (t && r != r) {
      while (c > f) {
        if ((s = u[f++]) != s) {
          return true;
        }
      }
    } else {
      for (; c > f; f++) {
        if ((t || f in u) && u[f] === r) {
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
