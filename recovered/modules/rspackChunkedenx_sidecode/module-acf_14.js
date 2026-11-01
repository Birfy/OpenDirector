import n from "./module-A_15.js";
import o from "./module-r9_14.js";
import forced from "./module-hP_15.js";
import a from "./module-vo_14.js";
import s from "./module-aq_14.js";
import { f } from "./module-t_15.js";
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
