import n from "./module-A_16.js";
import isSubsetOf from "./module-Of_15.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_15.js")("isSubsetOf"),
  },
  {
    isSubsetOf,
  },
);
