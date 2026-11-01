import n from "./module-A_24.js";
import o from "./module-jeu_23.js";
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
