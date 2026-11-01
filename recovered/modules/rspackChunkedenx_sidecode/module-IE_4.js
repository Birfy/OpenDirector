import n from "./module-A_5.js";
import isDisjointFrom from "./module-XL_2_4.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_4.js")("isDisjointFrom"),
  },
  {
    isDisjointFrom,
  },
);
