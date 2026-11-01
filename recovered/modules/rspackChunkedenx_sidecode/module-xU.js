import n from "./module-A.js";
import difference from "./module-PW.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5.js")("difference"),
  },
  {
    difference,
  },
);
