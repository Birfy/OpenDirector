import n from "./module-A_5.js";
import i from "./module-An_5.js";
import o from "./module-YR_4.js";
import s from "./module-Xy_2_4.js";
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
