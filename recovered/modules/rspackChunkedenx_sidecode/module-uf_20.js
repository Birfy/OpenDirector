import n from "./module-A_21.js";
import _o from "./module-yk_20.js";
import i from "./module-mS_21.js";
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
