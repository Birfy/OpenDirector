import n from "./module-A_3.js";
import i from "./module-r9_2.js";
import forced from "./module-hP_3.js";
import s from "./module-vo_2.js";
import a from "./module-aq_2.js";
import { f } from "./module-t_3.js";
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
