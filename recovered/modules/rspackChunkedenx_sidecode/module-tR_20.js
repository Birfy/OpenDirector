import n from "./module-A_21.js";
import o from "./module-O9_20.js";
import i from "./module-l0_20.js";
import a from "./module-vj_21.js";
import s from "./module-ng_21.js";
import c from "./module-Aj_21.js";
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
