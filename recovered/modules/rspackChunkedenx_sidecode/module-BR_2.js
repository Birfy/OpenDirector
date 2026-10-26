import n from "./module-A_3.js";
import i from "./module-YR_2.js";
import o from "./module-M_2_2.js";
import s from "./module-d_3.js";
import a from "./module-yM_3.js";
import u from "./module-wz_3.js";
import c from "./module-C_3.js";
import f from "./module-xK_2.js";
import h from "./module-lN_2.js";
import forced from "./module-dy_4.js";
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
