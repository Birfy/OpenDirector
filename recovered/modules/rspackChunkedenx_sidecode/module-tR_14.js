import n from "./module-A_15.js";
import o from "./module-O9_14.js";
import i from "./module-l0_14.js";
import a from "./module-vj_15.js";
import s from "./module-ng_15.js";
import c from "./module-Aj_15.js";
const u = o("".indexOf);
n(
  {
    target: "String",
    proto: true,
    forced: !c("includes"),
  },
  {
    includes: function (t) {
      return !!~u(
        s(a(this)),
        s(i(t)),
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
