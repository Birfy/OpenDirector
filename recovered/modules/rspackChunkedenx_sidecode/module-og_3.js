import n from "./module-r9_2.js";
import i from "./module-L_2.js";
import { f as f_1 } from "./module-t_3.js";
import s from "./module-d_3.js";
import a from "./module-F_3.js";
import u from "./module-II_2.js";
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
