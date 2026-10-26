import n from "./module-A_22.js";
import i from "./module-jeu_21.js";
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
