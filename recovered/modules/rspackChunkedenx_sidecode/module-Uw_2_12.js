import $ from "./module-A_13.js";
import isSupersetOf from "./module-yo_13.js";
$(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5_12.js")("isSupersetOf"),
  },
  {
    isSupersetOf,
  },
);
