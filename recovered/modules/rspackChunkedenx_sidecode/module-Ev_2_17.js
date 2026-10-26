import n from "./module-A_18.js";
import o from "./module-jeu_17.js";
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
