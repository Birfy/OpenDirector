import n from "./module-A.js";
import symmetricDifference from "./module-sy.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5.js")("symmetricDifference"),
  },
  {
    symmetricDifference,
  },
);
