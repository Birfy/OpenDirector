import n from "./module-A_16.js";
import o from "./module-hu_15.js";
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
