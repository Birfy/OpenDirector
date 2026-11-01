import n from "./module-A_17.js";
import o from "./module-r9_16.js";
import forced from "./module-hP_17.js";
import a from "./module-aq_16.js";
import s from "./module-Vm_2_16.js";
import u from "./module-H_2_16.js";
import { f } from "./module-R_16.js";
if (o) {
  n(
    {
      target: "Object",
      proto: true,
      forced,
    },
    {
      __lookupGetter__: function (t) {
        let r;
        let e = a(this);
        const n = s(t);
        do {
          if ((r = f(e, n))) {
            return r.get;
          }
        } while ((e = u(e)));
      },
    },
  );
}
