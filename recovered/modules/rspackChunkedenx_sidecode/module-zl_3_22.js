import n from "./module-A_23.js";
import i from "./module-hu_22.js";
n(
  {
    target: "Object",
    stat: true,
    forced: true,
  },
  {
    iterateValues: function (t) {
      return new i(t, "values");
    },
  },
);
