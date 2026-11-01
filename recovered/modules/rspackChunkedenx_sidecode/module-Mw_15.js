import n from "./module-A_16.js";
import _o from "./module-JY_15.js";
import i from "./module-mS_16.js";
const _o_filterReject = _o.filterReject;
n(
  {
    target: "Array",
    proto: true,
    forced: true,
  },
  {
    filterOut: function (r) {
      return _o_filterReject(
        this,
        r,
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
i("filterOut");
