import n from "./module-A_4.js";
import i from "./module-r9_3.js";
import forced from "./module-hP_4.js";
import s from "./module-vo_3.js";
import a from "./module-aq_3.js";
import { f } from "./module-t_4.js";
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
