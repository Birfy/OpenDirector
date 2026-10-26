import n from "./module-A_17.js";
import isSubsetOf from "./module-Of_16.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_16.js")("isSubsetOf"),
  },
  {
    isSubsetOf,
  },
);
