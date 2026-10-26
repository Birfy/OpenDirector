import n from "./module-A_18.js";
import _o from "./module-JY_17.js";
import i from "./module-mS_18.js";
const _o_filterReject = _o.filterReject;
n(
  {
    target: "Array",
    proto: true,
    forced: true,
  },
  {
    filterReject: function (r) {
      return _o_filterReject(
        this,
        r,
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
i("filterReject");
