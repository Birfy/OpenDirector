import n from "./module-r9_22.js";
import i from "./module-L_22.js";
import { f as f_1 } from "./module-t_23.js";
import s from "./module-d_23.js";
import a from "./module-F_23.js";
import u from "./module-II_22.js";
export const f =
  n && !i
    ? Object.defineProperties
    : function (t, r) {
        s(t);
        let e;
        const n = a(r);
        const i = u(r);
        for (let c = i.length, f = 0; c > f;) {
          f_1(t, (e = i[f++]), n[e]);
        }
        return t;
      };
