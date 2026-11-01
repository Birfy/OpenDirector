import n from "./module-A_5.js";
import _i from "./module-yk_4.js";
import o from "./module-mS_5.js";
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
