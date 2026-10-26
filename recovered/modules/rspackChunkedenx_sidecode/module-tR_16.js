import n from "./module-A_17.js";
import o from "./module-O9_16.js";
import i from "./module-l0_16.js";
import a from "./module-vj_17.js";
import s from "./module-ng_17.js";
import u from "./module-Aj_17.js";
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
