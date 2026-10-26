import n from "./module-A_23.js";
import i from "./module-r9_22.js";
import forced from "./module-hP_23.js";
import s from "./module-vo_22.js";
import a from "./module-aq_22.js";
import { f } from "./module-t_23.js";
if (i) {
  n(
    {
      target: "Object",
      proto: true,
      forced,
    },
    {
      __defineSetter__: function (t, r) {
        f(a(this), t, {
          set: s(r),
          enumerable: true,
          configurable: true,
        });
      },
    },
  );
}
