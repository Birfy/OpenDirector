import n from "./module-A_4.js";
import i from "./module-r9_3.js";
import forced from "./module-hP_4.js";
import s from "./module-aq_3.js";
import a from "./module-Vm_2_3.js";
import u from "./module-H_2_3.js";
import { f } from "./module-R_3.js";
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
