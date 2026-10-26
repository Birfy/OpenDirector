import n from "./module-A_5.js";
import isSupersetOf from "./module-yo_5.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_4.js")("isSupersetOf"),
  },
  {
    isSupersetOf,
  },
);
