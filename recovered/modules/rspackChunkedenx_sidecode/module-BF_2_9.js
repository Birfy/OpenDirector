import n from "./module-A_10.js";
import symmetricDifference from "./module-sy_9.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_9.js")("symmetricDifference"),
  },
  {
    symmetricDifference,
  },
);
