import n from "./module-A_9.js";
import symmetricDifference from "./module-sy_8.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_8.js")("symmetricDifference"),
  },
  {
    symmetricDifference,
  },
);
