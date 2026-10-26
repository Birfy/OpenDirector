import n from "./module-O9_9.js";
import o from "./module-vj_10.js";
import i from "./module-ng_10.js";
import a from "./module-ri_10.js";
const s = n("".replace);
const u = RegExp("^[" + a + "]+");
const c = RegExp("(^|[^" + a + "])[" + a + "]+$");
const f = (t) =>
  function (e) {
    let r = i(o(e));
    if (1 & t) {
      r = s(r, u, "");
    }
    if (2 & t) {
      r = s(r, c, "$1");
    }
    return r;
  };
export default {
  start: f(1),
  end: f(2),
  trim: f(3),
};
