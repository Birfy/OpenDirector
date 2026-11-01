import n from "./module-A_19.js";
import _o from "./module-yk_18.js";
import i from "./module-mS_19.js";
const _o_findLast = _o.findLast;
n(
  {
    target: "Array",
    proto: true,
  },
  {
    findLast: function (r) {
      return _o_findLast(
        this,
        r,
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
i("findLast");
