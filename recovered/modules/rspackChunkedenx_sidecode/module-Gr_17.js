import n from "./module-A_18.js";
import o from "./module-r9_17.js";
import forced from "./module-hP_18.js";
import a from "./module-aq_17.js";
import s from "./module-Vm_2_17.js";
import u from "./module-H_2_17.js";
import { f } from "./module-R_17.js";
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
