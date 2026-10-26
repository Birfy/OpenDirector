import n from "./module-r9_16.js";
import o from "./module-L_16.js";
import { f as f_1 } from "./module-t_17.js";
import a from "./module-d_17.js";
import s from "./module-F_17.js";
import u from "./module-II_16.js";
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
