import n from "./module-A_24.js";
import isSupersetOf from "./module-yo_24.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_23.js")("isSupersetOf"),
  },
  {
    isSupersetOf,
  },
);
