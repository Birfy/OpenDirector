import n from "./module-A_23.js";
import i from "./module-O9_22.js";
import o from "./module-l0_22.js";
import s from "./module-vj_23.js";
import a from "./module-ng_23.js";
import u from "./module-Aj_23.js";
const c = i("".indexOf);
n(
  {
    target: "String",
    proto: true,
    forced: !u("includes"),
  },
  {
    includes: function (t) {
      return !!~c(
        a(s(this)),
        a(o(t)),
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
