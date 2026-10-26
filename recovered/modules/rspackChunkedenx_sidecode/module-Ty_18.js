import n from "./module-A_19.js";
import o from "./module-NI_18.js";
if (typeof BigInt === "function") {
  n(
    {
      target: "BigInt",
      stat: true,
      forced: true,
    },
    {
      range: function (r, t, e) {
        return new o(r, t, e, "bigint", BigInt(0), BigInt(1));
      },
    },
  );
}
