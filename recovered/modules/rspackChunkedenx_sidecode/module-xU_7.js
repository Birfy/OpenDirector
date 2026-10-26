import n from "./module-A_8.js";
import difference from "./module-PW_7.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_7.js")("difference"),
  },
  {
    difference,
  },
);
