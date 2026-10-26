import n from "./module-A_20.js";
import o from "./module-YR_19.js";
import i from "./module-M_2_19.js";
import a from "./module-d_20.js";
import s from "./module-yM_20.js";
import u from "./module-wz_20.js";
import c from "./module-C_20.js";
import f from "./module-xK_19.js";
import l from "./module-lN_19.js";
import forced from "./module-dy_21.js";
const v = l("observable");
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
      const l = u(r);
      return new t(function (r) {
        f(
          l,
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
