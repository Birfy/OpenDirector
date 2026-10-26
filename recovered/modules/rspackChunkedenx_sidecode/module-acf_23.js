import n from "./module-A_24.js";
import o from "./module-r9_23.js";
import forced from "./module-hP_24.js";
import a from "./module-vo_23.js";
import s from "./module-aq_23.js";
import { f } from "./module-t_24.js";
if (o) {
  n(
    {
      target: "Object",
      proto: true,
      forced,
    },
    {
      __defineSetter__: function (t, r) {
        f(s(this), t, {
          set: a(r),
          enumerable: true,
          configurable: true,
        });
      },
    },
  );
}
