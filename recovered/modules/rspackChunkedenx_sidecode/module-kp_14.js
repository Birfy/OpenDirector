import n from "./module-O9_14.js";
import o from "./module-vj_15.js";
import i from "./module-ng_15.js";
import a from "./module-ri_15.js";
const s = n("".replace);
const c = RegExp("^[" + a + "]+");
const u = RegExp("(^|[^" + a + "])[" + a + "]+$");
const f = (t) =>
  function (r) {
    let e = i(o(r));
    if (1 & t) {
      e = s(e, c, "");
    }
    if (2 & t) {
      e = s(e, u, "$1");
    }
    return e;
  };
export default {
  start: f(1),
  end: f(2),
  trim: f(3),
};
