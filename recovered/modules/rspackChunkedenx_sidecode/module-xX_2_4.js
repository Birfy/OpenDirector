"use strict";
require("./module-A_5.js")(
  {
    target: "Math",
    stat: true,
    nonConfigurable: true,
    nonWritable: true,
  },
  {
    DEG_PER_RAD: Math.PI / 180,
  },
);
