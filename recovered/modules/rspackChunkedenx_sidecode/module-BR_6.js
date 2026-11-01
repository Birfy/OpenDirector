import n from "./module-A_7.js";
import o from "./module-YR_6.js";
import a from "./module-M_2_6.js";
import i from "./module-d_7.js";
import s from "./module-yM_7.js";
import c from "./module-wz_7.js";
import u from "./module-C_7.js";
import f from "./module-xK_6.js";
import l from "./module-lN_6.js";
import forced from "./module-dy_8.js";
const p = l("observable");
n(
  {
    target: "Observable",
    stat: true,
    forced,
  },
  {
    from: function (t) {
      const r = s(this) ? this : o("Observable");
      const e = u(i(t), p);
      if (e) {
        const n = i(a(e, t));
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
