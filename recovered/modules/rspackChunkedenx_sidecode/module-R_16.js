import n from "./module-r9_16.js";
import o from "./module-M_2_16.js";
import { f as f_1 } from "./module-P_17.js";
import a from "./module-w_17.js";
import s from "./module-F_17.js";
import u from "./module-Vm_2_16.js";
import c from "./module-D_2_16.js";
import _f from "./module-XG_2_16.js";
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
