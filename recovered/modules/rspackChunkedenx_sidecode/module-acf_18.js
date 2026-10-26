import n from "./module-A_19.js";
import o from "./module-r9_18.js";
import forced from "./module-hP_19.js";
import a from "./module-vo_18.js";
import s from "./module-aq_18.js";
import { f } from "./module-t_19.js";
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
