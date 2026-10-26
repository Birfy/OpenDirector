import $ from "./module-A_13.js";
import tt from "./module-An_13.js";
import te from "./module-YR_12.js";
import tr from "./module-Xy_3_2.js";
$(
  {
    global: true,
    forced: true,
  },
  {
    compositeSymbol: function () {
      if (arguments.length == 1 && typeof arguments[0] === "string") {
        return te("Symbol").for(arguments[0]);
      }
      return tr(tt, null, arguments).get("symbol", te("Symbol"));
    },
  },
);
