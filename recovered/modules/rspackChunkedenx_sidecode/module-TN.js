import n from "./module-A.js";
import map from "./module-el.js";
n(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
    forced: require("./module-N.js"),
  },
  {
    map,
  },
);
