import n from "./module-A_11.js";
import o from "./module-YR_10.js";
import i from "./module-O9_10.js";
import a from "./module-vo_10.js";
import s from "./module-vj_11.js";
import u from "./module-Vm_2_10.js";
import c from "./module-xK_10.js";
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
