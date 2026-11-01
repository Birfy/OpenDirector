import n from "./module-A_6.js";
import _i from "./module-yk_5.js";
import o from "./module-mS_6.js";
const _i_findLast = _i.findLast;
n(
  {
    target: "Array",
    proto: true,
  },
  {
    findLast: function (t) {
      return _i_findLast(
        this,
        t,
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
o("findLast");
