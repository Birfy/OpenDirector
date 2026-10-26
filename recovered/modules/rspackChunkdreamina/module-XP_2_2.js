import n from "./module-g.js";
import _o from "./module-bM.js";
import i from "./module-ms.js";
import a from "./module-z_2.js";
const _o_right = _o.right;
n(
  {
    target: "Array",
    proto: true,
    forced:
      (!require("./module-fd_4.js") && a > 79 && a < 83) || !i("reduceRight"),
  },
  {
    reduceRight: function (e) {
      return _o_right(
        this,
        e,
        arguments.length,
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
