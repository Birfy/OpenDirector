"use strict";
require("g")(
  {
    target: "Math",
    stat: true,
    nonConfigurable: true,
    nonWritable: true,
  },
  {
    RAD_PER_DEG: 180 / Math.PI,
  },
);
