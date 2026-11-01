import $ from "./module-r9_12.js";
import tt from "./module-L_12.js";
import { f as f_1 } from "./module-t_13.js";
import tr from "./module-d_13.js";
import tn from "./module-F_13.js";
import ti from "./module-II_12.js";
export const f =
  $ && !tt
    ? Object.defineProperties
    : function (J, Z) {
        tr(J);
        let Q;
        const $ = tn(Z);
        const tt = ti(Z);
        for (let to = tt.length, ta = 0; to > ta;) {
          f_1(J, (Q = tt[ta++]), $[Q]);
        }
        return J;
      };
