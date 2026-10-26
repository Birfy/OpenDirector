import n from "./module-A_11.js";
import _o from "./module-g_11.js";
import i from "./module-X_11.js";
import a from "./module-mS_11.js";
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
