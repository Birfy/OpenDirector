import n from "./module-A_3.js";
import i from "./module-YR_2.js";
import o from "./module-O9_2.js";
import s from "./module-vo_2.js";
import a from "./module-vj_3.js";
import u from "./module-Vm_2_2.js";
import c from "./module-xK_2.js";
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
