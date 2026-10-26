import n from "./module-A_4.js";
import isSubsetOf from "./module-Of_3.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_3.js")("isSubsetOf"),
  },
  {
    isSubsetOf,
  },
);
