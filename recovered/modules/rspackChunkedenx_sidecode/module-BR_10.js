import n from "./module-A_11.js";
import o from "./module-YR_10.js";
import i from "./module-M_2_10.js";
import a from "./module-d_11.js";
import s from "./module-yM_11.js";
import u from "./module-wz_11.js";
import c from "./module-C_11.js";
import f from "./module-xK_10.js";
import l from "./module-lN_10.js";
import forced from "./module-dy_12.js";
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
      const e = c(a(t), v);
      if (e) {
        const n = a(i(e, t));
        if (n.constructor === r) {
          return n;
        }
        return new r(function (t) {
          return n.subscribe(t);
        });
      }
      const l = u(t);
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
