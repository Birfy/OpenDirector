import n from "./module-A_12.js";
import o from "./module-r9_11.js";
import forced from "./module-hP_12.js";
import a from "./module-vo_11.js";
import s from "./module-aq_11.js";
import { f } from "./module-t_12.js";
if (o) {
  n(
    {
      target: "Object",
      proto: true,
      forced,
    },
    {
      __defineSetter__: function (r, t) {
        f(s(this), r, {
          set: a(t),
          enumerable: true,
          configurable: true,
        });
      },
    },
  );
}
