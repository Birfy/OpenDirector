import n from "./module-A_21.js";
import o from "./module-r9_20.js";
import forced from "./module-hP_21.js";
import a from "./module-aq_20.js";
import s from "./module-Vm_2_20.js";
import c from "./module-H_2_20.js";
import { f } from "./module-R_20.js";
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
