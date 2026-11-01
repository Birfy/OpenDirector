import n from "./module-A_4.js";
import i from "./module-O9_3.js";
import o from "./module-l0_3.js";
import s from "./module-vj_4.js";
import a from "./module-ng_4.js";
import u from "./module-Aj_4.js";
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
