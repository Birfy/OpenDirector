import n from "./module-A_6.js";
import _i from "./module-JY_5.js";
import o from "./module-mS_6.js";
const _i_filterReject = _i.filterReject;
n(
  {
    target: "Array",
    proto: true,
    forced: true,
  },
  {
    filterOut: function (t) {
      return _i_filterReject(
        this,
        t,
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
o("filterOut");
