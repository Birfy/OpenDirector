import n from "./module-A_22.js";
import isSubsetOf from "./module-Of_21.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_21.js")("isSubsetOf"),
  },
  {
    isSubsetOf,
  },
);
