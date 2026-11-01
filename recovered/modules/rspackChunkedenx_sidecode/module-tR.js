import n from "./module-A.js";
import o from "./module-O9.js";
import i from "./module-l0.js";
import a from "./module-vj.js";
import s from "./module-ng.js";
import u from "./module-Aj.js";
const c = o("".indexOf);
n(
  {
    target: "String",
    proto: true,
    forced: !u("includes"),
  },
  {
    includes: function (t) {
      return !!~c(
        s(a(this)),
        s(i(t)),
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
