import n from "./module-A_9.js";
import isSubsetOf from "./module-Of_8.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_8.js")("isSubsetOf"),
  },
  {
    isSubsetOf,
  },
);
