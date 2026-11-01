import n from "./module-A_9.js";
import i from "./module-r9_8.js";
import forced from "./module-hP_9.js";
import s from "./module-aq_8.js";
import a from "./module-Vm_2_8.js";
import u from "./module-H_2_8.js";
import { f } from "./module-R_8.js";
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
