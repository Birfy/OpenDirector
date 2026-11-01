import n from "./module-A_10.js";
import o from "./module-YR_9.js";
import i from "./module-O9_9.js";
import a from "./module-vo_9.js";
import s from "./module-vj_10.js";
import u from "./module-Vm_2_9.js";
import c from "./module-xK_9.js";
const f = o("Object", "create");
const l = i([].push);
n(
  {
    target: "Object",
    stat: true,
  },
  {
    groupBy: function (t, e) {
      s(t);
      a(e);
      const r = f(null);
      let n = 0;
      c(t, function (t) {
        const o = u(e(t, n++));
        if (o in r) {
          l(r[o], t);
        } else {
          r[o] = [t];
        }
      });
      return r;
    },
  },
);
