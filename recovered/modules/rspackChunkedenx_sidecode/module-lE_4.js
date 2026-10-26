import n from "./module-A_5.js";
import map from "./module-pq_4.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
    forced: require("./module-N_4.js"),
  },
  {
    map,
  },
);
