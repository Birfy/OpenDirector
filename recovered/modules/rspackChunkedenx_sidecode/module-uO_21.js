import n from "./module-A_22.js";
import i from "./module-YR_21.js";
import o from "./module-O9_21.js";
import s from "./module-vo_21.js";
import a from "./module-vj_22.js";
import u from "./module-Vm_2_21.js";
import c from "./module-xK_21.js";
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
