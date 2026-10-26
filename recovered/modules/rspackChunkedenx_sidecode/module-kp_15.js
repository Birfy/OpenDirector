import n from "./module-O9_15.js";
import o from "./module-vj_16.js";
import i from "./module-ng_16.js";
import a from "./module-ri_16.js";
const s = n("".replace);
const u = RegExp("^[" + a + "]+");
const c = RegExp("(^|[^" + a + "])[" + a + "]+$");
const f = (r) =>
  function (t) {
    let e = i(o(t));
    if (1 & r) {
      e = s(e, u, "");
    }
    if (2 & r) {
      e = s(e, c, "$1");
    }
    return e;
  };
export default {
  start: f(1),
  end: f(2),
  trim: f(3),
};
