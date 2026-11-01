import n from "./module-A_21.js";
import o from "./module-YR_20.js";
import i from "./module-O9_20.js";
import a from "./module-vo_20.js";
import s from "./module-vj_21.js";
import c from "./module-Vm_2_20.js";
import u from "./module-xK_20.js";
const f = o("Object", "create");
const l = i([].push);
n(
  {
    target: "Object",
    stat: true,
  },
  {
    groupBy: function (t, r) {
      s(t);
      a(r);
      const e = f(null);
      let n = 0;
      u(t, function (t) {
        const o = c(r(t, n++));
        if (o in e) {
          l(e[o], t);
        } else {
          e[o] = [t];
        }
      });
      return e;
    },
  },
);
