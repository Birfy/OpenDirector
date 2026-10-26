import n from "./module-A_22.js";
import _i from "./module-g_22.js";
import o from "./module-X_22.js";
import s from "./module-mS_22.js";
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
