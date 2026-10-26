import n from "./module-A_16.js";
import o from "./module-YR_15.js";
import i from "./module-M_2_15.js";
import a from "./module-d_16.js";
import s from "./module-yM_16.js";
import u from "./module-wz_16.js";
import c from "./module-C_16.js";
import f from "./module-xK_15.js";
import h from "./module-lN_15.js";
import forced from "./module-dy_17.js";
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
