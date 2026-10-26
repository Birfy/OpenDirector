import n from "./module-A_11.js";
import _o from "./module-yk_10.js";
import i from "./module-mS_11.js";
const _o_findLastIndex = _o.findLastIndex;
n(
  {
    target: "Array",
    proto: true,
  },
  {
    findLastIndex: function (t) {
      return _o_findLastIndex(
        this,
        t,
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
i("findLastIndex");
