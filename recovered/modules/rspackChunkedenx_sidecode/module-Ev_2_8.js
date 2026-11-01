import n from "./module-A_9.js";
import i from "./module-jeu_8.js";
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
