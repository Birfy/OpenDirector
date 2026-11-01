import n from "./module-A_9.js";
import difference from "./module-PW_8.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_8.js")("difference"),
  },
  {
    difference,
  },
);
