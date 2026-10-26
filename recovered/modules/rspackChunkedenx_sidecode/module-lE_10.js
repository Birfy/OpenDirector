import n from "./module-A_11.js";
import map from "./module-pq_10.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
    forced: require("./module-N_10.js"),
  },
  {
    map,
  },
);
