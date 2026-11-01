import n from "./module-A_6.js";
import isSupersetOf from "./module-yo_6.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_5.js")("isSupersetOf"),
  },
  {
    isSupersetOf,
  },
);
