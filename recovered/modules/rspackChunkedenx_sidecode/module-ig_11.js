import n from "./module-A_12.js";
import o from "./module-hu_11.js";
n(
  {
    target: "Object",
    stat: true,
    forced: true,
  },
  {
    iterateEntries: function (r) {
      return new o(r, "entries");
    },
  },
);
