import n from "./module-A_22.js";
import i from "./module-hu_21.js";
n(
  {
    target: "Object",
    stat: true,
    forced: true,
  },
  {
    iterateEntries: function (t) {
      return new i(t, "entries");
    },
  },
);
