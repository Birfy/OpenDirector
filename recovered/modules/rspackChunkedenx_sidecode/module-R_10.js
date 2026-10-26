import n from "./module-r9_10.js";
import o from "./module-M_2_10.js";
import { f as f_1 } from "./module-P_11.js";
import a from "./module-w_11.js";
import s from "./module-F_11.js";
import u from "./module-Vm_2_10.js";
import c from "./module-D_2_10.js";
import _f from "./module-XG_2_10.js";
export const f = n
  ? Object.getOwnPropertyDescriptor
  : function (t, r) {
      t = s(t);
      r = u(r);
      if (_f) {
        try {
          return Object.getOwnPropertyDescriptor(t, r);
        } catch (t) {}
      }
      if (c(t, r)) {
        return a(!o(f_1, t, r), t[r]);
      }
    };
