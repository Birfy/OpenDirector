import n from "./module-A_17.js";
import o from "./module-YR_16.js";
import i from "./module-M_2_16.js";
import a from "./module-d_17.js";
import s from "./module-yM_17.js";
import u from "./module-wz_17.js";
import c from "./module-C_17.js";
import f from "./module-xK_16.js";
import l from "./module-lN_16.js";
import forced from "./module-dy_18.js";
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
