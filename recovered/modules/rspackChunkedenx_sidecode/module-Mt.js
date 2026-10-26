import n from "./module-A.js";
import _o from "./module-g.js";
import i from "./module-X.js";
import a from "./module-mS.js";
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
