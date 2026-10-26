import n from "./module-A_14.js";
import o from "./module-O9_13.js";
import i from "./module-l0_13.js";
import a from "./module-vj_14.js";
import s from "./module-ng_14.js";
import u from "./module-Aj_14.js";
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
