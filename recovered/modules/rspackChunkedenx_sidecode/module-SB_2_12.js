import $ from "./module-A_13.js";
import _tt from "./module-yk_12.js";
import te from "./module-mS_13.js";
const _tt_findLast = _tt.findLast;
$(
  {
    target: "Array",
    proto: true,
  },
  {
    findLast: function (J) {
      return _tt_findLast(
        this,
        J,
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
te("findLast");
