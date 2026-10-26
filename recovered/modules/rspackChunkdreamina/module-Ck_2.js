"use strict";
require("g")(
  {
    target: "Iterator",
    name: "indexed",
    proto: true,
    real: true,
    forced: true,
  },
  {
    asIndexedPairs: require("rI"),
  },
);
