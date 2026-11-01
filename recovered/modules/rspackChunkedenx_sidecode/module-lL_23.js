import n from "./module-A_23.js";
import i from "./module-jeu_22.js";
if (i) {
  n(
    {
      target: "ArrayBuffer",
      proto: true,
    },
    {
      transferToFixedLength: function () {
        return i(this, arguments.length ? arguments[0] : undefined, false);
      },
    },
  );
}
