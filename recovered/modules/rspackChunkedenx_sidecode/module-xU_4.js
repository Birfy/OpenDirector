import n from "./module-A_5.js";
import difference from "./module-PW_4.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_4.js")("difference"),
  },
  {
    difference,
  },
);
