import n from "./module-A_23.js";
import isSupersetOf from "./module-yo_23.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_22.js")("isSupersetOf"),
  },
  {
    isSupersetOf,
  },
);
