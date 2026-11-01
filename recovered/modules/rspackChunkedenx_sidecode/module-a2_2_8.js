import n from "./module-A_9.js";
import i from "./module-hu_8.js";
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
