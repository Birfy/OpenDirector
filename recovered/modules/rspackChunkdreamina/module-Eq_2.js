import n from "./module-F.js";
import o from "./module-N5_2.js";
import { f as f_1 } from "./module-R_2.js";
import a from "./module-IF_2.js";
import s from "./module-MR.js";
import u from "./module-W_2.js";
export const f =
  n && !o
    ? Object.defineProperties
    : function (e, t) {
        a(e);
        let r;
        const n = s(t);
        const o = u(t);
        for (let c = o.length, f = 0; c > f;) {
          f_1(e, (r = o[f++]), n[r]);
        }
        return e;
      };
