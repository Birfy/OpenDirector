import n from "./module-A.js";
import o from "./module-r9.js";
import forced from "./module-hP.js";
import a from "./module-aq.js";
import s from "./module-Vm_2.js";
import u from "./module-H_2.js";
import { f } from "./module-R.js";
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
