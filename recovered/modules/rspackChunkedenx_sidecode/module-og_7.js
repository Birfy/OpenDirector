import n from "./module-r9_6.js";
import o from "./module-L_6.js";
import { f as f_1 } from "./module-t_7.js";
import i from "./module-d_7.js";
import s from "./module-F_7.js";
import c from "./module-II_6.js";
export const f =
  n && !o
    ? Object.defineProperties
    : function (t, r) {
        i(t);
        let e;
        const n = s(r);
        const o = c(r);
        for (let u = o.length, f = 0; u > f;) {
          f_1(t, (e = o[f++]), n[e]);
        }
        return t;
      };
