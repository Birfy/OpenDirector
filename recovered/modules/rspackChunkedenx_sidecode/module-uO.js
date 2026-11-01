import n from "./module-A.js";
import o from "./module-YR.js";
import i from "./module-O9.js";
import a from "./module-vo.js";
import s from "./module-vj.js";
import u from "./module-Vm_2.js";
import c from "./module-xK.js";
const f = o("Object", "create");
const h = i([].push);
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
          h(e[o], t);
        } else {
          e[o] = [t];
        }
      });
      return e;
    },
  },
);
