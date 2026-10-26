import n from "./module-A_7.js";
import isSupersetOf from "./module-yo_7.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_6.js")("isSupersetOf"),
  },
  {
    isSupersetOf,
  },
);
