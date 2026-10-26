import n from "./module-A_7.js";
import _o from "./module-Xc_6.js";
import a from "./module-bYn_6.js";
import i from "./module-G_2_6.js";
const _o_right = _o.right;
n(
  {
    target: "Array",
    proto: true,
    forced:
      (!require("./module-p2_6.js") && i > 79 && i < 83) || !a("reduceRight"),
  },
  {
    reduceRight: function (t) {
      return _o_right(
        this,
        t,
        arguments.length,
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
