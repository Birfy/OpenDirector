import n from "./module-F.js";
import { f } from "./module-R_2.js";
import i from "./module-M.js";
export default n
  ? function (e, t, r) {
      return f(e, t, i(1, r));
    }
  : function (e, t, r) {
      e[t] = r;
      return e;
    };
