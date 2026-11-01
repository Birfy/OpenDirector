"use strict";
require("./module-A_3.js")(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    upsert: require("./module-bw_2.js"),
  },
);
