import n from "g";
import i from "Vw";
import a from "Y";
import o from "l";
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
      return o(i, null, arguments).get("symbol", a("Symbol"));
    },
  },
);
