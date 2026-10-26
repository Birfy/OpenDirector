import n from "./module-A_12.js";
import o from "./module-YR_11.js";
import i from "./module-O9_11.js";
import a from "./module-vo_11.js";
import s from "./module-vj_12.js";
import u from "./module-Vm_2_11.js";
import c from "./module-xK_11.js";
const f = o("Object", "create");
const h = i([].push);
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
          h(e[o], r);
        } else {
          e[o] = [r];
        }
      });
      return e;
    },
  },
);
