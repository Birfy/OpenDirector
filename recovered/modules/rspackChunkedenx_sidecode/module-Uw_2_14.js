import n from "./module-A_15.js";
import isSupersetOf from "./module-yo_15.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_14.js")("isSupersetOf"),
  },
  {
    isSupersetOf,
  },
);
