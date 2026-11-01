"use strict";
require("g")(
  {
    target: "AsyncIterator",
    name: "indexed",
    proto: true,
    real: true,
    forced: true,
  },
  {
    asIndexedPairs: require("fO"),
  },
);
