import n from "./module-A_4.js";
import i from "./module-hu_3.js";
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
