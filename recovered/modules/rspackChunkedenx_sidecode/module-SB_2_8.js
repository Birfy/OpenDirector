import n from "./module-A_9.js";
import _i from "./module-yk_8.js";
import o from "./module-mS_9.js";
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
