import n from "./module-F.js";
import o from "./module-p3.js";
import { f as f_1 } from "./module-FC_2.js";
import a from "./module-M.js";
import s from "./module-MR.js";
import u from "./module-c_2.js";
import c from "./module-h.js";
import _f from "./module-Oq_4.js";
export const f = n
  ? Object.getOwnPropertyDescriptor
  : function (e, t) {
      e = s(e);
      t = u(t);
      if (_f) {
        try {
          return Object.getOwnPropertyDescriptor(e, t);
        } catch (e) {}
      }
      if (c(e, t)) {
        return a(!o(f_1, e, t), e[t]);
      }
    };
