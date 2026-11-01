import $ from "./module-A_13.js";
import tt from "./module-NI_12.js";
$(
  {
    target: "Iterator",
    stat: true,
    forced: true,
  },
  {
    range: function (J, Z, Q) {
      if (typeof J === "number") {
        return new tt(J, Z, Q, "number", 0, 1);
      }
      if (typeof J === "bigint") {
        return new tt(J, Z, Q, "bigint", BigInt(0), BigInt(1));
      }
      throw TypeError("Incorrect Iterator.range arguments");
    },
  },
);
