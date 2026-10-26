import n from "./module-A_6.js";
import i from "./module-r9_5.js";
import forced from "./module-hP_6.js";
import s from "./module-aq_5.js";
import a from "./module-Vm_2_5.js";
import u from "./module-H_2_5.js";
import { f } from "./module-R_5.js";
if (i) {
  n(
    {
      target: "Object",
      proto: true,
      forced,
    },
    {
      __lookupGetter__: function (t) {
        let r;
        let e = s(this);
        const n = a(t);
        do {
          if ((r = f(e, n))) {
            return r.get;
          }
        } while ((e = u(e)));
      },
    },
  );
}
