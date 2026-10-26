import $ from "./module-A_13.js";
import tt from "./module-NI_12.js";
if (typeof BigInt === "function") {
  $(
    {
      target: "BigInt",
      stat: true,
      forced: true,
    },
    {
      range: function (J, Z, Q) {
        return new tt(J, Z, Q, "bigint", BigInt(0), BigInt(1));
      },
    },
  );
}
