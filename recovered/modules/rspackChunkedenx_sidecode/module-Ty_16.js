import n from "./module-A_17.js";
import o from "./module-NI_16.js";
if (typeof BigInt === "function") {
  n(
    {
      target: "BigInt",
      stat: true,
      forced: true,
    },
    {
      range: function (t, r, e) {
        return new o(t, r, e, "bigint", BigInt(0), BigInt(1));
      },
    },
  );
}
