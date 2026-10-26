import n from "./module-A_17.js";
import o from "./module-YR_16.js";
import i from "./module-O9_16.js";
import a from "./module-vo_16.js";
import s from "./module-vj_17.js";
import u from "./module-Vm_2_16.js";
import c from "./module-xK_16.js";
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
      c(t, function (t) {
        const o = u(r(t, n++));
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
