import n from "./module-A_14.js";
import o from "./module-hu_13.js";
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
