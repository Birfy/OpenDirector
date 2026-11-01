import n from "./module-O9.js";
import o from "./module-vj.js";
import i from "./module-ng.js";
import a from "./module-ri.js";
const s = n("".replace);
const u = RegExp("^[" + a + "]+");
const c = RegExp("(^|[^" + a + "])[" + a + "]+$");
const f = (t) =>
  function (r) {
    let e = i(o(r));
    if (1 & t) {
      e = s(e, u, "");
    }
    if (2 & t) {
      e = s(e, c, "$1");
    }
    return e;
  };
export default {
  start: f(1),
  end: f(2),
  trim: f(3),
};
