import n from "./module-A_5.js";
import isSubsetOf from "./module-Of_4.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_4.js")("isSubsetOf"),
  },
  {
    isSubsetOf,
  },
);
