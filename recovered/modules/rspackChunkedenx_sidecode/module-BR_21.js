import n from "./module-A_22.js";
import i from "./module-YR_21.js";
import o from "./module-M_2_21.js";
import s from "./module-d_22.js";
import a from "./module-yM_22.js";
import u from "./module-wz_22.js";
import c from "./module-C_22.js";
import f from "./module-xK_21.js";
import h from "./module-lN_21.js";
import forced from "./module-dy_23.js";
const v = h("observable");
n(
  {
    target: "Observable",
    stat: true,
    forced,
  },
  {
    from: function (t) {
      const r = a(this) ? this : i("Observable");
      const e = c(s(t), v);
      if (e) {
        const n = s(o(e, t));
        if (n.constructor === r) {
          return n;
        }
        return new r(function (t) {
          return n.subscribe(t);
        });
      }
      const h = u(t);
      return new r(function (t) {
        f(
          h,
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
