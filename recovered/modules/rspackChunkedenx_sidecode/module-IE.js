import n from "./module-A.js";
import isDisjointFrom from "./module-XL_2.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5.js")("isDisjointFrom"),
  },
  {
    isDisjointFrom,
  },
);
