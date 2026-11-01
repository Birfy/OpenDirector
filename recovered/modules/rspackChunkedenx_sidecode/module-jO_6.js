import n from "./module-A_6.js";
import i from "./module-r9_5.js";
import forced from "./module-hP_6.js";
import s from "./module-vo_5.js";
import a from "./module-aq_5.js";
import { f } from "./module-t_6.js";
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
