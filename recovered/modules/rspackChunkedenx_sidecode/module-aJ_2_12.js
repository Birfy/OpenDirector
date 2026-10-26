import $ from "./module-A_13.js";
import _tt from "./module-Xc_12.js";
import te from "./module-bYn_12.js";
import tr from "./module-G_2_12.js";
const _tt_right = _tt.right;
$(
  {
    target: "Array",
    proto: true,
    forced:
      (!require("./module-p2_12.js") && tr > 79 && tr < 83) ||
      !te("reduceRight"),
  },
  {
    reduceRight: function (J) {
      return _tt_right(
        this,
        J,
        arguments.length,
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
