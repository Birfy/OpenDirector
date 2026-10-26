import n from "./module-A_23.js";
import i from "./module-YR_22.js";
import o from "./module-O9_22.js";
import s from "./module-vo_22.js";
import a from "./module-vj_23.js";
import u from "./module-Vm_2_22.js";
import c from "./module-xK_22.js";
const f = i("Object", "create");
const h = o([].push);
n(
  {
    target: "Object",
    stat: true,
  },
  {
    groupBy: function (t, r) {
      a(t);
      s(r);
      const e = f(null);
      let n = 0;
      c(t, function (t) {
        const i = u(r(t, n++));
        if (i in e) {
          h(e[i], t);
        } else {
          e[i] = [t];
        }
      });
      return e;
    },
  },
);
