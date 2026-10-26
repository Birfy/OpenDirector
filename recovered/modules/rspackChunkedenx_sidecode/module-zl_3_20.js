import n from "./module-A_21.js";
import o from "./module-hu_20.js";
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
