import n from "./module-A_12.js";
import o from "./module-hu_11.js";
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
