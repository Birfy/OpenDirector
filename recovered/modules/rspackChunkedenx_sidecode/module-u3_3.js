"use strict";
require("./module-A_4.js")(
  {
    target: "WeakMap",
    proto: true,
    real: true,
    forced: true,
  },
  {
    upsert: require("./module-bw_3.js"),
  },
);
