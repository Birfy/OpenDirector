import n from "./module-r9_21.js";
import i from "./module-L_21.js";
import { f as f_1 } from "./module-t_22.js";
import s from "./module-d_22.js";
import a from "./module-F_22.js";
import u from "./module-II_21.js";
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
