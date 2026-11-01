import n from "./module-A_23.js";
import isSubsetOf from "./module-Of_22.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_22.js")("isSubsetOf"),
  },
  {
    isSubsetOf,
  },
);
