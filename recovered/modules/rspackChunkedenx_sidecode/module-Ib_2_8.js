import n from "./module-A_9.js";
import _i from "./module-JY_8.js";
import o from "./module-mS_9.js";
const _i_filterReject = _i.filterReject;
n(
  {
    target: "Array",
    proto: true,
    forced: true,
  },
  {
    filterReject: function (t) {
      return _i_filterReject(
        this,
        t,
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
o("filterReject");
