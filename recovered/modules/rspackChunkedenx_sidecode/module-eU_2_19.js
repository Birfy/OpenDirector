import n from "./module-A_20.js";
import isSubsetOf from "./module-Of_19.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_19.js")("isSubsetOf"),
  },
  {
    isSubsetOf,
  },
);
