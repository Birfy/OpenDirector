import n from "./module-A_24.js";
import o from "./module-YR_23.js";
import i from "./module-M_2_23.js";
import a from "./module-d_24.js";
import s from "./module-yM_24.js";
import c from "./module-wz_24.js";
import u from "./module-C_24.js";
import f from "./module-xK_23.js";
import l from "./module-lN_23.js";
import forced from "./module-dy_25.js";
const v = l("observable");
n(
  {
    target: "Observable",
    stat: true,
    forced,
  },
  {
    from: function (t) {
      const r = s(this) ? this : o("Observable");
      const e = u(a(t), v);
      if (e) {
        const n = a(i(e, t));
        if (n.constructor === r) {
          return n;
        }
        return new r(function (t) {
          return n.subscribe(t);
        });
      }
      const l = c(t);
      return new r(function (t) {
        f(
          l,
          function (r, e) {
            t.next(r);
            if (t.closed) {
              return e();
            }
          },
          {
            IS_ITERATOR: true,
            INTERRUPTED: true,
          },
        );
        t.complete();
      });
    },
  },
);
