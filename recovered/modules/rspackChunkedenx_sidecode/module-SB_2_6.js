import n from "./module-A_7.js";
import _o from "./module-yk_6.js";
import a from "./module-mS_7.js";
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
a("findLast");
