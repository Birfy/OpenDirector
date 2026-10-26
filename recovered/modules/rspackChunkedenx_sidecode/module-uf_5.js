import n from "./module-A_6.js";
import _i from "./module-yk_5.js";
import o from "./module-mS_6.js";
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
