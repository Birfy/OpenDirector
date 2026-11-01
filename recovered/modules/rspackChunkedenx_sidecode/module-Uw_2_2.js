import n from "./module-A_3.js";
import isSupersetOf from "./module-yo_3.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_2.js")("isSupersetOf"),
  },
  {
    isSupersetOf,
  },
);
