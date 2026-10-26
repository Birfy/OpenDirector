import n from "./module-A_20.js";
import o from "./module-r9_19.js";
import forced from "./module-hP_20.js";
import a from "./module-vo_19.js";
import s from "./module-aq_19.js";
import { f } from "./module-t_20.js";
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
