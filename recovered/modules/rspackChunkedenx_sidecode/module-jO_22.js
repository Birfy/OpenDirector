import n from "./module-A_22.js";
import i from "./module-r9_21.js";
import forced from "./module-hP_22.js";
import s from "./module-vo_21.js";
import a from "./module-aq_21.js";
import { f } from "./module-t_22.js";
if (i) {
  n(
    {
      target: "Object",
      proto: true,
      forced,
    },
    {
      __defineGetter__: function (t, r) {
        f(a(this), t, {
          get: s(r),
          enumerable: true,
          configurable: true,
        });
      },
    },
  );
}
