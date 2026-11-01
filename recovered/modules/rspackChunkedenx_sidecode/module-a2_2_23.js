import n from "./module-A_24.js";
import o from "./module-hu_23.js";
n(
  {
    target: "Object",
    stat: true,
    forced: true,
  },
  {
    iterateKeys: function (t) {
      return new o(t, "keys");
    },
  },
);
