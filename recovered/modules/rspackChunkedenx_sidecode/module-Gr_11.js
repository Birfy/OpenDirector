import n from "./module-A_12.js";
import o from "./module-r9_11.js";
import forced from "./module-hP_12.js";
import a from "./module-aq_11.js";
import s from "./module-Vm_2_11.js";
import u from "./module-H_2_11.js";
import { f } from "./module-R_11.js";
if (o) {
  n(
    {
      target: "Object",
      proto: true,
      forced,
    },
    {
      __lookupGetter__: function (r) {
        let t;
        let e = a(this);
        const n = s(r);
        do {
          if ((t = f(e, n))) {
            return t.get;
          }
        } while ((e = u(e)));
      },
    },
  );
}
