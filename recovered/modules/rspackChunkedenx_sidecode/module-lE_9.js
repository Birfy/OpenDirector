import n from "./module-A_10.js";
import map from "./module-pq_9.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
    forced: require("./module-N_9.js"),
  },
  {
    map,
  },
);
