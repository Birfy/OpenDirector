import n from "./module-A_8.js";
import o from "./module-YR_7.js";
import i from "./module-O9_7.js";
import a from "./module-vo_7.js";
import s from "./module-vj_8.js";
import u from "./module-Vm_2_7.js";
import c from "./module-xK_7.js";
const f = o("Object", "create");
const l = i([].push);
n(
  {
    target: "Object",
    stat: true,
  },
  {
    groupBy: function (r, t) {
      s(r);
      a(t);
      const e = f(null);
      let n = 0;
      c(r, function (r) {
        const o = u(t(r, n++));
        if (o in e) {
          l(e[o], r);
        } else {
          e[o] = [r];
        }
      });
      return e;
    },
  },
);
