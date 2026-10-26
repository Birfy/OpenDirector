import $ from "./module-A_13.js";
import tt from "./module-jeu_12.js";
if (tt) {
  $(
    {
      target: "ArrayBuffer",
      proto: true,
    },
    {
      transferToFixedLength: function () {
        return tt(this, arguments.length ? arguments[0] : undefined, false);
      },
    },
  );
}
