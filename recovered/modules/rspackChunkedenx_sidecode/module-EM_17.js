import n from "./module-A_18.js";
import o from "./module-An_18.js";
import i from "./module-YR_17.js";
import a from "./module-Xy_2_17.js";
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
