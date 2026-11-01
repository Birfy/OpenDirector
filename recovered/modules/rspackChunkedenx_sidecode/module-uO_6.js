import n from "./module-A_7.js";
import o from "./module-YR_6.js";
import a from "./module-O9_6.js";
import i from "./module-vo_6.js";
import s from "./module-vj_7.js";
import c from "./module-Vm_2_6.js";
import u from "./module-xK_6.js";
const f = o("Object", "create");
const l = a([].push);
n(
  {
    target: "Object",
    stat: true,
  },
  {
    groupBy: function (t, r) {
      s(t);
      i(r);
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
