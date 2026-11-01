import n from "./module-A_10.js";
import o from "./module-NI_9.js";
if (typeof BigInt === "function") {
  n(
    {
      target: "BigInt",
      stat: true,
      forced: true,
    },
    {
      range: function (t, e, r) {
        return new o(t, e, r, "bigint", BigInt(0), BigInt(1));
      },
    },
  );
}
