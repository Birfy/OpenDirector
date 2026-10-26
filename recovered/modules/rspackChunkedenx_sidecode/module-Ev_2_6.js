import n from "./module-A_7.js";
import o from "./module-jeu_6.js";
if (o) {
  n(
    {
      target: "ArrayBuffer",
      proto: true,
    },
    {
      transfer: function () {
        return o(this, arguments.length ? arguments[0] : undefined, true);
      },
    },
  );
}
