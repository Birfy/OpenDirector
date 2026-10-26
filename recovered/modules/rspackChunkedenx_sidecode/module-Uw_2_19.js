import n from "./module-A_20.js";
import isSupersetOf from "./module-yo_20.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_19.js")("isSupersetOf"),
  },
  {
    isSupersetOf,
  },
);
