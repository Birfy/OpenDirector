import n from "./module-A_9.js";
import i from "./module-NI_8.js";
n(
  {
    target: "Iterator",
    stat: true,
    forced: true,
  },
  {
    range: function (t, r, e) {
      if (typeof t === "number") {
        return new i(t, r, e, "number", 0, 1);
      }
      if (typeof t === "bigint") {
        return new i(t, r, e, "bigint", BigInt(0), BigInt(1));
      }
      throw TypeError("Incorrect Iterator.range arguments");
    },
  },
);
