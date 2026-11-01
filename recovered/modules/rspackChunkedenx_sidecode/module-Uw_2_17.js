import n from "./module-A_18.js";
import isSupersetOf from "./module-yo_18.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_17.js")("isSupersetOf"),
  },
  {
    isSupersetOf,
  },
);
