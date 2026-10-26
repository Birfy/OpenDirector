import n from "./module-A_18.js";
import o from "./module-r9_17.js";
import forced from "./module-hP_18.js";
import a from "./module-vo_17.js";
import s from "./module-aq_17.js";
import { f } from "./module-t_18.js";
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
