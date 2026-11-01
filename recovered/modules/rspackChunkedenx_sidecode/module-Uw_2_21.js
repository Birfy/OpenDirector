import n from "./module-A_22.js";
import isSupersetOf from "./module-yo_22.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_21.js")("isSupersetOf"),
  },
  {
    isSupersetOf,
  },
);
