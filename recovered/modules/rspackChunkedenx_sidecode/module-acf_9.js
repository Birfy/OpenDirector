import n from "./module-A_10.js";
import o from "./module-r9_9.js";
import forced from "./module-hP_10.js";
import a from "./module-vo_9.js";
import s from "./module-aq_9.js";
import { f } from "./module-t_10.js";
if (o) {
  n(
    {
      target: "Object",
      proto: true,
      forced,
    },
    {
      __defineSetter__: function (t, e) {
        f(s(this), t, {
          set: a(e),
          enumerable: true,
          configurable: true,
        });
      },
    },
  );
}
