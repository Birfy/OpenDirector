import n from "./module-F_14.js";
import o from "./module-j_2_13.js";
import i from "./module-F4_14.js";
const a = (r) =>
  function (t, e, a) {
    let s;
    const u = n(t);
    const c = i(u);
    let f = o(a, c);
    if (r && e != e) {
      while (c > f) {
        if ((s = u[f++]) != s) {
          return true;
        }
      }
    } else {
      for (; c > f; f++) {
        if ((r || f in u) && u[f] === e) {
          return r || f || 0;
        }
      }
    }
    return !r && -1;
  };
export default {
  includes: a(true),
  indexOf: a(false),
};
