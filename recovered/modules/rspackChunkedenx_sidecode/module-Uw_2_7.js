import n from "./module-A_8.js";
import isSupersetOf from "./module-yo_8.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_7.js")("isSupersetOf"),
  },
  {
    isSupersetOf,
  },
);
