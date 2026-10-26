import n from "./module-A_5.js";
import i from "./module-hu_4.js";
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
