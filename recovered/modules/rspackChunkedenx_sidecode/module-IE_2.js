import n from "./module-A_3.js";
import isDisjointFrom from "./module-XL_2_2.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_2.js")("isDisjointFrom"),
  },
  {
    isDisjointFrom,
  },
);
