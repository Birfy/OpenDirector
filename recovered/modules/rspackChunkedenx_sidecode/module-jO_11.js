import n from "./module-A_11.js";
import o from "./module-r9_10.js";
import forced from "./module-hP_11.js";
import a from "./module-vo_10.js";
import s from "./module-aq_10.js";
import { f } from "./module-t_11.js";
if (o) {
  n(
    {
      target: "Object",
      proto: true,
      forced,
    },
    {
      __defineGetter__: function (t, r) {
        f(s(this), t, {
          get: a(r),
          enumerable: true,
          configurable: true,
        });
      },
    },
  );
}
