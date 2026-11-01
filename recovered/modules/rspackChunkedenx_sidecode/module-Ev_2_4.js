import n from "./module-A_5.js";
import i from "./module-jeu_4.js";
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
