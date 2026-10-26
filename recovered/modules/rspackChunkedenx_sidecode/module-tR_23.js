import n from "./module-A_24.js";
import o from "./module-O9_23.js";
import i from "./module-l0_23.js";
import a from "./module-vj_24.js";
import s from "./module-ng_24.js";
import c from "./module-Aj_24.js";
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
