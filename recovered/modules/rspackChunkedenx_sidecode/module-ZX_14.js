import n from "./module-A_15.js";
import o from "./module-NI_14.js";
n(
  {
    target: "Iterator",
    stat: true,
    forced: true,
  },
  {
    range: function (t, r, e) {
      if (typeof t === "number") {
        return new o(t, r, e, "number", 0, 1);
      }
      if (typeof t === "bigint") {
        return new o(t, r, e, "bigint", BigInt(0), BigInt(1));
      }
      throw TypeError("Incorrect Iterator.range arguments");
    },
  },
);
