"use strict";
require("./module-A_4.js")(
  {
    target: "Map",
    proto: true,
    real: true,
    name: "upsert",
    forced: true,
  },
  {
    updateOrInsert: require("./module-bw_3.js"),
  },
);
