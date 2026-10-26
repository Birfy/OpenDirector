import n from "./module-A_5.js";
import i from "./module-YR_4.js";
import o from "./module-O9_4.js";
import s from "./module-vo_4.js";
import a from "./module-vj_5.js";
import u from "./module-Vm_2_4.js";
import c from "./module-xK_4.js";
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
