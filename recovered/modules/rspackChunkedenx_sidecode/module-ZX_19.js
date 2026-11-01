import n from "./module-A_20.js";
import o from "./module-NI_19.js";
n(
  {
    target: "Iterator",
    stat: true,
    forced: true,
  },
  {
    range: function (r, t, e) {
      if (typeof r === "number") {
        return new o(r, t, e, "number", 0, 1);
      }
      if (typeof r === "bigint") {
        return new o(r, t, e, "bigint", BigInt(0), BigInt(1));
      }
      throw TypeError("Incorrect Iterator.range arguments");
    },
  },
);
