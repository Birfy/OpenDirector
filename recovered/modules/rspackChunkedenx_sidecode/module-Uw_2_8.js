import n from "./module-A_9.js";
import isSupersetOf from "./module-yo_9.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_8.js")("isSupersetOf"),
  },
  {
    isSupersetOf,
  },
);
