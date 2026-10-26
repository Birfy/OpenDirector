import n from "./module-r9_5.js";
import i from "./module-M_2_5.js";
import { f as f_1 } from "./module-P_6.js";
import s from "./module-w_6.js";
import a from "./module-F_6.js";
import u from "./module-Vm_2_5.js";
import c from "./module-D_2_5.js";
import _f from "./module-XG_2_5.js";
export const f = n
  ? Object.getOwnPropertyDescriptor
  : function (t, r) {
      t = a(t);
      r = u(r);
      if (_f) {
        try {
          return Object.getOwnPropertyDescriptor(t, r);
        } catch (t) {}
      }
      if (c(t, r)) {
        return s(!i(f_1, t, r), t[r]);
      }
    };
