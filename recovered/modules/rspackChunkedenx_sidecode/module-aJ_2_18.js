import n from "./module-A_19.js";
import _o from "./module-Xc_18.js";
import i from "./module-bYn_18.js";
import a from "./module-G_2_18.js";
const _o_right = _o.right;
n(
  {
    target: "Array",
    proto: true,
    forced:
      (!require("./module-p2_18.js") && a > 79 && a < 83) || !i("reduceRight"),
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
