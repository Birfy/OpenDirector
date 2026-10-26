import n from "./module-A_21.js";
import o from "./module-r9_20.js";
import forced from "./module-hP_21.js";
import a from "./module-vo_20.js";
import s from "./module-aq_20.js";
import { f } from "./module-t_21.js";
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
