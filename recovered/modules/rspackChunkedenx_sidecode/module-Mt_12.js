import $ from "./module-A_13.js";
import _tt from "./module-g_13.js";
import te from "./module-X_13.js";
import tr from "./module-mS_13.js";
const _tt_includes = _tt.includes;
$(
  {
    target: "Array",
    proto: true,
    forced: te(function () {
      return ![,].includes();
    }),
  },
  {
    includes: function (J) {
      return _tt_includes(
        this,
        J,
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
tr("includes");
