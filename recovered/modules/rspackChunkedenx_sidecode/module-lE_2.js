import n from "./module-A_3.js";
import map from "./module-pq_2.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
    forced: require("./module-N_2.js"),
  },
  {
    map,
  },
);
