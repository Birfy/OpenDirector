import n from "./module-A.js";
import o from "./module-hu.js";
n(
  {
    target: "Object",
    stat: true,
    forced: true,
  },
  {
    iterateValues: function (t) {
      return new o(t, "values");
    },
  },
);
