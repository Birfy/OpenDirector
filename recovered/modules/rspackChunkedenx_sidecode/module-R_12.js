import $ from "./module-r9_12.js";
import tt from "./module-M_2_12.js";
import { f as f_1 } from "./module-P_13.js";
import tr from "./module-w_13.js";
import tn from "./module-F_13.js";
import ti from "./module-Vm_2_12.js";
import to from "./module-D_2_12.js";
import ta from "./module-XG_2_12.js";
export const f = $
  ? Object.getOwnPropertyDescriptor
  : function (J, Z) {
      J = tn(J);
      Z = ti(Z);
      if (ta) {
        try {
          return Object.getOwnPropertyDescriptor(J, Z);
        } catch (J) {}
      }
      if (to(J, Z)) {
        return tr(!tt(f_1, J, Z), J[Z]);
      }
    };
