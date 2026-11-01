import n from "./module-A_14.js";
import isSupersetOf from "./module-yo_14.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_13.js")("isSupersetOf"),
  },
  {
    isSupersetOf,
  },
);
