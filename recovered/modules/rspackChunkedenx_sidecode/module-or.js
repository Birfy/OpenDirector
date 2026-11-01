import n from "./module-YR.js";
import o from "./module-O9.js";
import { f } from "./module-vV.js";
import { f as f_1 } from "./module-CR.js";
import s from "./module-d.js";
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
