import n from "./module-A_19.js";
import o from "./module-r9_18.js";
import forced from "./module-hP_19.js";
import a from "./module-aq_18.js";
import s from "./module-Vm_2_18.js";
import u from "./module-H_2_18.js";
import { f } from "./module-R_18.js";
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
