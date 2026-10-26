import n from "./module-g.js";
import o from "./module-o.js";
import i from "./module-xt_2_2.js";
import a from "./module-H_2.js";
import s from "./module-BC_2.js";
import u from "./module-RG_2_2.js";
const c = o("".indexOf);
n(
  {
    target: "String",
    proto: true,
    forced: !u("includes"),
  },
  {
    includes: function (e) {
      return !!~c(
        s(a(this)),
        s(i(e)),
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
