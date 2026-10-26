import n from "./module-A.js";
import _o from "./module-yk.js";
import i from "./module-mS.js";
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
