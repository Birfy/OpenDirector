import n from "./module-A_24.js";
import o from "./module-r9_23.js";
import forced from "./module-hP_24.js";
import a from "./module-aq_23.js";
import s from "./module-Vm_2_23.js";
import c from "./module-H_2_23.js";
import { f } from "./module-R_23.js";
if (o) {
  n(
    {
      target: "Object",
      proto: true,
      forced,
    },
    {
      __lookupSetter__: function (t) {
        let r;
        let e = a(this);
        const n = s(t);
        do {
          if ((r = f(e, n))) {
            return r.set;
          }
        } while ((e = c(e)));
      },
    },
  );
}
