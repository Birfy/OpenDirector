import n from "./module-A_15.js";
import symmetricDifference from "./module-sy_14.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_14.js")("symmetricDifference"),
  },
  {
    symmetricDifference,
  },
);
