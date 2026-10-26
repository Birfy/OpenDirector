"use strict";
require("./module-A_6.js")(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    upsert: require("./module-bw_5.js"),
  },
);
