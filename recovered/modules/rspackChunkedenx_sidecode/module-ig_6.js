import n from "./module-A_7.js";
import o from "./module-hu_6.js";
n(
  {
    target: "Object",
    stat: true,
    forced: true,
  },
  {
    iterateEntries: function (t) {
      return new o(t, "entries");
    },
  },
);
