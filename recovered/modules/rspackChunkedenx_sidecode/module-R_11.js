import n from "./module-r9_11.js";
import o from "./module-M_2_11.js";
import { f as f_1 } from "./module-P_12.js";
import a from "./module-w_12.js";
import s from "./module-F_12.js";
import u from "./module-Vm_2_11.js";
import c from "./module-D_2_11.js";
import _f from "./module-XG_2_11.js";
export const f = n
  ? Object.getOwnPropertyDescriptor
  : function (r, t) {
      r = s(r);
      t = u(t);
      if (_f) {
        try {
          return Object.getOwnPropertyDescriptor(r, t);
        } catch (r) {}
      }
      if (c(r, t)) {
        return a(!o(f_1, r, t), r[t]);
      }
    };
