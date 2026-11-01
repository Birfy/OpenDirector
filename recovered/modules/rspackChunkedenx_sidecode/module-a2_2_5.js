import n from "./module-A_6.js";
import i from "./module-hu_5.js";
n(
  {
    target: "Object",
    stat: true,
    forced: true,
  },
  {
    iterateKeys: function (t) {
      return new i(t, "keys");
    },
  },
);
