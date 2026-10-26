import n from "./module-A_6.js";
import _i from "./module-g_6.js";
import o from "./module-X_6.js";
import s from "./module-mS_6.js";
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
