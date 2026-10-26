"use strict";
require("g")(
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
