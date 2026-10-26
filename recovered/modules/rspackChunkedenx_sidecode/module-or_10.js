import n from "./module-YR_10.js";
import o from "./module-O9_10.js";
import { f } from "./module-vV_10.js";
import { f as f_1 } from "./module-CR_10.js";
import s from "./module-d_11.js";
const u = o([].concat);
export default n("Reflect", "ownKeys") ||
  function (t) {
    const r = f(s(t));
    const e = f_1;
    if (e) {
      return u(r, e(t));
    }
    return r;
  };
