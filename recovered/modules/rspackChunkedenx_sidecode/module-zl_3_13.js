import n from "./module-A_14.js";
import o from "./module-hu_13.js";
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
