import n from "./module-A_10.js";
import o from "./module-r9_9.js";
import forced from "./module-hP_10.js";
import a from "./module-aq_9.js";
import s from "./module-Vm_2_9.js";
import u from "./module-H_2_9.js";
import { f } from "./module-R_9.js";
if (o) {
  n(
    {
      target: "Object",
      proto: true,
      forced,
    },
    {
      __lookupGetter__: function (t) {
        let e;
        let r = a(this);
        const n = s(t);
        do {
          if ((e = f(r, n))) {
            return e.get;
          }
        } while ((r = u(r)));
      },
    },
  );
}
