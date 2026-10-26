import n from "./module-A_8.js";
import o from "./module-An_8.js";
import i from "./module-YR_7.js";
import a from "./module-Xy_2_7.js";
n(
  {
    global: true,
    forced: true,
  },
  {
    compositeSymbol: function () {
      if (arguments.length == 1 && typeof arguments[0] === "string") {
        return i("Symbol").for(arguments[0]);
      }
      return a(o, null, arguments).get("symbol", i("Symbol"));
    },
  },
);
