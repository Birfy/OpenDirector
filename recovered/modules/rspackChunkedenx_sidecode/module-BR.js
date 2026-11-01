import n from "./module-A.js";
import o from "./module-YR.js";
import i from "./module-M_2.js";
import a from "./module-d.js";
import s from "./module-yM.js";
import u from "./module-wz.js";
import c from "./module-C.js";
import f from "./module-xK.js";
import h from "./module-lN.js";
import forced from "./module-dy.js";
const v = h("observable");
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
