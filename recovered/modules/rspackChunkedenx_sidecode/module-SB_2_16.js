import n from "./module-A_17.js";
import _o from "./module-yk_16.js";
import i from "./module-mS_17.js";
const _o_findLast = _o.findLast;
n(
  {
    target: "Array",
    proto: true,
  },
  {
    findLast: function (t) {
      return _o_findLast(
        this,
        t,
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
i("findLast");
