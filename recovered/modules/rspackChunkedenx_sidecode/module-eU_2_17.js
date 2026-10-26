import n from "./module-A_18.js";
import isSubsetOf from "./module-Of_17.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_17.js")("isSubsetOf"),
  },
  {
    isSubsetOf,
  },
);
