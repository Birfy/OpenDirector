import n from "./module-A_21.js";
import isSubsetOf from "./module-Of_20.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_20.js")("isSubsetOf"),
  },
  {
    isSubsetOf,
  },
);
