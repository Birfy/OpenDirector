import n from "./module-A_6.js";
import i from "./module-jeu_5.js";
if (i) {
  n(
    {
      target: "ArrayBuffer",
      proto: true,
    },
    {
      transfer: function () {
        return i(this, arguments.length ? arguments[0] : undefined, true);
      },
    },
  );
}
