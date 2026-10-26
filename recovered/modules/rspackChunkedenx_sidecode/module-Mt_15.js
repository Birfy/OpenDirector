import n from "./module-A_16.js";
import _o from "./module-g_16.js";
import i from "./module-X_16.js";
import a from "./module-mS_16.js";
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
    includes: function (r) {
      return _o_includes(
        this,
        r,
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
a("includes");
