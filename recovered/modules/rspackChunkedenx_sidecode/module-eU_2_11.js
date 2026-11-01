import n from "./module-A_12.js";
import isSubsetOf from "./module-Of_11.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_11.js")("isSubsetOf"),
  },
  {
    isSubsetOf,
  },
);
