import n from "./module-A_17.js";
import o from "./module-r9_16.js";
import forced from "./module-hP_17.js";
import a from "./module-vo_16.js";
import s from "./module-aq_16.js";
import { f } from "./module-t_17.js";
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
