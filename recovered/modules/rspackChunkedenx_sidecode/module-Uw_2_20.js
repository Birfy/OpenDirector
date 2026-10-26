import n from "./module-A_21.js";
import isSupersetOf from "./module-yo_21.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_20.js")("isSupersetOf"),
  },
  {
    isSupersetOf,
  },
);
