import n from "./module-A_7.js";
import symmetricDifference from "./module-sy_6.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_6.js")("symmetricDifference"),
  },
  {
    symmetricDifference,
  },
);
