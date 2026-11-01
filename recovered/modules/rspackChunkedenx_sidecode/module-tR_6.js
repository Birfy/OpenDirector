import n from "./module-A_7.js";
import o from "./module-O9_6.js";
import a from "./module-l0_6.js";
import i from "./module-vj_7.js";
import s from "./module-ng_7.js";
import c from "./module-Aj_7.js";
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
        s(i(this)),
        s(a(t)),
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
