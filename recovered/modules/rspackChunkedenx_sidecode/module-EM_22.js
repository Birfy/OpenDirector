import n from "./module-A_23.js";
import i from "./module-An_23.js";
import o from "./module-YR_22.js";
import s from "./module-Xy_2_22.js";
n(
  {
    global: true,
    forced: true,
  },
  {
    compositeSymbol: function () {
      if (arguments.length == 1 && typeof arguments[0] === "string") {
        return o("Symbol").for(arguments[0]);
      }
      return s(i, null, arguments).get("symbol", o("Symbol"));
    },
  },
);
