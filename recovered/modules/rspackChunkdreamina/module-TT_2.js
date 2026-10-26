import n from "./module-MR.js";
import o from "./module-g2_2.js";
import i from "./module-OG_2.js";
const a = (e) =>
  function (t, r, a) {
    let s;
    const u = n(t);
    const c = i(u);
    let f = o(a, c);
    if (e && r != r) {
      while (c > f) {
        if ((s = u[f++]) != s) {
          return true;
        }
      }
    } else {
      for (; c > f; f++) {
        if ((e || f in u) && u[f] === r) {
          return e || f || 0;
        }
      }
    }
    return !e && -1;
  };
export default {
  includes: a(true),
  indexOf: a(false),
};
