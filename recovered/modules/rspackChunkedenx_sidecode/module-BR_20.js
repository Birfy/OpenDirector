import n from "./module-A_21.js";
import o from "./module-YR_20.js";
import i from "./module-M_2_20.js";
import a from "./module-d_21.js";
import s from "./module-yM_21.js";
import c from "./module-wz_21.js";
import u from "./module-C_21.js";
import f from "./module-xK_20.js";
import l from "./module-lN_20.js";
import forced from "./module-dy_22.js";
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
