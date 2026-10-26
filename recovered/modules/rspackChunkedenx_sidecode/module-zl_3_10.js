import n from "./module-A_11.js";
import o from "./module-hu_10.js";
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
