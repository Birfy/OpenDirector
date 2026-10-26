import n from "./module-A_3.js";
import symmetricDifference from "./module-sy_2.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_2.js")("symmetricDifference"),
  },
  {
    symmetricDifference,
  },
);
