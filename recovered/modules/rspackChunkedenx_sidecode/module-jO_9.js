import n from "./module-A_9.js";
import i from "./module-r9_8.js";
import forced from "./module-hP_9.js";
import s from "./module-vo_8.js";
import a from "./module-aq_8.js";
import { f } from "./module-t_9.js";
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
