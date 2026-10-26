import n from "./module-g.js";
import _o from "./module-BH_3.js";
import i from "./module-Yz_2.js";
const _o_findLastIndex = _o.findLastIndex;
n(
  {
    target: "Array",
    proto: true,
  },
  {
    findLastIndex: function (e) {
      return _o_findLastIndex(
        this,
        e,
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
i("findLastIndex");
