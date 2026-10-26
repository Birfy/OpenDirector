import n from "./module-A_12.js";
import _o from "./module-Xc_11.js";
import i from "./module-bYn_11.js";
import a from "./module-G_2_11.js";
const _o_right = _o.right;
n(
  {
    target: "Array",
    proto: true,
    forced:
      (!require("./module-p2_11.js") && a > 79 && a < 83) || !i("reduceRight"),
  },
  {
    reduceRight: function (r) {
      return _o_right(
        this,
        r,
        arguments.length,
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
