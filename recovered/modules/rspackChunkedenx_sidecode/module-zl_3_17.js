import n from "./module-A_18.js";
import o from "./module-hu_17.js";
n(
  {
    target: "Object",
    stat: true,
    forced: true,
  },
  {
    iterateValues: function (r) {
      return new o(r, "values");
    },
  },
);
