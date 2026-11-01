import n from "./module-O9_6.js";
import o from "./module-vj_7.js";
import a from "./module-ng_7.js";
import i from "./module-ri_7.js";
const s = n("".replace);
const c = RegExp("^[" + i + "]+");
const u = RegExp("(^|[^" + i + "])[" + i + "]+$");
const f = (t) =>
  function (r) {
    let e = a(o(r));
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
