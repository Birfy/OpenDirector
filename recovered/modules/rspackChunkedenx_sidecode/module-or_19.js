import n from "./module-YR_19.js";
import o from "./module-O9_19.js";
import { f } from "./module-vV_19.js";
import { f as f_1 } from "./module-CR_19.js";
import s from "./module-d_20.js";
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
