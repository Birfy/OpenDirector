import n from "./module-A_7.js";
import _o from "./module-g_7.js";
import a from "./module-X_7.js";
import i from "./module-mS_7.js";
const _o_includes = _o.includes;
n(
  {
    target: "Array",
    proto: true,
    forced: a(function () {
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
i("includes");
