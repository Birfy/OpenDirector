import n from "./module-A_4.js";
import _i from "./module-yk_3.js";
import o from "./module-mS_4.js";
const _i_findLastIndex = _i.findLastIndex;
n(
  {
    target: "Array",
    proto: true,
  },
  {
    findLastIndex: function (t) {
      return _i_findLastIndex(
        this,
        t,
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
o("findLastIndex");
