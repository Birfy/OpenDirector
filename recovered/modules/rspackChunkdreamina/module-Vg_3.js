import n from "./module-g.js";
import o from "./module-F.js";
import forced from "./module-iR_3.js";
import a from "./module-O_2.js";
import s from "./module-c_2.js";
import u from "./module-jA_2.js";
import { f } from "./module-y_2.js";
if (o) {
  n(
    {
      target: "Object",
      proto: true,
      forced,
    },
    {
      __lookupGetter__: function (e) {
        let t;
        let r = a(this);
        const n = s(e);
        do {
          if ((t = f(r, n))) {
            return t.get;
          }
        } while ((r = u(r)));
      },
    },
  );
}
