import n from "./module-r9_3.js";
import i from "./module-M_2_3.js";
import { f as f_1 } from "./module-P_4.js";
import s from "./module-w_4.js";
import a from "./module-F_4.js";
import u from "./module-Vm_2_3.js";
import c from "./module-D_2_3.js";
import _f from "./module-XG_2_3.js";
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
