import n from "./module-r9.js";
import o from "./module-L.js";
import { f as f_1 } from "./module-t.js";
import a from "./module-d.js";
import s from "./module-F.js";
import u from "./module-II.js";
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
