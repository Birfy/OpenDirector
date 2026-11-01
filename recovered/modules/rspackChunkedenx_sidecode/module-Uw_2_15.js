import n from "./module-A_16.js";
import isSupersetOf from "./module-yo_16.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_15.js")("isSupersetOf"),
  },
  {
    isSupersetOf,
  },
);
