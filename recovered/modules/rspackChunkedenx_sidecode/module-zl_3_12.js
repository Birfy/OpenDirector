import $ from "./module-A_13.js";
import tt from "./module-hu_12.js";
$(
  {
    target: "Object",
    stat: true,
    forced: true,
  },
  {
    iterateValues: function (J) {
      return new tt(J, "values");
    },
  },
);
