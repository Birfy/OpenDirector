import n from "./module-A_11.js";
import o from "./module-r9_10.js";
import forced from "./module-hP_11.js";
import a from "./module-aq_10.js";
import s from "./module-Vm_2_10.js";
import u from "./module-H_2_10.js";
import { f } from "./module-R_10.js";
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
        } while ((e = u(e)));
      },
    },
  );
}
