import n from "./module-A.js";
import o from "./module-r9.js";
import forced from "./module-hP.js";
import a from "./module-vo.js";
import s from "./module-aq.js";
import { f } from "./module-t.js";
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
