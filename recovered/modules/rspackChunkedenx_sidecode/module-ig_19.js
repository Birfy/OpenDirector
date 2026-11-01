import n from "./module-A_20.js";
import o from "./module-hu_19.js";
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
