import n from "./module-A_17.js";
import _o from "./module-Xc_16.js";
import i from "./module-bYn_16.js";
import a from "./module-G_2_16.js";
const _o_right = _o.right;
n(
  {
    target: "Array",
    proto: true,
    forced:
      (!require("./module-p2_16.js") && a > 79 && a < 83) || !i("reduceRight"),
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
