import n from "./module-A_3.js";
import _i from "./module-g_3.js";
import o from "./module-X_3.js";
import s from "./module-mS_3.js";
const _i_includes = _i.includes;
n(
  {
    target: "Array",
    proto: true,
    forced: o(function () {
      return ![,].includes();
    }),
  },
  {
    includes: function (t) {
      return _i_includes(
        this,
        t,
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
s("includes");
