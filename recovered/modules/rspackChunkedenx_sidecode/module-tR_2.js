import n from "./module-A_3.js";
import i from "./module-O9_2.js";
import o from "./module-l0_2.js";
import s from "./module-vj_3.js";
import a from "./module-ng_3.js";
import u from "./module-Aj_3.js";
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
