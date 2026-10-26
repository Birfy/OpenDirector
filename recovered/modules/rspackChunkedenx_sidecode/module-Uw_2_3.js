import n from "./module-A_4.js";
import isSupersetOf from "./module-yo_4.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_3.js")("isSupersetOf"),
  },
  {
    isSupersetOf,
  },
);
