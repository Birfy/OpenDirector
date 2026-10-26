import n from "./module-A.js";
import _o from "./module-JY.js";
import i from "./module-mS.js";
const _o_filterReject = _o.filterReject;
n(
  {
    target: "Array",
    proto: true,
    forced: true,
  },
  {
    filterOut: function (t) {
      return _o_filterReject(
        this,
        t,
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
i("filterOut");
