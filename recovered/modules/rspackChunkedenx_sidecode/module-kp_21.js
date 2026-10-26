import n from "./module-O9_21.js";
import i from "./module-vj_22.js";
import o from "./module-ng_22.js";
import s from "./module-ri_22.js";
const a = n("".replace);
const u = RegExp("^[" + s + "]+");
const c = RegExp("(^|[^" + s + "])[" + s + "]+$");
const f = (t) =>
  function (r) {
    let e = o(i(r));
    if (1 & t) {
      e = a(e, u, "");
    }
    if (2 & t) {
      e = a(e, c, "$1");
    }
    return e;
  };
export default {
  start: f(1),
  end: f(2),
  trim: f(3),
};
