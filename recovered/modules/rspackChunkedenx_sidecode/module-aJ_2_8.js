import n from "./module-A_9.js";
import _i from "./module-Xc_8.js";
import o from "./module-bYn_8.js";
import s from "./module-G_2_8.js";
const _i_right = _i.right;
n(
  {
    target: "Array",
    proto: true,
    forced:
      (!require("./module-p2_8.js") && s > 79 && s < 83) || !o("reduceRight"),
  },
  {
    reduceRight: function (t) {
      return _i_right(
        this,
        t,
        arguments.length,
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
