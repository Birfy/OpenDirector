import n from "./module-r9_9.js";
import o from "./module-L_9.js";
import { f as f_1 } from "./module-t_10.js";
import a from "./module-d_10.js";
import s from "./module-F_10.js";
import u from "./module-II_9.js";
export const f =
  n && !o
    ? Object.defineProperties
    : function (t, e) {
        a(t);
        let r;
        const n = s(e);
        const o = u(e);
        for (let c = o.length, f = 0; c > f;) {
          f_1(t, (r = o[f++]), n[r]);
        }
        return t;
      };
