import n from "./module-A_8.js";
import o from "./module-r9_7.js";
import forced from "./module-hP_8.js";
import a from "./module-vo_7.js";
import s from "./module-aq_7.js";
import { f } from "./module-t_8.js";
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
