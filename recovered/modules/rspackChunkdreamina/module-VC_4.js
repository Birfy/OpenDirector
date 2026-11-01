import n from "./module-g.js";
import _o from "./module-BH_3.js";
import i from "./module-Yz_2.js";
const _o_findLast = _o.findLast;
n(
  {
    target: "Array",
    proto: true,
  },
  {
    findLast: function (e) {
      return _o_findLast(
        this,
        e,
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
i("findLast");
