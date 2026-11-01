import n from "./module-A.js";
import union from "./module-Yy.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-U5.js")("union"),
  },
  {
    union,
  },
);
