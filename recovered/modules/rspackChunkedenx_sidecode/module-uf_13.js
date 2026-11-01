import n from "./module-A_14.js";
import _o from "./module-yk_13.js";
import i from "./module-mS_14.js";
const _o_findLastIndex = _o.findLastIndex;
n(
  {
    target: "Array",
    proto: true,
  },
  {
    findLastIndex: function (r) {
      return _o_findLastIndex(
        this,
        r,
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
i("findLastIndex");
