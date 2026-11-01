import n from "./module-A_10.js";
import o from "./module-O9_9.js";
import i from "./module-l0_9.js";
import a from "./module-vj_10.js";
import s from "./module-ng_10.js";
import u from "./module-Aj_10.js";
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
