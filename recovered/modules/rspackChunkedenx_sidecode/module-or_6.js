import n from "./module-YR_6.js";
import o from "./module-O9_6.js";
import { f } from "./module-vV_6.js";
import { f as f_1 } from "./module-CR_6.js";
import s from "./module-d_7.js";
const c = o([].concat);
export default n("Reflect", "ownKeys") ||
  function (t) {
    const r = f(s(t));
    const e = f_1;
    if (e) {
      return c(r, e(t));
    }
    return r;
  };
