import n from "./module-A_8.js";
import symmetricDifference from "./module-sy_7.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_7.js")("symmetricDifference"),
  },
  {
    symmetricDifference,
  },
);
