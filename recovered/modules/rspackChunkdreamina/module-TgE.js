import n from "g";
import i from "PF";
if (typeof BigInt === "function") {
  n(
    {
      target: "BigInt",
      stat: true,
      forced: true,
    },
    {
      range: function (t, e, r) {
        return new i(t, e, r, "bigint", BigInt(0), BigInt(1));
      },
    },
  );
}
