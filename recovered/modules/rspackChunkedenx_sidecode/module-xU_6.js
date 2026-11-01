import n from "./module-A_7.js";
import difference from "./module-PW_6.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_6.js")("difference"),
  },
  {
    difference,
  },
);
