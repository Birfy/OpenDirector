import n from "./module-A_8.js";
import o from "./module-YR_7.js";
import i from "./module-M_2_7.js";
import a from "./module-d_8.js";
import s from "./module-yM_8.js";
import u from "./module-wz_8.js";
import c from "./module-C_8.js";
import f from "./module-xK_7.js";
import l from "./module-lN_7.js";
import forced from "./module-dy_9.js";
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
