import n from "./module-A_8.js";
import _o from "./module-JY_7.js";
import i from "./module-mS_8.js";
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
