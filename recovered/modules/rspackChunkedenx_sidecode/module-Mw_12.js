import $ from "./module-A_13.js";
import _tt from "./module-JY_12.js";
import te from "./module-mS_13.js";
const _tt_filterReject = _tt.filterReject;
$(
  {
    target: "Array",
    proto: true,
    forced: true,
  },
  {
    filterOut: function (J) {
      return _tt_filterReject(
        this,
        J,
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
te("filterOut");
