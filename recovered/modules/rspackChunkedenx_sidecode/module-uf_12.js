import $ from "./module-A_13.js";
import _tt from "./module-yk_12.js";
import te from "./module-mS_13.js";
const _tt_findLastIndex = _tt.findLastIndex;
$(
  {
    target: "Array",
    proto: true,
  },
  {
    findLastIndex: function (J) {
      return _tt_findLastIndex(
        this,
        J,
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
te("findLastIndex");
