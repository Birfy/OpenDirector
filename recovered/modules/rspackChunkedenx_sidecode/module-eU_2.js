import n from "./module-A.js";
import isSubsetOf from "./module-Of.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5.js")("isSubsetOf"),
  },
  {
    isSubsetOf,
  },
);
