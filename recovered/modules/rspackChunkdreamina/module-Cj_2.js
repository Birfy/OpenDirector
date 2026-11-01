import n from "./module-Y.js";
import o from "./module-o.js";
import { f } from "./module-Fb_2.js";
import { f as f_1 } from "./module-mi_2.js";
import s from "./module-IF_2.js";
const u = o([].concat);
export default n("Reflect", "ownKeys") ||
  function (e) {
    const t = f(s(e));
    const r = f_1;
    if (r) {
      return u(t, r(e));
    }
    return t;
  };
