import n from "./module-A_15.js";
import difference from "./module-PW_14.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_14.js")("difference"),
  },
  {
    difference,
  },
);
