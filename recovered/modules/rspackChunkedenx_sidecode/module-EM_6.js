import n from "./module-A_7.js";
import o from "./module-An_7.js";
import a from "./module-YR_6.js";
import i from "./module-Xy_2_6.js";
n(
  {
    global: true,
    forced: true,
  },
  {
    compositeSymbol: function () {
      if (arguments.length == 1 && typeof arguments[0] === "string") {
        return a("Symbol").for(arguments[0]);
      }
      return i(o, null, arguments).get("symbol", a("Symbol"));
    },
  },
);
