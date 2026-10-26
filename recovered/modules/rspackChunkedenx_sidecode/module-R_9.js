import n from "./module-r9_9.js";
import o from "./module-M_2_9.js";
import { f as f_1 } from "./module-P_10.js";
import a from "./module-w_10.js";
import s from "./module-F_10.js";
import u from "./module-Vm_2_9.js";
import c from "./module-D_2_9.js";
import _f from "./module-XG_2_9.js";
export const f = n
  ? Object.getOwnPropertyDescriptor
  : function (t, e) {
      t = s(t);
      e = u(e);
      if (_f) {
        try {
          return Object.getOwnPropertyDescriptor(t, e);
        } catch (t) {}
      }
      if (c(t, e)) {
        return a(!o(f_1, t, e), t[e]);
      }
    };
