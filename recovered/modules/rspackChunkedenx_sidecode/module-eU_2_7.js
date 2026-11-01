import n from "./module-A_8.js";
import isSubsetOf from "./module-Of_7.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_7.js")("isSubsetOf"),
  },
  {
    isSubsetOf,
  },
);
