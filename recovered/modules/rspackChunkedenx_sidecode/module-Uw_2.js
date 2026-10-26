import n from "./module-A.js";
import isSupersetOf from "./module-yo.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5.js")("isSupersetOf"),
  },
  {
    isSupersetOf,
  },
);
