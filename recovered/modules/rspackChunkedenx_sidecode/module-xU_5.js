import n from "./module-A_6.js";
import difference from "./module-PW_5.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_5.js")("difference"),
  },
  {
    difference,
  },
);
