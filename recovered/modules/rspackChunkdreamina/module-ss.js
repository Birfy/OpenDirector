import n from "./module-g.js";
import _o from "./module-bM.js";
import i from "./module-ms.js";
import a from "./module-z_2.js";
const _o_left = _o.left;
n(
  {
    target: "Array",
    proto: true,
    forced: (!require("./module-fd_4.js") && a > 79 && a < 83) || !i("reduce"),
  },
  {
    reduce: function (e) {
      const arguments_length = arguments.length;
      return _o_left(
        this,
        e,
        arguments_length,
        arguments_length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
