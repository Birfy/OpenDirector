import n from "./module-A_4.js";
import i from "./module-YR_3.js";
import o from "./module-O9_3.js";
import s from "./module-vo_3.js";
import a from "./module-vj_4.js";
import u from "./module-Vm_2_3.js";
import c from "./module-xK_3.js";
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
