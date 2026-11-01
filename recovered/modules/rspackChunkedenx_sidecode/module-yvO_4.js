"use strict";
require("./module-A_5.js")(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    upsert: require("./module-bw_4.js"),
  },
);
