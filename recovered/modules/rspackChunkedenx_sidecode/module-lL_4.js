import n from "./module-A_4.js";
import i from "./module-jeu_3.js";
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
