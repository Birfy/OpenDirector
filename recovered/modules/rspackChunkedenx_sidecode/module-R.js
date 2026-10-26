import n from "./module-r9.js";
import o from "./module-M_2.js";
import { f as f_1 } from "./module-P.js";
import a from "./module-w.js";
import s from "./module-F.js";
import u from "./module-Vm_2.js";
import c from "./module-D_2.js";
import _f from "./module-XG_2.js";
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
