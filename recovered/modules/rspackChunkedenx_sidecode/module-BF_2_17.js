import n from "./module-A_18.js";
import symmetricDifference from "./module-sy_17.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_17.js")("symmetricDifference"),
  },
  {
    symmetricDifference,
  },
);
