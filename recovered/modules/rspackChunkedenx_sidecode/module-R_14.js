import n from "./module-r9_14.js";
import o from "./module-M_2_14.js";
import { f as f_1 } from "./module-P_15.js";
import a from "./module-w_15.js";
import s from "./module-F_15.js";
import c from "./module-Vm_2_14.js";
import u from "./module-D_2_14.js";
import _f from "./module-XG_2_14.js";
export const f = n
  ? Object.getOwnPropertyDescriptor
  : function (t, r) {
      t = s(t);
      r = c(r);
      if (_f) {
        try {
          return Object.getOwnPropertyDescriptor(t, r);
        } catch (t) {}
      }
      if (u(t, r)) {
        return a(!o(f_1, t, r), t[r]);
      }
    };
