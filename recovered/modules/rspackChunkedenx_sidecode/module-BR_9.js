import n from "./module-A_10.js";
import o from "./module-YR_9.js";
import i from "./module-M_2_9.js";
import a from "./module-d_10.js";
import s from "./module-yM_10.js";
import u from "./module-wz_10.js";
import c from "./module-C_10.js";
import f from "./module-xK_9.js";
import l from "./module-lN_9.js";
import forced from "./module-dy_11.js";
const v = l("observable");
n(
  {
    target: "Observable",
    stat: true,
    forced,
  },
  {
    from: function (t) {
      const e = s(this) ? this : o("Observable");
      const r = c(a(t), v);
      if (r) {
        const n = a(i(r, t));
        if (n.constructor === e) {
          return n;
        }
        return new e(function (t) {
          return n.subscribe(t);
        });
      }
      const l = u(t);
      return new e(function (t) {
        f(
          l,
          function (e, r) {
            t.next(e);
            if (t.closed) {
              return r();
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
