import n from "./module-A_22.js";
import i from "./module-r9_21.js";
import forced from "./module-hP_22.js";
import s from "./module-aq_21.js";
import a from "./module-Vm_2_21.js";
import u from "./module-H_2_21.js";
import { f } from "./module-R_21.js";
if (i) {
  n(
    {
      target: "Object",
      proto: true,
      forced,
    },
    {
      __lookupSetter__: function (t) {
        let r;
        let e = s(this);
        const n = a(t);
        do {
          if ((r = f(e, n))) {
            return r.set;
          }
        } while ((e = u(e)));
      },
    },
  );
}
