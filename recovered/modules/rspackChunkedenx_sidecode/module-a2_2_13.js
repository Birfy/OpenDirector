import n from "./module-A_14.js";
import o from "./module-hu_13.js";
n(
  {
    target: "Object",
    stat: true,
    forced: true,
  },
  {
    iterateKeys: function (r) {
      return new o(r, "keys");
    },
  },
);
