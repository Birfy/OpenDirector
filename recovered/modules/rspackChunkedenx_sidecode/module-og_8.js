import n from "./module-r9_7.js";
import o from "./module-L_7.js";
import { f as f_1 } from "./module-t_8.js";
import a from "./module-d_8.js";
import s from "./module-F_8.js";
import u from "./module-II_7.js";
export const f =
  n && !o
    ? Object.defineProperties
    : function (r, t) {
        a(r);
        let e;
        const n = s(t);
        const o = u(t);
        for (let c = o.length, f = 0; c > f;) {
          f_1(r, (e = o[f++]), n[e]);
        }
        return r;
      };
