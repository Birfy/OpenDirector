import n from "./module-A_7.js";
import o from "./module-r9_6.js";
import forced from "./module-hP_7.js";
import i from "./module-aq_6.js";
import s from "./module-Vm_2_6.js";
import c from "./module-H_2_6.js";
import { f } from "./module-R_6.js";
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
        let e = i(this);
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
