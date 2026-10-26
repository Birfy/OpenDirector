import n from "./module-A_8.js";
import _o from "./module-g_8.js";
import i from "./module-X_8.js";
import a from "./module-mS_8.js";
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
