import n from "./module-A_21.js";
import _o from "./module-g_21.js";
import i from "./module-X_21.js";
import a from "./module-mS_21.js";
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
