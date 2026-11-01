import n from "./module-A_16.js";
import o from "./module-r9_15.js";
import forced from "./module-hP_16.js";
import a from "./module-vo_15.js";
import s from "./module-aq_15.js";
import { f } from "./module-t_16.js";
if (o) {
  n(
    {
      target: "Object",
      proto: true,
      forced,
    },
    {
      __defineGetter__: function (r, t) {
        f(s(this), r, {
          get: a(t),
          enumerable: true,
          configurable: true,
        });
      },
    },
  );
}
