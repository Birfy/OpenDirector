import n from "./module-A_14.js";
import o from "./module-r9_13.js";
import forced from "./module-hP_14.js";
import a from "./module-vo_13.js";
import s from "./module-aq_13.js";
import { f } from "./module-t_14.js";
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
