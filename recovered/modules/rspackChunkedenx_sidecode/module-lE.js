import n from "./module-A.js";
import map from "./module-pq.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
    forced: require("./module-N.js"),
  },
  {
    map,
  },
);
