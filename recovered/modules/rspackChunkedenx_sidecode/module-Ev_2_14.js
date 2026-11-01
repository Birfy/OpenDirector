import n from "./module-A_15.js";
import o from "./module-jeu_14.js";
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
