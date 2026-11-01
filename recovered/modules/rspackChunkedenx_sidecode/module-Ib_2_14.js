import n from "./module-A_15.js";
import _o from "./module-JY_14.js";
import i from "./module-mS_15.js";
const _o_filterReject = _o.filterReject;
n(
  {
    target: "Array",
    proto: true,
    forced: true,
  },
  {
    filterReject: function (t) {
      return _o_filterReject(
        this,
        t,
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
i("filterReject");
