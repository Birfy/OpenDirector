import n from "./module-A_16.js";
import o from "./module-r9_15.js";
import forced from "./module-hP_16.js";
import a from "./module-aq_15.js";
import s from "./module-Vm_2_15.js";
import u from "./module-H_2_15.js";
import { f } from "./module-R_15.js";
if (o) {
  n(
    {
      target: "Object",
      proto: true,
      forced,
    },
    {
      __lookupSetter__: function (r) {
        let t;
        let e = a(this);
        const n = s(r);
        do {
          if ((t = f(e, n))) {
            return t.set;
          }
        } while ((e = u(e)));
      },
    },
  );
}
