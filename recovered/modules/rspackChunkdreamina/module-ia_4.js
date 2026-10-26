import n from "./module-g.js";
import o from "./module-F.js";
import forced from "./module-iR_3.js";
import a from "./module-B.js";
import s from "./module-O_2.js";
import { f } from "./module-R_2.js";
if (o) {
  n(
    {
      target: "Object",
      proto: true,
      forced,
    },
    {
      __defineGetter__: function (e, t) {
        f(s(this), e, {
          get: a(t),
          enumerable: true,
          configurable: true,
        });
      },
    },
  );
}
