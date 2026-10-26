import n from "./module-A_5.js";
import i from "./module-r9_4.js";
import forced from "./module-hP_5.js";
import s from "./module-vo_4.js";
import a from "./module-aq_4.js";
import { f } from "./module-t_5.js";
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
