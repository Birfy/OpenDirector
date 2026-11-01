import n from "g";
import i from "PF";
n(
  {
    target: "Iterator",
    stat: true,
    forced: true,
  },
  {
    range: function (t, e, r) {
      if (typeof t === "number") {
        return new i(t, e, r, "number", 0, 1);
      }
      if (typeof t === "bigint") {
        return new i(t, e, r, "bigint", BigInt(0), BigInt(1));
      }
      throw TypeError("Incorrect Iterator.range arguments");
    },
  },
);
