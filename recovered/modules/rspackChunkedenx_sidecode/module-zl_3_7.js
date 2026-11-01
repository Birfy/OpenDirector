import n from "./module-A_8.js";
import o from "./module-hu_7.js";
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
