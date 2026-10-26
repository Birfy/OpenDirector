import n from "./module-A_20.js";
import symmetricDifference from "./module-sy_19.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_19.js")("symmetricDifference"),
  },
  {
    symmetricDifference,
  },
);
