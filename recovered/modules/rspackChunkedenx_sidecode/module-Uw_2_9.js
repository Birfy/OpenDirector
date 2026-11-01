import n from "./module-A_10.js";
import isSupersetOf from "./module-yo_10.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_9.js")("isSupersetOf"),
  },
  {
    isSupersetOf,
  },
);
