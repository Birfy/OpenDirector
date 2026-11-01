import n from "./module-A_11.js";
import difference from "./module-PW_10.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_10.js")("difference"),
  },
  {
    difference,
  },
);
