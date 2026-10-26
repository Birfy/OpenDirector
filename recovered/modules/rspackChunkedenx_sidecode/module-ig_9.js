import n from "./module-A_10.js";
import o from "./module-hu_9.js";
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
