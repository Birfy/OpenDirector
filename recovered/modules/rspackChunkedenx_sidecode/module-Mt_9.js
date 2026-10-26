import n from "./module-A_10.js";
import _o from "./module-g_10.js";
import i from "./module-X_10.js";
import a from "./module-mS_10.js";
const _o_includes = _o.includes;
n(
  {
    target: "Array",
    proto: true,
    forced: i(function () {
      return ![,].includes();
    }),
  },
  {
    includes: function (t) {
      return _o_includes(
        this,
        t,
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
a("includes");
