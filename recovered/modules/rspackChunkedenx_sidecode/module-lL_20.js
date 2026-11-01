import n from "./module-A_20.js";
import o from "./module-jeu_19.js";
if (o) {
  n(
    {
      target: "ArrayBuffer",
      proto: true,
    },
    {
      transferToFixedLength: function () {
        return o(this, arguments.length ? arguments[0] : undefined, false);
      },
    },
  );
}
