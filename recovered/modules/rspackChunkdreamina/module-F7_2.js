import n from "./module-g.js";
import _o from "./module-TT_2.js";
import i from "./module-VV_4.js";
import a from "./module-Yz_2.js";
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
    includes: function (e) {
      return _o_includes(
        this,
        e,
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
a("includes");
