import n from "./module-A_15.js";
import isSubsetOf from "./module-Of_14.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_14.js")("isSubsetOf"),
  },
  {
    isSubsetOf,
  },
);
