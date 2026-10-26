import n from "./module-YR_15.js";
import o from "./module-O9_15.js";
import { f } from "./module-vV_15.js";
import { f as f_1 } from "./module-CR_15.js";
import s from "./module-d_16.js";
const u = o([].concat);
export default n("Reflect", "ownKeys") ||
  function (r) {
    const t = f(s(r));
    const e = f_1;
    if (e) {
      return u(t, e(r));
    }
    return t;
  };
