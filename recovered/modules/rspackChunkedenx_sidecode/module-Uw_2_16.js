import n from "./module-A_17.js";
import isSupersetOf from "./module-yo_17.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_16.js")("isSupersetOf"),
  },
  {
    isSupersetOf,
  },
);
