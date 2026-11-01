import n from "./module-r9_14.js";
import o from "./module-L_14.js";
import { f as f_1 } from "./module-t_15.js";
import a from "./module-d_15.js";
import s from "./module-F_15.js";
import c from "./module-II_14.js";
export const f =
  n && !o
    ? Object.defineProperties
    : function (t, r) {
        a(t);
        let e;
        const n = s(r);
        const o = c(r);
        for (let u = o.length, f = 0; u > f;) {
          f_1(t, (e = o[f++]), n[e]);
        }
        return t;
      };
