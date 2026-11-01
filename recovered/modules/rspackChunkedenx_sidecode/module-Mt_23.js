import n from "./module-A_24.js";
import _o from "./module-g_24.js";
import i from "./module-X_24.js";
import a from "./module-mS_24.js";
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
