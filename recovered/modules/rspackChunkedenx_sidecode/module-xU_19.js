import n from "./module-A_20.js";
import difference from "./module-PW_19.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_19.js")("difference"),
  },
  {
    difference,
  },
);
