import n from "./module-A_19.js";
import o from "./module-hu_18.js";
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
