import n from "./module-A_23.js";
import i from "./module-NI_22.js";
if (typeof BigInt === "function") {
  n(
    {
      target: "BigInt",
      stat: true,
      forced: true,
    },
    {
      range: function (t, r, e) {
        return new i(t, r, e, "bigint", BigInt(0), BigInt(1));
      },
    },
  );
}
