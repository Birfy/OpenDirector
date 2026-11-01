import n from "./module-A_3.js";
import i from "./module-hu_2.js";
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
