import n from "./module-A_9.js";
import i from "./module-O9_8.js";
import o from "./module-l0_8.js";
import s from "./module-vj_9.js";
import a from "./module-ng_9.js";
import u from "./module-Aj_9.js";
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
