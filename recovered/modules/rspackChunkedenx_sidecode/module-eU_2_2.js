import n from "./module-A_3.js";
import isSubsetOf from "./module-Of_2.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_2.js")("isSubsetOf"),
  },
  {
    isSubsetOf,
  },
);
