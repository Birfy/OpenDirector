import n from "./module-A_12.js";
import o from "./module-YR_11.js";
import i from "./module-M_2_11.js";
import a from "./module-d_12.js";
import s from "./module-yM_12.js";
import u from "./module-wz_12.js";
import c from "./module-C_12.js";
import f from "./module-xK_11.js";
import h from "./module-lN_11.js";
import forced from "./module-dy_13.js";
const v = h("observable");
n(
  {
    target: "Observable",
    stat: true,
    forced,
  },
  {
    from: function (r) {
      const t = s(this) ? this : o("Observable");
      const e = c(a(r), v);
      if (e) {
        const n = a(i(e, r));
        if (n.constructor === t) {
          return n;
        }
        return new t(function (r) {
          return n.subscribe(r);
        });
      }
      const h = u(r);
      return new t(function (r) {
        f(
          h,
          function (t, e) {
            r.next(t);
            if (r.closed) {
              return e();
            }
          },
          {
            IS_ITERATOR: true,
            INTERRUPTED: true,
          },
        );
        r.complete();
      });
    },
  },
);
