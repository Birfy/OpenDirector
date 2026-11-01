import n from "./module-A_12.js";
import o from "./module-O9_11.js";
import i from "./module-l0_11.js";
import a from "./module-vj_12.js";
import s from "./module-ng_12.js";
import u from "./module-Aj_12.js";
const c = o("".indexOf);
n(
  {
    target: "String",
    proto: true,
    forced: !u("includes"),
  },
  {
    includes: function (r) {
      return !!~c(
        s(a(this)),
        s(i(r)),
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
