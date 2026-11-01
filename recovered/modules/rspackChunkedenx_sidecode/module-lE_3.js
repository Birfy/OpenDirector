import n from "./module-A_4.js";
import map from "./module-pq_3.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
    forced: require("./module-N_3.js"),
  },
  {
    map,
  },
);
