"use strict";
require("./module-A_5.js")(
  {
    target: "Map",
    proto: true,
    real: true,
    name: "upsert",
    forced: true,
  },
  {
    updateOrInsert: require("./module-bw_4.js"),
  },
);
