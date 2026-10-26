import n from "./module-A_11.js";
import isSupersetOf from "./module-yo_11.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_10.js")("isSupersetOf"),
  },
  {
    isSupersetOf,
  },
);
