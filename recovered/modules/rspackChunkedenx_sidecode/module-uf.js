import n from "./module-A.js";
import _o from "./module-yk.js";
import i from "./module-mS.js";
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
