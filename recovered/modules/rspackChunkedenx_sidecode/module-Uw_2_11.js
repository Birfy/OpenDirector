import n from "./module-A_12.js";
import isSupersetOf from "./module-yo_12.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_11.js")("isSupersetOf"),
  },
  {
    isSupersetOf,
  },
);
