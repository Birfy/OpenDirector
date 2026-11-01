import n from "./module-r9_6.js";
import o from "./module-M_2_6.js";
import { f as f_1 } from "./module-P_7.js";
import i from "./module-w_7.js";
import s from "./module-F_7.js";
import c from "./module-Vm_2_6.js";
import u from "./module-D_2_6.js";
import _f from "./module-XG_2_6.js";
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
        return i(!o(f_1, t, r), t[r]);
      }
    };
