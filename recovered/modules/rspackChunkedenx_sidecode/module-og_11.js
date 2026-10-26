import n from "./module-r9_10.js";
import o from "./module-L_10.js";
import { f as f_1 } from "./module-t_11.js";
import a from "./module-d_11.js";
import s from "./module-F_11.js";
import u from "./module-II_10.js";
export const f =
  n && !o
    ? Object.defineProperties
    : function (t, r) {
        a(t);
        let e;
        const n = s(r);
        const o = u(r);
        for (let c = o.length, f = 0; c > f;) {
          f_1(t, (e = o[f++]), n[e]);
        }
        return t;
      };
