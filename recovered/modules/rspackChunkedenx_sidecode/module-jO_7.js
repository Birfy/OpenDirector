import n from "./module-A_7.js";
import o from "./module-r9_6.js";
import forced from "./module-hP_7.js";
import i from "./module-vo_6.js";
import s from "./module-aq_6.js";
import { f } from "./module-t_7.js";
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
          get: i(r),
          enumerable: true,
          configurable: true,
        });
      },
    },
  );
}
