import n from "./module-o.js";
import o from "./module-H_2.js";
import i from "./module-BC_2.js";
import a from "./module-nl.js";
const s = n("".replace);
const u = RegExp("^[" + a + "]+");
const c = RegExp("(^|[^" + a + "])[" + a + "]+$");
const f = (e) =>
  function (t) {
    let r = i(o(t));
    if (1 & e) {
      r = s(r, u, "");
    }
    if (2 & e) {
      r = s(r, c, "$1");
    }
    return r;
  };
export default {
  start: f(1),
  end: f(2),
  trim: f(3),
};
