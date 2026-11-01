import $ from "./module-A_13.js";
import symmetricDifference from "./module-sy_12.js";
$(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_12.js")("symmetricDifference"),
  },
  {
    symmetricDifference,
  },
);
