import n from "./module-A_10.js";
import o from "./module-NI_9.js";
n(
  {
    target: "Iterator",
    stat: true,
    forced: true,
  },
  {
    range: function (t, e, r) {
      if (typeof t === "number") {
        return new o(t, e, r, "number", 0, 1);
      }
      if (typeof t === "bigint") {
        return new o(t, e, r, "bigint", BigInt(0), BigInt(1));
      }
      throw TypeError("Incorrect Iterator.range arguments");
    },
  },
);
